// just getting it all started up

var Engine = (function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    function main() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;
        update(dt);
        render();
        lastTime = now;
        win.requestAnimationFrame(main);
    }
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }
    function update(dt) {
        updateEntities(dt);
         player.hitDetect();
    }
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        goldBugs.forEach(function(reward) {
            reward.update(dt);
        });
        player.update();
    }
    function render() {
        var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }
    // I did try to change the water into magma a one point, but could make the 
    //rowImage.splice(0, 1, 'images/magma-black.png'); work due to the loop
    //constantly rewriting over it with water.... Where would I write the splice?
        renderEntities();
    }
    function renderEntities() {
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        goldBugs.forEach(function(reward) {
            reward.render();
        });
        player.render();
        //i only wanted the door to appear at the right time...
        if (goldBugs[0].speed === 0 && player.sprite === 'images/char-princess-girl.png'){
            secretDoor.render();
        }
    }
    function reset() {
    }
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/enemy-bug-gold.png',
        'images/char-boy.png',
        'images/char-drown-girl.png',
        'images/char-blessed-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png',
        'images/Rock.png',
        'images/Key.png',
        'images/Selector.png',
        'images/arrow.png'
    ]);

    Resources.onReady(init);
    global.ctx = ctx;
})(this);
