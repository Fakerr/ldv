'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/articles')
		.get(users.requiresLogin, users.hasAuthorization(['admin']), articles.list)
		.post(users.requiresLogin, articles.create);

	app.route('/articles/:articleId')
		.get(users.requiresLogin, users.hasAuthorization(['admin']), articles.read)
		.put(users.requiresLogin, users.hasAuthorization(['admin']), articles.update)
		.delete(users.requiresLogin, users.hasAuthorization(['admin']), articles.delete);

	// Finish by binding the article middleware
	app.param('articleId', articles.articleByID);
};