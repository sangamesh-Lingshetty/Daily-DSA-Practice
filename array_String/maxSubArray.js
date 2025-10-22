// const array = [2,1,5,1,3,2,3,14];
// const kthvalue =3;
// function value(){
//     let sum =0;
//     let max = 0;
//     let j =0;
//     let k =0;
//     for(let i =0;i<array.length-kthvalue+1;i++){
//         k =i;
//         while(kthvalue !== j){
//             sum += array[k];
//             k++;
//             j++;
//         }
//         max = Math.max(max,sum);
//         j = 0;
//         sum =0;
//     }
//     return max;
// }

// console.log(value());


const array = [2,1,5,1,3,2];
const kthvalue =3;
function value(){
    let max = 0;
    for(let i =0;i<kthvalue;i++){
        max += array[i];
    }
    let valueSum =max;
    for(let k = kthvalue;k<array.length;k++){
        valueSum = (valueSum + array[k]) - array[k - kthvalue];
        max = Math.max(max,valueSum);
    }
    return max;
}

console.log(value());