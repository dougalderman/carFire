var app = angular.module('carFire', ['ui.router', 'firebase']);

app.config(function ($stateProvider, $urlRouterProvider) {

   
    // routing configuration code

    $urlRouterProvider
      .otherwise('/cars');

      $stateProvider
  	    .state('cars', {
  			    templateUrl: 'js/carsTmpl.html',
  			    url: '/cars',
                controller: 'carsCtrl'
        })
        .state('car', {
            templateUrl: 'js/carTmpl.html',
            url: '/cars/:carId',
            controller: 'carCtrl'
        });

});
