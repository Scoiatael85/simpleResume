frontend-nanodegree-arcade-game
===============================
# Bugg-Her
_A Frogger knock-off_

This is a simple Frogger-like game. The objective to cross the road.

### Bonus Levels
The game is very simple currently. to add a little extra flair I had a few hidden
bonus levels. If you catch the golden scarab (`Reward` sprite), your player sprite
should change. Doing so again changes the enemies, and the scarab itself.
A third capture unlocks the 4th level witch is considerably harder. 


## Setup - Installation
For the game to function correctly, you need to have a directory containing:
1. index.html
2. 'css' folder
	* style.css
3. 'js' folder
	* app.js
	* engine.js
	* resources.js
4. 'images' folder
	* char-pink-girl.png
	* char-princess-girl.png
	* char-drown-girl.png
	* char-blessed-girl.png
	* enemy-bug.png
	* Rock.png
	* arrow.png
	* water-block.png
	* stone-block.png
	* grass-block.png
	* Blue-eyes.jpg
	* Key.png
	* Selector.png
	* enemy-bug-gold.png
5. _optional:_ README.md

If these items are not arrainged correctly, or any part of their names (including caps-vs-lowercase),
the resources.js and engine.js will not find them.

## Known bugs
On the rare occation the character will lose 2x-3x in an instant with only 1 enemy in contact. 
Don't know why...

## Controls
To move the character sprite you use the left(37), up(38), right(39), down(40) arrows on the keyboard.
This will move the sprite the respective directions. 

## Future projects
I need to make a couple of the redundant code work within loops. Probably `for ( in)` loops
and **NOT** `forEACH()` loops since those don't work on all forms of EI (ie 8 and possibly 6).

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