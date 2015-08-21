'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.videos = [
		'https://www.youtube.com/watch?v=devqz4rXfgk', 
		'https://www.youtube.com/watch?v=F2y8ga7E6kk', 
		'https://www.youtube.com/watch?v=e2JZgko4DuE'
		];
		$scope.openVideo = function(video) {
			alert('Hi');
		};
		$scope.playerVars = { 
			controls: 0,
			autoplay: 0
		};
	}
]);