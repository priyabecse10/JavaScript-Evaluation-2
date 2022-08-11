// currying is a technique in functional programming, 
//transformation of the function of multiple arguments into several functions 
//of a single argument in sequence

function volume(length,breadth,height){
    return length*breadth*height;
}
console.log("The volume of a cuboid= "+volume(4,5,6));

function curry_volume(length){
    console.log("The length= "+length);
    return function(breadth){
        console.log("The breadth= "+breadth);
        return function(height){
            console.log("The height ="+height);
            return length*breadth*height;
        }
    }
}

console.log("The volume of a cuboid using curried function= "+curry_volume(4)(5)(6));