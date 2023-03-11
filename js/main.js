import filter from './modules/filter.js'
import modalBlock from './modules/moduls.js'
import accordion from './modules/accordion.js'
window.addEventListener('DOMContentLoaded', () => {
  filter()
modalBlock('.triger-pink', '.form-substrate-pink', '.closeBtn')
modalBlock('.triger-red', '.form-substrate-red', '.closeNextBtn')
modalBlock('.menu-btn', '.menu', '.closeMenu')
  accordion(".btn-accordion",".text-accordion")
})
