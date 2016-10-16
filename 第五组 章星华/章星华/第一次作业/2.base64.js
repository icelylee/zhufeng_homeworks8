/**
 * Created by FakerZ on 16/10/15.
 */
function base64(string) {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str+=str.toLowerCase();
    str+='0123456789';
    str+='+/';
    var buffer = new Buffer(string);
    var arr = Array.prototype.slice.call(buffer).map(function (item) {
        return item.toString(2);
    });
    var str1 = arr.toString();
    console.log(str1);//56ug5pif5Y2O
}
base64('章星华');