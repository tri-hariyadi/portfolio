(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7982)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,c=o(n(7294)),i=n(6273),u=n(2725),s=n(3462),l=n(1018),f=n(7190),d=n(1210),m=n(8684),p="undefined"!==typeof c.default.useTransition,h={};function v(e,t,n,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var y=c.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,g=e.children,x=e.prefetch,w=e.passHref,b=e.replace,j=e.shallow,_=e.scroll,k=e.locale,C=e.onClick,E=e.onMouseEnter,O=e.onTouchStart,M=e.legacyBehavior,T=void 0===M?!0!==Boolean(!1):M,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!T||"string"!==typeof n&&"number"!==typeof n||(n=c.default.createElement("a",null,n));var z=!1!==x,N=r(p?c.default.useTransition():[],2)[1],P=c.default.useContext(s.RouterContext),S=c.default.useContext(l.AppRouterContext);S&&(P=S);var R,A=c.default.useMemo((function(){var e=r(i.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?i.resolveHref(P,y):n||t}}),[P,o,y]),I=A.href,$=A.as,D=c.default.useRef(I),B=c.default.useRef($);T&&(R=c.default.Children.only(n));var H=T?R&&"object"===typeof R&&R.ref:t,V=r(f.useIntersection({rootMargin:"200px"}),3),Z=V[0],K=V[1],U=V[2],F=c.default.useCallback((function(e){B.current===$&&D.current===I||(U(),B.current=$,D.current=I),Z(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[$,H,I,U,Z]);c.default.useEffect((function(){var e=K&&z&&i.isLocalURL(I),t="undefined"!==typeof k?k:P&&P.locale,n=h[I+"%"+$+(t?"%"+t:"")];e&&!n&&v(P,I,$,{locale:t})}),[$,I,K,k,z,P]);var J={ref:F,onClick:function(e){T||"function"!==typeof C||C(e),T&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u,s,l){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!l})};s?s(f):f()}}(e,P,I,$,b,j,_,k,S?N:void 0,z)},onMouseEnter:function(e){T||"function"!==typeof E||E(e),T&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),!z&&S||i.isLocalURL(I)&&v(P,I,$,{priority:!0})},onTouchStart:function(e){T||"function"!==typeof O||O(e),T&&R.props&&"function"===typeof R.props.onTouchStart&&R.props.onTouchStart(e),!z&&S||i.isLocalURL(I)&&v(P,I,$,{priority:!0})}};if(!T||w||"a"===R.type&&!("href"in R.props)){var q="undefined"!==typeof k?k:P&&P.locale,W=P&&P.isLocaleDomain&&d.getDomainLocale($,q,P.locales,P.domainLocales);J.href=W||m.addBasePath(u.addLocale($,q,P&&P.defaultLocale))}return T?c.default.cloneElement(R,J):c.default.createElement("a",Object.assign({},L,J),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!c,l=r(o.useState(!1),2),f=l[0],d=l[1],m=r(o.useState(null),2),p=m[0],h=m[1];o.useEffect((function(){if(c){if(s||f)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},u.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),i.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(p,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[p,s,n,t,f]);var v=o.useCallback((function(){d(!1)}),[]);return[h,f,v]};var o=n(7294),a=n(9311),c="function"===typeof IntersectionObserver,i=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var c=r.default.createContext(null);t.GlobalLayoutRouterContext=c},7982:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(1799);function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var a=n(5893),c=n(7294),i=n(655),u=n(9304),s=n(4735),l=n(8868);function f(){var e=(0,c.useRef)(!1);return(0,l.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var d=n(240),m=n(6681),p=n(6401),h=function(e){var t=e.children,n=e.initial,r=e.isPresent,o=e.onExitComplete,a=e.custom,u=e.presenceAffectsLayout,s=(0,m.h)(v),l=(0,p.M)(),f=(0,c.useMemo)((function(){return{id:l,initial:n,isPresent:r,custom:a,onExitComplete:function(e){var t,n;s.set(e,!0);try{for(var r=(0,i.__values)(s.values()),a=r.next();!a.done;a=r.next()){if(!a.value)return}}catch(c){t={error:c}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}null===o||void 0===o||o()},register:function(e){return s.set(e,!1),function(){return s.delete(e)}}}}),u?void 0:[r]);return(0,c.useMemo)((function(){s.forEach((function(e,t){return s.set(t,!1)}))}),[r]),c.useEffect((function(){!r&&!s.size&&(null===o||void 0===o||o())}),[r]),c.createElement(d.O.Provider,{value:f},t)};function v(){return new Map}var y=n(5364),g=n(5411),x=function(e){return e.key||""};var w=function(e){var t=e.children,n=e.custom,r=e.initial,o=void 0===r||r,a=e.onExitComplete,d=e.exitBeforeEnter,m=e.presenceAffectsLayout,p=void 0===m||m,v=(0,i.__read)(function(){var e=f(),t=(0,i.__read)((0,c.useState)(0),2),n=t[0],r=t[1],o=(0,c.useCallback)((function(){e.current&&r(n+1)}),[n]);return[(0,c.useCallback)((function(){return s.ZP.postRender(o)}),[o]),n]}(),1),w=v[0],b=(0,c.useContext)(y.p).forceRender;b&&(w=b);var j=f(),_=function(e){var t=[];return c.Children.forEach(e,(function(e){(0,c.isValidElement)(e)&&t.push(e)})),t}(t),k=_,C=new Set,E=(0,c.useRef)(k),O=(0,c.useRef)(new Map).current,M=(0,c.useRef)(!0);if((0,l.L)((function(){M.current=!1,function(e,t){e.forEach((function(e){var n=x(e);t.set(n,e)}))}(_,O),E.current=k})),(0,g.z)((function(){M.current=!0,O.clear(),C.clear()})),M.current)return c.createElement(c.Fragment,null,k.map((function(e){return c.createElement(h,{key:x(e),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:p},e)})));k=(0,i.__spreadArray)([],(0,i.__read)(k),!1);for(var T=E.current.map(x),L=_.map(x),z=T.length,N=0;N<z;N++){var P=T[N];-1===L.indexOf(P)&&C.add(P)}return d&&C.size&&(k=[]),C.forEach((function(e){if(-1===L.indexOf(e)){var t=O.get(e);if(t){var r=T.indexOf(e);k.splice(r,0,c.createElement(h,{key:x(t),isPresent:!1,onExitComplete:function(){O.delete(e),C.delete(e);var t=E.current.findIndex((function(t){return t.key===e}));if(E.current.splice(t,1),!C.size){if(E.current=_,!1===j.current)return;w(),a&&a()}},custom:n,presenceAffectsLayout:p},t))}}})),k=k.map((function(e){var t=e.key;return C.has(t)?e:c.createElement(h,{key:x(e),isPresent:!0,presenceAffectsLayout:p},e)})),"production"!==u.O&&d&&k.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),c.createElement(c.Fragment,null,C.size?k:k.map((function(e){return(0,c.cloneElement)(e)})))},b=n(1664),j=n.n(b),_=n(1163),k=function(e){var t=e.activeItem,n=e.setActiveItem,r=e.name,o=e.route;return t!==r?(0,a.jsx)(j(),{href:o,children:(0,a.jsx)("a",{children:(0,a.jsx)("span",{className:"hover:text-green",onClick:function(){return n(r)},children:r})})}):null},C=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],r=(0,_.useRouter)().pathname;return(0,c.useEffect)((function(){"/"===r&&n("About"),"/projects"===r&&n("Projects"),"/resume"===r&&n("Resume")}),[]),(0,a.jsxs)("div",{className:"flex justify-between px-7 sm:px-11 py-3 my-3",children:[(0,a.jsx)("span",{className:"text-xl font-bold border-b-4 text-green border-green md:text-2xl",children:t}),(0,a.jsxs)("div",{className:"flex space-x-5 text-lg",children:[(0,a.jsx)(k,{activeItem:t,setActiveItem:n,name:"About",route:"/"}),(0,a.jsx)(k,{activeItem:t,setActiveItem:n,name:"Projects",route:"/projects"}),(0,a.jsx)(k,{activeItem:t,setActiveItem:n,name:"Resume",route:"/resume"})]})]})},E=n(8193),O=n(8357);function M(e){return(0,O.w_)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}}]})(e)}function T(e){return(0,O.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.124 33.908c-1 0-3.118.68-5.855 3.05-2.74 2.373-5.792 6.186-8.43 10.58-5.273 8.79-8.716 20.37-8.716 25.37s3.68 21.406 9.272 34.455c2.796 6.525 6.08 12.466 9.042 16.22 2.964 3.753 5.186 4.325 4.686 4.325h64c-.5 0 1.722-.572 4.686-4.326 2.963-3.753 6.246-9.694 9.043-16.22 5.592-13.048 9.27-29.454 9.27-34.454s-3.442-16.58-8.716-25.37c-2.637-4.394-5.69-8.207-8.428-10.58-2.738-2.37-4.856-3.05-5.856-3.05h-64zm7.22 112l-8.452 38.03 62.966-15.74-4.953-22.29h-49.562zm58.42 39.867l-71.238 17.81-10.693 48.12 91.5-22.875-9.568-43.055zm13.473 60.63l-99.77 24.945-10.693 48.12 120.032-30.01-9.57-43.054zm13.475 60.632L189.41 339.113l-10.694 48.12 148.564-37.14-9.568-43.056zm13.473 60.633L174.35 406.88l-3.103 13.96 35.193 23.463 134.313-33.578-9.568-43.055zm-7.084 65.77l-97.42 24.355 30.444 20.297 66.977-44.65z"}}]})(e)}var L=n(3750),z=n(9008),N=n.n(z);const P=(0,c.createContext)({setTheme:e=>{},themes:[]}),S=["light","dark"],R="(prefers-color-scheme: dark)",A=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:a=["light","dark"],defaultTheme:i=(n?"system":"light"),attribute:u="data-theme",value:s,children:l})=>{const[f,d]=(0,c.useState)((()=>$(o,i))),[m,p]=(0,c.useState)((()=>$(o))),h=s?Object.values(s):a,v=(0,c.useCallback)((t=>{const n=B(t);p(n),"system"!==f||e||g(n,!1)}),[f,e]),y=(0,c.useRef)(v);y.current=v;const g=(0,c.useCallback)(((e,r=!0,a=!0)=>{let c=(null==s?void 0:s[e])||e;const i=t&&a?D():null;if(r)try{localStorage.setItem(o,e)}catch(e){}if("system"===e&&n){const e=B();c=(null==s?void 0:s[e])||e}if(a){const e=document.documentElement;"class"===u?(e.classList.remove(...h),e.classList.add(c)):e.setAttribute(u,c),null==i||i()}}),[]);(0,c.useEffect)((()=>{const e=function(){return y.current(...[].slice.call(arguments))},t=window.matchMedia(R);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const x=(0,c.useCallback)((t=>{e?g(t,!0,!1):g(t),d(t)}),[e]);return(0,c.useEffect)((()=>{const e=e=>{e.key===o&&x(e.newValue||i)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[x]),(0,c.useEffect)((()=>{if(!r)return;let t=e&&S.includes(e)?e:f&&S.includes(f)?f:"system"===f&&m||null;document.documentElement.style.setProperty("color-scheme",t)}),[r,f,m,e]),c.createElement(P.Provider,{value:{theme:f,setTheme:x,forcedTheme:e,resolvedTheme:"system"===f?m:f,themes:n?[...a,"system"]:a,systemTheme:n?m:void 0}},c.createElement(I,{forcedTheme:e,storageKey:o,attribute:u,value:s,enableSystem:n,defaultTheme:i,attrs:h}),l)},I=(0,c.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,defaultTheme:o,value:a,attrs:i})=>{const u="class"===n?`var d=document.documentElement.classList;d.remove(${i.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",s=(e,t)=>{e=(null==a?void 0:a[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},l="system"===o;return c.createElement(N(),null,c.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${u}${s(e)}}()`}}:r?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${u}var e=localStorage.getItem('${t}');${l?"":s(o)+";"}if("system"===e||(!e&&${l})){var t="${R}",m=window.matchMedia(t);m.media!==t||m.matches?${s("dark")}:${s("light")}}else if(e) ${a?`var x=${JSON.stringify(a)};`:""}${s(a?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${u}var e=localStorage.getItem("${t}");if(e){${a?`var x=${JSON.stringify(a)};`:""}${s(a?"x[e]":"e",!0)}}else{${s(o)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),$=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},D=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},B=e=>(e||(e=window.matchMedia(R)),e.matches?"dark":"light");var H=n(3829),V=function(){var e=(0,c.useContext)(P),t=e.theme,n=e.setTheme,r=(0,c.useState)(!1),o=r[0],i=r[1];return(0,c.useEffect)((function(){i("light"!==t)}),[t]),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{className:"w-32 h-32 mx-auto rounded-full",src:"".concat(H.O,"/foto_profile.png"),alt:"user avatar"}),(0,a.jsxs)("h3",{className:"my-4 text-3xl font-medium tracking-wider font-kaushan",children:[(0,a.jsx)("span",{className:"text-green",children:"Tri "}),"Hariyadi"]}),(0,a.jsx)("p",{className:"px-2 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-200",children:"Full Stack Javascript Developer"}),(0,a.jsxs)("a",{className:"flex items-center justify-center px-2 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-200 hover:shadow-md hover:shadow-gray-500/50 hover:bg-gray-100",href:"".concat(H.O,"/assets/CV_Tri_Hariyadi.pdf"),download:"CV_Tri_Hariyadi.pdf",children:[(0,a.jsx)(T,{className:"w-6 h-6"})," Download Resume"]}),(0,a.jsxs)("div",{className:"flex justify-around w-9/12 mx-auto my-5 text-green md:w-full",children:[(0,a.jsx)("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(E.b1v,{className:"w-8 h-8 cursor-pointer text-red-500"})}),(0,a.jsx)("a",{href:"https://github.com/tri-hariyadi",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(E.RrF,{className:"w-8 h-8 cursor-pointer text-black dark:text-white"})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/tri-hariyadi-855b92179/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(E._iD,{className:"w-8 h-8 cursor-pointer text-blue-600"})})]}),(0,a.jsxs)("div",{className:"py-4 my-5 bg-gray-200 dark:bg-dark-200",style:{marginLeft:"-1rem",marginRight:"-1rem"},children:[(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,a.jsx)(M,{}),(0,a.jsx)("span",{className:"",children:"Jakarta Selatan"})]}),(0,a.jsx)("p",{className:"my-2",children:"trihariyadi24@gmail.com"}),(0,a.jsx)("p",{className:"my-2",children:"+6289660278221"})]}),(0,a.jsx)("button",{className:"w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400\n        focus:outline-none shadow-lg hover:shadow-cyan-500/50",onClick:function(){return window.open("mailto:trihariyadi24@gmail.com")},children:"Email Me"}),(0,a.jsx)("button",{className:"w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400\n          shadow-lg hover:shadow-cyan-500/50 focus:outline-none",onClick:function(){n("light"===t?"dark":"light")},children:(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center",children:[(0,a.jsxs)("span",{className:"mr-2",children:["Toggle ",o?"Light":"Dark"]}),(0,a.jsx)("div",{className:"text-yellow-300 font-medium",children:o?(0,a.jsx)(L.UD2,{className:"text-xl"}):(0,a.jsx)(L.gLD,{})})]})})]})};n(906);var Z=function(e){var t=e.Component,n=e.pageProps,i=e.router;return(0,a.jsx)(A,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:(0,a.jsxs)("div",{className:"grid grid-cols-12 gap-6 px-3 xl:px-28 2xl:px-44 lg:px-5 my-14 sm:px-20 md:mb-16 md:px-20",children:[(0,a.jsx)("div",{className:"col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-4 2xl:col-span-3\n\t\t\t\t\trounded-2xl shadow-custom-light dark:shadow-custom-dark",children:(0,a.jsx)(V,{})}),(0,a.jsxs)("div",{className:"flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-8 2xl:col-span-9\n\t\t\t\t\trounded-2xl dark:bg-dark-500 shadow-md shadow-custom-light dark:shadow-xl dark:shadow-custom-dark",children:[(0,a.jsx)(C,{}),(0,a.jsx)(w,{exitBeforeEnter:!0,children:(0,c.createElement)(t,o((0,r.Z)({},n),{key:i.route}))})]})]})})}},3829:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var r="/portfolio"},906:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var i,u=[],s=!1,l=-1;function f(){s&&i&&(s=!1,i.length?u=i.concat(u):l=-1,u.length&&d())}function d(){if(!s){var e=c(f);s=!0;for(var t=u.length;t;){for(i=u,u=[];++l<t;)i&&i[l].run();l=-1,t=u.length}i=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},c=!0;try{t[e](a,a.exports,r),c=!1}finally{c&&delete n[e]}return a.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},8193:function(e,t,n){"use strict";n.d(t,{RrF:function(){return o},SgI:function(){return c},_iD:function(){return a},b1v:function(){return i}});var r=n(8357);function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM368 744c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464zm192-280c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184zm192 72c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256z"}}]})(e)}function i(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"}}]})(e)}},3750:function(e,t,n){"use strict";n.d(t,{$hF:function(){return c},KC7:function(){return i},UD2:function(){return a},gLD:function(){return o}});var r=n(8357);function o(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}},{tag:"path",attr:{d:"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"}}]})(e)}function i(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"circle",attr:{cx:"8",cy:"8",r:"8"}}]})(e)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return r.createElement(l,c({attr:c({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var n,o=e.attr,a=e.size,u=e.title,s=i(e,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})},5364:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=(0,n(7294).createContext)({})},240:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var r=(0,n(7294).createContext)(null)},1741:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var r="undefined"!==typeof document},9304:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(3454),o=("undefined"===typeof r||r.env,"production")},6681:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(7294);function o(e){var t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},6401:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var r=n(6681),o=0,a=function(){return o++},c=function(){return(0,r.h)(a)}},8868:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(7294),o=n(1741).j?r.useLayoutEffect:r.useEffect},5411:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(7294);function o(e){return(0,r.useEffect)((function(){return function(){return e()}}),[])}},4735:function(e,t,n){"use strict";n.d(t,{qY:function(){return m},ZP:function(){return x},iW:function(){return p},$B:function(){return g}});const r=1/60*1e3,o="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),a="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(o())),r);let c=!0,i=!1,u=!1;const s={delta:0,timestamp:0},l=["read","update","preRender","render","postRender"],f=l.reduce(((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,a=!1;const c=new WeakSet,i={schedule:(e,a=!1,i=!1)=>{const u=i&&o,s=u?t:n;return a&&c.add(e),-1===s.indexOf(e)&&(s.push(e),u&&o&&(r=t.length)),e},cancel:e=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1),c.delete(e)},process:u=>{if(o)a=!0;else{if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let n=0;n<r;n++){const r=t[n];r(u),c.has(r)&&(i.schedule(r),e())}o=!1,a&&(a=!1,i.process(u))}}};return i}((()=>i=!0)),e)),{}),d=l.reduce(((e,t)=>{const n=f[t];return e[t]=(e,t=!1,r=!1)=>(i||y(),n.schedule(e,t,r)),e}),{}),m=l.reduce(((e,t)=>(e[t]=f[t].cancel,e)),{}),p=l.reduce(((e,t)=>(e[t]=()=>f[t].process(s),e)),{}),h=e=>f[e].process(s),v=e=>{i=!1,s.delta=c?r:Math.max(Math.min(e-s.timestamp,40),1),s.timestamp=e,u=!0,l.forEach(h),u=!1,i&&(c=!1,a(v))},y=()=>{i=!0,c=!0,u||a(v)},g=()=>s;var x=d}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);