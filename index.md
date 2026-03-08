---
layout: default
title: Intro
permalink: /
---

<div id="video-container">

  <video id="bg-video" autoplay muted playsinline>
    <source src="/assets/video/intro.mp4" type="video/mp4">
  </video>

  <canvas id="capture-canvas"></canvas>

  <div id="overlay">
      <h1 id="typewriter"></h1>
  </div>

</div>

<script>

const video = document.getElementById("bg-video")

video.addEventListener("ended", () => {

    // startParticles()

    // setTimeout(()=>{
    //     window.location.href = "/home/"
    // },3000)
    freezeFrame()

})

</script>