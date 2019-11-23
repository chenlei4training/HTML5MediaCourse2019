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

/***/ "./FrontProjects/Chat/src/Config.js":
/*!******************************************!*\
  !*** ./FrontProjects/Chat/src/Config.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config = {\n    PC_INIT_CONFIG: {\n        iceServers: [\n            {urls: \"stun:stun.l.google.com:19302\"}\n        ]\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Config.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/Context.js":
/*!*******************************************!*\
  !*** ./FrontProjects/Chat/src/Context.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _net_SocketConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./net/SocketConnector */ \"./FrontProjects/Chat/src/net/SocketConnector.js\");\n/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/Events */ \"./FrontProjects/Chat/src/events/Events.js\");\n/* harmony import */ var _handlers_HandlerReceivedOffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/HandlerReceivedOffer */ \"./FrontProjects/Chat/src/handlers/HandlerReceivedOffer.js\");\n/* harmony import */ var _handlers_HandlerStartChatSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/HandlerStartChatSession */ \"./FrontProjects/Chat/src/handlers/HandlerStartChatSession.js\");\n/* harmony import */ var _handlers_HandlerReceivedAnswer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/HandlerReceivedAnswer */ \"./FrontProjects/Chat/src/handlers/HandlerReceivedAnswer.js\");\n/* harmony import */ var _handlers_HandlerReceivedOfferICE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/HandlerReceivedOfferICE */ \"./FrontProjects/Chat/src/handlers/HandlerReceivedOfferICE.js\");\n/* harmony import */ var _handlers_HandlerReceivedAnswerICE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/HandlerReceivedAnswerICE */ \"./FrontProjects/Chat/src/handlers/HandlerReceivedAnswerICE.js\");\n\n\n\n\n\n\n\n\nclass Context {\n\n\n    constructor() {\n        this._jqThis = $(this);\n        this._sharedData = new Map();\n        this._socketConnector = new _net_SocketConnector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n\n        this.addListeners();\n    }\n\n    setData(k, v) {\n        this._sharedData.set(k, v);\n    }\n\n    getData(k) {\n        return this._sharedData.get(k);\n    }\n\n\n    addListeners() {\n        let jqThis = $(this);\n\n        jqThis.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER, _handlers_HandlerReceivedOffer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        jqThis.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER_ICE, _handlers_HandlerReceivedOfferICE__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        jqThis.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER, _handlers_HandlerReceivedAnswer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n        jqThis.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER_ICE, _handlers_HandlerReceivedAnswerICE__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n        jqThis.on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_CHAT_SESSION, _handlers_HandlerStartChatSession__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    }\n\n    fire(type, data) {\n        console.info(\"Fire event:\" + type);\n        this._jqThis.trigger(type, [this, data]);\n    }\n\n\n    get socketConnector() {\n        return this._socketConnector;\n    }\n\n\n    get peerConnector() {\n        return this._peerConnector;\n    }\n}\n\nContext.KEY_OFFER_PEER_CONNECTION = \"offerPc\";\nContext.KEY_ANSWER_PEER_CONNECTION = \"answerPc\";\nContext.KEY_DATA_CHANNEL = \"dataChannel\";\nContext.KEY_LOCAL_MEDIA_STREAM = \"localMediaStream\";\nContext.KEY_REMOTE_MEDIA_STREAM = \"remoteMediaStream\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Context.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ClientList.html */ \"./FrontProjects/Chat/src/views/ClientList.html\");\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Events */ \"./FrontProjects/Chat/src/events/Events.js\");\n\n\n\nconst ClientList = Vue.component(\"client-list\", {\n    template: _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n\n    data() {\n        return {\n            clients: new Map(),\n            currentSocketId: \"\",\n        }\n    },\n\n    methods: {\n        setContext(context) {\n            this._context = context;\n            $(context).on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS, (event, context, data) => {\n                this.currentSocketId = data.currentSocketId;\n\n                let tmpMap = new Map();\n                this.clients.forEach((v, k) => {\n                    tmpMap.set(k, v);\n                });\n\n                this.clients.clear();\n\n                data.clients.forEach(socketId => {\n                    if (tmpMap.has(socketId)) {\n                        this.clients.set(socketId, tmpMap.get(socketId));\n                    } else {\n                        this.clients.set(socketId, {socketId: socketId, chatLog: []});\n                    }\n                });\n\n                this.$forceUpdate();\n            });\n\n            $(context.socketConnector).on(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MSG, (e, data) => {\n                let targetSocketId;\n                if (data.sender == this.currentSocketId) {\n                    targetSocketId = data.receiver;\n                } else if (data.receiver == this.currentSocketId) {\n                    targetSocketId = data.sender;\n                }\n                if (targetSocketId) {\n                    let target = this.clients.get(targetSocketId);\n                    if (target) {\n                        target.chatLog.push(data.msg);\n                    }\n                }\n\n            });\n        },\n\n        targetSocketIDClicked(e) {\n            let selectedSocketId = $(e.target).data(\"socket_id\");\n            if (selectedSocketId != this._context.socketConnector.socketId) {\n                // this.$emit(\"selected_target\", this.clients.get(selectedSocketId));\n                this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_CHAT_SESSION, selectedSocketId);\n            } else {\n                alert(\"你不能跟自己聊天\");\n            }\n        },\n\n        getSocketIdLabel(socketId) {\n            if (socketId != this.currentSocketId) {\n                return socketId;\n            } else {\n                return socketId + \"[自己]\"\n            }\n        }\n    }\n});\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/controllers/ClientList.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/controllers/MainApp.js":
