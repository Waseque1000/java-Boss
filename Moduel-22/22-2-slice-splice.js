// ? Get part of an array and insert elements using slice, splice
// # slice    = start index thik thakbe but end endex er ager man porjonto slice hoye jbe
/* const friends = [23, 34, 13, 09, 345, 57, 78, 24, 13, 23, 21];
const partial = friends.slice(3, 6); // ! start index thik thakbe but end endex er ager man porjonto slice hoye jbe
console.log(partial);
console.log(friends);
 */
// ! splice = remove element from an array
// and if necessary insert new element in their place
// returning the deleted elements
// will change the original array
const frd = [23, 34, 13, 09, 345, 57, 78, 24, 13, 23, 21];
const boss = frd.splice(2, 5); // 1st index thake suru and 1st index thake koyta sorabo oita bole dite hbe
// !const boss = frd.splice(2, 5,100,200,300); // ist aita  2 thake 5 ta index katbe tar por 100 200, 300 ai 3 ta add kore dibe.. ja sob index  katbe ogula bade  ai notun 3 ta add kore new variable add kore  dibe
console.log(boss);
console.log(frd);
