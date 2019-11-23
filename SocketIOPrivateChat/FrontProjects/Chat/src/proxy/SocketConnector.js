import Events from "../Events";

class SocketConnector {


    constructor() {
        this._socket = io();
        this._socket.on("listClients", clients => {
            $(this).trigger(Events.LIST_CLIENTS, {clients: clients, currentSocketId: this._socket.id});
        });
        this._socket.on("msg", data => {
            $(this).trigger(Events.MSG, data);
        });
    }

    get socketId() {
        return this._socket.id;
    }


    sendMsg(msg, targetSocketId) {
        this._socket.emit("msg", {receiver: targetSocketId, sender: this._socket.id, msg: msg});
    }
}

export default SocketConnector;