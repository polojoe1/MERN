class Ninja  {
    constructor(name){
    this.name= name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
}
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name is ${this.name}`);
        console.log(`Power is ${this.strength}`);
        console.log(`Speed is ${this.speed}`);
        console.log(`Health is ${this.health}`);
    }

    drinkSake(){
        this.health+=10;
    }
}


const Joe = new Ninja("Joe");
Joe.drinkSake();
Joe.showStats();

class SuperNinja extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom(){
        
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const master = new SuperNinja("Master Splinter");

master.speakWisdom();
master.showStats();