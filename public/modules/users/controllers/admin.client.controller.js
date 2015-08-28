'use strict';

angular.module('users').controller('AdminController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');
		// Object to send.
		$scope.credentials = {
			url: $scope.url,
			description: $scope.content
		};

		$scope.create = function() {
			$http.post('/videos', $scope.credentials).success(function(response) {	
				//redirect to the index admins page
				$location.path('/admins');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);