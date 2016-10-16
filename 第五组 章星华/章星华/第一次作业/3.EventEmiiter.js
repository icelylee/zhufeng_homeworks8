/**
 * Created by FakerZ on 16/10/15.
 */
function EventEmitter() {
    this._events = {};
    this.smile = "笑";
}
EventEmitter.prototype.on = function (eventName, callback) {
    var arr = this._events[eventName];
    if (arr) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};
EventEmitter.prototype.off = function (eventName, callback) {
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return item != callback;//过滤掉满足条件的callback
    })
};
EventEmitter.prototype.emit = function (eventName) {
    var args = Array.from(arguments).slice(1);//从索引1开始截取所有的参数
    this._events[eventName].forEach((item) => {
        item.apply(this, args);
    })
};
EventEmitter.prototype.once = function (eventName, callback) {
    function one() {
        var args = Array.prototype.slice.call(arguments);
        callback.apply(this, args);
        this.off(eventName, one);
    }

    this.on(eventName, one);
};
function Girl() {
    EventEmitter.call(this);
}
function eat(a, b) {
    console.log('吃' + a, '吃' + b, this.smile);
}
function drink() {
    console.log('喝');
}
var util = require('util');
util.inherits(Girl, EventEmitter);
var girl = new Girl();
// girl.on('吃', eat);
// girl.off('吃',eat);
girl.once('吃', eat);
girl.emit('吃', '苹果', '桃子');