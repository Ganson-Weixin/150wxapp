(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghupingjia/add-or-update"],{"0ed0":function(i,n,t){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(t("a34a"));function a(i){return i&&i.__esModule?i:{default:i}}function r(i,n,t,e,a,r,u){try{var o=i[r](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(e,a)}function u(i){return function(){var n=this,t=arguments;return new Promise((function(e,a){var u=i.apply(n,t);function o(i){r(u,e,a,o,c,"next",i)}function c(i){r(u,e,a,o,c,"throw",i)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("175c"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),caipinmingcheng:"",tupian:"",caipinpingjia:"",caipinzhiliang:"",fuwupingjia:"",pingyu:"",pingjiashijian:"",dianpuzhanghao:"",dianpumingcheng:"",zhanghao:"",xingming:"",userid:""},caipinpingjiaOptions:[],caipinpingjiaIndex:0,caipinzhiliangOptions:[],caipinzhiliangIndex:0,fuwupingjiaOptions:[],fuwupingjiaIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,tupian:!1,caipinpingjia:!1,caipinzhiliang:!1,fuwupingjia:!1,pingyu:!1,pingjiashijian:!1,dianpuzhanghao:!1,dianpumingcheng:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(e.default.mark((function n(t){var a,r,u,o;return e.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.ruleForm.pingjiashijian=this.$utils.getCurDateTime(),a=i.getStorageSync("nowTable"),n.next=4,this.$api.session(a);case 4:if(r=n.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.caipinpingjiaOptions="★,★★,★★★,★★★★,★★★★★".split(","),this.caipinzhiliangOptions="★,★★,★★★,★★★★,★★★★★".split(","),this.fuwupingjiaOptions="★,★★,★★★,★★★★,★★★★★".split(","),this.ruleForm.userid=i.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!t.id){n.next=19;break}return this.ruleForm.id=t.id,n.next=17,this.$api.info("yonghupingjia",this.ruleForm.id);case 17:r=n.sent,this.ruleForm=r.data;case 19:if(!t.cross){n.next=78;break}u=i.getStorageSync("crossObj"),n.t0=e.default.keys(u);case 22:if((n.t1=n.t0()).done){n.next=78;break}if(o=n.t1.value,"dingdanbianhao"!=o){n.next=28;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,n.abrupt("continue",22);case 28:if("caipinmingcheng"!=o){n.next=32;break}return this.ruleForm.caipinmingcheng=u[o],this.ro.caipinmingcheng=!0,n.abrupt("continue",22);case 32:if("tupian"!=o){n.next=36;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,n.abrupt("continue",22);case 36:if("caipinpingjia"!=o){n.next=40;break}return this.ruleForm.caipinpingjia=u[o],this.ro.caipinpingjia=!0,n.abrupt("continue",22);case 40:if("caipinzhiliang"!=o){n.next=44;break}return this.ruleForm.caipinzhiliang=u[o],this.ro.caipinzhiliang=!0,n.abrupt("continue",22);case 44:if("fuwupingjia"!=o){n.next=48;break}return this.ruleForm.fuwupingjia=u[o],this.ro.fuwupingjia=!0,n.abrupt("continue",22);case 48:if("pingyu"!=o){n.next=52;break}return this.ruleForm.pingyu=u[o],this.ro.pingyu=!0,n.abrupt("continue",22);case 52:if("pingjiashijian"!=o){n.next=56;break}return this.ruleForm.pingjiashijian=u[o],this.ro.pingjiashijian=!0,n.abrupt("continue",22);case 56:if("dianpuzhanghao"!=o){n.next=60;break}return this.ruleForm.dianpuzhanghao=u[o],this.ro.dianpuzhanghao=!0,n.abrupt("continue",22);case 60:if("dianpumingcheng"!=o){n.next=64;break}return this.ruleForm.dianpumingcheng=u[o],this.ro.dianpumingcheng=!0,n.abrupt("continue",22);case 64:if("zhanghao"!=o){n.next=68;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,n.abrupt("continue",22);case 68:if("xingming"!=o){n.next=72;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",22);case 72:if("userid"!=o){n.next=76;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,n.abrupt("continue",22);case 76:n.next=22;break;case 78:this.styleChange();case 79:case"end":return n.stop()}}),n,this)})));function t(i){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pingjiashijianConfirm:function(i){console.log(i),this.ruleForm.pingjiashijian=i.result,this.$forceUpdate()},caipinpingjiaChange:function(i){this.caipinpingjiaIndex=i.target.value,this.ruleForm.caipinpingjia=this.caipinpingjiaOptions[this.caipinpingjiaIndex]},caipinzhiliangChange:function(i){this.caipinzhiliangIndex=i.target.value,this.ruleForm.caipinzhiliang=this.caipinzhiliangOptions[this.caipinzhiliangIndex]},fuwupingjiaChange:function(i){this.fuwupingjiaIndex=i.target.value,this.ruleForm.fuwupingjia=this.fuwupingjiaOptions[this.fuwupingjiaIndex]},tupianTap:function(){var i=this;this.$api.upload((function(n){i.ruleForm.tupian=i.$base.url+"upload/"+n.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=u(e.default.mark((function i(){return e.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.ruleForm.id){i.next=5;break}return i.next=3,this.$api.update("yonghupingjia",this.ruleForm);case 3:i.next=7;break;case 5:return i.next=7,this.$api.add("yonghupingjia",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return i.stop()}}),i,this)})));function n(){return i.apply(this,arguments)}return n}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var n=new Date,t=n.getFullYear(),e=n.getMonth()+1,a=n.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),e=e>9?e:"0"+e,a=a>9?a:"0"+a,"".concat(t,"-").concat(e,"-").concat(a)},toggleTab:function(i){this.$refs[i].show()}}};n.default=c}).call(this,t("543d")["default"])},1044:function(i,n,t){"use strict";t.r(n);var e=t("20aa"),a=t("2aa0");for(var r in a)"default"!==r&&function(i){t.d(n,i,(function(){return a[i]}))}(r);t("2ceb");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"2a8a8d50",null,!1,e["a"],u);n["default"]=c.exports},"20aa":function(i,n,t){"use strict";var e={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"175c"))}},a=function(){var i=this,n=i.$createElement;i._self._c},r=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return e}))},"2aa0":function(i,n,t){"use strict";t.r(n);var e=t("0ed0"),a=t.n(e);for(var r in e)"default"!==r&&function(i){t.d(n,i,(function(){return e[i]}))}(r);n["default"]=a.a},"2ceb":function(i,n,t){"use strict";var e=t("ca3c"),a=t.n(e);a.a},b397:function(i,n,t){"use strict";(function(i){t("6ccf"),t("921b");e(t("66fd"));var n=e(t("1044"));function e(i){return i&&i.__esModule?i:{default:i}}i(n.default)}).call(this,t("543d")["createPage"])},ca3c:function(i,n,t){}},[["b397","common/runtime","common/vendor"]]]);