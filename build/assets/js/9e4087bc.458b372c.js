"use strict";(self.webpackChunkdoc_api_falconix=self.webpackChunkdoc_api_falconix||[]).push([[2711],{9331:(e,a,r)=>{r.r(a),r.d(a,{default:()=>m});r(6540);var t=r(8774),n=r(1312),i=r(1213),s=r(6266),c=r(781),l=r(1107),o=r(4848);function d(e){let{year:a,posts:r}=e;const n=(0,s.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:a,children:a}),(0,o.jsx)("ul",{children:r.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(t.A,{to:e.metadata.permalink,children:[(a=e.metadata.date,n.format(new Date(a)))," - ",e.metadata.title]})},e.metadata.date);var a}))})]})}function h(e){let{years:a}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},a)))})})})}function m(e){let{archive:a}=e;const r=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const a=e.reduce(((e,a)=>{const r=a.metadata.date.split("-")[0],t=e.get(r)??[];return e.set(r,[a,...t])}),new Map);return Array.from(a,(e=>{let[a,r]=e;return{year:a,posts:r}}))}(a.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.be,{title:r,description:t}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:r}),(0,o.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,o.jsx)("main",{children:s.length>0&&(0,o.jsx)(h,{years:s})})]})]})}},6266:(e,a,r)=>{r.d(a,{i:()=>n});var t=r(4586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:a}}=(0,t.A)(),r=function(){const{i18n:{currentLocale:e,localeConfigs:a}}=(0,t.A)();return a[e].calendar}();return new Intl.DateTimeFormat(a,{calendar:r,...e})}}}]);