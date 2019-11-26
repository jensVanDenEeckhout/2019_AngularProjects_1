// way 1
/*
	var app = angular.module('app', []);

	app.controller('MainController',['$scope',
		function($scope){
			$scope.val ="way 1";

			$scope.func = function(){
			return "abc" + "def"
		}
	}]); 
*/

// way 2 - preferred way in production

	var app = angular.module('app', []);

	app.controller('MainController', function($scope){
			$scope.val ="way 2";
		}); 


// way 3
/*
var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope){
	$scope.val = "way 3"
})
*/