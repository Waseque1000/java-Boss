// ` directly set on  the html
/*  <h1 onclick="console.log('orehhh xoss')">Dom er ajke speacial evennt</h1>
    <button onclick="console.log(7)">Click Me</button>
    <button onclick="console.log(65)">Another button</button>
 */

// ! option 2  ***
function makeRed(params) {
  document.body.style.backgroundColor = "red";
}

// * option 3
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//  * option 3 another
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurple(params) {
  document.body.style.backgroundColor = "purple";
};
