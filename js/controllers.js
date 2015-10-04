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
  $scope.message = "portfolio-testing";
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

app.controller('test', function($scope){
  $scope.message = "HOLA";
});

/// API Controller  ///
app.controller('Api', function($scope, $http){
  $http.get('https://api.github.com/zen').then(function(data){
    //below gets all kinds of crazy info
    // $scope.zenData = data;
    $scope.zenData = data.data;
  });

  $http.get('/itunes.json').then(function(data){
    $scope.songData = data.data.results;
  });

// Working, but 800+ messages = absurd
  $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    .success(function(data){
      $scope.railsMessages = data;
    });

  $scope.sendPost = function(){
    console.log("WOOT");

      $http.post('https://shielded-peak-6345.herokuapp.com/messages', {message:{name: $scope.name, content: $scope.content}}).then(function(data){
        console.log(data);
        $scope.name = '';
        $scope.content = '';
        $scope.confirm = "Success!";
    });
  };

});


app.controller('moviesController', ['$scope', '$http', function($scope, $http){
  $scope.allMovies = false;
  $scope.singleMovie = false;
  $scope.none = false;

  $scope.findMovie = function(){
    var movieTitle = $scope.movieTitle;
    $scope.none = false;
    console.log($scope.movieTitle);
    $http.get('http://www.omdbapi.com/?type=movie&s='+ movieTitle)
      .success(function(data){
        $scope.movies = data.Search;
        if(data.Search === undefined){
          $scope.none = true;
        }
        console.log($scope.movies);
        $scope.allMovies = true;
      });
  };


  $scope.movieDetails = function(){
    $scope.allMovies = false;
    $scope.singleMovie = true;
    $http.get('http://www.omdbapi.com/?i='+ this.movie.imdbID+'&plot=full&r=json').success(function(data){
    $scope.singleMovie = data;
    console.log($scope.singleMovie);
    });
  };

}]);



app.controller("contacts", ['$scope', '$http', 'ContactList', function($scope, $http, ContactList){
  $scope.contacts = ContactList.contacts;
  //Below does not work on its own
  // ContactList.addContact($scope);
  $scope.newContact = function(){
      ContactList.addContact($scope, $http);
   };

}]);



app.controller("showContact", ['$scope', '$routeParams', 'ContactList', function($scope, $routeParams, ContactList){
  // $scope.singleContact = "test";
  var id = $routeParams.id;
  $scope.singleContact = ContactList.contacts[id];
  console.log($scope.singleContact, "singleContact");
}]);
//end contacts




// //Not Working
// app.controller('CalculatorController2', function($scope, $location){
//   var numX = $location.search().x;
//   console.log(numX);

// });

