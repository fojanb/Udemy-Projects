class Player{
    constructor(name,livesLeft,score,speed,gridLocationX,gridLocationY){
        //-----------------Properties-------------------
        this.name=name;// name => (String)
        this.livesLeft=livesLeft;// livesLeft => (integer)
        this.score=score;// score => (integer)
        this.speed=speed;// speed => (integer)
        this.gridLocationX=gridLocationX;// gridLocationX => (integer)
        this.gridLocationY=gridLocationY;// gridLocationY => (integer)

        //-----------------Methods----------------------
        this.get();//Will return the current location.
        this.die();
        this.moveLeft();
        this.moveRight();
        this.moveUp();
        this.moveDown();

    };//End of constructor

    //-------------Methods Definition-----------
    get(_gridLocationX,_gridLocationY){
        
        this.gridLocationX=prompt('Please enter X :');
        this.gridLocationY=prompt('Please enter Y :');
        
       
        if ((this.gridLocationY<0 && this.gridLocationX<0)||
        (this.gridLocationY>9 && this.gridLocationX>9) || (this.gridLocationY<0 || this.gridLocationX<0) ||(this.gridLocationY>9 || this.gridLocationX>9)) {
            document.getElementById('player-1-failed').innerHTML= 'Game Over.Your location is out of the game board.';
        }//End of if

        else{document.getElementById('player-1').innerHTML = 'Your current location is :'+"<br>"+"X = "+this.gridLocationX+"<br>"+"Y = "+this.gridLocationY;}
            
        if ((0<=this.gridLocationY && this.gridLocationY<=9) && (0<=this.gridLocationX && this.gridLocationX<=9)) {
            this.move = prompt('Make a move (L/R/U/D) :');
            switch (this.move) {
                case "L":
                case "l":
                    this.gridLocationX=this.gridLocationX-1;
                    if(this.gridLocationX<0){
                        document.getElementById('moveToLeft').innerHTML= 'You are out of game board.';
                    }
                    else{document.getElementById('moveToLeft').innerHTML= 'You moved to the left. Your new location is: '+'<br>'+'X= '+this.gridLocationX+"<br>"+'Y= '+this.gridLocationY;}
                    break;
                case "R":
                case "r":   
                    this.gridLocationX=parseInt(this.gridLocationX)+1;
                    if(this.gridLocationX>9){
                        document.getElementById('moveToRight').innerHTML= 'You are out of game board.';
                    }
                        else{document.getElementById('moveToRight').innerHTML= 'You moved to the right. Your new location is: '+'<br>'+'X= '+this.gridLocationX+"<br>"+'Y= '+this.gridLocationY;}
                    break;
                case "U":
                case "u":
                    this.gridLocationY=this.gridLocationY-1;
                    if(this.gridLocationY<0){
                        document.getElementById('moveToUp').innerHTML= 'You are out of game board.';
                    }
                        else{document.getElementById('moveToUp').innerHTML= 'You moved to the up. Your new location is: '+'<br>'+'X= '+this.gridLocationX+"<br>"+'Y= '+this.gridLocationY;}
                   
                    break;
                case "D":
                case "d":
                    this.gridLocationY=parseInt(this.gridLocationY)+1;
                    if(this.gridLocationY>9){
                        document.getElementById('moveToDown').innerHTML= 'You are out of game board.';
                    }
                    else{document.getElementById('moveToDown').innerHTML= 'You moved to the down. Your new location is: '+'<br>'+'X= '+this.gridLocationX+"<br>"+'Y= '+this.gridLocationY;}
            
                }//End of switch
                
            }//End of if
                
            
          
    };//End of method

    // moveLeft()
    //         {
    //             this.gridLocationX=this.gridLocationX-1;
    //             document.getElementById('moveToLeft').innerHTML= this.gridLocationX;
    //         }
            

    // moveRight(_gridLocationX,_gridLocationY)
    //         {
    //             this.gridLocationY+=1;
    //             document.getElementById('moveToRight').innerHTML= this.gridLocationY;
    //         }
    


    // die(_gridLocationX,_gridLocationY){
       
                    
                
    //     }
        
       

    //     moveRight(){
    //         this.gridLocationX+=1;
    //         return this.gridLocationX;   
    //     };

    //     moveUp(){
    //         this.gridLocationY+=1;
    //         return this.gridLocationY;
    //     };
    //     moveDown(){
    //         this.gridLocationY-=1;
    //         return this.gridLocationY;
    //     }

}//End of class