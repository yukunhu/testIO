webpackJsonp([9],{C6Fz:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"content-con"},[n("img",{attrs:{src:t.src,alt:"404"}}),t._v(" "),n("div",{staticClass:"text-con1 text-center margin-t-20"},[t._v("\n      "+t._s(t.code)+" "+t._s(t.desc)+"\n    ")]),t._v(" "),n("div",[n("Button",{attrs:{size:"large",type:"text"},on:{click:t.backHome}},[t._v("返回首页")]),t._v(" "),n("Button",{attrs:{size:"large",type:"text"},on:{click:t.backPrev}},[t._v("返回上一页("+t._s(t.second)+"s)")])],1)])])},staticRenderFns:[]};e.a=r},ktia:function(t,e){},"l/dC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,c=n("rmFn"),a=(r=c)&&r.__esModule?r:{default:r};e.default={name:"error_404",components:{},data:function(){return{src:a.default,code:"404",desc:"Oh~~您的页面好像飞走了~",second:3,timer:null}},methods:{backHome:function(){this.$router.replace({name:"orderList"})},backPrev:function(){this.$router.back()}},mounted:function(){var t=this;this.timer=setInterval(function(){0===t.second?t.backPrev():t.second--},1e3)},beforeDestroy:function(){clearInterval(this.timer)}}},rmFn:function(t,e,n){t.exports=n.p+"static/img/error-404.c192b19.png"},thLP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("l/dC"),c=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);var s=n("C6Fz");var o=function(t){n("ktia")},i=n("C7Lr")(c.a,s.a,!1,o,"data-v-4d19b2b0",null);e.default=i.exports}});
//# sourceMappingURL=9.bf792ced0da24d9675a3.js.map