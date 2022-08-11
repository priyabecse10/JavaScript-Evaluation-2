//Method 1
function count_zero(min,max){
    let count=0;
    for(let i=min;i<=max;i++){
        if(i%10===0)
        {
            count++;
        }
    }
    return count;
}
console.log("The number of zeros from 1 to 50 = "+count_zero(1,50));