/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('checktype');

/**
 * Checker for {@link core/complexTypes.AudioCaps}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.AudioCaps} value
 */
function checkAudioCaps(key, value)
{
  checkType('AudioCodec', key+'.codec', value.codec, true);
  checkType('int', key+'.bitrate', value.bitrate, true);
};


/**
 * Format for audio media
 *
 * @memberof module:core/complexTypes
 *
 * @typedef core/complexTypes.AudioCaps
 *
 * @type {Object}
 * @property {module:core/complexTypes.AudioCodec} codec
 *  Audio codec
 * @property {external:Integer} bitrate
 *  Bitrate
 */


module.exports = checkAudioCaps;