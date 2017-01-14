/*
This is empty on purpose! Your code to build the resume will go here.
 */


var model = {
    info: [
        {
            "name" : "Eunbi Go",
            "age" : 25,
            "role" : "Full Stack Web Developer",
            "contacts" : {
                "mobile" : "949-903-5277",
                "email" : "eunbigo91@gmail.com",
                "github" : "https://github.com/eunbigo91",
                "location" : "Lynnwood, WA"
            },
            "image" : "images/fry.jpg",
            "welcomeMessage" : "I am a enthusiastic full stack web developer and lifelong learner.",
            "skills" : ["HTML, CSS, JavaScript", "Python", "SQL", "Git & Github"]
        }
    ],
    jobs: [
        {
            "title" : "Data Management Analyst",
            "employer" : "M & Service",
            "date" : "October 2015 – February 2016",
            "workLocation" : "Seoul, South Korea",
            "description" : "Communicated with businesses and vendors collecting correct data which led to 1% increase in accuracy. Participated in weekly meetings to analyze data and gather ideas to improve efficiency."
        },
        {
            "title" : "Multimedia/Database Manager",
            "employer" : "Ansan Dongsan Church",
            "date" : "December 2010 - April 2012",
            "workLocation" : "Ansan, South Korea",
            "description" : "Transferred data in webpage and application including uploading of 7-10 multimedia files per day. Analyzed and corrected errors including editing of multimedia before release which led to an 30% increase in accuracy."
        }
    ],
    schools: [
        {
        "name" : "Seoul Women's University",
        "location" : "Seoul, South Korea",
        "degree" : "Bachelor",
        "major" : ["Contents design", " Multimedia"],
        "dates" : "March 2010 - August 2015"
        },
        {
        "name" : "Dongsan High School",
        "location" : "Ansan, South Korea",
        "dates" : "March 2007 - February 2010",
        "degree" : "High School Diploma"
        }
    ],
    onlineCourses: [
        {
            "title" : "Full Stack Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "July 2016 - In Progress",
            "url" : "https://udacity.com"
        }
    ]
}

var octopus = {
    init: function(){
        view.init();
    },
    getInfo: function(){
        return model.info[0];
    },
    getJobs: function(){
        return model.jobs;
    },
    getSchools: function(){
        return model.schools;
    },
    getOnlineCourses: function(){
        return model.onlineCourses;
    },
    inName: function(name_param){
    //trim removes the white space from the front and the back of that string
    name_param = name_param.trim().split(" ");

    name_param[0] = name_param[0].slice(0,1).toUpperCase() + name_param[0].slice(1).toLowerCase();
    name_param[1] = name_param[1].toUpperCase();

    name_param = name_param[0] +" " + name_param[1];
    return name_param;
    }
}

var view = {
    init: function(){
        //bio
        var bio = octopus.getInfo();
        var formattedName = HTMLheaderName.replace("%data%", octopus.inName(bio.name));
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedImage = HTMLbioPic.replace("%data%",bio.image);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedGithub, formattedLocation);
        $('#footerContacts').append(formattedMobile,formattedEmail);

        $("#header").prepend(formattedName,formattedRole).append(formattedImage,formattedMessage);
        $("#header").append(HTMLskillsStart);

        for(skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkills);
        };

        //working
        var jobs = octopus.getJobs();
        for (var job in jobs){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedDate = HTMLworkDates.replace("%data%", jobs[job].date);

            var formattedLocation = HTMLworkLocation.replace("%data%", jobs[job].workLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
            $(".work-entry:last").append(formattedEmployerTitle+formattedDate+formattedLocation+formattedDescription);
        };

        //education
        var schools = octopus.getSchools();
        $("#education").append(HTMLschoolStart);
        for (var school in schools) {
            formattedName = HTMLschoolName.replace("%data%", schools[school].name);
            formattedDate = HTMLschoolDates.replace("%data%", schools[school].dates);
            formattedLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", schools[school].major);
            $(".education-entry:last").append(formattedName+formattedDegree+formattedDate+formattedLocation+formattedMajor);
        }

        var onlineCourses = octopus.getOnlineCourses();
        $(".education-entry:last").append(HTMLonlineClasses);
        for (course in onlineCourses) {
                formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourses[course].title);
                formattedDate = HTMLonlineDates.replace("%data%", onlineCourses[course].dates);
                var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourses[course].school);
                var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourses[course].url);
                $(".education-entry:last").append(formattedTitle+formattedSchool+formattedDate+formattedUrl);
        }

        //map
        $("#mapDiv").append(googleMap);
    }
}

octopus.init();