// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
let input = " ";
input = input.toLowerCase();
function palindrome(input) {
    let stock = "";
    for(let i = 0;i<input.length;i++){
        const char = input[i];
        if(('a' <= char && char <= 'z') || ('0' <= char && char <= '9')){
            stock += char;
        }
    }

    let start =0;
    let end  = stock.length -1;
    while(start <= end){
        if(stock[start] !== stock[end]){
            return false;
        }else{
            start++;
            end --;
        }
    }

  return true;
}

console.log(palindrome(input));
