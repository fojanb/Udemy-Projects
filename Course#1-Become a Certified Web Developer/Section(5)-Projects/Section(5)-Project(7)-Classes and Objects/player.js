class Palyer{
    constructor(name,livesLeft,score,speed,gridLocationX,gridLocationY){
        //-----------------Properties-------------------
        // name => (String)
        // livesLeft => (integer)
        // score => (integer)
        // speed => (integer)
        // gridLocationX => (integer)
        // gridLocationY => (integer)
        this.name=name;
        this.livesLeft=livesLeft;
        this.score=score;
        this.speed=speed;
        this.gridLocationX=gridLocationX;
        this.gridLocationY=gridLocationY;
        //-----------------Methods----------------------
        this.die();
        this.moveLeft();
        this.moveRight();
        this.moveUp();
        this.moveDown();

    };//End of constructor

        //-------------Methods Definition-----------
        



}