/*! For license information please see common-InfiniteScrollLoader-InfiniteScrollLoader-stories.f930b430.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_shopby_react_components=self.webpackChunk_shopby_react_components||[]).push([[5343],{"./common/InfiniteScrollLoader/InfiniteScrollLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InfiniteScrollLoader_stories});__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("../../node_modules/react/index.js"),debounce=__webpack_require__("../../node_modules/lodash-es/debounce.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DEFAULT_OPTION={rootMargin:"1px",threshold:1},InfiniteScrollLoader=function InfiniteScrollLoader(_ref){var rootRef=_ref.rootRef,onIntersect=_ref.onIntersect,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$option=_ref.option,option=void 0===_ref$option?DEFAULT_OPTION:_ref$option,_ref$debounceTime=_ref.debounceTime,debounceTime=void 0===_ref$debounceTime?200:_ref$debounceTime,targetRef=(0,react.useRef)(null),debounceOnIntersect=onIntersect?(0,debounce.Z)((function(){null==onIntersect||onIntersect()}),debounceTime):null,observerCallback=(0,react.useCallback)((function(_ref2){_slicedToArray(_ref2,1)[0].isIntersecting&&!disabled&&(null==debounceOnIntersect||debounceOnIntersect())}),[onIntersect,disabled]);return(0,react.useEffect)((function(){var observer=new IntersectionObserver(observerCallback,Object.assign({},option,{root:null==rootRef?void 0:rootRef.current}));return observer.observe(targetRef.current),function(){return observer.disconnect()}}),[observerCallback,rootRef]),(0,jsx_runtime.jsx)("div",{ref:targetRef,className:"infinite-scroll-loader"})};InfiniteScrollLoader.displayName="InfiniteScrollLoader";const InfiniteScrollLoader_InfiniteScrollLoader=InfiniteScrollLoader;try{InfiniteScrollLoader.displayName="InfiniteScrollLoader",InfiniteScrollLoader.__docgenInfo={description:"",displayName:"InfiniteScrollLoader",props:{rootRef:{defaultValue:null,description:"",name:"rootRef",required:!0,type:{name:"RefObject<RootElement>"}},onIntersect:{defaultValue:null,description:"",name:"onIntersect",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},option:{defaultValue:{value:"{\n  rootMargin: '1px',\n  threshold: 1.0,\n}"},description:"",name:"option",required:!1,type:{name:"InfiniteScrollLoaderOption"}},debounceTime:{defaultValue:{value:"200"},description:"",name:"debounceTime",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["common/InfiniteScrollLoader/InfiniteScrollLoader.tsx#InfiniteScrollLoader"]={docgenInfo:InfiniteScrollLoader.__docgenInfo,name:"InfiniteScrollLoader",path:"common/InfiniteScrollLoader/InfiniteScrollLoader.tsx#InfiniteScrollLoader"})}catch(__react_docgen_typescript_loader_error){}function InfiniteScrollLoader_stories_slicedToArray(arr,i){return function InfiniteScrollLoader_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function InfiniteScrollLoader_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function InfiniteScrollLoader_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return InfiniteScrollLoader_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InfiniteScrollLoader_stories_arrayLikeToArray(o,minLen)}(arr,i)||function InfiniteScrollLoader_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function InfiniteScrollLoader_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const InfiniteScrollLoader_stories={title:"common/InfiniteScrollLoader",component:InfiniteScrollLoader_InfiniteScrollLoader};var TestItem=function TestItem(_ref){var id=_ref.id;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{backgroundColor:"skyblue",height:"100px",width:"100%",border:"1px solid white",display:"flex",justifyContent:"center",alignItems:"center"},children:[id," 번째 테스트 요소입니다. ",(0,jsx_runtime.jsx)("br",{})]})})},Default=function Default(){var wrapperRef=(0,react.useRef)(null),_useState2=InfiniteScrollLoader_stories_slicedToArray((0,react.useState)(6),2),amount=_useState2[0],setAmount=_useState2[1],_useState4=InfiniteScrollLoader_stories_slicedToArray((0,react.useState)(!1),2),disabled=_useState4[0],setDisabled=_useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h1",{children:"6개씩 최대 24개를 노출하는 무한 스크롤 테스트입니다. "}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)("div",{ref:wrapperRef,style:{height:"500px",overflowY:"scroll"},children:[Array(amount).fill(0).map((function(_,idx){return(0,jsx_runtime.jsx)(TestItem,{id:idx+1},idx)})),(0,jsx_runtime.jsx)(InfiniteScrollLoader_InfiniteScrollLoader,{rootRef:wrapperRef,onIntersect:function handleIntersect(){setDisabled(!0),24!==amount&&(setAmount((function(prev){return prev+6})),setDisabled(!1))},disabled})]})]})};Default.parameters=Object.assign({storySource:{source:"() => {\n  const wrapperRef = useRef<HTMLDivElement>(null);\n  const [amount, setAmount] = useState(6);\n  const [disabled, setDisabled] = useState(false);\n\n  const handleIntersect = () => {\n    setDisabled(true);\n\n    if (amount === 24) return;\n\n    setAmount((prev) => prev + 6);\n    setDisabled(false);\n  };\n\n  return (\n    <>\n      <h1>6개씩 최대 24개를 노출하는 무한 스크롤 테스트입니다. </h1>\n      <br />\n      <div ref={wrapperRef} style={{ height: '500px', overflowY: 'scroll' }}>\n        {Array(amount)\n          .fill(0)\n          .map((_, idx) => (\n            <TestItem key={idx} id={idx + 1} />\n          ))}\n        <InfiniteScrollLoader rootRef={wrapperRef} onIntersect={handleIntersect} disabled={disabled} />\n      </div>\n    </>\n  );\n}"}},Default.parameters);var __namedExportsOrder=["Default"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../node_modules/lodash-es/_Symbol.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/lodash-es/_root.js").Z.Symbol},"../../node_modules/lodash-es/_baseGetTag.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_baseGetTag});var _Symbol=__webpack_require__("../../node_modules/lodash-es/_Symbol.js"),objectProto=Object.prototype,_getRawTag_hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol.Z?_Symbol.Z.toStringTag:void 0;const _getRawTag=function getRawTag(value){var isOwn=_getRawTag_hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result};var _objectToString_nativeObjectToString=Object.prototype.toString;const _objectToString=function objectToString(value){return _objectToString_nativeObjectToString.call(value)};var nullTag="[object Null]",undefinedTag="[object Undefined]",_baseGetTag_symToStringTag=_Symbol.Z?_Symbol.Z.toStringTag:void 0;const _baseGetTag=function baseGetTag(value){return null==value?void 0===value?undefinedTag:nullTag:_baseGetTag_symToStringTag&&_baseGetTag_symToStringTag in Object(value)?_getRawTag(value):_objectToString(value)}},"../../node_modules/lodash-es/_freeGlobal.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="object"==typeof global&&global&&global.Object===Object&&global},"../../node_modules/lodash-es/_root.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash-es/_freeGlobal.js"),freeSelf="object"==typeof self&&self&&self.Object===Object&&self;const __WEBPACK_DEFAULT_EXPORT__=_freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__.Z||freeSelf||Function("return this")()},"../../node_modules/lodash-es/debounce.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>lodash_es_debounce});var isObject=__webpack_require__("../../node_modules/lodash-es/isObject.js"),_root=__webpack_require__("../../node_modules/lodash-es/_root.js");const lodash_es_now=function(){return _root.Z.Date.now()};var reWhitespace=/\s/;const _trimmedEndIndex=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index};var reTrimStart=/^\s+/;const _baseTrim=function baseTrim(string){return string?string.slice(0,_trimmedEndIndex(string)+1).replace(reTrimStart,""):string};var isSymbol=__webpack_require__("../../node_modules/lodash-es/isSymbol.js"),NAN=NaN,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;const lodash_es_toNumber=function toNumber(value){if("number"==typeof value)return value;if((0,isSymbol.Z)(value))return NAN;if((0,isObject.Z)(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=(0,isObject.Z)(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=_baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value};var FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max,nativeMin=Math.min;const lodash_es_debounce=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError(FUNC_ERROR_TEXT);function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=lodash_es_now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=lodash_es_now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=lodash_es_toNumber(wait)||0,(0,isObject.Z)(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(lodash_es_toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(lodash_es_now())},debounced}},"../../node_modules/lodash-es/isObject.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function isObject(value){var type=typeof value;return null!=value&&("object"==type||"function"==type)}},"../../node_modules/lodash-es/isObjectLike.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function isObjectLike(value){return null!=value&&"object"==typeof value}},"../../node_modules/lodash-es/isSymbol.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash-es/_baseGetTag.js"),_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash-es/isObjectLike.js"),symbolTag="[object Symbol]";const __WEBPACK_DEFAULT_EXPORT__=function isSymbol(value){return"symbol"==typeof value||(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value)&&(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__.Z)(value)==symbolTag}}}]);