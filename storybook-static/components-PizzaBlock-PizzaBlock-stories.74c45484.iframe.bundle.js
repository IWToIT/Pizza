"use strict";(self.webpackChunkreact_pizza_v2=self.webpackChunkreact_pizza_v2||[]).push([[691],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/PizzaBlock/PizzaBlock.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={component:__webpack_require__("./src/components/PizzaBlock/index.tsx").q,args:{id:"1",title:"Margherita",price:10,imageUrl:"https://example.com/pizza.jpg",types:[0,1],sizes:[30,40]}};__webpack_exports__.default=meta;var Primary={};Primary.parameters=(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Primary.parameters),{},{docs:(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/components/PizzaBlock/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return PizzaBlock}});var E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/slices/cartSlice.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),typeNames=["тонкое","традиционное"],PizzaBlock=function PizzaBlock(_ref){var id=_ref.id,title=_ref.title,price=_ref.price,imageUrl=_ref.imageUrl,sizes=_ref.sizes,types=_ref.types,dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.I0)(),cartItem=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.BC)(id)),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState2=(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState,2),activeType=_React$useState2[0],setActiveType=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),_React$useState4=(0,E_dev_how_to_learn_react_pizza2_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useState3,2),activeSize=_React$useState4[0],setActiveSize=_React$useState4[1],addedCount=cartItem?cartItem.count:0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pizza-block-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"pizza-block",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{className:"pizza-block__image",src:imageUrl,alt:"Pizza"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4",{className:"pizza-block__title",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"pizza-block__selector",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{children:types.map((function(typeId){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{onClick:function onClick(){return setActiveType(typeId)},className:activeType===typeId?"active":"",children:typeNames[typeId]},typeId)}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{children:sizes.map((function(size,i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li",{onClick:function onClick(){return setActiveSize(i)},className:activeSize===i?"active":"",children:[size," см."]},size)}))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"pizza-block__bottom",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"pizza-block__price",children:["от ",price," ₽"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{onClick:function onClickAdd(){var item={id:id,title:title,price:price,imageUrl:imageUrl,type:typeNames[activeType],size:sizes[activeSize]};dispatch((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.jX)(item))},className:"button button--outline button--add",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Добавить"}),addedCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i",{children:addedCount})]})]})]})})};try{PizzaBlock.displayName="PizzaBlock",PizzaBlock.__docgenInfo={description:"",displayName:"PizzaBlock",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},types:{defaultValue:null,description:"",name:"types",required:!0,type:{name:"number[]"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PizzaBlock/index.tsx#PizzaBlock"]={docgenInfo:PizzaBlock.__docgenInfo,name:"PizzaBlock",path:"src/components/PizzaBlock/index.tsx#PizzaBlock"})}catch(__react_docgen_typescript_loader_error){}}}]);