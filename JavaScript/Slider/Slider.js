const slides = document.querySelector(".img-show");
var slideIndex = 0;
const sliderImg = document.querySelector('.active-img')
const Source = {
    src : [
    "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
    "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU=",
    "https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=",
    "https://media.istockphoto.com/id/1211577048/photo/aerial-view-of-scenic-mountain-road-with-car-sea-and-waterfall-in-norway.jpg?s=612x612&w=0&k=20&c=ksE8miEMUhRms6WZgbPkyQ9-wCc3aNVRf4yHdNdOhf8=",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
    "https://c4.wallpaperflare.com/wallpaper/631/683/713/nature-bridge-sky-city-wallpaper-preview.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-HD-Pictures.jpg"
    ]
}

Source.src.map(src=>{

    // Creating Img tag using create elemnent
    let ImgTag = document.createElement("img");
    ImgTag.src = src;
    console.log(ImgTag)
    slides.appendChild(ImgTag)
})
let Images = document.querySelectorAll('.img-show img')
console.log(Images)

function blur(){
    Images.forEach(img=>{
        img.style.opacity = 0.3
    })
}
blur()

let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

// By default showing image
Images[slideIndex].style.opacity = 1;
sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

// Next button
nextButton.addEventListener('click', ()=>{
    slideIndex++
    if (slideIndex > Images.length - 1) {
        slideIndex = 0
    }


    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`
})

// Prev button
prevButton.addEventListener('click', ()=>{
    slideIndex --
    if (slideIndex < 0) {
        slideIndex = Images.length - 1 
    }
    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

})

Images.forEach(img=>{
    img.addEventListener('click',()=>{
        blur()
        img.style.opacity = 1;
        sliderImg.style.backgroundImage = `url(${img.src})`
    })
})
