document.getElementById("btn").addEventListener("click", function name(params) {
  const area = document.getElementById("area");
  const comment = area.value;

  const comtContainer = document.getElementById("container");
  const p = document.createElement("p");
  p.innerText = comment;
  comtContainer.appendChild(p);
  area.value = " ";
});
