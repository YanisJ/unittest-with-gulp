var util = require('../js/util.js');
var expect = require('chai').expect;

var isArray = util[0];

describe('判断对象是否为数组的测试', function(){
  it('[1,2,3] 应该是一个数组', function(){
    expect(isArray([1,2,3])).to.be.ok;
  });
});