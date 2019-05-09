angular.module('gameCollectorApp')
  .controller('entryDetailCtrl', ['$scope', '$routeParams', '$http', 'apiData', 'gameCollectorData', function($scope, $routeParams, $http, apiData, gameCollectorData) {

    var entry = gameCollectorData.get({
        entryId: $routeParams.id
      });

      $scope.entry = entry;

     var name = entry.name;

    //  var data = $resource('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=1&offset=0&search=zelda', {
    //   // entryName: '@entryName',
    //   'get': {
    //     headers: {
    //       "x-mashape-key": 'l5S3MyI0TDmshog4ABqtdzZFkBnBp1Ig3OtjsnNLJ41bMz7DMP'
    //     }
    //   }
    // });

    //  $scope.information = data;

      $scope.information = apiData.get({
        entryName: name
      });

// var apiData = $http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=1&offset=0&search=zelda', {
//       headers: {
//         'X-Mashape-Key': 'l5S3MyI0TDmshog4ABqtdzZFkBnBp1Ig3OtjsnNLJ41bMz7DMP',
//         'Accept': 'application/json'
//       }
//     });

// $scope.information = apiData;
  // };

  // $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
  //       then(function(response) {
  //         $scope.status = response.status;
  //         $scope.data = response.data;
  //       }, function(response) {
  //         $scope.data = response.data || 'Request failed';
  //         $scope.status = response.status;
  //     });
  //   };

    $scope.delete = function(entry) {
      if (entry) {
        entry.$remove(function() {
          for (var i in $scope.entries) {
            if ($scope.entries[i] === entry) {
              $scope.entries.splice(i, 1);
            }
          }
        });
      } else {
        $scope.entry.$remove(function() {
          $location.path('entries');
        });
      }
    };

}])

  // entryName: $routeParams.name

// $scope.gameAPI = $resource("")