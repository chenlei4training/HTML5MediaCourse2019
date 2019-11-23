new Vue({
    el: "#vueapp",

    mounted() {
        this._initAueApp();
    },

    methods: {

        async _initAueApp() {
            this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

            this._context2d = this.$refs.canvas.getContext("2d");
        },


        btnTakePhotoClicked() {
            // this._context2d.drawImage(this.$refs.video, 0, 0, 400, 300, 100, 100, 200, 150);
            this._context2d.drawImage(this.$refs.video, 0, 0, 400, 300);
        }
    }
});