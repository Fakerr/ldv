'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('core').factory('Videos', ['$resource',
	function($resource) {
		return $resource('videos/:videoId', {
			videoId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);