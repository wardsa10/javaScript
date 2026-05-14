///ex1_____________

/*

1)number
2)string
3) boolean 
4)undefined
5) null
6)object


*/

//2________________

const firstName = "Sara";
let myAge = 22;
let score = 0;
score = 100; // reassigning const
let star = "bad";

// ex3____________________

const name = "Sara";

const age = 20;
const grade = "B";

const isPassed = true;

console.log(
  `Student ${name} , age ${20}, got grade ${grade}. Passed: ${isPassed}`,
);

// ex4__________________________________

const msg = "I love javascript programming";

console.log(`length of the string : ${msg.length}`);

console.log(` ALL CAPS: ${msg.toLocaleUpperCase()}`);

console.log(`only the word "javascript : ${msg.slice(7, 17)} `);

console.log(`true if it includes the word : ${msg.includes("love")}`);

//ex5__________________

/*

1)true
2)false
3)true
4)false
5)true
6)true
7)false


*/

//ex6______________________

let a = 5;
let b = 10;

a = 10;
b = 5;
console.log(`a :${a} , b: ${b}`);

//ex7_________________________________

/*

1)true
2)false
3) false
4)true
5)true
6)false
7)false
8)false
9)false


*/

//ex8___________________________________

/*

1) 14
2)20
3)16
4)2
5)true


*/

//ex9_____________________________

/*

1)hello
2)false
3)default
4)value
5)fallback

*/

console.log(true && "hello");
console.log(false && "hello");
console.log(0 || "default");
console.log("value" || "default");
console.log(null ?? "fallback");

//ex10___________________________________________

const price = 120;
const quantity = 3;
const discountPercent = 10;
const subtotal = price * quantity;
const discount = (subtotal * discountPercent) / 100;

console.log(
  `subtotal:${subtotal} | discount:${discount} | total:${subtotal - discount}`,
);

//ex11_______________________________________

const number = 17;
if (number % 2 !== 0) {
  console.log(`${number} is odd`);
} else console.log(`even`);

//ex12________________________________

/*

x+=5
x*=2
x-=3
x**=2
x%=7

*/

//ex13_____________________________________

const weight = 80;
const height = 1.88;

const BMI = weight / height ** 2;

console.log(
  `BMI:${BMI.toFixed(1)}(for weight = ${weight}, height =${height} )`,
);

//ex14_____________________________

const isLoggedIn = true;

const isAdmin = false;
const age1 = 20;

if (isLoggedIn && age1 >= 18) {
  console.log(`Can access basic content`);
}
if (isLoggedIn && isAdmin) console.log(`Can access admin panel`);

if (isLoggedIn || age >= 21) console.log(`Can access something`);

//ex15_______________________________________

let light = "yellow";

if (light === "green") console.log("go");
else if (light === "yellow") console.log("slow down");
else if (light === "red") console.log("stop!");

//ex16______________________________

const age2 = 25;
const isMember = true;

if (age2 >= 18 && isMember) console.log("Full access — welcome member!");
else if (age2 >= 18 && !isMember)
  console.log("Guest access — consider joining");
else if (age2 < 18 && isMember) console.log("Junior member access");
else console.log("No access");

//ex17____________________________________

 let msg1 =(10 > 5 )?  "yes" : "no";

let fee = isMember ?  5 :  20;
let label = score >= 50 ? "pass" :  "fail";

//ex18__________________________________________

let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("winter");

    break;

  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;

  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("autumn");
break
  default:
    console.log("Invalid month");
}


//ex19_____________________________________

 const number1 = 15

if (number1 % 5 === 0 && number1 % 3 === 0)
  console.log("FizzBuzz");
else
  if (number1 % 3 === 0)
    console.log("fizz");

  else
    if (number1 % 5 === 0)
      console.log("buzz");
    else
      console.log("Order of checks matters!");



//ex20__________________________________
      
let password = "Hello1!"

if (password.length < 6)
  console.log("weak");
else
  if (password.length >= 6 && password.length < 10)
    console.log("medium");
    
    
    else
    if(password.length>=10)
    console.log("strong");
    
//ex21____________________________
  


      /*

in range 

false 
true
match



      */
    
//ex22_________________________________
  

let sum = 0 

for (let i = 1; i <= 100; i++){
  sum += i
}

console.log(`sum of all integers from 1 to 100 : ${sum}`);


//ex23_______________________________________

let mul = 7

for (let i = 1; i <= 10; i++)
{

  console.log(`7 * ${i} = ${mul*i}`);
  
}


//ex24________________________________________


let j = 1
let result =false
while (!result) {
  
  
  if (j % 6 === 0 && j % 8 === 0) {
    
  console.log(`first number divisible by both 6 AND 8 : ${j}`);
  
    result = true
  }
  j++
  
}


//ex25_____________________________________________


for (let i = 0; i <= 30; i++){

  

  if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("fizz");
  else if (i % 5 === 0) console.log("buzz");
  else console.log("Order of checks matters!");
}


//ex26___________________________________

let rockets = 5 

do {

console.log(rockets);


  rockets -=1

  
} while (rockets > 0);
console.log("Blast off!");


//ex27_____________________________

for (let n = 2; n <= 50; n++){
  let flag = true
 
  for (let i = 2; i < n - 1; i++){
    
    if (n % i === 0)
    {
      flag = false
      break
   }
  }

  if (flag)
  {
    console.log(n);
    
  }

}

//ex28____________________________


for (let i = 0; i <= 5; i++)
{
  let star = ""

  for (let j = 0; j <= i; j++){
    star+="*"
  }

  console.log(star);


}