import Context from "../Context";
/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @returns {Promise<void>}
 * @constructor
 */
import SocketEvents from "../events/SocketEvents";

async function HandlerReceivedOfferICE(e, context, data) {
    console.log(data);

    /**
     * @type {RTCPeerConnection}
     */
    let answerPc = context.getData(Context.KEY_ANSWER_PEER_CONNECTION);
    await answerPc.addIceCandidate(new RTCIceCandidate(data.ice));
}

export default HandlerReceivedOfferICE;
