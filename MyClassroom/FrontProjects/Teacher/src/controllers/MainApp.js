import Tpl from "../views/MainApp.html"
import Dialog from "../../../commons/Dialog";
import "../../../commons/components/ClientList"
import StudentConnection from "../net/StudentConnection";

const MainApp = Vue.component("main-app", {
    template: Tpl,
    data() {
        return {classroomName: ""}
    },

    async mounted() {
        this._localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
        this.$refs.local_preview.srcObject = this._localStream;

        this._socket = io();
        this._studentConnections = new Map();

        this.addSocketListeners();
        this.showCreateClassroomDialog();
    },

    methods: {
        addSocketListeners() {
            this._socket.on("listClients", clients => {
                this.$refs.client_list.setClients(clients);
            });
            this._socket.on("studentJoinedIn", data => {
                this._studentConnections.set(data.studentSid, new StudentConnection(this._socket, data.studentSid, this._localStream));
            });
            this._socket.on("studentAnswer", data => {
                let sc = this._studentConnections.get(data.from);
                if (sc) {
                    sc.studentAnswerHandler(data);
                }
            });
            this._socket.on("ice", data => {
                let sc = this._studentConnections.get(data.from);
                if (sc) {
                    sc.iceHandler(data);
                }
            });
        },

        showCreateClassroomDialog() {
            Dialog.showInput("请创建一个教室", function (name) {
                if (name) {
                    let ld = Dialog.showLoading("正在创建教室...");
                    this._socket.emit("createClassroom", name, function (suc) {
                        ld.modal("hide");
                        if (suc) {
                            this.classroomName = name;
                            console.log("Joined in room");
                        } else {
                            Dialog.showMessageBox("教室已存在，请另选其它名称", "提示", function () {
                                this.showCreateClassroomDialog();
                            }.bind(this));
                        }
                    }.bind(this));
                } else {
                    this.showCreateClassroomDialog();
                }
            }.bind(this), "static", false, false, "");
        }
    }
});


export default MainApp;
