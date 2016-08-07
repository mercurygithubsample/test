var app = angular.module("mainApp", []);
var ctrl = function HelloController($scope){
	$scope.greeting = {text: 'Hello'};
}
app.controller("HelloController", ctrl);