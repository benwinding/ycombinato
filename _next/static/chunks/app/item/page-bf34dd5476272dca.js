(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{3510:function(e,t,n){Promise.resolve().then(n.bind(n,6373))},9054:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(4824),s=n(9829),l=n(8550);let a=new r.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),i=(0,s.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,l.w)({queryClient:a,persistor:i,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})},6373:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r,s,l=n(9268),a=n(6006),i=n(4824);let c=(e,t)=>{let n=t.children||[];if(!n.length)return e;let r=n.reduce((t,n)=>{let r=c(e+1,n);return r>t?r:t},0);return r},o=(e,t)=>c(0,t)-c(0,e),d=(e,t)=>t.children.length-e.children.length;var u=n(2292);let x=e=>{let t=e.story.children;return(0,l.jsx)("div",{className:"font-sans",children:(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(h,{story:e.story,commentCount:e.commentCount,filterOptions:e.filterOptions}),t.map(t=>(0,l.jsx)(m,{comment:t,maps:e.maps,filterText:e.filterText},t.id))]})})};function h(e){let{story:t,commentCount:n,filterOptions:r}=e,s=t.url,a=t.title;return(0,l.jsxs)("div",{className:"flex flex-col text-gray-700",children:[(0,l.jsxs)("div",{className:"flex flex-col tiny:flex-row gap-2 items-center justify-between",children:[(0,l.jsx)(u.dL,{href:s,children:(0,l.jsx)("h1",{className:"text flex items-center gap-2",children:a})}),(0,l.jsx)(u.It,{discussionId:t.id,className:"text-xs flex-shrink-0",children:"(read on hn)"})]}),(0,l.jsxs)("div",{className:"text-xs",children:[t.points," points by ",(0,l.jsx)(u.Av,{author:t.author})," ",(0,l.jsx)(u.iR,{discussionId:t.id,createdAt:t.created_at})," ","| ",n," comments"]}),t.text&&(0,l.jsx)(p,{className:"text-xs pt-2",html:t.text}),(0,l.jsx)("div",{className:"border border-gray-300 p-2 rounded mt-2",children:r})]})}let m=e=>{let{comment:t,filterText:n,maps:r}=e,s=t._textMarked||t.text||"<i>[deleted]<i/>",i=r.idTotalMap.get(t.id)||0,c=function(e,t){let[n,r]=(0,a.useState)(!1),s=!e;a.useEffect(()=>{r(!!t&&s)},[t,s]);let l=a.useCallback(()=>r(!0),[]),i=a.useCallback(()=>r(!1),[]);return{expanderText:n?"+":"-",isCollapsed:n,onCollapse:l,onExpand:i}}(t._textMarked,n),o=function(e,t){let[n,r]=(0,a.useState)(!1);a.useEffect(()=>{e&&r(!1)},[e]);let s=a.useCallback(()=>r(!0),[]),l=a.useCallback(()=>r(!1),[]);return{expanderText:n?t&&t>1?"".concat(t," more"):"+":"-",isCollapsed:n,onCollapse:s,onExpand:l}}(n,i);return(0,l.jsx)(f,{id:t.id,html:s,comments:t.children,maps:r,isTextCollapsed:c.isCollapsed,isThreadCollapsed:o.isCollapsed,header:(0,l.jsx)(j,{comment:t,maps:r,expanderThread:(0,l.jsx)(v,{...o}),expanderText:(0,l.jsx)(v,{...c})}),filterText:n})};function f(e){let{id:t,comments:n,header:r,isTextCollapsed:s,isThreadCollapsed:a,filterText:i,html:c}=e;return(0,l.jsxs)("ul",{className:"list-decimal bg-black bg-opacity-5 rounded pl-1 sm:pl-2",children:[(0,l.jsxs)("div",{id:t+"",children:[r,!(a||s)&&(0,l.jsx)(p,{className:"text-xs pr-2",html:c})]}),!a&&(0,l.jsx)("div",{className:"flex flex-col gap-2",children:n.map(t=>(0,l.jsx)(m,{comment:t,maps:e.maps,filterText:i},t.id))})]})}function p(e){return(0,l.jsx)("div",{className:e.className+" comment-text",dangerouslySetInnerHTML:{__html:e.html}})}function j(e){let{comment:t,maps:n,expanderThread:r,expanderText:s}=e,a=n.idRootMap.get(t.id),i=n.idPrevMap.get(t.id),c=n.idNextMap.get(t.id),o=n.idParentMap.get(t.id);return(0,l.jsxs)("div",{className:"flex items-center gap-2 text-gray-500 text-xs py-1",children:[(0,l.jsx)(u.Av,{className:"flex-shrink-0",author:t.author}),(0,l.jsx)(u.iR,{className:"line-clamp-1",discussionId:t.id,createdAt:t.created_at}),(0,l.jsx)("div",{className:"flex-shrink-0",children:r}),(0,l.jsx)("div",{className:"flex-grow"}),a&&(0,l.jsx)("a",{href:"#"+a,children:"root"}),o&&(0,l.jsx)("a",{href:"#"+o,children:"parent"}),i&&(0,l.jsx)("a",{href:"#"+i,children:"prev"}),c&&(0,l.jsx)("a",{href:"#"+c,children:"next"}),(0,l.jsx)("div",{className:"flex-shrink-0 pr-2",children:s})]})}function v(e){let{isCollapsed:t,expanderText:n,onExpand:r,onCollapse:s}=e,i=a.useCallback(()=>{t?r():s()},[t,s,r]);return(0,l.jsxs)("button",{onClick:i,children:["[",n,"]"]})}let g=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))});var N=n(4361),y=n(9054);let b=async e=>fetch("https://hn.algolia.com/api/v1/items/".concat(e)).then(e=>e.json());var M=n(6008),C=n(5149);let w=()=>(0,l.jsx)(i.QueryClientProvider,{client:y.E,children:(0,l.jsx)(T,{})}),T=()=>{let[e,t]=a.useState("Sort by response count"),[n,r]=a.useState(""),s=(0,M.useSearchParams)(),c=s.get("id"),o=function(e){let t=(0,i.useQuery)("post-"+e,()=>b(e+""),{enabled:null!=e});return t}(c+""),[d,u]=function(e,t){let[n,r]=(0,a.useState)(e),[s,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{l(!0);let n=setTimeout(()=>{r(e),l(!1)},t);return()=>{clearTimeout(n)}},[e,t]),[n,s]}(n,400),x=o.data,h=S(x,e),m=a.useMemo(()=>(function(e){let t=0,n=new Map,r=new Map,s=new Map,l=new Map,a=new Map;if(!e)return{totalComments:t,idTotalMap:n,idRootMap:r,idParentMap:s,idNextMap:l,idPrevMap:a};let i=(e,c)=>{let o=0,d=void 0===c;return e.children.forEach((u,x)=>{{t++;let e=d?u.id:c,r=1+i(u,e);o+=r,n.set(u.id,r)}d||s.set(u.id,e.id),null!=c&&r.set(u.id,c);{let t=e.children[x+1];null!=t&&l.set(u.id,t.id)}{let t=e.children[x-1];null!=t&&a.set(u.id,t.id)}}),o};return i(e,void 0),{totalComments:t,idTotalMap:n,idRootMap:r,idParentMap:s,idNextMap:l,idPrevMap:a}})(x),[x]),f=function(e,t){let n=(0,a.useMemo)(()=>{if(e)return function(e,t){let n={...e},r=n.children.reduce((e,n)=>{let r=function e(t,n){let r=0;if(n){let e=function(e,t){let n=document.createElement("div");n.innerHTML=e;let r=function(e){let t=[];return!function e(n){n.nodeType===Node.TEXT_NODE?t.push(n):n.childNodes.forEach(t=>e(t))}(e),t}(n),s=0;return r.forEach(e=>{let n=RegExp(t.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&"),"ig"),r=e.parentNode,l=e.textContent.replace(n,e=>(s++,"<mark>".concat(e,"</mark>"))),a=document.createElement("span");a.innerHTML=l,r.replaceChild(a,e)}),{htmlNew:s>0?n.innerHTML:void 0,numReplacements:s}}(t.text||"",n);r+=e.numReplacements,t._textMarked=e.htmlNew}else t._textMarked=void 0;return t.children.forEach(t=>{r+=e(t,n)}),r}(n,t);return e+r},0);return{data:n,markCount:r}}(e,t)},[e,t]);return n}(h,d),p=null==f?void 0:f.markCount,j=(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2",children:[(0,l.jsx)(O,{onChange:t,value:e}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{className:"flex-grow",children:(0,l.jsx)(_,{onChange:r,value:n})}),(0,l.jsx)("div",{className:"flex-shrink-0",children:null!=p&&(0,l.jsx)(k,{count:p,loading:u,filterText:n})})]})]}),v=E(null==f?void 0:f.data,d,m,j);return(0,l.jsxs)("div",{className:"flex flex-col py-1 px-2",children:[o.isLoading&&o.isFetching&&(0,l.jsx)(N.a,{}),v]})};function k(e){return e.filterText?e.loading?(0,l.jsx)("div",{children:"Searching..."}):(0,l.jsxs)("div",{children:["Found ",e.count," results"]}):(0,l.jsx)("div",{className:"w-20"})}let E=(e,t,n,r)=>{let s=(0,a.useMemo)(()=>e&&(0,l.jsx)(x,{story:e,filterText:t,commentCount:n.totalComments,maps:{idTotalMap:n.idTotalMap,idRootMap:n.idRootMap,idParentMap:n.idParentMap,idNextMap:n.idNextMap,idPrevMap:n.idPrevMap},filterOptions:r}),[e,t,n,r]);return s},S=(e,t)=>{let n=(0,a.useMemo)(()=>e?function(e,t){if(!e)return e;let n=JSON.parse(JSON.stringify(e)),r=(e,t)=>(e.children.sort(t),e.children.forEach(e=>{r(e,t)}),e.children);console.time("sort timer");let s=t.byThreadDepth?o:(t.byResponseCount,d);return n.children=r(n,s),console.timeEnd("sort timer"),n}(e,{byResponseCount:"Sort by response count"===t,byThreadDepth:"Sort by thread length"===t}):void 0,[e,t]);return n};function _(e){return(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("input",{className:"border rounded-md px-1 w-full",placeholder:"Filter comments...",onChange:t=>e.onChange(t.target.value),value:e.value}),(0,l.jsx)("button",{onClick:()=>e.onChange(""),className:"-ml-6 text-gray-400",children:(0,l.jsx)(g,{width:20})})]})}function O(e){return(0,l.jsx)("div",{className:"flex items-center gap-2",children:["Sort by response count","Sort by thread length"].map(t=>(0,l.jsx)(C.E,{value:t,label:t,checked:t===e.value,onChange:n=>e.onChange(t)},t))})}(r=s||(s={})).byResponseCount="Sort by response count",r.byThreadDepth="Sort by thread length";let R=()=>{let[e,t]=a.useState(!1);a.useEffect(()=>{t(!0)},[]);let n=a.useMemo(()=>e?(0,l.jsx)(w,{}):null,[e]);return n};var L=R},2292:function(e,t,n){"use strict";n.d(t,{Av:function(){return a},It:function(){return c},dL:function(){return l},iR:function(){return i}});var r=n(9268),s=n(6047);function l(e){return(0,r.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline "+e.className,children:e.children})}function a(e){let t="https://news.ycombinator.com/user?id=".concat(e.author);return(0,r.jsx)(l,{href:t,className:e.className,children:e.author})}function i(e){return(0,r.jsx)(c,{discussionId:e.discussionId,className:e.className,children:(0,s._m)(e.createdAt)})}function c(e){let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,r.jsx)(l,{href:t,className:e.className,children:e.children})}n(6006)},5149:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(9268);function s(e){let{label:t,value:n,checked:s,onChange:l}=e;return(0,r.jsxs)("label",{className:"text-xs flex items-center gap-1",children:[(0,r.jsx)("input",{type:"radio",value:n,checked:s,onChange:l}),t]})}},4361:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(9268),s=n(6006);let l=["⊖_⊖","⊜_⊜","⊙_⊙"];function a(){var e,t;let[n,a]=s.useState(0);return e=()=>{let e=(n+1)%l.length;a(e)},t=2e3*Math.random(),s.useEffect(()=>{let n=setTimeout(()=>{e()},t);return()=>{clearTimeout(n)}},[e,t]),(0,r.jsxs)("div",{className:"flex flex-col items-center py-40",children:[(0,r.jsx)("p",{className:"text-3xl font-mono text-gray-600 pb-10",children:"Loading..."}),(0,r.jsx)("p",{className:"text-4xl font-mono whitespace-pre text-gray-400",children:l[n]})]})}},6047:function(e,t,n){"use strict";n.d(t,{Iz:function(){return c},OP:function(){return o},_m:function(){return i},mb:function(){return x}});var r=n(6902),s=n.n(r),l=n(3432),a=n.n(l);function i(e){return s()(e).fromNow()}function c(){return u(d(s()()))}function o(e,t){return u(d(s()().subtract(e,t)))}function d(e){return e.minute(0).second(0).millisecond(0)}function u(e){return Math.round(Number(e.toDate())/1e3)}function x(e){return u(d(s()(e)))}s().extend(a())}},function(e){e.O(0,[47,667,139,744],function(){return e(e.s=3510)}),_N_E=e.O()}]);