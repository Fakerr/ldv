'use strict';

// Videos controller
angular.module('videos').controller('VideosController', ['$scope', '$stateParams', '$location', 'Authentication', 'Videos',
	function($scope, $stateParams, $location, Authentication, Videos) {
		$scope.authentication = Authentication;

		function isInArray(value, array) {
             return array.indexOf(value) > -1;
        }
        //Redirect if not authorized.
        if (!$scope.authentication.user) $location.path('/');
        else if(!isInArray('admin', $scope.authentication.user.roles)) $location.path('/');

		// Create new Video
		$scope.create = function() {
			// Create new Video object
			var video = new Videos ({
				url: this.url,
				description: this.description
			});

			// Redirect after save
			video.$save(function(response) {
				$location.path('videos/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Video
		$scope.remove = function(video) {
			if ( video ) { 
				video.$remove();

				for (var i in $scope.videos) {
					if ($scope.videos [i] === video) {
						$scope.videos.splice(i, 1);
					}
				}
			} else {
				$scope.video.$remove(function() {
					$location.path('videos');
				});
			}
		};

		// Update existing Video
		$scope.update = function() {
			var video = $scope.video;

			video.$update(function() {
				$location.path('videos/' + video._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Videos
		$scope.find = function() {
			$scope.videos = Videos.query();
		};

		// Find existing Video
		$scope.findOne = function() {
			$scope.video = Videos.get({ 
				videoId: $stateParams.videoId
			});
		};
	}
]);