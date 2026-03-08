function freezeFrame(){

   const video=document.getElementById("bg-video")
    
   const canvas=document.getElementById("capture-canvas")
    
    const ctx=canvas.getContext("2d")
    
    canvas.width=video.videoWidth
    canvas.height=video.videoHeight
    
    ctx.drawImage(video,0,0,canvas.width,canvas.height)
    
    video.style.display="none"
    
    // canvas.style.display="block"
    canvas.style.opacity="1"
    
    const dataURL=canvas.toDataURL("image/png")
    
    localStorage.setItem("logoFrame",dataURL)
    
    setTimeout(()=>{
    
    canvas.classList.add("animate")
    
    },100)
    
    setTimeout(()=>{
    
       window.location.href="/home/"
    
    },2200)
    
    }