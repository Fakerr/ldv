'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
	Video = mongoose.model('Video');
/*
exports.list = function(req, res) {
	var videos = [
	  'https://www.youtube.com/watch?v=OvBsCpL53rw&feature=youtu.be',
	  'https://www.youtube.com/watch?v=1Hf1XkNqUGM',
	  'https://www.youtube.com/watch?v=NS0NUiCeOH0&feature=youtu.be',
	  'https://www.youtube.com/watch?v=fCQGV4qgqIU',
	  'https://www.youtube.com/watch?v=yBbLBckgTDg&list',
	  'https://www.youtube.com/watch?v=f7XT2nfkDQI&feature=youtu.be',
	  'https://www.youtube.com/watch?v=l2T9ZhxOIuA',
	  'https://www.youtube.com/watch?v=TAaWI0x9LFk',
	  'https://www.youtube.com/watch?v=KviP9rfp2S4'
	];
	res.json(videos);
};*/

/**
 * List of Videos
 */
exports.list = function(req, res) {
	Video.find().sort('-created').exec(function(err, videos) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(videos);
		}
	});
};

/**
 * Create a video
 */
/*
var create = function() {
    var video1 = {url: 'https://www.youtube.com/watch?v=1Hf1XkNqUGM', description: 'Zed Play vs froggen'};
	var video = new Video(video1);

	video.save(function(err) {
		if (err) {
			console.log('video not added');
		} else {
			console.log('video added');
		}
	});
};
*/
//create();