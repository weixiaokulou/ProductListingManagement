var myApp = angular.module('myApp');

myApp.controller('ItemsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('ItemsController loaded...');

  $scope.getItems = function(){
    $http.get('/api/items').success(function(response){
      $scope.items = response;
    });
  }

  $scope.getItem = function(){
    var id = $routeParams.id;
    $http.get('/api/items/'+id).success(function(response){
      $scope.item = response;
    });
  }

  $scope.searchItem = function(){
    // var key = $roconsole.log()
    var title = $routeParams.title;
    $http.get('/api/items/list/'+title).success(function(response){
      $scope.searchItems = response;
    });
  }

  $scope.searchKey = function(){
    window.location.href='#/items/search/'+$scope.key;
  }


  $scope.addItem = function(){
    $http.post('/api/items/', $scope.newItem).success(function(response){
      window.location.href='#/items';
    });
  }

  $scope.updateItem = function(){
    var id = $routeParams.id;
    $http.put('/api/items/'+id, $scope.item).success(function(response){
      window.location.href='#/items';
    });
  }

  $scope.removeItem = function(id){
    var id = $routeParams.id;
    $http.delete('/api/items/'+id).success(function(response){
      window.location.href='#/items';
    });
  }
}]);