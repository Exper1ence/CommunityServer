/**
 * Created by Exper1ence on 2016/11/30.
 */
const check = require('check-types');
const JsonDb = require('node-json-db');
const db = new JsonDb('database', true, true);

class Model {
    constructor(name) {
        this.name = name;
        this._path = `/${name}`;
        this._savePath = `${this._path}[]`;
    }
    
    _save(doc) {
        return new Promise((resolve, reject) => {
            db.push(this._savePath, doc);
            resolve();
        });
    }
    
    _find(conditions, length = 0, cb) {
        if (check.not.object(conditions) || check.not.number(length))throw new TypeError();
        length = Math.floor(length);
        const found = [];
        const foundIndexes = [];
        db.getData(this._path).find((obj,i) => {
            for (let condition in conditions) {
                if (conditions.hasOwnProperty(condition)) {
                    if (check.not.instance(conditions[condition], RegExp))return true;
                    if (conditions[condition].test(obj[condition]) == false) {
                        return false;
                    }
                }
            }
            found.push(obj);
            foundIndexes.push(i);
            return foundIndexes.length == length;
        });
        for (let i = 0; i < found.length; i++) {
            cb(found[i], foundIndexes[i]);
        }
    }
    
    find(conditions, projection, length) {
        return new Promise((resolve) => {
            if (check.not.undefined(length)) {
                if (check.not.object(projection))throw new TypeError();
            }
            else {
                length = projection;
                projection = null;
            }
            const projected = [];
            this._find(conditions, length, (obj) => {
                if (projection) {
                    let pro = {};
                    for (let key in projection) {
                        if (projection.hasOwnProperty(key)) {
                            pro[key] = obj[key];
                        }
                    }
                    projected.push(pro);
                }
                else {
                    projected.push(obj);
                }
            });
            resolve(projected);
        });
    }
    
    update(conditions, doc, length) {
        return new Promise((resolve) => {
            if (check.undefined(doc)) throw new TypeError();
            this._find(conditions, length, (obj) => {
                for (let key in doc) {
                    if (doc.hasOwnProperty(key)) {
                        obj[key] = doc[key];
                    }
                }
            });
            resolve();
        });
    }
    
    remove(conditions, length) {
        return new Promise((resolve) => {
            let deleted = 0;
            this._find(conditions, length, (obj, i) => {
                db.delete(`${this._path}[${i - deleted++}]`);
            });
            resolve();
        });
    }
}
module.exports = Model;