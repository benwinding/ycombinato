(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{3926:function(e,t,r){Promise.resolve().then(r.bind(r,8414))},7862:function(e,t,r){"use strict";r.d(t,{E:function(){return u}});var n=r(9077),s=r(988),i=r(1821);let u=new n.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),a=(0,s.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,i.w)({queryClient:u,persistor:a,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})},8414:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return page}});var n=r(7437),s=r(2265),i=r(4033),u=r(7862),a=r(9077);function useHnUser(e){let t=(0,a.useQuery)("user-"+e,()=>fetchHackerNewsUser(e+""),{enabled:null!=e});return t}let fetchHackerNewsUser=async e=>{let t="http://hn.algolia.com/api/v1/users/".concat(e);return fetch(t).then(e=>e.json())};var o=r(1170),c=r(1983);function UserViewerWrapper(e){return(0,n.jsx)(a.QueryClientProvider,{client:u.E,children:(0,n.jsx)(UserViewer,{userId:e.userId})})}function UserViewer(e){let t=useHnUser(e.userId);if(t.isLoading)return(0,n.jsx)(c.a,{});if(!e.userId||t.error||!t.data)return(0,n.jsx)("div",{className:"text-center py-10",children:"User not found"});let r=t.data;return(0,n.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-3",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)(Row,{name:"user",value:r.username}),(0,n.jsx)(Row,{name:"about",value:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:r.about}})}),(0,n.jsx)(Row,{name:"karma",value:r.karma})]})}),(0,n.jsx)("div",{className:"pt-6",children:(0,n.jsx)(o.dL,{href:"https://news.ycombinator.com/user?id=".concat(e.userId),children:"More info on HN"})})]})})}function Row(e){return(0,n.jsxs)("tr",{className:"align-top text-gray-500",children:[(0,n.jsxs)("td",{className:"pr-3",children:[e.name,":"]}),(0,n.jsx)("td",{children:e.value})]})}var l=r(1358),page=()=>{let e=(0,l.t)(),t=(0,i.useSearchParams)(),r=t.get("id"),u=s.useMemo(()=>e?(0,n.jsx)(UserViewerWrapper,{userId:r}):null,[e,r]);return u}},1170:function(e,t,r){"use strict";r.d(t,{Av:function(){return LinkToAuthor},It:function(){return LinkToDiscussionWrapper},dL:function(){return ExternalLink},iR:function(){return LinkToDiscussion}});var n=r(7437),s=r(7766);function ExternalLink(e){return(0,n.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline "+e.className,children:e.children})}function LinkToAuthor(e){let t="https://news.ycombinator.com/user?id=".concat(e.author);return(0,n.jsx)(ExternalLink,{href:t,className:e.className,children:e.author})}function LinkToDiscussion(e){return(0,n.jsx)(LinkToDiscussionWrapper,{discussionId:e.discussionId,className:e.className,children:(0,s._)(e.createdAt)})}function LinkToDiscussionWrapper(e){let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,n.jsx)(ExternalLink,{href:t,className:e.className,children:e.children})}r(2265)},1983:function(e,t,r){"use strict";r.d(t,{a:function(){return LoadingScreen}});var n=r(7437),s=r(2265);let i=["⊖_⊖","⊜_⊜","⊙_⊙"];function LoadingScreen(){let[e,t]=s.useState(0);return useTimeout(()=>{let r=(e+1)%i.length;t(r)},2e3*Math.random()),(0,n.jsxs)("div",{className:"flex flex-col items-center py-40 w-full",children:[(0,n.jsx)("p",{className:"text-3xl font-mono text-gray-600 pb-10",children:"Loading..."}),(0,n.jsx)("p",{className:"text-4xl font-mono whitespace-pre text-gray-400",children:i[e]})]})}function useTimeout(e,t){s.useEffect(()=>{let r=setTimeout(()=>{e()},t);return()=>{clearTimeout(r)}},[e,t])}},7766:function(e,t,r){"use strict";r.d(t,{_:function(){return getFromNowStr},q:function(){return Time}});var n=r(4548),s=r.n(n),i=r(6537),u=r.n(i);function getFromNowStr(e){return s()(e).fromNow()}s().extend(u());let Time=class Time{static fromIso(e){let t=Number(s()(e.dateIso).toDate());return new Time(t)}static fromHn(e){return new Time(1e3*e.seconds)}static fromDateString(e){let t=Number(s()(e.dateString,"YYYY-MM-DD").toDate());return new Time(t)}static fromDateObj(e){let t=Number(s()(e.dateObj).toDate());return new Time(t)}static now(){let e=Number(s()(new Date).toDate());return new Time(e)}formatAsHnSeconds(){return Math.round(this.ms/1e3)}formatFromNow(){return s()(this.ms).fromNow()}formatAsDateString(){return s()(this.ms).format("YYYY-MM-DD")}endOfDay(){let e=s()(this.ms).set("hours",23).set("minutes",59).set("seconds",59);return this.ms=Number(e.toDate()),this}startOfDay(){let e=s()(this.ms).set("hours",0).set("minutes",0).set("seconds",1);return this.ms=Number(e.toDate()),this}setClockNow(){let e=s()(new Date);return this.ms=Number(s()(this.ms).set("hours",e.hour()).set("minute",e.minute()).toDate()),this}subtract1Day(){return this.ms=Number(s()(this.ms).subtract(24,"hours").toDate()),this}add1Day(){return this.ms=Number(s()(this.ms).add(24,"hours").toDate()),this}constructor(e){this.ms=e}}},1358:function(e,t,r){"use strict";r.d(t,{t:function(){return useIsMounted}});var n=r(2265);function useIsMounted(){let[e,t]=n.useState(!1);return n.useEffect(()=>{t(!0)},[]),e}}},function(e){e.O(0,[244,971,472,744],function(){return e(e.s=3926)}),_N_E=e.O()}]);