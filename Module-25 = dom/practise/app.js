document
  .getElementById("post")
  .addEventListener("click", function name(params) {
    const commentBox = document.getElementById("area");
    const comment = commentBox.value;

    const commentarea = document.getElementById("p");
    const p = document.createElement("p");
    commentarea.appendChild(p);
    p.innerText = comment;

    commentBox.value = " ";
  });
