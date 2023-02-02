const checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
const submitButton = document.querySelector('button[type="submit"]')

const ratingCard = document.querySelector('.rating')
const ratingNumber = document.querySelector('.ratingNumber')
const thanksCard = document.querySelector('.thanks')


checkboxInputs.forEach(item => {
    item.addEventListener('click', ratingInputs)
})

function ratingInputs() {
    numberSelected = this.getAttribute('name')
    
    checkboxInputs.forEach(item => {
        if (item.getAttribute('name') <= numberSelected) {
            item.setAttribute('checked', 'true')
        } else {
            item.setAttribute('checked', 'false')
        }
    })
}

submitButton.addEventListener('click', () => {
    ratingCard.classList.add('close')
    thanksCard.classList.add('open')

    if (typeof numberSelected == 'undefined') {
        ratingNumber.textContent = '0'
    } else {
        ratingNumber.textContent = numberSelected
    }
})