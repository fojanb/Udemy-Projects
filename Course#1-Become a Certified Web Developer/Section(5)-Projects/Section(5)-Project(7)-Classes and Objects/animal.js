class Animal {
    constructor(type, weight, color, fur, length,soundItMakes){
        //------------------Properties-----------------
        this.type = type;
        this.weight = weight;
        this.color = color;
        this.fur = fur;
        this.length = length;
        this.soundItMakes = soundItMakes;
        //------------------Methods-----------------
        this.makeSound();//Method#1
        this.breathe();//Method#2
    };//End of the constructor

    //---------------------Methods Definition-----------------
    makeSound(){
        return `${this.soundItMakes}`;
    };//End of method#1
   
    breathe(){
        return `${this.type} is breathing`;
    }//End of method#2
   
}