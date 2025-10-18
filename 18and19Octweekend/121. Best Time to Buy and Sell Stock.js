function stock(array){

    // this is the below is the brute form
    // let  max = 0;
    // let profit = 0;
    // for(let i =0;i<array.length;i++){
    //     for(let j =i+1;j<array.length;j++){
    //         if(array[i]<array[j]){
    //             profit = array[j] - array[i];
    //             max = Math.max(max,profit);
    //         }
    //     }
    // }
    // return max;
}

console.log(stock([7,1,5,3,6,4]));