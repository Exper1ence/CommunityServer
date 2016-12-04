/**
 * Created by Exper1ence on 2016/12/4.
 */
const checks = require('dynamic-object-generator')(__dirname);

module.exports = ({msg, check, value}) => {
    return checks[check].getResult({value, msg});
};