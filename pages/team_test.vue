<script setup>
const { data } = await useAsyncData('home', () => queryContent('/team').find())
</script>

<template> 
<main id = "main">   
<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Our Team</h2>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li>Our Team</li>
      </ol>
    </div>

  </div>
</section><!-- End Our Team Section -->

<!-- ======= Team Section ======= -->
<section class="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" >
  <div class="container">

    <div class="row">

      <div class="col-lg-4 col-md-6 d-flex align-items-stretch" v-for="values in data">
        <div class="member">
          <div class="member-img">
            <img :src="values.picture" class="img-fluid" alt="">
            <div class="social">
              <a :href="values.linkedin " target="_blank"><i class="bi bi-linkedin"></i> {{ values.name }} </a>
            </div>  
          </div>
          <div class="member-info">
            <h4>{{ values.name }}</h4>
            <span>{{ values.team }} TEAM MEMBER</span>
            <p>{{ values.description }}</p>
          </div>
        </div>
      </div>
</div>
</div>
</section>

</main>
</template>

<style scoped>
h1 {
    margin-top: 72px;
}

div{
padding-bottom:15px;

}
</style>

