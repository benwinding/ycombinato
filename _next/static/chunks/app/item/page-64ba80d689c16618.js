(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{6902:function(e){var t,n,r,i,s,a,o,u,l,c,d,h,f,m,p,v,y,x,g,$,M;e.exports=(t="millisecond",n="second",r="minute",i="hour",s="week",a="month",o="quarter",u="year",l="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},v=function(e){return e instanceof $},y=function e(t,n,r){var i;if(!t)return m;if("string"==typeof t){var s=t.toLowerCase();p[s]&&(i=s),n&&(p[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;p[o]=t,i=o}return!r&&i&&(m=i),i||!r&&m},x=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},(g={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,a),s=n-i<0,o=t.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:u,w:s,d:"day",D:l,h:i,m:r,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=y,g.i=v,g.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},M=($=function(){function e(e){this.$L=y(e.locale,null,!0),this.parse(e)}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,n){return g.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var o=this,c=!!g.u(t)||t,d=g.p(e),h=function(e,t){var n=g.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return c?n:n.endOf("day")},f=function(e,t){return g.w(o.toDate()[e].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},m=this.$W,p=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return c?h(1,0):h(31,11);case a:return c?h(1,p):h(0,p+1);case s:var x=this.$locale().weekStart||0,$=(m<x?m+7:m)-x;return h(c?v-$:v+(6-$),p);case"day":case l:return f(y+"Hours",0);case i:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,s){var o,c=g.p(e),d="set"+(this.$u?"UTC":""),h=((o={}).day=d+"Date",o[l]=d+"Date",o[a]=d+"Month",o[u]=d+"FullYear",o[i]=d+"Hours",o[r]=d+"Minutes",o[n]=d+"Seconds",o[t]=d+"Milliseconds",o)[c],f="day"===c?this.$D+(s-this.$W):s;if(c===a||c===u){var m=this.clone().set(l,1);m.$d[h](f),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[g.p(e)]()},f.add=function(e,t){var o,l=this;e=Number(e);var c=g.p(t),d=function(t){var n=x(l);return g.w(n.date(n.date()+Math.round(t*e)),l)};if(c===a)return this.set(a,this.$M+e);if(c===u)return this.set(u,this.$y+e);if("day"===c)return d(1);if(c===s)return d(7);var h=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[c]||1,f=this.$d.getTime()+e*h;return g.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=g.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,l=n.months,d=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},f=function(e){return g.s(s%12||12,e,"0")},m=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:g.s(this.$y,4,"0"),M:o+1,MM:g.s(o+1,2,"0"),MMM:d(n.monthsShort,o,l,3),MMMM:d(l,o),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:g.s(s,2,"0"),h:f(1),hh:f(2),a:m(s,a,!0),A:m(s,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:i};return r.replace(h,function(e,t){return t||p[e]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,l){var c,d=g.p(t),h=x(e),f=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,p=g.m(this,h);return p=((c={})[u]=p/12,c[a]=p,c[o]=p/3,c[s]=(m-f)/6048e5,c.day=(m-f)/864e5,c[i]=m/36e5,c[r]=m/6e4,c[n]=m/1e3,c)[d]||m,l?p:g.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=y(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=M,[["$ms",t],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",u],["$D",l]].forEach(function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,$,x),e.$i=!0),x},x.locale=y,x.isDayjs=v,x.unix=function(e){return x(1e3*e)},x.en=p[m],x.Ls=p,x.p={},x)},3432:function(e){e.exports=function(e,t,n){e=e||{};var r=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,s,a,o){for(var u,l,c,d=s.$locale().relativeTime||i,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,m=0;m<f;m+=1){var p=h[m];p.d&&(u=a?n(t).diff(s,p.d,!0):s.diff(t,p.d,!0));var v=(e.rounding||Math.round)(Math.abs(u));if(c=u>0,v<=p.r||!p.r){v<=1&&m>0&&(p=h[m-1]);var y=d[p.l];o&&(v=o(""+v)),l="string"==typeof y?y.replace("%d",v):y(v,r,p.l,c);break}}if(r)return l;var x=c?d.future:d.past;return"function"==typeof x?x(l):x.replace("%s",l)},r.to=function(e,t){return s(e,t,this,!0)},r.from=function(e,t){return s(e,t,this)};var a=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(a(this),e)},r.fromNow=function(e){return this.from(a(this),e)}}},3510:function(e,t,n){Promise.resolve().then(n.bind(n,9876))},8645:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(9268);function i(e){return(0,r.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",className:"hover:underline",children:e.children})}n(6006)},9876:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r,i,s=n(9268),a=n(6006);let o=async e=>fetch("https://hn.algolia.com/api/v1/items/".concat(e)).then(e=>e.json()),u=()=>{let[e,t]=a.useState();return a.useEffect(()=>{let e=window.location.search,n=new URLSearchParams(e);t(n)},[]),e};var l=n(4824),c=n(7026),d=n(6902),h=n.n(d),f=n(3432),m=n.n(f);let p=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z",clipRule:"evenodd"}))});var v=n(8645);h().extend(m());let y=e=>{let t="https://news.ycombinator.com/item?id=".concat(e.discussionId);return(0,s.jsx)("div",{className:"font-sans",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex gap-2 items-center justify-between",children:[(0,s.jsx)(v.d,{href:e.submissionLink,children:(0,s.jsxs)("h1",{className:"text-xl flex items-center gap-2",children:[(0,s.jsx)(p,{width:20})," ",e.title]})}),(0,s.jsx)(v.d,{href:t,children:"(back to hn)"})]}),e.comments.map(t=>(0,s.jsx)(x,{comment:t,filterText:e.filterText},t.id))]})})},x=e=>{let[t,n]=(0,a.useState)(!1),{comment:r,filterText:i}=e,o=r._textMarked||r.text||"<i>[deleted]<i/>",u=!r._textMarked;a.useEffect(()=>{n(!!i&&u)},[r.id,i,u]);let l=a.useCallback(()=>n(!0),[]),c=a.useCallback(()=>n(!1),[]);return(0,s.jsx)(g,{id:r.id,html:o,comments:r.children,isCollapsed:t,header:(0,s.jsx)($,{comment:r,isCollapsed:t,onCollapse:l,onExpand:c}),filterText:i})};function g(e){let{comments:t,isCollapsed:n,filterText:r,html:i}=e;return(0,s.jsxs)("ul",{className:"list-decimal bg-black bg-opacity-5 rounded pl-2",children:[(0,s.jsxs)("div",{id:e.id+"",children:[e.header,!n&&(0,s.jsx)("div",{className:"text-xs py-1 pr-2",dangerouslySetInnerHTML:{__html:i}})]}),(0,s.jsx)("div",{className:"flex flex-col gap-2",children:t.map(e=>(0,s.jsx)(x,{comment:e,filterText:r},e.id))})]})}function $(e){var t;let{comment:n,isCollapsed:r,onExpand:i,onCollapse:o}=e,u=a.useCallback(()=>{r?i():o()},[r,o,i]),l="https://news.ycombinator.com/item?id=".concat(n.id),c="https://news.ycombinator.com/user?id=".concat(n.author);return(0,s.jsxs)("div",{className:"flex items-center gap-2 text-gray-500 text-xs pt-1",children:[(0,s.jsx)(v.d,{href:c,children:n.author}),(0,s.jsx)(v.d,{href:l,children:(t=n.created_at,h()(t).fromNow())}),(0,s.jsxs)("button",{style:{marginTop:-2},onClick:u,children:["[",r?"+":"-","]"]})]})}let M=()=>(0,s.jsx)(l.QueryClientProvider,{client:c.E,children:(0,s.jsx)(w,{})}),w=()=>{let[e,t]=a.useState("Sort by response count"),[n,r]=a.useState(""),i=u(),c=null==i?void 0:i.get("id"),d=(0,l.useQuery)("post"+c,()=>o(c+""),{enabled:null!=c}),[h,f]=function(e,t){let[n,r]=(0,a.useState)(e),[i,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s(!0);let n=setTimeout(()=>{r(e),s(!1)},t);return()=>{clearTimeout(n)}},[e,t]),[n,i]}(n,400),m=d.data,p=j(m,e),v=function(e,t){let n=(0,a.useMemo)(()=>{if(e)return function(e,t){let n={...e},r=n.children.reduce((e,n)=>{let r=function e(t,n){let r=0;if(n){let e=function(e,t){var n;let r=RegExp(t.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&"),"ig"),i=(null===(n=e.match(r))||void 0===n?void 0:n.length)||0;if(!i)return{htmlNew:void 0,numReplacements:i};let s=e.replaceAll(r,"<mark>$&</mark>");return{htmlNew:s,numReplacements:i}}(t.text||"",n);r+=e.numReplacements,t._textMarked=e.htmlNew}else t._textMarked=void 0;return t.children.forEach(t=>{r+=e(t,n)}),r}(n,t);return e+r},0);return{data:n,markCount:r}}(e,t)},[e,t]);return n}(p,h),y=S(null==v?void 0:v.data,h),x=null==v?void 0:v.markCount;return(0,s.jsxs)("div",{className:"flex flex-col py-1 px-2",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2",children:[(0,s.jsx)(C,{onChange:t,value:e}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{className:"flex-grow",children:(0,s.jsx)(D,{onChange:r,value:n})}),(0,s.jsx)("div",{className:"flex-shrink-0",children:null!=x&&(0,s.jsx)(b,{count:x,loading:f})})]})]}),d.isLoading&&d.isFetching&&(0,s.jsx)("div",{children:"Loading..."}),y]})};function b(e){return e.loading?(0,s.jsx)("div",{children:"Searching..."}):(0,s.jsxs)("div",{children:["Found ",e.count," results"]})}let S=(e,t)=>{let n=(0,a.useMemo)(()=>e&&(0,s.jsx)(y,{submissionLink:e.url,discussionId:e.id,title:e.title,comments:e.children,filterText:t}),[e,t]);return n},j=(e,t)=>{let n=(0,a.useMemo)(()=>e?function(e,t){if(!e)return e;let n={...e};if(t.byThreadDepth){let e=(t,n)=>{let r=n.children||[];if(!r.length)return t;let i=r.reduce((n,r)=>{let i=e(t+1,r);return i>n?i:n},0);return i},t=(t,n)=>e(0,n)-e(0,t),r=e=>(e.children.sort(t),e.children.forEach(e=>{r(e)}),e.children);console.time("sort byThreadDepth"),n.children=r(n),console.timeEnd("sort byThreadDepth")}return t.byResponseCount&&(console.time("sort byResponseCount"),n.children=n.children.sort((e,t)=>t.children.length-e.children.length),console.timeEnd("sort byResponseCount")),n}(e,{byResponseCount:"Sort by response count"===t,byThreadDepth:"Sort by thread length"===t}):void 0,[e,t]);return n};function D(e){return(0,s.jsx)("input",{className:"border rounded-md px-1 w-full",placeholder:"Filter comments...",onChange:t=>e.onChange(t.target.value),value:e.value})}function C(e){return(0,s.jsx)("div",{className:"flex items-center gap-2",children:["Sort by response count","Sort by thread length"].map(t=>(0,s.jsx)(_,{value:t,label:t,checked:t===e.value,onChange:n=>e.onChange(t)},t))})}function _(e){let{label:t,value:n,checked:r,onChange:i}=e;return(0,s.jsxs)("label",{className:"text-xs flex items-center gap-1",children:[(0,s.jsx)("input",{type:"radio",value:n,checked:r,onChange:i}),t]})}(r=i||(i={})).byResponseCount="Sort by response count",r.byThreadDepth="Sort by thread length";let T=()=>{let[e,t]=a.useState(!1);a.useEffect(()=>{t(!0)},[]);let n=a.useMemo(()=>e?(0,s.jsx)(M,{}):null,[e]);return n};var k=T},7026:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(4824),i=n(9829),s=n(8550);let a=new r.QueryClient({defaultOptions:{queries:{cacheTime:36e5}}}),o=(0,i.O)({storage:(()=>{try{return window.localStorage}catch(e){return null}})()});(0,s.w)({queryClient:a,persistor:o,maxAge:36e5,hydrateOptions:{},dehydrateOptions:{}})}},function(e){e.O(0,[303,667,139,744],function(){return e(e.s=3510)}),_N_E=e.O()}]);