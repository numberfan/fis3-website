/**
 * Created by chenfan on 2017/7/28.
 */

/*commonJs引入文件*/
var mathCommonjs = require('../../modules/util');
console.log(mathCommonjs)
console.log("hello index" + mathCommonjs.area(2, 8))

/*inline引入文件*/
__inline('util.js');
console.log(Math);
console.log(Math.area(1,20))

__inline('test.js')

var arr = {
    data: [
        {name: "张三", age: 20},
        {name: "李四"},
        {name: "王五"},
        {name: "黑三"},
        {name: "00"},
    ]
}
console.log($('#newsList'))
console.log(arr.data)
var _htmlOutput = window.jsrender.templates($('#newsList').html()).render(arr);
$(".list-con").html(_htmlOutput);

let a = 23;
const b = 24;
let arr01 = [22, 33, 55, 666];
console.log(a, b);
console.log(...arr01)


function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
f(undefined, 1) // [1, 1]

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 