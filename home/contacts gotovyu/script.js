//https://api.telegram.org/bot5352285336:AAHSfEL27n2K9DUHxVzZbfRdPeFhBCvIOO0/getUpdates
//https://api.telegram.org/bot5352285336:AAHSfEL27n2K9DUHxVzZbfRdPeFhBCvIOO0/SendMessage?chat_id=-752908714&text=privet_kojenniy_uebock


const btn = document.querySelector('.btn')
const modal = document.querySelector('.contacts__modal')
const form = document.querySelector('.form')
const correct = document.querySelector('.correct')
const close = document.querySelector('.close')
const correct1 = document.querySelector('.correct1')
const close1 = document.querySelector('.close1')
const correct2 = document.querySelector('.correct2')
const close2 = document.querySelector('.close2')
const correct3 = document.querySelector('.correct3')
const close3 = document.querySelector('.close3')
const correct4 = document.querySelector('.correct4')
const close4 = document.querySelector('.close4')

let nameValue = document.querySelector('.name')
let tel = document.querySelector('.tel')
let quest = document.querySelector('.quest')
let amount = document.querySelector('.amount')
let email = document.querySelector('.email')


form.addEventListener('submit', function(e){
    e.preventDefault()
    let isValid = true

    console.log(nameValue.value)

    
    let url = 'https://api.telegram.org/bot5352285336:AAHSfEL27n2K9DUHxVzZbfRdPeFhBCvIOO0/SendMessage?chat_id=-752908714&text='
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `${url} Name:  ${nameValue.value}, %0ATelephone:  ${tel.value}, %0A Where? - ${quest.value}, %0A Amount of peoples:  ${amount.value}, %0A E-Mail:  ${email.value}`, true)

    if(nameValue.value == ''){
        name.style.borderBottom = '1px solid red'
        close.style.visibility = 'visible'
        isValid = false
    }
    if(nameValue.value){
        nameValue.style.borderBottom = '1px solid green'
        correct.style.visibility = 'visible'
        close.style.visibility = 'hidden'
    }

    if(tel.value == ''){
        tel.style.borderBottom = '1px solid red'
        close1.style.visibility = 'visible'
        isValid = false
    }
    if(tel.value){
        tel.style.borderBottom = '1px solid green'
        correct1.style.visibility = 'visible'
        close1.style.visibility = 'hidden'
    }

    if(quest.value == ''){
        quest.style.borderBottom = '1px solid red'
        close3.style.visibility = 'visible'
        isValid = false
    }
    if(quest.value){
        quest.style.borderBottom = '1px solid green'
        correct3.style.visibility = 'visible'
        close3.style.visibility = 'hidden'
    }

    if(amount.value == ''){
        amount.style.borderBottom = '1px solid red'
        close2.style.visibility = 'visible'
        isValid = false
    }
    if(amount.value){
        amount.style.borderBottom = '1px solid green'
        correct2.style.visibility = 'visible'
        close2.style.visibility = 'hidden'
    }

    if(email.value == ''){
        email.style.borderBottom = '1px solid red'
        close4.style.visibility = 'visible'
        isValid = false
    }
    if(email.value){
        email.style.borderBottom = '1px solid green'
        correct4.style.visibility = 'visible'
        close4.style.visibility = 'hidden'
    }

    if(isValid){
        xhttp.send()
        btn.disabled = false
        modal.style.visibility = 'visible'
    }

})