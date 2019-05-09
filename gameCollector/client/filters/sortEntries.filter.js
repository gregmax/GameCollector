//angular.module('gameCollectorApp')
  //.filter('sortEntries', sortEntries);

    $scope.entries = gameCollectorData;

    $scope.propertyName = 'name';
    $scope.reverse = false;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };