'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 
	'Authentication', 'Articles', 'Videos',
	function($scope, $stateParams, $location, Authentication, Articles, Videos) {
		$scope.authentication = Authentication;

		function isInArray(value, array) {
             return array.indexOf(value) > -1;
        }
        //Redirect if not authorized.
        if (!$scope.authentication.user) $location.path('/');
        else if(!isInArray('admin', $scope.authentication.user.roles)) $location.path('/');

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};

		// Add the Video sended.
		$scope.add = function() {
			// Create new Video object
			var video = new Videos ({
				url: $scope.article.title,
				description: $scope.article.content
			});

			// Delet after save
			video.$save(function(response) {
				$scope.remove();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);