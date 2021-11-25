
let buttons= document.querySelectorAll('.question-card_button')
let answers = document.querySelectorAll('.question-card__answer')


console.log(buttons)

// index: array answers
buttons.forEach((button, index) => {
  console.log(index)
  button.addEventListener('click', () => {
   answers[index].classList.toggle('show')

  })
})



  
