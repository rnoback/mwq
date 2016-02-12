(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('homeController', 
        ['$scope', '$filter', 
        function($scope, $filter) {

            //var box = $('.test-sheet');
           //TweenMax.to($('.slide'), 2, {x: -700, ease:Expo.easeInOut});

           console.log("Home MWQ Controller !!");

           // hamburger toggle
           $( "#nav-toggle" ).on( "click", function(evt) {
                // /$this = $(evt.target);

                evt.preventDefault();
                // Active trigger CSS hamburger animation -> _header.scss
                this.classList.toggle( "active" );

            });


        }]);
}());