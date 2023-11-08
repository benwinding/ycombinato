(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2064:function(e,t,r){Promise.resolve().then(r.bind(r,5966))},7862:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(9077),s=r(988),a=r(1821);let i=new n.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),c=(0,s.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,a.w)({queryClient:i,persistor:c,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})},5966:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Page}});var n=r(7437),s=r(4300),a=r(2466),i=r(2265);function MagnifyingGlassCircleIcon({title:e,titleId:t,...r},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{d:"M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"}),i.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z",clipRule:"evenodd"}))}let c=i.forwardRef(MagnifyingGlassCircleIcon);var o=r(1170),u=r(6750);function ResultsPageViewer(e){let t=e.data,r=e.data.page,s=e.data.hitsPerPage;return(0,n.jsx)("div",{className:"flex flex-col gap-1 font-sans",children:t.hits.map((e,t)=>(0,n.jsx)(FrontPageItem,{index:t+1+s*r,item:e},e.objectID))})}function FrontPageItem(e){let{item:t,index:r}=e;return(0,n.jsxs)("div",{className:"flex flex-row items-start gap-1",children:[(0,n.jsxs)("span",{children:[r,"."]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(o.dL,{href:t.url,children:t.title}),(0,n.jsxs)("div",{className:"flex items-center flex-wrap gap-1 text-gray-500 text-xxs sm:text-xs",children:[(0,n.jsxs)("p",{className:"flex-shrink-0",children:[t.points," points by"]}),(0,n.jsx)(o.Av,{author:t.author}),(0,n.jsx)(u.C2,{discussionId:Number(t.objectID),createdAt:t.created_at}),(0,n.jsx)("span",{children:"|"}),(0,n.jsxs)(u.oo,{discussionId:Number(t.objectID),children:[t.num_comments," comments"]})]})]})]})}var l=r(9077);function useHnSearch(e){let t=getQueryKey(e),r=getQueryUrl(e);return useHnQuery(r,t)}function useHnQuery(e,t){return(0,l.useQuery)(t,()=>fetchHackerNewsFrontPage(e))}function getQueryKey(e){return"".concat(e.text,"_").concat(e.afterISeconds,"_").concat(e.beforeISeconds,"_").concat(e.pageSize,"_").concat(e.page)}async function fetchHackerNewsFrontPage(e){return fetch(e).then(e=>e.json())}function getQueryUrl(e){let t=new HnQueryBuilder;return t.addTag("story"),t.addPageSize(e.pageSize),t.addPage(Number(e.page)-1),t.addText(e.text),t.addCreatedBeforeAfter({after:e.afterISeconds,before:e.beforeISeconds}),t.build()}let HnQueryBuilder=class HnQueryBuilder{addCreatedBeforeAfter(e){return this.queryString+="numericFilters=created_at_i>".concat(e.after,",created_at_i<").concat(e.before,"&"),this}addTag(e){return this.queryString+="tags=".concat(e,"&"),this}addPage(e){return this.queryString+="page=".concat(e,"&"),this}addText(e){return this.queryString+="query=".concat(e,"&"),this}addPageSize(e){return this.queryString+="hitsPerPage=".concat(e,"&"),this}build(){let e="".concat(this.baseUrl).concat(this.path,"?").concat(this.queryString);return e}constructor(){this.queryString="",this.baseUrl="https://hn.algolia.com/api/v1/",this.path="search_by_date"}};var d=r(7766),f=r(1983),m=r(7862);function Page(){let{currentParams:e,patchQueryParams:t}=(0,s.K)({defaultParams:{text:"",afterISeconds:0,beforeISeconds:d.q.now().formatAsHnSeconds(),page:1,pageSize:30}}),[r,a]=(0,i.useState)(e);i.useEffect(()=>{a(e)},[e]);let executeSearch=()=>{t(r)};return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-3",children:[(0,n.jsxs)("div",{className:"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(FilterText,{onChange:e=>a(t=>({...t,text:e})),onEnter:executeSearch,value:r.text}),(0,n.jsx)(SearchButton,{onClick:executeSearch})]}),(0,n.jsxs)("div",{className:"pl-1 py-2 flex gap-3 items-center",children:[(0,n.jsx)(DateSelect,{label:"After >",valueDateString:d.q.fromHn({seconds:r.afterISeconds}).formatAsDateString(),onChange:e=>a(t=>({...t,afterISeconds:d.q.fromDateObj({dateObj:e}).formatAsHnSeconds()}))}),(0,n.jsx)("span",{children:"and"}),(0,n.jsx)(DateSelect,{label:"Before <",valueDateString:d.q.fromHn({seconds:r.beforeISeconds}).formatAsDateString(),onChange:e=>a(t=>({...t,beforeISeconds:d.q.fromDateObj({dateObj:e}).formatAsHnSeconds()}))})]})]}),(0,n.jsx)(l.QueryClientProvider,{client:m.E,children:(0,n.jsx)(h,{text:e.text,beforeISeconds:e.beforeISeconds,afterISeconds:e.afterISeconds,pageSize:e.pageSize,page:e.page})})]})}function FilterText(e){return(0,n.jsxs)("div",{className:"flex w-full",children:[(0,n.jsx)("input",{className:"border rounded-md px-2 py-1 w-full",placeholder:"Search posts...",onChange:t=>e.onChange(t.target.value),onKeyDown:t=>{"Enter"===t.key&&e.onEnter()},value:e.value}),(0,n.jsx)("button",{onClick:()=>e.onChange(""),className:"-ml-6 text-gray-400",children:(0,n.jsx)(a.Z,{width:20})})]})}function DateSelect(e){let onInput=t=>{e.onChange(new Date(t))};return(0,n.jsxs)("label",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"text-xs",children:e.label}),(0,n.jsx)("input",{type:"date",value:e.valueDateString,onChange:e=>onInput(e.target.value)})]})}function SearchButton(e){return(0,n.jsxs)("button",{onClick:e.onClick,role:"button",className:"bg-gray-200 rounded cursor-pointer px-2 py-1 gap-2 flex flex-row items-center",children:["Search ",(0,n.jsx)(c,{width:20})]})}let h=i.memo(function(e){let t=useHnSearch(e);return t.isLoading?(0,n.jsx)(f.a,{}):t.error?(0,n.jsx)("div",{children:t.error.toString()}):t.data?(0,n.jsx)(ResultsPageViewer,{data:t.data}):null})},1170:function(e,t,r){"use strict";r.d(t,{Av:function(){return LinkToAuthor},It:function(){return LinkToDiscussionWrapper},dL:function(){return ExternalLink},iR:function(){return LinkToDiscussion}});var n=r(7437),s=r(7766);function ExternalLink(e){return(0,n.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline "+e.className,children:e.children})}function LinkToAuthor(e){let t="https://news.ycombinator.com/user?id=".concat(e.author);return(0,n.jsx)(ExternalLink,{href:t,className:e.className,children:e.author})}function LinkToDiscussion(e){return(0,n.jsx)(LinkToDiscussionWrapper,{discussionId:e.discussionId,className:e.className,children:(0,s._)(e.createdAt)})}function LinkToDiscussionWrapper(e){let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,n.jsx)(ExternalLink,{href:t,className:e.className,children:e.children})}r(2265)},6750:function(e,t,r){"use strict";r.d(t,{C2:function(){return ILinkToDiscussion},h$:function(){return InternalLink},oo:function(){return ILinkToDiscussionWrapper}});var n=r(7437),s=r(7766),a=r(1396),i=r.n(a);function InternalLink(e){return(0,n.jsx)(i(),{href:e.href,className:"hover:underline "+e.className,children:e.children})}function ILinkToDiscussion(e){return(0,n.jsx)(ILinkToDiscussionWrapper,{discussionId:e.discussionId,className:e.className,children:(0,s._)(e.createdAt)})}function ILinkToDiscussionWrapper(e){let t="/item?id=".concat(e.discussionId);return(0,n.jsx)(InternalLink,{href:t,className:e.className,children:e.children})}r(2265)},1983:function(e,t,r){"use strict";r.d(t,{a:function(){return LoadingScreen}});var n=r(7437),s=r(2265);let a=["⊖_⊖","⊜_⊜","⊙_⊙"];function LoadingScreen(){let[e,t]=s.useState(0);return useTimeout(()=>{let r=(e+1)%a.length;t(r)},2e3*Math.random()),(0,n.jsxs)("div",{className:"flex flex-col items-center py-40 w-full",children:[(0,n.jsx)("p",{className:"text-3xl font-mono text-gray-600 pb-10",children:"Loading..."}),(0,n.jsx)("p",{className:"text-4xl font-mono whitespace-pre text-gray-400",children:a[e]})]})}function useTimeout(e,t){s.useEffect(()=>{let r=setTimeout(()=>{e()},t);return()=>{clearTimeout(r)}},[e,t])}},7766:function(e,t,r){"use strict";r.d(t,{_:function(){return getFromNowStr},q:function(){return Time}});var n=r(4548),s=r.n(n),a=r(6537),i=r.n(a);function getFromNowStr(e){return s()(e).fromNow()}s().extend(i());let Time=class Time{static fromIso(e){let t=Number(s()(e.dateIso).toDate());return new Time(t)}static fromHn(e){return new Time(1e3*e.seconds)}static fromDateString(e){let t=Number(s()(e.dateString,"YYYY-MM-DD").toDate());return new Time(t)}static fromDateObj(e){let t=Number(s()(e.dateObj).toDate());return new Time(t)}static now(){let e=Number(s()(new Date).toDate());return new Time(e)}formatAsHnSeconds(){return Math.round(this.ms/1e3)}formatFromNow(){return s()(this.ms).fromNow()}formatAsDateString(){return s()(this.ms).format("YYYY-MM-DD")}endOfDay(){let e=s()(this.ms).set("hours",23).set("minutes",59).set("seconds",59);return this.ms=Number(e.toDate()),this}startOfDay(){let e=s()(this.ms).set("hours",0).set("minutes",0).set("seconds",1);return this.ms=Number(e.toDate()),this}subtract1Day(){return this.ms=Number(s()(this.ms).subtract(24,"hours").toDate()),this}add1Day(){return this.ms=Number(s()(this.ms).add(24,"hours").toDate()),this}constructor(e){this.ms=e}}},4300:function(e,t,r){"use strict";r.d(t,{K:function(){return useQueryParams}});var n=r(4033),s=r(2265);function useSearchParamsWrapper(e){let t=(0,n.useSearchParams)(),[r,a]=s.useState(e);return s.useEffect(()=>{let n=Array.from(t.entries()).some(e=>{let[t,n]=e;return r[t]!==n});if(n){let n=Object.entries(e).reduce((e,r)=>{let[n,s]=r;return e[n]=t.get(n)||s,e},{});a({...r,...n})}},[e,t,r]),r}function useQueryParams(e){let t=useSearchParamsWrapper(e.defaultParams),r=(0,n.useRouter)(),a=(0,n.usePathname)(),i=s.useCallback(e=>{let t=new URLSearchParams(window.location.search),n=Array.from(t.entries()).reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{}),s={...n,...e},i=Object.entries(s).map(e=>{let[t,r]=e;return"".concat(t,"=").concat(r)}).join("&");r.push(a+"?".concat(i))},[a,r]);return{currentParams:t,patchQueryParams:i}}},1396:function(e,t,r){e.exports=r(8326)},2466:function(e,t,r){"use strict";var n=r(2265);function XCircleIcon({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}let s=n.forwardRef(XCircleIcon);t.Z=s}},function(e){e.O(0,[326,244,971,472,744],function(){return e(e.s=2064)}),_N_E=e.O()}]);