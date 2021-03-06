/**
 * @fileOverview mock数据服务器
 * @author xgl
 */

var Hapi = require('hapi')
var Inert = require('inert')
var routes = require('../mock/routes').routes
var dataServer = new Hapi.Server();

dataServer.register(Inert, function() {});

dataServer.connection({
    host: '0.0.0.0',
    port: '8182'
})

routes.forEach(function(item) {
    dataServer.route(item);
})

module.exports = dataServer;
