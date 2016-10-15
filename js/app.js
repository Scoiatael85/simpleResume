var work = [
		{
 			"employer" : "99 Restaurants",
 			"title" : "Assistant General Manager",
 			"dates" : "July, 2012 - Current",
 			"location" : "Attleboro, Mass",
 			"description" : "I manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		},
 		{	"employer" : "Unos Chicago Bar & Grille",
 			"title" : "Assistant General Manager",
 			"dates" : "Sept, 2008 - July, 2012",
 			"location" : "Portland, Maine",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		},
 		{	"employer" : "Ruby Tuesday",
 			"title" : "Assistant General Manager",
 			"dates" : "Aug, 2004 - Sept, 2008",
 			"location" : "Taunton, Mass",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		}
 	];

$.each(work, function (i, value) {
	$('.experience').append(
		'<div class="companybox">' 
		+ '<div class="company">' 
		+ '<h2>' + value.employer + '</h2>'
		+ '<p>' + value.dates + '</p>'
		+ '</div>'
		+ '<div class="details">' 
		+ '<h3>' + value.title + '</h3>'
		+ '<p>' + value.location + '</p>'
		+ '<p>' + value.description + '</p>'
		+ '</div>'
		+ '</div>'
	)
})