webpackJsonp([0],{"+cKO":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var n=w(r("FWhV")),a=w(r("PKmV")),u=w(r("hbkP")),i=w(r("3Ro/")),s=w(r("6rz0")),o=w(r("HSVw")),l=w(r("HM/u")),f=w(r("qHXR")),c=w(r("4ypF")),d=w(r("4oDf")),v=w(r("lEk1")),m=w(r("6+Xr")),p=w(r("L6Jx")),h=w(r("7J6f")),g=w(r("Y18q")),y=w(r("bXE/")),_=w(r("aYrh")),b=w(r("xJ3U"));function w(e){return e&&e.__esModule?e:{default:e}}t.alpha=n.default,t.alphaNum=a.default,t.numeric=u.default,t.between=i.default,t.email=s.default,t.ipAddress=o.default,t.macAddress=l.default,t.maxLength=f.default,t.minLength=c.default,t.required=d.default,t.requiredIf=v.default,t.requiredUnless=m.default,t.sameAs=p.default,t.url=h.default,t.or=g.default,t.and=y.default,t.minValue=_.default,t.maxValue=b.default},"3Ro/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})}},"4oDf":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.withParams)({type:"required"},n.req)},"4ypF":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},"6+Xr":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},"6rz0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/)},"7J6f":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)},FWhV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.regex)("alpha",/^[a-zA-Z]*$/)},Fugl:function(e,t){},"HM/u":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)})};var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},HSVw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)});var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},L6Jx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},P7ry:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("ESwS"),a=r("+cKO"),u={name:"login",mixins:[n.validationMixin],validations:{user:{username:{required:a.required},password:{required:a.required}}},data:function(){return{notificationColor:"white",timeout:1e4,showNotification:!0,notificationText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",errorMessage:"",loading:!1,user:{username:"",password:""},sideNav:!1,menuItems:[{title:"Copyright © 2018 Onify AB"},{title:"Terms of use",link:"/terms"},{title:"Privacy & cookies",link:"/privacy"},{title:"Lorem",link:"/lorem"},{title:"Ipsum",link:"/ipsum"},{title:"Dolor",link:"/dolor"}]}},methods:{submit:function(){this.$v.user.$touch(),this.$v.user.$invalid||(console.log(this.user),"admin"!==this.user.username||"admin"!==this.user.password?this.errorMessage="Invalid Username or Password":(this.errorMessage="",this.$router.push({name:"Workspaces"})))}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"login-container",attrs:{fluid:"","fill-height":""}},[n("div",{staticClass:"login-background"}),e._v(" "),n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{staticClass:"login-main",attrs:{xs12:"",sm6:"",md4:""}},[n("v-card",{staticClass:"elevation-6 form-content"},[n("v-form",{attrs:{"lazy-validation":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"align-center":""}},[n("img",{staticClass:"login-logo ",attrs:{src:r("dLd/"),alt:"logo"}})])],1),e._v(" "),n("v-card-text",[n("v-text-field",{attrs:{error:e.$v.user.username.$invalid&&e.$v.user.username.$dirty,"prepend-icon":"person",name:"username",label:"Username *",id:"username",type:"text"},on:{input:function(t){e.$v.user.username.$touch()},blur:function(t){e.$v.user.username.$touch()}},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password *",id:"password",error:e.$v.user.password.$invalid&&e.$v.user.password.$dirty,type:"password"},on:{input:function(t){e.$v.user.password.$touch()},blur:function(t){e.$v.user.password.$touch()}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),n("v-card-actions",{staticClass:"submit-button-content"},[n("v-btn",{staticClass:"submit-button",attrs:{block:"",color:"primary"},on:{click:e.submit}},[n("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"}),e._v(" Login\n                        ")])],1),e._v(" "),e.errorMessage?n("v-alert",{staticClass:"error-message",attrs:{outline:"",type:"error",value:!0}},[e._v("\n                        "+e._s(e.errorMessage)+"\n                    ")]):e._e()],1),e._v(" "),n("v-snackbar",{staticClass:"notification-content",attrs:{"auto-height":!0,timeout:e.timeout,bottom:!0,right:!0,color:e.notificationColor},model:{value:e.showNotification,callback:function(t){e.showNotification=t},expression:"showNotification"}},[n("span",{staticClass:"notification-message"},[e._v(e._s(e.notificationText))])])],1)],1),e._v(" "),n("div",{staticClass:"xs12"},[n("v-list",{staticClass:"text-md-center login-list"},e._l(e.menuItems,function(t){return n("v-list-tile",{key:t.title,staticClass:"d-inline-block",attrs:{router:"",to:t.link}},[n("v-list-tile-content",{staticClass:"login-navigation-bottom"},[e._v("\n                            "+e._s(t.title)+"\n                        ")])],1)}))],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(u,i,!1,function(e){r("Fugl")},null,null);t.default=s.exports},PKmV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},URu4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var n,a=r("mpcv"),u=(n=a)&&n.__esModule?n:{default:n};t.withParams=u.default;var i=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]},t.regex=function(e,t){return(0,u.default)({type:e},function(e){return!i(e)||t.test(e)})}},Y18q:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},aYrh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},"bXE/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},hbkP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=(0,n.regex)("numeric",/^[0-9]*$/)},lEk1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},mpcv:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("JVqD").withParams;t.default=n},qHXR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},xJ3U:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("URu4");t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}}});
//# sourceMappingURL=0.5066daadb3a4b99016b3.js.map