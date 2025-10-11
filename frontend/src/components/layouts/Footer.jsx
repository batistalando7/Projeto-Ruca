function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <img src="src/assets/images/logo.png" height={100} className="logo" alt="" />
            <div className="text">
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
              laoreet ullamcorper phasellus semper.
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <h5>Links Úteis</h5>
            <ul className="footer-nav">
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Sobre-Nós</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>FAQ’s</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <h5>Suporte</h5>
            <ul className="footer-nav">
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Termos de Uso</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Central de Apoio</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  <span>Contacos</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h5>Nossos Contactos</h5>
            <div className="address">
              <p>
                455 West Orchard Street
                <br />
                Kings Mountain, NC 28086
              </p>
              <p>Phone: (272) 211-7370</p>
              <p>
                <span>E-Mail:</span>
                <a href="#">atentimento@lamtec.com</a>
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright">© 2025 LAMTEC. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
