(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(23),l=c.n(n),r=(c(29),c(30),c(13)),i=c(12),o=c(10),d=c(8),j=c(7),u=c(16),m=c(4),b=function(e){var t=function(t){return Object(m.jsx)(u.a,{id:t.id,onClick:e.click,style:{height:"100%"},className:"true"===t.completed?"btn btn-danger btn-md float-right":"btn btn-success btn-md float-right",children:Object(m.jsx)("i",{className:"true"===t.completed?"fas fa-times":"fas fa-arrow-right"})})};return e.tasks.map((function(e){return Object(m.jsx)(o.a.Item,{className:"true"===e.completed?"task-completed p-2 font-weight-light":e.isImportant?"task-important p-2 font-weight-bold":"task p-2",children:Object(m.jsxs)(d.a,{className:"p-1",children:[Object(m.jsx)(j.a,{className:"align-self-center",children:e.title}),Object(m.jsx)(j.a,{children:t(e)})]})},e.id)}))},f=function(e){var t;"To do"===e.title&&(t="nothing to do, good job"),"In progress"===e.title&&(t="no tasks there, start doing something!"),"Completed"===e.title&&(t="no tasks completed, lazy!");var c=e.tasks.length>0?Object(m.jsx)(b,{tasks:e.tasks,click:e.click}):Object(m.jsx)("h2",{className:"text-center",children:t});return Object(m.jsx)("div",{children:c})},h=c(18),p=function(e){return Object(m.jsx)(h.a,{className:"taskContainer",children:Object(m.jsxs)(h.a.Body,{children:[Object(m.jsx)(h.a.Title,{className:"h5 p-2",children:e.title}),Object(m.jsx)("hr",{}),Object(m.jsx)(o.a,{children:Object(m.jsx)(f,{title:e.title,tasks:e.tasks,click:e.click})})]})})},x=function(e){var t=e.tasks.filter((function(e){return"true"===e.completed})),c=[{title:"To do",completed:"false",tasks:e.tasks.filter((function(e){return"false"===e.completed}))},{title:"In progress",completed:"inProgress",tasks:e.tasks.filter((function(e){return"inProgress"===e.completed}))},{title:"Completed",completed:"true",tasks:t}].map((function(t){return Object(m.jsx)(j.a,{lg:!0,className:"p-2",children:Object(m.jsx)(p,{title:t.title,tasks:t.tasks,click:e.handleClick})},t.id)}));return Object(m.jsx)(d.a,{className:"px-3",children:c})},O=c(22),k=c(9),g=function(e){var t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1],l=Object(s.useState)(!1),r=Object(i.a)(l,2),o=r[0],b=r[1],f=function(t){t.preventDefault(),a.length<1?alert("Enter your task before adding it!"):(e.handleAddTask(a,o),b(!1),n(""))};return Object(m.jsx)(O.a,{onSubmit:f,children:Object(m.jsxs)(d.a,{className:"px-2 mt-2 mb-2  flex",children:[Object(m.jsx)(j.a,{className:"mt-3 pr-sm-2",children:Object(m.jsx)(O.a.Control,{maxLength:"60",value:a,onChange:function(e){n(e.target.value)},size:"lg",placeholder:"enter new task here"})}),Object(m.jsx)(j.a,{sm:"auto",className:"mt-3 pl-sm-2",children:Object(m.jsxs)(k.a,{size:"lg",className:"justify-content-md-end justify-content-center flex-fill",children:[Object(m.jsx)(k.a.Prepend,{className:"flex-fill",children:Object(m.jsx)(k.a.Text,{className:"flex-fill",children:"is it important?"})}),Object(m.jsx)(k.a.Checkbox,{style:{width:"20px",height:"20px"},checked:o,onChange:function(e){b(!o)}}),Object(m.jsx)(k.a.Append,{className:"flex-fill",children:Object(m.jsx)(u.a,{type:"submit",className:"flex-fill",onClick:f,children:"add task"})})]})})]})})},N=c(24),v=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){a(JSON.parse(localStorage.getItem("tasks")))}),[]),Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))})),Object(m.jsxs)(N.a,{fluid:!0,className:"home text-lowercase",children:[Object(m.jsx)(d.a,{className:"spacer"}),Object(m.jsx)(g,{handleAddTask:function(e,t){var s={title:e,completed:"false",id:Math.random(),isImportant:t};a([].concat(Object(r.a)(c),[s]))}}),Object(m.jsx)(x,{tasks:c,handleClick:function(e){var t=c.filter((function(t){return t.id.toString()===e.currentTarget.id})),s=c.filter((function(t){return t.id.toString()!==e.currentTarget.id}));"false"===(t=t[0]).completed?(t.completed="inProgress",a([].concat(Object(r.a)(s),[t]))):"inProgress"===t.completed?(t.completed="true",a([].concat(Object(r.a)(s),[t]))):"true"===t.completed&&a(Object(r.a)(s))}}),Object(m.jsx)("button",{onClick:function(){return a([])},children:"clear"})]})};var C=function(){return Object(m.jsx)(v,{})};l.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c4054025.chunk.js.map