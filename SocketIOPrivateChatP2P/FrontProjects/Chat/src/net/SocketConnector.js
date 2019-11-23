import Events from "../events/Events";
import SocketEvents from "../events/SocketEvents";

class SocketConnector {


    constructor(context) {
        this._context = context;
        this._socket = io();
        this._socket.on("listClients", clients => {
            this._context.fire(Events.LIST_CLIENTS, {clients: clients, currentSocketId: this._socket.id});
        });
        this._socket.on("msg", data => {
            this._context.fire(Events.MSG, data);
        });
        this._socket.on(SocketEvents.OFFER, data => {
            this._context.fire(Events.RECEIVED_OFFER, data);
        });
        this._socket.on(SocketEvents.ANSWER, data => {
            this._context.fire(Events.RECEIVED_ANSWER, data);
        });
        this._socket.on(SocketEvents.OFFER_ICE, data => {
            this._context.fire(Events.RECEIVED_OFFER_ICE, data);
        });
        this._socket.on(SocketEvents.ANSWER_ICE, data => {
            this._context.fire(Events.RECEIVED_ANSWER_ICE, data);
        });
    }

    get socketId() {
        return this._socket.id;
    }


    sendMsg(msg, targetSocketId) {
        this._socket.emit("msg", {receiver: targetSocketId, sender: this._socket.id, msg: msg});
    }

    emit(eventType, data) {
        console.log("Send data to server >>>>>>>>>");
        console.log("event type : " + eventType);
        console.log(data);
        console.log("Send data to server <<<<<<<<<");

        data.sender = this._socket.id;
        this._socket.emit(eventType, data);
    }
}

export default SocketConnector;