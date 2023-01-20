document.getElementById("btn").addEventListener("click", function name(params) {
  const input = document.getElementById("input");
  const text = input.value;
  const h = document.getElementById("h");
  h.innerText = text;

  input.value = "";
});
