angular.module('gameCollectorApp')
  .factory('apiData', ['$resource', function($resource) {
    return $resource('http://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=1&offset=0&search=zelda', 
    	{callback: 'JSON_CALLBACK'}, 
    	{ get: { method: "JSONP" }}, {
				headers: {
					"x-mashape-key": 'l5S3MyI0TDmshog4ABqtdzZFkBnBp1Ig3OtjsnNLJ41bMz7DMP',
					'Accept': 'application/json'
				}
			}
		);
}]);