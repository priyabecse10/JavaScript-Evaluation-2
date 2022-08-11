const users=[
    {firstName:"John",lastName:"Smith",age:50},
    {firstName:"Tina",lastName:"clara",age:22},
    {firstName:"Tom",lastName:"Dick",age:50},
    {firstName:"George",lastName:"Paul",age:25}
];
//displaying the list of full names all the users
//using map() method
//method 1- using Arrow functions
const fullName=users.map(x=>x.firstName+" "+x.lastName);
console.log("The list of ful name is = "+fullName);

//method 2- using map() and calling another function
function f_name(x){
    return x.firstName + " "+x.lastName;
}
const full=users.map(f_name);
console.log("The list by calling a function = "+full);

//grouping the people based on their age using reduce method

function groupBy(objectArray,property){
    return objectArray.reduce((acc,curr)=>{
        const key=curr[property];
        if(!acc[key]){
            acc[key]=[];
        }
        //Add object to list for given key's value
        acc[key].push(curr);
        return acc;
    },{});
}
const groupedPeople=groupBy(users,'age');
console.log(groupedPeople);

//displaying the people whose age is less than 30 years using filter method
//method 1
const  filt=users.filter((x)=>x.age<30);
console.log(filt);
const filt_first=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log("firstnames of users whose age is less than 30 = "+filt_first);