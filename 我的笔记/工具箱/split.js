// 正则用法
//
var names = "Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// 准备两个模式的正则表达式放进数组里。
// 分割该字符串放进数组里。

// 匹配模式：匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
var pattern = /\s*;\s*/;

// 把通过上述匹配模式分割的字符串放进一个叫做nameList的数组里面。
var nameList = names.split(pattern);
console.log(nameList)
/*
    取余 整除 结果 0
    整除，除不尽的 为结果
*/


var a1 = 0
var a2 = 1
var a3 = 2
var b = 3

console.log(a1 % b)
console.log(a2 % b)
console.log(a3 % b)

console.log((a1 + 1 ) % b)
console.log((a2 + 1 ) % b)
console.log((a3 + 1 ) % b)
