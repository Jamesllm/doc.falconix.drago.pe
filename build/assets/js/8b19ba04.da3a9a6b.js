"use strict";(self.webpackChunkdoc_api_falconix=self.webpackChunkdoc_api_falconix||[]).push([[5140],{2:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=n(4848),s=n(8453),a=n(1100);const d={sidebar_position:1},i="Agregar tarea",c={id:"programar-tareas/tareas",title:"Agregar tarea",description:"Endpoint para agregar una nueva tarea al scheduler.",source:"@site/docs/programar-tareas/tareas.md",sourceDirName:"programar-tareas",slug:"/programar-tareas/tareas",permalink:"/docs/programar-tareas/tareas",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Programar Tareas",permalink:"/docs/category/programar-tareas"},next:{title:"Ejecutar tarea inmediatamente",permalink:"/docs/programar-tareas/execute"}},o={},l=[{value:"Datos a enviar",id:"datos-a-enviar",level:2},{value:"Respuesta obtenida",id:"respuesta-obtenida",level:2},{value:"Parametros",id:"parametros",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"agregar-tarea",children:"Agregar tarea"}),"\n",(0,t.jsx)(r.p,{children:"Endpoint para agregar una nueva tarea al scheduler."}),"\n",(0,t.jsxs)("div",{class:"flex",children:[(0,t.jsx)("div",{class:"post",children:"POST"}),(0,t.jsx)("div",{class:"url",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"URL/monitor/tasks/add\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"datos-a-enviar",children:"Datos a enviar"}),"\n",(0,t.jsx)(r.p,{children:"En este ejemplo se esta agregando una nueva tarea al scheduler, con el cron de ejecucion para cada minuto"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="Body (JSON)"',children:'[\r\n    {\r\n        "task_name": "new_task",\r\n        "priority_id": 1,\r\n        "start_date": "2024-06-25",\r\n        "end_date": "2024-06-27",\r\n        "status": true,\r\n        "type_id": 4,\r\n        "command": "echo \'ejecuando cada minuto con exito\'",\r\n        "minute": "*",\r\n        "hour": "*",\r\n        "day_of_month": "*",\r\n        "month": "*",\r\n        "day_of_week": "*"\r\n    }\r\n]\n'})}),"\n",(0,t.jsx)(r.h2,{id:"respuesta-obtenida",children:"Respuesta obtenida"}),"\n",(0,t.jsx)(r.h2,{id:"parametros",children:"Parametros"}),"\n","\n",(0,t.jsxs)(a.A,{thead:"Parametro, Tipo, Descripcion",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"task_name"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsx)("td",{children:"Nombre de la tarea"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"priority_id"}),(0,t.jsx)("td",{children:"int"}),(0,t.jsx)("td",{children:"string"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"start_date"}),(0,t.jsx)("td",{children:"date"}),(0,t.jsx)("td",{children:"Fecha de inicio de la tarea"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"end_date"}),(0,t.jsx)("td",{children:"date"}),(0,t.jsx)("td",{children:"Fecha de fin de la tarea"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"status"}),(0,t.jsx)("td",{children:"boolean"}),(0,t.jsx)("td",{children:"Estatus de la tarea"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"type_id"}),(0,t.jsx)("td",{children:"int"}),(0,t.jsx)("td",{children:"string"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"command"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsx)("td",{children:"Comando a ejecutar"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"minute"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsxs)("td",{children:["Minuto en ",(0,t.jsxs)(r.strong,{children:["(",(0,t.jsx)(r.a,{href:"/docs/intro",children:"formato crom"}),")"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"hour"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsxs)("td",{children:["Hora en ",(0,t.jsxs)(r.strong,{children:["(",(0,t.jsx)(r.a,{href:"/docs/intro",children:"formato crom"}),")"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"day_of_month"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsxs)("td",{children:["Dias del mes en ",(0,t.jsxs)(r.strong,{children:["(",(0,t.jsx)(r.a,{href:"/docs/intro",children:"formato crom"}),")"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"month"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsxs)("td",{children:["Mes en ",(0,t.jsxs)(r.strong,{children:["(",(0,t.jsx)(r.a,{href:"/docs/intro",children:"formato crom"}),")"]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"day_of_week"}),(0,t.jsx)("td",{children:"string"}),(0,t.jsxs)("td",{children:["Dias de la semana en ",(0,t.jsxs)(r.strong,{children:["(",(0,t.jsx)(r.a,{href:"/docs/intro",children:"formato crom"}),")"]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1100:(e,r,n)=>{n.d(r,{A:()=>s});var t=n(4848);function s(e){const r=e.thead.split(",").map((e=>(0,t.jsx)("th",{children:e})));return(0,t.jsx)("div",{className:"tb-pixel",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:r})}),(0,t.jsx)("tbody",{children:e.children})]})})}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var t=n(6540);const s={},a=t.createContext(s);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);