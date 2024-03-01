<script setup lang="ts">

</script>

<template>
  <html lang="en">

  <body>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center ">
      <div class="container d-flex justify-content-between align-items-center">

        <div class="logo">
          <h1 class="text-light"><a href="index.html"><span>Circuit Breakers</span></a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="" href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Products</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a class="active" href="contact.html">Contact Us</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      </div>
    </header><!-- End Header -->

    <main id="main">

      <!-- ======= Contact Section ======= -->
      <section class="breadcrumbs">
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Contact</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Contact</li>
            </ol>
          </div>

        </div>
      </section><!-- End Contact Section -->

      <!-- ======= Contact Section ======= -->
      <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div class="container">

          <div class="row">

            <div class="col-lg-6">

              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>141 Flushing Avenue, New York, NY 11205</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>fsd-22@brooklynsteamcenter.org<br></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-lg-6">
              <form action="https://us-central1-steam-center-app-dev.cloudfunctions.net/formToEmail" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
                <input name="send-to" value="fsd-22@brooklynsteamcenter.org" hidden>
              </form>
            </div>

          </div>

        </div>
      </section><!-- End Contact Section -->

      <!-- ======= Map Section ======= -->
      <section class="map mt-2">
        <div class="container-fluid p-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9048950912997!2d-73.97359562397509!3d40.698092171395686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb27bc80add%3A0xd39ad792a39e9d83!2s141%20Flushing%20Ave%2C%20Brooklyn%2C%20NY%2011205!5e0!3m2!1sen!2sus!4v1709215233174!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section><!-- End Map Section -->

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

      

      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Projects</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Team</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Project Management</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                141 Flushing Avenue <br>
                New York, NY 11205<br>
                United States <br><br>
                <strong>Phone:</strong> +1 5589 55488 55<br>
                <strong>Email:</strong> fsd-22@brooklynsteamcenter.org<br>
              </p>

            </div>

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>About Circuit Breakers</h3>
              <p>We are members in the Brooklyn Steam Center's CSIT program. This is the first year that we have two distinct paths. We are divided into two big areas in the IT industry: Cyber Security and Full Stack Development. These two roads lead to these two major industries. Even though we are divided into two distinct sectors, we nevertheless work together on certain initiatives, which ties us all into one big community. Together, we will use information technology and computer science to establish a solid foundation in the field of computing.</p>
            </div>

          </div>
        </div>
      </div>

     
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files 
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

     Template Main JS File 
    <script src="assets/js/main.js"></script>
-->
  </body>

  </html>
</template>

<style>
nav a {
  margin-right: 4px;
}
</style>