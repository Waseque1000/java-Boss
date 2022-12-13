//`  Write foo, bar, foobar if divisible by 3 or 5 or both
/* 
1. show output 1-50 
2 . if the number divisiblr by 3 then intead of the number, show 'foo'
2 . if the number divisiblr by 5 then intead of the number, show 'bar'
2 . if the number divisiblr by both 3& 5 then intead of the number show 'foobar'

 */
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}
