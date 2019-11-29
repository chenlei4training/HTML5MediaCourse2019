class StudentConnection {


    constructor(socket, studentSid, stream) {
        this._socket = socket;
        this._studentSid = studentSid;
        this._stream = stream;

        this.asyncInit();
    }

    async asyncInit() {
        this._offerPc = new RTCPeerConnection();

        this._offerPc.onicecandidate = e => {
            if (e.candidate) {
                this._socket.emit("ice", {from: this._socket.id, to: this._studentSid, ice: e.candidate});
            }
        };

        this._stream.getTracks().forEach(t => {
            this._offerPc.addTrack(t);
        });

        let offer = await this._offerPc.createOffer();
        this._socket.emit("teacherOffer", {from: this._socket.id, to: this._studentSid, offer: offer});
        await this._offerPc.setLocalDescription(new RTCSessionDescription(offer));
    }

    async studentAnswerHandler(data) {
        await this._offerPc.setRemoteDescription(new RTCSessionDescription(data.answer));
        console.log(data);
    }

    iceHandler(data) {
        this._offerPc.addIceCandidate(new RTCIceCandidate(data.ice));
    }
}

export default StudentConnection;