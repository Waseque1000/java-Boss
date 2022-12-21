function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[3]); // !  aita arry like object array mto dakhte but array na .. r aita function er vitore kaj kore
}

add(12, 13, 45, 567, 65, 435);
