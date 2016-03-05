;(function (){


// Module
var mwqApp  = angular.module('mwqApp',
    ['ngRoute', 'ngResource', 'firebase']);

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

    .when('/quiz', {
        templateUrl: 'html/pages/quiz.html',
        controller: 'quizController'
    })

    .when('/info', {
        templateUrl: 'html/pages/info.html',
        controller: 'infoController'
    })
});


mwqApp.controller('mainCtrl', ['$scope', function($scope) {
	    			    	
    $scope.mobNavVisible = false;

    // hamburger toggle
    $( "#nav-toggle" ).on( "click", function(evt) {
        // /$this = $(evt.target);

        evt.preventDefault();
        // Active trigger CSS hamburger animation -> _header.scss
        this.classList.toggle( "active" );
        
        if(!$scope.mobNavVisible){
          TweenMax.to($('#main-nav-mobile'), .5, {top: 60, ease:Expo.easeOut});
          $scope.mobNavVisible = true;
        }else{
          TweenMax.to($('#main-nav-mobile'), .5, {top: -180, ease:Expo.easeInOut}); 
          $scope.mobNavVisible = false;
        }
    });

    $(".nav-btn").on('click', function(evt){
        $(".nav-btn").removeClass('active');
        target = $(evt.target);
        target.addClass('active');

        TweenMax.to($('#main-nav-mobile'), .5, {top: -180, ease:Expo.easeInOut}); 
        $scope.mobNavVisible = false;
        $( "#nav-toggle" ).removeClass( "active" );
    });
    
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