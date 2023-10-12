const slides = document.querySelectorAll(".slide")
// console.log(slides)
var counter = 0
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const imgSlide = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${counter * 100}%)`
    })
}

const goNext = () => {
    if(counter <= 0 && counter > -5){
        counter--
        imgSlide()
    }
}

const goPrev = () => {
    if(counter < 0 && counter >= -5){
        counter++
        imgSlide()
    }
}