document.getElementById("vhai").addEventListener("keyup", function (boss) {
  const text = boss.target.value;
  const dltBtn = document.getElementById("btn");
  if (text === "42001030") {
    dltBtn.removeAttribute("disabled");
  } else {
    dltBtn.setAttribute("disabled", true);
  }
});

document.getElementById("btn").addEventListener("click", function name() {
  const hideText = document.getElementById("h");
  hideText.style.display = "none";
});
