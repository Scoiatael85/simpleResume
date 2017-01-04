var map;
var markersArray = [];

//Initialize the map with Google.maps API
function initMap() {  
    var mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(43.154855, -71.185913),
        mapTypeControl: false,
        disableDefaultUI: true
    };
    if($(window).width() <= 1080) {
        mapOptions.zoom = 7;
    }
    if ($(window).width() < 850 || $(window).height() < 595) {
        hideNav();
    }
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);  

    setMarkers(markers);

    setAllMap();

    //Reset the map when the window resizes
    function resetMap() {
        var windowWidth = $(window).width();
        if(windowWidth <= 1080) {
            map.setZoom(7);
            map.setCenter(mapOptions.center);
        } else if(windowWidth > 1080) {
            map.setZoom(7);
            map.setCenter(mapOptions.center);   
        }
    }
   $(window).resize(function() {
        resetMap();
    }); 
    directionsDisplay.setMap(map);

    //Calculate directions and display them Optimized as a Polyline
    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    addBegin.change(onChangeHandler);
    addEnd.change(onChangeHandler);

    //Que in waypoints & make origin the destination if none is specified
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  var checkboxArray = document.getElementById('waypoints');
  for (var i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray.options[i].selected) {
      waypts.push({
        location: checkboxArray[i].value,
        stopover: true
      });
    }
    // if (addEnd.val() === '') {
    //     addEnd.attr('placeholder', addBegin.val());
    //     if (addEnd.val() === '') {
    //         addEnd.val(addBegin.val());
    //     }
    //     if (addBegin.val() === '' && addEnd.val() === '') {
    //         addEnd.attr('placeholder', "End Adventure Here...");
    //     }
    // }
  }

    directionsService.route({
      origin: addBegin.val(),
      destination: addEnd.val(),
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
    if (status === 'OK') {
        $('#failure').css('display', 'none');
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
    } else {
       $('#failure').css('display', 'block');
     }
    });
    }
    window.onChangeHandler = onChangeHandler;
}


//counts the number of markers and sets them on the map
function setAllMap() {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(map);
    } 
  }

function setMarkerVisibility() {
  for (var i = 0; i < markersArray.length; i++) {
    if(markersArray[i].boolTest === true) {
    markersArray[i].setMap(map);
    } else {
//    markersArray[i].setMap(null);
    }
  }
}

