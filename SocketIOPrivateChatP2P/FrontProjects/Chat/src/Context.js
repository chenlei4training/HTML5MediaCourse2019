import SocketConnector from "./net/SocketConnector";
import Events from "./events/Events";
import HandlerReceivedOffer from "./handlers/HandlerReceivedOffer";
import HandlerStartChatSession from "./handlers/HandlerStartChatSession";
import HandlerReceivedAnswer from "./handlers/HandlerReceivedAnswer";
import HandlerReceivedOfferICE from "./handlers/HandlerReceivedOfferICE";
import HandlerReceivedAnswerICE from "./handlers/HandlerReceivedAnswerICE";

class Context {


    constructor() {
        this._jqThis = $(this);
        this._sharedData = new Map();
        this._socketConnector = new SocketConnector(this);

        this.addListeners();
    }

    setData(k, v) {
        this._sharedData.set(k, v);
    }

    getData(k) {
        return this._sharedData.get(k);
    }


    addListeners() {
        let jqThis = $(this);

        jqThis.on(Events.RECEIVED_OFFER, HandlerReceivedOffer);
        jqThis.on(Events.RECEIVED_OFFER_ICE, HandlerReceivedOfferICE);
        jqThis.on(Events.RECEIVED_ANSWER, HandlerReceivedAnswer);
        jqThis.on(Events.RECEIVED_ANSWER_ICE, HandlerReceivedAnswerICE);
        jqThis.on(Events.START_CHAT_SESSION, HandlerStartChatSession);
    }

    fire(type, data) {
        console.info("Fire event:" + type);
        this._jqThis.trigger(type, [this, data]);
    }


    get socketConnector() {
        return this._socketConnector;
    }


    get peerConnector() {
        return this._peerConnector;
    }
}

Context.KEY_OFFER_PEER_CONNECTION = "offerPc";
Context.KEY_ANSWER_PEER_CONNECTION = "answerPc";
Context.KEY_DATA_CHANNEL = "dataChannel";
Context.KEY_LOCAL_MEDIA_STREAM = "localMediaStream";
Context.KEY_REMOTE_MEDIA_STREAM = "remoteMediaStream";

export default Context;