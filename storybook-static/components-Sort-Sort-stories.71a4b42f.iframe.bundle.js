"use strict";(self.webpackChunkreact_pizza_v2=self.webpackChunkreact_pizza_v2||[]).push([[498],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Sort/Sort.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Sort/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={component:_index__WEBPACK_IMPORTED_MODULE_0__.P,decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})}]};__webpack_exports__.default=meta;var Primary={};Primary.parameters=(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Primary.parameters),{},{docs:(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/components/Sort/Sort.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return sortList}});var E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/slices/filterSlice.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),sortList=[{name:"популярности (DESC)",sortProperty:"rating"},{name:"популярности (ASC)",sortProperty:"-rating"},{name:"цене (DESC)",sortProperty:"price"},{name:"цене (ASC)",sortProperty:"-price"},{name:"алфавиту (DESC)",sortProperty:"title"},{name:"алфавиту (ASC)",sortProperty:"-title"}];__webpack_exports__.Z=function Sort(){var dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.I0)(),sort=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.sI),sortRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var handleClickOutside=function handleClickOutside(event){sortRef.current&&!event.composedPath().includes(sortRef.current)&&setOpen(!1)};return document.body.addEventListener("click",handleClickOutside),function(){return document.body.removeEventListener("click",handleClickOutside)}}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{ref:sortRef,"data-testid":"sort-element",className:"sort",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"sort__label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b",{children:"Сортировка по:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{onClick:function onClick(){return setOpen(!open)},children:sort.name})]}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"sort__popup",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{children:sortList.map((function(obj,i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{onClick:function onClick(){return function onClickListItem(obj){dispatch((0,_redux_slices_filterSlice__WEBPACK_IMPORTED_MODULE_2__.HD)(obj)),setOpen(!1)}(obj)},className:sort.sortProperty===obj.sortProperty?"active":"",children:obj.name},i)}))})})]})}},"./src/components/Sort/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return _Sort__WEBPACK_IMPORTED_MODULE_0__.Z}});var _Sort__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Sort/Sort.tsx")}}]);