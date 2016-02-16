(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('quizController', 
        ['$scope', '$filter', 'globalService',
        function($scope, $filter, $globalService) {

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
            var page = $('.pages');

            $scope.arr = [];
            $scope.arr = page.find('.page');

            $scope.maxPages = $scope.arr.length;
            $scope.pageWidth = page.width();



            $scope.count = 0;

            $scope.slideIn = function (){
                console.log("slideIN");
            }

            $scope.slideOut = function (){
                $scope.posOutX = $scope.calcOutX();
                TweenMax.to($scope.arr[$scope.count], 1.5, 
                    {x: -($scope.posOutX), opacity:1, onComplete:$scope.nextPage, ease:Expo.easeInOut});
            }

            $scope.nextPage = function (){

                $($scope.arr[$scope.count]).addClass("hide");
                if($scope.count < $scope.maxPages){
                    $scope.count++;
                }
                $($scope.arr[$scope.count]).removeClass("hide");
                //$scope.arr[$scope.count].className .display = 'block';
            }



            $scope.setViewportWidth = function(){
                $globalService.viewportWidth =  $(window).width();
            }
            $scope.setViewportWidth();

            $scope.setViewportHeight = function(){
                $globalService.viewportHeight =  $(window).height();
            }
            $scope.setViewportHeight();
            $('.fill-height-vcenter').height( $globalService.viewportHeight );

            $scope.calcOutX = function(){
                return ($globalService.viewportWidth / 2 + $scope.pageWidth / 2) + 10;
            }


            //Events
             $('.quiz__nav--start').on('click', function(evt){
                
                $scope.slideOut();
            });

            $(window).on('resize', function(){
                $scope.setViewportHeight()
                $scope.setViewportWidth();
                $scope.pageWidth = page.width();
            });

        }]);
}());