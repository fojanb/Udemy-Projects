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
        die(){
            if ((this.gridLocationY<0 && this.gridLocationX<0)||
            (this.gridLocationY>9 && this.gridLocationX>9)) {
                return 'Game Over.Your location is out of th game board.';
            }
                else {
                    if ((0<=gridLocationY<=9) && (0<=gridLocationX<=9)) {
                        moveLeft();
                        moveRight();
                        moveUp();
                        moveDown();
                        
                    }
                }
            };
            moveLeft(){
                this.gridLocationX-=1;
                return this.gridLocationX;
            };

            moveRight(){
                this.gridLocationX+=1;
                return this.gridLocationX;   
            };

            moveUp(){
                this.gridLocationY+=1;
                return this.gridLocationY;
            };
            moveDown(){
                this.gridLocationY-=1;
                return this.gridLocationY;
            }




}