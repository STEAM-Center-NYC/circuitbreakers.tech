<script setup lang="ts">
useHead({
  title: 'Circuit Breakers',
})
</script>

<template>
  <header>
    <h1>Circuit Breakers</h1>
  </header>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/aboutus">About Us</NuxtLink>
    <!-- <NuxtLink to="/team">Team</NuxtLink> -->
    <!-- <NuxtLink to="/contact-us">Contact</NuxtLink> -->
    <!-- <NuxtLink to="/projects">Our Projects</NuxtLink> -->
  </nav>
  <main>
    <NuxtPage />
  </main>
</template>

<style>
  nav a {
    margin-right: 4px;
  }
</style>