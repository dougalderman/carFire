var app = angular.module('carFire');

app.controller('carCtrl', function($scope, $stateParams, carsService) {

    var currentCarId = $stateParams.carId;
    
    $scope.car = carsService.getCar(currentCarId);
          
});
                                   
