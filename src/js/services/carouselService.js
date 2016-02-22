(function () {
    'use strict';
    
    angular.module('mwqApp').service('carouselService', ['$filter', function($filter){

       this.startCarousel = function(){
       		$('.flexslider').flexslider({
       			directionNav:false,
       			keyboard: false
       		});
       }

    }]);
}());