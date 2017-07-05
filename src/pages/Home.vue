<template>
  <div>
    <div class="nav">
      <div class="nav-bar">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kaola"></use>
          </svg>
        </span>
        <h1 class="title">{{ msg }}</h1>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-maotouying"></use>
          </svg>
        </span>
      </div>
      <div class="cate-list" >
        <a v-for="cate in cates" >{{ cate.name }}</a>
      </div>
      <div class="search">
        <input @focus="_onSearchPage" class="search-input" type="text" />
        <input @click="_onSearchPage" class="search-submit" type="submit" value="搜索" />
      </div>
      <a href="http://downloads2.txt99.com/d/file/p/txt/2017/%E7%9A%87%E5%91%BD%E9%9A%BE%E8%BF%9D.txt" 
         download="novel-text.txt">下载链接</a>
    </div>
  </div>
</template>

<script>
import {Get} from "../../service/cate.js";

export default {
  name: 'Home',
  data: function() {
    return {
      msg: '动物阅读网',
      cates: [],
    }
  },
  created: function(){
    Get().then(data=>{
      this.cates = data.cates;
    });
  },
  methods: {
    _onSearchPage: function(){
      console.log("linked to search page");
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.nav{
  width: 92%;
  margin: 0 auto;
  .nav-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
      text-align: center;
      font-size: 18px;
    }
  }
  .cate-list{
    padding: 10 10;
    text-align: center;
    border-bottom: 1px dashed #f5f5f5;
    border-top: 1px dashed #f5f5f5;
    background-color: #e7e7e7;
    a{
      cursor: pointer;
      padding: 4px 6px;
      margin: 5px 1px;
    }
  }
  .search{
    padding: 10px 10px;
    text-align: center;
  }
}


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
