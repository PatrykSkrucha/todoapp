(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,t,n){e.exports=n(403)},230:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),c=(n(230),n(85)),l=n(17),s=n(29),u=n(21),d=n(134),m=n(24),f=n(140),p=n.n(f),g=n(141),b=n.n(g),h=n(5),w=Object(u.withStyles)(function(e,t){return{IconButton:{color:"#ff3d00",padding:5},Text:Object(m.a)({marginLeft:"5%",display:"flex",alignItems:"center",flexBasis:"90%",wordBreak:"break-all",padding:".3em .1em",fontSize:30},e.breakpoints.down("sm"),{fontSize:20}),Number:{flexBasis:"5%",display:"flex",alignItems:"flex-start"},IconSection:{flexBasis:"5%",padding:"2% 1%",display:"flex",alignItems:"flex-start"},Card:Object(m.a)({width:"50vw",minHeight:50,display:"flex",margin:".5em 0",justifyContent:"flex-end",padding:".5em"},e.breakpoints.down("sm"),{width:"80vw"})}})(function(e){var t=e.classes,n=e.id,a=e.task,r=e.deleteHandler,i=e.editHandler;return o.a.createElement(s.b,{key:"item-key-".concat(n),draggableId:"item-id-".concat(n),index:n,shouldRespectForceTouch:!1},function(e,n){return o.a.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),o.a.createElement(h.b,{className:t.Card,style:{background:n.isDragging?"#e0e0e0":"#f5f5f5"}},o.a.createElement(h.p,{className:t.Text,variant:"display1",gutterBottom:!0,inline:!0,style:{wordBreak:"break-all"}},a),o.a.createElement("div",{className:t.IconSection},o.a.createElement(h.h,{onClick:r,className:t.IconButton},o.a.createElement(p.a,null)),o.a.createElement(h.h,{onClick:i,className:t.IconButton},o.a.createElement(b.a,null)))))})}),k=n(142);function v(){var e=Object(d.a)(["\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-content: center;\n\t\tmargin: 0 auto;\t\n\t"]);return v=function(){return e},e}var E=function(e){var t=Object(k.a)(h.j)(v()),n=e.deleteHandler,a=e.editHandler,r=e.toDo.map(function(e,t){return o.a.createElement(w,{key:t,id:t,task:e,deleteHandler:function(){return n(t)},editHandler:function(){return a(t)}})});return o.a.createElement(s.c,{droppableId:"droppable"},function(e,n){return o.a.createElement(h.k,{rootRef:e.innerRef},o.a.createElement(t,e.droppableProps,r,e.placeholder))})},j=n(84),O=n.n(j),y=Object(u.withStyles)(function(e){return{Button:{background:"linear-gradient(45deg, ".concat(O.a[600]," 30%, ").concat(O.a[800]," 90%)"),borderRadius:3,border:0,color:"white",boxShadow:"0 3px 5px 2px rgba(0, 172, 193, .2)",textTransform:"capitalize",marginTop:10},Input:Object(m.a)({marginTop:15,width:"50vw"},e.breakpoints.down("sm"),{width:"80vw"})}})(function(e){var t=e.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.i,{className:t.Input,id:"standard-name",label:"Utw\xf3rz notatk\u0119",type:"text",onChange:e.changeHandler,inputRef:e.inputRef,onKeyDown:e.handleKeyDown,placeholder:"Utw\xf3rz zadanie"}),o.a.createElement(h.a,{className:t.Button,size:"medium",onClick:e.submitHandler},"Dodaj zadanie"))}),S=function(e){return o.a.createElement(h.l,Object.assign({direction:"up"},e))},x=Object(u.withStyles)(function(e){return{input:{margin:e.spacing.unit}}})(function(e){var t=e.classes,n=e.handleClose,r=e.open,i=e.task,c=Object(a.useState)(0),s=Object(l.a)(c,2),u=s[0],d=s[1];Object(a.useEffect)(function(){return d(i)},[i]);return o.a.createElement(h.c,{open:r,TransitionComponent:S,keepMounted:!0,onClose:function(){return n(u)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement(h.g,{id:"alert-dialog-slide-title"},"Edytuj notatk\u0119"),o.a.createElement(h.e,null,o.a.createElement(h.f,{id:"alert-dialog-slide-description"},o.a.createElement(h.i,{value:u,className:t.input,onChange:function(e){d(e.target.value)},onKeyDown:function(e){13===e.which&&n(u)},spellCheck:!1}))),o.a.createElement(h.d,null,o.a.createElement(h.a,{onClick:function(){return n(u)},color:"primary"},"Akceptuj")))}),C=n(145),I=n.n(C),N=Object(u.withStyles)(function(e){return{Text:{color:"white",textAlign:"center"},Button:{color:"#ffb300",padding:"2%",fontSize:".96em","&:hover":{background:"#424242"}},IconButton:{padding:5,color:"#fafafa","&:hover":{color:"#e0e0e0",backgroundColor:"inherit"}},Snackbar:Object(m.a)({maxWidth:300},e.breakpoints.down("sm"),{margin:"auto"}),SnackbarContent:{marginBottom:30,padding:"3% 4%"},SnackbarMessage:{display:"flex",alignItems:"center"},Action:{width:"100%"},CloseIcon:{fontSize:"0.85em"}}})(function(e){var t=e.classes,n=e.tooltipOpenHandler,a=e.tooltipCloseHandler,r=e.tooltip,i=e.snackbar,c=e.closeSnackbarHandler,l=e.revertList;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.m,{className:t.Snackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:"3000",open:i,onClose:c},o.a.createElement(h.n,{className:t.SnackbarContent,message:o.a.createElement("span",{id:"message-id",className:t.SnackbarMessage},o.a.createElement(h.p,{className:t.Text,id:"message-id",color:"primary",noWrap:!0},"Usuni\u0119to notatk\u0119")),action:o.a.createElement("div",{className:t.Action},o.a.createElement(h.a,{onClick:l,className:t.Button},"Cofnij"),o.a.createElement(h.o,{TransitionComponent:h.q,title:"Zamknij",placement:"bottom",open:r},o.a.createElement(h.h,{onMouseOver:n,onMouseLeave:a,onClick:c,className:t.IconButton},o.a.createElement(I.a,{className:t.CloseIcon}))))})))}),H=Object(u.withStyles)({Wrap:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"auto"},Tasks:{display:"flex",width:"90%",marginTop:30,flexDirection:"row",minHeight:200}})(function(e){var t=Object(a.useRef)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],u=r[1],d=Object(a.useState)([]),m=Object(l.a)(d,2),f=m[0],p=m[1],g=Object(a.useState)(null),b=Object(l.a)(g,2),h=b[0],w=b[1],k=Object(a.useState)(""),v=Object(l.a)(k,2),j=v[0],O=v[1],S=Object(a.useState)(null),C=Object(l.a)(S,2),I=C[0],H=C[1],B=Object(a.useState)(!1),T=Object(l.a)(B,2),D=T[0],R=T[1],z=Object(a.useState)(!1),W=Object(l.a)(z,2),A=W[0],L=W[1],U=Object(a.useState)(!1),F=Object(l.a)(U,2),M=F[0],P=F[1],J=e.classes;Object(a.useEffect)(function(){localStorage.getItem("tasks")&&p(JSON.parse(localStorage.getItem("tasks"))),P(!0)},[]),Object(a.useEffect)(function(){M&&localStorage.setItem("tasks",JSON.stringify(f))},[f]);var K=function(){i.trim()&&(p(f.concat(i)),u(""),t.current.value="")};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{onDragEnd:function(e){if(e.destination){var t=function(e,t,n){var a=Object(c.a)(e),o=a.splice(t,1),r=Object(l.a)(o,1)[0];return a.splice(n,0,r),a}(f,e.source.index,e.destination.index);p(t)}}},o.a.createElement("div",{className:J.Wrap},o.a.createElement(y,{changeHandler:function(e){u(e.target.value)},refInput:t,handleKeyDown:function(e){13===e.which&&K()},task:i,submitHandler:K,value:i,inputRef:t}),o.a.createElement("div",{className:J.Tasks},o.a.createElement(E,{toDo:f,deleteHandler:function(e){w(f),p(f.filter(function(t,n){return n!==e})),R(!0)},editHandler:function(e){H(e),O(f[e])}})))),o.a.createElement(x,{handleClose:function(e){if(e===j||""===e)O(""),H(null);else{var t=Object(c.a)(f);t.splice(I,1,e),p(t),O(""),H(null)}},task:j,open:""!==j}),o.a.createElement(N,{snackbar:D,closeSnackbarHandler:function(){R(!1),L(!1)},revertList:function(){p(h),w(null),R(!1)},tooltip:A,tooltipOpenHandler:function(){L(!0)},tooltipCloseHandler:function(){L(!1)}}))}),B=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todoapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todoapp","/service-worker.js");T?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(t,e)})}}()}},[[225,2,1]]]);
//# sourceMappingURL=main.bbd3b012.chunk.js.map