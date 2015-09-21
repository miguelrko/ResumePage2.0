/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("<h2>Miguel</h2>");

 var awesomeThoughts = "I am so awesome";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("awesome", "fun");
  $("#main").append(funThoughts);*/

  var formattedName = HTMLheaderName.replace("%data%","Miguel Añez");
  var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


 var bio = {
 	"name" : "Miguel",
 	"role" : "Developer",
 	"Contact" : {
 		"email" : "miguelrko@hotmail.com",
 		"mobile": "0412-6746161",
 		"github": "miguelrko",
 		"twitter": "miguelrko8",
 		"location": "Venezuela"
 	},
 	"welcomeMessage" : "Hello",
 	"skills"  : [
 		"OOP",
 		"Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Teamwork",
    "Self-Taught",
    "Good Communication"
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
 			"url"	: "udacity.com", 
 		}
 	]
 }

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

$("#main").append(internationalizeButton);
///////////////////////////////////////////////////////////////
/*$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX,loc.pageY);
});*/

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

////////////////map al final con los works
$("#mapDiv").append(googleMap);