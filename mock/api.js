/**
 * @fileOverview api
 * @author xgl
 */

exports.routes = [
	{
		method: 'POST',
		path: '/test.json',
		handler: function (request, reply) {
			return reply(
				{
				    "msg":"succ",
				    "code": 0,
				    "data": null
				}
			)
		}
	}
];