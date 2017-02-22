/**
 * @file 后端数据路由文件
 * @author xgl
 */

'use strict';

var routesConfig = [
	require('./api')
];

var routes = [];

for (var i = 0, l = routesConfig.length; i < l; i++) {
    routes = routes.concat(routesConfig[i].routes);
}

exports.routes = routes;