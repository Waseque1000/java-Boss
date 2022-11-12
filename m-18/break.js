// for( var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i > 10){
//         break;
//     }
// }




//  var  roastGiven = 0;
//   while (roastGiven < 10) {
//     console.log('Roast den vhai gift ansi onek dami');
//     roastGiven++;
//     if (roastGiven > 4) {
//         break;
        
//     }
    
//   }


 // ! break using in a array-loop

//  var items = ['bottle','mouse','sunglass','pen','notebook','food']
//  for (let i = 0; i < items.length; i++) {
//     var item = items[i];
//     if( item == 'pen'){
//         break;
//     }   console.log(item);
    
//  }


// var picnikFee = [ 45, 56, 2224, 67, 98, 60,234,60, 41]
// for (var i = 0; i < picnikFee.length; i++) {
// var num = picnikFee[i];
// if (num > 90) {
//     break;
    
// }
// console.log(num);
    
// }

var picnikFee = [ 45, 56, 2224, 67, 98, 60,234,90, 41]
for (var i = 0; i < picnikFee.length; i++) {
var num = picnikFee[i];
if (num > 90) {
    continue;
    
}
console.log(num);
    
}



