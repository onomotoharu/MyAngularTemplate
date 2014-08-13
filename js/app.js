var App = angular.module('App',[
	'ngRoute',
  'ngTouch',
	'AppControllers'
	]);

App.config(['$routeProvider',
  function($routeProvider) {
    console.debug($routeProvider);
    $routeProvider.
      when('/', {
        templateUrl: 'partials/top.html',
        controller: 'TopCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);