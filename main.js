let slides = document.querySelectorAll('.slide');

//Первый вариант
for(let slide of slides) {
    slide.addEventListener('click', function()  {
        let activeSlide = document.querySelector('.active')
        activeSlide.classList.remove('active')
        slide.classList.add('active')
    })
    
}