/*!*******************************************************!*\
  !*** ./FrontProjects/Chat/src/controllers/MainApp.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ClientList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientList */ \"./FrontProjects/Chat/src/controllers/ClientList.js\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/MainApp.html */ \"./FrontProjects/Chat/src/views/MainApp.html\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_MainApp_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./FrontProjects/Chat/src/Context.js\");\n\n\n\n\nconst MainApp = Vue.component(\"main-app\", {\n    template: _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1___default.a,\n\n    data() {\n        return {\n            targetSocketId: \"\",\n            output: []\n        }\n    },\n\n    computed: {\n        outputMsg() {\n            return this.output.join(\"\\n\");\n        }\n    },\n\n    methods: {\n\n        async setContext(context) {\n            this._context = context;\n            this.$refs.client_list.setContext(context);\n\n            let media = await navigator.mediaDevices.getUserMedia({video: true, audio: false});\n            this.$refs.localPreview.srcObject = media;\n            context.setData(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_LOCAL_MEDIA_STREAM, media);\n\n            let remoteStream = new MediaStream();\n            context.setData(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_REMOTE_MEDIA_STREAM, remoteStream);\n            this.$refs.remotePreview.srcObject = remoteStream;\n        },\n\n        selectedTargetHandler(target) {\n            this.targetSocketId = target.socketId;\n\n            this._context.peerConnector.connectTarget(this.targetSocketId);\n        },\n\n        submitHandler(e) {\n            e.preventDefault();\n\n\n        }\n    },\n\n    watch: {\n        output() {\n            this.$nextTick(function () {\n                this.$refs.output.scrollTop = this.$refs.output.scrollHeight;\n            });\n        }\n    }\n});\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainApp);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/controllers/MainApp.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/events/Events.js":
/*!*************************************************!*\
  !*** ./FrontProjects/Chat/src/events/Events.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Events = {\n    LIST_CLIENTS: \"listClients\",\n    MSG: \"msg\",\n    RECEIVED_OFFER: \"receivedOffer\",\n    RECEIVED_OFFER_ICE: \"receivedOfferICE\",\n    RECEIVED_ANSWER: \"receivedAnswer\",\n    RECEIVED_ANSWER_ICE: \"receivedAnswerICE\",\n    START_CHAT_SESSION: \"startChatSession\"\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/events/Events.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/events/SocketEvents.js":
/*!*******************************************************!*\
  !*** ./FrontProjects/Chat/src/events/SocketEvents.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SocketEvents = {\n    OFFER: \"offer\",\n    ANSWER: \"answer\",\n    OFFER_ICE: \"offerIce\",\n    ANSWER_ICE: \"answerIce\",\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketEvents);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/events/SocketEvents.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/handlers/HandlerReceivedAnswer.js":
/*!******************************************************************!*\
  !*** ./FrontProjects/Chat/src/handlers/HandlerReceivedAnswer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context */ \"./FrontProjects/Chat/src/Context.js\");\n\n\n/**\n *\n * @param e\n * @param context {Context}\n * @param data\n * @returns {Promise<void>}\n * @constructor\n */\nasync function HandlerReceivedAnswer(e, context, data) {\n    context.getData(_Context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_OFFER_PEER_CONNECTION).setRemoteDescription(new RTCSessionDescription(data.answer));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedAnswer);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/handlers/HandlerReceivedAnswer.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/handlers/HandlerReceivedAnswerICE.js":
