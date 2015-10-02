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
      .when('/calculator/:operator/:numA/:numB', {
        templateUrl: 'partials/calculator.html',
        controller: 'CalculatorController'
      })
      .when('/api', {
        templateUrl: 'partials/api.html',
        controller: 'Api'
      })
      .when('/filters', {
        templateUrl: 'partials/filters.html',
        controller: 'myController'
      })
      .when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'moviesController'
      })
      // //not working
      // .when('/calculator/add/?x=4&y=10', {
      // templateUrl: 'partials/calculator.html',
      // controller: 'CalculatorController2'
      // })
      .otherwise( {
        redirectTo: '/'
      });

 // $locationProvider.html5Mode(true);

});



