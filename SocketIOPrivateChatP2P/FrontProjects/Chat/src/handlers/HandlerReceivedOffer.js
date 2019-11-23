import SocketEvents from "../events/SocketEvents";
import Context from "../Context";
import Config from "../Config";

/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @returns {Promise<void>}
 * @constructor
 */
async function HandlerReceivedOffer(e, context, data) {
    console.log(data);

    var answerPc = new RTCPeerConnection(Config.PC_INIT_CONFIG);
    let localStream = context.getData(Context.KEY_LOCAL_MEDIA_STREAM);
    localStream.getTracks().forEach(t => {
        answerPc.addTrack(t);
    });
    context.setData(Context.KEY_ANSWER_PEER_CONNECTION, answerPc);

    /**
     * @type {MediaStream}
     */
    let remoteStream = context.getData(Context.KEY_REMOTE_MEDIA_STREAM);
    answerPc.ontrack = e => {
        remoteStream.addTrack(e.track);
    };

    answerPc.onicecandidate = e => {
        if (e.candidate) {
            context.socketConnector.emit(SocketEvents.ANSWER_ICE, {receiver: data.sender, ice: e.candidate});
        }
    };

    answerPc.ondatachannel = e => {
        let dataChannel = e.channel;
        dataChannel.onmessage = ev => {
            console.log(ev);
        };
    };

    await answerPc.setRemoteDescription(new RTCSessionDescription(data.offer));
    var answer = await answerPc.createAnswer();
    context.socketConnector.emit(SocketEvents.ANSWER, {answer: answer, receiver: data.sender});
    await answerPc.setLocalDescription(new RTCSessionDescription(answer));
}

export default HandlerReceivedOffer;
