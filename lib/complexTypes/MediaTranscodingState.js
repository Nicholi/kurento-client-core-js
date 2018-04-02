var kurentoClient = require('kurento-client');



/**
 * Transcoding state of the media.
 *
 * @typedef core/complexTypes.MediaTranscodingState
 *
 * @type {(TRANSCODING|NOT_TRANSCODING)}
 */

/**
 * Checker for {@link module:core/complexTypes.MediaTranscodingState}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.MediaTranscodingState} value
 */
function checkMediaFlowState(key, value)
{
  if(typeof value != 'string')
    throw SyntaxError(key+' param should be a String, not '+typeof value);

  if(!value.match('TRANSCODING|NOT_TRANSCODING'))
    throw SyntaxError(key+' param is not one of [TRANSCODING|NOT_TRANSCODING] ('+value+')');
};


module.exports = checkMediaFlowState;
