angular.module('gameCollectorApp', ['ngRoute'])
  .config(function($routeProvider) {
  
    $routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo: '/'
		});
	})