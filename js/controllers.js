app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
});


app.controller('DogsController', function($scope){
  $scope.dogs = [
    {
      type: "Golden Retreiver",
      friendly: "yes"
    },
    {
      type: "Boxer",
      friendly: "yes"
    },
    {
      type: "Snoop",
      friendly: "If there's gin and juice, then yes."
    },
  ];
});

app.controller('HomeController', function($scope){
  $scope.message = "tacos";
});


app.controller('ResumeController', function($scope){
  $scope.message = "resume";
});

app.controller('ProjectController', function($scope){
  $scope.message = "project";
});

app.controller('PortfolioController', function($scope){
  $scope.message = "portfolio";
});

app.controller('CalculatorController', function($scope, $route, $routeParams){

  var operator = $routeParams.operator;
  var numA = $routeParams.numA;
  var numB = $routeParams.numB;

  if(operator === "add"){
    $scope.solution = parseInt(numA) + parseInt(numB);
  } else if(operator === "divide"){
      $scope.solution = parseInt(numA) / parseInt(numB);
  }
});