/*!*********************************************************************!*\
  !*** ./FrontProjects/Chat/src/handlers/HandlerReceivedAnswerICE.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context */ \"./FrontProjects/Chat/src/Context.js\");\n\n\n/**\n *\n * @param e\n * @param context {Context}\n * @param data\n * @returns {Promise<void>}\n * @constructor\n */\nasync function HandlerReceivedAnswerICE(e, context, data) {\n    /**\n     * @type {RTCPeerConnection}\n     */\n    let offerPc = context.getData(_Context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_OFFER_PEER_CONNECTION);\n    await offerPc.addIceCandidate(new RTCIceCandidate(data.ice));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedAnswerICE);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/handlers/HandlerReceivedAnswerICE.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/handlers/HandlerReceivedOffer.js":
/*!*****************************************************************!*\
  !*** ./FrontProjects/Chat/src/handlers/HandlerReceivedOffer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProjects/Chat/src/events/SocketEvents.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./FrontProjects/Chat/src/Context.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ \"./FrontProjects/Chat/src/Config.js\");\n\n\n\n\n/**\n *\n * @param e\n * @param context {Context}\n * @param data\n * @returns {Promise<void>}\n * @constructor\n */\nasync function HandlerReceivedOffer(e, context, data) {\n    console.log(data);\n\n    var answerPc = new RTCPeerConnection(_Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PC_INIT_CONFIG);\n    let localStream = context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_LOCAL_MEDIA_STREAM);\n    localStream.getTracks().forEach(t => {\n        answerPc.addTrack(t);\n    });\n    context.setData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_ANSWER_PEER_CONNECTION, answerPc);\n\n    /**\n     * @type {MediaStream}\n     */\n    let remoteStream = context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_REMOTE_MEDIA_STREAM);\n    answerPc.ontrack = e => {\n        remoteStream.addTrack(e.track);\n    };\n\n    answerPc.onicecandidate = e => {\n        if (e.candidate) {\n            context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANSWER_ICE, {receiver: data.sender, ice: e.candidate});\n        }\n    };\n\n    answerPc.ondatachannel = e => {\n        let dataChannel = e.channel;\n        dataChannel.onmessage = ev => {\n            console.log(ev);\n        };\n    };\n\n    await answerPc.setRemoteDescription(new RTCSessionDescription(data.offer));\n    var answer = await answerPc.createAnswer();\n    context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ANSWER, {answer: answer, receiver: data.sender});\n    await answerPc.setLocalDescription(new RTCSessionDescription(answer));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedOffer);\n\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/handlers/HandlerReceivedOffer.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/handlers/HandlerReceivedOfferICE.js":
/*!********************************************************************!*\
  !*** ./FrontProjects/Chat/src/handlers/HandlerReceivedOfferICE.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context */ \"./FrontProjects/Chat/src/Context.js\");\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProjects/Chat/src/events/SocketEvents.js\");\n\n/**\n *\n * @param e\n * @param context {Context}\n * @param data\n * @returns {Promise<void>}\n * @constructor\n */\n\n\nasync function HandlerReceivedOfferICE(e, context, data) {\n    console.log(data);\n\n    /**\n     * @type {RTCPeerConnection}\n     */\n    let answerPc = context.getData(_Context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_ANSWER_PEER_CONNECTION);\n    await answerPc.addIceCandidate(new RTCIceCandidate(data.ice));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerReceivedOfferICE);\n\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/handlers/HandlerReceivedOfferICE.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/handlers/HandlerStartChatSession.js":
/*!********************************************************************!*\
  !*** ./FrontProjects/Chat/src/handlers/HandlerStartChatSession.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProjects/Chat/src/events/SocketEvents.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ \"./FrontProjects/Chat/src/Context.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ \"./FrontProjects/Chat/src/Config.js\");\n\n\n\n\n/**\n *\n * @param e\n * @param context {Context}\n * @param data\n * @constructor\n */\nasync function HandlerStartChatSession(e, context, data) {\n    let offerPc = new RTCPeerConnection(_Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PC_INIT_CONFIG);\n    context.setData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_OFFER_PEER_CONNECTION, offerPc);\n\n\n    offerPc.onicecandidate = e => {\n        if (e.candidate) {\n            context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER_ICE, {receiver: data, ice: e.candidate});\n        }\n    };\n\n    let remoteStream = context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_REMOTE_MEDIA_STREAM);\n    offerPc.ontrack = e => {\n        remoteStream.addTrack(e.track);\n    };\n\n    /**\n     * @type {MediaStream}\n     */\n    let stream = context.getData(_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_LOCAL_MEDIA_STREAM);\n    stream.getTracks().forEach(t => {\n        offerPc.addTrack(t);\n    });\n\n    // let dataChannel = offerPc.createDataChannel(\"MessageChannel\");\n    // dataChannel.onopen = function (e) {\n    //     dataChannel.send(\"Hello RTC\");\n    // };\n    // context.setData(Context.KEY_DATA_CHANNEL, dataChannel);\n\n    let offer = await offerPc.createOffer();\n    context.socketConnector.emit(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OFFER, {receiver: data, offer: offer});\n\n    await offerPc.setLocalDescription(new RTCSessionDescription(offer));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandlerStartChatSession);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/handlers/HandlerStartChatSession.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/net/SocketConnector.js":
