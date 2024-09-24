const modalWindow = document.querySelector('.modal-window')
const openModalBtn = document.querySelector('.open-modal-btn')
const closeModalBtn = document.querySelector('.close-btn')


// Функция открытия модального окна
function openModal(){
    modalWindow.classList.add('modal-active')
}

// Функция закртия модального окна
function closeModal(){
    modalWindow.classList.remove('modal-active')
}

// Функция закрытия модального окна при нажатии на Esc
function closeModalByEsc(e){    
    if(e.key === 'Escape'){
        closeModal()
    }
}

// Функция закрытия модального окна при клике вне его содержимого
function closeModalOnOutsideClick(e){
    if(e.target === modalWindow){
        closeModal()
    }
}





openModalBtn.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)
window.addEventListener('keydown',closeModalByEsc)
modalWindow.addEventListener('click', closeModalOnOutsideClick)

