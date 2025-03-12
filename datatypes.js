//Data Types (Primitive & Reference Types):-
//Primitive DataTypes:-

//Examples:-
/*let num = 42;            
console.log(num);

let str = "Hello";      
console.log(str);

let isTrue = false;     
console.log(isTrue);

console.log(sum);
let sum=20; //Reference error 

console.log(sume);
var sume=20; //Undefined 

console.log(umee);
const umee=20; //Reference error */

//Hoisting with Functions:-
rr();
 function rr(){
    console.log("hello");
} //hello


harsha();
 var harsha=function rrr(){
    console.log("hello");
} //harsha is not a function 

su();
let su=function uu(){
    console.log("hello");
} //Uncaught ReferenceError