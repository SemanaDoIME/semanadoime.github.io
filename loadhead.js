function loadheaderexecute(level) {
var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

if (level==1) {
	var indexurl = "index.html";
	var venueurl = "venue.html";
	var orgcommitteeurl = "OrganizationCommittee.html";
	var ResearchTrackCFP = "cfp/ResearchTrackCFP.html";
	var IndustryTrackCFP = "cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "cfp/ToolDemoTrackCFP.html";
	var DoctoralCFP = "cfp/DoctoralSymposiumCFP.html";
	var ERATrackCFP = "cfp/NIERTrackCFP.html";
	var ArtifactsTrackCFP="cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="cfp/CallForJournalFirstPresentation.html";
	var procommitteeurl = "ProgramCommittee.html";
	var wheretostay = "travel/wheretostay.html";
    var tourism = "travel/tourism.html";
    var weather = "travel/weather.html";
    var soccertickets = "travel/soccertickets.html";
	var staysafe = "travel/safety.html";
	var travelvisaurl = "travel/visareq.html";
	var roomsharingurl = "travel/roomsharing.html";
	var PaperAccepted = "program/Accepted.html";
	var keynotes = "program/Keynotes.html";
	var Programurl = "ToBeAnnounced.html";
	var studentvoluntee = "cfp/StudentVolunteerCall.html"

	var Registrationurl = "registration.html";
	var awardommitteeurl = "AwardCommittee.html";

    var conduct = "social/CodeOfConduct.html";
    var escorialurl = "social/Escorial.html";
	var prereceptionurl = "social/Prereception.html";
	var coffeebreakurl = "social/CoffeeBreak.html";
    var lunchurl = "social/Lunch.html";
	var LGBT = "social/LGBT.html";
    var banquet = "social/Banquet.html";
    var reception = "social/Reception.html";
	var Scheduleurl = "program/schedule.html";
	var Sessionsurl = "program/SessionList.html";

/*
    var DoctoralSymposiumurl = "program/DoctoralSymposium.html";

*/

}
else if (level>=2) {
	var indexurl = "../index.html";
	var venueurl = "../venue.html";
	var orgcommitteeurl = "../OrganizationCommittee.html";
	var ResearchTrackCFP = "../cfp/ResearchTrackCFP.html";
	var IndustryTrackCFP = "../cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "../cfp/ToolDemoTrackCFP.html";
	var DoctoralCFP = "../cfp/DoctoralSymposiumCFP.html";
	var ERATrackCFP = "../cfp/NIERTrackCFP.html";
	var ArtifactsTrackCFP="../cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="../cfp/CallForJournalFirstPresentation.html";

    var procommitteeurl = "../ProgramCommittee.html"
	var PaperAccepted = "../program/Accepted.html";
	var Programurl = "../ToBeAnnounced.html";
	var keynotes = "../program/Keynotes.html";
	var studentvoluntee = "../cfp/StudentVolunteerCall.html"

	var Registrationurl = "../registration.html";
	var awardommitteeurl = "../AwardCommittee.html";

    var conduct = "../social/CodeOfConduct.html";
	var escorialurl = "../social/Escorial.html";
    var prereceptionurl = "../social/Prereception.html";
	var coffeebreakurl = "../social/CoffeeBreak.html";
    var lunchurl = "../social/Lunch.html";
	var LGBT = "../social/LGBT.html";
    var banquet = "../social/Banquet.html";
    var reception = "../social/Reception.html";
	var Scheduleurl = "../program/schedule.html";
	var Sessionsurl = "../program/SessionList.html";

/*
    var DoctoralSymposiumurl = "../program/DoctoralSymposium.html";
*/

    var wheretostay = "../travel/wheretostay.html";
    var tourism = "../travel/tourism.html";
	var staysafe = "../travel/safety.html";
    var weather = "../travel/weather.html";
    var soccertickets = "../travel/soccertickets.html";
	var travelvisaurl = "../travel/visareq.html";
	var roomsharingurl = "../travel/roomsharing.html";
}

var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="'+indexurl+'">XIII Semana do IME</a></div>');
navpartcontainer.append(navbarheader);

var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');

// Menu: Inscreva-se

var li_registration = $('<li><a href="'+Registrationurl+'">Inscreva-se</a></li>');
navbarcollapseul.append(li_registration);

// Menu: SNCT

var li_snct = $('<li><a href="snct.html">SNCT</a></li>');
navbarcollapseul.append(li_snct);

// Menu: Um pouco do IME

var li_ime = $('<li><a href="ime.html">Um Pouco do IME</a></li>');
navbarcollapseul.append(li_ime);

// Menu: Programação

var li_program = $('<li class="dropdown"><a href="'+Programurl+'" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Programação<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_program.find('ul').append('<li><a href="www.xxx">Sessão 1</a></li>');
li_program.find('ul').append('<li><a href="www.xxx">Sessão 2</a></li>');
navbarcollapseul.append(li_program);

// Menu: Organização

var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Organização<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_team.find('ul').append('<li><a href="www.comite">Comitê organizador</a></li>');
navbarcollapseul.append(li_team);

var li_travel = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Edições Anteriores<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_travel.find('ul').append('<li><a href="http://semana2018.ime.uerj.br">Semana do IME 2018</a></li>');
li_travel.find('ul').append('<li><a href="http://semana2017.ime.uerj.br">Semana do IME 2017</a></li>');
navbarcollapseul.append(li_travel);


navbarcollapse.append(navbarcollapseul);

navpartcontainer.append(navbarcollapse);

navpart.append(navpartcontainer);

$('body').append(navpart);

};
