const menu = document.querySelector('.click')
const p = document.querySelectorAll('p')
const imgVet = document.querySelector('.size2')
const profile = document.querySelector('.profile')
const logo = document.querySelector('.logo')
let value = 0

menu.onclick = () => {
    if(value == 0){
        for (let para of p) {
            para.classList.remove('none')
        }
        profile.classList.remove('out-hidden')
        profile.classList.add('out')  
        imgVet.classList.remove('none')
        logo.classList.remove('none')
        value = 1
    }else{
        for (let para of p) {
            para.classList.add('none')
        }
        profile.classList.add('out-hidden')
        profile.classList.remove('out')
        logo.classList.add('none')
        imgVet.classList.add('none')
        value = 0
    }
}
