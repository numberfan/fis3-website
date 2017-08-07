/**
 * Created by chenfan on 2017/8/2.
 */
var Math = {
    area: function (w, h) {
        return w*h;
    },
    perimeter: function (w, h) {
        return 2*(w+h)
    }
}

module.exports = Math;

console.log("我在util文件内")