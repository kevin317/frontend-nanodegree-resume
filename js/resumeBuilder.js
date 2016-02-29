/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedEmployer;
var formattedTitle;
var formattedLocation;
var formattedDates;
var formattedDescription;
var formattedProjectTitle;
var formattedProjectDates;
var formattedProjectDescription;
var formattedProjectImages;
var formattedSchoolName;
var formattedSchoolDegree;
var formattedSchoolDates;
var formattedSchoolLocation;
var formattedSchoolMajor;
var formattedEmployerTitle;
var formattedNameDegree;
var formattedSkill;



var bio = {
	"name" : "Kevin Zhang",
	"role" : "Front-End Ninja",
	"pic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/0b3/09a/239a4a6.jpg",
	"welcome" : "Accomplished, integrity-driven, bilingual Analyst with enormous success utilizing technology to support business objectives. Recognized as a leader with the ability to collaborate with multiple business units to define the scope of a project, develop case models, create diagrams and analyze supplemental specifications in support of project scopes. Verifiable track record of managing complex projects while delivering on time and above expectations. Exceptional academic qualifications, including a Master of Science degree in Information Systems from Baylor University.",
	"contacts" : {
		"mobile" : "617-680-4117",
		"email" : "zkw317@gmail.com",
		"github" : "https://github.com/kevin317",
		"location" : "Dallas, TX"
	},
	"skills" : ["HTML","CSS","JavaScript","MongoDB","SQL","VB","Lua","Java","Python","Linux","SAP ERP"]
};

var work = {
	"jobs" : [

	{
		"employer" : "Ihiji",
		"title" : "Business Analyst Intern",
		"location" : "Austin, TX",
		"dates" : "2015",
		"description" : "Created more than 20 queries using MongoDB to effectively identify user engagement and improve business profitability; Meticulously analyzed the feasibility of a $10 million project and expertly established the pricing and revenue structure; Skillfully developed a detailed HIPAA compliance plan to meet the requirements of healthcare industry; Utilized strong problem solving and critical thinking skills to understand business needs and translate them into technology solutions; Assessed business problems and translated them into specific system requirements to find technology/automation solutions that were cost effective and met business needs; Contributed to the technical assessment, scope definition, project planning, analysis, design and implementation, and testing of large projects."
	},

	{
		"employer" : "Baylor University",
		"title" : "Graduate Assistant",
		"location" : "Waco, TX",
		"dates" : "2014-2015",
		"description" : "Provided exceptional customer service while supporting departmental processes related to student recruitment; Played a key role in event planning including supervision of undergraduate students; Conducted research on more than 15 marketing topics and prepared more than 30 reports; Analyzed market trends to develop strategic marketing initiatives focused on the university’s target audience; Conducted qualitative and quantitative research to help guide new creative efforts."
	},

	{
		"employer" : "Industiral and Commerical Bank of China",
		"title" : "Financial Analyst Intern",
		"location" : "Qingdao, China",
		"dates" : "2013",
		"description" : "Processed more than 2,000 credit card and payroll transactions ensuring 100% fiscal accuracy; Engaged in E-Banking business and bank reconciliation with strict attention to detail; Effectively evaluated financial performance of more than 50 corporate customers; Conducted detailed analysis of financial data, budget and overall corporate goals; Assessed key performance indicators and delivered reports outlining actions that increased productivity."
	}
	]
};

var education = {
	"schools":[ {
	  "name" : "Baylor University",
	  "location" : "Waco, TX",
	  "degree" : "Master of Science",
	  "major" : ["Information System"],
	  "graduation" : "2015"
	},

	{
	  "name" : "Baylor University",
	  "location" : "Waco, TX",
	  "degree" : "Bachelor of Business Administration",
	  "major" : ["MIS","Entrepreneurship"],
	  "graduation" : "2014"
	}
	]
};

var project = {
	"projects":[ {
	  "title" : "Game of Frogs",
	  "dates" : "2015",
	  "description" : "A game that includes a box and frog.",
	  "images" : ["/Users/Kevin/Desktop/portfoilo/resume/frontend-nanodegree-resume/images/frog.png"]
	},

	{
	  "title" : "Responsive Website",
	  "dates" : "2016",
	  "description" : "A responsive personal website.",
	  "images" : ["/Users/Kevin/Desktop/portfoilo/resume/frontend-nanodegree-resume/images/website.png"]
	}
	]
};

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
	$("#main").append(internationalizeButton);
	$("#mapDiv").append(googleMap);

bio.display = function() {


    var formattedbioPic = HTMLbioPic.replace("%data%",bio.pic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcome);
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedbiolocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMsg);
    $("#topContacts").append(formattedmobile);
    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedbiolocation);
    $("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
	    $("#skills").append(formattedSkill);
	}
};



function displaywork() {

	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	formattedEmployerTitle = formattedEmployer+formattedTitle;
	formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);

}};

function inName(){
	var index = bio.name.indexOf(' ');
	var initial = bio.name[0].toUpperCase();
	var firstname = bio.name.slice(1,index).toLowerCase();
	var lastname = bio.name.slice(index+1).toUpperCase();
	var newname=initial+firstname+" "+lastname;
	return newname;
};

project.display = function() {
for (p in project.projects) {
	$("#projects").append(HTMLprojectStart);
	formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.projects[p].title);
	formattedProjectDates = HTMLprojectDates.replace("%data%",project.projects[p].dates);
	formattedProjectDescription = HTMLprojectDescription.replace("%data%",project.projects[p].description);
	formattedProjectImages = HTMLprojectImage.replace("%data%",project.projects[p].images);
	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedProjectDates);
	$(".project-entry:last").append(formattedProjectDescription);
	$(".project-entry:last").append(formattedProjectImages);
}
};

education.display = function() {
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
	formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	formattedNameDegree=formattedSchoolName+formattedSchoolDegree;
	formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].graduation);
	$(".education-entry:last").append(formattedNameDegree);
	$(".education-entry:last").append(formattedSchoolDates);
	$(".education-entry:last").append(formattedSchoolLocation);
	$(".education-entry:last").append(formattedSchoolMajor);

}
};

bio.display();
project.display();
education.display();
displaywork();






