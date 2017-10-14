angular.module('foodapp', ['ngRoute']).config(config);

function config($routeProvider,$locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'angular-app/home/home.html',
			controller: HomeController,
			controllerAs: 'vm'
		})
		.when('/register', {
			templateUrl: 'angular-app/register/register.html',
			controller: RegisterController,
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo: "/"
		});

		// enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("");
}