<template>
<body>
  <!--banner-->
  <section id="banner">
    <div class="bg-color">
      <header id="header">
        <div class="container">
          <div id="mySidenav" class="sidenav">
            <a href class="closebtn" onclick="closeNav()"></a>
            <a href="#about">About</a>
            <a href="#event">Event</a>
            <a href="#menu-list">Menu</a>
            <a href="#contact">Book a table</a>
          </div>
          <!-- Use any element to open the sidenav -->
          <span onclick="openNav()" class="pull-right menu-icon"></span>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-12 text-center">
            <h1 class="logo-name">Hi Dear!</h1>
            <h2>I am a FULLSTACK developer.</h2>
            <p>Nigerian Based Vue Fullstack Web designer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / banner -->
  <!--about-->
  <section id="about" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center marb-35">
          <h1 class="header-h">INTRO</h1>
          <p class="header-p">
            My name is Ukpai Ugochi and I'm a Fullstack Developer with expartriate in MEVN stack.
            I am passionate, hard working and love to design beautiful and functional websites.
            <br />See below for more information, who knows you might be interested in working with me.
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="heading">WHAT I DO</h2>
              <p>Developing websites is my passion and main goal.I specialize in MEVN stack (Mongodb, Express.js, Vue.js, Node.js), making your website very responsive with bootstrap-vue. Once in a while, we would need to store and retrieve information to our webpage, mongodb has you covered!</p>
              <div class="details-list">
                <ul>
                  <li>I Transform Brands</li>
                  <li>I Code Beautiful Websites</li>
                  <li>I Code Functional And Responsive Websites</li>
                  <li>I Support And Manage</li>
                  <li>I am Passionate</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xl-6">
            <img src="../assets/style/img/res01.jpg" alt class="img-responsive" />
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </section>
  <!--/about-->
  <!-- event -->
  <section id="event">
    <div class="bg-color">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-12 text-center" style="padding:60px;">
            <h1 class="header-h">Completed job</h1>
            <p class="header-p">Decorations 100% responsive</p>
          </div>
          <div class="col-md-12" style="padding-bottom:60px;">
            <div class="item active left">
              <div class="col-md-6 col-sm-6 left-images">
                <img src="../assets/style/img/res02.jpg" class="img-responsive" />
              </div>
              <div class="col-md-6 col-sm-6 details-text">
                <div class="content-holder">
                  <h2>PeppuBuild</h2>
                  <p>PeppuBuild is a cloud-based 3D CADD B2B library. PeppuBuild ensures to create a high-quality engineering CADD library void of piracy. It has a competitive advantage of organising its CADD library void of piracy with a feature called VIEWFIED.</p>
                  <address>
                    <strong>Industry:</strong>
                    CADD, B2B.
                    <br />
                    <strong>Advantage:</strong>
                    VIEWFIED
                  </address>
                  <a class="btn btn-imfo btn-read-more" href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ event -->
  <!-- menu -->
  <section id="menu-list" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center marb-35">
          <h1 class="header-h">MY OFFER</h1>
          <p class="header-p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            <br />nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
        </div>

        <div class="col-md-12 text-center" id="menu-flters">
          <ul>
            <li>
              <a class="filter active" data-filter=".menu-restaurant">MONGODB</a>
            </li>
            <li>
              <a class="filter" data-filter=".breakfast" v-on:click="isHidden = true">EXPRESS.JS</a>
            </li>
            <li>
              <a class="filter" data-filter=".lunch" v-on:click="vuee = true">VUE.JS</a>
            </li>
            <li>
              <a class="filter" data-filter=".dinner" v-on:click="nodee = true">NODE.JS</a>
            </li>
          </ul>
        </div>

        <div id="menu-wrapper">
          <div class="breakfast menu-restaurant" v-if="!isHidden">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Back-end development</a>
              <span style="left: 220px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              With mongodb, a NOSQL database, backend web development has never been better!
              <br />The efficiency of storing and retrieving data with mongodb cannot be over emphasized,
              <br />Retrieving and sorting data is what mongodb does best.
            </span>
          </div>

          <div class="breakfast menu-restaurant" v-if="!isHidden">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Populate Data</a>
              <span style="left: 140px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              The feature of mongodb can be enhanced with mongoose, it is far better that way!
              <br />Mongoose schema can be populated and depopulated.
            </span>
          </div>

          <div class="breakfast menu-restaurant" v-if="!isHidden">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Data Count</a>
              <span style="left: 105px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              The possibilities of what you can do with mongodb cannot be over-emphasized
              <br />Imagine categorizing data according to the greatest on your stake?
            </span>
          </div>

          <div class="breakfast menu-restaurant" v-if="isHidden">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >CORS cross-origin</a>
              <span style="left: 182px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span
              class="menu-subtitle"
            >Express js is a dependency in Node js, this dependency Manage cors policy by installing cors</span>
          </div>

          <div class="lunch menu-restaurant" v-if="isHidden">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Dependencies</a>
              <span style="left: 132px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="lunch menu-restaurant" v-if="vuee">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Data Binding</a>
              <span style="left: 120px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span
              class="menu-subtitle"
            >With vue js data binding is easy! v-for, v-if, v-show! easy way to go.</span>
          </div>

          <div class="lunch menu-restaurant" v-if="vuee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">SPA</a>
              <span style="left: 35px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              Single page application (SPA) is easy with vue js, with vue router,
              <br />navigation between urls is easy without refreshing.
            </span>
          </div>

          <div class="lunch menu-restaurant" v-if="vuee">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Inheritance</a>
              <span style="left: 115px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              Vue js is superb with inheritance, passing data from parents even unto
              <br />grand-parents, with props and params
            </span>
          </div>

          <div class="lunch menu-restaurant" v-if="vuee">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Vuex store</a>
              <span style="left: 110px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              When it becomes impossible or tiring passing data over again from
              <br />parents to grandparents, vuex store management comes in with vuex.
              <br />state management, data is reuseable.
            </span>
          </div>

          <div class="dinner menu-restaurant" v-if="nodee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Modules</a>
              <span style="left: 80px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="dinner menu-restaurant" v-if="nodee">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              >Dependencies</a>
              <span style="left: 130px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="dinner menu-restaurant" v-if="nodee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Build</a>
              <span style="left: 49px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ menu -->
  <!-- contact -->
  <section id="contact" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="header-h">GET IN TOUCH</h1>
          <p class="header-p">
            Feel free to contact me if you have something to say!
            <br />I respond immediately.
          </p>
        </div>
      </div>
      <div class="row msg-row">
        <div class="col-md-4 col-sm-4 mr-15">
          <div class="media-2">
            <div class="media-left">
              <div class="contact-phone bg-1 text-center">
                <span class="phone-in-talk fa fa-phone"></span>
              </div>
            </div>
            <div class="media-body">
              <h4 class="dark-blue regular">Phone Numbers</h4>
              <p class="light-blue regular alt-p">
                +440 875369208 -
                <span class="contacts-sp">Phone Booking</span>
              </p>
            </div>
          </div>
          <div class="media-2">
            <div class="media-left">
              <div class="contact-email bg-14 text-center">
                <span class="hour-icon fa fa-clock-o"></span>
              </div>
            </div>
            <div class="media-body">
              <h4 class="dark-blue regular">Opening Hours</h4>
              <p class="light-blue regular alt-p">Monday to Friday 08.00am - 24:00hrs</p>
              <p class="light-blue regular alt-p">Friday and Sunday 12:00pm - 24.00hrs</p>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-sm-8">
          <form action method="post" role="form" class="contactForm">
            <div id="sendmessage">Your booking request has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <div class="col-md-6 col-sm-6 contact-form pad-form">
              <div class="form-group label-floating is-empty">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validation"></div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 contact-form">
              <div class="form-group">
                <input
                  type="date"
                  class="form-control label-floating is-empty"
                  name="date"
                  id="date"
                  placeholder="Date"
                  data-rule="required"
                  data-msg="This field is required"
                />
                <div class="validation"></div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 contact-form pad-form">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control label-floating is-empty"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div class="validation"></div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 contact-form">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control label-floating is-empty"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  data-rule="required"
                  data-msg="This field is required"
                />
                <div class="validation"></div>
              </div>
            </div>
            <div class="col-md-12 contact-form">
              <div class="form-group label-floating is-empty">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div class="validation"></div>
              </div>
            </div>
            <div class="col-md-12 btnpad">
              <div class="contacts-btn-pad">
                <button class="contacts-btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- / contact -->
  <!-- footer -->
  <footer class="footer text-center">
    <div class="footer-top">
      <div class="row">
        <div class="col-md-offset-3 col-md-12 text-center">
          <div class="widget">
            <h4 class="widget-title">UKPAI UGOCHI</h4>
            <address>
              303 Danjuma Drive, Transamadi
              <br />Rivers, Nigeria
            </address>
            <div class="social-list">
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
            <p class="copyright clear-float">© PeppuBuild. All Rights Reserved</p>
            <div class="credits">
              Designed by
              <a href="#">PeppuBuild</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</template>

<script>
export default {
  data(){
    return{
      isHidden: false,
      vuee: false,
      nodee: false
    }
  },
  methods: {}
};
</script>