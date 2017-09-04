import {getLogin} from '../../modules/util.es6'
let arr = [22, 33, 44, 55, 66]
let user = [
  {item: '张三'},
  {item: '张三'},
  {item: '张三'},
  {item: '张三'},
  {item: '张三'},
  {item: '张三'},
  {item: '张三'}
]
getLogin()
document.querySelector('.con01').innerHTML += [...arr]
/*var jsviews = window.jsviews || window.jQuery;
var template = jsviews.templates('#indexList')
var htmlOut = template.render(user)
document.querySelector('.con02').innerHTML += htmlOut*/
