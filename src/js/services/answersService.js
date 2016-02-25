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


        this.currentQuestion = 0;




        this.storeAnwser = function(selQuestion, selAnwer){
            if(selQuestion && selAnwer){
                var currentAnswer = selAnwer.toUpperCase();
                console.log("Current Question " + selQuestion);
                console.log("currentAnswer " + currentAnswer);

                switch (selQuestion) {
                    case 0:
                        break;

                    case 1: // question 1
                        if(currentAnswer === "A"){ // answer A
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

                            // Set text for answer
                        }else if(currentAnswer === "B"){ // answer B
                           
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
                        } else if(currentAnswer === "C"){ // answer C

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

                        }

                        break;
                    case 2: // question 2
                        if(currentAnswer === "A"){ // answer A

                            this.nederpop.push('2A');
                            this.singer_songwriter.push('2A');
                            this.disco.push('2A');
                            this.club_dance.push('2A');
                            this.kids_hits.push('2A');
                        }
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


        this.getAnswerText = function(question){

        } 


    }]);
}());