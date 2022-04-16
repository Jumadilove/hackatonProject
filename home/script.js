
import { langs } from "./changeLang.js"
console.log(langs)


const contImg = document.querySelector('.slider__image')
const imgs = document.querySelectorAll('.slider__image img')
const left = document.querySelector('#slider__leftBtn')
const right = document.querySelector('#slider__rightBtn')

let ind = 0


left.addEventListener('click', () =>{
    ind--
    changeImg()
    console.log(ind)
})

right.addEventListener('click', () =>{
    ind++
    changeImg()
    console.log(ind)
})

function changeImg(){
    if(ind > imgs.length - 1){
        ind = 0
    }
    else if (ind < 0 ){
        ind = imgs.length - 1
    }
    contImg.style.transform = `translateX(${ - ind * `${num}`}%)`
}
const screenWidth = window.screen.width 
let num = 58

if(screenWidth == 900){
    
}

function keyHundler(str){
    document.addEventListener('keydown', () => {
        if(str == 'ArrowRight'){
            ind++
        }else if(str == 'ArrowLeft'){
            ind--
        }
    })
}

keyHundler('ArrowRight')
keyHundler('ArrowLeft')

//slide__end


//light-dark





const checkbox = document.querySelector('.change_checkbox')

const h1 = document.querySelector('.intro__text h1')
const h3 = document.querySelector('.intro__text h3')
const home = document.querySelector('.intro_home')
const about = document.querySelector('.intro_about')
const maps = document.querySelector('.intro_maps')
const contacts = document.querySelector('.intro_contacts')
const sightTitle = document.querySelector('.article-1__header span')
const art_1_title = document.querySelector('.article-1__title')
const art_1_desc = document.querySelector('.article-1__desc')
const art_2_title = document.querySelector('.article-2__title')
const art_2_desc = document.querySelector('.article-2__desc')
const art_3_title = document.querySelector('.article-3__title')
const art_3_desc = document.querySelector('.article-3__desc')
const art_4_title = document.querySelector('.article-4__title')
const art_4_desc = document.querySelector('.article-4__desc')
const art_5_title = document.querySelector('.article-5__title')
const art_5_desc = document.querySelector('.article-5__desc')
const art_6_title = document.querySelector('.article-6__title')
const art_6_desc = document.querySelector('.article-6__desc')
const hotel_name_1 = document.querySelector('.hotel_name-1')
const hotel_desc_1 = document.querySelector('.hotel_text-1')
const hotel_name_2 = document.querySelector('.hotel_name-2')
const hotel_desc_2 = document.querySelector('.hotel_text-2')
const hotel_name_3 = document.querySelector('.hotel_name-3')
const hotel_desc_3 = document.querySelector('.hotel_text-3')
const hotel_name_4 = document.querySelector('.hotel_name-4')
const hotel_desc_4 = document.querySelector('.hotel_text-4')
const hotel_name_5 = document.querySelector('.hotel_name-5')
const hotel_desc_5 = document.querySelector('.hotel_text-5')
const hotel_name_6 = document.querySelector('.hotel_name-6')
const hotel_desc_6 = document.querySelector('.hotel_text-6')
const hotel_title_1 = document.querySelector('.hotel_title-1')
const hotel_title_2 = document.querySelector('.hotel_title-2')
const hotel_title_3 = document.querySelector('.hotel_title-3')
const hotel_title_4 = document.querySelector('.hotel_title-4')
const hotel_title_5 = document.querySelector('.hotel_title-5')
const hotel_title_6 = document.querySelector('.hotel_title-6')
const hotel_more_1 = document.querySelector('.hotel__more-1')
const hotel_more_2 = document.querySelector('.hotel__more-2')
const hotel_more_3 = document.querySelector('.hotel__more-3')
const hotel_more_4 = document.querySelector('.hotel__more-4')
const hotel_more_5 = document.querySelector('.hotel__more-5')
const hotel_more_6 = document.querySelector('.hotel__more-6')
const gallery__title = document.querySelector('.gallery__titles')
const footer_item_1 = document.querySelector('.footer_item_1')
const footer_item_2 = document.querySelector('.footer_item_2')
const footer_item_3 = document.querySelector('.footer_item_3')
const footer_item_4 = document.querySelector('.footer_item_4')
const footer_item_5 = document.querySelector('.footer_item_5')
const footer_item_6 = document.querySelector('.footer_item_6')
const footer_item_7 = document.querySelector('.footer_item_7')
const footer_item_8 = document.querySelector('.footer_item_8')



