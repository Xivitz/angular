angular.module('alurapic').controller('FotosController', function($scope){

	$scope.fotos = [
		{
			titulo : 'Bateria RMV',
			url : './equipos/Batera/1.jpg' 
		},

		{
			titulo : 'Bateria RMV - Vista Superior',
			url : './equipos/Batera/2.jpg' 
		},

		{
			titulo : 'Bateria RMV - Vista Lateral',
			url : './equipos/Batera/3.jpg' 
		},

		{
			titulo : 'Strinberg V-2',
			url : './equipos/Strinberg V-2/1.jpg' 
		},

		{
			titulo : 'Cort Viva Series',
			url : './equipos/Cort/1.jpg' 
		},

		{
			titulo : 'Cort Viva Series',
			url : './equipos/Cort/2.jpg' 
		},

		{
			titulo : 'Cort Viva Series',
			url : './equipos/Cort/3.jpg' 
		},

		{
			titulo : 'Les Paul Shelter',
			url : './equipos/LP/1.jpg' 
		},

		{
			titulo : 'Les Paul Shelter',
			url : './equipos/LP/2.jpg' 
		},

		{
			titulo : 'Violão',
			url : './equipos/Violão/3.jpg' 
		},

		{
			titulo : 'Violão',
			url : './equipos/Violão/1.jpg' 
		},

		{
			titulo : 'POD HD 400',
			url : './equipos/POD/2.jpg' 
		},

		{
			titulo : 'POD HD 400',
			url : './equipos/POD/1.jpg' 
		},

		{
			titulo : 'POD HD 400',
			url : './equipos/POD/3.jpg' 
		},

		{
			titulo : 'Violão',
			url : './equipos/Violão/2.jpg' 
		},
	];

	$scope.filtro = '';

});