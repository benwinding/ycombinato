(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{9054:function(e,t,r){"use strict";r.d(t,{E:function(){return s}});var n=r(4824),a=r(9829),c=r(8550);let s=new n.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),i=(0,a.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,c.w)({queryClient:s,persistor:i,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})},2292:function(e,t,r){"use strict";r.d(t,{Av:function(){return s},It:function(){return o},dL:function(){return c},iR:function(){return i}});var n=r(9268),a=r(6047);function c(e){return(0,n.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline "+e.className,children:e.children})}function s(e){let t="https://news.ycombinator.com/user?id=".concat(e.author);return(0,n.jsx)(c,{href:t,className:e.className,children:e.author})}function i(e){return(0,n.jsx)(o,{discussionId:e.discussionId,className:e.className,children:(0,a._m)(e.createdAt)})}function o(e){let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,n.jsx)(c,{href:t,className:e.className,children:e.children})}r(6006)},6176:function(e,t,r){"use strict";r.d(t,{C2:function(){return o},oo:function(){return u}});var n=r(9268),a=r(6047),c=r(5846),s=r.n(c);function i(e){return(0,n.jsx)(s(),{href:e.href,className:"hover:underline "+e.className,children:e.children})}function o(e){return(0,n.jsx)(u,{discussionId:e.discussionId,className:e.className,children:(0,a._m)(e.createdAt)})}function u(e){let t="/item?id=".concat(e.discussionId);return(0,n.jsx)(i,{href:t,className:e.className,children:e.children})}r(6006)},5149:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var n=r(9268);function a(e){let{label:t,value:r,checked:a,onChange:c}=e;return(0,n.jsxs)("label",{className:"text-xs flex items-center gap-1",children:[(0,n.jsx)("input",{type:"radio",value:r,checked:a,onChange:c}),t]})}},1777:function(e,t,r){"use strict";r.d(t,{j:function(){return v}});var n,a,c=r(9268),s=r(4824),i=r(9054);async function o(e){let t=function(e){let t=new u;return t.addTag(e.tag),t.addPageSize(e.pageSize),t.addPage(e.page-1),"front_page"!==e.tag&&(t.setPath("search_by_date"),t.addCreatedBeforeAfter({before:e.createdBeforeI,after:e.createdAfterI})),t.build()}(e);return fetch(t).then(e=>e.json())}class u{setPath(e){return this.path=e,this}addTag(e){return this.queryString+="tags=".concat(e,"&"),this}addCreatedBeforeAfter(e){return this.queryString+="numericFilters=created_at_i>".concat(e.after,",created_at_i<").concat(e.before,"&"),this}addPage(e){return this.queryString+="page=".concat(e,"&"),this}addPageSize(e){return this.queryString+="hitsPerPage=".concat(e,"&"),this}build(){let e="".concat(this.baseUrl).concat(this.path,"?").concat(this.queryString);return e}constructor(){this.queryString="",this.baseUrl="https://hn.algolia.com/api/v1/",this.path="search"}}var l=r(2292),d=r(6176);function f(e){let t=e.data,r=e.data.page,n=e.data.hitsPerPage;return(0,c.jsx)("div",{className:"flex flex-col gap-1 font-sans",children:t.hits.map((e,t)=>(0,c.jsx)(h,{index:t+1+n*r,item:e},e.objectID))})}function h(e){let{item:t,index:r}=e;return(0,c.jsxs)("div",{className:"flex flex-row items-start gap-1",children:[(0,c.jsxs)("span",{children:[r,"."]}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)(l.dL,{href:t.url,children:t.title}),(0,c.jsxs)("div",{className:"flex items-center flex-wrap gap-1 text-gray-500 text-xxs sm:text-xs",children:[(0,c.jsxs)("p",{className:"flex-shrink-0",children:[t.points," points by"]}),(0,c.jsx)(l.Av,{author:t.author}),(0,c.jsx)(d.C2,{discussionId:Number(t.objectID),createdAt:t.created_at}),(0,c.jsx)("span",{children:"|"}),(0,c.jsxs)(d.oo,{discussionId:Number(t.objectID),children:[t.num_comments," comments"]})]})]})]})}var m=r(6006),x=r(231);function p(e){let t=Array(e.pageCount).fill(0).map((e,t)=>t+1),{patchQueryParams:r}=(0,x.Fs)();return(0,c.jsx)("div",{className:"flex gap-2 pt-4 justify-center w-full flex-wrap",children:t.map(e=>(0,c.jsx)("span",{className:"cursor-pointer hover:underline",onClick:()=>r({page:e}),children:e},e))})}var g=r(4361),j=r(5149),b=r(6047);function v(e){return(0,c.jsx)(s.QueryClientProvider,{client:i.E,children:(0,c.jsx)(y,{...e})})}function y(e){let t=function(e){let t="front_page"===e.tag?"front_page_".concat(e.pageSize,"_").concat(e.page):"".concat(e.tag,"_").concat(e.createdAfterI,"_").concat(e.createdBeforeI,"_").concat(e.pageSize,"_").concat(e.page),r=(0,s.useQuery)(t,()=>o(e));return r}(e),[r,n]=(0,m.useState)("Sort by points"),a=function(e,t){if(!e)return;let r=[...e.hits].sort("Sort by points"===t?S:w);return{...e,hits:r}}(t.data,r),{patchQueryParams:i}=(0,x.Fs)();if(t.isLoading)return(0,c.jsx)(g.a,{});if("error"===t.status)return(0,c.jsxs)("div",{children:["Problem loading data, err: ",t.error+""]});if(!t.data||!a)return(0,c.jsx)("div",{children:"No data?..."});let u="front_page"!==e.tag,l=u&&(0,c.jsx)(P,{createdBeforeI:e.createdBeforeI,onClickYesterday:()=>{let t=(0,b.kl)(e.createdBeforeI);i({createdAfterI:(0,b.kl)(t),createdBeforeI:t,page:1})},onClickTomorrow:()=>{i({createdAfterI:e.createdBeforeI,createdBeforeI:(0,b.VJ)(e.createdBeforeI),page:1})}});return(0,c.jsxs)("div",{className:"flex flex-col w-full",children:[(0,c.jsx)("div",{className:"pb-3",children:l}),(0,c.jsx)(k,{value:r,onChange:n}),(0,c.jsx)(f,{data:a}),(0,c.jsx)(p,{pageCount:t.data.nbPages}),(0,c.jsx)("table",{children:(0,c.jsxs)("tbody",{children:[(0,c.jsx)(N,{label:"Per page",option:(0,c.jsx)(I,{value:e.pageSize,onChange:e=>i({perPage:e})})}),u&&(0,c.jsx)(N,{label:"Date",option:(0,c.jsx)(C,{valueDateString:(0,b.nz)(e.createdBeforeI),onChange:e=>i({createdAfterI:(0,b.kl)(e),createdBeforeI:e,page:1})})}),u&&(0,c.jsx)(N,{label:"",option:l})]})})]})}function N(e){return(0,c.jsxs)("tr",{className:"py-1",children:[(0,c.jsx)("td",{className:"pr-2 w-24",children:e.label}),(0,c.jsx)("td",{className:"",children:e.option})]})}function I(e){return(0,c.jsxs)("select",{value:e.value,className:"border border-gray-300 p-1",onChange:t=>e.onChange(parseInt(t.target.value)),children:[(0,c.jsx)("option",{children:"50"}),(0,c.jsx)("option",{children:"100"})]})}let _=(0,b.tt)();function C(e){let t=t=>{e.onChange((0,b.mb)(new Date(t)))};return(0,c.jsx)("input",{type:"date",value:e.valueDateString||_,onChange:e=>t(e.target.value)})}function P(e){let t=m.useMemo(()=>{let t=(0,b.OP)(1,"day"),r=e.createdBeforeI<t;return r},[e.createdBeforeI]);return(0,c.jsxs)("div",{className:"flex justify-between underline",children:[(0,c.jsx)("button",{onClick:e.onClickYesterday,children:"Previous Day"}),t?(0,c.jsx)("button",{onClick:e.onClickTomorrow,children:"Next Day"}):(0,c.jsx)("div",{})]})}function S(e,t){return t.points-e.points}function w(e,t){return t.num_comments-e.num_comments}function k(e){return(0,c.jsx)("div",{className:"flex items-center gap-2 border border-gray-300 p-2 rounded mb-2",children:["Sort by points","Sort by comments"].map(t=>(0,c.jsx)(j.E,{value:t,label:t,checked:t===e.value,onChange:r=>e.onChange(t)},t))})}(n=a||(a={})).byPoints="Sort by points",n.byComments="Sort by comments"},4361:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(9268),a=r(6006);let c=["⊖_⊖","⊜_⊜","⊙_⊙"];function s(){var e,t;let[r,s]=a.useState(0);return e=()=>{let e=(r+1)%c.length;s(e)},t=2e3*Math.random(),a.useEffect(()=>{let r=setTimeout(()=>{e()},t);return()=>{clearTimeout(r)}},[e,t]),(0,n.jsxs)("div",{className:"flex flex-col items-center py-40 w-full",children:[(0,n.jsx)("p",{className:"text-3xl font-mono text-gray-600 pb-10",children:"Loading..."}),(0,n.jsx)("p",{className:"text-4xl font-mono whitespace-pre text-gray-400",children:c[r]})]})}},6047:function(e,t,r){"use strict";r.d(t,{Iz:function(){return u},OP:function(){return l},VJ:function(){return f},_m:function(){return i},kl:function(){return d},mb:function(){return x},mu:function(){return o},nz:function(){return p},tt:function(){return g}});var n=r(6902),a=r.n(n),c=r(3432),s=r.n(c);function i(e){return a()(e).fromNow()}function o(e){return a()(e).format("YYYY-MM-DD")}function u(){return m(h(a()()))}function l(e,t){return m(h(a()().subtract(e,t)))}function d(e){return m(h(a()(1e3*e).subtract(24,"hours")))}function f(e){return m(h(a()(1e3*e).add(24,"hours")))}function h(e){return e.minute(0).second(0).millisecond(0)}function m(e){return Math.round(Number(e.toDate())/1e3)}function x(e){return m(h(a()(e)))}function p(e){return j(a()(new Date(1e3*e)))}function g(){return j(a()())}function j(e){return e.format("YYYY-MM-DD")}a().extend(s())},2747:function(e,t,r){"use strict";r.d(t,{t:function(){return a}});var n=r(6006);function a(){let[e,t]=n.useState(!1);return n.useEffect(()=>{t(!0)},[]),e}},231:function(e,t,r){"use strict";r.d(t,{Fs:function(){return i},OZ:function(){return s},kI:function(){return c}});var n=r(6008),a=r(6047);function c(){let e=(0,n.useSearchParams)();return Number((null==e?void 0:e.get("page"))||1)}function s(){let e=(0,n.useSearchParams)();function t(t){return null==e?void 0:e.get(t)}let r={page:1,perPage:50,createdBeforeI:(0,a.Iz)(),createdAfterI:(0,a.OP)(24,"hours")},c=Number(t("page")||r.page),s=Number(t("perPage")||r.perPage),i=Number(t("createdAfterI")||r.createdAfterI),o=Number(t("createdBeforeI")||r.createdBeforeI);return{page:c,perPage:s,createdAfterI:i,createdBeforeI:o}}function i(){let e=(0,n.useRouter)(),t=(0,n.usePathname)();return{patchQueryParams:function(r){let n=new URLSearchParams(window.location.search),a=Array.from(n.entries()).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{}),c={...a,...r},s=Object.entries(c).map(e=>{let[t,r]=e;return"".concat(t,"=").concat(r)}).join("&");e.push(t+"?".concat(s))}}}},5846:function(e,t,r){e.exports=r(414)}}]);