function changeLang (bool) {
    if(!bool){
        h1.innerText = langs.main_title.en
        h3.innerText = langs.main_desc.en
        home.innerText = langs.menu_home.en
        about.innerText = langs.menu_about.en
        maps.innerText = langs.menu_maps.en
        contacts.innerText = langs.menu_contacts.en
        sightTitle.innerText = langs.sight_title.en
        art_1_title.innerText = langs.article_1_title.en
        art_1_desc.innerText = langs.article_1_desc.en
        art_2_title.innerText = langs. article_2_title.en
        art_2_desc.innerText = langs.article_2_desc.en
        art_3_title.innerText = langs.article_3_title.en
        art_3_desc.innerText = langs.article_3_desc.en
        art_4_title.innerText = langs.article_4_title.en
        art_4_desc.innerText = langs.article_4_desc.en
        art_5_title.innerText = langs.article_5_title.en
        art_5_desc.innerText = langs.article_5_desc.en
        art_6_title.innerText = langs.article_6_title.en
        art_6_desc.innerText = langs.article_6_desc.en
        hotel_name_1.innerText = langs.char_hotel.en
        hotel_desc_1.innerText = langs.char_hotel_desc.en
        hotel_name_2.innerText = langs.yurt_camp_bayish.en
        hotel_desc_2.innerText = langs.yurt_camp_bayish_desc.en
        hotel_name_3.innerText = langs.traveller.en
        hotel_desc_3.innerText = langs.traveller_text.en
        hotel_name_4.innerText = langs.han_tenri.en
        hotel_desc_4.innerText = langs.han_tenri_desc.en
        hotel_name_5.innerText = langs.vacation_house.en
        hotel_desc_5.innerText = langs.vacation_house_desc.en
        hotel_name_6.innerText = langs.intourist.en
        hotel_desc_6.innerText = langs.intourist_desc.en
        hotel_title_1.innerText = langs.char_hotel.en
        hotel_title_2.innerText = langs.yurt_camp_bayish.en
        hotel_title_3.innerText = langs.traveller.en
        hotel_title_4.innerText = langs.han_tenri.en
        hotel_title_5.innerText = langs.vacation_house.en
        hotel_title_6.innerText = langs.intourist.en
        hotel_more_1.innerText = langs.hotel__more.en
        hotel_more_2.innerText = langs.hotel__more.en
        hotel_more_3.innerText = langs.hotel__more.en
        hotel_more_4.innerText = langs.hotel__more.en
        hotel_more_5.innerText = langs.hotel__more.en
        hotel_more_6.innerText = langs.hotel__more.en
        gallery__title.innerText = langs.gallery_titles.en
        footer_item_1.innerText = langs.footer_item_1.en
        footer_item_2.innerText = langs.footer_item_2.en
        footer_item_3.innerText = langs.footer_item_3.en
        footer_item_4.innerText = langs.footer_item_4.en
        footer_item_5.innerText = langs.footer_item_5.en
        footer_item_6.innerText = langs.footer_item_6.en
        footer_item_7.innerText = langs.footer_item_7.en
        footer_item_8.innerText = langs.footer_item_8.en
        
    }else{
        h1.innerText = langs.main_title.ru
        h3.innerText = langs.main_desc.ru
        home.innerText = langs.menu_home.ru
        about.innerText = langs.menu_about.ru
        maps.innerText = langs.menu_maps.ru
        contacts.innerText = langs.menu_contacts.ru
        sightTitle.innerText = langs.sight_title.ru
        art_1_title.innerText = langs.article_1_title.ru
        art_1_desc.innerText = langs.article_1_desc.ru
        art_2_title.innerText = langs.article_2_title.ru
        art_2_desc.innerText = langs.article_2_desc.ru
        art_3_title.innerText = langs.article_3_title.ru
        art_3_desc.innerText = langs.article_3_desc.ru
        art_4_title.innerText = langs.article_4_title.ru
        art_4_desc.innerText = langs.article_4_desc.ru
        art_5_title.innerText = langs.article_5_title.ru
        art_5_desc.innerText = langs.article_5_desc.ru
        art_6_title.innerText = langs.article_6_title.ru
        art_6_desc.innerText = langs.article_6_desc.ru
        hotel_name_1.innerText = langs.char_hotel.ru
        hotel_desc_1.innerText = langs.char_hotel_desc.ru
        hotel_name_2.innerText = langs.yurt_camp_bayish.ru
        hotel_desc_2.innerText = langs.yurt_camp_bayish_desc.ru
        hotel_name_3.innerText = langs.traveller.ru
        hotel_desc_3.innerText = langs.traveller_text.ru
        hotel_name_4.innerText = langs.han_tenri.ru
        hotel_desc_4.innerText = langs.han_tenri_desc.ru
        hotel_name_5.innerText = langs.vacation_house.ru
        hotel_desc_5.innerText = langs.vacation_house_desc.ru
        hotel_name_6.innerText = langs.intourist.ru
        hotel_desc_6.innerText = langs.intourist_desc.ru
        hotel_title_1.innerText = langs.char_hotel.ru
        hotel_title_2.innerText = langs.yurt_camp_bayish.ru
        hotel_title_3.innerText = langs.traveller.ru
        hotel_title_4.innerText = langs.han_tenri.ru
        hotel_title_5.innerText = langs.vacation_house.ru
        hotel_title_6.innerText = langs.intourist.ru
        hotel_more_1.innerText = langs.hotel__more.ru
        hotel_more_2.innerText = langs.hotel__more.ru
        hotel_more_3.innerText = langs.hotel__more.ru
        hotel_more_4.innerText = langs.hotel__more.ru
        hotel_more_5.innerText = langs.hotel__more.ru
        hotel_more_6.innerText = langs.hotel__more.ru
        gallery__title.innerText = langs.gallery_titles.ru
        footer_item_1.innerText = langs.footer_item_1.ru
        footer_item_2.innerText = langs.footer_item_2.ru
        footer_item_3.innerText = langs.footer_item_3.ru
        footer_item_4.innerText = langs.footer_item_4.ru
        footer_item_5.innerText = langs.footer_item_5.ru
        footer_item_6.innerText = langs.footer_item_6.ru
        footer_item_7.innerText = langs.footer_item_7.ru
        footer_item_8.innerText = langs.footer_item_8.ru
    }
}

