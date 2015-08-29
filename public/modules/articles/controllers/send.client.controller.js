'use strict';

angular.module('articles').controller('SendController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

        //Redirect if not logged.
        if (!$scope.authentication.user) $location.path('/');

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$scope.title = '';
				$scope.content = '';
				$scope.succes = 'Your video was successfully sent !';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);