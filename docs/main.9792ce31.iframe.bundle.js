(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{541:function(module,exports,__webpack_require__){__webpack_require__(542),__webpack_require__(765),__webpack_require__(766),__webpack_require__(975),__webpack_require__(976),__webpack_require__(981),__webpack_require__(980),__webpack_require__(977),__webpack_require__(982),__webpack_require__(978),__webpack_require__(979),__webpack_require__(983),module.exports=__webpack_require__(969)},590:function(module,exports){},766:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(405)},969:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(405).configure)([__webpack_require__(970),__webpack_require__(971)],module,!1)}).call(this,__webpack_require__(229)(module))},970:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=970},971:function(module,exports,__webpack_require__){var map={"./test.stories.jsx":972};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=971},972:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ColorInfo",(function(){return ColorInfo}));__webpack_require__(23),__webpack_require__(0);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(189),colors=__webpack_require__(974),ColorInfo=function ColorInfo(_ref){var color=_ref.color;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h4",{children:[color," - ",colors[color]]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{backgroundColor:colors[color],height:150,width:200},children:" "})]})};ColorInfo.displayName="ColorInfo",ColorInfo.args={color:colors.activeBlue},__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nconst colors = require('./colors');\n\nexport const ColorInfo = ({ color }) => {\n  return (\n    <div>\n      <h4>{color} - {colors[color]}</h4>\n      <div\n        style={{\n          backgroundColor: colors[color],\n          height: 150,\n          width: 200\n        }}\n      >&nbsp;</div>\n\n    </div>\n  );\n};\nColorInfo.args = {\n  color: colors.activeBlue\n};\n\nexport default {\n  argTypes: {\n    color: {\n      control: { type: 'select' },\n      options: Object.keys(colors)\n    }\n  },\n  component: ColorInfo,\n  title: 'Theme/Colors'\n};\n",locationsMap:{"color-info":{startLoc:{col:25,line:5},endLoc:{col:1,line:19},startBody:{col:25,line:5},endBody:{col:1,line:19}}}}},argTypes:{color:{control:{type:"select"},options:Object.keys(colors)}},component:ColorInfo,title:"Theme/Colors"},ColorInfo.__docgenInfo={description:"",methods:[],displayName:"ColorInfo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/test.stories.jsx"]={name:"ColorInfo",docgenInfo:ColorInfo.__docgenInfo,path:"src/test.stories.jsx"})},974:function(module,exports){module.exports={darkBlue:"#1243be",activeBlue:"#1f5cf6",lightBlue:"#729dff",lighterBlue:"#d8e2fd",deepBlue:"#032147",deepBlueHeavy:"#02152d",deepBlueLight:"#0f2c50",primaryText:"#303132",secondaryText:"#5c5d60",disabledText:"#9d9ea1",white:"#ffffff",grey10:"#f8f9fa",grey20:"#f1f2f3",grey30:"#dddee1",grey40:"#C4C5C8",error:"#da1e28",warning:"#f99b58",success:"#24a148",info:"#4215C5",errorBG:"#FCE9EA",warningBG:"#feede2",successBG:"#e4f3e9",infoBG:"#ede8fa",purple:"#5d39b9",blackOverlay:"rgba(30, 31, 32, 0.7)",customPurpleHeart:"#5d39b9",customViridian:"#408A87",customFrenchRose:"#F64C72",customAquamarineBlue:"#6be0e0",customElectricViolet:"#db26fc",customSaffron:"#F7C433",customRouge:"#a04499",customSkyBlue:"#76C9F0",customFountainBlue:"#5EC1A5",customShakeSpeare:"#438fcd",customSandyBrown:"#f58a65",customAmaranth:"#ee3968",customMinsk:"#362B81",customAmethyst:"#a255cd",customBlueViolet:"#4d4cac",customColdPurple:"#9698d6",customRoyalBlue:"#606fe3",customGeraldine:"#FD8893"}}},[[541,2,3]]]);