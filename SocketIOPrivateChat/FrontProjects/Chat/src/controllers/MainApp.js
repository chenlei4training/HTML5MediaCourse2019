import "./ClientList"
import Tpl from "../views/MainApp.html"
import Events from "../Events";

const MainApp = Vue.component("main-app", {
    template: Tpl,

    data() {
        return {
            targetSocketId: "",
            output: []
        }
    },


    computed: {
        outputMsg() {
            return this.output.join("\n");
        }
    },

    methods: {

        setContext(context) {
            this._context = context;

            this.$refs.client_list.setContext(context);
        },

        selectedTargetHandler(target) {
            this.targetSocketId = target.socketId;
            this.output = target.chatLog;
        },

        submitHandler(e) {
            e.preventDefault();

            if (this.targetSocketId) {
                this._context.socketConnector.sendMsg(e.target.msg.value, this.targetSocketId);
                e.target.msg.value = "";
            }
        }
    },

    watch: {
        output() {
            this.$nextTick(function () {
                this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
            });
        }
    }
});


export default MainApp;