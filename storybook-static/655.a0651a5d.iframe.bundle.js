/*! For license information please see 655.a0651a5d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_pizza_v2=self.webpackChunkreact_pizza_v2||[]).push([[655],{"./node_modules/@remix-run/router/dist/router.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Action;__webpack_require__.d(__webpack_exports__,{Ep:function(){return createPath},J0:function(){return invariant},RQ:function(){return joinPaths},WK:function(){return isRouteErrorResponse},X3:function(){return AbortedDeferredError},Zn:function(){return stripBasename},Zq:function(){return getPathContributingMatches},aU:function(){return Action},cP:function(){return parsePath},fp:function(){return matchRoutes},lX:function(){return createBrowserHistory},pC:function(){return resolveTo}}),function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname:pathname,search:search,hash:hash}=window.location;return createLocation("",{pathname:pathname,search:search,hash:hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:createPath(to)}),null,options)}function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function warning(cond,message){if(!cond){"undefined"!=typeof console&&console.warn(message);try{throw new Error(message)}catch(e){}}}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?parsePath(to):to,{state:state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function createPath(_ref){let{pathname:pathname="/",search:search="",hash:hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window:window=document.defaultView,v5Compat:v5Compat=!1}=options,globalHistory=window.history,action=Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action:action,location:history.location,delta:delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref(to){return createHref(window,to)},createURL:createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){if(error instanceof DOMException&&"DataCloneError"===error.name)throw error;window.location.assign(url)}v5Compat&&listener&&listener({action:action,location:history.location,delta:1})},replace:function replace(to,state){action=Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action:action,location:history.location,delta:0})},go(n){return globalHistory.go(n)}};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function matchRoutes(routes,locationArg,basename){void 0===basename&&(basename="/");let pathname=stripBasename(("string"==typeof locationArg?parsePath(locationArg):locationArg).pathname||"/",basename);if(null==pathname)return null;let branches=flattenRoutes(routes);!function rankRouteBranches(branches){branches.sort(((a,b)=>a.score!==b.score?b.score-a.score:function compareIndexes(a,b){let siblings=a.length===b.length&&a.slice(0,-1).every(((n,i)=>n===b[i]));return siblings?a[a.length-1]-b[b.length-1]:0}(a.routesMeta.map((meta=>meta.childrenIndex)),b.routesMeta.map((meta=>meta.childrenIndex)))))}(branches);let matches=null;for(let i=0;null==matches&&i<branches.length;++i)matches=matchRouteBranch(branches[i],safelyDecodeURI(pathname));return matches}function flattenRoutes(routes,branches,parentsMeta,parentPath){void 0===branches&&(branches=[]),void 0===parentsMeta&&(parentsMeta=[]),void 0===parentPath&&(parentPath="");let flattenRoute=(route,index,relativePath)=>{let meta={relativePath:void 0===relativePath?route.path||"":relativePath,caseSensitive:!0===route.caseSensitive,childrenIndex:index,route:route};meta.relativePath.startsWith("/")&&(invariant(meta.relativePath.startsWith(parentPath),'Absolute route path "'+meta.relativePath+'" nested under path "'+parentPath+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),meta.relativePath=meta.relativePath.slice(parentPath.length));let path=joinPaths([parentPath,meta.relativePath]),routesMeta=parentsMeta.concat(meta);route.children&&route.children.length>0&&(invariant(!0!==route.index,'Index routes must not have child routes. Please remove all child routes from route path "'+path+'".'),flattenRoutes(route.children,branches,routesMeta,path)),(null!=route.path||route.index)&&branches.push({path:path,score:computeScore(path,route.index),routesMeta:routesMeta})};return routes.forEach(((route,index)=>{var _route$path;if(""!==route.path&&null!=(_route$path=route.path)&&_route$path.includes("?"))for(let exploded of explodeOptionalSegments(route.path))flattenRoute(route,index,exploded);else flattenRoute(route,index)})),branches}function explodeOptionalSegments(path){let segments=path.split("/");if(0===segments.length)return[];let[first,...rest]=segments,isOptional=first.endsWith("?"),required=first.replace(/\?$/,"");if(0===rest.length)return isOptional?[required,""]:[required];let restExploded=explodeOptionalSegments(rest.join("/")),result=[];return result.push(...restExploded.map((subpath=>""===subpath?required:[required,subpath].join("/")))),isOptional&&result.push(...restExploded),result.map((exploded=>path.startsWith("/")&&""===exploded?"/":exploded))}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=s=>"*"===s;function computeScore(path,index){let segments=path.split("/"),initialScore=segments.length;return segments.some(isSplat)&&(initialScore+=splatPenalty),index&&(initialScore+=indexRouteValue),segments.filter((s=>!isSplat(s))).reduce(((score,segment)=>score+(paramRe.test(segment)?dynamicSegmentValue:""===segment?emptySegmentValue:staticSegmentValue)),initialScore)}function matchRouteBranch(branch,pathname){let{routesMeta:routesMeta}=branch,matchedParams={},matchedPathname="/",matches=[];for(let i=0;i<routesMeta.length;++i){let meta=routesMeta[i],end=i===routesMeta.length-1,remainingPathname="/"===matchedPathname?pathname:pathname.slice(matchedPathname.length)||"/",match=matchPath({path:meta.relativePath,caseSensitive:meta.caseSensitive,end:end},remainingPathname);if(!match)return null;Object.assign(matchedParams,match.params);let route=meta.route;matches.push({params:matchedParams,pathname:joinPaths([matchedPathname,match.pathname]),pathnameBase:normalizePathname(joinPaths([matchedPathname,match.pathnameBase])),route:route}),"/"!==match.pathnameBase&&(matchedPathname=joinPaths([matchedPathname,match.pathnameBase]))}return matches}function matchPath(pattern,pathname){"string"==typeof pattern&&(pattern={path:pattern,caseSensitive:!1,end:!0});let[matcher,compiledParams]=function compilePath(path,caseSensitive,end){void 0===caseSensitive&&(caseSensitive=!1);void 0===end&&(end=!0);warning("*"===path||!path.endsWith("*")||path.endsWith("/*"),'Route path "'+path+'" will be treated as if it were "'+path.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+path.replace(/\*$/,"/*")+'".');let params=[],regexpSource="^"+path.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,((_,paramName,isOptional)=>(params.push({paramName:paramName,isOptional:null!=isOptional}),isOptional?"/?([^\\/]+)?":"/([^\\/]+)")));path.endsWith("*")?(params.push({paramName:"*"}),regexpSource+="*"===path||"/*"===path?"(.*)$":"(?:\\/(.+)|\\/*)$"):end?regexpSource+="\\/*$":""!==path&&"/"!==path&&(regexpSource+="(?:(?=\\/|$))");let matcher=new RegExp(regexpSource,caseSensitive?void 0:"i");return[matcher,params]}(pattern.path,pattern.caseSensitive,pattern.end),match=pathname.match(matcher);if(!match)return null;let matchedPathname=match[0],pathnameBase=matchedPathname.replace(/(.)\/+$/,"$1"),captureGroups=match.slice(1);return{params:compiledParams.reduce(((memo,_ref,index)=>{let{paramName:paramName,isOptional:isOptional}=_ref;if("*"===paramName){let splatValue=captureGroups[index]||"";pathnameBase=matchedPathname.slice(0,matchedPathname.length-splatValue.length).replace(/(.)\/+$/,"$1")}const value=captureGroups[index];return memo[paramName]=isOptional&&!value?void 0:function safelyDecodeURIComponent(value,paramName){try{return decodeURIComponent(value)}catch(error){return warning(!1,'The value for the URL param "'+paramName+'" will not be decoded because the string "'+value+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+error+")."),value}}(value||"",paramName),memo}),{}),pathname:matchedPathname,pathnameBase:pathnameBase,pattern:pattern}}function safelyDecodeURI(value){try{return decodeURI(value)}catch(error){return warning(!1,'The URL path "'+value+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+error+")."),value}}function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search:search="",hash:hash=""}="string"==typeof to?parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname:pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizePathname=pathname=>pathname.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";class AbortedDeferredError extends Error{}function isRouteErrorResponse(error){return null!=error&&"number"==typeof error.status&&"string"==typeof error.statusText&&"boolean"==typeof error.internal&&"data"in error}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},"./node_modules/react-router-dom/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{VK:function(){return BrowserRouter},rU:function(){return Link}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];new Map;const startTransitionImpl=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition;function BrowserRouter(_ref4){let{basename:basename,children:children,future:future,window:window}=_ref4,historyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();null==historyRef.current&&(historyRef.current=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.lX)({window:window,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react__WEBPACK_IMPORTED_MODULE_0__.useState({action:history.action,location:history.location}),{v7_startTransition:v7_startTransition}=future||{},setState=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState=>{v7_startTransition&&startTransitionImpl?startTransitionImpl((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl,v7_startTransition]);return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.F0,{basename:basename,children:children,location:state.location,navigationType:state.action,navigator:history})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function LinkWithRef(_ref7,ref){let absoluteHref,{onClick:onClick,relative:relative,reloadDocument:reloadDocument,replace:replace,state:state,target:target,to:to,preventScrollReset:preventScrollReset,unstable_viewTransition:unstable_viewTransition}=_ref7,rest=_objectWithoutPropertiesLoose(_ref7,_excluded),{basename:basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.Us),isExternal=!1;if("string"==typeof to&&ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zn)(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){}let href=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.oQ)(to,{relative:relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target:target,replace:replaceProp,state:state,preventScrollReset:preventScrollReset,relative:relative,unstable_viewTransition:unstable_viewTransition}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.s0)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.TH)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_2__.WU)(to,{relative:relative});return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Ep)(location)===(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Ep)(path);navigate(to,{replace:replace,state:state,preventScrollReset:preventScrollReset,relative:relative,unstable_viewTransition:unstable_viewTransition})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative,unstable_viewTransition])}(to,{replace:replace,state:state,target:target,preventScrollReset:preventScrollReset,relative:relative,unstable_viewTransition:unstable_viewTransition});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref:ref,target:target}))}));var DataRouterHook,DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmit="useSubmit",DataRouterHook.UseSubmitFetcher="useSubmitFetcher",DataRouterHook.UseFetcher="useFetcher",DataRouterHook.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetcher="useFetcher",DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(DataRouterStateHook||(DataRouterStateHook={}))},"./node_modules/react-router/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{AW:function(){return Route},F0:function(){return Router},TH:function(){return useLocation},UO:function(){return useParams},Us:function(){return NavigationContext},WU:function(){return useResolvedPath},Z5:function(){return Routes},j3:function(){return Outlet},oQ:function(){return useHref},s0:function(){return useNavigate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const DataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const DataRouterStateContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const NavigationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const LocationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const RouteContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({outlet:null,matches:[],isDataRoute:!1});const RouteErrorContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useHref(to,_temp){let{relative:relative}=void 0===_temp?{}:_temp;useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let{basename:basename,navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{hash:hash,pathname:pathname,search:search}=useResolvedPath(to,{relative:relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,pathname])),navigator.createHref({pathname:joinedPathname,search:search,hash:hash})}function useInRouterContext(){return null!=react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext)}function useLocation(){return useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location}function useIsomorphicLayoutEffect(cb){react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb)}function useNavigate(){let{isDataRoute:isDataRoute}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);return isDataRoute?function useNavigateStable(){let{router:router}=useDataRouterContext(DataRouterHook.UseNavigateStable),id=useCurrentRouteId(DataRouterStateHook.UseNavigateStable),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){void 0===options&&(options={}),activeRef.current&&("number"==typeof to?router.navigate(to):router.navigate(to,_extends({fromRouteId:id},options)))}),[router,id])}():function useNavigateUnstable(){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let dataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext),{basename:basename,navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase))),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);null==dataRouterContext&&"/"!==basename&&(path.pathname="/"===path.pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname,dataRouterContext])}()}const OutletContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useParams(){let{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),routeMatch=matches[matches.length-1];return routeMatch?routeMatch.params:{}}function useResolvedPath(to,_temp2){let{relative:relative}=void 0===_temp2?{}:_temp2,{matches:matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase)));return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}function useRoutesImpl(routes,locationArg,dataRouterState){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let{navigator:navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches:parentMatches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),routeMatch=parentMatches[parentMatches.length-1],parentParams=routeMatch?routeMatch.params:{},parentPathnameBase=(routeMatch&&routeMatch.pathname,routeMatch?routeMatch.pathnameBase:"/");routeMatch&&routeMatch.route;let location,locationFromContext=useLocation();if(locationArg){var _parsedLocationArg$pa;let parsedLocationArg="string"==typeof locationArg?(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.cP)(locationArg):locationArg;"/"===parentPathnameBase||(null==(_parsedLocationArg$pa=parsedLocationArg.pathname)?void 0:_parsedLocationArg$pa.startsWith(parentPathnameBase))||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),location=parsedLocationArg}else location=locationFromContext;let pathname=location.pathname||"/",remainingPathname="/"===parentPathnameBase?pathname:pathname.slice(parentPathnameBase.length)||"/",matches=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.fp)(routes,{pathname:remainingPathname});let renderedMatches=_renderMatches(matches&&matches.map((match=>Object.assign({},match,{params:Object.assign({},parentParams,match.params),pathname:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([parentPathnameBase,navigator.encodeLocation?navigator.encodeLocation(match.pathname).pathname:match.pathname]),pathnameBase:"/"===match.pathnameBase?parentPathnameBase:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([parentPathnameBase,navigator.encodeLocation?navigator.encodeLocation(match.pathnameBase).pathname:match.pathnameBase])}))),parentMatches,dataRouterState);return locationArg&&renderedMatches?react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{value:{location:_extends({pathname:"/",search:"",hash:"",state:null,key:"default"},location),navigationType:_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.aU.Pop}},renderedMatches):renderedMatches}function DefaultErrorComponent(){let error=function useRouteError(){var _state$errors;let error=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext),state=useDataRouterState(DataRouterStateHook.UseRouteError),routeId=useCurrentRouteId(DataRouterStateHook.UseRouteError);if(error)return error;return null==(_state$errors=state.errors)?void 0:_state$errors[routeId]}(),message=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.WK)(error)?error.status+" "+error.statusText:error instanceof Error?error.message:JSON.stringify(error),stack=error instanceof Error?error.stack:null,preStyles={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Unexpected Application Error!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{style:{fontStyle:"italic"}},message),stack?react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:preStyles},stack):null,null)}const defaultErrorElement=react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent,null);class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={location:props.location,revalidation:props.revalidation,error:props.error}}static getDerivedStateFromError(error){return{error:error}}static getDerivedStateFromProps(props,state){return state.location!==props.location||"idle"!==state.revalidation&&"idle"===props.revalidation?{error:props.error,location:props.location,revalidation:props.revalidation}:{error:props.error||state.error,location:state.location,revalidation:props.revalidation||state.revalidation}}componentDidCatch(error,errorInfo){console.error("React Router caught the following error during render",error,errorInfo)}render(){return this.state.error?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider,{value:this.props.routeContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RenderedRoute(_ref){let{routeContext:routeContext,match:match,children:children}=_ref,dataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);return dataRouterContext&&dataRouterContext.static&&dataRouterContext.staticContext&&(match.route.errorElement||match.route.ErrorBoundary)&&(dataRouterContext.staticContext._deepestRenderedBoundaryId=match.route.id),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider,{value:routeContext},children)}function _renderMatches(matches,parentMatches,dataRouterState){var _dataRouterState2;if(void 0===parentMatches&&(parentMatches=[]),void 0===dataRouterState&&(dataRouterState=null),null==matches){var _dataRouterState;if(null==(_dataRouterState=dataRouterState)||!_dataRouterState.errors)return null;matches=dataRouterState.matches}let renderedMatches=matches,errors=null==(_dataRouterState2=dataRouterState)?void 0:_dataRouterState2.errors;if(null!=errors){let errorIndex=renderedMatches.findIndex((m=>m.route.id&&(null==errors?void 0:errors[m.route.id])));errorIndex>=0||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),renderedMatches=renderedMatches.slice(0,Math.min(renderedMatches.length,errorIndex+1))}return renderedMatches.reduceRight(((outlet,match,index)=>{let error=match.route.id?null==errors?void 0:errors[match.route.id]:null,errorElement=null;dataRouterState&&(errorElement=match.route.errorElement||defaultErrorElement);let matches=parentMatches.concat(renderedMatches.slice(0,index+1)),getChildren=()=>{let children;return children=error?errorElement:match.route.Component?react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component,null):match.route.element?match.route.element:outlet,react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute,{match:match,routeContext:{outlet:outlet,matches:matches,isDataRoute:null!=dataRouterState},children:children})};return dataRouterState&&(match.route.ErrorBoundary||match.route.errorElement||0===index)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary,{location:dataRouterState.location,revalidation:dataRouterState.revalidation,component:errorElement,error:error,children:getChildren(),routeContext:{outlet:null,matches:matches,isDataRoute:!0}}):getChildren()}),null)}var DataRouterHook=function(DataRouterHook){return DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate",DataRouterHook}(DataRouterHook||{}),DataRouterStateHook=function(DataRouterStateHook){return DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId",DataRouterStateHook}(DataRouterStateHook||{});function useDataRouterContext(hookName){let ctx=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);return ctx||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),ctx}function useDataRouterState(hookName){let state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);return state||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),state}function useCurrentRouteId(hookName){let route=function useRouteContext(hookName){let route=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);return route||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),route}(),thisRoute=route.matches[route.matches.length-1];return thisRoute.route.id||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),thisRoute.route.id}(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition;function Outlet(props){return function useOutlet(context){let outlet=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;return outlet?react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider,{value:context},outlet):outlet}(props.context)}function Route(_props){(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1)}function Router(_ref5){let{basename:basenameProp="/",children:children=null,location:locationProp,navigationType:navigationType=_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.aU.Pop,navigator:navigator,static:staticProp=!1}=_ref5;useInRouterContext()&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({basename:basename,navigator:navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.cP)(locationProp));let{pathname:pathname="/",search:search="",hash:hash="",state:state=null,key:key="default"}=locationProp,locationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{let trailingPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zn)(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search:search,hash:hash,state:state,key:key},navigationType:navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider,{value:navigationContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{children:children,value:locationContext}))}function Routes(_ref6){let{children:children,location:location}=_ref6;return function useRoutes(routes,locationArg){return useRoutesImpl(routes,locationArg)}(createRoutesFromChildren(children),location)}new Promise((()=>{}));react__WEBPACK_IMPORTED_MODULE_0__.Component;function createRoutesFromChildren(children,parentPath){void 0===parentPath&&(parentPath=[]);let routes=[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,((element,index)=>{if(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element))return;let treePath=[...parentPath,index];if(element.type===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)return void routes.push.apply(routes,createRoutesFromChildren(element.props.children,treePath));element.type!==Route&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1),element.props.index&&element.props.children&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.J0)(!1);let route={id:element.props.id||treePath.join("-"),caseSensitive:element.props.caseSensitive,element:element.props.element,Component:element.props.Component,index:element.props.index,path:element.props.path,loader:element.props.loader,action:element.props.action,errorElement:element.props.errorElement,ErrorBoundary:element.props.ErrorBoundary,hasErrorBoundary:null!=element.props.ErrorBoundary||null!=element.props.errorElement,shouldRevalidate:element.props.shouldRevalidate,handle:element.props.handle,lazy:element.props.lazy};element.props.children&&(route.children=createRoutesFromChildren(element.props.children,treePath)),routes.push(route)})),routes}}}]);