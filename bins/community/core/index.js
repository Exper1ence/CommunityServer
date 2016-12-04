/**
 * Created by Exper1ence on 2016/12/4.
 */
const checker = require('./checker');
const Models = require('./models');
const Path = require('path');
const assert = require('assert');
const operations = require('dynamic-object-generator')(Path.resolve(__dirname, 'operations'));
//user rank checker ??
module.exports = (user, info) => {
    let operation = operations[info.action];
    if (!operation)return Promise.resolve({done: false, msg: "无效操作"});
    let checks = operation.checks;
    let result;
    _.findKey(checks, (msg, check) => {
        result = checker({msg, check, value: info[check]});
        return result;
    });
    if (result)return Promise.resolve(result);
    return operation.handle({user, info, Models});
};