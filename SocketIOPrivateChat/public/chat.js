/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./FrontProjects/Chat/src/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./FrontProjects/Chat/src/Context.js":
/*!*******************************************!*\
  !*** ./FrontProjects/Chat/src/Context.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proxy_SocketConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy/SocketConnector */ \"./FrontProjects/Chat/src/proxy/SocketConnector.js\");\n\n\nclass Context {\n\n\n    constructor() {\n        this._socketConnector = new _proxy_SocketConnector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n\n    get socketConnector() {\n        return this._socketConnector;\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Context.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/Events.js":
/*!******************************************!*\
  !*** ./FrontProjects/Chat/src/Events.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Events = {\n    LIST_CLIENTS: \"listClients\",\n    MSG: \"msg\"\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Events.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/Main.js":
/*!****************************************!*\
  !*** ./FrontProjects/Chat/src/Main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainApp */ \"./FrontProjects/Chat/src/controllers/MainApp.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ \"./FrontProjects/Chat/src/Context.js\");\n\n\n\nlet context = new _Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nlet mainApp = new _controllers_MainApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nmainApp.$mount($(\"<div></div>\").appendTo(document.body)[0]);\nmainApp.setContext(context);\n\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Main.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/controllers/ClientList.js":
/*!**********************************************************!*\
  !*** ./FrontProjects/Chat/src/controllers/ClientList.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ClientList.html */ \"./FrontProjects/Chat/src/views/ClientList.html\");\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Events */ \"./FrontProjects/Chat/src/Events.js\");\n\n\n\nconst ClientList = Vue.component(\"client-list\", {\n    template: _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n\n    data() {\n        return {\n            clients: new Map(),\n            currentSocketId: \"\",\n        }\n    },\n\n    methods: {\n        setContext(context) {\n            this._context = context;\n            $(context.socketConnector).on(_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS, (event, data) => {\n                this.currentSocketId = data.currentSocketId;\n\n                let tmpMap = new Map();\n                this.clients.forEach((v, k) => {\n                    tmpMap.set(k, v);\n                });\n\n                this.clients.clear();\n\n                data.clients.forEach(socketId => {\n                    if (tmpMap.has(socketId)) {\n                        this.clients.set(socketId, tmpMap.get(socketId));\n                    } else {\n                        this.clients.set(socketId, {socketId: socketId, chatLog: []});\n                    }\n                });\n\n                this.$forceUpdate();\n            });\n\n            $(context.socketConnector).on(_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MSG, (e, data) => {\n                let targetSocketId;\n                if (data.sender == this.currentSocketId) {\n                    targetSocketId = data.receiver;\n                } else if (data.receiver == this.currentSocketId) {\n                    targetSocketId = data.sender;\n                }\n                if (targetSocketId) {\n                    let target = this.clients.get(targetSocketId);\n                    if (target) {\n                        target.chatLog.push(data.msg);\n                    }\n                }\n\n            });\n        },\n\n        targetSocketIDClicked(e) {\n            let selectedSocketId = $(e.target).data(\"socket_id\");\n            if (selectedSocketId != this._context.socketConnector.socketId) {\n                this.$emit(\"selected_target\", this.clients.get(selectedSocketId));\n            } else {\n                alert(\"你不能跟自己聊天\");\n            }\n        },\n\n        getSocketIdLabel(socketId) {\n            if (socketId != this.currentSocketId) {\n                return socketId;\n            } else {\n                return socketId + \"[自己]\"\n            }\n        }\n    }\n});\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/controllers/ClientList.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/controllers/MainApp.js":
