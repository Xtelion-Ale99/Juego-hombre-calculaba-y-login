GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'fantasmitas.jpg');
        game.load.spritesheet('pacman', 'pacmancorre.png', 150, 150);
    },
    create: function() {
        var me=this;
        game.add.sprite(0, 0, 'background');
        this.pacman = game.add.sprite(0, 340, 'pacman');
        this.pacman.animations.add('right', [0,1,2],8,true);
        this.pacman.animations.play("right");
        me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
        var me=this;
        console.log("update");
        this.pacman.x += 2;
        if(me.pacman.x>=me.game.world.width){
			me.pacman.x=-100;
			}
    }
}
var game = new Phaser.Game(1023, 575, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");