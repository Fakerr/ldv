'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('top-admin', 'Articles', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('top-admin', 'articles', 'List Articles', 'articles');
		Menus.addMenuItem('topbar', 'Send video', 'send', '/send');
	}
]);