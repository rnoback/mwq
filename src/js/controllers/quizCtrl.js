(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('quizController', 
        ['$scope', '$filter', 'globalService',
        function($scope, $filter, $globalService) {

            var pageContainer = $('.pages');
            $scope.speed = 0.75;

            $scope.arr = [];
            $scope.arr = pageContainer.find('.page');

            $scope.maxPages = $scope.arr.length;
            $scope.pageWidth = pageContainer.width();


            $scope.count = 0;


            $scope.slideInNext = function (){

                TweenMax.from( $($scope.arr[$scope.count]), $scope.speed, 
                    {x: $globalService.viewportWidth, opacity:0, ease:Expo.easeInOut});
            }
            $scope.slideInPrev = function (){
                $scope.posOutX = $scope.calcOutX();

                console.log($scope.posOutX);

                TweenMax.to( $($scope.arr[$scope.count]), $scope.speed, 
                    {x: $scope.posOutX, opacity:0, ease:Expo.easeInOut});
            }

            $scope.slideOutPrev = function (){
                $scope.posOutX = $scope.calcOutX();
                TweenMax.to( $($scope.arr[$scope.count]), $scope.speed, 
                    {x: $scope.posOutX, opacity:0, onComplete:$scope.prevPage, ease:Expo.easeInOut});
            }

            $scope.slideOutNext = function (){
                $scope.posOutX = $scope.calcOutX();
                TweenMax.to( $($scope.arr[$scope.count]), $scope.speed, 
                    {x: -($scope.posOutX), opacity:1, onComplete:$scope.nextPage, ease:Expo.easeInOut});
            }

            $scope.nextPage = function (){

                $($scope.arr[$scope.count]).addClass("hide");

                if($scope.count < $scope.maxPages){
                    $scope.count++;
                }

                $($scope.arr[$scope.count]).removeClass("hide");
                $scope.slideInNext();

            }

            $scope.prevPage = function (){

                $($scope.arr[$scope.count]).addClass("hide");
                if($scope.count > 0){
                    $scope.count--;
                }

                $($scope.arr[$scope.count]).removeClass("hide");
                $scope.slideInPrev();

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
                return ($globalService.viewportWidth / 2 + $scope.pageWidth / 2);
            }
            $scope.centerPoint = function(){
                return ($globalService.viewportWidth / 2 + $scope.pageWidth / 2) / 2;
            }


            //Events
             $('.quiz__nav--start').on('click', function(evt){
                
                $scope.slideOutNext();
            });

            $('.quiz__nav--next').on('click', function(evt){
                
                $scope.slideOutNext();
            });

            $('.quiz__nav--prev').on('click', function(evt){
                
                $scope.slideOutPrev();
            });

             

            $(window).on('resize', function(){
                $scope.setViewportHeight();
                $('.fill-height-vcenter').height( $globalService.viewportHeight );
                $scope.setViewportWidth();
                $scope.pageWidth = pageContainer.width();
            });

        }]);
}());