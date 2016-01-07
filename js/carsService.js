var app = angular.module('carFire');

app.service('carsService', function($firebaseObject, $firebaseArray) {
    
    var url = 'https://carfireapp35.firebaseio.com/';
        
    this.addCar = function(newCar) {
        var ref = new Firebase(url + 'cars');
        $firebaseArray(ref).$add(newCar);
    }
   
    this.getCars = function() {
        var ref = new Firebase(url + 'cars');
        return $firebaseArray(ref);
    }
    
    this.getCar = function(carId) {
        var ref = new Firebase(url+'cars/'+carId);
        return $firebaseObject(ref);
        
    }
    
    this.getComments = function(carId) {
        var ref = new Firebase(url+'comments/'+carId);
        return $firebaseArray(ref);
    }
    
});