(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){e.exports=a(296)},181:function(e,t,a){},28:function(e,t,a){e.exports={Task:"Task__Task___3UTC2",Text:"Task__Text___HK-JR",DeleteButton:"Task__DeleteButton___3b3yy"}},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=(a(181),a(44)),s=a(28),i=a.n(s),u=a(74),d=a.n(u),m=a(21),p=a(15),_=a(42),f=a.n(_),w=Object(p.withStyles)(function(e){return{deleteIcon:{color:f.a[600],"&:hover":{color:f.a[900]}}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:i.a.Task},r.a.createElement("span",{className:i.a.Text},e.task),r.a.createElement("div",{className:i.a.DeleteButton},r.a.createElement(m.b,{onClick:e.deleteHandler,className:t.deleteIcon},r.a.createElement(d.a,null)))))}),k=a(75),b=a.n(k),h=function(e){var t=e.toDo.map(function(t,a){return r.a.createElement(w,{key:a,task:t,value:e.value,deleteHandler:function(){return e.deleteHandler(a)}})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:b.a.UlList},t))},v=a(76),E=Object(p.withStyles)(function(e){return{root:{background:"linear-gradient(45deg, #00acc1 30%, #01579b 90%)",borderRadius:3,border:0,color:"white",boxShadow:"0 3px 5px 2px rgba(0, 172, 193, .2)",textTransform:"capitalize",marginTop:10},input:Object(v.a)({marginTop:15,width:"50vw"},e.breakpoints.down("sm"),{width:"90vw"})}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,{classes:{input:t.input},id:"standard-name",label:"Utw\xf3rz notatk\u0119",type:"text",onChange:e.changeHandler,inputRef:e.inputRef,onKeyDown:e.handleKeyDown,placeholder:"Utw\xf3rz zadanie"}),r.a.createElement(m.a,{classes:{root:t.root},size:"medium",onClick:e.submitHandler},"Dodaj zadanie"))}),T=a(43),g=a.n(T),x=function(){var e=Object(n.useRef)(),t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],l=a[1],s=Object(n.useState)([]),i=Object(c.a)(s,2),u=i[0],d=i[1],m=function(){o.trim()&&(d(u.concat(o)),l(""),e.current.value="")};return r.a.createElement("div",{className:g.a.Wrap},r.a.createElement(E,{changeHandler:function(e){l(e.target.value)},refInput:e,handleKeyDown:function(e){13===e.which&&m()},task:o,submitHandler:m,value:o,inputRef:e}),r.a.createElement("div",{className:g.a.Tasks},r.a.createElement(h,{toDo:u,deleteHandler:function(e){d(u.filter(function(t,a){return a!==e}))}})))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){e.exports={Wrap:"ToDoApp__Wrap___18CrV",Tasks:"ToDoApp__Tasks___2MaVj"}},75:function(e,t,a){e.exports={UlList:"Tasks__UlList___dkvZ9"}}},[[176,2,1]]]);
//# sourceMappingURL=main.ad016e98.chunk.js.map