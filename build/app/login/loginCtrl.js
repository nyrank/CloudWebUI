angular.module('app.login')
    .controller('LoginCtrl', ['$scope', '$location', '$route', '$log', 'authService',
			      function($scope, $location, $route, $log, authService) { 
			$scope.loginData = {
			    username: '',
			    password: ''
			};

			$scope.login = function() {
			    authService.logIn($scope.logInData).then(function(response) {
				    $location.path('/');
				},
				function (err) {
				    $log.error(err);
				});
			}

			$scope.logout = function() {
			    $location.path('/login');
			    $route.reload();
			}
		    }]);