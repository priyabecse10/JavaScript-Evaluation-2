function age(dob){
    const d=new Date().getFullYear();
    //let year=dob.getFullYear();
    let age=d-dob;
    return age;
}

console.log("The present age= "+age(1990));

function age1(){
    const date=new Date().getFullYear();
    let d=new Date("July 21, 1991");
    let year=d.getFullYear();
    let age=date-year;
    console.log("The present age= "+age);
}
age1();