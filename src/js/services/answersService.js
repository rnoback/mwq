(function () {
    'use strict';
    
    angular.module('mwqApp').service('answersService', ['$filter', function($filter){
        var self = this;

        this.classical = [];
        this.easy_jazz = [];
        this.easy_listening = [];
        this.soul = [];
        this.lounge = [];
        this.latin = [];
        this.urban = [];
        this.nederpop = [];
        this.pop_ballads = [];
        this.singer_songwriter = [];
        this.pop_classic = [];
        this.rock_classic = [];
        this.alternative = [];
        this.disco = [];
        this.club_dance = [];
        this.kids_hits = [];

        this.1a = {
        	klassiek = true,
        	easy_jazz = true,
        	easy_listening = true,
        	soul = true,
        	lounge = true,
        	latin = true,
        	urban = true,
        	nederpop = true,
        	pop_ballads = true,
        	singer_songwriter = true,
        	pop_classice = true,
        } 

    }]);
}());