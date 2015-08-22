'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'ngDialog',
	function($scope, Authentication, ngDialog) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.videos = [
		'https://www.youtube.com/watch?v=devqz4rXfgk', 
		'https://www.youtube.com/watch?v=F2y8ga7E6kk', 
		'https://www.youtube.com/watch?v=e2JZgko4DuE',
		'https://www.youtube.com/watch?v=KviP9rfp2S4'
		];
		$scope.openVideo = function(video) {
			$scope.videoUrl = video;
			ngDialog.open({
						template: 'firstDialog',
						className: 'ngdialog-theme-default ngdialog-theme-custom',
						scope: $scope
			});
		};
		$scope.playerVars = { 
			controls: 0,
			autoplay: 0
		};
	}
]);