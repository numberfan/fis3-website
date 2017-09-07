import {getLogin} from '../../modules/util.es'
let arr = [22, 33, 44, 55, 66]
var user = {
  datas: [
    {item: '张三'},
    {item: '张三33'},
    {item: '张三334'},
    {item: '张三555'},
    {item: '张三666'},
    {item: '张三777'},
    {item: '张三88'}
  ]
}
getLogin()
document.querySelector('.con01').innerHTML += [...arr]

/*var html = template('news-list', user);
console.log(html)*/

console.log(user)
for (var i = 0, len = user.length; i < len; i++) {
  console.log(user[i])
}
let aaa = 2222

var jsrender = window.jsrender
var tmpl = jsrender.templates($('#myTmpl').html());
var html = tmpl.render(user);
console.log(jsrender, html)

