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
    
    _find(condition = {}, length = 0) {
        if (check.not.object(condition) || check.not.number(length))throw new TypeError();
        length = Math.floor(length);
        const found = {};
        let foundLength = 0;
        const objs = db.getData(this._path);
        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];
            let keys = Object.keys(condition);
            let isContent = true;
            for (let key of keys) {
                if (check.not.instance(condition[key], RegExp))return [];
                if (condition[key].test(obj[key]) == false) {
                    isContent = false;
                    break;
                }
            }
            if (isContent) {
                found[i] = obj;
                foundLength++;
                if (foundLength == length) {
                    return found;
                }
            }
        }
        return found;
    }
    
    find(condition, projection, length) {
        if (check.not.undefined(length)) {
            if (check.not.object(projection))throw new TypeError();
        }
        else {
            length = projection;
            projection = null;
        }
        return new Promise((resolve, reject) => {
            const projected = [];
            const found = this._find(condition, length);
            const indexes = Object.keys(found);
            if (projection) {
                const keys = Object.keys(projection);
                for (let i of indexes) {
                    let pro = {};
                    for (let key of keys) {
                        pro[key] = found[i][key];
                    }
                    projected.push(pro);
                }
            }
            else {
                for (let i of indexes) {
                    projected.push(found[i]);
                }
            }
            resolve(projected);
        });
    }
    
    update(condition, doc, length) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    
    remove(condition, length) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
module.exports = Model;