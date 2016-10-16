/**
 * Created by FakerZ on 16/10/15.
 */
Buffer.myConcat = function (list, len) {
    if(list.length ==1 ){
        return list[0];
    }
    if (typeof len === 'undefined') {
        len=0;
        list.forEach(function (item) {
            len += item.length;
        });
    }
    var buffer = new Buffer(len), i = 0;
    list.forEach(function (item, index) {
        item.copy(buffer, i);
        i += item.length;
    });
    return buffer.slice(0, i);
};
var buf1 = new Buffer('一'), buf2 = new Buffer('二');
var buf3 = Buffer.myConcat([buf1,buf2],30);
console.log(buf3.toString());