frontend-nanodegree-Mapmaker
==========================
# NE Brewery Tour
_Get drunk via drinking [always have a DD]_

This is a map using the Google.map.api to allow you to plan a trip to visit various brweries around NE and get back home.

### Opening the App:
Assuming you either opened a zipfile or forked a repo from github, you may open the app simply by double clicking on the file named index.html.
The file may also be found at www.daelric.com/links/mapProject/index.html (visit www.daelric.com and click on the link titled Brew Tour)

### Map:
Immediately when the map loads up, it'll be centered on NE. You'll se 20 beer mugs DROP from the sky and land atop the breweries. You may click directly on one of these markers and have two things happen. 1) the map will center on the sleceted brewery and zoom in a considerable bit. 2) the marker will have an informative infoWindow pop open to give you some details.

### Nav:
On the top left of the screen is a grey nav area. Alternative to selecting a marker directly, you may slecet the brewery in the nav and have the same effect (map refocus/zoom & infoWindow open).

Within that nav div is a search bar. If you are looking for a specific brewery, this allows you to narrow your search in real time by typing into it. Give it a try! Find Harpoon!

Also within the nav div is a button labled `Directions`. Clicking that button hides the nav div and opens the directions div.

### Directions:
Within the Directions div you find 5 items. 
1) A Navigations button to take you back to the navigation menu
2) An input area to plug in your starting address
3) A list of excelent NE breweries to select as waypoints (max 6)
4) An input area to plug in your ending destination (if left empty this defaults to your starting location)
5) A submit button to begin the navigation

You may select as few as 0 and as many s 6 waypoints. The map reorients itself to a proper zoom and centering as needed.

### Where it stands:
This is currently designed to meet the requirements to pass the Udacity test. However, I intend to expand on it to displaying polyline and written directions as well. In the future, this will most likely evolve into a greater project.

## Setup - Installation
For the app to function correctly, you need to have a directory containing:
1. index.html
2. 'css' folder
  * style.css
  * style.min.css
  * mobile.css
  * mobile.min.css
3. 'js' folder
  * map.js
  * map.min.js
  * 'library' folder
      * knockout.js
4. 'img' folder
  * beerMarker.png
  * marker.png
  * mapPointer.png
5.  README.md

If these items are not arrainged correctly, or any part of their names (including caps-vs-lowercase),
index.html will not find them.

## Known bugs
Also the command to load the map with directions can/will happen automatically. If your imput causes an error. Simply finish plugging the rest in and hit the submit button.


## MIT License

Copyright (c) [2016] [Scott J. Davis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
