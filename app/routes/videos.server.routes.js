'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var videos = require('../../app/controllers/videos.server.controller');

	// Videos Routes
	app.route('/videos')
		.get(videos.list)
		.post(users.requiresLogin, users.hasAuthorization(['admin']), videos.create);

	app.route('/videos/:videoId')
		.get(videos.read)
		.put(users.requiresLogin, videos.hasAuthorization, videos.update)
		.delete(users.requiresLogin, videos.hasAuthorization, videos.delete);

	// Finish by binding the Video middleware
	app.param('videoId', videos.videoByID);
};
