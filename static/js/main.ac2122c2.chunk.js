(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(23),l=s.n(n),r=(s(29),s(30),s(13)),i=s(12),o=s(10),d=s(8),j=s(7),u=s(16),h=s(4),m=function(e){var t=function(t){return Object(h.jsx)(u.a,{id:t.id,onClick:e.click,style:{height:"100%"},className:"true"===t.completed?"btn btn-danger btn-md float-right shadow":"btn btn-success btn-md float-right shadow",children:Object(h.jsx)("i",{className:"true"===t.completed?"fas fa-times":"fas fa-arrow-right"})})};return e.tasks.map((function(e){return Object(h.jsx)(o.a.Item,{className:"true"===e.completed?"task-completed task-hover p-2 font-weight-light shadow  ":e.isImportant?"task-important task-hover p-2 font-weight-bold shadow  ":"task task-hover p-2 shadow  ",children:Object(h.jsxs)(d.a,{className:"p-1",children:[Object(h.jsx)(j.a,{className:"align-self-center task-title",children:e.title}),Object(h.jsx)(j.a,{children:t(e)})]})},e.id)}))},b=function(e){var t;"To do"===e.title&&(t="nothing to do, good job"),"In progress"===e.title&&(t="no tasks there, start doing something!"),"Completed"===e.title&&(t="no tasks completed, lazy!");var s=e.tasks.length>0?Object(h.jsx)(m,{tasks:e.tasks,click:e.click}):Object(h.jsx)("h2",{className:"text-center ",children:t});return Object(h.jsx)("div",{children:s})},f=s(18),p=function(e){return Object(h.jsx)(f.a,{className:"taskContainer shadow-lg",children:Object(h.jsxs)(f.a.Body,{children:[Object(h.jsx)(f.a.Title,{className:"h5 p-2",children:e.title}),Object(h.jsx)("hr",{}),Object(h.jsx)(o.a,{className:"rounded",children:Object(h.jsx)(b,{title:e.title,tasks:e.tasks,click:e.click})})]})})},x=function(e){var t=e.tasks.filter((function(e){return"true"===e.completed})),s=[{title:"To do",completed:"false",tasks:e.tasks.filter((function(e){return"false"===e.completed}))},{title:"In progress",completed:"inProgress",tasks:e.tasks.filter((function(e){return"inProgress"===e.completed}))},{title:"Completed",completed:"true",tasks:t}].map((function(t){return Object(h.jsx)(j.a,{lg:!0,className:"p-2",children:Object(h.jsx)(p,{title:t.title,tasks:t.tasks,click:e.handleClick})},t.id)}));return Object(h.jsx)(d.a,{className:"px-3",children:s})},O=s(22),k=s(9),g=function(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),c=s[0],n=s[1],l=Object(a.useState)(!1),r=Object(i.a)(l,2),o=r[0],m=r[1],b=function(t){t.preventDefault(),c.length<1?alert("Enter your task before adding it!"):(e.handleAddTask(c,o),m(!1),n(""))};return Object(h.jsx)(O.a,{onSubmit:b,children:Object(h.jsxs)(d.a,{className:"px-2 mt-2 mb-2  flex",children:[Object(h.jsx)(j.a,{className:"mt-3 pr-sm-2",children:Object(h.jsx)(O.a.Control,{className:"shadow",maxLength:"60",value:c,onChange:function(e){n(e.target.value)},size:"lg",placeholder:"enter new task here"})}),Object(h.jsx)(j.a,{sm:"auto",className:"mt-3 pl-sm-2",children:Object(h.jsxs)(k.a,{size:"lg",className:"shadow justify-content-md-end justify-content-center flex-fill",children:[Object(h.jsx)(k.a.Prepend,{className:"flex-fill",children:Object(h.jsx)(k.a.Text,{className:"flex-fill",children:"is it important?"})}),Object(h.jsx)(k.a.Checkbox,{style:{width:"20px",height:"20px"},checked:o,onChange:function(e){m(!o)}}),Object(h.jsx)(k.a.Append,{className:"flex-fill",children:Object(h.jsx)(u.a,{type:"submit",className:"flex-fill",onClick:b,children:"add task"})})]})})]})})},N=s(24),v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){c(JSON.parse(localStorage.getItem("tasks")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(s))})),Object(h.jsxs)(N.a,{fluid:!0,className:"home text-lowercase",children:[Object(h.jsx)(d.a,{className:"spacer"}),Object(h.jsx)(g,{handleAddTask:function(e,t){var a={title:e,completed:"false",id:Math.random(),isImportant:t};c([].concat(Object(r.a)(s),[a]))}}),Object(h.jsx)(x,{tasks:s,handleClick:function(e){var t=s.filter((function(t){return t.id.toString()===e.currentTarget.id})),a=s.filter((function(t){return t.id.toString()!==e.currentTarget.id}));"false"===(t=t[0]).completed?(t.completed="inProgress",c([].concat(Object(r.a)(a),[t]))):"inProgress"===t.completed?(t.completed="true",c([].concat(Object(r.a)(a),[t]))):"true"===t.completed&&c(Object(r.a)(a))}}),Object(h.jsx)("button",{onClick:function(){return c([])},children:"clear"})]})};var w=function(){return Object(h.jsx)(v,{})};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ac2122c2.chunk.js.map