// ? Create a Fibonacci Series using a for loop
// 0 ,1,1,2,3,5,8,13,21,34,55,89,144

/* 
 fibo[3] = fibo[2] + fibo[1]
 fibo[4] = fibo[3] + fibo[2]
 fibo[5] = fibo[4] + fibo[3]
 fibo[400] = fibo[499]  + fibo[498]
 fibo[n] = fibo[n-1] + fibo[n-2]
 fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0, 1];
for (let i = 2; i <= 11; i++) {
  // ! fibonacci te alwaus 1st 2 ta man diye dite hbe tar por kaj suru hbr 3th man thake
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

const fibo1 = [1, 2];
for (let i = 2; i <= 10; i++) {
  fibo1[i] = fibo1[i - 1] + fibo1[i - 2];
}
console.log(fibo1);
