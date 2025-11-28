import payment from "../assets/images/photos/payment/payment1.jpeg";
import AsideMenu from "../components/AsideMenu";
import FomrPayment from "../forms/formPayment";

function Payment() {
  return (
    <>
      <section className="page">
        {/* ***** Page Top Start ***** */}
        <div
          className="cover"
          data-image="assets/images/photos/parallax-counter.jpg"
        >
          <div className="page-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Pagamento de Combustível</h1>
                </div>
                <div className="col-lg-12">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/#welcome">Inicio</a>
                    </li>
                    <li className="active">Pagamento de Combustível</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Page Top End ***** */}

        {/* ***** Page Content Start ***** */}
        <div className="page-bottom padding-bottom-80">
          <div className="container">
            <div className="row">
              {/* ***** Page Content Start ***** */}
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="blog-list">
                  <div className="row">
                    {/* ***** Blog Post Start ***** */}
                    <div className="col-lg-12">
                      <div className="blog-post-thumb big">
                        {/* ***** Post Top Start ***** */}
                        <div className="img">
                          <img src={payment} alt="" />
                          <div className="date">
                            <strong>APR</strong>
                            <span>09</span>
                          </div>
                        </div>
                        {/* ***** Post Top End ***** */}

                        {/* ***** Post Content Start ***** */}
                        <div className="text post-detail">
                          <p>
                            Page o seu combustivel com apenas alguns click no
                            seu celular, em qualquer posto de combustível e
                            aproveita os descontos mais.
                          </p>
                        </div>
                        {/* ***** Post Content End ***** */}
                      </div>
                    </div>
                    {/* ***** Blog Post End ***** */}

                    {/* ***** Comment Form Start ***** */}
                    <div className="col-lg-12">
                      <div className="post-comment">
                        <h5 className="margin-bottom-30">Pagagamentos</h5>
                        <div className="comment-form">
                          <FomrPayment />
                        </div>
                      </div>
                    </div>
                    {/* ***** Comment Form End ***** */}
                  </div>
                </div>
              </div>
              {/* ***** Page Content End ***** */}

              {/* AsideMenu start */}
              <AsideMenu />
              {/* AsideMenu End */}
            </div>
          </div>
        </div>
        {/* ***** Page Content End ***** */}
      </section>
    </>
  );
}

export default Payment;
