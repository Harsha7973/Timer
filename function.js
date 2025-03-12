//functions and its types:-

/*function a(){
    console.log("x");
}
a();



//function scope 
var name4="sai";
const name1="ww";

function ss(){
    let num1=12;
    let num2=14;
    console.log(name);
    function eeF(){
        console.log(num1+num2);
        console.log(name4);
        console.log(name1);
    }
    return eeF();
}
//console.log(num1); //error because of calling variable outside the function scope.
ss();

//Multiple nested functions:-
function e(){
    function f(){
        function g(){
          console.log("hello");
        }
        g();
    }
    f();
}
e();

function a(x){
    function b(y){
        function c(z){
          console.log(x+y+z);
        }
        c(3);
    }
    b(2);
}
a(1);

//Name Conflicts:-
function hello(){
    const x=10;
    function hello2(x){
        return x * 2;
    }
    return hello2;
}
let ans=hello();
console.log(ans(5)); 



//function with parameters:-
function multiply(a=1, b = 1) {
    return a * b;
  }
  
  console.log(multiply()); //1 we can assing the value of a,b.
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));//5 

//Arrow function:-
let arr=[1,2,3,5,7,6];
let ans=arr.map(x=> x%2==0);
console.log(ans);*/

//Call Back with setTimeout:-
setTimeout(()=>{
    console.log("Hello i am a boy ");
},2000);


//call Back with Map:-
const arr=[1,2,3,4,5,6,7];
const answer=arr.map((x)=>{
    return x*x;
})
console.log(answer);


//callback inside a function:-
function greek(namee,callback){
    console.log("hello" + namee);
    callback();
}
function good(){
    console.log("good");
}
greek("Yuva",good);


//Arrow function:-