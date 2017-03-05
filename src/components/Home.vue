<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2></h2>
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lang"></use>
        </svg>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhu"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>
<script>
import request from "../../request.js"

export default {
  name: 'Home',
  data () {
    return {
      msg: '小说阅读网',
      data: [

      ],
    }
  },
  created: function(){
    var data;
    request("http://45.32.51.15:9000/api/cates", "GET").then(res=>{
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
