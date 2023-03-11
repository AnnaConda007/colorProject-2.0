const modalBlock = (trigerSelector, modalSelector, closeSelector) => {
    const triger = document.querySelector(trigerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)
    const allModal = document.querySelectorAll('.modal')
  
    triger.addEventListener('click', (e) => {
        e.preventDefault()
      allModal.forEach((modal) => {
        modal.style.display = 'none'
      })
      modal.style.display = 'flex'
    })
  
    const toCloseBy = (eventType) => {
      window.addEventListener(eventType, (e) => {
        if (e.target === modal || e.code == 'Escape' || e.target === close) {
          modal.style.display = 'none'
        }
      })
    }
  
    toCloseBy('click', window)
    toCloseBy('keydown', window)
  }
  export default modalBlock