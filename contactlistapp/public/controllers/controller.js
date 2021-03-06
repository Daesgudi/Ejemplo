var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log("Hello World form controller");

var refresh = function() {
  $http.get('/contactlist').then(function(response){
	console.log("I got the data I requested");
	$scope.contactlist = response.data;
	$scope.contact= null;
});
};

refresh();

	$scope.addContact  = function(){
		console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).then(function(res){
			console.log(res);
			refresh();
		});
	};
 
 $scope.remove = function(id){
	console.log(id); 
	$http.delete('/contactlist/'  +id).then(function(response){
		refresh();
	});
 };
 
 $scope.edit = function(id){
	 console.log(id);
	 $http.get('/contactlist/' + id).then(function(response){
		$scope.contact =response.data; 
	 });
 };
 
 $scope.update = function(){
	console.log($scope.contact._id); 
	$http.put('/contactlist/'+ $scope.contact._id, $scope.contact).then(function(response){
		refresh();
	});
 };
$scope.deselect = function(){
	$scope.contact =null;
}
}]);

