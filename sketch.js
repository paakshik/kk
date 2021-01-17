/**function for loading all the files*/;
function preload() {
    /**Helicoptor image loaded*/;
    helicopterImage = loadImage("helicopter.png");
    /**package image loaded*/;
    packageImage = loadImage("package.png");
    /**Background imgage loaded*/;
    backImage = loadImage("image3.jpg");
    ZombieSound = loadSound("sound2.mp3");
    helicopterSound = loadSound("sound1.mp3");
    zombie = loadImage("zombie.png")
}
let z = 300;
/**function for creating all the sprites*/;
function setup() {
    /**startup function for all basic projects*/;
    startup1();

    /**An array for infinite packages*/;
    packagesArray2 = [];
    /**helicoptor sprite created*/;
    heli2 = new Box(300, 200, 200, 200, true, helicopterImage);
    /**ground sprite created*/;
    ground = new Ground(0, 800, 6000, 20, true);
    cont1 = new Ground(400, 750, 60, 300, true);
    cont2 = new Ground(410, 750, 300, 60, false);
    cont3 = new Ground(700, 750, 60, 300, true);
    c1 = confirm("You have to leave all the six parcels from the helicoptor for the people");
    c2 = confirm("Though the people are not there but they will come after some time");
    c3 = confirm("Press the DOWN key to leave the parcels");
    c4 = confirm("If you leave the site before eaving al the parcels the you will lose")
}
function draw() {
    /**making the project start*/;
    if (flag === "start") {
        if (c3 === true) {
            ZombieSound.play();
            ZombieSound.setVolume(0.3);
            helicopterSound.play();
            helicopterSound.setVolume(0.3);
        }

        ground.show()
        // showing the background
        imageMode(CENTER)
        image(backImage, 400, 200, 2500, 1600);
    /**show the box*/;
        cont1.show()
        cont2.show()
        cont3.show()


    /**making the helicoptor move right*/;
        if (keyDown(RIGHT_ARROW)) {
            heli2.move3()
            heli2.x = heli2.x + 45;
        }
    /**making the helicoptor move left*/;
        if (keyDown(LEFT_ARROW)) {
            heli2.move4()
            heli2.x = heli2.x - 45;
        }


    /**making packages fall when up arrow is pressed*/;
        if (keyWentDown(DOWN_ARROW)) {
            z = heli2.x;
            console.log(heli2.x);
        /**restricting it to 6 packages*/;
            if (box_Delevered2 < 5) {
                packagesArray2.push(new Box(z, 400, 40, 40, false, packageImage));
            }

        }
    /**making packages*/;
        for (k = 0; k < packagesArray2.length; k++) {
            packagesArray2[k].show();
            box_Delevered2 = k;
        }
    /**runs when you have delevered all the parcels*/;
        if (box_Delevered2 === 5) {
            console.log("Thank you for delivering the parcels to the city.");
            box_Delevered2 = 0;

        }
        // apply when we are out of range
        if (heli2.x > width) {

            flag = "over"
        }
    /*show the helicoptor*/;
        heli2.show();
    }
/*runs when the helicoptoris out of rane*/;
    if (flag === "over") {

        console.log("Thank you")
        ZombieSound.stop();
        helicopterSound.stop();
        heli2.x = 900000000;
        flag = 'start'




    }
 /**for  drawing the sprites*/;
    drawSprites();
}

