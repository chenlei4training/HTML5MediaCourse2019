// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const jQuery = window.jQuery = require("jquery");
require("popper.js");
require("bootstrap");
const Vue = require("vue/dist/vue");
const electron = require("electron");
const fs = require("fs");
const SCREEN_WIDTH = 1024;
const SCREEN_HEIGHT = 640;
const PlayerCanvas = require("./PlayerCanvas");


new Vue({
    el: "#vueapp",
    data: {
        recording: false
    },

    mounted() {
        this._playerCanvas = new PlayerCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    },

    methods: {
        async btnStartRecordClicked(e) {
            this._stream = new MediaStream();
            await this.attachAudioStream();
            this._cameraStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
            this._playerCanvas.setCameraVideo(this.createVideoElementWithStream(this._cameraStream));

            this._screenStream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        minWidth: SCREEN_WIDTH,
                        maxWidth: SCREEN_WIDTH,
                        minHeight: SCREEN_HEIGHT,
                        maxHeight: SCREEN_HEIGHT
                    }
                }
            });
            this._playerCanvas.setScreenVideo(this.createVideoElementWithStream(this._screenStream));

            let playerCanvasStream = this._playerCanvas.canvas.captureStream();
            playerCanvasStream.getTracks().forEach(t => this._stream.addTrack(t));
            this.$refs.preview.srcObject = playerCanvasStream;

            this.startRecord();
        },


        async attachAudioStream() {
            this._audioStream = await navigator.mediaDevices.getUserMedia({video: false, audio: true});
            this._audioStream.getAudioTracks().forEach(value => this._stream.addTrack(value));
        },

        btnStopRecordClicked(e) {
            this.recording = false;
            this._recorder.stop();
        },

        createVideoElementWithStream(stream) {
            let video = document.createElement("video");
            video.autoplay = true;
            video.srcObject = stream;
            return video;
        },

        startRecord() {
            this._recorder = new MediaRecorder(this._stream, {mimeType: "video/webm;codecs=h264"});
            this._recorder.ondataavailable = async e => {
                let path = electron.remote.dialog.showSaveDialogSync(electron.remote.getCurrentWindow(), {
                    title: "保存文件",
                    defaultPath: "ScreenData.webm"
                });

                console.log(path);
                fs.writeFileSync(path, new Uint8Array(await e.data.arrayBuffer()));
            };
            this._recorder.start();
            this.recording = true;
        }
    }
});