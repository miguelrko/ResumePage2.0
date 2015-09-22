/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("<h2>Miguel</h2>");

 var awesomeThoughts = "I am so awesome";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("awesome", "fun");
  $("#main").append(funThoughts);*/

  
 var bio = {
 	"name" : "Miguel Añez",
 	"role" : "Web Developer",
  "biopic": "images/perfil.jpg",
 	"Contact" : {
 		"email" : "miguelrko@hotmail.com",
 		"mobile": "+58 412-6746161",
 		"github": "miguelrko",
 		"twitter": "miguelrko8",
 		"location": "Venezuela"
 	},
 	"welcomeMessage" : "Welcome to my Resume Page, Hope you enjoy it.",
 	"skills"  : [
 		"OOP",
 		"Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Teamwork",
    "Self-Taught",
    "Responsible"
 	]
 }

/* $("#main").append(bio.name);
 $("#main").append(bio.role);
 $("#main").append(bio.Contact);*/

 var work = {
 	"jobs" : [
 		{
 			"employer" : "ULA",
 			"title"    : "System Engineering",
 			"location" : "Merida, Venezuela",
 			"dates"	   : "2008-2015",
 			"description": "System Engineer"
 		},
 		{
 			"employer" : "ULA2",
 			"title"    : "System Engineering2",
 			"location" : "Merida, Venezuela",
 			"dates"	   : "2008-2015-2",
 			"description": "System Engineer2"
 		}
 	]
 }

 var project = {
 	"projects" : [
 		{
 			"title" : "Experimental Design Library in Galatea. Prototype",
 			"dates" : "2015",
 			"description" : "Degree Final Project, developed in Java.",
 			"images"	  : "images/197x148.gif"
 		}
 	]
 }
 

/* var education = {};
 	education["name"] = "ULA",
 	education["years"] = "8",
 	education["city"] = "merida" */

// $("#main").append(work["current"]);
// $("#main").append(education.name);


 var education = {
 	"schools" : [
 		{
 			"name" : "ULA",
 			"location" : "Merida, Venezuela",
 			"degree" : "System Engineering Degree",
 			"majors" : ["Computer Systems"
 			],
 			"dates": "2008-2015",
 			"url"  : "ula.ve"
 		},
 		{
 			"name" : "Unda",
 			"location" : "Guanare, Venezuela",
 			"degree"   : "highschool",
 			"majors"   :["none"
 			],
 			"dates"	   : "2002-2007",
 			"url": "none"
 		}
 	]
 ,
 	"onlineCourses":[
 		{
 			"title" : "javascript syntax",
 			"school" : "udacity",
 			"date"  : "2015",
 			"url"	: "http://www.udacity.com", 
 		}
 	]
 }

 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
 
 $("#header").prepend(formattedbioPic);

 var formattedbiomsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

 $("#header").append(formattedbiomsg);


 if(bio.skills.length > 0){
 	$("#header").append(HTMLskillsStart);
 	var formattedSkills;
 	for(var i = 0; i < bio.skills.length; i++){
 		formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
 		$("#skills").append(formattedSkills);
 	}
 }

function displayWork(){
 for(job in work.jobs){
 	$("#workExperience").append(HTMLworkStart);
 	var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 	var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 	$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle + formattedworkDates + formattedworkLocation + formattedworkDescription);
 }
}

displayWork();


/////////////////////////////////////////////////////////
////////////////////////opcional ??????????????
function inName(){
	var finalName = window.name; // what is this ?
    // Your code goes here!
    console.log(finalName);
    var namelist = finalName.split(" ");
    namelist[1] = namelist[1].toUpperCase();
    namelist[0] = namelist[0].toLowerCase();
    var firstname = namelist[0];
    firstname = firstname[0].toUpperCase() + firstname.slice(1);

    finalName = firstname + " " + namelist[1];
    
    // Don't delete this line!
    return finalName;
}

var name = $("#name").text();

//$("#main").append(internationalizeButton);
///////////////////////////////////////////////////////////////
/*$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX,loc.pageY);
});*/

bio.display = function(){

  var formattedmobile = HTMLmobile.replace("%data%",bio.Contact.mobile);
  $("#footerContacts").append(formattedmobile);
  var formattedemail = HTMLemail.replace("%data%",bio.Contact.email);
  $("#footerContacts").append(formattedemail);
  var formattedtwitter = HTMLtwitter.replace("%data%",bio.Contact.twitter);
  $("#footerContacts:last").append(formattedtwitter);
  var formattedgithub = HTMLgithub.replace("%data%",bio.Contact.github);
  $("#footerContacts:last").append(formattedgithub);
  var formattedlocation = HTMLlocation.replace("%data%",bio.Contact.location);
  $("#footerContacts:last").append(formattedlocation);
}

bio.display();


project.display = function(){
	for(proj in project.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedPTitle = HTMLprojectTitle.replace("%data%",project.projects[proj].title);
		$(".project-entry:last").append(formattedPTitle);
		var formattedPDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
		$(".project-entry:last").append(formattedPDates);
		var formattedPDescription = HTMLprojectDescription.replace("%data%",project.projects[proj].description);
		$(".project-entry:last").append(formattedPDescription);
		var formattedPImage = HTMLprojectImage.replace("%data%",project.projects[proj].images);
		$(".project-entry:last").append(formattedPImage);
	}
}

project.display();

education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedschoolname);
    var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedschooldegree);
    var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedschooldates);
    var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedschoollocation);
    var formattedschoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedschoolmajor);
  }
  $("#education").append(HTMLonlineClasses);
  for(cour in education.onlineCourses){
    $("#education").append(HTMLonlineStart);
    var formattedonlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[cour].title);
    $(".education-entry:last").append(formattedonlinetitle);
    var formattedonlineschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[cour].school);
    $(".education-entry:last").append(formattedonlineschool);
    var formattedonlinedates = HTMLonlineDates.replace("%data%",education.onlineCourses[cour].date);
    $(".education-entry:last").append(formattedonlinedates);
    var formattedonlineurl = HTMLonlineURL.replace(/%data%/g,education.onlineCourses[cour].url);
    $(".education-entry:last").append(formattedonlineurl);
  }
}

education.display();




////////////////map al final con los works
$("#mapDiv").append(googleMap);