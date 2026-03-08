const text="Haowen Yan v4.0"

let i=0

const speed=80

const target=document.getElementById("typewriter")

function typeWriter(){
  if(!target)return

  if(i<text.length){

    target.innerHTML+=text.charAt(i)

    i++

    setTimeout(typeWriter,speed)

  }

}

window.onload=typeWriter