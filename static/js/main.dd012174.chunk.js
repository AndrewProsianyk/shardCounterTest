(this.webpackJsonpshardcountertest=this.webpackJsonpshardcountertest||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(5),s=n.n(r),o=n(3),a=n.p+"static/media/sacred.b0926d83.png",u=n.p+"static/media/voidS.c4a36b03.png",l=n.p+"static/media/ancient.97c3704e.png",d=n(2),b=n.n(d),j=n(0);function O(){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("sacred")))&&void 0!==t?t:0})),e=Object(o.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("voidS")))&&void 0!==t?t:0})),s=Object(o.a)(r,2),d=s[0],O=s[1],f=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("ancient")))&&void 0!==t?t:0})),h=Object(o.a)(f,2),p=h[0],S=h[1],x=function(t){switch(t){case"sacred":i((function(t){return t+1})),console.log(i);break;case"voidS":O((function(t){return t+1})),console.log(O);break;case"ancient":S((function(t){return t+1})),console.log(S);break;default:return}},g=function(t){switch(t){case"sacred":i((function(t){return t-1})),console.log(i);break;case"voidS":O((function(t){return t-1})),console.log(O);break;case"ancient":S((function(t){return t-1})),console.log(S);break;default:return}};return Object(c.useEffect)((function(){window.localStorage.setItem("sacred",JSON.stringify(n))}),[n]),Object(c.useEffect)((function(){window.localStorage.setItem("voidS",JSON.stringify(d))}),[d]),Object(c.useEffect)((function(){window.localStorage.setItem("ancient",JSON.stringify(p))}),[p]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:a,alt:"",width:"200"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:b.a.shardSpan,children:n}),Object(j.jsx)("button",{type:"button",onClick:function(){return x("sacred")},children:"Plus"}),Object(j.jsx)("button",{type:"button",onClick:function(){return g("sacred")},children:"Minus"}),Object(j.jsx)("button",{type:"button",onClick:function(){return i(0)},children:"Reset"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:u,alt:"",width:"200"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:b.a.shardSpan,children:d}),Object(j.jsx)("button",{type:"button",onClick:function(){return x("voidS")},children:"Plus"}),Object(j.jsx)("button",{type:"button",onClick:function(){return g("voidS")},children:"Minus"}),Object(j.jsx)("button",{type:"button",onClick:function(){return O(0)},children:"Reset"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:l,alt:"",width:"200"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:b.a.shardSpan,children:p}),Object(j.jsx)("button",{type:"button",onClick:function(){return x("ancient")},children:"Plus"}),Object(j.jsx)("button",{type:"button",onClick:function(){return g("ancient")},children:"Minus"}),Object(j.jsx)("button",{type:"button",onClick:function(){return S(0)},children:"Reset"})]})]})]})}n(11);var f=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{})})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={shardSpan:"counter_shardSpan__PvIfK"}}},[[12,1,2]]]);
//# sourceMappingURL=main.dd012174.chunk.js.map