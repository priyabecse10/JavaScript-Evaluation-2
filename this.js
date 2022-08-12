// this inside function
var age=28;
function displayAge()
{
    console.log("The age is = "+age);
    console.log(this);
}
displayAge();

const thing={
    price:200,
    weight:100,
    colour:"green",
    desc:function(){
        // this is will throw an error because we cannot accessed price from
        // a function without this keyword
        //return `The price of the thing is ${price}` 
        return `The price of the thing is ${this.price}`
    }

}
console.log(thing.desc());

// this inside class:
class person{
    constructor(name){
        //fullName=name; // this will throw an error
        this.name=name;  // in a class we cannot get access to the parameters without the this keyword
    }
    getName(){
        return this.name;
    }
}
let john=new person("John Doe");
let f_name=john.getName();
console.log(f_name);