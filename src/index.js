const onClickModal = () =>{

    const controlModal = document.getElementById('control-modal')
    const imgModal = document.getElementById('share-icon')

    if(controlModal.classList.contains('hide-modal')){
        controlModal.classList.remove('hide-modal')
        showModal.classList.add('desktop-active')
        imgModal.setAttribute('src', './src/images/icon-shareWhite.svg')
    }
    else{
        controlModal.classList.add('hide-modal')
        showModal.classList.remove('desktop-active')
        imgModal.setAttribute('src', './src/images/icon-share.svg')
    }
}

//El evento siempre se debe manejar así debido a que se puede remover
const showModal = document.getElementById("showModal");
showModal.addEventListener('click',onClickModal)
const closeModal = document.getElementById('closeModal')
closeModal.addEventListener('click',onClickModal)
