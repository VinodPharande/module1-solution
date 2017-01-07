(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  // 1. Attach $inject property to the function obejct: more effidient way
  LunchCheckController.$inject = ['$scope','$injector'];

  function LunchCheckController($scope, $injector) {

    $scope.feedMessage = function(){
      if ($scope.FoodValues) {
         $scope.splitstring($scope.FoodValues,',');
      }else{
        $scope.message = 'Please enter data first';
      }
    }

    $scope.splitstring = function (stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
         if (arrayOfStrings.length <= 3) {
            $scope.message = "Enjoy";
         }else{
           $scope.message = "Too much";
         }
      }
  console.log($injector.annotate(LunchCheckController));
  }
})();
