(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('quizController', 
        ['$scope', '$filter', 'globalService',
        function($scope, $filter, $globalService) {

            //QUIZ CALCULATION

            // Answer event
            $('.q__item').on('click', function(evt){
                evt.preventDefault();
                
                var target = $( evt.target );
                var item = target.parent();
                var container = target.parent().parent();
               
                container.find('.q__item').removeClass('active');

                var answer = item.data('answer');
                var question = container.data('question'); 
                item.addClass('active');
                $scope.slideOutNext();

                console.log("answer "+answer);
                console.log("question "+question);
            });


            // Footer dot paging
            $scope.setupDotPaging = function(maxPages, curPage){
                var dotContainer = $('footer').find('.quiz-paging');
                var dotMarkup = "<li><span></span></li>";
                var dotMarkupActive = "<li><span class='active'></span></li>";
                var dotMarkupAdd = "";
                for (var i=0; i<maxPages; i++ ){
                    if(i===curPage){
                        dotMarkupAdd += dotMarkupActive;
                    }else{
                        dotMarkupAdd += dotMarkup;
                    }
                }
                dotContainer.html(dotMarkupAdd);
            }


            // QUIZ FUNCTIONALITY
            var pageContainer = $('.pages');
            $scope.speed = 0.75;

            $scope.arrPages = [];
            // Get all pages in array
            $scope.arrPages = pageContainer.find('.page');

            $scope.maxPages = $scope.arrPages.length;
            $scope.pageWidth = pageContainer.width();

            $scope.count = 0;

            $scope.setupDotPaging($scope.maxPages, $scope.count);

            $scope.slideInNext = function (){

                TweenMax.fromTo( $($scope.arrPages[$scope.count]), $scope.speed, 
                    {x:$globalService.viewportWidth, opacity:0}, {x: 0, opacity:1, ease:Expo.easeInOut});
            }
            $scope.slideInPrev = function (){

                TweenMax.fromTo( $($scope.arrPages[$scope.count]), $scope.speed, 
                    {x:-$scope.pageWidth, opacity:0}, {x: 0, opacity:1, ease:Expo.easeInOut});
            }

            $scope.slideOutPrev = function (){
                $scope.posOutX = $scope.calcOutX();
                TweenMax.fromTo( $($scope.arrPages[$scope.count]), $scope.speed, 
                    {x: 0, opacity:1}, {x: $scope.posOutX, opacity:0, onComplete:$scope.prevPage, ease:Expo.easeInOut});
            }

            $scope.slideOutNext = function (){
                $scope.posOutX = $scope.calcOutX();
                TweenMax.fromTo( $($scope.arrPages[$scope.count]), $scope.speed, 
                   {x: 0, opacity:1}, {x: -($scope.posOutX), opacity:0, onComplete:$scope.nextPage, ease:Expo.easeInOut});
            }

            $scope.nextPage = function (){

                $($scope.arrPages[$scope.count]).addClass("hide");
                $($scope.arrPages[$scope.count]).find('.quiz__nav--next').show();
                
                if($scope.count < $scope.maxPages){
                    $scope.count++;
                }
                //Make next page visible
                
                $($scope.arrPages[$scope.count]).removeClass("hide");
               
                
                $scope.slideInNext();
                $(window).scrollTop(0);
                // Dot paging
                $scope.setupDotPaging($scope.maxPages, $scope.count);
            }

            $scope.prevPage = function (){

                $($scope.arrPages[$scope.count]).addClass("hide");
                if($scope.count > 0){
                    $scope.count--;
                }
                //Make previous page visible
                $($scope.arrPages[$scope.count]).removeClass("hide");
                $scope.slideInPrev();
                $(window).scrollTop(0);

                // Dot paging
                $scope.setupDotPaging($scope.maxPages, $scope.count);
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
                return ($scope.pageWidth - $globalService.viewportWidth) / 2;
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

            
            // Make quiz visible
            TweenMax.to( $('.quiz'), 1, {opacity:1, ease:Strong.easeInOut});

        }]);
}());