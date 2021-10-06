(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(t,e,n){},33:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(24),o=n.n(r),s=(n(32),n(9)),a=n(3),i=(n(33),n(0));function j(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Home Page \ud83e\udd84 \ud83c\udf08"})})}var u=n(5),l=n(4),b=n.n(l);function h(t){var e=function(){b.a.delete("/api/auth/logout").then((function(t){return t.data})).catch((function(t){return t.response.data})).then((function(){t.setUser(null)}))};return Object(i.jsx)("nav",{children:t.user?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.b,{to:"/",children:Object(i.jsx)("button",{children:"Home"})}),Object(i.jsx)(u.b,{to:"/projects",children:Object(i.jsx)("button",{children:"Projects"})}),Object(i.jsx)(u.b,{to:"/",onClick:function(){return e()},children:Object(i.jsx)("button",{children:"Logout"})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.b,{to:"/signup",children:Object(i.jsx)("button",{children:"Signup \ud83d\udd11"})}),Object(i.jsx)(u.b,{to:"/login",children:Object(i.jsx)("button",{children:"Login"})})]})})}var d=n(2);function p(t){var e=t.title,n=t.description,c=t._id;return console.log(e),Object(i.jsxs)("div",{children:[Object(i.jsx)(u.b,{to:"/projects/".concat(c),children:Object(i.jsx)("h3",{children:e})}),Object(i.jsx)("p",{children:n})]})}function O(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),r=n[0],o=n[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],l=j[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Add Project Form"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:r,description:u};b.a.post("".concat("http://localhost:5005","/api/projects"),n).then((function(e){o(""),l(""),t.refreshProjects()})).catch((function(t){return console.log(t)}))},children:[Object(i.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(i.jsx)("input",{type:"text",name:"title",value:r,onChange:function(t){return o(t.target.value)}}),Object(i.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(i.jsx)("input",{type:"text",name:"description",value:u,onChange:function(t){return l(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Add this project \uff0b"})]})]})}function x(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=function(){b.a.get("/api/projects").then((function(t){console.log(t),r(t.data)})).catch((function(t){return console.log(t)}))};return Object(c.useEffect)((function(){o()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"All Projects \ud83d\udcdd"}),n.map((function(t){return Object(i.jsx)(p,Object(s.a)({},t),t._id)})),Object(i.jsx)(O,{refreshProjects:o})]})}function f(t){var e=Object(c.useState)(null),n=Object(a.a)(e,2),r=n[0],o=n[1],s=t.match.params.id;return Object(c.useEffect)((function(){b.a.get("".concat("http://localhost:5005","/api/projects/").concat(s)).then((function(t){console.log(t.data),o(t.data)})).catch((function(t){return console.log(t)}))}),[]),Object(i.jsx)("div",{children:r&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:r.title}),Object(i.jsx)("p",{children:r.description}),Object(i.jsx)(u.b,{to:"/projects/edit/".concat(r._id),children:Object(i.jsx)("button",{children:"Edit this project"})})]})})}function g(t){var e="http://localhost:5005",n=Object(c.useState)(""),r=Object(a.a)(n,2),o=r[0],s=r[1],j=Object(c.useState)(""),u=Object(a.a)(j,2),l=u[0],h=u[1],d=t.match.params.id;Object(c.useEffect)((function(){b.a.get("".concat(e,"/api/projects/").concat(d)).then((function(t){console.log("use effect"),s(t.data.title),h(t.data.description)})).catch((function(t){return console.log(t)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Edit this project"}),Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c={title:o,description:l};b.a.put("".concat(e,"/api/projects/").concat(d),c).then((function(e){t.history.push("/projects/".concat(d))})).catch((function(t){return console.log(t)}))},children:[Object(i.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(i.jsx)("input",{type:"text",name:"title",value:o,onChange:function(t){return s(t.target.value)}}),Object(i.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(i.jsx)("input",{type:"text",name:"description",value:l,onChange:function(t){return h(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Update this project"})]}),Object(i.jsx)("button",{onClick:function(){b.a.delete("".concat(e,"/api/projects/").concat(d)).then((function(){t.history.push("/projects")})).catch((function(t){return console.log(t)}))},children:"Delete this project \ud83d\uddd1"})]})}function m(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),r=n[0],o=n[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],l=j[1],h=Object(c.useState)(""),d=Object(a.a)(h,2),p=d[0],O=d[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Signup"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r,u),function(t,e){return b.a.post("/api/auth/signup",{username:t,password:e}).then((function(t){return t.data})).catch((function(t){return t.response.data}))}(r,u).then((function(e){console.log(e),e.message?(o(""),l(""),O(e.message)):(t.setUser(e),t.history.push("/projects"))})).catch((function(t){return console.log(t)}))},children:[Object(i.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(i.jsx)("input",{type:"text",name:"username",value:r,onChange:function(t){return o(t.target.value)}}),Object(i.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(i.jsx)("input",{type:"password",name:"password",value:u,onChange:function(t){return l(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Sign Up \u270d\ufe0f"}),p&&Object(i.jsx)("h3",{children:p})]})]})}function v(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),r=n[0],o=n[1],s=Object(c.useState)(""),j=Object(a.a)(s,2),u=j[0],l=j[1],h=Object(c.useState)(""),d=Object(a.a)(h,2),p=d[0],O=d[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Login"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r,u),function(t,e){return b.a.post("/api/auth/login",{username:t,password:e}).then((function(t){return t.data})).catch((function(t){return t.response.data}))}(r,u).then((function(e){console.log(e),e.message?(o(""),l(""),O(e.message)):(t.setUser(e),t.history.push("/projects"))})).catch((function(t){return console.log(t)}))},children:[Object(i.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(i.jsx)("input",{type:"text",name:"username",value:r,onChange:function(t){return o(t.target.value)}}),Object(i.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(i.jsx)("input",{type:"password",name:"password",value:u,onChange:function(t){return l(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Log in \ud83d\udd11"}),p&&Object(i.jsx)("h3",{children:p})]})]})}var S=n(27),F=["component","user","path","redirectPath"],y=function(t){var e=t.component,n=t.user,c=t.path,r=t.redirectPath,o=void 0===r?"/":r,a=Object(S.a)(t,F);return Object(i.jsx)(d.b,{exact:!0,path:c,render:function(t){return n?Object(i.jsx)(e,Object(s.a)(Object(s.a)(Object(s.a)({},t),a),{},{user:n})):Object(i.jsx)(d.a,{to:o})}})};var C=function(t){var e=Object(c.useState)(t.user),n=Object(a.a)(e,2),r=n[0],o=n[1],u=function(t){o(t)};return console.log("App js: ",r),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(h,{user:r,setUser:u}),Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.b,{exact:!0,path:"/",component:j}),Object(i.jsx)(y,{exact:!0,path:"/projects",user:r,component:x}),Object(i.jsx)(y,{exact:!0,path:"/projects/:id",user:r,component:f,redirect:"/login"}),Object(i.jsx)(d.b,{exact:!0,path:"/projects/edit/:id",component:g}),Object(i.jsx)(d.b,{exact:!0,path:"/signup",render:function(t){return Object(i.jsx)(m,Object(s.a)({setUser:u},t))}}),Object(i.jsx)(d.b,{exact:!0,path:"/login",render:function(t){return Object(i.jsx)(v,Object(s.a)({setUser:u},t))}})]})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),o(t),s(t)}))};b.a.get("/api/auth/loggedin").then((function(t){console.log("logged in user: ",t.data);var e=t.data;o.a.render(Object(i.jsx)(u.a,{children:Object(i.jsx)(C,{user:e})}),document.getElementById("root"))})),w()}},[[62,1,2]]]);
//# sourceMappingURL=main.75471e37.chunk.js.map