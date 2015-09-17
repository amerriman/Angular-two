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
      // .when('/calculator/:operator/:numA/:numB', {
      //   templateUrl: 'partials/calculator.html',
      //   controller: 'CalculatorController'
      // })
      .when('/calculator/:operator/:numA/:numB?', {
      templateUrl: 'partials/calculator.html',
      controller: 'CalculatorController'
      });
      // .otherwise( {
      //   redirectTo: '/'
      // });
});


// Given:
// URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
// Route: /Chapter/:chapterId/Section/:sectionId
//
// Then
// $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
