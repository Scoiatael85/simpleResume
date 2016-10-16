frontend-nanodegree-web-perf
==========================
## Website Performance Optimization portfolio project
_Do your job... Well_

This is a basic (very basic!!) portfolio site who's sole purpose is to direct to the views/pizza.html. There much web-opt needs to be done.

## How I hosted:
I used github.io to host and test everything. This is to force me to better use the git add, git status, git commit, and git push; all while using divverent branches. Trying to build skills...

## Setup - Installation
For the game to function correctly, you need to have a directory containing:
1. index.html
2. project-2048.html
3. project-mobile.html
4. project-webperf.html
5. 'css' folder
  style.css <!-- * This is actually not used due to inlining, but I left in for ease of reading -->
  * print.css
6. 'img' folder
  * 2048.png
  * cam_be_like.jpg
  * mobilewebdevs.jpg
  * profilepic.jpg
7. 'js' folder
  * perfmatters.js
8. 'views' folder
  * pizza.html
  * 'css' folder
    a. bootstrap-grid.css
    b. bootstrap-grid.min.css
    c. style.css
  * 'image' folder
    a. pizza.png
    b. pizza-sm.png
    c. pizzeria.jpg
  * 'js' folder
    a. main.js
    b. main.min.js
    c. main1.js <!-- * same as main.min except without the performance trackers -->
9.  README.md

If these items are not arrainged correctly, or any part of their names (including caps-vs-lowercase), they will not be found.


## Where it stands:
There is always the suggection to prioritize content and make for browser caching. But sadly I don't understand how to do that yet... Would be useful in the future!!!

### index.html:
Here I'm able to recieve a pagespeed score of 95/100 mobile & 97/100 desktop.
 * I @media to call print.css only when nessicerry
 * I minified and inlined the css since there wasn't much
 * I called my font/style as through js to remove render blocking
 * I minified and ascync'ed my performance trackers to remove blocking
 * I optimized my img folder through 3 filters

### pizza.html:
This was...fun... :`(
  * First and foremeost, I had to change the viewport so i could make it work on mobile
  * I added backface-visibility:hidden; to .movers in style.css
  * I ran code through http://autoprefixer.github.io/
  * I minified and inlined ALL css, both style.css and bootstrap-grid.css
  * I optimized the images 3 (4 for the pizzeria.jpg) x through filters
  * main.js
    - wherever possible i changed to getElementsByClassName 
    - resizePizzas() I took all the junk out of the for loop to keep it simple
    - pizzasDiv moved the object outside the loop as to not call document.getElementById 100x!
    - updatePositions(ugh) moved the junk out of the loop to only call sin once. 
    - made my phase and array and had my loop push into that array as opposed to using a modulo to reduce proccessing
    - used a 2nd loop and style.transform to increase efficiency of the .movers
    - addEventListener('scroll' now calls requestAnimationFrame
    - made images smaller in px size to now resize them in browser (~22x)
    - instead of a set number of pizzas, I changed it to be depenent of the viewport as to make better for mobile
    - as often as possible i use i-- instead of i++ as practice as it can offer performance benefits

## Known bugs
The .movers arnt perfect for all mobile sizes... pizzas are cut off and not many are seen. 

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
