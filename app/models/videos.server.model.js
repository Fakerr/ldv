'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Video Schema
 */
var VideoSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	url: {
		type: String,
		default: '',
		trim: true,
		required: 'url cannot be blank'
	},
	description: {
		type: String,
		default: 'No descritpion',
	}
});

mongoose.model('Video', VideoSchema);