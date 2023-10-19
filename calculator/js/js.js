const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let number = []
let answer

function calculate(button) {
    let value = button.textContent
    if (value === 'c') {
        number = []
        screenDisplay.textContent = []
    } else if (value === '=') {

        screenDisplay.textContent = eval(answer)
    } else {
        number.push(value)
        answer = number.join('')
        screenDisplay.textContent = answer
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))