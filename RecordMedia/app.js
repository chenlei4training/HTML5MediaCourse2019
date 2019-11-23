new Vue({
    el: "#vueapp",

    data: {
        currentWebmData: null,
        recording: false,
        paused: true
    },

    mounted() {
        this._initApp();
    },

    methods: {

        async _initApp() {
            // this._stream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
            this._stream = await navigator.mediaDevices.getDisplayMedia();
            this.$refs.preview.srcObject = this._stream;
            this._recorder = new MediaRecorder(this._stream, {mimeType: "video/webm;codecs=h264"});
            this._recorder.ondataavailable = this.recorder_dataAvailableHandler.bind(this);
        },


        recorder_dataAvailableHandler(e) {
            console.log(e);
            this.currentWebmData = e.data;
        },

        btnRecordClicked() {
            this.recording = true;
            this.paused = false;
            this._recorder.start();
        },
        btnPauseClicked() {
            this.paused = true;
            this._recorder.pause();
        },
        btnResumeClicked() {
            this.paused = false;
            this._recorder.resume();
        },
        btnStopClicked() {
            this.recording = false;
            this._recorder.stop();
        },

        btnPlayClicked() {
            this.$refs.player.src = URL.createObjectURL(this.currentWebmData);
        }
    }
});