app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contacts = [
    {
      name: "Alice",
      email: "Alice@wonderland.com",
      phone: "123-456-7890",
      id: 0,
      gif: "http://media1.giphy.com/media/QzpYnwlB4Xsze/200.gif"
    },
    {
      name: "Jack",
      email: "farmboy@beanstalk.com",
      phone: "321-654-0987",
      id: 1,
      gif: "http://jerome.boulinguez.free.fr/english/img/beanstalk.gif"
    },
    {
      name: "Susie",
      email: "cutie@que.com",
      phone: "987-678-4321",
      id: 2,
      gif: "http://media1.giphy.com/media/saplKfepDZnpK/200.gif"
    }
  ];

  ContactList.addContact = function($scope, $http) {
    if($scope.newPerson.$valid){
      var newId = ContactList.contacts.length;
      var newGif = "";
      $http.get('http://api.giphy.com/v1/gifs/search?q='+ $scope.name +'&api_key=dc6zaTOxFJmzC')
      .success(function(data){
        console.log(data);
        newGif = data.data[0].images.fixed_height.url;
      var newInfo=
        {
          name: $scope.name,
          email: $scope.email,
          phone: $scope.phone,
          id: newId,
          gif: newGif,
        };
        // console.log(newInfo);
      ContactList.contacts.push(newInfo);
      console.log(ContactList.contacts);
      });
    }
  };


  ContactList.findContact = function(scope, id) {
 //TODO
  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});

