// var myApp = angular.module("myApp", []);
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

// myApp.factory('Avengers', function() {
//   var Avengers = {};

//   Avengers.cast = [
//     {name: 'Alex', character: 'The Other'},
//     {name: 'Rob', character: 'Loki'},
//     {name: 'Dan', character: 'Ronni'},
//     {name: 'John', character: 'Bum'},
//     {name: 'Steve', character: 'Nick Fury'}
//   ];

//   return Avengers;
// });

// function AvengersCtrl($scope, Avengers) {
//   $scope.avengers = Avengers;
// }



// #10
// var app = angular.module('superhero', []);

// element
// app.directive('superman', function(){
//   return {
//     restrict: 'E',
//     template: "<div>Here I am to save the day.</div>"
//   };
// });

//attribute
// app.directive('superman', function(){
//   return {
//     restrict: 'A',
//     link: function() {
//       alert("I'm working");
//     }
//   };
// });

//class
// app.directive('superman', function(){
//   return {
//     restrict: 'C',
//     link: function() {
//       alert("I'm working");
//     }
//   };
// });

// //comment
// app.directive('superman', function(){
//   return {
//     restrict: 'M',
//     link: function() {
//       alert("I'm working");
//     }
//   };
// });



//12
var app = angular.module('behaviorApp', []);

app.directive('enter', function() {
  return function(scope, element, attrs) {
      element.bind('mouseenter', function(){
        element.addClass(attrs.enter);
      });
    };
});

app.directive('leave', function() {
  return function(scope, element, attrs) {
      element.bind('mouseleave', function(){
        element.removeClass(attrs.enter);
      });
    };
});