//The database of all the presented Breweries in New England
var markers = [
    {   
    title: "Narragansett Brewing Co.",
    lat: 41.876652, 
    lng: -71.388914,
    streetAddress: "461 Main St",
    cityAddress: "Pawtucket, RI 02860",
    url: "http://narragansettbeer.com/",
    id: "nav0",
    visible: ko.observable(true),
    boolTest: true
    },
    {   
    title: "Cambridge Brewing Co.",
    lat: 42.368136, 
    lng: -71.090214,
    streetAddress: "1 Kendall Square",
    cityAddress: "Cambridge, MA 02139",
    url: "http://cambridgebrewingcompany.com/",
    id: "nav1",
    visible: ko.observable(true),
    boolTest: true
    },
    {   
    title: "Lost Nation Brewing",
    lat: 44.569963, 
    lng: -72.603064,
    streetAddress: "B, 87 Old Creamery Rd",
    cityAddress: "Morristown, VT 05661",
    url: "http://lostnationbrewing.com/",
    id: "nav2",
    visible: ko.observable(true),
    boolTest: true
    },
    {   
    title: "Tree House Brewing Co.",
    lat: 42.092983, 
    lng: -72.288632,
    streetAddress: "160 E Hill Rd",
    cityAddress: "Monson, MA 01057",
    url: "http://treehousebrew.com/",
    id: "nav3",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Banded Horn Brewing Co.",
    lat: 43.493005, 
    lng: -70.452222,
    streetAddress: "13-W, 32 Main St",
    cityAddress: "Biddeford, ME 04005",
    url: "http://bandedhorn.com/",
    id: "nav4",
    visible: ko.observable(true),
    boolTest: true
    },
    {   
    title: "Notch Brewing",
    lat: 42.519902, 
    lng: -70.890867,
    streetAddress: "283 Derby St",
    cityAddress: "Salem, MA 01970",
    url: "http://notchbrewing.com/",
    id: "nav5",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Portsmouth Brewery",
    lat: 43.077912,
    lng: -70.757491,
    streetAddress: "38 Market St",
    cityAddress: "Portsmouth, NH 03801",
    url: "http://portsmouthbrewery.com/",
    id: "nav6",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Jack’s Abby Brewing",
    lat: 42.280422, 
    lng: -71.411490,
    streetAddress: "100 Clinton St",
    cityAddress: "Framingham, MA 01702",
    url: "http://jacksabby.com/",
    id: "nav7",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Two Roads Brewing Co.",
    lat: 41.185856, 
    lng: -73.142420,
    streetAddress: "1700 Stratford Ave",
    cityAddress: "Stratford, CT 06615",
    url: "https://tworoadsbrewing.com/",
    id: "nav8",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Mystic Brewery",
    lat: 42.391342, 
    lng: -71.044148,
    streetAddress: "174 Williams St",
    cityAddress: "Chelsea, MA 02150",
    url: "http://mystic-brewery.com/",
    id: "nav9",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Idletyme Brewing Co.",
    lat: 44.474068, 
    lng: -72.713915,
    streetAddress: "1859 Mountain Rd",
    cityAddress: "Stowe, VT 05672",
    url: "https://idletymebrewing.com/",
    id: "nav10",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Idle Hands Craft Ales",
    lat: 42.424392, 
    lng: -71.074746,
    streetAddress: "89 Commercial St",
    cityAddress: "Malden, MA 02148",
    url: "http://idlehandscraftales.com/",
    id: "nav11",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "White Birch Brewing",
    lat: 43.058419, 
    lng: -71.442011,
    streetAddress: "1339 Hooksett Rd",
    cityAddress: "Hooksett, NH 03106",
    url: "http://whitebirchbrewing.com/",
    id: "nav12",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Abandoned Building Brewery",
    lat: 42.274179, 
    lng: -72.661653,
    streetAddress: "142 Pleasant St",
    cityAddress: "Easthampton, MA 01027",
    url: "https://abandonedbuildingbrewery.com/",
    id: "nav13",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "New England Brewing Co.",
    lat: 41.33878, 
    lng: -72.980402,
    streetAddress: "175 Amity Rd",
    cityAddress: "Woodbridge, CT 06525",
    url: "http://newenglandbrewing.com/",
    id: "nav14",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Oxbow Brewing Co.",
    lat: 44.082794, 
    lng: -69.563680,
    streetAddress: "274 Jones Woods Rd",
    cityAddress: "Newcastle, ME 04553",
    url: "http://oxbowbeer.com/",
    id: "nav15",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Maine Beer Co.",
    lat: 43.839841, 
    lng: -70.121731,
    streetAddress: "525 US-1",
    cityAddress: "Freeport, ME 04032",
    url: "http://mainebeercompany.com/",
    id: "nav16",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Hill Farmstead Brewery",
    lat: 44.606276, 
    lng: -72.263635,
    streetAddress: "403 Hill Rd",
    cityAddress: "Greensboro Bend, VT 05842",
    url: "http://hillfarmstead.com/",
    id: "nav17",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Samuel Adams",
    lat: 42.314804, 
    lng: -71.103218,
    streetAddress: "30 Germania St",
    cityAddress: "Boston, MA 02130",
    url: "http://samueladams.com/",
    id: "nav18",
    visible: ko.observable(true),
    boolTest: true
    },
    {
    title: "Harpoon Brewery",
    lat: 42.34665, 
    lng: -71.033669,
    streetAddress: "306 Northern Ave",
    cityAddress: "Boston, MA 02210",
    url: "http://Harpoonbrewery.com/",
    id: "nav19",
    visible: ko.observable(true),
    boolTest: true
    }   
];

//Google Street view to make images pop up in the infoWindow
    //some needed a little adjustment to make appealing for the app
//                 Nav # 0    1   2    3    4    5    6   7    8    9    10   11  12   13  14   15   16   17  18  19
var headingImageView = [290, 19, 30, null, -10, 290, 285, 95, -32, 191, 190, 293, 80, 175, 54, 270, 133, 20, 157, 267];     
var streetViewImage;
var streetViewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=300x150&location=';

function streetImage() {
     if (i === 1) {
         streetViewImage = streetViewUrl + '42.365952,-71.09139&heading=' + headingImageView[i];                 
    } else if (i === 2) {
         streetViewImage = streetViewUrl + '44.5698785,-72.6034606&heading=' + headingImageView[i];
    } else if (i === 3) {
         streetViewImage = 'https://static1.squarespace.com/static/501bb93ec4aa651f100e3b0f/t/54fcac81e4b0744cac578162/1425845380792/Photo+Dec+10,+3+51+47+PM.jpg';
    } else if (i === 4) {
         streetViewImage = streetViewUrl + '43.492565,-70.452947&heading=' + headingImageView[i];
    } else if (i === 5) {
         streetViewImage = streetViewUrl + '42.520458,-70.890754&heading=' + headingImageView[i];
    } else if (i === 8) {
         streetViewImage = streetViewUrl + '41.185437,-73.142081&heading=' + headingImageView[i];
    } else if (i === 9) {
         streetViewImage = streetViewUrl + '42.392126,-71.044136&heading=' + headingImageView[i];
    } else if (i === 15) {
         streetViewImage = streetViewUrl + '44.083128,-69.56301&heading=' + headingImageView[i];
     } else {
       streetViewImage = streetViewUrl +
                        markers[i].lat + ',' + markers[i].lng +
                        '&heading=' + headingImageView[i] + '&pitch=1'; 
                    }                   
}

