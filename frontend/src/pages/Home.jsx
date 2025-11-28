import image from "../assets/images/photos/header.jpg";
import OurService from "../components/OurService";
import OurTeam from "../components/OurTeam";
import PricingPlans from "../components/PricingPlans";

function Home() {
  return (
    <>
      {/* ***** Welcome Area Start ***** */}
      <div className="welcome-area" id="welcome">
        {/* ***** Header Background Image Start ***** */}
        <div className="right-bg">
          <img src={image} className="img-fluid float-right" alt="" />
        </div>
        {/* ***** Header Background Image End ***** */}

        <div className="header-bg">
          <img
            src="src/assets/images/header-bg.svg"
            className="img-fluid"
            alt=""
          />
        </div>

        {/* ***** Header Text Start ***** */}
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h1>
                  Simplifique os seus gastos com combustível e poupe!{" "}
                  {/* <span>Solutions</span> */}
                </h1>
                <p>
                  Cadastre-se agora e descubra uma nova forma de pagar, com
                  descontos exclusivos e promoções imperdíveis. Monitore seu
                  consumo de forma intuitiva e tenha controle total dos seus
                  custos.
                </p>
                <a href="#" className="btn-primary-line">
                  SAIBA MAIS
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Header Text End ***** */}

        {/* ***** Play Button Start ***** */}
        <div className="play-button-wrapper">
          <a href="javacsript:void(0);" className="btn-play">
            <i className="fa fa-play"></i>
          </a>
        </div>
        {/* ***** Play Button End ***** */}
      </div>
      {/* ***** Welcome Area End ***** */}

      {/* ***** Features Small Start ***** */}
      <section className="section features-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* ***** Features Small Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <a href="/payment" className="features-small-item">
                    <div className="icon">
                      <i className="fa fa-dollar"></i>
                    </div>
                    <h5 className="features-title">Pagamentos</h5>
                    <p>Compre combustível, com descontos. Recargas móveis.</p>
                    <div className="next">
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </a>
                </div>
                {/* ***** Features Small Item End ***** */}

                {/* ***** Features Small Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <a href="/service" className="features-small-item">
                    <div className="icon">
                      <i className="fa fa-credit-card"></i>
                    </div>
                    <h5 className="features-title">Serviços</h5>
                    <p>Descontos com restaurantes, hotéis e lojas parceiras.</p>
                    <div className="next">
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </a>
                </div>
                {/* ***** Features Small Item End ***** */}

                {/* ***** Features Small Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <a
                    href="/roadside-assistance"
                    className="features-small-item"
                  >
                    <div className="icon">
                      <i className="fa fa-truck"></i>
                    </div>
                    <h5 className="features-title">Assistência na Estrada</h5>
                    <p>
                      Serviços de emergência como reboque e mecânica (Seguro
                      integrado).
                    </p>
                    <div className="next">
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </a>
                </div>
                {/* ***** Features Small Item End ***** */}

                {/* ***** Features Small Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <a href="/fuel-management" className="features-small-item">
                    <div className="icon">
                      <i className="fa fa-server"></i>
                    </div>
                    <h5 className="features-title">Gestão de Combustível</h5>
                    <p>
                      O usuário monitora o consumo de combustível do veículo.
                    </p>
                    <div className="next">
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </a>
                </div>
                {/* ***** Features Small Item End ***** */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Features Small End ***** */}

      {/* ***** Features Big Item Start ***** */}
      <section className="section padding-bottom-80 colored" id="features">
        <div className="container">
          <OurService />
        </div>
      </section>
      {/* ***** Features Big Item End ***** */}

      {/* ***** Features Big Item Start ***** */}
      {/* <section className="section padding-bottom-80">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="src/assets/images/photos/features/green-2.png"
                className="img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div className="left-heading">
                <h2 className="section-title">Design & Development</h2>
              </div>
              <div className="left-text">
                <p>
                  Phasellus vitae velit sit amet diam semper commodo quis quis
                  libero. Morbi consequat arcu augue, molestie faucibus metus
                  ullamcorper vel.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home active" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>Web Design</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>Mobile App Design</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>Android Development</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>iOS Development</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>Back-End</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>Front-End</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>e-Commerce</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a className="btn-home" href="javascript:void(0);">
                      <i className="fa fa-angle-right"></i>
                      <span>Print Design</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ***** Features Big Item End ***** */}

      {/* ***** Counter Parallax Start ***** */}
      <div className="parallax-counter" id="counter">
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>96</strong>
                  <span>
                    Project
                    <br />
                    Complate
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>190</strong>
                  <span>
                    Happy
                    <br />
                    Customer
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>12</strong>
                  <span>
                    Experienced
                    <br />
                    Staff
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>46</strong>
                  <span>
                    Ongoing
                    <br />
                    Project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Counter Parallax End ***** */}

      {/* ***** Team Start ***** */}
      <section className="section padding-bottom-90" id="our-team">
        <div className="container">
          <OurTeam />
        </div>
      </section>
      {/* ***** Team End ***** */}

      {/* ***** Pricing Plans Start ***** */}
      <section className="section colored padding-bottom-90" id="pricing-plans">
        <div className="container">
          <PricingPlans />
        </div>
      </section>
      {/* ***** Pricing Plans End ***** */}

      {/* ***** Parallax Start ***** */}
      <div className="parallax" id="parallax-text">
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="info">
                  <p>
                    Nosso serviços integrados e <span>parceirias</span> para
                    expandir o seu negócio.
                  </p>
                  <a className="btn-white-line" href="/contact">
                    Contacte-Nos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Parallax End ***** */}

      {/* ***** Blog Start ***** */}
      <section className="section white padding-bottom-90" id="blog">
        <div className="container">
          {/* ***** Section Title Start ***** */}
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Novidades do nosso blog</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                </p>
              </div>
            </div>
          </div>
          {/* ***** Section Title End ***** */}

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src="src/assets/images/photos/blog/1.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="green-blog-single.html">
                      Alya Expands the Leadership Team with David Lin,
                      Controller
                    </a>
                  </h3>
                  <div className="text">
                    Mauris tellus sem, ultrices varius nisl at, convallis
                    iaculis mauris. Sed eget sem vitae purus tempus dignissim.
                  </div>
                  <a href="green-blog-single.html" className="btn-primary-line">
                    Ver Mais
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src="src/assets/images/photos/blog/2.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="green-blog-single.html">
                      Alya Partners with Velocloud to Deliver Managed SD-WAN
                    </a>
                  </h3>
                  <div className="text">
                    Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                    Interdum et malesuada fames ac ante ipsum.
                  </div>
                  <a href="green-blog-single.html" className="btn-primary-line">
                    Ver Mais
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-thumb">
                <div className="img">
                  <img src="src/assets/images/photos/blog/3.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <h3>
                    <a href="green-blog-single.html">
                      Corporate IT Solutions Adds Neva as Senior Account
                      Executive
                    </a>
                  </h3>
                  <div className="text">
                    Quisque euismod nec lacus sit amet maximus. Ut convallis
                    sagittis lorem auctor malesuada. Morbi auctor tortor eu.
                  </div>
                  <a href="green-blog-single.html" className="btn-primary-line">
                    Ver Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Blog End ***** */}

      {/* ***** Footer Start ***** */}
      {/* <Footer /> */}
      {/* ***** Footer End ***** */}
    </>
  );
}

export default Home;
