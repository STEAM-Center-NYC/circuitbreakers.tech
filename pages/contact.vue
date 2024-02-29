<template>
 
    <!-- ======= Header ======= -->
   <header id="header" class="fixed-top d-flex align-items-center ">
     <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
         <h1 class="text-light"><a href="index.html"><span>Moderna</span></a></h1>
         <!-- Uncomment below if you prefer to use an image logo -->
         <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
       </div>
        <nav id="navbar" class="navbar">
         <ul>
           <li><a class="" href="index.html">Home</a></li>
           <li><a href="about.html">About</a></li>
           <li><a href="services.html">Services</a></li>
           <li><a href="portfolio.html">Portfolio</a></li>
           <li><a href="team.html">Team</a></li>
           <li><a href="blog.html">Blog</a></li>
           <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
             <ul>
               <li><a href="#">Drop Down 1</a></li>
               <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                 <ul>
                   <li><a href="#">Deep Drop Down 1</a></li>
                   <li><a href="#">Deep Drop Down 2</a></li>
                   <li><a href="#">Deep Drop Down 3</a></li>
                   <li><a href="#">Deep Drop Down 4</a></li>
                   <li><a href="#">Deep Drop Down 5</a></li>
                 </ul>
               </li>
               <li><a href="#">Drop Down 2</a></li>
               <li><a href="#">Drop Down 3</a></li>
               <li><a href="#">Drop Down 4</a></li>
             </ul>
           </li>
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
                   <p>A108 Adam Street, New York, NY 535022</p>
                 </div>
               </div>
               <div class="col-md-6">
                 <div class="info-box">
                   <i class="bx bx-envelope"></i>
                   <h3>Email Us</h3>
                   <p>info@example.com<br>contact@example.com</p>
                 </div>
               </div>
               <div class="col-md-6">
                 <div class="info-box">
                   <i class="bx bx-phone-call"></i>
                   <h3>Call Us</h3>
                   <p>+1 5589 55488 55<br>+1 6678 254445 41</p>>
                 </div>
               </div>
             </div>
            </div>
            <div class="col-lg-6">
             <form action="forms/contact.php" method="post" role="form" class="php-email-form">
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
             </form>
           </div>
          </div>
        </div>
     </section><!-- End Contact Section -->
      <!-- ======= Map Section ======= -->
  <section class="map mt-2">
    <div class="container-fluid p-0">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.2209686499275!2d-73.9712029!3d40.6985551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c77674a3f1d%3A0xb704a60938db7aa!2sBrooklyn%20STEAM%20Center!5e0!3m2!1sen!2sus!4v1709134960863!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section><!-- End Map Section -->
    </main><!-- End #main -->
  
  </template>
  
  <!--
  
  <script>
  
  // Vendor JS Files 
  <src="assets/vendor/purecounter/purecounter_vanilla.js">
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  
   Template Main JS File
  <script src="assets/js/main.js"></script>
  
  </script>
  
  -->