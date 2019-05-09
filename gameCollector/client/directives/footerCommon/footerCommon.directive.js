angular.module('gameCollectorApp')
  .directive('footerCommon', function () {
    return {
      restrict: 'EA',
      templateUrl: '/directives/footerCommon/footerCommon.template.html'
  };
});
