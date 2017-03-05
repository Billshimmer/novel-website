import request from "../request.js";

export let Get = function () {
  let json = null;
  request("/api/cates", {}, "GET")
  .then(data => {
    console.log(data);
    json = data;
  }).catch(error => {
    console.log(error);
  })

  return json;
}