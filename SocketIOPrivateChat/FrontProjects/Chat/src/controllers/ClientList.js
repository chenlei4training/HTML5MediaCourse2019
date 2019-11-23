import Tpl from "../views/ClientList.html"
import Events from "../Events";

const ClientList = Vue.component("client-list", {
    template: Tpl,

    data() {
        return {
            clients: new Map(),
            currentSocketId: "",
        }
    },

    methods: {
        setContext(context) {
            this._context = context;
            $(context.socketConnector).on(Events.LIST_CLIENTS, (event, data) => {
                this.currentSocketId = data.currentSocketId;

                let tmpMap = new Map();
                this.clients.forEach((v, k) => {
                    tmpMap.set(k, v);
                });

                this.clients.clear();

                data.clients.forEach(socketId => {
                    if (tmpMap.has(socketId)) {
                        this.clients.set(socketId, tmpMap.get(socketId));
                    } else {
                        this.clients.set(socketId, {socketId: socketId, chatLog: []});
                    }
                });

                this.$forceUpdate();
            });

            $(context.socketConnector).on(Events.MSG, (e, data) => {
                let targetSocketId;
                if (data.sender == this.currentSocketId) {
                    targetSocketId = data.receiver;
                } else if (data.receiver == this.currentSocketId) {
                    targetSocketId = data.sender;
                }
                if (targetSocketId) {
                    let target = this.clients.get(targetSocketId);
                    if (target) {
                        target.chatLog.push(data.msg);
                    }
                }

            });
        },

        targetSocketIDClicked(e) {
            let selectedSocketId = $(e.target).data("socket_id");
            if (selectedSocketId != this._context.socketConnector.socketId) {
                this.$emit("selected_target", this.clients.get(selectedSocketId));
            } else {
                alert("你不能跟自己聊天");
            }
        },

        getSocketIdLabel(socketId) {
            if (socketId != this.currentSocketId) {
                return socketId;
            } else {
                return socketId + "[自己]"
            }
        }
    }
});