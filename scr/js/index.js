let buttons = document.querySelectorAll(".question-card_button");
let answers = document.querySelectorAll(".question-card__answer");

let bookmarks = document.querySelectorAll('.card__bookmark')

// checkpoint
console.log(buttons);
console.log(bookmarks);


buttons.forEach((button, index) => { 
  
  console.log(index); // index: array answers

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


bookmarks.forEach((bookmark, index) => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark-active')
   })
})