/**
 * Created by Exper1ence on 2016/11/30.
 */
const DB = require('nedb');

class Model {
    constructor(filename) {
        this._db = new DB({filename, autoload: true,});
    }
    
    insert(doc) {
        return this._operate('insert', doc);
    }
    
    find(query, projection) {
        return this._operate('find', query, projection);
    }
    
    findOne(query, projection) {
        return this._operate('findOne', query, projection);
    }
    
    update(query, update, options) {
        return this._operate('update', query, update, options);
    }
    
    remove(query, options={}) {
        return this._operate('remove', query, options);
    }
    
    _operate(name, ...args) {
        return new Promise((resolve, reject) => {
            args.push((err, data) => {
                if (err) reject(err);
                resolve(data);
            });
            this._db[name].apply(this._db, args);
        });
    }
}


module.exports = Model;