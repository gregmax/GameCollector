angular.module('gameCollectorApp')
  .filter('addHtmlLineBreaks', function () {
    return function (text) {
      var output = text.replace(/\n/g, '<br />');
	  return output;
  };
});