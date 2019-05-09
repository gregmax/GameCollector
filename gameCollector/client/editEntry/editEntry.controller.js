angular.module('gameCollectorApp')
  .controller('editEntryCtrl', ['$scope', '$routeParams', 'gameCollectorData', function($scope, $routeParams, gameCollectorData) {
  	$scope.findOne = function() {
      $scope.entry = gameCollectorData.get({
        entryId: $routeParams.id
      });
    };
    
	$scope.update = function() {
		$scope.article.$update(function() {
			$location.path('entries/' + $scope.entry._id);
		}, function(errorResponse) {
			$scope.error = errorResponse.data.message;
		});
	};

}])