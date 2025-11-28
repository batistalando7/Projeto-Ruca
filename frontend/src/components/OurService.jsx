function OurService() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
          <div className="left-heading">
            <h2 className="section-title">Nossos Serviços</h2>
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
                  <span>Gestão de Combustível</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Fidelidade</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Pagamentos Automáticos</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Assistência na Estrada</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Seguro Integrado</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Parcerias Comerciais</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Recargas Móveis</span>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a className="btn-home" href="javascript:void(0);">
                  <i className="fa fa-angle-right"></i>
                  <span>Pagamentos Internacionais</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div
          className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
          data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
        >
          <img
            src="src/assets/images/photos/features/green-1.png"
            className="img-fluid d-block mx-auto"
            alt="App"
          />
        </div>
      </div>
    </>
  );
}

export default OurService;
