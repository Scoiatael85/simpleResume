//Future to do: Make all in 1 class with each in different sub classes
//figure those darn forEach loops for all the allEnemies areas...
'use strict';

//this is for many features
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//part of the optional aspect
var Door = function(x, y) {
    this.sprite = 'images/Selector.png';
    this.w = 90;
    this.h = 65;
    this.x = x;
    this.y = y;
};
Door.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var secretDoor = new Door(202, -40);
//end of the optional part

//i grouped all my enimy stuff together for faster editing as i went
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.w = 80;
    this.h = 45;
    this.respawn();
};
Enemy.prototype.update = function(dt) {
    this.x = (this.x += this.speed);
    if (this.x > 510) {this.respawn();} 
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.respawn = function() {
    this.x = getRandomInt(-300, -200);
         var path = getRandomInt(0, 300); 
            if (path > 199) {
                path = 230;
            } else if (path > 100) {
                path = 145;
            } else if (path >=0) 
                path = 62;
    this.y = path;
    this.speed = getRandomInt (1,6);
};

//same with the player
var Player = function(x, y) {
    this.sprite = 'images/char-pink-girl.png';
    this.x = x;
    this.y = y;
    this.w = 55;
    this.h = 45;
};
Player.prototype.update = function(dt) {
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.hitDetect = function(){
    var p = this; 
    var e0 = allEnemies[0];
    var e1 = allEnemies[1];
    var e2 = allEnemies[2];
    var e3 = allEnemies[3];
    var e4 = allEnemies[4];
    var e5 = allEnemies[5];
    var g = goldBugs[0];
//i really wish I could make this work more cleanly as a loop, but struggled to find the answer
    if (p.x < g.x + g.w && p.x + p.w > g.x && p.y < g.y + g.h && p.h + p.y > g.y && goldBugs[0].sprite === 'images/Key.png'){
       this.youGotTheKey();
      } 
    if (p.x < g.x + g.w && p.x + p.w > g.x && p.y < g.y + g.h && p.h + p.y > g.y && player.sprite === 'images/char-princess-girl.png'){
       this.deathtotheQueen();
      } 
    if (p.x < g.x + g.w && p.x + p.w > g.x && p.y < g.y + g.h && p.h + p.y > g.y){
       this.findGold();
      }
    if (p.x < e0.x + e0.w && p.x + p.w > e0.x && p.y < e0.y + e0.h && p.h + p.y > e0.y){
        this.youLose();
      }
    if (p.x < e1.x + e1.w && p.x + p.w > e1.x && p.y < e1.y + e1.h && p.h + p.y > e1.y){
        this.youLose();
      }
    if (p.x < e2.x + e2.w && p.x + p.w > e2.x && p.y < e2.y + e2.h && p.h + p.y > e2.y){
        this.youLose();
      }
    if (p.x < e3.x + e3.w && p.x + p.w > e3.x && p.y < e3.y + e3.h && p.h + p.y > e3.y){
        this.youLose();
      }
    if (p.x < e4.x + e4.w && p.x + p.w > e4.x && p.y < e4.y + e4.h && p.h + p.y > e4.y){
        this.youLose();
      }
    if (p.x < e5.x + e5.w && p.x + p.w > e5.x && p.y < e5.y + e5.h && p.h + p.y > e5.y){
        this.youLose();
      }
};
Player.prototype.handleInput = function(key) {
    var step = 83.25;
    var sidestep = 100;
//kind of funny, i leaned case break as CASE / END through SQL. I was happy to see it work similar here
    switch (key){
        case 'left':
            this.x -= sidestep;
            break;
        case 'up':
            this.y = this.y -= step ;
            break;
        case 'right':
            this.x += sidestep;
            break;
        case 'down':
              this.y += step ;
            break;
    }
    if(this.x < 0) this.x = 0;
    if(this.x > 400) this.x = 400;
    if(this.y <= 0 && (this.x <=199 || this.x >=201) && goldBugs[0].speed === 0) window.setTimeout(this.drown, 50);
    if(this.y <= 0 && this.x === 200 && goldBugs[0].speed === 0) window.setTimeout(this.epicWin, 50);
    if(this.y <= 0) window.setTimeout(this.splash, 155);
    if(this.y > 405) this.y = 405;
Player.prototype.drown = function() {
        this.sprite = 'images/char-drown-girl.png';
        window.setTimeout(function(){location.reload()}, 45);
        window.setTimeout(function(){window.alert("So close to victory, but sadly you were pelted by arrows in the water");}, 40);
    }
Player.prototype.epicWin = function() {
        this.sprite = 'images/char-blessed-girl.png';
        window.setTimeout(function(){window.alert("I cannot believe you won the whole game!!!");}, 45);
        window.setTimeout(function(){window.location.href = "http://i0.kym-cdn.com/photos/images/newsfeed/000/185/028/somuchwinkid.gif";}, 50);
    }
Player.prototype.splash = function() {
        location.reload();
        window.alert("YAY! You Win!");
    }
};
Player.prototype.youLose = function() {
        window.alert("NOO! You Lose!");
        location.reload();
    }
Player.prototype.findGold = function() {
        this.x = 200;
        this.y = 405;
        this.sprite = 'images/char-princess-girl.png';
        window.alert("Holy crap! Your the Queen!");
    }
Player.prototype.deathtotheQueen = function() {
        this.x = 200;
        this.y = 405;
        allEnemies[0].sprite = 'images/Rock.png';
        allEnemies[1].sprite = 'images/Rock.png';
        allEnemies[2].sprite = 'images/Rock.png';
        allEnemies[3].sprite = 'images/Rock.png';
        allEnemies[4].sprite = 'images/Rock.png';
        allEnemies[5].sprite = 'images/Rock.png';
        goldBugs[0].sprite = 'images/Key.png';
        window.alert("The Queen is greedy. The Queen must die! Stone the Queen!");
    }
Player.prototype.youGotTheKey = function() {
        goldBugs[0].x = 99999;
        window.setTimeout(function() {goldBugs[0].speed = 0}, 100);
        this.x = 200;
        this.y = 405;
        allEnemies[0].w = 200;
        allEnemies[1].w = 200;
        allEnemies[2].w = 200;
        allEnemies[3].w = 200;
        allEnemies[4].w = 200;
        allEnemies[5].w = 200;
        allEnemies[0].sprite = 'images/arrow.png';
        allEnemies[1].sprite = 'images/arrow.png';
        allEnemies[2].sprite = 'images/arrow.png';
        allEnemies[3].sprite = 'images/arrow.png';
        allEnemies[4].sprite = 'images/arrow.png';
        allEnemies[5].sprite = 'images/arrow.png';
        window.alert("The Queen has the key! She must die before she reaches heaven!");
    }
//also a part of the optional way to play the game
var Reward = function() {
    this.sprite = 'images/enemy-bug-gold.png';
    this.w = 25;
    this.h = 25;
    this.respawn();
};
Reward.prototype.update = function(dt) {
    this.x = (this.x += this.speed);
    if (this.x > 510) {this.respawn();}
};
Reward.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Reward.prototype.respawn = function() {
    this.x = getRandomInt(-10000, -4000);
         var path = getRandomInt(0, 300);
            if (path > 199) {
                path = 230;
            } else if (path > 100) {
                path = 145;
            } else if (path >=0) 
                path = 62;
    this.y = path;
    this.speed = getRandomInt (15,25);
};
//end of the option


//creating all the sprites onto the screen
var allEnemies = [];
for(var bugs = 0; bugs < 6; bugs++){
    allEnemies.push(new Enemy());
}
var goldBugs = [];
for(var bug = 0; bug < 1; bug++){
    goldBugs.push(new Reward());
}
var player = new Player(200, 405);


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

    var pressButton;

    $('.dButton').on('click', function(e) {
    pressButton = $(this).attr('id')
    pressButton = $(this).attr('id')
    pressButton = $(this).attr('id')
    pressButton = $(this).attr('id')

    console.log(pressButton)
    player.handleInput(pressButton);//
});
// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });
