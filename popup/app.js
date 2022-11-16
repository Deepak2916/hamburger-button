const open=document.getElementById('opn')
const close=document.getElementById('cls')

const container=document.getElementById('container')

open.addEventListener('click',()=>{
    container.classList.add('active')
})
close.addEventListener('click',()=>{
    container.classList.remove('active')
})
