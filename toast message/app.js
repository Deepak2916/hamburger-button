const btn=document.getElementById('btn')
const container=document.getElementById('container')

btn.addEventListener('click',()=>{creatNotification()})

function creatNotification(){
    const noti=document.createElement('li')
    noti.classList.add('toast')
   
    container.appendChild(noti)
    noti.innerHTML='you clicked me'
  setTimeout(()=>{
    noti.remove()
  },3000)
}

