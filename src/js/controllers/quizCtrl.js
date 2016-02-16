(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('quizController', 
        ['$scope', '$filter', 
        function($scope, $filter) {

            //var box = $('.test-sheet');
            //TweenMax.to($('.slide'), 2, {x: -700, ease:Expo.easeInOut});
            /*var displayPortWidth = $(window).width();
           
            var s1 = $('.s1');
            var s2 = $('.s2');


            var slideOut = function (element){
                var displayPortWidth = $(window).width();
                var elementWidth = -($('.main').width() + 20);

                console.log("displayPortWidth "+ displayPortWidth);
                console.log("elementWidth "+ elementWidth);

                TweenMax.to(element, 1.25, {x: elementWidth, opacity:0, onComplete:slideIn, ease:Expo.easeInOut});
            }

            var slideIn = function (element){
                s1.addClass('hide');
                s2.removeClass('hide');
                
                $(window).scrollTop(0);
               // TweenMax.to(s2, 1.25, {x: -displayPortWidth, opacity:1, ease:Expo.easeInOut});
            }

            console.log("Quiz MWQ Controller !!");

            $('.quiz__nav--start').on('click', function(evt){
                
                slideOut(s1);
            });

            $('.quiz__nav--prev').on('click', function(evt){
                $('.s1').removeClass('hide');
                $('.s2').addClass('hide');
                //$('.main').scrollTop();
                $(window).scrollTop(0);
            });
            */
            var id = setInterval(function(){
                var displayPortHeight = $(window).height();
                $('.fill-height-vcenter').height(displayPortHeight);
            }, 100);
            

        }]);
}());