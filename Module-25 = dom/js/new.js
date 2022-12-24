function makeRrd(params) {
  document.body.style.backgroundColor = "red";
}

// make blue

const makeBlue = document.getElementById("blue");
makeBlue.onclick = bluee;
function bluee() {
  document.body.style.backgroundColor = "blue";
}

// make green
const green = document.getElementById("green");
green.onclick = function green(params) {
  document.body.style.backgroundColor = "green";
};
