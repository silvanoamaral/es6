let XMLHttpRequest = require('xhr2');

const getJSON = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open(xhr.method || "GET", url);
    xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status < 300) {
            //successHandler(xhr.response);
            callback(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }        
    };
    xhr.send();
}

export default function getUsefulContents(url, callback){
    getJSON(url, data => callback(JSON.parse(data)));
}