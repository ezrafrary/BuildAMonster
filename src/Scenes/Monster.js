class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
    


        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        
        //arms
        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 50, "monsterParts", "arm_redA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 50, "monsterParts", "arm_redA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 150, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 150, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg.flipX = true;

        //head
        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY - 150, "monsterParts", "body_greenA.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX + 40, this.bodyY - 170, "monsterParts", "eye_red.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX - 40, this.bodyY - 170, "monsterParts", "eye_red.png");
        my.sprite.leftEye.flipX = true;
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY - 110, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY - 110, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
        my.sprite.rightEar = this.add.sprite(this.bodyX + 80, this.bodyY - 210, "monsterParts", "detail_green_ear.png");
        my.sprite.leftEar = this.add.sprite(this.bodyX - 80, this.bodyY - 210, "monsterParts", "detail_green_ear.png");
        my.sprite.leftEar.flipX = true;
        
        





        //event keys
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down', (key, event) => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });




    }

    update() {
        let movementAmmount = 1;
        let my = this.my;    // create an alias to this.my for readability
        if(this.aKey.isDown){
            //body
            my.sprite.body.x = my.sprite.body.x - movementAmmount;
            my.sprite.rightArm.x = my.sprite.rightArm.x - movementAmmount;
            my.sprite.leftArm.x = my.sprite.leftArm.x - movementAmmount;
            my.sprite.rightLeg.x = my.sprite.rightLeg.x - movementAmmount;
            my.sprite.leftLeg.x = my.sprite.leftLeg.x - movementAmmount;

            //head
            my.sprite.head.x = my.sprite.head.x - movementAmmount;
            my.sprite.rightEye.x = my.sprite.rightEye.x - movementAmmount;
            my.sprite.leftEye.x = my.sprite.leftEye.x - movementAmmount;
            my.sprite.smile.x = my.sprite.smile.x - movementAmmount;
            my.sprite.fangs.x = my.sprite.fangs.x - movementAmmount;
            my.sprite.rightEar.x = my.sprite.rightEar.x - movementAmmount;
            my.sprite.leftEar.x = my.sprite.leftEar.x - movementAmmount;
        }

        if(this.dKey.isDown){
            //body
            my.sprite.body.x = my.sprite.body.x + movementAmmount;
            my.sprite.rightArm.x = my.sprite.rightArm.x + movementAmmount;
            my.sprite.leftArm.x = my.sprite.leftArm.x + movementAmmount;
            my.sprite.rightLeg.x = my.sprite.rightLeg.x + movementAmmount;
            my.sprite.leftLeg.x = my.sprite.leftLeg.x + movementAmmount;

            //head
            my.sprite.head.x = my.sprite.head.x + movementAmmount;
            my.sprite.rightEye.x = my.sprite.rightEye.x + movementAmmount;
            my.sprite.leftEye.x = my.sprite.leftEye.x + movementAmmount;
            my.sprite.smile.x = my.sprite.smile.x + movementAmmount;
            my.sprite.fangs.x = my.sprite.fangs.x + movementAmmount;
            my.sprite.rightEar.x = my.sprite.rightEar.x + movementAmmount;
            my.sprite.leftEar.x = my.sprite.leftEar.x + movementAmmount;
        }
    
    }

}