import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
const initSlider = () => {
    const swiper = new Swiper(`.swiper`, {
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`
        },
        slidesPerView: 3,
        spaceBetween: 5,
       // loop: true,
    })
}
export default initSlider
