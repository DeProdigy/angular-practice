var myApp = angular.module("myApp", []);
// myApp.factory('Data', function() {
//   return {message: "I'm data from a service"};
// });

// myApp.filter('reverse', function(){
//   return function(text){
//     return text.split('').reverse().join('');
//   };
// });

// function FirstCtrl($scope, Data) {
//   $scope.data = Data;
// }

// function SecondCtrl($scope, Data) {
//   $scope.data = Data;
// }

myApp.factory('Avengers', function() {
  var Avengers = {};

  Avengers.cast = [
    {name: 'Alex', character: 'The Other'},
    {name: 'Rob', character: 'Loki'},
    {name: 'Dan', character: 'Ronni'},
    {name: 'John', character: 'Bum'},
    {name: 'Steve', character: 'Nick Fury'}
  ];

  return Avengers;
});

function AvengersCtrl($scope, Avengers) {
  $scope.avengers = Avengers;
}


