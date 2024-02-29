<script setup lang="ts">

</script>

<template>

   <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex justify-content-between align-items-center">

<div class="logo">
  <h1 class="text-light"><NuxtLink to="/"><span>Circuit Breakers</span></NuxtLink></h1>
  <!-- Uncomment below if you prefer to use an image logo -->
  <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
</div>

<nav id="navbar" class="navbar">
  <ul>
    <li><NuxtLink class="" to="/">Home</NuxtLink></li>
    <li><NuxtLink class="active" to="/about">About</NuxtLink></li> -->
    <li><NuxtLink to="/services">Services</NuxtLink></li> -->
    <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li> -->
    <li><NuxtLink to="/team">Team</NuxtLink></li> -->
    <li><NuxtLink to="/blog">Blog</NuxtLink></li> -->
    <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle"></i>
</nav><!-- .navbar -->

</div>
  </header><!-- End Header -->
  <main>
    <NuxtPage/>
  </main>

</template>

<style>
  nav a {
    margin-right: 4px;
  }
</style>