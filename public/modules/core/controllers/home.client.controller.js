'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'ngDialog', 'Videos',
	function($scope, Authentication, ngDialog, Videos) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.find = function() {
			$scope.videos = Videos.query();
		};

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