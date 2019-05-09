angular.module('gameCollectorApp')
  .controller('aboutCtrl', function () {
	  var vm = this;

	  vm.pageHeader = {
        title: 'About Game Collector',
	  };
	  vm.main = {
	    content: 'Game Collector is designed to help game collectors track and maintain their game collections on the web.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.'
	  };
  })