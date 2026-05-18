// ex 29_____________________________________


function celsiusToFahrenheit(c) {
  
  f = (c * 9 / 5) + 32
  console.log(`Fahrenheit :${f}`);
  
}
celsiusToFahrenheit(32)
celsiusToFahrenheit(212)
celsiusToFahrenheit(98.6)



//ex30_____________________________


const isEven = (n) => n % 2 === 0 

const isodd = (n) => n % 2 === 0

console.log(isEven(4));
console.log(isodd(7));


console.log(isEven(3));



//ex31__________________

function greet(name, greeting = "Hello") {
  
  console.log(`${greeting} , ${name} ! `);
  

}
greet("Omar","Good Morning");

greet("Sara")



//ex32_________________________________


function maxOfThree(a, b, c) {
  let max = a
  
  if (b > a &&b>c) {
    max=b
  }
else
    if (c > a &&c>b)
    {
      max=c
    }
  
  
  return max
}


console.log(maxOfThree(3, 17, 9));


//ex33___________________________



function countVowels(str) {
  let count_Str=0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count_Str++
    }

    
  }
  return count_Str
}


console.log(countVowels("Hello World"));



//ex34___________________________________

function factorial(n) {
  let mul = 1
  
  if(n===0)return 1
  for (let i = 2; i <= n; i++){
    mul *=i
  }
  return mul
}

console.log(factorial(5));