/*!*******************************************************!*\
  !*** ./FrontProjects/Chat/src/net/SocketConnector.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/Events */ \"./FrontProjects/Chat/src/events/Events.js\");\n/* harmony import */ var _events_SocketEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/SocketEvents */ \"./FrontProjects/Chat/src/events/SocketEvents.js\");\n\n\n\nclass SocketConnector {\n\n\n    constructor(context) {\n        this._context = context;\n        this._socket = io();\n        this._socket.on(\"listClients\", clients => {\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LIST_CLIENTS, {clients: clients, currentSocketId: this._socket.id});\n        });\n        this._socket.on(\"msg\", data => {\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MSG, data);\n        });\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].OFFER, data => {\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RECEIVED_OFFER, data);\n        });\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANSWER, data => {\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RECEIVED_ANSWER, data);\n        });\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].OFFER_ICE, data => {\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RECEIVED_OFFER_ICE, data);\n        });\n        this._socket.on(_events_SocketEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANSWER_ICE, data => {\n            this._context.fire(_events_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RECEIVED_ANSWER_ICE, data);\n        });\n    }\n\n    get socketId() {\n        return this._socket.id;\n    }\n\n\n    sendMsg(msg, targetSocketId) {\n        this._socket.emit(\"msg\", {receiver: targetSocketId, sender: this._socket.id, msg: msg});\n    }\n\n    emit(eventType, data) {\n        console.log(\"Send data to server >>>>>>>>>\");\n        console.log(\"event type : \" + eventType);\n        console.log(data);\n        console.log(\"Send data to server <<<<<<<<<\");\n\n        data.sender = this._socket.id;\n        this._socket.emit(eventType, data);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketConnector);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/net/SocketConnector.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/views/ClientList.html":
/*!******************************************************!*\
  !*** ./FrontProjects/Chat/src/views/ClientList.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"card\\\" style=\\\"width: 100%;\\\">\\n    <div class=\\\"card-header\\\">\\n        客户端列表\\n    </div>\\n    <div>\\n        <button @click=\\\"targetSocketIDClicked\\\" style=\\\"width: 100%;\\\" class=\\\"btn btn-outline-dark btn-sm\\\"\\n                v-for=\\\"k in clients.keys()\\\" :data-socket_id=\\\"k\\\">\\n            {{getSocketIdLabel(k)}}\\n        </button>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/views/ClientList.html?");

/***/ }),

/***/ "./FrontProjects/Chat/src/views/MainApp.html":
/*!***************************************************!*\
  !*** ./FrontProjects/Chat/src/views/MainApp.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=\\\"display: flex;flex-direction: row;\\\">\\n    <div style=\\\"display: flex;flex-direction: column;width: 260px;\\\">\\n        <client-list ref=\\\"client_list\\\" @selected_target=\\\"selectedTargetHandler\\\"></client-list>\\n        <video muted style=\\\"width: 240px;height: 180px;\\\" ref=\\\"localPreview\\\" autoplay controls></video>\\n    </div>\\n    <div class=\\\"card\\\" style=\\\"margin-left: 10px;flex: 1;\\\">\\n        <div class=\\\"card-header\\\">\\n            <span v-if=\\\"targetSocketId\\\">\\n            {{targetSocketId}}\\n            </span>\\n            <span v-else>\\n                No target socket id\\n            </span>\\n        </div>\\n        <div class=\\\"card-body\\\">\\n            <video style=\\\"width: 480px;height: 320px;\\\" ref=\\\"remotePreview\\\" muted controls autoplay></video>\\n        </div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/views/MainApp.html?");

/***/ })

/******/ });