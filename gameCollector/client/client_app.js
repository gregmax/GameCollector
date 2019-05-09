angular.module('gameCollectorApp', ['ngRoute', 'ngSanitize', 'ngResource'])
  .config(function($routeProvider, $locationProvider) {

    $routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})
		.when('/about', {
			templateUrl: 'about/about.view.html',
			controller: 'aboutCtrl',
			controllerAs: 'vm'
		})
		.when('/addEntry', {
			templateUrl: 'addEntry/addEntry.view.html',
			controller: 'addEntryCtrl',
			controllerAs: 'vm'
		})
		.when('/entry/:id', {
			templateUrl: 'entryDetail/entryDetail.view.html',
			controller: 'entryDetailCtrl',
			controllerAs: 'vm'
		})
		.when('/entry/:id/editEntry', {
			templateUrl: 'editEntry/editEntry.view.html',
			controller: 'editEntryCtrl',
			controllerAs: 'vm'
		})
		/* .when('/entry/:id', {
			templateUrl: 'entryDetail/entryDetail.view.html',
			controller: 'entryDetailCtrl',
			controllerAs: 'vm'
		}) */
		.when('/register', {
			templateUrl: '/auth/register/register.view.html',
			controller: 'registerCtrl',
			controllerAs: 'vm'
		})
		.when('/login', {
			templateUrl: '/auth/login/login.view.html',
			controller: 'loginCtrl',
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	})