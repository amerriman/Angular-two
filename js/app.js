var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .when('/portfolio', {
        templateUrl: '/partials/portfolio.html',
        controller: 'PortfolioController'
      })
      .when('/project', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .otherwise( {
        redirectTo: '/'
      });
});
