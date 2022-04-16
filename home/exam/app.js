import { elemGenerator } from "./elem-generator.js";

const ENDPOINT = 'http://localhost:3000'
let dataFromBack = null;

const map = document.querySelector('a.button')

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
        document.querySelector('.main').src = dataFromBack[0].mainImg
        document.querySelector('.second-main').src = dataFromBack[0].secondImg         
        document.querySelector('.content__title').innerText = dataFromBack[0].title 
        document.querySelector('.content__desc').innerText = dataFromBack[0].description 
        document.querySelector('.content__desc').innerText = dataFromBack[0].description 
        document.querySelector('.btn__price').innerText = dataFromBack[0].price 
        document.querySelector('.btn__date').innerText = dataFromBack[0].date 
        document.querySelector('.btn__places').innerText = dataFromBack[0].places 
        console.log(document.querySelector('.content__desc'))
        map.href = `${dataFromBack[0].maps_btn}`
        console.log(dataFromBack[0].maps_btn)
    }

    document.querySelector('.main').src = obj.mainImg
    document.querySelector('.second-main').src = obj.secondImg         
    document.querySelector('.content__title').innerText = obj.title 
    document.querySelector('.content__desc').innerText = obj.description 
    document.querySelector('.content__desc').innerText = obj.description 
    document.querySelector('.btn__price').innerText = obj.price 
    document.querySelector('.btn__date').innerText = obj.date 
    document.querySelector('.btn__places').innerText = obj.places
    map.href = `${obj.maps_btn}`
}

const renderData = (arr) => {
    document.querySelector('.buttons').innerHTML = ''

    arr.forEach( (element, index) => {
        const btn = elemGenerator('button', [{class: ''}], element.title)

        btn.addEventListener( 'click', () => {
            console.log(element)
            switchData(element)
        })

        document.querySelector('.buttons').append(btn)
    })
}

getData('attraction')
    .then( data => {
        renderData(data)
        dataFromBack = data
    })


export {renderData, switchData}