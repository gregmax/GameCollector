angular.module('gameCollectorApp')
  .controller('addEntryCtrl', ['$scope', '$routeParams', 'gameCollectorData', function($scope, $routeParams, gameCollectorData) {
    
    $scope.create = function() {
		var entry = new gameCollectorData({
			name: this.name,
			platform: this.platform,
			condition: this.condition,
		});

    entry.$save(function(response) {
		$location.path('entries/' + response._id);
	}, function(errorResponse) {
		$scope.error = errorResponse.data.message;
	});
};

}])