checkbox.addEventListener('click', () => {
    if(checkbox.checked) changeLang(true)
    else changeLang(false)
})

changeLang(false)

fetch('https://api.openweathermap.org/data/2.5/weather?q=naryn&appid=c9fb6f4dbcf4df12e20f3206cbe95a34')
    .then(function (reps) { return reps.json() })
    .then(function (data) {
        document.querySelector('.weather__title').innerHTML = data.name
        document.querySelector('.weather__image-title').innerHTML = data.name
        document.querySelector('.weather__weat').innerHTML = Math.round(data.main.temp - 273) + '°C'
        document.querySelector('.weather__image img').src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg` 
        document.querySelector('.weather__desc').innerHTML = data.weather[0]['description']
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=At-Bashi&appid=c9fb6f4dbcf4df12e20f3206cbe95a34')
    .then(function (reps) { return reps.json() })
    .then(function (data) {
        document.querySelector('.At__Bashy-title').innerHTML = data.name
        document.querySelector('.At__Bashy_img-title').innerHTML = data.name
        document.querySelector('.At__Bashy-temp').innerHTML = Math.round(data.main.temp - 273) + '°C'
        document.querySelector('.At__Bashy-img').src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg` 
        document.querySelector('.At__Bashy-desc').innerHTML = data.weather[0]['description']
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Baetov,kg&appid=c9fb6f4dbcf4df12e20f3206cbe95a34')
    .then(function (reps) { return reps.json() })
    .then(function (data) {
        document.querySelector('.kalinin-title').innerHTML = data.name
        document.querySelector('.kalinin_img-title').innerHTML = data.name
        document.querySelector('.kalinin-temp').innerHTML = Math.round(data.main.temp - 273) + '°C'
        document.querySelector('.kalinin_img').src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg` 
        document.querySelector('.kalinin-desc').innerHTML = data.weather[0]['description']
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=kochkor,kg&appid=c9fb6f4dbcf4df12e20f3206cbe95a34')
    .then(function (reps) { return reps.json() })
    .then(function (data) {
        document.querySelector('.kochkor-title').innerHTML = data.name
        document.querySelector('.kochkor_img-title').innerHTML = data.name
        document.querySelector('.kochkor-temp').innerHTML = Math.round(data.main.temp - 273) + '°C'
        document.querySelector('.kochkor_img').src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg` 
        document.querySelector('.kochkor-desc').innerHTML = data.weather[0]['description']
    })
    .catch(function() {

    })

    const intBrgBtn = document.querySelector('.burger')
    const intBrgClose = document.querySelector('.intro__burger-close')
    const introBurger = document.querySelector('.intro__burger')

    intBrgBtn.addEventListener('click', () => {
        introBurger.style.transform = 'translate( 0px, 0)'
        introBurger.style.visibility = 'visible'
    })

    intBrgClose.addEventListener('click', () => {
        introBurger.style.transform = 'translate( -450px, 0)'
        introBurger.style.visibility = 'hidden'
    })

    new WOW().init();