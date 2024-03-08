<script setup lang="ts">
</script>

<template>

  <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h1 class="text-light"><NuxtLink to="/"><img src="/CircuitBreakersLogo.png" alt="Circuit Breakers Logo" style="padding-right: 30px;" class="img-fluid"><span>Circuit Breakers</span></NuxtLink></h1>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><NuxtLink class="" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="active" to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/team">Team</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
  <main>
    <NuxtPage />
  </main>

<!-- ======= Footer ======= -->
<footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

<div class="footer-top">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"><NuxtLink class="" to="/">Home</NuxtLink></i></li>
          <li><i class="bx bx-chevron-right"><NuxtLink class="active" to="/about">About</NuxtLink></i></li>
          <li><i class="bx bx-chevron-right"><NuxtLink to="/services">Services</NuxtLink></i></li>
          <li><i class="bx bx-chevron-right"><NuxtLink to="/portfolio">Portfolio</NuxtLink></i></li>
          <li><i class="bx bx-chevron-right"><NuxtLink to="/team">Team</NuxtLink></i></li>
          <li><i class="bx bx-chevron-right"><NuxtLink to="/contact">Contact Us</NuxtLink></i></li>
        </ul>
      </div>
      
      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <p>At Full Stack Development, we create websites from scratch, covering both the design you see and the inner workings behind the scenes. Our team knows many coding tools, so we can customize solutions for every project. Trust us to make websites that work great, look good, and grow with your needs.</p>
      </div>
      <div class="col-lg-3 col-md-6 footer-contact">
        <h4>Contact Us</h4>
        <p>
          141 Flushing Ave<br>
          Brooklyn, NY 11205<br>
          United States <br><br>
          <strong>Phone:</strong> (347)464-3680<br>
          <strong>Email:</strong> fsd-22@brooklynsteamcenter.org<br>
        </p>

      </div>

      <div class="col-lg-3 col-md-6 footer-info">
        <h3>About FSD</h3>
        <p>We are members in the Brooklyn Steam Center's CSIT program. This is the first year that we have two distinct paths. We are divided into two big areas in the IT industry: Cyber Security and Full Stack Development. These two roads lead to these two major industries. Even though we are divided into two distinct sectors, we nevertheless work together on certain initiatives, which ties us all into one big community. Together, we will use information technology and computer science to establish a solid foundation in the field of computing.</p>
        <div class="social-links mt-3">
          <a to="https://www.instagram.com/bksteamcenter/" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a to="https://www.linkedin.com/company/bksteamcenter/mycompany/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span>Full Stack Development</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
    <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/ -->
    Designed by <a to="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>
</footer><!-- End Footer -->
</template>

<style>
</style>