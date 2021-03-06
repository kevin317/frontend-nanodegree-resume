
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

var bio = {
	"name" : "Kevin Zhang",
	"role" : "Front-End Ninja",
	"contacts" : {
		"mobile" : "617-680-4117",
		"email" : "zkw317@gmail.com",
		"github" : "kevin317",
		"location" : "Dallas, TX"
	},
	"welcomeMessage" : "Hi there! I'm Kevin Zhang. I'm a front-end web developer based in Texas. I moved in to tech field while pursuing my Master's degree in Information Systems at Baylor University. I know languages like Java and SQL and I'm learning more at Udacity.",
	"skills" : ["HTML","CSS","JavaScript","MongoDB","SQL","VB","Lua","Java","Python","Linux","SAP ERP"],
	"biopic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/0b3/09a/239a4a6.jpg",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
	    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	    var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	    var formattedbiolocation = HTMLlocation.replace("%data%",bio.contacts.location);
	    $("#header").prepend(formattedRole);
	    $("#header").prepend(formattedName);
	    $("#header").append(formattedbioPic);
	    $("#header").append(formattedwelcomeMsg);
	    $("#topContacts").append(formattedmobile);
	    $("#topContacts").append(formattedemail);
	    $("#topContacts").append(formattedgithub);
	    $("#topContacts").append(formattedbiolocation);
	    $("#header").append(HTMLskillsStart);
	    bio.skills.forEach(function(val) {
    		var formattedSkill = HTMLskills.replace("%data%",val);
		    $("#skills").append(formattedSkill);
		});
	}
};

var education = {
	"schools":[ {
	  "name" : "Baylor University",
	  "location" : "Waco, TX",
	  "degree" : "Master of Science",
	  "majors" : ["Information Systems"],
	  "dates" : "2015",
	  "url" : "http://www.baylor.edu/"
	},

	{
	  "name" : "Baylor University",
	  "location" : "Waco, TX",
	  "degree" : "Bachelor of Business Administration",
	  "majors" : ["Entrepreneurship"],
	  "dates" : "2014",
	  "url" : "http://www.baylor.edu/"
	}],

	"onlineCourses":[ {
	  "title" : "Front-End Web Developer Nanodegree",
	  "school" : "Udacity",
	  "date" : "2016",
	  "url" : "http://www.udacity.com/"
	}],

	"display" : function() {
		education.schools.forEach(function(val) {
    		$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%",val.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",val.degree);
			var formattedNameDegree=formattedSchoolName+formattedSchoolDegree;
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",val.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",val.majors);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",val.dates);
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		});
		$("#education").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(val) {
			$("#education").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",val.title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",val.school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",val.date);
			var formattedonlineURL = HTMLonlineURL.replace("%data%",val.url);
			var formattedTitleSchool=formattedonlineTitle+formattedonlineSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedonlineDates);
			$(".education-entry:last").append(formattedonlineURL);
		});
	}
};

var work = {
	"jobs" : [{
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
	}],

	"display" : function() {
		work.jobs.forEach(function(val) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",val.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",val.title);
			var formattedEmployerTitle = formattedEmployer+formattedTitle;
			var formattedLocation = HTMLworkLocation.replace("%data%",val.location);
			var formattedDates = HTMLworkDates.replace("%data%",val.dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",val.description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		});
	}
};

var projects = {
	"projects":[ {
	  "title" : "Game of Frogs",
	  "dates" : "2015",
	  "description" : "A game that includes a box and frog.",
	  "images" : ["images/frog1.png","images/frog2.png"]
	},

	{
	  "title" : "Responsive Website",
	  "dates" : "2016",
	  "description" : "A responsive personal website.",
	  "images" : ["images/website1.png","images/website2.png"]
	}],

	"display" : function() {
		projects.projects.forEach(function(val) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",val.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",val.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",val.description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(HTMLprojectImageBox);
			val.images.forEach(function(image) {
			    formattedProjectImages = HTMLprojectImage.replace("%data%",image);
			    $(".imagebox:last").append(formattedProjectImages);
			});
		});
	}
};

var footer = {
	'facebook' : "https://www.facebook.com/kevinzhang317",
	'linkedin' : "https://www.linkedin.com/in/kevinzhang317",
	'gmail' : "mailto:zkw317@gmail.com",
	'github' : "https://github.com/kevin317",
	"display" : function() {
		var formattedfacebook = HTMLfooterFacebook.replace("%data%",footer.facebook);
	    var formattedlinkedin = HTMLfooterLinkedin.replace("%data%",footer.linkedin);
	    var formattedgmail = HTMLfooterGmail.replace("%data%",footer.gmail);
	    var formattedgit = HTMLfooterGit.replace("%data%",footer.github);
	    $("#footerContacts").append(formattedfacebook);
	    $("#footerContacts").append(formattedlinkedin);
	    $("#footerContacts").append(formattedgmail);
	    $("#footerContacts").append(formattedgit);
	}
};

function inName(){
	var index = bio.name.indexOf(' ');
	var initial = bio.name[0].toUpperCase();
	var firstname = bio.name.slice(1,index).toLowerCase();
	var lastname = bio.name.slice(index+1).toUpperCase();
	var newname=initial+firstname+" "+lastname;
	return newname;
}

bio.display();
projects.display();
education.display();
work.display();
footer.display();