import SocketConnector from "./proxy/SocketConnector";

class Context {


    constructor() {
        this._socketConnector = new SocketConnector();
    }


    get socketConnector() {
        return this._socketConnector;
    }
}


export default Context;