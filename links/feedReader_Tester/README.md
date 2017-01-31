frontend-nanodegree-feedreader
==========================
# Feed Reader
_&& function tester_

This is a feed reader that pulls feeds from a premade array found in the app.js file. It then displays these feeds in an easily read format. At the same time, the bottom of the page acts as a function tester using the js library Jasmine (https://jasmine.github.io/). 

### Opening the App:
Assuming you either opened a zipfile or forked a repo from github, you may open the app simply by double clicking on the file named index.html.
The file may also be found at www.daelric.com/links/feedReader_Tester/index.html (visit www.daelric.com and click on the link titled Tech News)

### Feed:
Immediately when the page loads up, it'll dislay the feed for you. Feel free to click around and read the articles of listen to the podcasts.

### Func Tester:
At the bottom of the page you'll see the beautifully formatted Jasmine tester. It will display for you the various suites, the spec tests found within. It should display all tests as passing, though I'm sure you could easily break one if you like to confirm they all work fine.

### Where it stands:
This currently only displays the feeds found in a preset array of 4 items. This could easily be altered to include the feeds from various sources by pulling in more APIs and properly apply the feed that is returned. In the future, this will most likely evolve into a greater project.

## Setup - Installation
For the app to function correctly, you need to have a directory containing:
1. index.html
2. 'css' folder
  * style.css
  * normalize.css
  * icomoon.css
3. 'fonts' folder
  * icomoon.eot
  * icomoon.svg
  * icomoon.ttf
  * icomoon.woff
4. 'jasmine' folder
  * 'lib' folder
  	  * 'jasmine-2.1.2' folder
		  * boot.js
		  * console.js
		  * jasmine-html.js
		  * jasmine.css
		  * jasmine.js
		  * jasmine_favicon.png
  * 'spec' folder
	  * feedreader.js
3. 'js' folder
  * app.js
5.  README.md

If these items are not arrainged correctly, or any part of their names (including caps-vs-lowercase),
index.html will not find them.


## MIT License

Copyright (c) [2017] [Scott J. Davis]

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