(function () {
    /* jshint -W071 */
    'use strict';
    var mwqApp = angular.module('mwqApp');
    
    mwqApp.controller('quizController', 
        ['$scope', '$filter', 'globalService', 'answersService', '$firebaseArray',
        function($scope, $filter, $globalService, $answersService, $firebaseArray) {

            
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            // FIREBASE TEST
            var ref = new Firebase('https://mwq.firebaseio.com/');
            $scope.messages = $firebaseArray(ref);
            //console.log($scope.messages);
            // save to firbase
            // $scope.messages.$add({ q1: "testen"});


            // answers to text principal
            var a = 'A';
            for(var key in $answersService.Q1){
                if(key === a)  {            
                    //console.log('val ' + $answersService.Q1[a]);
                }
            }
            //////////////////////////////////////////////////////////////////////////////////////////////////////



            //QUIZ CALCULATION
            // Answer event
            $('.q__item').on('click', function(evt){
                evt.preventDefault();
                
                var target = $( evt.currentTarget );
                var container = target.parent();
               
                container.find('.q__item').removeClass('active');

                var answer = target.data('answer');
                var question = container.data('question');
                target.addClass('active');
                $scope.slideOutNext();

                //console.log("answer "+answer);
                //console.log("question "+question);

                $answersService.addAnwser(question, answer);
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

            // set naviagiotn button active
            $('.btn-quiz').addClass('active');

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
                    $answersService.currentQuestion = $scope.count;
                }
                //Make next page visible
                $($scope.arrPages[$scope.count]).removeClass("hide");

                // Last qustion done, do the calculation
                if($scope.count === ($scope.maxPages -8)) {
                    console.log("CALC IT");
                    for(var key in $answersService.answersObject){

                        console.log('key ' + key +  ' - val ' + $answersService.answersObject[key]);

                        $answersService.fillMusicArrays(key, $answersService.answersObject[key]);
                    
                    }

                    $answersService.getAllArrayLengths();
                }
                
                $scope.slideInNext();
                $(window).scrollTop(0);
                // Dot paging
                $scope.setupDotPaging($scope.maxPages, $scope.count);


               

                /*
                console.log("klassiek " +$answersService.classical.length);
                console.log("easy_jazz " +$answersService.easy_jazz.length);
                console.log("easy_listening " +$answersService.easy_listening.length);
                console.log("soul " +$answersService.soul.length);
                console.log("lounge " +$answersService.lounge.length);
                console.log("latin " +$answersService.latin.length);
                console.log("urban " +$answersService.urban.length);
                console.log("nederpop " +$answersService.nederpop.length);
                console.log("pop_ballads " +$answersService.pop_ballads.length);
                console.log("singer_songwriter " +$answersService.singer_songwriter.length);
                console.log("pop_classic " +$answersService.pop_classic.length);
                console.log("rock_classic " +$answersService.rock_classic.length);
                console.log("alternative " +$answersService.alternative.length);
                console.log("disco " +$answersService.disco.length);
                console.log("club_dance " +$answersService.club_dance.length);
                console.log("kids_hits " +$answersService.kids_hits.length);*/

            }

            $scope.prevPage = function (){

                $($scope.arrPages[$scope.count]).addClass("hide");
                if($scope.count > 0){
                    $scope.count--;
                    $answersService.currentQuestion = $scope.count;
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
            TweenMax.fromTo( $('.quiz'), 1, {opacity:0}, {opacity:1, ease:Strong.easeInOut});

            $('footer').show();
            TweenMax.fromTo( $('footer'), .75, {bottom:-35}, {delay: 0.5, bottom:0, ease:Strong.easeInOut});

        }]);
}());