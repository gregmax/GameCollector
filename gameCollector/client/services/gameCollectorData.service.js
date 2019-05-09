angular.module('gameCollectorApp')
  .factory('gameCollectorData', ['$resource', function($resource) {
    return $resource('/api/entries/:entryId', {
			entryId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
}]);

/* 
  return [{
			name: 'Burnout 2: Point of Impact',
			platform: 'NGC',
			publisher: 'Acclaim',
			condition: ['Y', 'Y', 'Y']
		},{
			name: 'Sonic The Hedgehog',
			platform: 'GEN',
			publisher: 'Sega',
			condition: ['N', 'N', 'Y']
		},{
			name: 'Neo Contra',
			platform: 'PS2',
			publisher: 'Konami',
			condition: ['Y', 'N', 'Y']
		}];
})
*/