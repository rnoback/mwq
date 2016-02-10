;(function (){


// Module
var mwqApp  = angular.module('mwqApp',
    ['ngRoute', 'ngResource']);


//Routes
mwqApp.config(function ($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'html/pages/home.html',
        controller: 'homeController'
    })
    
    .when('/home', {
        templateUrl: 'html/pages/home.html',
        controller: 'homeController'
    })
    /*
    .when('/area', {
        templateUrl: 'html/pages/default.html',
        controller: 'areaController'
    })
    .when('/volume', {
        templateUrl: 'html/pages/default.html',
        controller: 'volumeController'
    })
     .when('/dry-volume', {
        templateUrl: 'html/pages/default.html',
        controller: 'dryVolumeController'
    })
    .when('/mass', {
        templateUrl: 'html/pages/default.html',
        controller: 'massController'
    })
    .when('/power', {
        templateUrl: 'html/pages/default.html',
        controller: 'powerController'
    })
    .when('/energy', {
        templateUrl: 'html/pages/default.html',
        controller: 'energyController'
    })
    .when('/force', {
        templateUrl: 'html/pages/default.html',
        controller: 'forceController'
    })
    .when('/temperature', {
        templateUrl: 'html/pages/default.html',
        controller: 'temperatureController'
    })
    .when('/velocity', {
        templateUrl: 'html/pages/default.html',
        controller: 'velocityController'
    })
    .when('/acceleration', {
        templateUrl: 'html/pages/default.html',
        controller: 'accelerationController'
    })    
    .when('/time', {
        templateUrl: 'html/pages/default.html',
        controller: 'timeController'
    })   
    .when('/data', {
        templateUrl: 'html/pages/default.html',
        controller: 'dataController'
    })
    .when('/angle', {
        templateUrl: 'html/pages/default.html',
        controller: 'angleController'
    })    

    .when('/currency', {
        templateUrl: 'html/pages/currency.html',
        controller: 'currencyController'
    })
    
    .when('/converter', {
        templateUrl: 'html/pages/default.html',
        controller: 'converterController'
    });
    */
});



 mwqApp.controller('mainCtrl', ['$scope', function($scope) {
	    			    	

	function resizeBg() {
					
	}

    
	//theWindow.resize(resizeBg).trigger("resize");
     
 }]);

/*
mwqApp.directive('unitSelector', function($timeout){
     return {
        templateUrl: 'html/directives/unitselector.html',
        replace: true
     };
});

mwqApp.directive('unitWrap', function($timeout){
    return {
        templateUrl: 'html/directives/unitwrap.html',
        replace: true,
        scope: {
            unitObject:'=',
            calculateUnits: "&"
        },
        link: function (scope, element, attrs){
          scope.clickMe = function(obj){

            var v = element.find('.uc-input').val();
            scope.calculateUnits( {aunit:obj, avalue:v} );  
          }
        } 
    };
});

mwqApp.directive('unitWrapTemperature', function($timeout){
    return {
        templateUrl: 'html/directives/unitwrapTemperature.html',
        replace: true,
        scope: {
            unitObject:'=',
            calculateUnits: "&"
        },
        link: function (scope, element, attrs){
          scope.clickMe = function(obj){

            var v = element.find('.uc-input').val();
           
            scope.calculateUnits( {aunit:obj, avalue:v} );  
          }
        }  
    };
});
*/
}());