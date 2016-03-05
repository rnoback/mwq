(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('homeController', 
        ['$scope', '$filter', 'globalService', 'carouselService',
        function($scope, $filter, $globalService, $carouselService) {

            //var box = $('.test-sheet');
           //TweenMax.to($('.slide'), 2, {x: -700, ease:Expo.easeInOut});

            // Set navigation button active
            $(".nav-btn").removeClass('active');
            $('.btn-home').addClass('active');
            $(window).scrollTop(0);

           var extraInfoOpen = false;
           
           // should be in a service 
           var pageContainer = $('.pages');

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


            $(window).on('resize', function(){
                $scope.setViewportHeight();
                $('.fill-height-vcenter').height( $globalService.viewportHeight );
                $scope.setViewportWidth();
                $scope.pageWidth = pageContainer.width();
            });

            // Events
            $('.main__quiz--start').on('click', function(evt){
                document.location.href='#/quiz';
            });

             // Blocklink--more
             $('.blocklink--more').on('click', function(evt){
                evt.preventDefault();
                var target = $(evt.target);
                if(extraInfoOpen){
                    target.parent().parent().parent().removeClass('extra-info');
                    target.html('Lees meer <i class="fa fa-angle-right">&nbsp;</i>');
                    extraInfoOpen = false;
                }else{
                    target.parent().parent().parent().addClass('extra-info');
                    target.html('<i class="fa fa-angle-left">&nbsp;</i> Lees minder');
                    extraInfoOpen = true;
                }

             });

            // Make quiz visible
            TweenMax.fromTo( $('.main-page'), 1, {opacity:0}, {opacity:1, ease:Strong.easeInOut});
            TweenMax.fromTo( $('footer'), .75, {bottom:0}, {bottom:-35, ease:Strong.easeInOut});

            // Start afbeelding carousel
            $carouselService.startCarousel();
        }]);
}());