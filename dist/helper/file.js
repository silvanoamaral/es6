"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getUsefulContents;
var XMLHttpRequest = require('xhr2');

var getJSON = function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(xhr.method || "GET", url);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            //successHandler(xhr.response);
            callback(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }
    };
    xhr.send();
};

function getUsefulContents(url, callback) {
    getJSON(url, function (data) {
        return callback(JSON.parse(data));
    });
}