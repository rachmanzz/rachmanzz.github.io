webpackJsonp([1],{"7zck":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-navigation-drawer",{attrs:{persistent:"","mini-variant":e.miniVariant,clipped:e.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[s("v-toolbar",{attrs:{flat:""}},[s("v-list",[s("v-list-tile",[s("v-list-tile-title",{staticClass:"title"},[e._v("\n            Try Reqres.in\n          ")])],1)],1)],1),e._v(" "),s("v-list",e._l(e.items,function(t,a){return s("v-list-tile",{key:a,attrs:{value:"true"},on:{click:function(s){s.stopPropagation(),e.runRegres(t.code)}}},[s("v-list-tile-content",[s("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],1),e._v(" "),s("v-toolbar",{attrs:{app:"","clipped-left":e.clipped}},[s("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[s("v-icon",{domProps:{innerHTML:e._s(e.drawer?"chevron_right":"chevron_left")}})],1),e._v(" "),s("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),s("v-spacer")],1),e._v(" "),s("v-content",[s("router-view")],1),e._v(" "),s("v-navigation-drawer",{attrs:{temporary:"",right:e.right,fixed:"",app:""},model:{value:e.rightDrawer,callback:function(t){e.rightDrawer=t},expression:"rightDrawer"}},[s("v-list",[s("v-list-tile",{on:{click:function(t){e.right=!e.right}}},[s("v-list-tile-action",[s("v-icon",[e._v("compare_arrows")])],1),e._v(" "),s("v-list-tile-title",[e._v("Switch drawer (click me)")])],1)],1)],1),e._v(" "),s("v-footer",{attrs:{fixed:e.fixed,app:""}},[s("span",[e._v("© 2018")])])],1)},staticRenderFns:[]},o=s("VU/8")({data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{title:"List Users",code:1},{title:"Single User",code:2},{title:"Single user not found",code:3},{title:"List <resource>",code:4},{title:"Single <resource>",code:5},{title:"Create",code:6},{title:"Update (PUT)",code:7},{title:"Update (PATCH)",code:8},{title:"Delete",code:9}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Pass-In Test",urlregres:"https://reqres.in/"}},methods:{runRegres:function(e){this.$store.commit("resetHeaders"),this.$store.commit("resetParams"),this.$store.commit("resetBody"),1===e&&(this.$store.commit("setHeader",{name:"",val:""}),this.$store.commit("setParam",{name:"page",val:"2"}),this.$store.commit("setBody",{name:"",val:""}),this.$store.commit("setMethod","GET"),this.$store.commit("setUri",this.urlregres+"api/users")),2===e&&(this.emptyAll(),this.$store.commit("setMethod","GET"),this.$store.commit("setUri",this.urlregres+"api/users/2")),3===e&&(this.emptyAll(),this.$store.commit("setMethod","GET"),this.$store.commit("setUri",this.urlregres+"api/users/23")),4===e&&(this.emptyAll(),this.$store.commit("setMethod","GET"),this.$store.commit("setUri",this.urlregres+"api/unknown")),5===e&&(this.emptyAll(),this.$store.commit("setMethod","GET"),this.$store.commit("setUri",this.urlregres+"api/unknown/2")),6===e&&(this.$store.commit("setHeader",{name:"",val:""}),this.$store.commit("setParam",{name:"",val:""}),this.$store.commit("setBody",{name:"name",val:"morpheus"}),this.$store.commit("setBody",{name:"job",val:"accountant"}),this.$store.commit("setMethod","POST"),this.$store.commit("setUri",this.urlregres+"api/users")),7===e&&(this.$store.commit("setHeader",{name:"",val:""}),this.$store.commit("setParam",{name:"",val:""}),this.$store.commit("setBody",{name:"name",val:"morpheus"}),this.$store.commit("setBody",{name:"job",val:"programmer VB"}),this.$store.commit("setMethod","PUT"),this.$store.commit("setUri",this.urlregres+"api/users/2")),8===e&&(this.$store.commit("setHeader",{name:"",val:""}),this.$store.commit("setParam",{name:"",val:""}),this.$store.commit("setBody",{name:"name",val:"morpheus"}),this.$store.commit("setBody",{name:"job",val:"programmer Nodejs"}),this.$store.commit("setMethod","PATCH"),this.$store.commit("setUri",this.urlregres+"api/users/2")),9===e&&(this.emptyAll(),this.$store.commit("setMethod","DELETE"),this.$store.commit("setUri",this.urlregres+"api/users/2"))},emptyAll:function(){this.$store.commit("setHeader",{name:"",val:""}),this.$store.commit("setParam",{name:"",val:""}),this.$store.commit("setBody",{name:"",val:""})}},name:"App"},r,!1,null,null,null).exports,i=s("/ocq"),n=s("Xxa5"),l=s.n(n),m=s("exGp"),d=s.n(m),c=s("mtWM"),v=s.n(c),u=s("RKAd"),h={components:{VueJsonPretty:s.n(u).a},data:function(){return{mdialog:!1,loading:!1,tabactive:"tab-2",tabsitem:[{name:"Headers",code:1},{name:"Params",code:2},{name:"Body",code:3}],tabsitemreset:[{name:"Headers",code:1},{name:"Params",code:2},{name:"Body",code:3}],reqmethod:["GET","POST","PUT","PATCH","DELETE"],result:{},errors:{code:500,data:"",headers:{}},formassets:{method:"GET",headers:[{name:"",val:""}],params:[{name:"",val:""}],body:[{name:"",val:""}]}}},mounted:function(){this.formassets=this.$store.state.formassets},computed:{getMethod:{set:function(e){this.$store.commit("setMethod",e)},get:function(){return this.$store.state.formassets.method}},getUrl:{set:function(e){this.$store.commit("setUri",e)},get:function(){return this.$store.state.url}}},methods:{generateHeaders:function(){for(var e=this.$store.state.formassets.headers,t=e.length,s={able:!1,data:{}},a=0;a<t;a++)if(""!==e[a].name){s.able||(s.able=!0);var r=e[a];s.data[r.name]=r.val}return s},generateParams:function(){for(var e=this.$store.state.formassets.params,t=e.length,s={able:!1,data:{}},a=0;a<t;a++)if(""!==e[a].name){s.able||(s.able=!0);var r=e[a];s.data[r.name]=r.val}return s},generateBody:function(){for(var e=this.$store.state.formassets.body,t=e.length,s={able:!1,data:{}},a=0;a<t;a++)if(""!==e[a].name){s.able||(s.able=!0);var r=e[a];s.data[r.name]=r.val}return s},removeTabs:function(e){var t=this.indexOfCode(this.tabsitem,e);t>=0&&this.tabsitem.splice(t,1)},indexOfCode:function(e,t){return e.map(function(e){return e.code}).indexOf(t)},headersAction:function(e){this.$store.state.formassets.headers.length-1>e?this.$store.commit("removeHeader",1):this.$store.commit("setHeader",{name:"",val:""})},bodyAction:function(e){this.$store.state.formassets.body.length-1>e?this.$store.commit("removeBody",1):this.$store.commit("setBody",{name:"",val:""})},paramsAction:function(e){this.$store.state.formassets.params.length-1>e?this.$store.commit("removeParam",1):this.$store.commit("setParam",{name:"",val:""})},sendAction:function(){var e=this;return d()(l.a.mark(function t(){var s,a,r,o,i,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.removeTabs(4),e.removeTabs(5),e.removeTabs(6),e.mdialog=!1,""!==e.url){t.next=7;break}return alert("error, url empty"),t.abrupt("return");case 7:return e.indexOfCode(e.tabsitem,4)<0&&e.tabsitem.push({name:"Send",code:4}),e.loading=!0,s=e.$store.state.formassets.method.toLowerCase(),a={method:s,url:e.$store.state.url},r=e.generateHeaders(),o=e.generateParams(),i=e.generateBody(),r.able?(a.headers=r.data,a.headers["Access-Control-Expose-Headers"]="error"):a.headers={"Access-Control-Expose-Headers":"error"},o.able&&(a.params=o.data),"get"!==s&&"delete"!==s&&i.able&&(a.data=i.data),t.prev=17,t.next=20,v()(a);case 20:(n=t.sent)?(e.indexOfCode(e.tabsitem,5)<0&&e.tabsitem.push({name:"Result",code:5}),e.result=n):(e.indexOfCode(e.tabsitem,6)<0&&e.tabsitem.push({name:"Error",code:6}),e.errors.code=n.status,e.errors.data=n.data,e.errors.headers=n.headers),e.loading=!1,t.next=30;break;case 25:t.prev=25,t.t0=t.catch(17),void 0!==t.t0.response?(e.errors.code=t.t0.response.status,e.errors.data=t.t0.response.data,e.errors.headers=t.t0.response.headers):(e.errors.data=t.t0.message,e.errors.headers=t.t0.config.headers,e.errors.code=t.t0.status),e.indexOfCode(e.tabsitem,6)<0&&e.tabsitem.push({name:"Error",code:6}),e.loading=!1;case 30:case"end":return t.stop()}},t,e,[[17,25]])}))()}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs5:"",sm2:"","d-flex":""}},[s("v-select",{attrs:{items:e.reqmethod,label:"Method",height:"40",color:"info",outline:""},model:{value:e.getMethod,callback:function(t){e.getMethod=t},expression:"getMethod"}})],1),e._v(" "),s("v-flex",{attrs:{xs7:"",sm10:"","pl-2":"","d-flex":""}},[s("v-text-field",{attrs:{label:"URL",height:"40",outline:"",color:"info",placeholder:"http://yourdomainame/api",required:""},model:{value:e.getUrl,callback:function(t){e.getUrl=t},expression:"getUrl"}})],1)],1),e._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm12:"","d-flex":""}},[s("v-tabs",{attrs:{color:"cyan",dark:"","slider-color":"yellow"}},[e._l(e.tabsitem,function(t){return s("v-tab",{key:t.code,attrs:{ripple:""}},[e._v("\n                 "+e._s(t.name)+"\n               ")])}),e._v(" "),e._l(e.tabsitem,function(t){return s("v-tab-item",{key:t.code,staticStyle:{padding:"5px"}},[s("v-card",{directives:[{name:"show",rawName:"v-show",value:1===t.code,expression:"n.code ===1 "}],staticStyle:{padding:"10px"}},e._l(e.formassets.headers,function(t,a){return s("v-layout",{key:a,attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:"",sm3:"","d-flex":""}},[s("v-text-field",{attrs:{label:"Name",outline:"",height:"40",color:"info"},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"item.name"}})],1),e._v(" "),s("v-flex",{attrs:{xs5:"",sm7:"","pl-2":"","d-flex":""}},[s("v-text-field",{attrs:{label:"Value",outline:"",height:"40",color:"info"},model:{value:t.val,callback:function(s){e.$set(t,"val",s)},expression:"item.val"}})],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm2:"","d-flex":""}},[s("v-btn",{attrs:{color:"info",depressed:"",flat:"",large:""},on:{click:function(t){e.headersAction(a)}}},[s("v-icon",[e._v(e._s(0!==e.formassets.headers.length&&e.formassets.headers.length-1>a?"remove":"add"))])],1)],1)],1)})),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:2===t.code,expression:"n.code ===2 "}],staticStyle:{padding:"10px"}},e._l(e.formassets.params,function(t,a){return s("v-layout",{key:a,attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm3:"","d-flex":""}},[s("v-text-field",{attrs:{label:"Name",outline:"",height:"40",color:"info"},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"item.name"}})],1),e._v(" "),s("v-flex",{attrs:{xs12:"",sm7:"","pl-2":"","d-flex":""}},[s("v-text-field",{attrs:{label:"Value",outline:"",height:"40",color:"info"},model:{value:t.val,callback:function(s){e.$set(t,"val",s)},expression:"item.val"}})],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm2:"","d-flex":""}},[s("v-btn",{attrs:{color:"info",depressed:"",flat:"",large:""},on:{click:function(t){e.paramsAction(a)}}},[s("v-icon",[e._v(e._s(0!==e.formassets.params.length&&e.formassets.params.length-1>a?"remove":"add"))])],1)],1)],1)})),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:3===t.code&&"GET"!==e.formassets.method&&"DELETE"!==e.formassets.method,expression:"n.code === 3 && formassets.method !== 'GET' && formassets.method !== 'DELETE'"}],staticStyle:{padding:"10px"}},e._l(e.formassets.body,function(t,a){return s("v-layout",{key:a,attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:"",sm3:"","d-flex":""}},[s("v-text-field",{attrs:{label:"Name",outline:"",height:"40",color:"info"},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"item.name"}})],1),e._v(" "),s("v-flex",{attrs:{xs5:"",sm7:"","pl-2":"","d-flex":""}},[s("v-text-field",{attrs:{label:"Value",outline:"",height:"40",color:"info"},model:{value:t.val,callback:function(s){e.$set(t,"val",s)},expression:"item.val"}})],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm2:"","d-flex":""}},[s("v-btn",{attrs:{color:"info",depressed:"",flat:"",large:""},on:{click:function(t){e.bodyAction(a)}}},[s("v-icon",[e._v(e._s(0!==e.formassets.body.length&&e.formassets.body.length-1>a?"remove":"add"))])],1)],1)],1)})),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:4===t.code,expression:"n.code === 4"}],staticStyle:{padding:"10px"}},[s("h3",[e._v("Form Request")]),e._v(" "),s("v-data-table",{attrs:{items:[{name:e.formassets.method,val:e.getUrl}],headers:[{text:"Method",value:"Method"},{text:"Url",value:"Url"}]},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),e._v(" "),s("td",[e._v(e._s(t.item.val))])]}}])}),e._v(" "),s("hr"),e._v(" "),s("h3",[e._v("Headers")]),e._v(" "),s("v-data-table",{attrs:{items:e.formassets.headers,headers:[{text:"name",value:"name"},{text:"value",align:"left",value:"value"}]},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),e._v(" "),s("td",[e._v(e._s(t.item.val))])]}}])}),e._v(" "),s("hr"),e._v(" "),s("h3",[e._v("Params")]),e._v(" "),s("v-data-table",{attrs:{items:e.formassets.params,headers:[{text:"name",value:"name"},{text:"value",align:"left",value:"value"}]},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),e._v(" "),s("td",[e._v(e._s(t.item.val))])]}}])}),e._v(" "),s("hr"),e._v(" "),s("h3",{directives:[{name:"show",rawName:"v-show",value:"GET"!==e.formassets.method&&"DELETE"!==e.formassets.method,expression:"formassets.method !== 'GET' && formassets.method !== 'DELETE'"}]},[e._v("Body")]),e._v(" "),s("v-data-table",{directives:[{name:"show",rawName:"v-show",value:"POST"===e.formassets.method,expression:"formassets.method === 'POST'"}],attrs:{items:e.formassets.body,headers:[{text:"name",value:"name"},{text:"value",align:"left",value:"value"}]},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),e._v(" "),s("td",[e._v(e._s(t.item.val))])]}}])})],1),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:5===t.code,expression:"n.code === 5"}],staticStyle:{padding:"10px"}},[e._v("\n                    Response Status : "+e._s(e.result.status)+"\n                    "),s("hr"),e._v(" "),s("vue-json-pretty",{attrs:{path:"res",data:e.result.data}})],1),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:6===t.code,expression:"n.code === 6"}],staticStyle:{padding:"10px"}},[e._v("\n                    Response Status : "+e._s(e.errors.code)+"\n                    "),s("hr"),e._v(" "),s("div",{domProps:{innerHTML:e._s(e.errors.data)}}),e._v(" "),s("hr"),e._v(" "),s("h3",[e._v("Headers")]),e._v(" "),s("vue-json-pretty",{attrs:{path:"res",data:e.errors.headers}})],1)],1)})],2),e._v(" "),s("v-btn",{attrs:{color:"info",loading:e.loading,dark:"",fab:"",fixed:"",bottom:"",right:""},on:{click:function(t){e.mdialog=!0}}},[s("v-icon",[e._v("send")])],1)],1),e._v(" "),s("v-flex",{attrs:{x12:"","d-flex":""}},[s("v-dialog",{attrs:{"max-width":"240"},model:{value:e.mdialog,callback:function(t){e.mdialog=t},expression:"mdialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[e._v("Confirm")]),e._v(" "),s("v-card-text",[e._v("Are you sure ?")]),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(t){e.mdialog=!1}}},[e._v("No")]),e._v(" "),s("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:e.sendAction}},[e._v("Yes, I am Sure")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},p=s("VU/8")(h,f,!1,null,null,null).exports;a.default.use(i.a);var _=new i.a({routes:[{path:"/",name:"Home",component:p}]}),x=s("3EgV"),g=s.n(x),b=(s("7zck"),s("NYxO"));a.default.use(b.a);var y=new b.a.Store({state:{formassets:{method:"GET",headers:[{name:"",val:""}],params:[{name:"",val:""}],body:[{name:"",val:""}]},url:"https://"},mutations:{setHeader:function(e,t){e.formassets.headers.push(t)},removeHeader:function(e,t){e.formassets.headers.splice(t,1)},resetHeaders:function(e){e.formassets.headers=[]},setParam:function(e,t){e.formassets.params.push(t)},removeParam:function(e,t){e.formassets.params.splice(t,1)},resetParams:function(e){e.formassets.params=[]},setBody:function(e,t){e.formassets.body.push(t)},removeBody:function(e,t){e.formassets.body.splice(t,1)},resetBody:function(e){e.formassets.body=[]},setMethod:function(e,t){e.formassets.method=t},setUri:function(e,t){e.url=t}}});a.default.use(g.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),a.default.config.productionTip=!1,new a.default({el:"#app",router:_,store:y,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.1cc3d9b71ffc683c2d8c.js.map