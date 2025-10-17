const shortString ="loll";
const longString    = "lolloliulola";
// const shortString ="       omg";
function naivy(){
    let count =0;
    for(let i =0;i<longString.length;i++){
        for(let j =0;j<shortString.length;j++){
            if(longString[i+j] !== shortString[j]){
                break;
            }else if(j === shortString.length-1){
                count++;
            }
        }
    }
    return count;
}


console.log(naivy());