import {host} from "./request.config.js";

export default function(url, params, type = "GET") {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var data = new FormData();

    var formdata = function(args) {
      for (var i in args) {
        data.append(i, args[i]);
      }
    };
    params ? formdata(data) : null;

    xhr.timeout = 3000;
    xhr.responseType = "json";

    xhr.open(type, host + url, true);
    xhr.onload = function(res) {
      var json = xhr.response;
      resolve(json);
    };

    xhr.onerror = function(e) {
      console.error("网络错误");
      reject(e);
    };

    xhr.send(data);
  });
}
