'use strict';

angular.module('users').controller('AdminsController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.user = Authentication.user;

		function isInArray(value, array) {
            return array.indexOf(value) > -1;
        }
		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');
		else if(!isInArray('admin', $scope.user.roles)) $location.path('/');
		
		$scope.create = function() {
			$http.post('/videos', $scope.credentials).success(function(response) {	
				//redirect to the index admins page
				$location.path('/admins');
				$scope.credentials = '';
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);