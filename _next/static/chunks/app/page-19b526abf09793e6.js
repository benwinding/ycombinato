(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3937:function(e,t,n){Promise.resolve().then(n.bind(n,7838))},9054:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var r=n(4824),s=n(9829),a=n(8550);let c=new r.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),i=(0,s.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,a.w)({queryClient:c,persistor:i,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})},7838:function(e,t,n){"use strict";n.r(t);var r=n(9268),s=n(2731),a=n(231),c=n(6006);let i=()=>{let[e,t]=c.useState(!1);c.useEffect(()=>{t(!0)},[]);let n=(0,a.k)(),i=c.useMemo(()=>e?(0,r.jsx)(s.j,{tag:"front_page",page:n,pageSize:30}):null,[e,n]);return(0,r.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-3",children:(0,r.jsx)("div",{className:"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",children:i})})};t.default=i},2292:function(e,t,n){"use strict";n.d(t,{Av:function(){return c},It:function(){return o},dL:function(){return a},iR:function(){return i}});var r=n(9268),s=n(6047);function a(e){return(0,r.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline "+e.className,children:e.children})}function c(e){let t="https://news.ycombinator.com/user?id=".concat(e.author);return(0,r.jsx)(a,{href:t,className:e.className,children:e.author})}function i(e){return(0,r.jsx)(o,{discussionId:e.discussionId,className:e.className,children:(0,s._m)(e.createdAt)})}function o(e){let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,r.jsx)(a,{href:t,className:e.className,children:e.children})}n(6006)},5149:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(9268);function s(e){let{label:t,value:n,checked:s,onChange:a}=e;return(0,r.jsxs)("label",{className:"text-xs flex items-center gap-1",children:[(0,r.jsx)("input",{type:"radio",value:n,checked:s,onChange:a}),t]})}},2731:function(e,t,n){"use strict";n.d(t,{j:function(){return w}});var r,s,a=n(9268),c=n(4824),i=n(9054);async function o(e){let t=function(e){let t=new u;return t.addTag(e.tag),t.addPageSize(e.pageSize),t.addPage(e.page-1),"front_page"!==e.tag&&t.addCreatedBeforeAfter({before:e.createdBeforeI,after:e.createdAfterI}),t.build()}(e);return fetch(t).then(e=>e.json())}class u{addTag(e){return this.url+="tags=".concat(e,"&"),this}addCreatedBeforeAfter(e){return this.url+="numericFilters=created_at_i>".concat(e.after,",created_at_i<").concat(e.before,"&"),this}addPage(e){return this.url+="page=".concat(e,"&"),this}addPageSize(e){return this.url+="hitsPerPage=".concat(e,"&"),this}build(){return this.url}constructor(){this.url="https://hn.algolia.com/api/v1/search?"}}var l=n(2292),d=n(6047),f=n(5846),m=n.n(f),h=n(6006);function x(e){return(0,a.jsx)(m(),{href:e.href,className:"hover:underline "+e.className,children:e.children})}function p(e){return(0,a.jsx)(g,{discussionId:e.discussionId,className:e.className,children:(0,d._m)(e.createdAt)})}function g(e){let t="/item?id=".concat(e.discussionId);return(0,a.jsx)(x,{href:t,className:e.className,children:e.children})}function j(e){let t=e.data,n=e.data.page,r=e.data.hitsPerPage;return(0,a.jsx)("div",{className:"flex flex-col gap-1 font-sans",children:t.hits.map((e,t)=>(0,a.jsx)(N,{index:t+1+r*n,item:e},e.objectID))})}function N(e){let{item:t,index:n}=e;return(0,a.jsxs)("div",{className:"flex flex-row items-start gap-1",children:[(0,a.jsxs)("span",{children:[n,"."]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)(l.dL,{href:t.url,children:t.title}),(0,a.jsxs)("div",{className:"flex items-center flex-wrap gap-1 text-gray-500 text-xxs sm:text-xs",children:[(0,a.jsxs)("p",{className:"flex-shrink-0",children:[t.points," points by"]}),(0,a.jsx)(l.Av,{author:t.author}),(0,a.jsx)(p,{discussionId:Number(t.objectID),createdAt:t.created_at}),(0,a.jsx)("span",{children:"|"}),(0,a.jsxs)(g,{discussionId:Number(t.objectID),children:[t.num_comments," comments"]})]})]})]})}var b=n(6008);function v(e){let t=Array(e.pageCount).fill(0).map((e,t)=>t+1),n=(0,b.useRouter)(),r=(0,b.usePathname)();return(0,a.jsx)("div",{className:"flex gap-2 pt-4 justify-center w-full flex-wrap",children:t.map(e=>(0,a.jsx)("span",{className:"cursor-pointer hover:underline",onClick:()=>{n.push(r+"?page=".concat(e))},children:e},e))})}var y=n(4361),_=n(5149);function w(e){return(0,a.jsx)(c.QueryClientProvider,{client:i.E,children:(0,a.jsx)(I,{...e})})}function I(e){let t=function(e){let t="front_page"===e.tag?"front_page_".concat(e.pageSize,"_").concat(e.page):"".concat(e.tag,"_").concat(e.createdAfterI,"_").concat(e.createdBeforeI,"_").concat(e.pageSize,"_").concat(e.page);console.log("queryKey",t);let n=(0,c.useQuery)(t,()=>o(e));return n}(e),[n,r]=(0,h.useState)("Sort by points"),s=function(e,t){if(!e)return;let n=[...e.hits].sort("Sort by points"===t?P:S);return{...e,hits:n}}(t.data,n);return t.isLoading?(0,a.jsx)(y.a,{}):"error"===t.status?(0,a.jsxs)("div",{children:["Problem loading data, err: ",t.error+""]}):t.data&&s?(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,a.jsx)(C,{value:n,onChange:r}),(0,a.jsx)(j,{data:s}),(0,a.jsx)(v,{pageCount:t.data.nbPages})]}):(0,a.jsx)("div",{children:"No data?..."})}function P(e,t){return t.points-e.points}function S(e,t){return t.num_comments-e.num_comments}function C(e){return(0,a.jsx)("div",{className:"flex items-center gap-2 border border-gray-300 p-2 rounded mb-2",children:["Sort by points","Sort by comments"].map(t=>(0,a.jsx)(_.E,{value:t,label:t,checked:t===e.value,onChange:n=>e.onChange(t)},t))})}(r=s||(s={})).byPoints="Sort by points",r.byComments="Sort by comments"},4361:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(9268),s=n(6006);let a=["⊖_⊖","⊜_⊜","⊙_⊙"];function c(){var e,t;let[n,c]=s.useState(0);return e=()=>{let e=(n+1)%a.length;c(e)},t=2e3*Math.random(),s.useEffect(()=>{let n=setTimeout(()=>{e()},t);return()=>{clearTimeout(n)}},[e,t]),(0,r.jsxs)("div",{className:"flex flex-col items-center py-40",children:[(0,r.jsx)("p",{className:"text-3xl font-mono text-gray-600 pb-10",children:"Loading..."}),(0,r.jsx)("p",{className:"text-4xl font-mono whitespace-pre text-gray-400",children:a[n]})]})}},6047:function(e,t,n){"use strict";n.d(t,{Iz:function(){return o},OP:function(){return u},_m:function(){return i}});var r=n(6902),s=n.n(r),a=n(3432),c=n.n(a);function i(e){return s()(e).fromNow()}function o(){return d(l(s()()))}function u(e,t){return d(l(s()().subtract(e,t)))}function l(e){return e.minute(0).second(0).millisecond(0)}function d(e){return Math.round(Number(e.toDate())/1e3)}s().extend(c())},231:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(6008);function s(){let e=(0,r.useSearchParams)();return Number((null==e?void 0:e.get("page"))||1)}}},function(e){e.O(0,[47,846,667,139,744],function(){return e(e.s=3937)}),_N_E=e.O()}]);