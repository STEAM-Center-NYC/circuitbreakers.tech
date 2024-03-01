<template>
  <div>
    <!-- Main content -->
    <main id="main">
      <!-- About Us Section -->
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>About Us</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>About Us</li>
            </ol>
          </div>
        </div>
      </section><!-- End About Us Section -->

      <!-- About Section -->
      <section class="about" data-aos="fade-up">
        <div class="container">
          <div class="row">
            <div id="carouselExampleSlidesOnly" class="carousel slide col-lg-6" data-bs-ride="carousel"
              data-bs-interval="3000">
              <div class="carousel-inner">
                <div v-for="index in 10" :key="index" :class="{ 'carousel-item': true, 'active': index === 1 }">
                  <img :src="images[index - 1]" class="d-block w-100 about-img-fluid" :alt="'Image ' + index">
                </div>
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <h3>Circuit Breakers</h3>
              <p class="fst-italic">
                Greetings, this is Circuit Breakers! We are seniors presently enrolled at the Brooklyn STEAM Center from
                various residential high schools such as:
              </p>
              <ul>
                <li><i class="bi bi-check2-circle"></i> The High School For Global Citizenship</li>
                <li><i class="bi bi-check2-circle"></i> Medgar Evers College Preparatory School</li>
                <li><i class="bi bi-check2-circle"></i> Benjamin Banneker Academy</li>
                <li><i class="bi bi-check2-circle"></i> Science Skills Center High School</li>
                <li><i class="bi bi-check2-circle"></i> S.T.A.R Early College High School</li>
                <li><i class="bi bi-check2-circle"></i> Boys And Girls High School</li>
                <li><i class="bi bi-check2-circle"></i>George Westinghouse Career And Technical High School </li>
              </ul>
              <p>
                All of us Circuit Breakers have been busy writing our own projects! From constructing stopwatches and ToDo
                apps to making our own websites!
              </p>
            </div>
          </div>
        </div>
      </section><!-- End About Us Section -->


      <!-- Facts Section -->
      <section class="facts section-bg" data-aos="fade-up">
        <div class="container">
          <div class="row counters">
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                class="purecounter"></span>
              <p>Clients</p>
            </div>
            <div class="col-lg-3 col-6 text-center">
              <p></p>
            </div>
            <div class="col-lg-3 col-6 text-center"></div>
            <div class="col-lg-3 col-6 text-center">
              <a>
                <NuxtLink class="active" to="/">Projects</NuxtLink>
              </a>
            </div>
          </div>
        </div>
      </section>


      <!-- Our Skills Section -->
      <section class="skills" data-aos="fade-up">
        <div class="container">
          <div class="section-title">
            <h2>Our Skills</h2>
            <p>What languages and web frameworks we've learned:</p>
          </div>
          <div class="skills-content">
            <div class="progress">
              <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100" style="width: 100%;">
                <span class="skill">HTML</span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                aria-valuemax="100" style="width: 100%;">
                <span class="skill">CSS </span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100" style="width: 100%;">
                <span class="skill">JavaScript </span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="55" aria-valuemin="0"
                aria-valuemax="100" style="width: 100%;">
                <span class="skill">Vue </span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-info" role="progressbar" aria-valuenow="30" aria-valuemin="0"
                aria-valuemax="100" style="width: 100%;">
                <span class="skill">Python/NB </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/assets/img/aboutus/unnamed (0).jpg",
        "/assets/img/aboutus/unnamed (1).jpg",
        "/assets/img/aboutus/unnamed (2).jpg",
        "/assets/img/aboutus/unnamed (3).jpg",
        "/assets/img/aboutus/unnamed (4).jpg",
        "/assets/img/aboutus/unnamed (5).jpg",
        "/assets/img/aboutus/unnamed (6).jpg",
        "/assets/img/aboutus/unnamed (7).jpg",
        "/assets/img/aboutus/unnamed (8).jpg",
        "/assets/img/aboutus/unnamed (9).jpg",
      ],
    };
  },
};
</script>

<style scoped>.carousel-item {
  transition: transform 1.5s ease-in-out;
}</style>
