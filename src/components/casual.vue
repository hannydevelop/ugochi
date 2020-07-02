<template>
<body>
  <!--banner-->
  <section id="banner">
    <div class="bg-color">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-12 text-center">
            <h1 class="logo-name">Hi Dear!</h1>
            <h2 class="logo-names">I am a FULLSTACK developer.</h2>
            <p class="win">
              <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
            </p>
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
          <h1 class="header-h">
            <i class="icon-home">ABOUT ME!</i>
          </h1>
          <p class="header-p">
            My name is Ukpai Ugochi and I'm a Fullstack Developer, i develop with MEVN stack.
            I am passionate, hard working and love to design beautiful and functional websites, you will be interested in working with me
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="about-info">
                <h2 class="heading">
                  <i class="icon-html-five"></i>WHAT I DO
                </h2>
                <p>Developing websites is my passion and main goal.I specialize in MEVN stack (Mongodb, Express.js, Vue.js, Node.js), making your website very responsive with bootstrap-vue. Once in a while, we would need to store and retrieve information to our webpage, mongodb has you covered!</p>
                <div class="details-list">
                  <ul>
                    <li>
                      <i class="icon-book"></i>I Transform Brands
                    </li>
                    <li>
                      <i class="icon-brush"></i>I Code Beautiful Websites
                    </li>
                    <li>
                      <i class="icon-meter"></i>I Code Functional And Responsive Websites
                    </li>
                    <li>
                      <i class="icon-person"></i>I Support And Manage
                    </li>
                    <li>
                      <i class="icon-heart"></i>I am Passionate
                    </li>
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
    </div>
  </section>
  <!--/about-->
  <!-- event -->
  <section id="event">
    <div class="bg-color">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 text-center" style="padding:60px;">
            <h1 class="header-h">Completed job</h1>
            <p class="header-p">Decorations 100% responsive</p>
          </div>
          <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12" style="padding-bottom:60px;">
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
                  <a class="btn btn-imfo btn-read-more" href="www.peppubuild.store">Read more</a>
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
            MEVN together is the right stack for your business website!
            <br />It is simply light weight and super-fast. The best scenerio for business brands.
          </p>
        </div>

        <div class="col-md-12 text-center" id="menu-flters">
          <ul>
            <li>
              <a class="filter active">MONGODB</a>
            </li>
            <li>
              <a
                class="filter"
                v-on:click="isHidden = true, vuee = false, nodee = false, mongo = false"
              >EXPRESS.JS</a>
            </li>
            <li>
              <a
                class="filter"
                v-on:click="vuee = true, nodee = false, isHidden = false, mongo = false"
              >VUE.JS</a>
            </li>
            <li>
              <a
                class="filter"
                v-on:click="nodee = true, vuee = false, isHidden = false, mongo = false"
              >NODE.JS</a>
            </li>
          </ul>
        </div>

        <div id="menu-wrapper">
          <div class="breakfast menu-restaurant" v-if="mongo">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-database"></i>Back-end development
              </a>
              <span style="left: 220px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              With mongodb, a NOSQL database, backend web development has never been better!
              <br />The efficiency of storing and retrieving data with mongodb cannot be over emphasized,
              <br />Retrieving and sorting data is what mongodb does best.
            </span>
          </div>

          <div class="breakfast menu-restaurant" v-if="mongo">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-data_usage"></i>Populate Data
              </a>
              <span style="left: 140px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">
              The feature of mongodb can be enhanced with mongoose, it is far better that way!
              <br />Mongoose schema can be populated and depopulated.
            </span>
          </div>

          <div class="breakfast menu-restaurant" v-if="mongo">
            <span class="clearfix">
              <a
                class="menu-title"
                href="#"
                data-meal-img="assets/img/restaurant/rib.jpg"
              ><i class="icon-code"></i>Data Count</a>
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
              ><i class="icon-infinite"></i> cross-origin</a>
              <span style="left: 182px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span
              class="menu-subtitle"
            >Express js is a dependency in Node js, this dependency Manage cors policy by installing cors</span>
          </div>

          <div class="lunch menu-restaurant" v-if="isHidden">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-hourglass_full"></i>Framework
              </a>
              <span style="left: 132px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Express js is a framework with minimal structure, it has a solid outline</span>
          </div>

          <div class="lunch menu-restaurant" v-if="vuee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-queue"></i>Data Binding
              </a>
              <span style="left: 120px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span
              class="menu-subtitle"
            >With vue js data binding is easy! v-for, v-if, v-show! easy way to go.</span>
          </div>

          <div class="lunch menu-restaurant" v-if="vuee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-page-break"></i>SPA
              </a>
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
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-pushpin"></i>Inheritance
              </a>
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
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-store_mall_directory"></i>Vuex store
              </a>
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
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-infinite"></i>Modules
              </a>
              <span style="left: 80px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Node js modules is equiped with a functional javascript library. Node is asychronous</span>
          </div>

          <div class="dinner menu-restaurant" v-if="nodee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-hourglass_empty"></i>Dependencies
              </a>
              <span style="left: 130px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Development and production dependencies can be managed and locked with package.json</span>
          </div>

          <div class="dinner menu-restaurant" v-if="nodee">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">
                <i class="icon-build"></i>Build
              </a>
              <span style="left: 49px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">MEVN</span>
            </span>
            <span class="menu-subtitle">Build environment and configuration has never been easier with Node js</span>
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
              <div class>
                <i class="icon-phone"></i>
              </div>
            </div>
            <div class="media-body">
              <h4 class="dark-blue regular">Phone Numbers</h4>
              <p class="light-blue regular alt-p">+234 801 1620 029</p>
            </div>
          </div>
          <div class="media-2">
            <div class="media-left">
              <div class>
                <span class="icon-clock"></span>
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
              <a href="mailto:peppubuild@gmail.com">
                <i class="icon-mail" aria-hidden="true"></i>
              </a>
              <a href="www.facebook.com/ugochi ukpai-ibem">
                <i class="icon-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/+2348011620029">
                <i class="icon-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
            <p class="copyright clear-float">© PeppuBuild. All Rights Reserved</p>
            <div class="credits">
              Designed by
              <a href="www.peppubuild.store">PeppuBuild</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      isHidden: false,
      vuee: false,
      nodee: false,
      mongo: true,
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "......Nigeria based web designer......",
        "Coding is fun!",
        "Coding is life!",
        "Javascript is lovely with vue js."
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>
