angular.module('alurapic').controller('FotoController', function($scope) {
	
	$scope.foto = {};
	$scope.exibe = false;

	$scope.submeter = function(){
		console.log($scope.foto);
	};
});