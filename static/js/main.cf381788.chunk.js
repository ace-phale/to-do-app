(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){},35:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c.n(s),a=c(24),r=c.n(a),i=(c(29),c(30),c(13)),l=c(12),o=c(10),j=c(8),d=c(7),u=c(16),b=c(3),m=function(t){var e=function(e){return Object(b.jsx)(u.a,{id:e.id,onClick:t.click,style:{height:"100%"},className:"true"===e.completed?"btn btn-danger btn-md float-right":"btn btn-success btn-md float-right",children:Object(b.jsx)("i",{className:"true"===e.completed?"fas fa-times":"fas fa-arrow-right"})})};return t.tasks.map((function(t){return Object(b.jsx)(o.a.Item,{className:"true"===t.completed?"task-completed p-2 font-weight-light":t.isImportant?"task-important p-2 font-weight-bold":"task p-2",children:Object(b.jsxs)(j.a,{className:"p-1",children:[Object(b.jsx)(d.a,{className:"align-self-center",children:t.title}),Object(b.jsx)(d.a,{children:e(t)})]})},t.id)}))},h=function(t){var e;"To do"===t.title&&(e="nothing to do, good job"),"In progress"===t.title&&(e="no tasks there, start doing something!"),"Completed"===t.title&&(e="no tasks completed, lazy!");var c=t.tasks.length>0?Object(b.jsx)(m,{tasks:t.tasks,click:t.click}):Object(b.jsx)("h2",{className:"text-center",children:e});return Object(b.jsx)("div",{children:c})},f=c(19),O=function(t){return Object(b.jsx)(f.a,{className:"taskContainer",children:Object(b.jsxs)(f.a.Body,{children:[Object(b.jsx)(f.a.Title,{className:"h5 p-2",children:t.title}),Object(b.jsx)("hr",{}),Object(b.jsx)(o.a,{children:Object(b.jsx)(h,{title:t.title,tasks:t.tasks,click:t.click})})]})})},p=function(t){var e=t.tasks.filter((function(t){return"true"===t.completed})),c=[{title:"To do",completed:"false",tasks:t.tasks.filter((function(t){return"false"===t.completed}))},{title:"In progress",completed:"inProgress",tasks:t.tasks.filter((function(t){return"inProgress"===t.completed}))},{title:"Completed",completed:"true",tasks:e}].map((function(e){return Object(b.jsx)(d.a,{lg:!0,className:"p-2",children:Object(b.jsx)(O,{title:e.title,tasks:e.tasks,click:t.handleClick})},e.id)}));return Object(b.jsx)(j.a,{className:"px-3",children:c})},x=c(18),k=c(9),g=function(t){var e=Object(s.useState)(""),c=Object(l.a)(e,2),n=c[0],a=c[1],r=Object(s.useState)(!1),i=Object(l.a)(r,2),o=i[0],m=i[1];return Object(b.jsxs)(j.a,{className:"px-2 mt-2 mb-2  flex",children:[Object(b.jsx)(d.a,{className:"mt-3",children:Object(b.jsx)(x.a,{children:Object(b.jsx)(x.a.Control,{value:n,onChange:function(t){a(t.target.value)},size:"lg",placeholder:"enter new task here"})})}),Object(b.jsx)(d.a,{sm:"auto",className:"mt-3",children:Object(b.jsx)(x.a,{children:Object(b.jsxs)(k.a,{size:"lg",className:"justify-content-md-end justify-content-center flex-nowrap",children:[Object(b.jsx)(k.a.Prepend,{children:Object(b.jsx)(k.a.Text,{children:"is it important?"})}),Object(b.jsx)(k.a.Checkbox,{checked:o,onChange:function(t){m(!o)}}),Object(b.jsx)(k.a.Append,{children:Object(b.jsx)(u.a,{onClick:function(){t.handleAddTask(n,o),m(!1),a("")},children:"add task"})})]})})})]})},N=c(23),v=function(){var t=Object(s.useState)([]),e=Object(l.a)(t,2),c=e[0],n=e[1];return Object(s.useEffect)((function(){n(JSON.parse(localStorage.getItem("tasks")))}),[]),Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))})),Object(b.jsxs)(N.a,{fluid:!0,className:"home text-lowercase",children:[Object(b.jsx)(j.a,{className:"spacer"}),Object(b.jsx)(g,{handleAddTask:function(t,e){var s={title:t,completed:"false",id:Math.random(),isImportant:e};n([].concat(Object(i.a)(c),[s]))}}),Object(b.jsx)(p,{tasks:c,handleClick:function(t){var e=c.filter((function(e){return e.id.toString()===t.currentTarget.id})),s=c.filter((function(e){return e.id.toString()!==t.currentTarget.id}));"false"===(e=e[0]).completed?(e.completed="inProgress",n([].concat(Object(i.a)(s),[e]))):"inProgress"===e.completed?(e.completed="true",n([].concat(Object(i.a)(s),[e]))):"true"===e.completed&&n(Object(i.a)(s))}}),Object(b.jsx)("button",{onClick:function(){return n([])},children:"clear"})]})};var C=function(){return Object(b.jsx)(v,{})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cf381788.chunk.js.map