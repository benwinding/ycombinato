(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{5278:function(e,t,n){Promise.resolve().then(n.bind(n,7316))},9054:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var r=n(4824),a=n(9829),s=n(8550);let c=new r.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),i=(0,a.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,s.w)({queryClient:c,persistor:i,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})},7316:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(6006),s=n(1777),c=n(231),i=n(2747);let o=()=>{let e=(0,i.t)(),t=(0,c.OZ)(),n=a.useMemo(()=>e?(0,r.jsx)(s.j,{tag:"ask_hn",page:t.page,pageSize:t.perPage,createdAfterI:t.createdAfterI,createdBeforeI:t.createdBeforeI}):null,[e,t]);return(0,r.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-3",children:(0,r.jsx)("div",{className:"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",children:n})})};t.default=o},2292:function(e,t,n){"use strict";n.d(t,{Av:function(){return c},It:function(){return o},dL:function(){return s},iR:function(){return i}});var r=n(9268),a=n(6047);function s(e){return(0,r.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline "+e.className,children:e.children})}function c(e){let t="https://news.ycombinator.com/user?id=".concat(e.author);return(0,r.jsx)(s,{href:t,className:e.className,children:e.author})}function i(e){return(0,r.jsx)(o,{discussionId:e.discussionId,className:e.className,children:(0,a._m)(e.createdAt)})}function o(e){let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,r.jsx)(s,{href:t,className:e.className,children:e.children})}n(6006)},6176:function(e,t,n){"use strict";n.d(t,{C:function(){return o},o:function(){return u}});var r=n(9268),a=n(6047),s=n(5846),c=n.n(s);function i(e){return(0,r.jsx)(c(),{href:e.href,className:"hover:underline "+e.className,children:e.children})}function o(e){return(0,r.jsx)(u,{discussionId:e.discussionId,className:e.className,children:(0,a._m)(e.createdAt)})}function u(e){let t="/item?id=".concat(e.discussionId);return(0,r.jsx)(i,{href:t,className:e.className,children:e.children})}n(6006)},5149:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(9268);function a(e){let{label:t,value:n,checked:a,onChange:s}=e;return(0,r.jsxs)("label",{className:"text-xs flex items-center gap-1",children:[(0,r.jsx)("input",{type:"radio",value:n,checked:a,onChange:s}),t]})}},1777:function(e,t,n){"use strict";n.d(t,{j:function(){return b}});var r,a,s=n(9268),c=n(4824),i=n(9054);async function o(e){let t=function(e){let t=new u;return t.addTag(e.tag),t.addPageSize(e.pageSize),t.addPage(e.page-1),"front_page"!==e.tag&&t.addCreatedBeforeAfter({before:e.createdBeforeI,after:e.createdAfterI}),t.build()}(e);return fetch(t).then(e=>e.json())}class u{addTag(e){return this.url+="tags=".concat(e,"&"),this}addCreatedBeforeAfter(e){return this.url+="numericFilters=created_at_i>".concat(e.after,",created_at_i<").concat(e.before,"&"),this}addPage(e){return this.url+="page=".concat(e,"&"),this}addPageSize(e){return this.url+="hitsPerPage=".concat(e,"&"),this}build(){return this.url}constructor(){this.url="https://hn.algolia.com/api/v1/search?"}}var l=n(2292),d=n(6176);function f(e){let t=e.data,n=e.data.page,r=e.data.hitsPerPage;return(0,s.jsx)("div",{className:"flex flex-col gap-1 font-sans",children:t.hits.map((e,t)=>(0,s.jsx)(h,{index:t+1+r*n,item:e},e.objectID))})}function h(e){let{item:t,index:n}=e;return(0,s.jsxs)("div",{className:"flex flex-row items-start gap-1",children:[(0,s.jsxs)("span",{children:[n,"."]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(l.dL,{href:t.url,children:t.title}),(0,s.jsxs)("div",{className:"flex items-center flex-wrap gap-1 text-gray-500 text-xxs sm:text-xs",children:[(0,s.jsxs)("p",{className:"flex-shrink-0",children:[t.points," points by"]}),(0,s.jsx)(l.Av,{author:t.author}),(0,s.jsx)(d.C,{discussionId:Number(t.objectID),createdAt:t.created_at}),(0,s.jsx)("span",{children:"|"}),(0,s.jsxs)(d.o,{discussionId:Number(t.objectID),children:[t.num_comments," comments"]})]})]})]})}var m=n(6006),x=n(231);function p(e){let t=Array(e.pageCount).fill(0).map((e,t)=>t+1),{patchQueryParams:n}=(0,x.Fs)();return(0,s.jsx)("div",{className:"flex gap-2 pt-4 justify-center w-full flex-wrap",children:t.map(e=>(0,s.jsx)("span",{className:"cursor-pointer hover:underline",onClick:()=>n({page:e}),children:e},e))})}var g=n(4361),j=n(5149),v=n(6047);function b(e){return(0,s.jsx)(c.QueryClientProvider,{client:i.E,children:(0,s.jsx)(N,{...e})})}function N(e){let t=function(e){let t="front_page"===e.tag?"front_page_".concat(e.pageSize,"_").concat(e.page):"".concat(e.tag,"_").concat(e.createdAfterI,"_").concat(e.createdBeforeI,"_").concat(e.pageSize,"_").concat(e.page);console.log("queryKey",t);let n=(0,c.useQuery)(t,()=>o(e));return n}(e),[n,r]=(0,m.useState)("Sort by points"),a=function(e,t){if(!e)return;let n=[...e.hits].sort("Sort by points"===t?I:P);return{...e,hits:n}}(t.data,n),{patchQueryParams:i}=(0,x.Fs)();return t.isLoading?(0,s.jsx)(g.a,{}):"error"===t.status?(0,s.jsxs)("div",{children:["Problem loading data, err: ",t.error+""]}):t.data&&a?(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)(w,{value:n,onChange:r}),(0,s.jsx)(f,{data:a}),(0,s.jsx)(p,{pageCount:t.data.nbPages}),(0,s.jsx)(y,{value:e.pageSize,onChange:e=>i({perPage:e})}),"front_page"!==e.tag&&(0,s.jsx)(_,{label:"Date",value:e.createdBeforeI,onChange:e=>i({createdBeforeI:e})})]}):(0,s.jsx)("div",{children:"No data?..."})}function y(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Per page"}),(0,s.jsxs)("select",{value:e.value,className:"border border-gray-300 p-1",onChange:t=>e.onChange(parseInt(t.target.value)),children:[(0,s.jsx)("option",{children:"30"}),(0,s.jsx)("option",{children:"50"}),(0,s.jsx)("option",{children:"100"})]})]})}function _(e){let t=t=>{e.onChange((0,v.mb)(new Date(t)))};return(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:e.label}),(0,s.jsx)("input",{type:"date",value:e.value,onChange:e=>t(e.target.value)})]})}function I(e,t){return t.points-e.points}function P(e,t){return t.num_comments-e.num_comments}function w(e){return(0,s.jsx)("div",{className:"flex items-center gap-2 border border-gray-300 p-2 rounded mb-2",children:["Sort by points","Sort by comments"].map(t=>(0,s.jsx)(j.E,{value:t,label:t,checked:t===e.value,onChange:n=>e.onChange(t)},t))})}(r=a||(a={})).byPoints="Sort by points",r.byComments="Sort by comments"},4361:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(9268),a=n(6006);let s=["⊖_⊖","⊜_⊜","⊙_⊙"];function c(){var e,t;let[n,c]=a.useState(0);return e=()=>{let e=(n+1)%s.length;c(e)},t=2e3*Math.random(),a.useEffect(()=>{let n=setTimeout(()=>{e()},t);return()=>{clearTimeout(n)}},[e,t]),(0,r.jsxs)("div",{className:"flex flex-col items-center py-40",children:[(0,r.jsx)("p",{className:"text-3xl font-mono text-gray-600 pb-10",children:"Loading..."}),(0,r.jsx)("p",{className:"text-4xl font-mono whitespace-pre text-gray-400",children:s[n]})]})}},6047:function(e,t,n){"use strict";n.d(t,{Iz:function(){return o},OP:function(){return u},_m:function(){return i},mb:function(){return f}});var r=n(6902),a=n.n(r),s=n(3432),c=n.n(s);function i(e){return a()(e).fromNow()}function o(){return d(l(a()()))}function u(e,t){return d(l(a()().subtract(e,t)))}function l(e){return e.minute(0).second(0).millisecond(0)}function d(e){return Math.round(Number(e.toDate())/1e3)}function f(e){return d(l(a()(e)))}a().extend(c())},2747:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var r=n(6006);function a(){let[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}},231:function(e,t,n){"use strict";n.d(t,{Fs:function(){return i},OZ:function(){return c},kI:function(){return s}});var r=n(6008),a=n(6047);function s(){let e=(0,r.useSearchParams)();return Number((null==e?void 0:e.get("page"))||1)}function c(){let e=(0,r.useSearchParams)(),t={page:1,perPage:30,createdBeforeI:(0,a.Iz)(),createdAfterI:(0,a.OP)(24,"hours")},n=Number((null==e?void 0:e.get("page"))||t.page),s=Number((null==e?void 0:e.get("perPage"))||t.perPage),c=Number((null==e?void 0:e.get("afterTime"))||t.createdAfterI),i=Number((null==e?void 0:e.get("beforeTime"))||t.createdBeforeI);return{page:n,perPage:s,createdAfterI:c,createdBeforeI:i}}function i(){let e=(0,r.useRouter)(),t=(0,r.usePathname)();return{patchQueryParams:function(n){let r=new URLSearchParams(window.location.search),a=Array.from(r.entries()).reduce((e,t)=>{let[n,r]=t;return e[n]=r,e},{}),s={...a,...n},c=Object.entries(s).map(e=>{let[t,n]=e;return"".concat(t,"=").concat(n)}).join("&");e.push(t+"?".concat(c))}}}}},function(e){e.O(0,[47,846,667,139,744],function(){return e(e.s=5278)}),_N_E=e.O()}]);