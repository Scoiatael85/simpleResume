var work = [
		{
 			"employer" : "99 Restaurants",
 			"title" : "R&D/Training, First Assistant Manager",
 			"dates" : "July, 2012 - Current",
 			"location" : "Attleboro, Mass",
 			"description" : [
 							"Expert with the Aloha and New Journal Entries systems: Maintains and updates inventory master for smooth and clean inventory/reconciliation process",
 							"Intimate knowledge of pmix analysis to determine weekly pars/ordering as well as focuses to increase sales",
 							"Routine inspection of Aloha and NJE communication to guarantee back office and home office network alignment"
 							]
 		},
 		{	"employer" : "Unos Chicago Bar & Grille",
 			"title" : "Assistant General Manager/Marketing Manager",
 			"dates" : "Sept, 2008 - July, 2012",
 			"location" : "Portland, Maine",
 			"description" : [
 							"Cultivated strong community partnerships through fundraising efforts with 30K annual revenue stream.",
 							"Implemented successful onboarding/development processes to support staff in beginning management responsibilities.",
 							"Provided outstanding leadership and consistency within daily restaurant procedures and functions."
 							]
 		},
 		{	"employer" : "Ruby Tuesday",
 			"title" : "Assistant General Manager",
 			"dates" : "Aug, 2004 - Sept, 2008",
 			"location" : "Taunton, Mass",
 			"description" : [
 							"Implemented a pilot training program (“Path to Success”) for 40+ staff members.",
 							"Responsible for all aspects of store level inventory ordering, budgeting and analysis.",
 							"Worked to implement many effective quality improvement measures through exceptional day to day operational service and management within in a high volume (3.4m/annual) restaurant."
 							]
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
		+ '<li>' + value.description[0] + '</li>'
		+ '<li>' + value.description[1] + '</li>'
		+ '<li>' + value.description[2] + '</li>'
		+ '</div>'
		+ '</div>'
	)
})

  $(function(){
      $(".quote").typed({
        strings: ['"Imagination will often carry us to worlds that never were, but without it we go nowhere." </br></br> ― Carl Sagan', '“Everything you can imagine is real.” </br></br> ― Pablo Picasso"', '"Imagination has no age. And dreams are forever.” </br></br> ― Walt Disney', '“Imagination should be used, not to escape reality but to create it.” </br></br> ― Colin Wilson', '"Reality leaves a lot to the imagination." </br></br> - John Lennon', '“Imagination is more important than knowledge... For knowledge is limited to all we now know and understand, while imagination embraces the entire world.” </br></br> - Albert Einstein'],
        typeSpeed: 0
      });
  });

  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
  });

$('.projectLink').on('click', function () {
	event.preventDefault();
	console.log(this)
	$(this).animateCss('tada');
	console.log($(this).attr('href'))
	var link =$(this).attr('href')
	if (link !== '#') {
		setTimeout(function(){ 
			window.location.href = link;
			return false;
		}, 1000);
	}	 
})

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    }

$(window).scroll(function(){
	if ($('.dice').isOnScreen()){
			$(".dice").animateCss('rollIn');
	} else {
		console.log(false)
		console.log($('.dice').hasClass('.rollIn'))
	}
    
});



