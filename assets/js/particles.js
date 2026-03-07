let canvas = document.getElementById("particle-canvas")
let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

function createParticles(){

    for(let i=0;i<300;i++){

        particles.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            vx:(Math.random()-0.5)*6,
            vy:(Math.random()-0.5)*6,

            size:Math.random()*3

        })

    }

}

function drawParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    particles.forEach(p=>{

        p.x+=p.vx
        p.y+=p.vy

        ctx.fillStyle="white"

        ctx.beginPath()

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2)

        ctx.fill()

    })

}

function animateParticles(){

    drawParticles()

    requestAnimationFrame(animateParticles)

}

function startParticles(){

    createParticles()

    animateParticles()

}