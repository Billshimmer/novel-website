import Vue from 'vue'
import LoadingModule from './Loading.vue'

/*vue文件为单独弹出的模块,js控制弹出隐藏状态以及初始状态*/
var LoadingTemplate = Vue.extend({
    template: '<div><loading-module V-bind:show.sync="ModuleShow"></loading-module></div>',
    components: {
        LoadingModule,
    }
})
var Loading = new LoadingTemplate({
    data: function () {
        return {
            ModuleShow: false,
        }
    },
    methods: {
        show() {
            this.ModuleShow = true
        },
        hidden() {
            this.ModuleShow = false
        }
    }
})
/*仅挂载一次*/
Loading.$once('mount', function (target) {
    if (!document.getElementById('loading')){
        let div = document.createElement('div');
        div.setAttribute('id', 'loading');
        document.body.appendChild(div);
    }
    target.$mount('#loading');
})

export default module = function(){
    this.Loading = Loading;
}
module.show = function show() {
    Loading.$emit('mount', Loading);
    Loading.show();
}
module.close = function close() {
    Loading.hidden();
}