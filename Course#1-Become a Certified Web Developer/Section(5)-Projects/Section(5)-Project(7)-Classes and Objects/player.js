class Palyer{
    constructor(name,livesLeft,score,speed,gridLocationX,gridLocationY){
        //-----------------Properties-------------------
        this.name=name;// name => (String)
        this.livesLeft=livesLeft;// livesLeft => (integer)
        this.score=score;// score => (integer)
        this.speed=speed;// speed => (integer)
        this.gridLocationX=gridLocationX;// gridLocationX => (integer)
        this.gridLocationY=gridLocationY;// gridLocationY => (integer)

        //-----------------Methods----------------------
        // this.get();
        this.die();
        this.moveLeft();
        this.moveRight();
        this.moveUp();
        this.moveDown();

    };//End of constructor

    //-------------Methods Definition-----------
    // get(_gridLocationX,_gridLocationY){
        
    //     this.gridLocationY=prompt('Please enter Y :');
    //     this.gridLocationX=prompt('Please enter X :');
    //     return 'Your current location is :'+this.gridLocationX+"'"+this.gridLocationY;
    // };
    die(){
        if ((this.gridLocationY<0 && this.gridLocationX<0)||
        (this.gridLocationY>9 && this.gridLocationX>9)) {
            return 'Game Over.Your location is out of th game board.';
        }
            
        if ((0<=gridLocationY<=9) && (0<=gridLocationX<=9)) {
            moveLeft()
            {
                this.gridLocationX-=1;
                return this.gridLocationX;}
            }
                    
                
        }
        
       

        // moveRight(){
        //     this.gridLocationX+=1;
        //     return this.gridLocationX;   
        // };

        // moveUp(){
        //     this.gridLocationY+=1;
        //     return this.gridLocationY;
        // };
        // moveDown(){
        //     this.gridLocationY-=1;
        //     return this.gridLocationY;
        // }

}//End of class