// main.js
var app = angular.module('myApp', ['ngGrid','ui.bootstrap','ng-context-menu']);
app.controller('MyCtrl', function($scope,$http) {
    $scope.myData = [{name: "Location1", city: "Mumbai", Pincode:"12312"},
                     {name: "Location2", city: "Delhi"},
                     {name: "Location3", city: "Kolkota"},
                     {name: "Location4", city: "Chennai"},
                     {name: "Location5", city: "Hyderabad"}];
    $scope.gridOptions = { data: 'myData' };
	$scope.gridOptions1 = { data: 'myData' };
    $http.get('http://localhost:49631/api/Values').success(function (data) {
            $scope.customers =  data;
            $scope.loading = false;
        })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });
		$scope.gridOptions1 = { data: 'customers' };
});