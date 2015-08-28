'use strict';

// Configuring the Videos module
angular.module('videos').run(['Menus',
	function(Menus) {
		// Set top bar admin menu items
		Menus.addMenuItem('top-admin', 'Videos', 'videos', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('top-admin', 'videos', 'List Videos', 'videos');
		Menus.addSubMenuItem('top-admin', 'videos', 'New video', 'videos/create');
	}
]);