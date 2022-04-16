console.log('hello')

const modalOverlay = document.querySelector('.modal__overlay')
const modalContent = document.querySelector('.modal__content')
const modalBtn = document.querySelector('.modal__btn')


const inputName     = document.querySelector('.modal__input_name')
const inputDesc   = document.querySelector('.modal__input_desc')
const inputLink     = document.querySelector('.modal__input_link')
const inputLink_2     = document.querySelector('.modal__input_link-2')
const inputCost     = document.querySelector('.modal__input_price')
const inputDate   = document.querySelector('.modal__input_date')
const inputPlaces   = document.querySelector('.modal__input_places')
const inputs = document.querySelectorAll('.modal__input')
const inputMap = document.querySelector('.modal__input_map')
const addBtn = document.querySelector('.addBtn')

const ENDPOINT = 'http://localhost:3000'

modalBtn.addEventListener('click', () =>{
    let isValid = true
    if(inputNmame.value == ''){
        isValid = false
        modalBtn.disabled = true
    }
})

addBtn.addEventListener( 'click', () => {
    modalOverlay.style.visibility = 'visible';
    modalContent.style.visibility = 'visible';
})

modalOverlay.addEventListener( 'click', () => {
    modalOverlay.style.visibility = 'hidden';
    modalContent.style.visibility = 'hidden';
})

modalBtn.addEventListener('click', ()=>{
    modalOverlay.style.visibility = 'hidden';
    modalContent.style.visibility = 'hidden';
})

async function getData (route){
    const res = await fetch(`${ENDPOINT}/${route}`)
    return await res.json()
}

const createData = async(route, data) => {

    const response = await fetch(`${ENDPOINT}/${route}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    
    return await response.json()
}

const createPost = () => {
    const obj = {
        title: inputName.value,
        description: inputDesc.value,
        mainImg: inputLink.value,
        secondImg: inputLink_2.value,
        price: inputCost.value,
        date: inputDate.value,
        places: inputPlaces.value,
        maps_btn: inputMap.value
    }
    createData('attraction', obj)
}

modalBtn.addEventListener('click', ()=>{
    createPost()
})

