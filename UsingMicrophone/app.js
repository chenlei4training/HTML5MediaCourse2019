// (async function () {
//     // let devices = await navigator.mediaDevices.enumerateDevices();
//     //
//     // console.log(devices);
//
//     let stream = await navigator.mediaDevices.getUserMedia({video: false, audio: true});
//     document.querySelector("audio").srcObject = stream;
// })();


new Vue({
    el: "#vueapp",
    data: {
        audioInputDevices: [],
        selectedAudioDeviceIndex: 0
    },

    mounted() {
        this._initVueApp();
    },


    methods: {

        async _initVueApp() {
            let devices = await navigator.mediaDevices.enumerateDevices();
            console.log(devices);
            let audioInputDevices = devices.filter(value => value.kind === 'audioinput');
            console.log(audioInputDevices);
            this.audioInputDevices.length = 0;
            this.audioInputDevices.push(...audioInputDevices);

            this.showSelectedDevice();
        },

        async showSelectedDevice() {
            let deviceInfo = this.audioInputDevices[this.selectedAudioDeviceIndex];
            let stream = await navigator.mediaDevices.getUserMedia({video: false, audio: deviceInfo});
            this.$refs.audio.srcObject = stream;
        }
    },


    watch: {
        selectedAudioDeviceIndex(val, oldVal) {
            this.showSelectedDevice();
        }
    }
});