import { elemGenerator } from "./elem-generator.js";

const ENDPOINT = 'http://localhost:3000'
let dataFromBack = null;

const isEmpty = (obj) => {
    for (const key in obj) {
        return true
    }
    return false
}

const getData = async(route) => {
    const res = await fetch(`${ENDPOINT}/${route}`)
    return await res.json()
}



const switchData = (obj) => {
    if(isEmpty(obj)){
        // console.log(data)
        document.querySelector('.main').src = dataFromBack[0].mainImg
        document.querySelector('.second-main').src = dataFromBack[0].secondImg         
        document.querySelector('.content__title').innerText = dataFromBack[0].title 
        document.querySelector('.content__desc').innerText = dataFromBack[0].description
        document.querySelector('.button').innerHTML = dataFromBack[0].btn
        document.querySelector('.btn__price').innerText = dataFromBack[0].price 
        document.querySelector('.btn__date').innerText = dataFromBack[0].date 
        document.querySelector('.btn__places').innerText = dataFromBack[0].places 
    }

        document.querySelector('.main').src = obj.mainImg
        document.querySelector('.second-main').src = obj.secondImg         
        document.querySelector('.content__title').innerText = obj.title 
        document.querySelector('.content__desc').innerText = obj.description
        document.querySelector('.button').innerHTML = obj.btn 
        document.querySelector('.btn__price').innerText = obj.price 
        document.querySelector('.btn__date').innerText = obj.date 
        document.querySelector('.btn__places').innerText = obj.places
}

const renderData = (arr) => {
    document.querySelector('.buttons').innerHTML = ''

    arr.forEach( (element, index) => {
        const btn = elemGenerator('button', [{class: ''}], element.title)

        btn.addEventListener( 'click', () => {
            switchData(element)
            console.log(element)
        })

        document.querySelector('.buttons').append(btn)
    })
}


let isDark = Boolean(localStorage.getItem('theme')) || false
        console.log(isDark)
        if(isDark){
            document.body.setAttribute('dark', '');
        }
        else{
            document.body.removeAttribute('dark')
        }

        localStorage.setItem('theme', isDark)

getData('attraction')
    .then( data => {
        renderData(data)
        dataFromBack = data
    })

    const backBan = document.querySelector('.back')

    