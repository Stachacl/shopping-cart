(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),m=(a(10),a(4)),i=a(3),o=function(e,t){return e},s=l.a.createContext(),u={loading:!1,cart:[{id:1,title:"Perfume",price:129.99,img:"https://ik.imagekit.io/stcl/Shop/pink-perfume_li0OeFpuj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095156582",amount:1},{id:2,title:"Headphones ",price:499.99,img:"https://ik.imagekit.io/stcl/Shop/pink-headphones_39_w-SINT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095156643",amount:1},{id:3,title:"Body lotion",price:35.59,img:"https://ik.imagekit.io/stcl/Shop/Pink-bottle_-DjaMA4bB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095156603",amount:1}],total:0,amount:0},p=function(e){var t=e.children,a=Object(n.useReducer)(o,u),r=Object(i.a)(a,2),c=r[0];r[1];return l.a.createElement(s.Provider,{value:Object(m.a)({},c)},t)},E=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-center"},l.a.createElement("h3",null,"useReducer"),l.a.createElement("div",{className:"nav-container"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})),l.a.createElement("div",{className:"amount-container"},l.a.createElement("p",{className:"total-amount"},"3")))))},d=function(e){e.id;var t=e.img,a=e.title,n=e.price,r=e.amount;return l.a.createElement("article",{className:"cart-item"},l.a.createElement("img",{src:t,alt:a}),l.a.createElement("div",null,l.a.createElement("h4",null,a),l.a.createElement("h4",{className:"item-price"},"$",n),l.a.createElement("button",{className:"remove-btn",onClick:function(){return console.log("remove item")}},"remove")),l.a.createElement("div",null,l.a.createElement("button",{className:"amount-btn",onClick:function(){return console.log("increase")}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}))),l.a.createElement("p",{className:"amount"},r),l.a.createElement("button",{className:"amount-btn",onClick:function(){return console.log("decrease")}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))},v=function(){var e=Object(n.useContext)(s).cart;return 0===e.length?l.a.createElement("section",{className:"cart"},l.a.createElement("header",null,l.a.createElement("h2",null,"your shopping bag"),l.a.createElement("h4",{className:"empty-cart"},"is currently empty"))):l.a.createElement("section",{className:"cart"},l.a.createElement("header",null,l.a.createElement("h2",null,"your shopping bag")),l.a.createElement("div",null,e.map((function(e){return l.a.createElement(d,Object.assign({key:e.id},e))}))),l.a.createElement("footer",null,l.a.createElement("hr",null),l.a.createElement("div",{className:"cart-total"},l.a.createElement("h4",null,"total ",l.a.createElement("span",null,"$0.00"))),l.a.createElement("button",{className:"btn clear-btn",onClick:function(){return console.log("clear cart")}},"clear cart")))};var h=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement(v,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(h,null))),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.19aadd61.chunk.js.map