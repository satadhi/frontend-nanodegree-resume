var formattedName = HTMLheaderName.replace("%data%", "Satadhi Halder");
var formattedRole = HTMLheaderRole.replace("%data%", "web developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);
var bio = {
    "name" : "satadhi ",
    "role" : "web developer ",
    "contact" : "i am mostly in my home ",
    "pic" : "../images/fry.jpg"
    
}
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.pic);
