angular.module('gameCollectorApp')
  .directive('conditionStatus', function () {
    return {
    restrict: 'EA',
    scope: {
      thisCondition: '=condition'
	},
  templateUrl: '/directives/conditionStatus/conditionStatus.template.html'
  };
});
