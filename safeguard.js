function Fun(func){
    //if(typeof func=="function")
    console.log(func());
}
var array=[];
//var f=function(){}
Fun(array);
// when a function name is expected as an argument
// we cannot pass an array as an argument.
// it will throw an error
// in that case it is necessary to safe guard the function parameters
function Fun(func){
    if(typeof func=="function")
    console.log(func());
    
}
var array=[];
//var f=function(){}
Fun(array);
// here the passed argument is not as what it expected so it moved to next step
// in the program instead of breaking the execution.