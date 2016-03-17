(function () {
    'use strict';
    
    angular.module('mwqApp').service('answersService', ['$filter', function($filter){
        var self = this;

        this.storyStringBuild = "";
        this.storyStringBuild_title = "";
        this.storyStringBuild_q1 = "";
        this.storyStringBuild_q2 = "";
        this.storyStringBuild_q3 = "";
        this.storyStringBuild_q4 = "";
        this.storyStringBuild_q5 = "";
        this.storyStringBuild_q6 = "";
        this.storyStringBuild_q7 = "";
        this.storyStringBuild_q8 = "";

        this.storyStringBuildSend = "";
        

        this.resultAnswersObject = {
            'A':'Nederlandstalig',
            'B':'Pop',
            'C':'Klassiek',
            'D':'Jazzy R&B',
            'E':'Rock',
            'F':'Soul Jazz'
        }

        this.resultAdviseObject = {
            'A': 'Soul Jazz / Pop', // NL
            'B': 'Nederlandstalig /Jazzy R&B / Rock', //Pop
            'C': 'Soul Jazz', //Klassiek
            'D': 'Soul Jazz / Pop', //Jazzy R&B
            'E': '<li><span>Pop</span> <span class="icon icon-pop"></span></li>', //ROCK
            'F': '<li><span>Pop</span> <span class="icon icon-pop"></span></li><li><span>Jazzy R&amp;B</span> <span class="icon icon-jazzrnb"></span></li><li><span>Klassiek</span> <span class="icon icon-klassiek"></span></li>' //SOUL JAZZ
        }



        this.clearMusicData = function(){
            self.storyStringBuild = "";

            self.classical = [];
            self.easy_jazz = [];
            self.easy_listening = [];
            self.soul = [];
            self.lounge = [];
            self.latin = [];
            self.urban = [];
            self.nederpop = [];
            self.pop_ballads = [];
            self.singer_songwriter = [];
            self.pop_classic = [];
            self.rock_classic = [];
            self.alternative = [];
            self.disco = [];
            self.club_dance = [];
            self.kids_hits = [];

        }

        this.answersObject = {};
        this.answersLengthObject = {};
        this.currentQuestion = 0;


        this.addAnwser = function(selQuestion, selAnwer){
            this.answersObject[selQuestion] = selAnwer;
        }
        this.removeAnwser = function(selQuestion){
            delete this.answersObject[selQuestion];
        }

        // A. nl 8, 16
        // B. pop 6, 9, 10, 11, 14, 15
        // C. klassiek 1
        // D. jazzy R&B 2
        // E. Rock 7, 12, 13
        // F. Soul, jazz 3, 4, 5

        this.getAllArrayLengths = function (){

           /* 
           console.log("#########################################################");
            console.log("1 klassiek " +self.classical.length );
            console.log("2 easy_jazz " +self.easy_jazz.length);
            console.log("3 easy_listening " +self.easy_listening.length);
            console.log("4 soul " +self.soul.length);
            console.log("5 lounge " +self.lounge.length);
            console.log("6 latin " +self.latin.length);
            console.log("7 urban " +self.urban.length);
            console.log("8 nederpop " +self.nederpop.length);
            console.log("9 pop_ballads " +self.pop_ballads.length);
            console.log("10 singer_songwriter " +self.singer_songwriter.length);
            console.log("11 pop_classic " +self.pop_classic.length);
            console.log("12 rock_classic " +self.rock_classic.length);
            console.log("13 alternative " +self.alternative.length);
            console.log("14 disco " +self.disco.length);
            console.log("15 club_dance " +self.club_dance.length);
            console.log("16 kids_hits " +self.kids_hits.length);
 
            //console.log("STRING: " +self.storyStringBuild);
            
            */
        }

        this.setupResultPage = function(){

            // Set variable in result page
            //8, 1, 3, 5, 4, 2, 7
            self.storyStringBuild = "<h2>"+ self.storyStringBuild_title + "</h2>";
            self.storyStringBuild += " " + self.storyStringBuild_q8;
            self.storyStringBuild += " " + self.storyStringBuild_q1;
            self.storyStringBuild += " " + self.storyStringBuild_q3;
            self.storyStringBuild += " " + self.storyStringBuild_q5;
            self.storyStringBuild += " " + self.storyStringBuild_q4;
            self.storyStringBuild += " " + self.storyStringBuild_q2;
            self.storyStringBuild += " " + self.storyStringBuild_q7;

            $('.answer-output-text').html(self.storyStringBuild);

            //console.log("storyStringBuild " + self.storyStringBuild);

            $('.quiz-end-result-title').html(self.endResultTitle);
            $('.quiz-end-result-text').html(self.endResultText);
            $('.result-advise-list').html(self.endResultAdvise);
            
            var str = self.endResultTitle.replace(/\s+/g, '-').toLowerCase();
            $('.result-image').attr('src', 'images/result/'+str + '.jpg');
            $('.result-music-icon').attr('src', 'images/result/'+str + '.svg');

            // Setup email client button with content
            /*$('.btn-email-advies').attr('href','mailto:?SUBJECT=Muziek Advies: '
                +self.endResultTitle.toUpperCase()+'&BODY='+self.endResultText+'')
            */
        }

       
        this.fillMusicArrays = function(selQuestion, selAnwer){

            //console.log("selQuestion " + selQuestion);
            //console.log("selAnwer " + selAnwer);

            selQuestion = parseInt(selQuestion);
            if(selQuestion && selAnwer){
                var currentAnswer = selAnwer.toUpperCase();
                switch (selQuestion) {
                    case 0:
                        break;

                    case 1:
                        if(currentAnswer === "A") {

                            this.classical.push('1A');
                            this.easy_jazz.push('1A');
                            this.easy_listening.push('1A');
                            this.soul.push('1A');
                            this.lounge.push('1A');
                            this.latin.push('1A');
                            this.urban.push('1A');
                            this.nederpop.push('1A');
                            this.pop_ballads.push('1A');
                            this.singer_songwriter.push('1A');
                            this.pop_classic.push('1A');
                            this.rock_classic.push('1A');
                            this.alternative.push('1A');
                            this.disco.push('1A');
                            this.club_dance.push('1A');
                            this.kids_hits.push('1A');

                        }else if(currentAnswer === "B") {
                            
                            this.easy_listening.push('1B');
                            this.soul.push('1B');
                            this.latin.push('1B');
                            this.nederpop.push('1B');
                            this.pop_ballads.push('1B');
                            this.singer_songwriter.push('1B');
                            this.pop_classic.push('1B');
                            this.rock_classic.push('1B');
                            this.disco.push('1B');
                            this.kids_hits.push('1B');


                        } else if(currentAnswer === "C") { 

                            this.easy_jazz.push('1C');
                            this.easy_listening.push('1C');
                            this.soul.push('1C');
                            this.lounge.push('1C');
                            this.latin.push('1C');
                            this.urban.push('1C');
                            this.nederpop.push('1C');
                            this.pop_ballads.push('1C');
                            this.singer_songwriter.push('1C');
                            this.pop_classic.push('1C');
                            this.rock_classic.push('1C');
                            this.alternative.push('1C');
                            this.disco.push('1C');
                            this.club_dance.push('1C');

                        } else if(currentAnswer === "D") {

                            this.classical.push('1D');
                            this.easy_jazz.push('1D');
                            this.easy_listening.push('1D');
                            this.soul.push('1D');
                            this.lounge.push('1D');
                            this.pop_ballads.push('1D');
                            this.singer_songwriter.push('1D');
                            this.pop_classic.push('1D');
                            
                        } else if(currentAnswer === "E") { 
                            this.easy_jazz.push('1E');
                            this.easy_listening.push('1E');
                            this.soul.push('1E');
                            this.lounge.push('1E');
                            
                            this.pop_ballads.push('1E');
                            this.singer_songwriter.push('1E');
                            this.pop_classic.push('1E');
                            this.rock_classic.push('1E');
                            

                        } else if(currentAnswer === "F") {
                            
                            this.easy_jazz.push('1F');
                            this.easy_listening.push('1F');
                            this.soul.push('1F');
                            this.lounge.push('1F');
                            this.latin.push('1F');
                            this.urban.push('1F');
                            this.nederpop.push('1F');
                            this.pop_ballads.push('1F');
                            this.singer_songwriter.push('1F');
                            this.pop_classic.push('1F');
                            this.rock_classic.push('1F');
                            this.alternative.push('1F');
                            this.disco.push('1F');
                            this.club_dance.push('1F');
                            

                        } else if(currentAnswer === "G") {
                            this.classical.push('1G');
                            this.easy_jazz.push('1G');
                            this.easy_listening.push('1G');
                            this.soul.push('1G');
                            this.lounge.push('1G');
                            this.latin.push('1G');

                            this.nederpop.push('1G');
                            this.pop_ballads.push('1G');
                            this.singer_songwriter.push('1G');
                            this.pop_classic.push('1G');
                            this.rock_classic.push('1G');

                        } else if(currentAnswer === "H") {
                            this.classical.push('1H');
                            this.easy_jazz.push('1H');
                            this.easy_listening.push('1H');
                            this.soul.push('1H');
                            this.lounge.push('1H');
                           
                            this.nederpop.push('1H');
                            this.pop_ballads.push('1H');
                            this.singer_songwriter.push('1H');
                            this.pop_classic.push('1H');
                            
                            this.kids_hits.push('1H');

                        }else if(currentAnswer === "I") {
                            this.classical.push('1I');
                            this.easy_jazz.push('1I');
                            this.easy_listening.push('1I');
                            this.soul.push('1I');
                            this.lounge.push('1I');
                            
                            this.pop_ballads.push('1I');
                            this.singer_songwriter.push('1I');

                        }else if(currentAnswer === "J") {
                            this.classical.push('1J');
                            this.easy_jazz.push('1J');
                            this.easy_listening.push('1J');
                            this.soul.push('1J');
                            this.lounge.push('1J');
                            this.latin.push('1J');
                            
                            this.pop_ballads.push('1J');
                            this.singer_songwriter.push('1J');
                            this.pop_classic.push('1J');
                            
                        }

                        self.storyStringBuild_title = self.Q1_headers[currentAnswer];
                        self.storyStringBuild_q1 = self.Q1[currentAnswer];
                       
                        break;

                    case 2: // question 2
                        if(currentAnswer === "A") {

                            this.nederpop.push('2A');
                            this.singer_songwriter.push('2A');
                            this.disco.push('2A');
                            this.club_dance.push('2A');
                            this.kids_hits.push('2A');

                        } else if(currentAnswer === "B") {

                            this.easy_jazz.push('2B');
                            this.easy_listening.push('2B');
                            this.soul.push('2B');
                            this.lounge.push('2B');
                            this.latin.push('2B');
                            this.urban.push('2B');
                            this.nederpop.push('2B');
                            this.pop_ballads.push('2B');
                            this.singer_songwriter.push('2B');

                            this.alternative.push('2B');
                            this.disco.push('2B');
                            this.club_dance.push('2B');
                            

                        }else if(currentAnswer === "C") {
                            this.classical.push('2C');
                            this.easy_jazz.push('2C');
                            this.easy_listening.push('2C');
                            this.soul.push('2C');
                            this.lounge.push('2C');
                            this.latin.push('2C');
                            this.urban.push('2C');
                            this.nederpop.push('2C');
                            this.pop_ballads.push('2C');
                            this.singer_songwriter.push('2C');
                            this.pop_classic.push('2C');
                            this.rock_classic.push('2C');
                            this.alternative.push('2C');
                            this.disco.push('2C');
                            this.club_dance.push('2C');

                        }else if(currentAnswer === "D") {

                            this.classical.push('2D');
                            this.easy_jazz.push('2D');
                            this.easy_listening.push('2D');
                            this.soul.push('2D');
                            this.lounge.push('2D');
                            this.latin.push('2D');
                           
                            this.pop_ballads.push('2D');
                            this.singer_songwriter.push('2D');
                            this.pop_classic.push('2D');
                            this.rock_classic.push('2D');
                            
                            this.disco.push('2D');
                            
                        }else if(currentAnswer === "E") {

                            this.classical.push('2E');
                            this.easy_jazz.push('2E');
                            this.easy_listening.push('2E');
                            this.soul.push('2E');
                            this.lounge.push('2E');
                            this.latin.push('2E');
                           
                            this.nederpop.push('2E');
                            this.pop_ballads.push('2E');
                            this.singer_songwriter.push('2E');
                            this.pop_classic.push('2E');
                                
                            this.disco.push('2E');

                        }
                        self.storyStringBuild_q2 = self.Q2[currentAnswer];
                        break;
                    
                    case 3:
                        if(currentAnswer === "A") {
                            this.classical.push('3A');
                            this.easy_jazz.push('3A');
                            this.easy_listening.push('3A');
                            this.soul.push('3A');
                            this.lounge.push('3A');
                            
                            this.pop_ballads.push('3A');
                            this.singer_songwriter.push('3A');
                            this.pop_classic.push('3A');
                            
                            this.kids_hits.push('3A');

                        }else if(currentAnswer === "B") {
                            this.classical.push('3B');
                            this.easy_jazz.push('3B');
                            this.easy_listening.push('3B');
                            this.soul.push('3B');
                            this.lounge.push('3B');
                            this.latin.push('3B');
                           
                            this.nederpop.push('3B');
                            this.pop_ballads.push('3B');
                            this.singer_songwriter.push('3B');
                            this.pop_classic.push('3B');
                            this.rock_classic.push('3B');
                           
                            this.club_dance.push('3B');
                            this.kids_hits.push('3B');

                        } else if(currentAnswer === "C") {
                            
                            this.soul.push('3C');
                            
                            this.latin.push('3C');
                            this.urban.push('3C');
                            this.nederpop.push('3C');
                            this.pop_ballads.push('3C');
                            this.singer_songwriter.push('3C');
                            this.pop_classic.push('3C');
                            this.rock_classic.push('3C');
                            
                            this.disco.push('3C');
                            this.club_dance.push('3C');
                            

                        } else if(currentAnswer === "D") {
                            this.classical.push('3D');
                            this.easy_jazz.push('3D');
                            this.easy_listening.push('3D');
                            this.soul.push('3D');
                            this.lounge.push('3D');
                            
                            this.pop_ballads.push('3D');
                            this.singer_songwriter.push('3D');

                        } else if(currentAnswer === "E") {
                            this.classical.push('3E');
                            this.easy_jazz.push('3E');
                            this.easy_listening.push('3E');
                            this.soul.push('3E');
                            this.lounge.push('3E');
                            this.latin.push('3E');
                            this.urban.push('3E');
                            this.nederpop.push('3E');
                            this.pop_ballads.push('3E');
                            this.singer_songwriter.push('3E');
                            this.pop_classic.push('3E');
                            this.rock_classic.push('3E');
                            this.alternative.push('3E');
                            this.disco.push('3E');
                            this.club_dance.push('3E');
                            this.kids_hits.push('3E');
                        }
                        self.storyStringBuild_q3 = self.Q3[currentAnswer];
                        break;

                    case 4:
                        if(currentAnswer === "A") {
                            this.classical.push('4A');
                            this.easy_jazz.push('4A');
                            this.easy_listening.push('4A');
                            this.soul.push('4A');
                            this.lounge.push('4A');
                            this.latin.push('4A');
                            
                            this.nederpop.push('4A');
                            this.pop_ballads.push('4A');
                            this.singer_songwriter.push('4A');
                            this.pop_classic.push('4A');
                            this.rock_classic.push('4A');

                        } else if(currentAnswer === "B") {
                            this.classical.push('4B');
                            this.easy_jazz.push('4B');
                            this.easy_listening.push('4B');
                            this.soul.push('4B');
                            this.lounge.push('4B');
                            
                            this.singer_songwriter.push('4B');

                        }else if(currentAnswer === "C") {
                            
                            this.easy_listening.push('4C');
                            this.soul.push('4C');
                            
                            this.nederpop.push('4C');
                            this.pop_ballads.push('4C');
                            this.singer_songwriter.push('4C');
                            this.pop_classic.push('4C');
                            
                            this.kids_hits.push('4C');

                        }else if(currentAnswer === "D") {
                           
                            this.soul.push('4D');
                            this.lounge.push('4D');
                            this.latin.push('4D');
                            this.urban.push('4D');
                            
                            this.rock_classic.push('4D');
                            this.alternative.push('4D');
                            this.disco.push('4D');

                        }else if(currentAnswer === "E") {
                            this.classical.push('4E');
                            this.easy_jazz.push('4E');
                            this.easy_listening.push('4E');
                            this.soul.push('4E');
                            this.lounge.push('4E');
                            this.latin.push('4E');
                            this.urban.push('4E');
                           
                            this.singer_songwriter.push('4E');

                        }else if(currentAnswer === "F") {
                            this.classical.push('4F');
                            this.easy_jazz.push('4F');
                            this.easy_listening.push('4F');
                            this.soul.push('4F');
                            this.lounge.push('4F');
                            this.latin.push('4F');
                           
                            this.disco.push('4F');
                            this.club_dance.push('4F');
                           
                        }
                        self.storyStringBuild_q4 = self.Q4[currentAnswer];
                        break;
 
                    case 5:
                        if(currentAnswer === "A") {
                            this.classical.push('5A');
                            this.easy_jazz.push('5A');
                            this.easy_listening.push('5A');
                            this.soul.push('5A');
                            this.lounge.push('5A');
                            this.latin.push('5A');
                            this.urban.push('5A');
                            this.nederpop.push('5A');
                            this.pop_ballads.push('5A');
                            this.singer_songwriter.push('5A');
                            this.pop_classic.push('5A');
                            this.rock_classic.push('5A');
                            this.alternative.push('5A');
                            this.disco.push('5A');
                            this.club_dance.push('5A');
                            this.kids_hits.push('5A');

                        }else if(currentAnswer === "B") {
                            this.classical.push('5B');
                            this.easy_jazz.push('5B');
                            this.easy_listening.push('5B');
                            this.soul.push('5B');
                            this.lounge.push('5B');
                            this.latin.push('5B');
                            this.urban.push('5B');
                            this.nederpop.push('5B');
                            this.pop_ballads.push('5B');
                            this.singer_songwriter.push('5B');
                            this.pop_classic.push('5B');
                            this.rock_classic.push('5B');
                            this.alternative.push('5B');
                            this.disco.push('5B');
                            this.club_dance.push('5B');
                            this.kids_hits.push('5B');

                        }else if(currentAnswer === "C") {
                            this.classical.push('5C');
                            this.easy_jazz.push('5C');
                            this.easy_listening.push('5C');
                            this.soul.push('5C');
                            this.lounge.push('5C');
                            this.latin.push('5C');
                            this.urban.push('5C');
                            this.nederpop.push('5C');
                            this.pop_ballads.push('5C');
                            this.singer_songwriter.push('5C');
                            this.pop_classic.push('5C');
                            this.rock_classic.push('5C');
                            this.alternative.push('5C');
                            this.disco.push('5C');
                            this.club_dance.push('5C');
                            this.kids_hits.push('5C');

                        }
                        self.storyStringBuild_q5 = self.Q5[currentAnswer];
                        break;

                    case 6:
                        if(currentAnswer === "A") {
                            
                            this.easy_listening.push('6A');
                            
                            this.nederpop.push('6A');
                            this.pop_ballads.push('6A');

                            this.pop_classic.push('6A');
                            
                            this.kids_hits.push('6A');

                        }else if(currentAnswer === "B") {
                            
                            this.easy_listening.push('6B');
                            this.soul.push('6B');
                            this.lounge.push('6B');
                            this.latin.push('6B');
                            
                            this.nederpop.push('6B');
                            this.pop_ballads.push('6B');
                            this.singer_songwriter.push('6B');
                            this.pop_classic.push('6B');
                            this.rock_classic.push('6B');
                            this.alternative.push('6B');
                            
                            this.kids_hits.push('6B');

                        }else if(currentAnswer === "C") {
                            this.classical.push('6C');
                            this.easy_jazz.push('6C');
                            this.easy_listening.push('6C');

                        }else if(currentAnswer === "D") {
                           
                            this.easy_jazz.push('6D');
                            this.easy_listening.push('6D');
                            this.soul.push('6D');
                            this.lounge.push('6D');
                            this.latin.push('6D');
                            
                            this.pop_ballads.push('6D');
                            this.singer_songwriter.push('6D');
                            this.pop_classic.push('6D');
                            
                            this.disco.push('6D');

                        }else if(currentAnswer === "E") {
                            
                            this.urban.push('6E');
                            
                            this.rock_classic.push('6E');
                            this.alternative.push('6E');

                        }else if(currentAnswer === "F") {

                            this.easy_jazz.push('6F');
                            this.easy_listening.push('6F');
                            this.soul.push('6F');
                            this.lounge.push('6F');
                            this.latin.push('6F');
                           
                        }

                        self.endResultTitle = self.resultAnswersObject[currentAnswer];
                        self.endResultText = self.Q6[currentAnswer];
                        self.storyStringBuild_q6 = self.Q6[currentAnswer];
                        self.endResultAdvise = self.resultAdviseObject[currentAnswer];
                        
                        break;

                    case 7:
                        if(currentAnswer === "A") {
                            this.classical.push('7A');
                            this.easy_jazz.push('7A');
                            this.easy_listening.push('7A');
                            this.soul.push('7A');
                            this.lounge.push('7A');
                            this.latin.push('7A');
                            this.urban.push('7A');
                            
                            this.pop_ballads.push('7A');
                            this.singer_songwriter.push('7A');
                            this.pop_classic.push('7A');
                            this.rock_classic.push('7A');
                            this.alternative.push('7A');
                            this.disco.push('7A');
                            this.club_dance.push('7A');

                        }else if(currentAnswer === "B") {
                            this.classical.push('7B');
                            this.easy_jazz.push('7B');
                            this.easy_listening.push('7B');
                            
                            this.disco.push('7B');
                            this.club_dance.push('7B');
                            
                        }else if(currentAnswer === "C") {

                            this.easy_jazz.push('7C');
                            this.easy_listening.push('7C');
                            this.soul.push('7C');
                            this.lounge.push('7C');
                            this.latin.push('7C');
                            this.urban.push('7C');
                            this.nederpop.push('7C');
                            this.pop_ballads.push('7C');
                            this.singer_songwriter.push('7C');
                            this.pop_classic.push('7C');
                            this.rock_classic.push('7C');
                            this.alternative.push('7C');
                            this.disco.push('7C');
                            this.club_dance.push('7C');
                            this.kids_hits.push('7C');

                        }else if (currentAnswer === "D") {
                            
                            this.urban.push('7D');
                            this.nederpop.push('7D');
                            this.pop_ballads.push('7D');
                            
                            this.pop_classic.push('7D');
                            this.rock_classic.push('7D');
                            this.alternative.push('7D');
                            this.disco.push('7D');
                            this.club_dance.push('7D');
                            this.kids_hits.push('7D');

                        }else if(currentAnswer === "E") {
                            this.classical.push('7E');
                            this.easy_jazz.push('7E');
                            this.easy_listening.push('7E');
                            this.soul.push('7E');
                            this.lounge.push('7E');
                            this.latin.push('7E');
                            this.urban.push('7E');
                            this.nederpop.push('7E');
                            this.pop_ballads.push('7E');
                            this.singer_songwriter.push('7E');
                            this.pop_classic.push('7E');
                            
                            this.alternative.push('7E');
                            this.disco.push('7E');
                            this.club_dance.push('7E');
                            this.kids_hits.push('7E');

                        }else if(currentAnswer === "F") {
                            this.classical.push('7F');
                            
                            this.latin.push('7F');
                            this.urban.push('7F');
                            this.nederpop.push('7F');
                            this.pop_ballads.push('7F');
                            this.singer_songwriter.push('7F');
                            this.pop_classic.push('7F');
                            this.rock_classic.push('7F');
                            this.alternative.push('7F');
                            this.disco.push('7F');
                            this.club_dance.push('7F');
                            this.kids_hits.push('7F');

                        }
                        self.storyStringBuild_q7 = self.Q7[currentAnswer];
                        break;


                    case 8:
                        if(currentAnswer === "A") {
                            this.classical.push('8A');
                            this.easy_jazz.push('8A');
                            this.easy_listening.push('8A');
                            this.soul.push('8A');
                            this.lounge.push('8A');
                            this.latin.push('8A');
                            
                            this.pop_ballads.push('8A');
                            this.singer_songwriter.push('8A');
                            this.pop_classic.push('8A');
                            this.rock_classic.push('8A');

                        }else if(currentAnswer === "B") {
                            this.classical.push('8B');
                            this.easy_jazz.push('8B');
                            this.easy_listening.push('8B');
                            this.soul.push('8B');
                            this.lounge.push('8B');
                            this.latin.push('8B');
                            this.urban.push('8B');
                            this.nederpop.push('8B');
                            this.pop_ballads.push('8B');
                            this.singer_songwriter.push('8B');
                            this.pop_classic.push('8B');
                            this.rock_classic.push('8B');
                            this.alternative.push('8B');
                            this.disco.push('8B');
                            this.club_dance.push('8B');
                            this.kids_hits.push('8B');

                        }else if(currentAnswer === "C") {
                            this.classical.push('8C');
                            this.easy_jazz.push('8C');
                            this.easy_listening.push('8C');
                            this.soul.push('8C');
                            this.lounge.push('8C');
                            this.latin.push('8C');
                            this.urban.push('8C');
                            this.nederpop.push('8C');
                            this.pop_ballads.push('8C');
                            this.singer_songwriter.push('8C');
                            this.pop_classic.push('8C');
                            this.rock_classic.push('8C');
                            this.alternative.push('8C');
                            this.disco.push('8C');
                            this.club_dance.push('8C');
                            this.kids_hits.push('8C');

                        }else if(currentAnswer === "A") {
                            this.classical.push('1A');
                            this.easy_jazz.push('1A');
                            this.easy_listening.push('1A');
                            this.soul.push('1A');
                            this.lounge.push('1A');
                           
                            this.pop_ballads.push('1A');
                            this.singer_songwriter.push('1A');
                            this.pop_classic.push('1A');

                        }
                        self.storyStringBuild_q8 = self.Q8[currentAnswer];
                        
                        self.setupResultPage();
                        

                        
                        break;
                    
                    default:
                        break;
                }
            }


            
        }

        /*
        // copycat ;)
        this.Q2 = {
            A: 'Muziek',
            B: 'kassa',
            C: 'Horeca',
            D: 'ontspant',
            E: 'klanten',
            F: 'harder',
            G: 'productiviteit',
            H: 'geruststellend',
            I: 'privacy',
            J: 'sfeer'
        }

        */

        // Koppen gebaseerd op antwoord vraag 1
        this.Q1_headers = {
            A: 'Muziek doet de kassa rinkelen',
            B: 'Muziek doet de kassa rinkelen',
            C: 'Horeca kán niet zonder muziek',
            D: 'Muziek ontspant',
            E: 'Muziek stelt klanten op hun gemak',
            F: 'Muziek doet harder werken',
            G: 'Muziek verhoogt de productiviteit',
            H: 'Muziek werkt geruststellend',
            I: 'Muziek zorgt voor privacy',
            J: 'Muziek zorgt voor sfeer'
        }

        // Tekst gebaseerd op antwoord vraag 1
        this.Q1 = {
            A: 'Bij retail past geen extreme muziek. Houd rekening met het opleidingsniveau van je klant en de prijsperceptie die je wilt creëren. Zo zorg je ervoor dat klanten langer in de winkel blijven waardoor een grotere winkeltrouw ontstaat met als resultaat een verhoging van de omzet.',
            B: 'Jouw type zaak vraagt om toegankelijke muziek voor een brede doelgroep. Zorg voor optimistische feelgood muziek, liefst in een lekker looptempo zodat je klant optimaal door de winkel kan struinen.',
            C: 'Horeca en muziek zijn onlosmakelijk met elkaar verbonden. Of het nu speelt op de voor- of achtergrond, muziek draagt voor een groot deel bij aan het succes van een horecaonderneming. Houd vooral rekening met het type klant dat je bedient. Zo zorg je ervoor dat klanten langer in jouw zaak blijven en dus meer consumeren. Onderzoek toont aan dat horecabezoekers bereid zijn iets meer te betalen voor consumpties als er leuke muziek op staat. Goed voor de omzet dus!',
            D: 'In een wellness- en verzorgingsomgeving zorgt muziek niet alleen voor de juiste sfeer en voor ontspanning, het biedt klanten ook meer privacy. Het verdoezelt bijgeluiden en voorkomt dat klanten meeluisteren met elkaars gesprek.',
            E: 'In een showroom zijn vaak relatief weinig mensen. Juist dan is muziek van groot belang. Het helpt om klanten zich op hun gemak te laten voelen en ze een gevoel van privacy te geven. Zorg voor bekende feelgood muziek, dat geeft je klant een vertrouwd gevoel en verkort gevoelsmatig de wachttijd.',
            F: 'In de regel werkt opzwepende uptempo muziek het beste voor een productieomgeving. Mensen werken harder en blijven alert en dat is tenslotte wat je wilt.',
            G: 'Op kantoor zweert de één erbij, terwijl de ander er niet tegen kan: muziek op het werk. En hoewel een lekker muziekje de productiviteit zeker ten goede kan komen, is niet alles even geschikt. Je kunt beter geen radio aanzetten omdat nieuwsblokken, reclames en het vele geklets van dj’s je behoorlijk af kunnen leiden. Werk je in de creatieve sector? Onderzoek wijst uit dat klassieke muziek de geest stimuleert. Maar andere genres werken ook, zolang het maar op de achtergrond aanwezig is en niet je aandacht vraagt. Varieer en misschien wel het allerbelangrijkste; overleg met collega’s zodat iedereen optimaal kan presteren.',
            H: 'In de zorg is muziek meestal te horen in wachtruimtes. Het werkt geruststellend en kan mensen zich meer op hun gemak laten voelen. Ook kan muziek aan de balie een gevoel van privacy geven, omdat de muziek voorkomt dat anderen je gesprek horen. Met name klassieke muziek werkt ontspannend, dit komt door het rustgevende ritme. Blijf weg van opzwepende muziek, zoals bijvoorbeeld techno, trance of rock. Dit versterkt juist mogelijke angstgevoelens.',
            I: 'Bij een financiële instelling praat je klant over intieme zaken. Zenuwen en bezorgdheid over privacy  worden weggenomen met muziek. Daarnaast zorgt muziek voor afleiding en zo heeft het  een positieve invloed op de wachttijdbeleving.',
            J: 'In hotels is muziek van groot belang. De verschillende ruimtes vragen om een eigen muziekinvulling afgestemd op het moment van de dag. De ochtend vraagt om easy listening, zodat mensen rustig op gang kunnen komen. ’s Middags en ’s avonds is meer uptempo muziek op zijn plaats.'
        }
        
        // Tekst gebaseerd op antwoord vraag 2
        this.Q2 = {
            A: 'Omdat jouw doelgroep voornamelijk uit kinderen bestaat, kun je het beste kiezen voor top 40 muziek. Niet alleen maak je de kinderen hier blij mee, ook de meeste ouders kennen deze muziek. En aangezien zij hun kroost vaak vergezellen buiten de deur, is het uiteraard belangrijk hen niet af te schrikken.',
            B: 'Omdat jouw doelgroep grotendeels uit jongvolwassenen bestaat, kun je het beste kiezen voor muziek uit dit millennium.',
            C: 'Met een doelgroep van voornamelijk volwassenen kun je muzikaal gezien alle kanten op. Houd er rekening mee dat hoe ouder de doelgroep, hoe sneller men zich stoort aan ‘te harde muziek’.',
            D: 'Omdat jouw doelgroep grotendeels uit ouderen bestaat, vallen de genres urban, dance, house en alternative per definitie af. Toch zijn ouderen niet per sé liefhebbers van alleen klassiek of jazz. Er zijn ook veel oude rockers!',
            E: 'Omdat jouw doelgroep uit alle leeftijden bestaat, kun je muzikaal gezien alle kanten op. Zorg ervoor dat er voor elk wat wils is. En vooral… Varieer en experimenteer!'
        }

        // Tekst gebaseerd op antwoord vraag 3
        this.Q3 = {
            A: 'Om klanten zich op hun gemak te laten voelen, kies je voor wat rustigere muziek op bescheiden volume. Toch is het minstens zo belangrijk dat de muziek klopt bij hun verwachting. Matcht de muziek bijvoorbeeld met hoe jouw zaak eruit ziet?',
            B: 'Om klanten langer in je zaak te laten blijven, moeten ze zich prettig voelen. In de regel kies je daarom voor toegankelijke en algemeen bekende muziek met een hoog meezinggehalte. Niet te snel, maar ook zeker niet te langzaam. Zet het volume ook niet te hoog.',
            C: 'Om werknemers te stimuleren, werkt vrolijke uptempo muziek vaak goed. Geen snoeiharde house in elk geval, want dat effect is snel uitgewerkt en gaat dan averechts werken. Bedenk ook dat de boog niet altijd gespannen kan zijn. Dus wissel snelle en minder snelle muziek met elkaar af. Een systeem met agendafunctie kan hierbij erg nuttig zijn.',
            D: 'Om klanten meer privacy te bieden in jouw zaak, kun je het beste kiezen voor wat minder bekende muziek in een wat lager tempo.',
            E: 'Jij als ondernemer weet als geen ander welke sfeer je wil creëren voor jouw zaak. Kies daarom voor muziek die volgens jou de juiste sfeer neerzet. Dit moet je vervolgens wel toetsen. Matcht de muziek bijvoorbeeld met hoe jouw zaak eruit ziet?'
        }

        // Tekst gebaseerd op antwoord vraag 4
        this.Q4 = {
            A: 'Bij de uitstraling van jouw zaak past in elk geval popgeörienteerde muziek.',
            B: 'De uitstraling van jouw zaak schreeuwt eigenlijk om klassieke muziek. Staar je echter niet blind; andere muziek kan ook heel goed werken.',
            C: 'Bij de uitstraling van jouw zaak past in elk geval Nederlandstalige muziek. Dit is prima te combineren met popgeörienteerde muziek.',
            D: 'Bij de uitstraling van jouw zaak past in elk geval jazz en soul.',
            E: 'Jouw inrichting is strak en dat vraagt om een heldere muziekstijl. Bijvoorbeeld new jazz of klassiek. Maak met de keuze van de muziek een statement, net zoals je dat met de inrichting doet.',
            F: 'De uitstraling van jouw zaak vraagt om lounge muziek. Geen bekende popliedjes, maar juist moderne of oude muziek met een hoog ontspanningsgehalte.'
        }

        // Tekst gebaseerd op antwoord vraag 5
        this.Q5 = {
            A: 'De inrichting van jouw zaak vormt één geheel. Muziek is daar een wezenlijk onderdeel van. Blijf bij het onderhouden van je muzieksamenstelling daar continu op letten.',
            B: 'Klantvoorkeur voert bij jou de boventoon. Bij de inrichting van je zaak en ongetwijfeld ook bij je muziekkeuze. Een goede beslissing, klant is immers koning. Blijf je er echter wel van bewust dat de muziek ook moet aansluiten op jouw zaak. De muzikale voorkeur van een klant is niet altijd wat hij verwacht te horen in een bepaalde zaak.',
            C: 'Waarschijnlijk is jouw persoonlijke muzieksmaak goed te horen in je zaak. Dat kán goed werken – mits de klant jou kent en je eigengereidheid waardeert. Doet hij dat niet, dan kan de muziek juist averechts werken. In dat geval raden we je aan de muziek toch meer af te stemmen op je doelgroep en/of je inrichting.'
        }


        // Tekst gebaseerd op antwoord vraag 6
        this.Q6 = {
            A: 'Voor jouw zaak adviseren we voorl muziek van eigen bodem. Nederlandse muziek is nog steeds mateloos populair en de verwachting is dat het genre alleen maar groter gaat worden. Genoeg uit te kiezen dus!',
            B: 'Voor jouw zaak adviseren we vooral populaire muziek. Hier kun je echter nog veel kanten mee op. Klakkeloos een popplaylist of de top 40 aanzetten is dan ook niet slim. Sta eerst ruimschoots stil bij wie je bent en wie je doelgroep is. Bedenk vervolgens welke hits daar het beste bij passen. Muziek is maatwerk!',
            C: 'Voor jouw zaak adviseren we vooral stijlvolle muziek. Jij opereert waarschijnlijk in een hoog segment en dan mag de muziek wat complexer zijn. Naast klassieke muziek werkt soul en jazz ook goed. Ga voor sophisticated muziek.',
            D: 'Voor jouw zaak adviseren we vooral smooth jazz en soepele R&B. Je kunt wat breder gaan met je muziekkeuze, maar hou het stijlvol.',
            E: 'Voor jouw zaak adviseren we vooral stoere muziek met stevig karakter: rock dus. Dit is best bijzonder, want slechts een relatief kleine doelgroep voelt zich aangesproken door rock. Wat snellere pop kan ook goed werken, maar wijk niet te veel af van rock en pop.',
            F: 'Voor jouw zaak adviseren we vooral muziek met gospelinvloeden als soul en jazz. Je kunt wat breder gaan, maar blijf bij rustige, sophisticated muziek.'
        }

        // Tekst gebaseerd op antwoord vraag 7
        this.Q7 = {
            A: 'Vermijd in elk geval Nederlandstalig.',
            B: 'Vermijd in elk geval popmuziek.',
            C: 'Vermijd in elk geval klassiek.',
            D: 'Vermijd in elk geval jazz en R&B.',
            E: 'Vermijd in elk geval rock.',
            F: 'Vermijd in elk geval jazz en soul.'
        }

        // Tekst gebaseerd op antwoord vraag 8
        this.Q8 = {
            A: 'Muziek kan het verschil maken, ook op de achtergrond. De sfeer en de beleving zijn namelijk niet hetzelfde zonder muziek. Het is wel belangrijk dat je kiest voor muziek die zich leent als achtergrondmuziek. Bekende popliedjes, dance en muziek waarbij de tekst erg belangrijk is, doen het minder goed als achtergrondmuziek. Mensen gaan zich dan te veel inspannen om de muziek te horen. Maar waar moet je dan wel voor kiezen?',
            B: 'Dat muziek de ultieme sfeermaker is, hoeven we jou niet te vertellen. De juiste muziek is sfeerbepalend en imagoversterkend. Maar wat is precies ‘de juiste muziek’ voor jouw zaak?',
            C: 'Jouw zaak zonder muziek is als Parijs zonder Eifeltoren. Dat kan dus niet. Gelukkig is dit niet aan dovemansoren gericht en ben jij het hier roerend mee eens. Maar welke muziek past het beste bij jouw zaak?',
            D: 'Aha, dus muziek is overbodig in jouw zaak! Als je het niet nodig vindt dat klanten langer blijven, meer kopen, consumeren, ontspannen en/of privacy wordt geboden, je personeel gestimuleerd wordt of het gevoel krijgt dat de tijd sneller gaat, dan kun je inderdaad overwegen om geen muziek te gebruiken. Niet meer zo overtuigd? Lees dan toch maar dit muziekadvies.'
        }


    }]);
}());