(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('quizController', 
        ['$scope', '$filter', 
        function($scope, $filter) {

            //var box = $('.test-sheet');
           //TweenMax.to($('.slide'), 2, {x: -700, ease:Expo.easeInOut});

           console.log("Quiz MWQ Controller !!");
           $scope.mobNavVisible = false;

           // hamburger toggle
           $( "#nav-toggle" ).on( "click", function(evt) {
                // /$this = $(evt.target);

                evt.preventDefault();
                // Active trigger CSS hamburger animation -> _header.scss
                this.classList.toggle( "active" );
                
                if(!$scope.mobNavVisible){
                  TweenMax.to($('#main-nav-mobile'), .75, {top: 60, ease:Expo.easeOut});
                  $scope.mobNavVisible = true;
                }else{
                  TweenMax.to($('#main-nav-mobile'), .75, {top: -180, ease:Expo.easeInOut}); 
                  $scope.mobNavVisible = false;
                }
            });


        }]);
}());