(this["webpackJsonptodo-test"]=this["webpackJsonptodo-test"]||[]).push([[0],{86:function(e,a,t){e.exports=t(98)},91:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=(t(91),t(31)),m=t(26),o=t(62),u=t(24),s=Object(n.createContext)(),d=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("my-todo");e&&c(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("my-todo",JSON.stringify(l))}));return r.a.createElement(s.Provider,{value:{tasks:l,handleOnUpdateTask:function(e){console.log(e)},handleOnAddTask:function(e){c((function(a){return[].concat(Object(o.a)(a),[e])}))},handleOnDeleteTask:function(e){var a=Object(o.a)(l);a=a.filter((function(a){return a.id!==e.currentTarget.id})),c(a)}}},e.children)},E=t(123),p=t(126),k=t(132),h=t(135),f=t(71),g=t.n(f),b=t(70),v=t.n(b),y=function(e){var a=Object(n.useContext)(s),t=a.handleOnDeleteTask,l=a.handleOnEditTask,c=Object(m.f)();return r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,p:2,boxShadow:2},r.a.createElement(k.a,{width:"10%",textAlign:"center"},r.a.createElement(E.a,{variant:"h5",color:"primary",gutterBottom:!0},e.taskGroup)),r.a.createElement(h.a,{title:"Tu b\u0119d\u0105 kiedy\u015b wy\u015bwietlane szczegu\u0142y zadania ;)"},r.a.createElement(k.a,{width:"30%",textAlign:"center"},r.a.createElement(E.a,{variant:"h5",color:"secondary",gutterBottom:!0},e.taskName))),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},e.taskDate)),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},e.taskTime)),r.a.createElement(k.a,{width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"},r.a.createElement(p.a,{id:e.id,onClick:function(){return c.push("/edit".concat(e.id))},onMouseUp:l,variant:"contained",color:"primary",startIcon:r.a.createElement(v.a,null)},"Edytuj"),r.a.createElement(p.a,{id:e.id,onClick:t,variant:"contained",color:"secondary",startIcon:r.a.createElement(g.a,null)},"Usu\u0144")))},x=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(t,n){if(!t.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof t[e]?t[e].toUpperCase():t[e],l="string"===typeof n[e]?n[e].toUpperCase():n[e],c=0;return r>l?c=1:r<l&&(c=-1),"desc"===a?-1*c:c}},j=function(){var e=Object(n.useContext)(s),a=e.tasks,t=e.handleOnDeleteTask,l=e.settingEditTask,c=Object(m.f)();return r.a.createElement("div",null,r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(E.a,{variant:"h2",color:"primary",gutterBottom:!0},"Zaplanowane zadania")),r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-2,pb:2,boxShadow:2},r.a.createElement(k.a,{width:"10%",textAlign:"center",ml:2},r.a.createElement(E.a,{variant:"h5"},"Grupa")),r.a.createElement(k.a,{width:"30%",textAlign:"center"},r.a.createElement(E.a,{variant:"h5"},"Zadanie")),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Data")),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Godzina")),r.a.createElement(k.a,{width:"20%",textAlign:"center"})),a.sort(x("taskTime")).sort(x("taskDate")).map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,taskGroup:e.taskGroup,taskName:e.taskName,taskDate:e.taskDate,taskTime:e.taskTime,handleOnDeleteTask:t,settingEditTask:l})})),r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(p.a,{id:a.id,onClick:function(){return c.push("/add")},variant:"contained",color:"primary"},"Dodaj nowe")))},O=t(33),w=t(34),C=Object(n.createContext)(),D=function(e){var a=Object(n.useState)({tasksName:["powt\xf3rka","sprawdzian","kartk\xf3wka","pytanie","luzik"],groupsName:["1a","1b","1c","2a","2b","2c"]}),t=Object(u.a)(a,2),l=t[0];t[1];return r.a.createElement(C.Provider,{value:Object(w.a)({},l)},e.children)},T=t(134),A=t(127),I=t(129),z=t(130),G=t(128),N=t(136),S=t(72),B=t.n(S),U=function(){var e=Object(n.useContext)(s).handleOnAddTask,a=Object(n.useContext)(C),t=a.tasksName,l=a.groupsName,c=Object(m.f)(),i=Object(n.useState)({id:Object(T.a)(),taskGroup:"",taskName:"",taskDate:"",taskTime:""}),o=Object(u.a)(i,2),d=o[0],h=o[1],f=function(e){var a=e.target,t=a.value,n=a.name;h((function(e){return Object(w.a)({},e,Object(O.a)({},n,t))}))};return r.a.createElement("form",{action:"#",onSubmit:function(a){a.preventDefault(),e(d),c.push("/")}},r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(E.a,{variant:"h2",color:"primary",gutterBottom:!0},"Dodaj nowe zadanie")),r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-3,boxShadow:2},r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Grupa")),r.a.createElement(k.a,{width:"20%",textAlign:"center",ml:-4},r.a.createElement(E.a,{variant:"h6"},"Zadanie")),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Data")),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Godzina")),r.a.createElement(k.a,{width:"20%",textAlign:"center"})),r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(A.a,null,r.a.createElement(z.a,{labelId:"taskGroup",name:"taskGroup",required:!0,id:"taskGroup",value:d.taskGroup,onChange:f},l.map((function(e){return r.a.createElement(N.a,{key:e,value:e},e)}))),r.a.createElement(I.a,null,"Wybierz klas\u0119")),r.a.createElement(A.a,null,r.a.createElement(z.a,{labelId:"taskName",name:"taskName",id:"taskName",required:!0,value:d.taskName,onChange:f},t.map((function(e){return r.a.createElement(N.a,{key:e,value:e},e)}))),r.a.createElement(I.a,null,"Wybierz zadanie")),r.a.createElement(A.a,null,r.a.createElement(G.a,{type:"date",label:"Data",name:"taskDate",id:"taskDate",required:!0,value:d.taskDate,onChange:f}),r.a.createElement(I.a,null,"Data")),r.a.createElement(A.a,null,r.a.createElement(G.a,{type:"time",min:"08:00",max:"15:10",name:"taskTime",id:"taskTime",required:!0,value:d.taskTime,onChange:f}),r.a.createElement(I.a,null,"Godzina")),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",startIcon:r.a.createElement(B.a,null)},"Dodaj")))},q=t(73),J=t.n(q),P=function(){var e=Object(m.f)(),a=Object(n.useContext)(C),t=a.tasksName,l=a.groupsName,c=Object(n.useContext)(s),i=c.tasks,o=c.handleOnUpdateTask,d=Object(m.g)().id,h=i.filter((function(e){return e.id===d}))[0],f=Object(n.useState)(h),g=Object(u.a)(f,2),b=g[0],v=g[1],y=function(e){var a=e.target,t=a.value,n=a.name;v((function(e){return Object(w.a)({},e,Object(O.a)({},n,t))}))};return r.a.createElement("form",{action:"#",onSubmit:function(e){e.preventDefault(),o(b)}},r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(E.a,{variant:"h2",color:"primary",gutterBottom:!0},"Edytuj zadanie")),r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",mt:-3,ml:4,mr:4,boxShadow:2},r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Grupa")),r.a.createElement(k.a,{width:"20%",textAlign:"center",ml:-4},r.a.createElement(E.a,{variant:"h6"},"Zadanie")),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Data")),r.a.createElement(k.a,{width:"20%",textAlign:"center"},r.a.createElement(E.a,{variant:"h6"},"Godzina")),r.a.createElement(k.a,{width:"20%",textAlign:"center"})),r.a.createElement(k.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(A.a,null,r.a.createElement(z.a,{labelId:"taskGroup",name:"taskGroup",id:"taskGroup",value:b.taskGroup,onChange:y},l.map((function(e){return r.a.createElement(N.a,{key:e,value:e},e)}))),r.a.createElement(I.a,null,"Wybierz klas\u0119")),r.a.createElement(A.a,null,r.a.createElement(z.a,{labelId:"taskName",name:"taskName",id:"taskName",value:b.taskName,onChange:y},t.map((function(e){return r.a.createElement(N.a,{key:e,value:e},e)}))),r.a.createElement(I.a,null,"Wybierz zadanie")),r.a.createElement(A.a,null,r.a.createElement(G.a,{type:"date",label:"Data",name:"taskDate",id:"taskDate",value:b.taskDate,onChange:y}),r.a.createElement(I.a,null,"Data")),r.a.createElement(A.a,null,r.a.createElement(G.a,{type:"time",min:"08:00",max:"15:10",name:"taskTime",id:"taskTime",value:b.taskTime,onChange:y}),r.a.createElement(I.a,null,"Godzina")),r.a.createElement(p.a,{onClick:function(){return e.push("/")},type:"submit",variant:"contained",color:"primary",startIcon:r.a.createElement(J.a,null)},"Aktualizuj")))};t(97);var W=function(){return r.a.createElement(d,null,r.a.createElement(D,null,r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(m.a,{path:"/add"},r.a.createElement(U,null)),r.a.createElement(m.a,{exact:!0,path:"/edit:id"},r.a.createElement(P,null)))))))};c.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.c61ad19b.chunk.js.map