let buttons = document.querySelectorAll(".question-card__button");
let answers = document.querySelectorAll(".question-card__answer");

let bookmarks = document.querySelectorAll(".card__bookmark");

// checkpoint
console.log(buttons);
console.log(bookmarks);

buttons.forEach((button, index) => { // forEach mit Index
  console.log(index); // index: buttons


  button.addEventListener("click", () => {
    let answer = answers[index];
    answer.classList.toggle("show");
    if (answer.classList.contains("show")) {
      button.innerHTML = "hide answer";
    } else {
      button.innerHTML = "show answer";
    }
  });
});

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark-active");
  });
});
