'use strict';

//Videos service used for communicating with the videos REST endpoints
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