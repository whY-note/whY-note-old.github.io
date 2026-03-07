const text = "WELCOME TO MY WORLD"

let i = 0

const speed = 80

const target = document.getElementById("typewriter")

function typeWriter() {

  if(i < text.length){

      target.innerHTML += text.charAt(i)

      i++

      setTimeout(typeWriter,speed)

  }

}

window.onload = typeWriter