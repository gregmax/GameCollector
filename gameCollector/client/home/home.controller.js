angular.module('gameCollectorApp')
  .controller('homeCtrl', ['$scope', 'gameCollectorData', function($scope, gameCollectorData) {
    var vm = this;
    $scope.entries = gameCollectorData.query();

    var entryNames = gameCollectorData.query(function() {
      for (var i = 0; i < $scope.entries.length; i++) {
        console.log($scope.entries[i].name);
  }
});


    $scope.propertyName = 'name';
    $scope.reverse = false;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    vm.pageHeader = {
      title: 'Game Collector',
      tagline: 'Track and maintain your game collection'
    };

  }])