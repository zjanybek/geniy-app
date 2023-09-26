'use client'

export function collapseQuestions() {
  const questionButtons = document.querySelectorAll('.questions__button')

  questionButtons.forEach((button) => {
    button.addEventListener('click', function name(event) {
      event.preventDefault()

      const questionsItem = event.currentTarget.closest('.questions__item')

      console.log(questionsItem)

      if (questionsItem) {
        const collapseElement = questionsItem.querySelector(
          '.questions__collapse'
        )

        if (collapseElement) {
          collapseElement.classList.toggle('active')
        }
      }
    })
  })
}
