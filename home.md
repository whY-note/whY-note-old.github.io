---
layout: default
title: Home
permalink: /home/
---

<div id="home-header">

  <img id="logo" src="/assets/logo.png"/>

  <h1>Welcome</h1>

</div>

<script>

const logo = document.getElementById("logo")

const saved = localStorage.getItem("logoFrame")

if(saved){
  logo.src = saved
}

</script>