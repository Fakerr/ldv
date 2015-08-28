'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Video = mongoose.model('Video'),
	_ = require('lodash');

/**
 * Create a Video
 */
exports.create = function(req, res) {
	var video = new Video(req.body);
	video.user = req.user;

	video.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(video);
		}
	});
};

/**
 * Show the current Video
 */
exports.read = function(req, res) {
	res.jsonp(req.video);
};

/**
 * Update a Video
 */
exports.update = function(req, res) {
	var video = req.video ;

	video = _.extend(video , req.body);

	video.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(video);
		}
	});
};

/**
 * Delete an Video
 */
exports.delete = function(req, res) {
	var video = req.video ;

	video.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(video);
		}
	});
};

/**
 * List of Videos
 */
exports.list = function(req, res) { 
	Video.find().sort('-created').populate('user', 'displayName').exec(function(err, videos) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(videos);
		}
	});
};

/**
 * Video middleware
 */
exports.videoByID = function(req, res, next, id) { 
	Video.findById(id).populate('user', 'displayName').exec(function(err, video) {
		if (err) return next(err);
		if (! video) return next(new Error('Failed to load Video ' + id));
		req.video = video ;
		next();
	});
};

/**
 * Video authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.video.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
