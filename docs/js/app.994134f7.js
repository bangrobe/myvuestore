(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"12fd":function(t,e,s){t.exports=s.p+"img/black_shirt.76f92bd4.jpg"},"2f88":function(t,e,s){t.exports=s.p+"img/red_shirt.468823e6.jpg"},"30e6":function(t,e,s){t.exports=s.p+"img/green_shirt.104085a9.jpg"},"42fc":function(t,e,s){t.exports=s.p+"img/blue_shirt.556ec3c1.jpg"},"46bb":function(t,e,s){t.exports=s.p+"img/orange_shirt.a9b2ed85.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Product",{attrs:{countItem:t.ItemsInCart,productSummary:t.myCart,msg:"Derminpro Men’s Polo Shirts",description:"Short Sleeve Quick Dry Athletic Golf T-Shirts",picture_src:"black_shirt.jpg",price:"23.56",stars:"✭✭✭✭✭",color:"Black",total:"0.00"}})],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-primary bg-primary"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("VueStore")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Shopping Cart - "+t._s(t.countItem)+" Items")])])])])]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row m-4 p-4"},[s("div",{staticClass:"col-lg-5 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h5",{staticClass:"text-uppercase"},[t._v("PRODUCT REVIEWS: "+t._s(t.stars))])]),s("div",{staticClass:"d-flex justify-content-center mt-3"},[s("div",{staticClass:"img-hover-zoom"},[s("img",{staticClass:"img-hover-zoom",attrs:{src:t.resolve_img_url(t.picture_src),alt:"Shop with us"}})])]),t._m(1)])]),s("div",{staticClass:"col-lg-7 col-12"},[s("h6",{staticClass:"display-4"},[t._v(t._s(t.msg))]),s("p",{staticClass:"lead text-uppercase"},[t._v(" "+t._s(t.description)+" - "),s("b",{staticClass:"text-danger"},[t._v("PRICE: "+t._s(t.price))])]),s("div",{staticClass:"d-flex justify-content-around mb-2 mt-2"},[s("a",{staticClass:"btn btn-dark m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("black_shirt.jpg","23.99","✭✭✭✭✭✭","Black")}}},[t._v("BLACK")]),s("a",{staticClass:"btn btn-primary m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("blue_shirt.jpg","20.99","✭✭✭✭✩✩","Blue")}}},[t._v("BLUE")]),s("a",{staticClass:"btn btn-danger m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("red_shirt.jpg","14.99","✭✭✭✭✩✩","Red")}}},[t._v("RED")]),s("a",{staticClass:"btn btn-warning m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("orange_shirt.jpg","16.99","✭✭✩✩✩✩","Orange")}}},[t._v("ORANGE")]),s("a",{staticClass:"btn btn-success m-2 btn-block text-white",on:{click:function(e){return t.selectedItem("green_shirt.jpg","11.99","✭✭✭✩✩✩","Green")}}},[t._v("GREEN")])]),s("div",{staticClass:"d-flex justify-content-center"},[s("ul",{staticClass:"list-group"},[t._m(2),s("li",{staticClass:"list-group-item"},[t._v("95% Polyester 5% Spandex")]),s("li",{staticClass:"list-group-item"},[t._v("Button closure")]),s("li",{staticClass:"list-group-item"},[t._v("Machine wash")]),s("li",{staticClass:"list-group-item"},[t._v("Quick Dry & Breathable Material --- High moisture wicking feature keeps your skin stay cool quickly after sweaty sport activities in hot summer")]),s("li",{staticClass:"list-group-item"},[t._v("Lightweight and Soft to the Touch --- Protect your sensitive skin in extreme comfort")]),s("li",{staticClass:"list-group-item"},[t._v("High Elasticity & Regular Fit--- Ensures you move well when playing golf, tennis or any vigorous exercises")]),s("li",{staticClass:"list-group-item"},[t._v("Basic Polo Design with 3 Buttons --- Look fashionable in any occasion; Matches with slacks, sport pants, beach shorts, or jeans")]),s("li",{staticClass:"list-group-item"},[t._v("Machine Wash/Hand Wash Recommended. Enjoy a stress-free Satisfaction Guarantee and free replacement for defective item")]),s("li",{staticClass:"list-group-item bg-light p-2"},[s("h5",[s("button",{staticClass:"btn display-4 btn-success btn-lg",on:{click:function(e){return t.addItem2Cart()}}},[t._v(" Add to Cart ")])])])])])])])]),s("div",{staticClass:"d-flex justify-content-center row"},[s("h3",[t._v("Your Shopping Cart - "),s("b",{staticClass:"text-primary"},[t._v("Items added: "+t._s(t.countItem))]),s("b",{staticClass:"text-danger"},[t._v(" - Total before Shipping: U$"+t._s(parseFloat(Math.round(100*t.total)/100).toFixed(2)))])])]),s("div",{staticClass:"row"},t._l(t.cartAddedItems,(function(e,a){return s("div",{key:a,staticClass:"col-2"},[s("div",{staticClass:"card m-4"},[s("div",{staticClass:"card-header"},[t._v(" Remove this Item "),s("button",{staticClass:"badge badge-pill badge-success",on:{click:function(s){return t.removeItemFromCart(a,e.price)}}},[t._v("X")])]),s("img",{staticClass:"card-img-top",attrs:{src:t.resolve_img_url(e.img),alt:"item.color"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title text-uppercase"},[s("b",[t._v("COLOR:")]),t._v(" "+t._s(e.color)+" ")]),s("h6",{staticClass:"card-subtitle mb-2 text-success"},[s("b",[t._v("PRICE:")]),t._v(" U$"+t._s(e.price)+" ")]),s("p",{staticClass:"card-text"},[s("b",[t._v("STARS:")]),t._v(" "+t._s(e.stars)+" ")])])])])})),0)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text lead"},[t._v("Roll over image to zoom in.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"list-group-item bg-info"},[s("h3",{staticClass:"text-white"},[t._v("PRODUCT DETAILS")])])}],c=(s("a434"),s("a9e3"),{name:"Product",data:function(){return{cartAddedItems:[]}},props:{msg:String,description:String,price:String,countItem:Number,total:String,stars:String,cart:Array,color:String,picture_src:String},methods:{selectedItem:function(t,e,s,a){this.picture_src=t,this.price=e,this.stars=s,this.color=a},addItem2Cart:function(){this.countItem=this.countItem+1,this.total=+this.total+ +this.price,this.cartAddedItems.push({img:this.picture_src,color:this.color,price:this.price,stars:this.stars})},removeItemFromCart:function(t,e){this.cartAddedItems.splice(t,1),this.countItem=this.countItem-1,this.total=+this.total-+e},resolve_img_url:function(t){var e=s("8188");return e("./"+t)}}}),l=c,u=(s("bb6a"),s("2877")),p=Object(u["a"])(l,n,o,!1,null,"b12705f2",null),d=p.exports,m={state:{cart:[],items:0},addItemToCart:function(t){this.state.cart.push(t)},countItemsInCart:function(t){this.state.items=this.state.items+t}},f={name:"app",data:function(){return{storeState:m.state,ItemsInCart:m.state.items,myCart:m.state.cart}},components:{Product:d},mounted:function(){m.addItemToCart("Nuevo Dato"),m.countItemsInCart(0),this.ItemsInCart=m.state.items},computed:{add2Cart:function(){return m.items}}},g=f,h=(s("034f"),Object(u["a"])(g,r,i,!1,null,null,null)),v=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(v)}}).$mount("#app")},"789a":function(t,e,s){t.exports=s.p+"img/photo1.dd534d5b.jpg"},8188:function(t,e,s){var a={"./black_shirt.jpg":"12fd","./blue_shirt.jpg":"42fc","./green_shirt.jpg":"30e6","./logo.png":"cf05","./orange_shirt.jpg":"46bb","./photo1.jpg":"789a","./red_shirt.jpg":"2f88"};function r(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="8188"},"85ec":function(t,e,s){},bb6a:function(t,e,s){"use strict";var a=s("f28f"),r=s.n(a);r.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},f28f:function(t,e,s){}});
//# sourceMappingURL=app.994134f7.js.map