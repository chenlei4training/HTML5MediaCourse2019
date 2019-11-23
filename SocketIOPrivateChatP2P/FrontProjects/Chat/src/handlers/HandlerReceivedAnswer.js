import Context from "../Context";

/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @returns {Promise<void>}
 * @constructor
 */
async function HandlerReceivedAnswer(e, context, data) {
    context.getData(Context.KEY_OFFER_PEER_CONNECTION).setRemoteDescription(new RTCSessionDescription(data.answer));
}

export default HandlerReceivedAnswer;