(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(21),a=c.n(s),i=c(15),o=c(3),j=c(5),u=c(4),l=c(0);var b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" Checkout our inventory, I am sure there is something you've had your \ud83d\udc40 on. "}),Object(l.jsx)("p",{children:" BnKicks is a place for sneaker heads better yet shoe connoisseur to pick up kicks. Old and new there is something for everyone. Need new laces! We got you covered! Expanding collection and new somewhere to store your precious kicks! We got you! Went to a concert and your shoes are a hot mess! We've got you covered with cleaning solutions,too! Whats life without being in your kicks! \ud83d\ude0e"})]})};var d=function(){return Object(l.jsx)("div",{class:"headercard",children:Object(l.jsx)("h1",{children:"Welcome to BnKicks\ud83d\udd25!"})})};var O=function(e){var t=e.onLogin,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(n.useState)([]),O=Object(o.a)(d,2),h=O[0],x=O[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),m=p[0],v=p[1];return Object(l.jsxs)("div",{class:"login-bg",children:[Object(l.jsx)("h3",{class:"login-label",children:" Log In:"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0),fetch("/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:u})}).then((function(e){v(!1),e.ok?e.json().then((function(e){x([]),t(e)})):e.json().then((function(e){return x(e.errors)}))}))},children:[Object(l.jsxs)("formField",{children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",id:"name",autoComplete:"on",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("formField",{children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(l.jsx)("formField",{children:Object(l.jsx)("button",{class:"btn btn-primary btn-block btn-large",variant:"fill",color:"primary",type:"submit",children:m?"Loading...":"Login"})}),Object(l.jsx)("formField",{children:h.map((function(e){return Object(l.jsx)("error",{children:e},e)}))})]})]})},h=c(10),x=c(12);var f=function(e){var t=e.name,c=e.desc,r=e.price,s=e.img,a=(e.sold,e.addToCart),i=Object(n.useState)(!0),j=Object(o.a)(i,2),u=j[0],b=j[1];function d(){b((function(e){return!e}))}return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"kick-card",children:Object(l.jsxs)("div",{class:"kickscard",children:[Object(l.jsx)("img",{class:"",src:s,alt:t,width:400}),Object(l.jsxs)("div",{class:"con",children:[Object(l.jsxs)("h4",{children:[" ",t," "]}),Object(l.jsxs)("p",{children:[" ",c]}),Object(l.jsxs)("p",{children:[" $",r]}),u?Object(l.jsx)("button",{className:"primary",onClick:d,children:"In Stock"}):Object(l.jsx)("button",{onClick:d,children:"Out of Stock"}),Object(l.jsx)("button",{onClick:function(){return a()},class:"button-85",children:" Add to Cart "})]})]})})})};function p(e,t,c){return c.indexOf(e)===t}var m=function(e){var t=e.kicks,c=Object(n.useState)([]),r=Object(o.a)(c,2),s=r[0],a=r[1],u=function(){var e=Object(x.a)(Object(h.a)().mark((function e(t){var c,n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=JSON.parse(localStorage.getItem("cart"))||[],n=(n=[].concat(Object(i.a)(s),Object(i.a)(c),[t])).filter(p),a(n),localStorage.setItem("cart",JSON.stringify(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=t.map((function(e){return Object(l.jsx)(f,{id:e.id,name:e.name,img:e.img,price:e.price,desc:e.desc,sold:e.sold,addToCart:function(){return u(e)}},e.id)}));return Object(l.jsxs)("div",{className:"kickslist",children:[Object(l.jsx)(j.b,{to:"/checkout",children:Object(l.jsx)("button",{button:!0,class:"button-85",children:" Checkout Now  "})}),b]})};var v=function(e){var t=e.setQuery;return Object(l.jsxs)("div",{className:"searchbar",children:[Object(l.jsx)("h2",{children:" Search By Shoe Name:"}),Object(l.jsx)("div",{class:"search-box",children:Object(l.jsx)("input",{className:"fas",type:"text",id:"search",placeholder:"Type a shoe you want to \ud83d\udc40...",onChange:function(e){return t(e.target.value)}})})]})};var g=function(e){var t=e.onLogin,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(n.useState)(""),O=Object(o.a)(d,2),h=O[0],x=O[1],f=Object(n.useState)(""),p=Object(o.a)(f,2),m=p[0],v=p[1],g=Object(n.useState)([]),y=Object(o.a)(g,2),k=y[0],S=y[1],w=Object(n.useState)(!1),C=Object(o.a)(w,2),N=C[0],F=C[1];return Object(l.jsxs)("div",{class:"sign-up-form",children:[Object(l.jsx)("h2",{class:"signup-label",children:"If you do not have an account with us, get one today!"}),Object(l.jsx)("h1",{class:"signup-label",children:" Sign-Up Here:"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S([]),F(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:h,username:s,password_confirmation:m})}).then((function(e){F(!1),e.ok?e.json().then((function(e){S([]),t(e)})):e.json().then((function(e){return S(e.errors)}))}))},children:[Object(l.jsxs)("formField",{children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",id:"name",autoComplete:"off",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("formField",{children:[Object(l.jsx)("label",{htmlFor:"username",children:"Email"}),Object(l.jsx)("input",{type:"text",id:"email",autoComplete:"off",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(l.jsxs)("formField",{children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",value:h,onChange:function(e){return x(e.target.value)},autoComplete:"current-password"})]}),Object(l.jsxs)("formField",{children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password Confirmation"}),Object(l.jsx)("input",{type:"password",id:"password_confirmation",value:m,onChange:function(e){return v(e.target.value)},autoComplete:"current-password"})]}),Object(l.jsx)("formField",{children:Object(l.jsx)("button",{class:"btn btn-primary btn-block btn-large",type:"submit",children:N?"Loading...":"Sign Up"})}),Object(l.jsx)("formField",{children:k.map((function(e){return Object(l.jsx)("error",{children:e},e)}))})]}),Object(l.jsx)("div",{class:"btm-space"})]})};var y=function(e){var t=e.setUser;return Object(l.jsxs)("div",{class:"",children:[Object(l.jsx)(O,{onLogin:t}),Object(l.jsx)(g,{onLogin:t})]})};var k=function(e){var t=e.onAddKick,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(n.useState)(""),O=Object(o.a)(d,2),h=O[0],x=O[1],f=Object(n.useState)(""),p=Object(o.a)(f,2),m=p[0],v=p[1],g=Object(n.useState)(1),y=Object(o.a)(g,2),k=y[0];return y[1],Object(l.jsxs)("div",{class:"newkickform",children:[Object(l.jsx)("h1",{children:"New Kicks Form"}),Object(l.jsx)("h2",{children:"If you are ready to sell 'em! We are ready to put some \ud83d\udcb5 in your \ud83c\udfe6!"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,img:u,desc:h,price:m,category_id:k})}).then((function(e){return e.json()})).then((function(e){return t(e)}))},children:[Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Shoe Name",value:s,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("input",{type:"text",name:"image",placeholder:"Shoe Image",value:u,onChange:function(e){return b(e.target.value)}}),Object(l.jsx)("input",{type:"text",name:"description",placeholder:"Shoe Description",value:h,onChange:function(e){return x(e.target.value)}}),Object(l.jsx)("input",{type:"number",name:"price",step:"0.01",placeholder:" Shoe Price",value:m,onChange:function(e){return v(parseFloat(e.target.value))}}),Object(l.jsx)("button",{type:"submit",children:" Add Kicks "})]})]})};var S=function(e){var t=e.user,c=e.setUser;return t?Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{class:"logo-name",children:" BnKicks \ud83d\udd25"}),Object(l.jsx)("h5",{class:"logo-sub",children:'"Never a bad day for some feet heat!"'})]}),Object(l.jsx)("div",{class:"navbar",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/",children:"Home"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/kicks",children:"Kicks"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/kicks/new",children:"Sell Your Kicks "})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/cart",children:"Cart"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/",onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(){return c()}))},children:"Logout"})," "]})]})})]}):Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{class:"logo-name",children:" BnKicks \ud83d\udd25"}),Object(l.jsx)("h5",{class:"logo-sub",children:'"Never a bad day for some feet heat!"'})]}),Object(l.jsxs)("div",{class:"navbar",children:[Object(l.jsx)(j.b,{to:"/",children:"Home"}),Object(l.jsx)(j.b,{to:"/kicks",children:"Kicks"})]})]})};var w=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(o.a)(s,2),i=a[0],u=a[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),O=d[0],f=d[1],p=Object(n.useState)(""),m=Object(o.a)(p,2),v=m[0],g=m[1],y=Object(n.useState)(""),k=Object(o.a)(y,2),S=k[0],w=k[1],C=Object(n.useState)([]),N=Object(o.a)(C,2),F=N[0],E=N[1],I=Object(n.useState)(0),K=Object(o.a)(I,2),T=K[0],L=K[1];return Object(n.useEffect)(Object(x.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("cart"));case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){!function(){var e=0;F.map((function(t){return e+=t.price})),L(e)}()}),[F]),Object(l.jsxs)("div",{class:"checkoutform",children:[Object(l.jsx)("h1",{children:" Checkout Form"}),Object(l.jsx)("h2",{children:"Get ready something is on the way!"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/orders/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({streetnumber:i,streetname:c,city:O,state:v,zip_code:S,total_price:T})}).then((function(e){return e.json()}))},children:[Object(l.jsx)("label",{children:"Enter your streetnumber: "}),Object(l.jsx)("input",{type:"text",name:"streetnumber",value:i,onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("label",{children:"Enter your streetname: "}),Object(l.jsx)("input",{type:"text",name:"streetname",value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Enter your city: "}),Object(l.jsx)("input",{type:"text",name:"city",value:O,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("label",{children:"Enter your state: "}),Object(l.jsx)("input",{type:"text",name:"state",value:v,onChange:function(e){return g(e.target.value)}}),Object(l.jsx)("label",{children:"Enter your zipcode: "}),Object(l.jsx)("input",{type:"number",name:"zipcode",value:S,onChange:function(e){return w(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"}),Object(l.jsx)(j.b,{to:"/kicks",children:Object(l.jsx)("button",{button:!0,class:"button-85",children:" Add More Items "})})]})]})},C=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(o.a)(s,2),i=a[0],u=a[1],b=function(){var e=0;i.map((function(t){return e+=t.price})),r(e)};return Object(n.useEffect)(Object(x.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("cart"));case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){b()}),[i]),Object(l.jsxs)("section",{children:[Object(l.jsx)(j.b,{to:"/checkout",children:Object(l.jsx)("button",{button:!0,class:"button-85",children:" Checkout Now  "})}),i.map((function(e){return Object(l.jsxs)("div",{className:"cart_box",children:[Object(l.jsxs)("div",{className:"cart_img",children:[Object(l.jsx)("img",{src:e.img,alt:"",width:400}),Object(l.jsx)("p",{children:e.name})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("button",{children:["$",e.price]})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:e.price}),Object(l.jsx)("button",{onClick:function(){return function(e){var t=i.filter((function(t){return t.id!==e}));u(t),localStorage.setItem("cart",JSON.stringify(t)),b()}(e.id)},children:"Remove"})]})]},e.id)})),Object(l.jsxs)("div",{className:"total",children:[Object(l.jsx)("span",{children:"Total Price of your Cart "}),Object(l.jsxs)("span",{children:["$",c]})]})]})};c(35);var N=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(o.a)(s,2),O=a[0],h=a[1],x=Object(n.useState)([]),f=Object(o.a)(x,2),p=f[0],g=f[1],N=Object(n.useState)(""),F=Object(o.a)(N,2),E=F[0],I=F[1];return Object(n.useEffect)((function(){fetch("/items").then((function(e){return e.json()})).then((function(e){return h(e)}))}),[]),Object(n.useEffect)((function(){var e=O.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())}));g(e)}),[E]),Object(n.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){r(e)}))}))}),[]),Object(l.jsxs)(j.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(S,{user:c,setUser:r}),Object(l.jsxs)(u.c,{children:[Object(l.jsxs)(u.a,{path:"/",exact:!0,component:function(){return Object(l.jsx)(b,{})},children:[Object(l.jsx)(b,{}),Object(l.jsx)(y,{})]}),Object(l.jsxs)(u.a,{path:"/kicks",exact:!0,component:function(){return Object(l.jsx)(m,{kicks:p.length?p:O,setKicks:h})},children:[Object(l.jsx)(v,{setQuery:I}),Object(l.jsx)(m,{kicks:p.length?p:O,setKicks:h})]}),Object(l.jsx)(u.a,{exact:!0,path:"/kicks/new",component:function(){return Object(l.jsx)(k,{})}}),Object(l.jsx)(k,{onAddKick:function(e){var t=[].concat(Object(i.a)(O),[e]);h(t),console.log(e)}}),Object(l.jsx)(u.a,{path:"/checkout",component:function(){return Object(l.jsx)(w,{})}}),Object(l.jsx)(u.a,{path:"/cart",component:function(){return Object(l.jsx)(C,{})}})]})]})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j.a,{children:Object(l.jsx)(N,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.76bfcd5e.chunk.js.map