import Context from "../Context";

/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @returns {Promise<void>}
 * @constructor
 */
async function HandlerReceivedAnswerICE(e, context, data) {
    /**
     * @type {RTCPeerConnection}
     */
    let offerPc = context.getData(Context.KEY_OFFER_PEER_CONNECTION);
    await offerPc.addIceCandidate(new RTCIceCandidate(data.ice));
}

export default HandlerReceivedAnswerICE;