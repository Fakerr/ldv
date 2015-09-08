'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication', 'ngDialog',
	function($scope, $http, Authentication, ngDialog) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        //Get videos using videos API.
        $http.get('/videos').success(function(response) {
				// If successful we assign the response to the global video model
				$scope.videos = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
	
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
        //Replay video.
		$scope.$on('youtube.player.ended', function ($event, player) {
            // play it again
            player.playVideo();
        });
	}
]);