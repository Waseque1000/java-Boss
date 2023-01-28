document.getElementById("input").addEventListener("keyup", function name(boss) {
  const text = boss.target.value;
  const btn = document.getElementById("btn");
  if (text === "4200") {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
});

document.getElementById("btn").addEventListener("click", function name(params) {
  const hideText = document.getElementById("h");
  hideText.style.display = "none";
});
