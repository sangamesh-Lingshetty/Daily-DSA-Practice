// let asnwer ="";
// function reverse(str){
//   if(str.length ===0){
//     return ;
//   }
//   asnwer += str[str.length-1];
//   reverse(str.slice(0,str.length-1));
//   return asnwer;
// }

// console.log(reverse("awesome"));


function reverse(str){
  if(str.length ===0){
    return ;
  }
  return str[str.length-1] + reverse(str.slice(0,str.length-1));
}
// dry run the code
// return [e] + reverse(awesom) => "e" + "mosewa" ="emosewa"  final answer
//     return [m] + reverse(aweso) => "m" + "osewa"="mosewa"
//         return [o] + reverse(awes) => "o"+"sewa" = "osewa"
//             return [s] + reverse(awe) => "s"+"ewa" = "sewa"
//                 return [e] + reverse(aw) => "wa"+"e" = "ewa"
//                     return [w]+ revese(a); => "a"+"w" = "wa"
//                         return [a] + reverse(""); => ""+a = "a"


console.log(reverse("awesome"));