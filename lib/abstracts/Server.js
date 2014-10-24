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

var inherits = require('inherits');

var ChecktypeError = require('checktype').ChecktypeError;

var MediaObject = require('./MediaObject');

/**
 * @classdesc
 *  This is a standalone object that represents the server
 *
 * @abstract
 * @extends module:core/abstracts.MediaObject
 *
 * @constructor module:core/abstracts.Server
 *
 * @param {external:String} id
 *
 * @fires {@link module:core#event:ObjectCreated ObjectCreated}
 * @fires {@link module:core#event:ObjectDestroyed ObjectDestroyed}
 */
function Server(id){
  Server.super_.call(this, id);
};
inherits(Server, MediaObject);

/**
 * Server information, version, modules, factories, etc
 *
 * @alias module:core/abstracts.Server#getInfo
 *
 * @param {module:core/abstracts.Server~getInfoCallback} [callback]
 *
 * @return {external:Promise}
 */
Server.prototype.getInfo = function(callback){
  return this.invoke('getInfo', callback);
};
/**
 * @callback module:core/abstracts.Server~getInfoCallback
 * @param {external:Error} error
 * @param {module:core/complexTypes.ServerInfo} result
 */

/**
 * All the pipelines available in the server
 *
 * @alias module:core/abstracts.Server#getPipelines
 *
 * @param {module:core/abstracts.Server~getPipelinesCallback} [callback]
 *
 * @return {external:Promise}
 */
Server.prototype.getPipelines = function(callback){
  return this.invoke('getPipelines', callback);
};
/**
 * @callback module:core/abstracts.Server~getPipelinesCallback
 * @param {external:Error} error
 * @param {module:core.MediaPipeline} result
 */

/**
 * All active sessions in the server
 *
 * @alias module:core/abstracts.Server#getSessions
 *
 * @param {module:core/abstracts.Server~getSessionsCallback} [callback]
 *
 * @return {external:Promise}
 */
Server.prototype.getSessions = function(callback){
  return this.invoke('getSessions', callback);
};
/**
 * @callback module:core/abstracts.Server~getSessionsCallback
 * @param {external:Error} error
 * @param {external:String} result
 */

/**
 * @alias module:core/abstracts.Server.constructorParams
 */
Server.constructorParams = {};

/**
 * @alias module:core/abstracts.Server.events
 *
 * @extend module:core/abstracts.MediaObject.events
 */
Server.events = MediaObject.events.concat(['ObjectCreated', 'ObjectDestroyed']);

module.exports = Server;

Server.check = function(key, value)
{
  if(!(value instanceof Server))
    throw ChecktypeError(key, Server, value);
};