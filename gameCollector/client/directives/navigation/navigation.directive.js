angular.module('gameCollectorApp')
  .directive('navigation', function () {
    return {
      restrict: 'EA',
      templateUrl: '/directives/navigation/navigation.template.html'
  };
});
