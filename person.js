class Person {
    constructor(name, softwareEngineer){
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = [];
    }
    //this is a method
    greet() {
        console.log(`heller SEI-111`);
    }
    //we can run methods on the class
    walk() {
        console.log(`walkin the city streets`);
    }
    //we can add parameters to methods
    eat(food) {
        console.log(`today i'm having ${food}`);
    }
    //method to populate array
    addArtist(artist){
        console.log(`I like ${artist}`);
        this.artists.push(artist);
    }
}

//instantiating of a class
//know as an object
//IMPORTANT: add the new keyword like so ...
const princeLeo = new Person('Leo Brooks', true);

//print attributes
console.log(princeLeo.name);
console.log(princeLeo.softwareEngineer);

//dot notation to invoke methods of class
princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets');

//adding method on instance
princeLeo.jump = ()=>{
    console.log(`weeeee`)
}
princeLeo.jump();
princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist('Ye Ye');

//view an attribute
console.log(princeLeo.artists);

const momo = new Person('Mocha Brown', true);
console.log(momo.name);
console.log(momo.softwareEngineer);
momo.walk();
momo.eat('Trader Joes Gluten Free Choccy');
momo.shy = (senpai)=>{
    console.log(`I sure hope ${senpai} notices me`)
}
momo.shy('phiphi');

const phiphi = new Person('Sophia Dipaola', true);
console.log(phiphi.name);
console.log(phiphi.softwareEngineer);
phiphi.walk();
phiphi.eat('Vegan Durian Pulled Pork Sammies')
phiphi.vape =()=>{
    console.log(`${this.name} blows fatty clouds bro no rap cap`)
}