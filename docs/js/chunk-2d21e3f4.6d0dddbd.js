(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e3f4"],{d56c:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-md"},[null!==t.characters&&t.characters.length>0?i("q-list",{attrs:{bordered:"",separator:""}},t._l(t.characters,(function(e,o){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:""},on:{click:function(e){return t.characterDetails(o)}}},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.name))])],1)],1)})),1):t._e(),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[i("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:t.newCharacter}})],1)],1)},a=[],r=i("5530"),n=i("2f62"),c={computed:{characters:function(){return this.$store.state.characterSheets.list()}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["roll","selectDice"])),{},{newCharacter:function(){this.$router.push("/new-character")},characterDetails:function(t){this.$router.push({path:"/characters/"+t})}})},s=c,h=i("2877"),l=i("1c1c"),f=i("66e5"),p=i("4074"),u=i("0170"),d=(i("99af"),i("caad"),i("c975"),i("2b0e")),m=i("87e8"),b=i("dde5"),g=d["a"].extend({name:"QPageSticky",mixins:[m["a"]],inject:{layout:{default:function(){console.error("QPageSticky needs to be child of QLayout")}}},props:{position:{type:String,default:"bottom-right",validator:function(t){return["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(t)}},offset:{type:Array,validator:function(t){return 2===t.length}},expand:Boolean},computed:{attach:function(){var t=this.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:"top"===t||"bottom"===t,horizontal:"left"===t||"right"===t}},top:function(){return this.layout.header.offset},right:function(){return this.layout.right.offset},bottom:function(){return this.layout.footer.offset},left:function(){return this.layout.left.offset},style:function(){var t=0,e=0,i=this.attach,o=!0===this.$q.lang.rtl?-1:1;!0===i.top&&0!==this.top?e="".concat(this.top,"px"):!0===i.bottom&&0!==this.bottom&&(e="".concat(-this.bottom,"px")),!0===i.left&&0!==this.left?t="".concat(o*this.left,"px"):!0===i.right&&0!==this.right&&(t="".concat(-o*this.right,"px"));var a={transform:"translate(".concat(t,", ").concat(e,")")};return this.offset&&(a.margin="".concat(this.offset[1],"px ").concat(this.offset[0],"px")),!0===i.vertical?(0!==this.left&&(a[!0===this.$q.lang.rtl?"right":"left"]="".concat(this.left,"px")),0!==this.right&&(a[!0===this.$q.lang.rtl?"left":"right"]="".concat(this.right,"px"))):!0===i.horizontal&&(0!==this.top&&(a.top="".concat(this.top,"px")),0!==this.bottom&&(a.bottom="".concat(this.bottom,"px"))),a},classes:function(){return"fixed-".concat(this.position," q-page-sticky--").concat(!0===this.expand?"expand":"shrink")}},render:function(t){var e=Object(b["b"])(this,"default");return t("div",{staticClass:"q-page-sticky row flex-center",class:this.classes,style:this.style,on:Object(r["a"])({},this.qListeners)},!0===this.expand?e:[t("div",e)])}}),x=i("9c40"),y=i("714f"),v=i("93dc"),k=i.n(v),q=Object(h["a"])(s,o,a,!1,null,null,null);e["default"]=q.exports;k()(q,"components",{QList:l["a"],QItem:f["a"],QItemSection:p["a"],QItemLabel:u["a"],QPageSticky:g,QBtn:x["a"]}),k()(q,"directives",{Ripple:y["a"]})}}]);
//# sourceMappingURL=chunk-2d21e3f4.6d0dddbd.js.map