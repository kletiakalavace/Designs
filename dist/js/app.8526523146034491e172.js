webpackJsonp([4],{"62+E":function(t,e,s){t.exports=s.p+"img/logo_horizontal.f88df3c.svg"},"7zck":function(t,e){},IFIk:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("iKms"),n=s("ESwS"),l=s.n(n),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-content",[e("router-view")],1)],1)],1)},staticRenderFns:[]},o=s("VU/8")({name:"hub-app"},c,!1,null,null,null).exports,r=s("/ocq");a.a.use(r.a);var v=new r.a({hashbang:!1,mode:"history",routes:[{path:"/login",name:"LoginPage",component:function(){return s.e(0).then(s.bind(null,"P7ry"))}},{path:"/workspaces",name:"Workspaces",component:function(){return s.e(2).then(s.bind(null,"BMhb"))}},{path:"/workspace",name:"Workspace",component:function(){return s.e(1).then(s.bind(null,"tquq"))}},{path:"/",name:"Login",redirect:"/login"},{path:"/*",redirect:"/login"}]}),m=s("3EgV"),u=s.n(m);s("UQ8B"),s("IFIk"),s("7zck");var d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"default-layout",attrs:{fluid:"","fill-height":"","pa-0":""}},[e("o-navigation"),this._v(" "),e("o-header"),this._v(" "),e("v-layout",[e("v-flex",{staticClass:"main-content"},[this._t("default")],2)],1)],1)},staticRenderFns:[]};var _=s("VU/8")({name:"default-layout"},d,!1,function(t){s("rRup")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"header-toolbar",class:{active:!t.seen},attrs:{color:"white",height:"74",fixed:"",app:""}},[a("v-toolbar-title",[a("img",{staticClass:"logo-desktop",attrs:{src:s("62+E")}}),t._v(" "),a("img",{staticClass:"logo-mobile",attrs:{src:s("xhL/")}})]),t._v(" "),a("v-flex",{staticClass:"mx-auto content-general-search",attrs:{xs12:"",sm6:"",lg8:"","offset-sm2":""}},[a("v-btn",{staticClass:"btn-info-search search-mobile right",attrs:{slot:"activator",icon:""},on:{click:function(e){t.seen=!t.seen}},slot:"activator"},[a("v-icon",[t._v("search")])],1),t._v(" "),t.seen?a("v-layout",{staticClass:"search-mob",attrs:{row:"","bg-search":""}},[a("v-flex",{attrs:{lg8:""}},[a("v-select",{staticClass:"search-primary",attrs:{label:"Search Workspaces",items:t.searches,"item-text":"name","item-value":"name",multiple:"",chips:"","max-height":"auto",autocomplete:"","content-class":"select-searches","prepend-icon":"search"},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{close:"",selected:e.selected},on:{input:function(t){e.parent.selectItem(e.item)}}},[t._v("\n              "+t._s(e.item.name)+"\n            ")])]}},{key:"item",fn:function(e){return[[a("v-list-tile-content",[a("div",{staticClass:"list-content-search"},[a("span",{staticClass:"medium-letter-circle text-md-center mx-auto d-inline-block bg-orange"},[t._v("\n                                         "+t._s(e.item.letter)+"\n                              ")]),t._v(" "),a("span",{staticClass:"d-inline-block"},[a("span",{staticClass:"name-search d-block"},[t._v(t._s(e.item.name))]),t._v(" "),a("span",{staticClass:"version-search d-block"},[t._v(t._s(e.item.version))])])])]),t._v(" "),a("v-list-action",[a("v-tooltip",{attrs:{right:"","close-delay":"3000","content-class":"tooltip-searches"}},[a("v-btn",{staticClass:"btn-info-search",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",[t._v("more_vert")])],1),t._v(" "),a("a",{attrs:{href:"#test"}},[t._v("Request")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("Deploy")])],1)],1)]]}}]),model:{value:t.e11,callback:function(e){t.e11=e},expression:"e11"}})],1),t._v(" "),a("v-flex",{attrs:{lg4:""}},[a("v-select",{staticClass:"select-workspace",attrs:{label:"My services",items:t.workspace,"item-text":"name","item-value":"name","max-height":"auto","content-class":"select-workspaces"},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("span",{staticClass:"thumb-workspace-header text-md-center mx-auto d-block bg-orange"},[t._v("\n                  "+t._s(e.item.letter)+"\n             ")]),t._v("\n            "+t._s(e.item.name)+"\n          ")]}},{key:"item",fn:function(e){return["object"!=typeof e.item?[a("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]:[a("span",{staticClass:"thumb-workspace-header text-md-center mx-auto d-block",class:e.item.class},[t._v("\n                                     "+t._s(e.item.letter)+"\n                                  ")]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.name)}})],1)]]}}])})],1)],1):a("v-layout",{staticClass:"absolute-seach",attrs:{row:"","bg-search":""}},[a("v-flex",{attrs:{lg8:""}},[a("v-select",{staticClass:"search-primary",attrs:{label:"Search Workspaces",items:t.searches,"item-text":"name","item-value":"name",chips:"","max-height":"auto",autocomplete:"","content-class":"select-searches","prepend-icon":"search"},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v("\n            "+t._s(e.item.name)+"\n          ")]}},{key:"item",fn:function(e){return[[a("v-list-tile-content",[a("div",{staticClass:"list-content-search"},[a("span",{staticClass:"medium-letter-circle text-md-center mx-auto d-inline-block bg-orange"},[t._v("\n                                 "+t._s(e.item.letter)+"\n                      ")]),t._v(" "),a("span",{staticClass:"d-inline-block"},[a("span",{staticClass:"name-search d-block"},[t._v(t._s(e.item.name))]),t._v(" "),a("span",{staticClass:"version-search d-block"},[t._v(t._s(e.item.version))])])])]),t._v(" "),a("v-list-action",[a("v-tooltip",{attrs:{right:"","close-delay":"3000","content-class":"tooltip-searches"}},[a("v-btn",{staticClass:"btn-info-search",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",[t._v("more_vert")])],1),t._v(" "),a("a",{attrs:{href:"#test"}},[t._v("Request")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("Deploy")])],1)],1)]]}}])})],1),t._v(" "),a("v-flex",{attrs:{lg4:""}},[a("v-btn",{staticClass:"left back-search",attrs:{slot:"activator",icon:""},on:{click:function(e){t.seen=!t.seen}},slot:"activator"},[a("v-icon",[t._v("arrow_back")])],1),t._v(" "),a("v-select",{staticClass:"select-workspace",attrs:{label:"My services",items:t.workspace,"item-text":"name","item-value":"name","max-height":"auto","content-class":"select-workspaces"},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("span",{staticClass:"thumb-workspace-header text-md-center mx-auto d-block bg-orange"},[t._v("\n                    "+t._s(e.item.letter)+"\n               ")]),t._v(" "),a("div",{staticClass:"items-selected-search"},[t._v(t._s(e.item.name))])]}},{key:"item",fn:function(e){return["object"!=typeof e.item?[a("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]:[a("span",{staticClass:"thumb-workspace-header text-md-center mx-auto d-block",class:e.item.class},[t._v("\n                                     "+t._s(e.item.letter)+"\n                                  ")]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.name)}})],1)]]}}])})],1)],1)],1),t._v(" "),a("v-icon",{staticClass:"text-grey mr-4"},[t._v("fa fa-bookmark")]),t._v(" "),a("v-menu",{attrs:{bottom:"",center:"","content-class":"menu-user"}},[a("v-btn",{staticClass:"icon-profile mr-4",attrs:{slot:"activator",fab:"",dark:"",small:""},slot:"activator"},[t._v("\n      AV\n    ")]),t._v(" "),a("v-list",{staticClass:"header-account-list"},[a("span",{staticClass:"title-account mb-4 d-block pl-4 ml-1"},[t._v("My Account")]),t._v(" "),a("v-btn",{staticClass:"icon-profile mr-3 mb-4 ml-4 d-inline-block",attrs:{fab:"",dark:"",smallK:"",K:""}},[t._v("KK\n      ")]),t._v(" "),a("span",{staticClass:"name-account pl-3 pr-3 d-inline-block"},[t._v("\n              Kletia Kalavace\n            ")]),t._v(" "),a("v-btn",{staticClass:"user-link",attrs:{color:"transparent"},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[a("v-icon",[t._v("settings")]),t._v("\n        User Settings\n      ")],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290","content-class":"dialog-user-settings","z-index":"8"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-btn",{staticClass:"close-dialog",nativeOn:{click:function(e){t.dialog=!1}}},[a("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),a("v-card-title",{staticClass:"headline"},[t._v("User Settings")]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-select",{staticClass:"select-border select-language",attrs:{items:t.language,label:"Language","return-object":""},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-select",{staticClass:"select-border",attrs:{label:"Start Page","return-object":"",items:["Last Workspace","Workspace","Bookmark","All Workspaces"]}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"distance",attrs:{color:"color-orange darken-1",flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cancel\n            ")]),t._v(" "),a("v-btn",{attrs:{color:"color-orange darken-1",flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1),t._v(" "),t._l(t.items,function(e,s){return a("v-list-tile",{key:s},[a("v-list-tile-title",[a("v-icon",[t._v(t._s(e.icon))]),t._v("\n          "+t._s(e.title)+"\n        ")],1)],1)})],2)],1)],1)},staticRenderFns:[]};var b=s("VU/8")({name:"o-header",data:function(){return{seen:!0,language:["English","French","German","Swedish","Albanian"],workspace:[{name:"My services",letter:"M",class:"bg-orange"},{name:"Support",letter:"S",class:"bg-dark-green"},{name:"ServiceDesk",letter:"S",class:"bg-light-green"},{name:"ITAM",letter:"I",class:"bg-light-blue"},{name:"Manager",letter:"M",class:"bg-dark-grey"}],searches:[{name:"Adobe Acrovat Pro",letter:"A",version:"Software Asset Desktop "},{name:"Adobe Creative Cloud",letter:"A",version:"Software Asset Desktop "},{name:"Fireworks",letter:"F",version:"Software Asset Desktop mobile"}],items:[{title:"Logout",icon:"power_settings_new"}],dialog:!1}}},p,!1,function(t){s("o/w9")},null,null).exports,h={name:"navigation-primary",data:function(){return{mobile:window.innerWidth<=599,drawer:!0,drawer1:!1,subItems:!1,show:!0,items:[{title:"Administration",icon:"find_in_page"},{title:"Workspaces",icon:"widgets",subItems:[{title:"My service",letter:"M",class:"bg-orange"},{title:"Support",letter:"S",class:"bg-dark-green"},{title:"ServiceDesk",letter:"S",class:"bg-light-green"},{title:"ITAM",letter:"I",class:"bg-light-blue"},{title:"Manager",letter:"M",class:"bg-dark-grey"}]},{title:"Processes",icon:"group_work"},{title:"Shortcut",icon:"screen_share"},{title:"Bookmarks",icon:"collections_bookmark"}],mini:!0,right:null}},created:function(){var t=this;addEventListener("resize",function(){t.mobile=innerWidth<=599})},methods:{handleItemClick:function(t){this.items.map(function(t){t.selected=!1}),this.mini=!this.mini,t.selected=!0,this.subItems=t.subItems&&t.subItems.length>0}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.mobile?s("div",{staticClass:"mobile-navigation"},[s("v-layout",{staticClass:"mobile-menu",staticStyle:{height:"200px"},attrs:{wrap:""}},[s("v-btn",{staticClass:"menu-toggle",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer1=!t.drawer1}}},[s("i",{staticClass:"material-icons"},[t._v("menu")])]),t._v(" "),s("v-navigation-drawer",{staticClass:"primary-navigation",class:{"sub-items":t.subItems},attrs:{temporary:"",absolute:""},model:{value:t.drawer1,callback:function(e){t.drawer1=e},expression:"drawer1"}},[s("v-list",{staticClass:"pt-0 list-navigation",attrs:{dense:""}},[s("div",{staticClass:"items-content"},[s("v-list",{staticClass:"pa-0"},[s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-action",[s("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.drawer1=!t.drawer1}}},[s("v-icon",[t._v("arrow_back")])],1)],1),t._v(" "),s("v-list-tile-title",[t._v("CLOSE")])],1)],1),t._v(" "),t._l(t.items,function(e,a){return s("div",{key:a,class:{active:e.selected}},[s("v-list-tile",[s("v-list-tile-action",{on:{click:function(s){t.handleItemClick(e)}}},[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),t.subItems?t._e():s("v-list-tile-content",{on:{click:function(s){t.handleItemClick(e)}}},[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)],1)})],2),t._v(" "),t.subItems?s("div",{staticClass:"sub-items-content"},t._l(t.items,function(e){return e.selected?s("div",{key:e.title},[s("v-list-tile",{staticClass:"item-header"},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.subItems,function(e,a){return s("v-list-tile",{key:a},[s("v-list-tile-action",[s("span",{staticClass:"thumb-workspace-navigation text-md-center mx-auto d-block",class:e.class},[t._v("\n                                "+t._s(e.letter)+"\n                           ")])]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2):t._e()})):t._e()])],1)],1)],1):s("v-navigation-drawer",{staticClass:"primary-navigation desktop-navigation",class:{"sub-items":t.subItems},attrs:{stateless:"","hide-overlay":"","mini-variant":t.mini,dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{staticClass:"pt-0 list-navigation",attrs:{dense:""}},[s("div",{staticClass:"items-content"},[s("v-list",{staticClass:"pa-0"},[s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-action",[s("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[t.mini?t._e():s("v-icon",[t._v("arrow_back")]),t._v(" "),t.mini?s("v-icon",[t._v("arrow_forward")]):t._e()],1)],1)],1)],1),t._v(" "),t._l(t.items,function(e,a){return s("div",{key:a,class:{active:e.selected}},[s("v-list-tile",[s("v-list-tile-action",{on:{click:function(s){t.handleItemClick(e)}}},[s("v-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[t._v(t._s(e.icon))])],1),t._v(" "),t.subItems?t._e():s("v-list-tile-content",{on:{click:function(s){t.handleItemClick(e)}}},[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)],1)})],2),t._v(" "),t.subItems?s("div",{staticClass:"sub-items-content"},t._l(t.items,function(e){return e.selected?s("div",{key:e.title},[s("v-list-tile",{staticClass:"item-header"},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.subItems,function(e,a){return s("v-list-tile",{key:a},[s("v-list-tile-action",[s("span",{staticClass:"thumb-workspace-navigation text-md-center mx-auto d-block",class:e.class},[t._v("\n                                "+t._s(e.letter)+"\n                           ")])]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2):t._e()})):t._e()])],1)},staticRenderFns:[]};var f=s("VU/8")(h,g,!1,function(t){s("RwtD")},null,null).exports;a.a.filter("count",function(t){return t.length}),a.a.config.productionTip=!1,a.a.use(u.a),a.a.use(l.a),a.a.use(i.a,{breakpoints:{mobile:599,tablet:900,laptop:1250,desktop:1/0}}),a.a.component("o-default-layout",_),a.a.component("o-header",b),a.a.component("o-navigation",f),new a.a({el:"#app",router:v,components:{App:o},render:function(t){return t(o)}})},RwtD:function(t,e){},UQ8B:function(t,e){},"o/w9":function(t,e){},rRup:function(t,e){},"xhL/":function(t,e,s){t.exports=s.p+"img/logo_mobile.7e9fedb.png"}},["NHnr"]);
//# sourceMappingURL=app.8526523146034491e172.js.map