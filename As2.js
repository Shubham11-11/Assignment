
///////////////////////////////////////////

// 1. Write code to display from 1 to 100 but just even numbers.

let number = 2;

while (number <= 100) {
  console.log(number);
  number += 1;
} 

///////////////////////////////////////////////////////////////////////////

// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function performOperation(num1, num2, operator) {
  
  switch (operator) {
  
    case '+':
      return num1 + num2;
    case '-':
    
      return num1 - num2;
    case '*':
    
      return num1 * num2;
    case '/':
    
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Division by zero is not allowed.";
      }
      
    default:
    
      return "Invalid operator";
  }
}
console.log(performOperation(2, 7, '+'));  
console.log(performOperation(32, 21, '-'));  
console.log(performOperation(7, 4, '*'));  
console.log(performOperation(9, 3, '/'));  
console.log(performOperation(1, 0, '/'));  
console.log(performOperation(2, 2, '%'));   

////////////////////////////////////////////////////////////////////////////////////

// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
  let taxRate;

  if (salary > 1500000) {
    taxRate = 0.30; // 30% tax for salary > 1500000
  } 
  else if (salary > 1000000) {
    taxRate = 0.20; // 20% tax for salary > 1000000
  } 
  else if (salary > 500000) {
    taxRate = 0.10; // 10% tax for salary > 500000
  }
  else if (salary > 0) {
    taxRate = 0.0;  // 0% tax for salary > 0
  }
  /* else {
    return "Invalid salary"; // Handle invalid salary values
  } */

  const taxAmount = salary * taxRate;
  return taxAmount;
}


const salary = 800000; 
const tax = findTax(salary);
console.log(`Tax amount for a salary of $${salary} is $${tax}`);


////////////////////////////////////////

// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.


let sum=0;
function product(n1,n2){
sum =(parseInt(n1%10)*parseInt(n2%10))+((~~(n1/10))*(~~(n2/10)));
return sum;
}
console.log(product(6,34));