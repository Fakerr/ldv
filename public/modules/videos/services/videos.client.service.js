'use strict';

//Videos service used to communicate Videos REST endpoints
angular.module('videos').factory('Videos', ['$resource',
	function($resource) {
		return $resource('videos/:videoId', { videoId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);