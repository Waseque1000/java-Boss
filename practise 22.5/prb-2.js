/* // ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

const num1 = 20;
const num2 = 10;
const add = num1 + num2;
console.log(add);
console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 % num2);
 */

// !  . তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।
/* 
const x = 10;
const y = 10;
if (x > y) {
  console.log(" x  big ");
} else if (x == y) {
  console.log("same ");
} else if (x < y) {
  console.log("y is big ");
} */

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
/* 
1. govt job lagbe 
2. ndc er student hoite hb e
3. programer hoite hbe 
*/
/* !
! const govtJob = true;
const studentNdc = true;
const programmer = false;

if ((govtJob == true && studentNdc == true) || programmer == true) {
  console.log("Alhamdulillah ");
} else {
  console.log(" tata bye bye ");
}
 */

//  ?  ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
// while ((i = 7)) {
//   i <= 19;
//   i += 2;
//   console.log(i);
// }
// // for (let i = 7; i <= 19; i += 2) {
// //   console.log(i);
// // }

//  # ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

// let friends = ["ratul", "tutul", "lullu", "kallu", "sallu"];
// // console.log(friends.length);
// // console.log(friends[4]);
// friends[4] = " mullu";
// // console.log(friends);

// let newFriends = ["kuddus ", "apu vhai", "Hero Alam", "ananto "];
// console.log(newFriends.includes("sakib Khan"));
// console.log(newFriends.includes("Hero alam"));
// let allFriends = friends.concat(newFriends);
// // console.log(allFriends);

// * ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
// const friends = ["ratul", "tutul", "lullu", "kallu", "sallu"];
// // for (let i = 0; i < friends.length; i++) {
// //   const element = friends[i];
// //   console.log(element);
// // }

// for (const element of friends) {
//   console.log(element);
// }

//!  ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

// ?১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
// const num1 = 10;
// const num2 = 15;
// const num3 = 20;
// function allTotal(num1, num2, num3) {
//   total = num1 * num2 * num3;
//   return total;
// }
// const ans = allTotal(10, 15, 20);
// console.log(ans);

// ` ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

const mobile = { name: "iphone", price: 80000, color: "black" };
console.log(mobile.color);
mobile.color = "red";
console.log(mobile);