/*!*******************************************************!*\
  !*** ./FrontProjects/Chat/src/controllers/MainApp.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ClientList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientList */ \"./FrontProjects/Chat/src/controllers/ClientList.js\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/MainApp.html */ \"./FrontProjects/Chat/src/views/MainApp.html\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_MainApp_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Events */ \"./FrontProjects/Chat/src/Events.js\");\n\n\n\n\nconst MainApp = Vue.component(\"main-app\", {\n    template: _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1___default.a,\n\n    data() {\n        return {\n            targetSocketId: \"\",\n            output: []\n        }\n    },\n\n\n    computed: {\n        outputMsg() {\n            return this.output.join(\"\\n\");\n        }\n    },\n\n    methods: {\n\n        setContext(context) {\n            this._context = context;\n\n            this.$refs.client_list.setContext(context);\n        },\n\n        selectedTargetHandler(target) {\n            this.targetSocketId = target.socketId;\n            this.output = target.chatLog;\n        },\n\n        submitHandler(e) {\n            e.preventDefault();\n\n            if (this.targetSocketId) {\n                this._context.socketConnector.sendMsg(e.target.msg.value, this.targetSocketId);\n                e.target.msg.value = \"\";\n            }\n        }\n    },\n\n    watch: {\n        output() {\n            this.$nextTick(function () {\n                this.$refs.output.scrollTop = this.$refs.output.scrollHeight;\n            });\n        }\n    }\n});\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainApp);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/controllers/MainApp.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/proxy/SocketConnector.js":
/*!*********************************************************!*\
  !*** ./FrontProjects/Chat/src/proxy/SocketConnector.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Events */ \"./FrontProjects/Chat/src/Events.js\");\n\n\nclass SocketConnector {\n\n\n    constructor() {\n        this._socket = io();\n        this._socket.on(\"listClients\", clients => {\n            $(this).trigger(_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LIST_CLIENTS, {clients: clients, currentSocketId: this._socket.id});\n        });\n        this._socket.on(\"msg\", data => {\n            $(this).trigger(_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MSG, data);\n        });\n    }\n\n    get socketId() {\n        return this._socket.id;\n    }\n\n\n    sendMsg(msg, targetSocketId) {\n        this._socket.emit(\"msg\", {receiver: targetSocketId, sender: this._socket.id, msg: msg});\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketConnector);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/proxy/SocketConnector.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/views/ClientList.html":
/*!******************************************************!*\
  !*** ./FrontProjects/Chat/src/views/ClientList.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"card\\\" style=\\\"width: 260px;height: 100%;\\\">\\n    <div class=\\\"card-header\\\">\\n        客户端列表\\n    </div>\\n    <div>\\n        <button @click=\\\"targetSocketIDClicked\\\" style=\\\"width: 100%;\\\" class=\\\"btn btn-outline-dark btn-sm\\\"\\n                v-for=\\\"k in clients.keys()\\\" :data-socket_id=\\\"k\\\">\\n            {{getSocketIdLabel(k)}}\\n        </button>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/views/ClientList.html?");

/***/ }),

/***/ "./FrontProjects/Chat/src/views/MainApp.html":
/*!***************************************************!*\
  !*** ./FrontProjects/Chat/src/views/MainApp.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=\\\"display: flex;flex-direction: row;\\\">\\n    <client-list ref=\\\"client_list\\\" @selected_target=\\\"selectedTargetHandler\\\"></client-list>\\n    <div class=\\\"card\\\" style=\\\"margin-left: 10px;flex: 1;\\\">\\n        <div class=\\\"card-header\\\">\\n            <span v-if=\\\"targetSocketId\\\">\\n            {{targetSocketId}}\\n            </span>\\n            <span v-else>\\n                No target socket id\\n            </span>\\n        </div>\\n        <div class=\\\"card-body\\\">\\n            <textarea style=\\\"width: 100%;height: 200px;resize: none;\\\" ref=\\\"output\\\" v-model=\\\"outputMsg\\\"\\n                      class=\\\"form-control\\\" readonly></textarea>\\n            <form style=\\\"margin-top: 10px;display: flex;flex-direction: row;\\\" @submit=\\\"submitHandler\\\">\\n                <input style=\\\"flex: 1;\\\" type=\\\"text\\\" name=\\\"msg\\\" required class=\\\"form-control\\\">\\n                <input class=\\\"btn btn-primary\\\" style=\\\"margin-left: 10px\\\" type=\\\"submit\\\" value=\\\"发送\\\">\\n            </form>\\n        </div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/views/MainApp.html?");

/***/ })

/******/ });