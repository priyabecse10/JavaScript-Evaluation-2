function sort(arr){
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }}
    const arr1=[4,32,2,5,8];
    const arr2=[78,56,8,9,4];
    sort(arr1);
    sort(arr2);
    console.log("Sorted array1="+ arr1 );
    console.log("Sorted array2="+ arr2 );

    
    function common_number(arr1,arr2){
        const arr3=[];
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]===arr2[j]){
                arr3[j]=arr2[j];
                break;
                }
            }
        }
        console.log("The common numbers in the two sorted arrays are="+arr3);
    }
    
     
    common_number(arr1, arr2);