//Actually place all the markers on the map and links the infoWindows
//to the different markers
function setMarkers(location) {
    
    for(i=0; i<location.length; i++) {
        markersArray.push(new google.maps.Marker({
          position: new google.maps.LatLng(location[i].lat, location[i].lng),
          zIndex:1,
          map: map,
          title: location[i].title,
          animation: google.maps.Animation.DROP,
          icon: {
            url: 'img/beerMarker.png',
            size: new google.maps.Size(26.25, 30),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(12.5, 40)
            },
          shape: {
            coords: [1,25,-40,-25,1],
            type: 'poly'
          }  
        }));

        streetImage();

        //Fill infoWindow content into each marker
        var w;
        var h;
        var windowWidth = $(window).width();
        if(windowWidth <= 750) {
            w = 165;
            h = 82.5;
        } else if(windowWidth > 750) {
            w = 300;
            h = 150;
        }
        location[i].contentString = '<img src="' + streetViewImage + 
                                    '" width="' + w + '" height="' + h + '" alt="Street View Image of ' + location[i].title + '"><br><hr style="margin-bottom: 5px"><strong>' + 
                                    location[i].title + '</strong><br><p>' + 
                                    location[i].streetAddress + '<br>' + 
                                    location[i].cityAddress + '<br></p><a class="web-links" href="http://' + location[i].url + 
                                    '" target="_blank">' + location[i].url + '</a><br><div class="forecast"><ul></ul></div>';

        var infowindow = new google.maps.InfoWindow({
            content: markers[i].contentString
        });

        //Click the marker to view infoWindow
            //Zoom in and center location on click
                //Animate the marker to bounce
        new google.maps.event.addListener(markersArray[i], 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(location[i].contentString);
            infowindow.open(map,this);
//            retrieveWeather();
            var windowWidth = $(window).width();
            if(windowWidth <= 1080) {
                map.setZoom(14);
            } else if(windowWidth > 1080) {
                map.setZoom(16);  
            }
            map.setCenter(marker.getPosition());
            location[i].picBoolTest = true;
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }; 
        })(markersArray[i], i));
        
        //Click nav element to view infoWindow
            //zoom in and center location on click
        var searchNav = $('#nav' + i);
        searchNav.click((function(marker, i) {
          return function() {
            infowindow.setContent(location[i].contentString);
            infowindow.open(map,marker);
//            retrieveWeather();
            var windowWidth = $(window).width();
            if(windowWidth <= 1080) {
                map.setZoom(14);
            } else if(windowWidth > 1080) {
                map.setZoom(16);  
            }
            map.setCenter(marker.getPosition());
            location[i].picBoolTest = true;
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }; 
        })(markersArray[i], i));
    }
}

//Query through the different locations from nav bar with knockout.js
    //only display the markers and nav elements that match query result
var viewModel = {
    query: ko.observable(''),
    doSomething : function() {
            onChangeHandler();
        }
};

viewModel.markers = ko.computed(function() {
    var self = this;
    console.log('--------------');
    
    var search = self.query().toLowerCase();
    console.log(search)
    if (search === "") {
        console.log("empty");
    for(var v=0; v<markersArray.length; v++){
        markersArray[v].setVisible(true);
    }
        return markers;
    } else {
    console.log("not empty");
    console.log($('#searchBox').val())

    return ko.utils.arrayFilter(markers, function(marker) {
        var match = marker.title.toLowerCase().indexOf(search) >= 0; // true or false
 
        marker.boolTest = match;
    for(var v=0; v<markersArray.length; v++){
        var arMatch = markersArray[v].title.toLowerCase().indexOf(search) >= 0; // true or false
        markersArray[v].setVisible(arMatch);
   }
        if (!match) {
           setMarkerVisibility();
        }
        return match;
    });       
}}, viewModel);

ko.applyBindings(viewModel);

//Hide and Show entire Nav/Search Bar on click
    // Hide/Show Bound to the img #miniNav
    //The nav is repsonsive to smaller screen sizes
