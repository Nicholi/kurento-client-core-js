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

var checkType = require('kurento-client').checkType;

/**
 * Checker for {@link core/complexTypes.RTCCertificateStats}
 *
 * @memberof module:core/complexTypes
 *
 * @param {external:String} key
 * @param {module:core/complexTypes.RTCCertificateStats} value
 */
function checkRTCCertificateStats(key, value)
{
  checkType('String', key+'.fingerprint', value.fingerprint, true);
  checkType('String', key+'.fingerprintAlgorithm', value.fingerprintAlgorithm, true);
  checkType('String', key+'.base64Certificate', value.base64Certificate, true);
  checkType('String', key+'.issuerCertificateId', value.issuerCertificateId, true);
};


/**
 * 
 *
 * @memberof module:core/complexTypes
 *
 * @typedef core/complexTypes.RTCCertificateStats
 *
 * @type {Object}
 * @property {external:String} fingerprint
 *  Only use the fingerprint value as defined in Section 5 of [RFC4572].
 * @property {external:String} fingerprintAlgorithm
 *  For instance, 'sha-256'.
 * @property {external:String} base64Certificate
 *  For example, DER-encoded, base-64 representation of a certifiate.
 * @property {external:String} issuerCertificateId
 *  
 */


module.exports = checkRTCCertificateStats;