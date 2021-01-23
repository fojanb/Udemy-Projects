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
        this.makeSound();
        this.breathe();
    };//End of the constructor
    //---------------------Methods Definition-----------------
    makeSound(){
    return this.soundItMakes;
    };
   
    breathe(){
   
    return `${this.type} is breathing`;
    }
   
}