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
  $scope.message = "tacos"
});
