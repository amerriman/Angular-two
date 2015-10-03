app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contacts = [
    {
      name: "Alice",
      email: "Alice@wonderland.com",
      phone: "123-456-7890"
    },
    {
      name: "Jack",
      email: "farmboy@beanstalk.com",
      phone: "321-654-0987"
    },
    {
      name: "Susie",
      email: "cutie@que.com",
      phone: "987-678-4321"
    }
  ];

  ContactList.addContact = function($scope) {
    if($scope.newPerson.$valid){
      var newInfo=
        {
          name: $scope.name,
          email: $scope.email,
          phone: $scope.phone,
        };
        // console.log(newInfo);
      ContactList.contacts.push(newInfo);
    }
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});


// app.factory('ContactList', function() {

//   ContactList.addContact = function($scope, $http) {
//     if($scope.newContactData.$valid){
//       var profilePic;
//       var newId = ContactList.contacts.length;
//        var useName = $scope.name.split(' ')[0];
//         $http.get('http://api.giphy.com/v1/gifs/search?q='+useName+'&api_key=dc6zaTOxFJmzC')
//         .success(function(data){
//           profilePic = data.data[0].images.fixed_height.url;
//           var newPeep=
//             {
//               name: $scope.name,
//               email: $scope.email,
//               phone: $scope.phone,
//               id: newId,
//               image: profilePic
//             };
//           ContactList.contacts.push(newPeep);
//           $scope.name = $scope.email = $scope.phone = ('');
//           });
//         }
//     };

//   ContactList.singleContact = function($scope, $http, userId){
//     var useName;
//     for (var i = 0; i < $scope.contacts.length; i++) {
//       if(+$scope.contacts[i].id === +userId){
//         $scope.userData = $scope.contacts[i];
//       }
//     }
//   };
//   return ContactList;
// });
