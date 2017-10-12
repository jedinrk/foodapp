angular.module('foodapp', ['ngRoute']).config(config);

function config($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'angular-app/home/home.html',
			controller: HomeController,
			controllerAs: 'vm'
		})
		.when('/register', {
			templateUrl: 'angular-app/register/register.html',
			controller: RegisterController,
			controllerAs: 'vm'
		});
};