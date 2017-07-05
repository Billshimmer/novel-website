import config from "./request.config.js";

export default function(url, params, type) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var data = new FormData();

    var formdata = function(params) {
        for (var i in params) {
            if (args.hasOwnProperty(i)) {
                data.append(i, args[i]);
            }
      }
    };
    params ? formdata(params) : null;
    type = type || 'GET';

    xhr.timeout = 3000;
    xhr.responseType = "json";

    xhr.open(type, config.host + url, true);
    xhr.onload = function (res) {
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
