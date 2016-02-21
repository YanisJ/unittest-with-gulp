/**
 *
 * @file util.js
 *
 */



/**
 * 判断对象的数据类型
 *
 * @param {*} variable 任意类型的variable
 * @return {string} 数据类型
 */
function getType ( variable ) {
    return Object.prototype.toString.call(variable).match(/\s(.+)\]/)[1].toLowerCase();
}


/**
 * 判断变量是否是数组
 *
 * @param {*} arr
 * @return {boolean}
 */
function isArray ( arr ) {
    return getType(arr) === "array";
}


/**
 * 判断变量是否是函数
 *
 * @param {*} fn
 * @return {boolean}
 */
function isFunction ( fn ) {
    return getType(fn) === "function";
}

module.exports = [isArray, isFunction];