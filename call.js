//call by value
//here b is just the copy of a and when the value of a is changed 
//it will not affect the value of b.
var a=5;
var b;
b=a;
a=3;
console.log(a);
console.log(b);
//call by reference
var c={greeting:'Welcome'};
var d;
d=c;
c.greeting="Welcome to javascript";
console.log(c);
console.log(d);
