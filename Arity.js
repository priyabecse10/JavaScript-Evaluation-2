// Arity is the number of arguments a function takes

function nullary(){ // this is called a nullary function since it doesnot have any arguments
    console.log("It is a nullary function");
}

function unary(x){//this is called a unary function since it has only 1 function
    console.log(x+3);
}
function add(x,y,z){ // this function takes three arguments
    console.log(x+y+z);
}

nullary();
unary(2);
add(1,2,3);
console.log("The length of the nullary function = "+nullary.length);
console.log("The length of the unary function = "+unary.length);
console.log("The length of the add function = "+add.length);