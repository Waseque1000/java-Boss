document.getElementById("post").addEventListener("click", function (params) {
  const newComment = document.getElementById("new-comment");

  const commentContainer = document.getElementById("comment-Container");
  const h1 = document.createElement("p");
  h1.innerText = newComment.value;
  commentContainer.appendChild(h1);
  newComment.value = " ";
});
