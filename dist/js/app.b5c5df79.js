(function(e){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],m=0,d=[];m<o.length;m++)a=o[m],r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"22ac":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a=(n("034f"),n("2877")),o={},c=Object(a["a"])(o,r,s,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"submit-info"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"submit-content"},[e._m(0),n("div",{staticClass:"conten-middle"},[n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice"},[e._v("Email：")]),n("div",{staticClass:"content-value"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"value-info",domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice-small"}),n("div",{staticClass:"erro-value"},[e._v("\n                        "+e._s(e.emailErro.name)+"\n                    ")])]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice"},[e._v("Unique Reference Number (URN)：")]),n("div",{staticClass:"content-value"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.referNum,expression:"referNum"}],staticClass:"value-info",domProps:{value:e.referNum},on:{input:function(t){t.target.composing||(e.referNum=t.target.value)}}})])]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice-small"}),n("div",{staticClass:"erro-value"},[e._v("\n                        "+e._s(e.propErro.name)+"\n                    ")])]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice"},[e._v("Calendar (select a week)：")]),n("div",{staticClass:"content-value"},[n("el-date-picker",{staticClass:"value-info-time",staticStyle:{width:"280px",height:"40px"},attrs:{type:"week",placeholder:"select a week",format:e.startTime,"value-format":"yyyy-MM-dd","picker-options":e.pickerOption},on:{change:e.changeTime},model:{value:e.chooseTime,callback:function(t){e.chooseTime=t},expression:"chooseTime"}})],1)]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice-small"}),n("div",{staticClass:"erro-value"},[e._v("\n                        "+e._s(e.timeErro.name)+"\n                    ")])]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice"},[e._v("Weekly Turnover (£)：")]),n("div",{staticClass:"content-value"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.weekNum,expression:"weekNum"}],staticClass:"value-info",domProps:{value:e.weekNum},on:{input:[function(t){t.target.composing||(e.weekNum=t.target.value)},e.changeNum]}})])]),n("div",{staticClass:"middle-item"},[n("div",{staticClass:"content-notice-small"}),n("div",{staticClass:"erro-value"},[e._v("\n                        "+e._s(e.weekErro.name)+"\n                    ")])])]),n("div",{staticClass:"content-bottom"},[n("div",{staticClass:"action-info"},[n("div",{staticClass:"cancel",on:{click:e.resetInfo}},[e._v("Clear")]),n("div",{staticClass:"sure",on:{click:e.makeSure}},[e._v("Submit")])])])])]),e.showSure?n("div",{staticClass:"dialog-window"},[n("div",{staticClass:"submit-content"},[e._m(1),e._m(2),n("div",{staticClass:"content-bottom-two"},[n("div",{staticClass:"action-info-two"},[n("div",{staticClass:"cancel",staticStyle:{"margin-right":"40px"},on:{click:e.closeSure}},[e._v("No")]),n("div",{staticClass:"sure",on:{click:e.submit}},[e._v("Yes")])])])])]):e._e(),e.showOkay?n("div",{staticClass:"dialog-window"},[n("div",{staticClass:"submit-content"},[e._m(3),e._m(4),n("div",{staticClass:"sure-agein",on:{click:e.goHome}},[e._v("Ok")])])]):e._e()])},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"conten-top"},[i("img",{staticClass:"logo-img",attrs:{src:n("bb74")}}),i("div",{staticClass:"logo-notice"},[e._v("Property Revenue Management System")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"conten-top"},[i("img",{staticClass:"logo-img",attrs:{src:n("bb74")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conten-middle"},[n("div",{staticClass:"sure-notice"},[e._v("You are about to submit")]),n("div",{staticClass:"sure-notice"},[e._v("your weekly revenue update.")]),n("div",{staticClass:"sure-notice",staticStyle:{"font-weight":"bold"}},[e._v("Would you like to proceed?")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"conten-top"},[i("img",{staticClass:"logo-img",attrs:{src:n("bb74")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conten-middle"},[n("div",{staticClass:"sure-notice"},[e._v("Thank you for submitting")]),n("div",{staticClass:"sure-notice"},[e._v("your weekly update.")]),n("div",{staticClass:"sure-notice",staticStyle:{"font-weight":"bold"}},[e._v("You will receive a")]),n("div",{staticClass:"sure-notice",staticStyle:{"font-weight":"bold"}},[e._v("confirmation email shortly.")])])}],v=(n("a481"),n("bc3a")),f=n.n(v),h=n("2f62"),p={openId:function(e){return e.user.openId},userInfo:function(e){return e.user.userInfo},loginStatus:function(e){return e.user.loginStatus}},g=p,w={},_={},k={},C={namespaced:!0,state:w,mutations:_,actions:k},E=(n("96cf"),n("1da1")),b=n("a78e"),y=n.n(b),S=n("335a"),N="Login-Status",T="User-Info",O="User-OpenId";function x(){return y.a.get(N)||0}function I(e){return y.a.set(N,e,{expires:7}),e}function P(){return y.a.remove(N),""}function M(){return S["a"].get(T,{})}function U(e){return S["a"].set(T,e),e}function D(){return S["a"].remove(T),{}}function R(){return S["a"].get(O,{})}function j(e){return S["a"].set(O,e),e}function $(){return S["a"].remove(O),{}}function F(){for(var e=["130","131","132","133","135","137","138","170","173","181","186","187","189"],t=parseInt(10*Math.random()),n=e[t],i=0;i<8;i++)n+=Math.floor(10*Math.random());return n}var L={loginStatus:x(),openId:R(),userInfo:M()},A={SET_USERINFO:function(e,t){e.userInfo=t},SET_OPENID:function(e,t){e.openId=t},SET_LOGIN_STATUS:function(e,t){e.loginStatus=t}},W={loginWechatAuth:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,n){var i,r,s,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=t.commit,r={code:n},e.next=4,(void 0)(r);case 4:if(s=e.sent,0!==s.code){e.next=18;break}return i("SET_OPENID",j(s.data.openId)),e.next=9,(void 0)();case 9:if(a=e.sent,400001!==a.code){e.next=17;break}return e.next=13,(void 0)({telephone:F()});case 13:o=e.sent,0!==o.code?i("SET_LOGIN_STATUS",1):i("SET_USERINFO",U(o.data)),e.next=18;break;case 17:i("SET_USERINFO",U(a.data));case 18:return e.abrupt("return",new Promise(function(e,t){e(s)}));case 19:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),setLoginStatus:function(e,t){var n=e.commit;0!==t&&1!==t||($(),D(),n("SET_OPENID",null),n("SET_USERINFO",null)),n("SET_LOGIN_STATUS",I(t))},fedLogOut:function(){$(),D(),P()},getUserByOpenId:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,n){var i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=t.commit,e.next=3,(void 0)(n);case 3:r=e.sent,0===r.code&&i("SET_USERINFO",U(r.data));case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},Y={namespaced:!0,state:L,mutations:A,actions:W};i["default"].use(h["a"]);var B=new h["a"].Store({modules:{app:C,user:Y},getters:g}),G=B,H=f.a.create({baseURL:"/api",timeout:6e3}),q=function(e){return e.response&&e.response.status,Promise.reject(e.response)};H.interceptors.request.use(function(e){var t=G.getters.openId;return t&&(e.headers["openId"]=t),e},q),H.interceptors.response.use(function(e){return e.data},q);function J(e){return H({url:"/user/check",method:"post",data:e})}function z(e){return H({url:"/user/upload",method:"post",data:e})}var K=n("5c96"),Q=n.n(K),V={name:"Home",data:function(){return{showSure:!1,showOkay:!1,email:"",referNum:"",weekNum:"",chooseTime:"",pickerOption:{firstDayOfWeek:1},startTime:"",emailErro:{show:!1,name:""},propErro:{show:!1,name:""},timeErro:{show:!1,name:""},weekErro:{show:!1,name:""},loading:!1}},created:function(){},methods:{checkNum:function(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)},changeNum:function(e){var t=e.currentTarget.value.replace(/,/g,""),n=-1!==t.indexOf("£");if(t=t.replace(/£/g,""),!this.checkNum(t))return console.log("gooood",t),void(this.weekErro.name="Please input correct weekly turnover");this.weekErro.name="",console.log(t),t&&t.length&&(this.weekNum=parseFloat(t).toLocaleString("en-US")),n&&(this.weekNum=this.weekNum+"£")},changeTime:function(e){this.startTime=this.getNextDate(e,-1),this.chooseTime=this.getNextDate(e,-1)+"T00:00:00+08:00"},getNextDate:function(e,t){var n=new Date(e);n.setDate(n.getDate()+t);var i=n.getFullYear(),r=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,s=n.getDate()<10?"0"+n.getDate():n.getDate();return i+"-"+r+"-"+s},resetInfo:function(){this.email="",this.chooseTime="",this.referNum="",this.weekNum="",this.emailErro.name="",this.propErro.name="",this.timeErro.name="",this.weekErro.name=""},makeSure:function(){if(0==this.email.length?(this.emailErro.name="Please input your eamil",this.emailErro.show=!0):(this.emailErro.name="",this.emailErro.show=!1),0==this.referNum.length?(this.propErro.name="Please input  reference number",this.propErro.show=!0):(this.propErro.name="",this.propErro.show=!1),0==this.chooseTime.length?(this.timeErro.name="Please select a week",this.timeErro.show=!0):(this.timeErro.name="",this.timeErro.show=!1),0==this.weekNum.length?(this.weekErro.name="Please input weekly turnover",this.weekErro.show=!0):(this.weekErro.name="",this.weekErro.show=!1),0!=this.email.length&&0!=this.referNum.length&&0!=this.chooseTime.length&&0!=this.weekNum.length){var e=this.weekNum.replace(/,/g,"");if(e=e.replace(/£/g,""),this.checkNum(e)){var t=this,n={email:this.email,shop_union_id:this.referNum,turnover:parseFloat(e),week_time:this.chooseTime};this.loading=!0,J(n).then(function(e){0==e.error_item.length&&(t.showSure=!0),"week_time"===e.error_item&&(t.timeErro.name="Please select correct week"),"email"===e.error_item&&(t.emailErro.name="Please check your email address"),"shop_union_id"===e.error_item&&(t.propErro.name="Please check your URN"),"turnover"===e.error_item&&(t.weekErro.name="Please input correct weekly turnover"),t.loading=!1},function(e){t.loading=!1})}else this.weekErro.name="Please input correct weekly turnover"}},submit:function(){var e=this,t={email:this.email,shop_union_id:this.referNum,turnover:parseFloat(this.weekNum),week_time:this.chooseTime};this.loading=!0,z(t).then(function(t){e.showSure=!1,e.showOkay=!0,e.loading=!1},function(t){t.data.err_desc&&e.$message.error(t.data.err_desc),e.loading=!1})},goHome:function(){this.resetInfo(),this.showOkay=!1},closeSure:function(){this.showSure=!1}}},X=V,Z=(n("80b6"),Object(a["a"])(X,m,d,!1,null,"3380e663",null));Z.options.__file="Index.vue";var ee=Z.exports;i["default"].use(l["a"]);var te=new l["a"]({mode:"history",routes:[{path:"/",name:"index",component:ee}]}),ne=(n("0fae"),n("b2d6")),ie=n.n(ne);K["Message"].install=function(e,t){e.prototype.$message=K["Message"]},i["default"].use(Q.a,{locale:ie.a}),i["default"].component(K["Button"].name,K["Button"]),i["default"].use(K["Message"]),i["default"].use(K["DatePicker"]),i["default"].config.productionTip=!1,new i["default"]({router:te,store:G,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,n){},"80b6":function(e,t,n){"use strict";var i=n("22ac"),r=n.n(i);r.a},bb74:function(e,t,n){e.exports=n.p+"img/brand-logo.4dd9784b.png"}});
//# sourceMappingURL=app.b5c5df79.js.map