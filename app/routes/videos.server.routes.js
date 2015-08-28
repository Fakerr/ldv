'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
    videos = require('../../app/controllers/videos.server.controller');

module.exports = function(app) {
	//Videos routes
	app.route('/videos')
	   .get(videos.list)
	   .post(users.requiresLogin, videos.create);
};