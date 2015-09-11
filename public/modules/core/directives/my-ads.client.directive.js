'use strict';

angular.module('core').directive('myAds', [
	function() {
		return {
			restrict: 'A',
			transclude: true,
			replace: true,
			template: '<div ng-transclude></div>',
			link: function ($scope, element, attrs) {}
        };
	}
]);