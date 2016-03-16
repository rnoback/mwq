(function () {
    'use strict';
    
    angular.module('mwqApp').service('globalService', ['$filter', function($filter){
        var self = this;

        this.viewportWidth;
		this.viewportHeight;

		this.isValidEmailAddress = function(emailAddress)  {
        	var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        	return pattern.test(emailAddress);
    	};
    	

    }]);
}());