var isNavVisible = true;
function noNav() {
    $("#search-nav").animate({
                height: 0, 
            }, 500);
            setTimeout(function() {
                $("#search-nav").hide();
            }, 500);    
            $("#miniNav").attr("src", "img/mapPointer.png");
            isNavVisible = false;
}
function yesNav() {
    $("#search-nav").show();
            var scrollerHeight = $("#directions").height() + 25;
            if($(window).height() < 500) {
                $("#search-nav").animate({
                    height: scrollerHeight,
                }, 500);  
            } else {
            $("#search-nav").animate({
                height: scrollerHeight,
            }, 500);
            }
            $("#miniNav").attr("src", "img/mapPointer.png");
            isNavVisible = true;
}

function hideNav() {
    if(isNavVisible === true) {
            noNav();
            
    } else {
            yesNav();  
    }
}
$("#miniNav").click(hideNav);

//Hide Nav if screen width is resized to < 750 or height < 495
//Show Nav if screen is resized to >= 750 or height is >= 495
    //Function is run when the window is resized
$(window).resize(function() {
    var windowWidth = $(window).width();
    if ($(window).width() < 750 && isNavVisible === true) {
            noNav();
        } else if($(window).height() < 495 && isNavVisible === true) {
            noNav();
        }
    if ($(window).width() >= 750 && isNavVisible === false) {
            if($(window).height() > 495) {
                yesNav();
            }
        } else if($(window).height() >= 495 && isNavVisible === false) {
            if($(window).width() > 750) {
                yesNav();
            }     
        }    
});


//Open/close the directions div when clicked
//this will replace the search-nav div for display
//repsonsive
var directBox = $("#directions");
var directBoxActive = false;
var directButton = $("#directButton")
directButton.click(function() {
    if(directBoxActive === false) {
        $("#scroller").css("display", "none");
        directButton.html("Navigation");
        $("#searchBox").hide(), 500;
        $("#directions").css("display", "block");

        directBoxActive = true;
        
        if($(window).width() < 670 && screen.orientation.type === "landscape-primary") {
            directButton.animate({
                width: "95%"
            }, 500);
            $('#waypoints').attr('size', '8');
        } else if($(window).width() < 670 && screen.orientation.type === "portrait-primary") {
            directButton.animate({
                width: "95%"
            }, 500);
            $('#waypoints').attr('size', '5');
        } else {directButton.animate({
            width: "100%"
            }, 500);}
    } else {
        $("#scroller").css("display", "block");
        $("#searchBox").css("display", "block");
        $("#directions").css("display", "none");
        directButton.html("Directions");
        directBoxActive = false;

        if($(window).width() < 580) {
            directButton.css("width", "37%");
            directButton.animate({
                width: "35%"
            }, 500);
        } else {
        directButton.css("width", "41%");
        directButton.animate({
        width: "35%"
        }, 500);}
    }
});

//Make the ending placeholder imitate the begining input 
var addBegin = $('#addBegin');
var addEnd = $('#addEnd');


  //Limit the waypoints to only 6 selected. This is due to the limits
    //of using the free goggle.maps APIs
  var last_valid_selection = null;
      $('#waypoints').change(function(event) {
        if ($(this).val().length > 6) {
          alert('Slow down there killer! You may only choose 6 at a time!');
          $(this).val(last_valid_selection);
        } else {
          last_valid_selection = $(this).val();
        }
      });

//Keeps the correct number of waypoints displayed clean/clear
window.addEventListener("orientationchange", function() {
var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    if (orientation.type === "landscape-primary") {
  console.log("That looks good.");
  $('#waypoints').attr('size', '8');
} else if (orientation.type === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
  $('#waypoints').attr('size', '8');
} else if (orientation.type === "portrait-secondary" || orientation.type === "portrait-primary") {
  console.log("Mmmh... you should rotate your device to landscape");
  $('#waypoints').attr('size', '5');
}
});

window.onerror = function() {
    $('#failure').css('display', 'block');
}

//GET Weather Underground JSON
    //Append Weather forecast for Washington DC to .forecast
    //If error on GET JSON, display message
function retrieveWeather(markersArray) {
var lat = markersArray[i].lat;
var lng = markersArray[i].lng;
var weatherUgUrl = "http://api.wunderground.com/api/8b2bf4a9a6f86794/conditions/q/" + lat + "," + lng + ".json";


//    http://api.wunderground.com/api/API_KEY/conditions/forecast/alert/q/37.252194,-121.360474.json

$.getJSON(weatherUgUrl, function(data) {
    var list = $(".forecast");
    detail = data.current_observation;
    list.append('<li>Temp: ' + detail.temp_f + '° F</li>');
    list.append('<li><img style="width: 25px" src="' + detail.icon_url + '">  ' + detail.icon + '</li>');
}).error(function(e){
        $(".forecast").append('<p style="text-align: center;">Sorry! Weather Underground</p><p style="text-align: center;">Could Not Be Loaded</p>');
    });
}









