webpackJsonp([2],{"5tbX":function(e,t){},"5zde":function(e,t,o){o("zQR9"),o("qyJz"),e.exports=o("FeBl").Array.from},Gu7T:function(e,t,o){"use strict";t.__esModule=!0;var r,n=o("c/Tr"),s=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return(0,s.default)(e)}},"c/Tr":function(e,t,o){e.exports={default:o("5zde"),__esModule:!0}},fBQ2:function(e,t,o){"use strict";var r=o("evD5"),n=o("X8DO");e.exports=function(e,t,o){t in e?r.f(e,t,n(0,o)):e[t]=o}},qyJz:function(e,t,o){"use strict";var r=o("+ZMJ"),n=o("kM2E"),s=o("sB3e"),a=o("msXi"),i=o("Mhyx"),c=o("QRG4"),u=o("fBQ2"),f=o("3fs2");n(n.S+n.F*!o("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,o,n,v,l=s(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,p=void 0!==m,b=0,k=f(l);if(p&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==k||d==Array&&i(k))for(o=new d(t=c(l.length));t>b;b++)u(o,b,p?m(l[b],b):l[b]);else for(v=k.call(l),o=new d;!(n=v.next()).done;b++)u(o,b,p?a(v,m,[n.value,b],!0):n.value);return o.length=b,o}})},tcnj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Xxa5"),n=o.n(r),s=o("Gu7T"),a=o.n(s),i=o("exGp"),c=o.n(i),u=o("qmpX"),f=o("gyMJ"),v={name:"List",data:function(){return{books:[],offset:0,hasMore:!0,isLoading:!1}},mounted:function(){var e=this,t=this.$refs.scroll,o=t.offsetTop,r=0;t.addEventListener("touchstart",function(n){if(0===t.scrollTop&&t.offsetTop===o){var s=n.touches[0].pageY,a=function e(n){var a=n.touches[0].pageY;(r=a-s)>0?r<=50?t.style.top=r+o+"px":(r=50,t.style.top=o+50+"px"):(t.removeEventListener("touchmove",e),t.removeEventListener("touchend",i))},i=function n(s){clearInterval(e.timer1),e.timer1=setInterval(function(){if(r<=0)return clearInterval(e.timer1),r=0,t.style.top=o+"px",t.removeEventListener("touchmove",a),t.removeEventListener("touchend",n),e.books=[],e.offset=0,void e.getData();r-=1,t.style.top=o+r+"px"},1)};t.addEventListener("touchmove",a),t.addEventListener("touchend",i)}},!1)},created:function(){this.getData()},methods:{loadMore:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var t=e.$refs.scroll;t.scrollTop+t.clientHeight+20>t.scrollHeight&&e.getData()},30)},more:function(){this.getData()},getData:function(){var e=this;return c()(n.a.mark(function t(){var o,r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasMore||e.isLoading){t.next=11;break}return e.isLoading=!0,t.next=4,Object(f.d)(e.offset);case 4:o=t.sent,r=o.hasMore,s=o.books,e.books=[].concat(a()(e.books),a()(s)),e.hasMore=r,e.isLoading=!1,e.offset=e.books.length;case 11:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return c()(n.a.mark(function o(){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(f.e)(e);case 2:t.books=t.books.filter(function(t){return t.bookId!==e});case 3:case"end":return o.stop()}},o,t)}))()}},components:{Header:u.a}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Header",[e._v("列表")]),e._v(" "),o("div",{ref:"scroll",staticClass:"content",on:{scroll:e.loadMore}},[o("ul",e._l(e.books,function(t,r){return o("router-link",{key:r,attrs:{to:{name:"detail",params:{bid:t.bookId}},tag:"li"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bookCover,expression:"book.bookCover"}]}),e._v(" "),o("div",[o("h4",[e._v(e._s(t.bookName))]),e._v(" "),o("p",[e._v(e._s(t.bookInfo))]),e._v(" "),o("b",[e._v(e._s(t.bookPrice))]),e._v(" "),o("button",{on:{click:function(o){return o.stopPropagation(),e.remove(t.bookId)}}},[e._v("删除")])])])}),1),e._v(" "),o("div",{staticClass:"more",on:{click:e.more}},[e._v("加载更多")])])],1)},staticRenderFns:[]};var d=o("VU/8")(v,l,!1,function(e){o("5tbX")},"data-v-49dc6f2f",null);t.default=d.exports}});
//# sourceMappingURL=2.2850d2f9277478bba303.js.map