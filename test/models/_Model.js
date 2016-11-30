/**
 * Created by Exper1ence on 2016/11/30.
 */
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
            throw new Error();
            resolve();
        });
    }
    
    find() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    
    update() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    
    remove() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
module.exports = Model;