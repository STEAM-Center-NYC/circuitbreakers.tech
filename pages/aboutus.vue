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
            <div id="carouselExampleSlidesOnly" class="carousel slide col-lg-6" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div v-for="index in 10" :key="index" :class="{ 'carousel-item': true, 'active': index === 1 }">
                  <img :src="images[index - 1]" class="d-block w-100 about-img-fluid" :alt="'Image ' + index">
                </div>
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check2-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                  pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section><!-- End About Section -->

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
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                class="purecounter"></span>
              <p>Projects</p>
            </div>
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"
                class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"
                class="purecounter"></span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section><!-- End Facts Section -->

      <!-- Our Skills Section -->
      <section class="skills" data-aos="fade-up">
        <div class="container">
          <div class="section-title">
            <h2>Our Skills</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
              in iste officiis commodi quidem hic quas.</p>
          </div>
          <div class="skills-content">
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100" style="width: 100%;">
                <span class="skill">HTML <i class="val">100%</i></span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                aria-valuemax="100">
                <span class="skill">CSS <i class="val">90%</i></span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100">
                <span class="skill">JavaScript <i class="val">75%</i></span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0"
                aria-valuemax="100">
                <span class="skill">Photoshop <i class="val">55%</i></span>
              </div>
            </div>
          </div>
        </div>
      </section><!-- End Our Skills Section -->
    </main>

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
              <p>We are members in the Brooklyn Steam Center's CSIT program. This is the first year that we have two
                distinct paths. We are divided into two big areas in the IT industry: Cyber Security and Full Stack
                Development. These two roads lead to these two major industries. Even though we are divided into two
                distinct sectors, we nevertheless work together on certain initiatives, which ties us all into one big
                community. Together, we will use information technology and computer science to establish a solid
                foundation in the field of computing.</p>
            </div>
          </div>
        </div>
      </div>
    </footer><!-- End Footer -->
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
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  },
};
</script>
  
<style scoped>.carousel-item {
  transition: transform 1.5s ease-in-out;
}</style>