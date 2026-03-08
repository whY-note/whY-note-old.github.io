const video=document.getElementById("bg-video")

video.addEventListener("ended",freezeFrame)

function freezeFrame(){

const canvas=document.getElementById("capture")

const ctx=canvas.getContext("2d")

canvas.width=video.videoWidth
canvas.height=video.videoHeight

ctx.drawImage(video,0,0)

video.style.display="none"

startParticleScene(canvas)

}