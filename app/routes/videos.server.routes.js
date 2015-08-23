'use strict';

module.exports = function(app) {
	//Videos routes
	var videos = require('../../app/controllers/videos.server.controller');
	app.route('/videos').get(videos.list);
};