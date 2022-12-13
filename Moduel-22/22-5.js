// ? Use add and multiplication to calculate wood requirements
/*  
 ! fixet thakbe per item wood requirment 
! vary korbe quantity
1.chair --->3 cft
2.table --> 10 cft
3.bed --> 50 cft
*/

function woodCalculator(chairQuantity, TableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const chairWood = chairQuantity * perChairWood;
  const tableWood = TableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  //   console.log(chairQuantity, TableQuantity, bedQuantity);
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);
