var panda = {
    books : 3 ,
    sunglass: 2 ,
    kewboard : 1,
    pen : 10 ,
    mouse : 2,
    shoes: 2,
}

// console.log(panda);

const boss = Object.keys(panda)
// console.log(boss);

const vhai = Object.values(panda);
// console.log(vhai);

 for(var namee in panda){
    const  bd = panda[namee];
     console.log(namee,bd);
 }


 