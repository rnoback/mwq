(function () {
    'use strict';
    
    angular.module('mwqApp').service('globalService', ['$filter', function($filter){
        var self = this;

        this.viewportWidth;
		this.viewportHeight;

    }]);
}());