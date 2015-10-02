// JavaScript Document
		
var app = angular.module('myList', []);
app.controller('groceryList', function ($scope){
	$scope.addItem;
	$scope.newItem = ""; 
	
	$scope.groceries = ['Milk','Eggs','Lunch Meat'];
	
	//add item
 
	
	$scope.addItem= function(){	
	if($scope.newItem===""){
     alert("Must add an item!");
} else { 
		$scope.groceries.push($scope.newItem);
		$scope.newItem = '';
	}};
	
	//remove item
	
	$scope.removeItem = function(item){
		var idx = $scope.groceries.indexOf(item);
			$scope.groceries.splice(idx,1);
	};

});

