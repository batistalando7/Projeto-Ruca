function PricingPlans() {
  return (
    <>
      {/* ***** Section Title Start ***** */}
      <div className="row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h2 className="section-title">Nossos Planos</h2>
          </div>
        </div>
        <div className="offset-lg-3 col-lg-6">
          <div className="center-text">
            <p>
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna
              quis arcu elementum, quis congue risus volutpat.
            </p>
          </div>
        </div>
      </div>
      {/* ***** Section Title End ***** */}

      <div className="row">
        {/* ***** Pricing Item Start ***** */}
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
        >
          <div className="pricing-item">
            <div className="pricing-header">
              <h3 className="pricing-title">BASIC PLAN</h3>
            </div>
            <div className="pricing-body">
              <div className="price-wrapper">
                <span className="currency">$</span>
                <span className="price">13.90</span>
                <span className="period">/Month</span>
              </div>
              <ul className="list">
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">5 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li>Data Security and Backupss</li>
                <li>1 GB Storage</li>
                <li>24x7 Great Support</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a href="#">Select Plan</a>
            </div>
          </div>
        </div>
        {/* ***** Pricing Item End ***** */}

        {/* ***** Pricing Item Start ***** */}
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
        >
          <div className="pricing-item active">
            <div className="pricing-header">
              <h3 className="pricing-title">ADVANCED PLAN</h3>
            </div>
            <div className="pricing-body">
              <div className="price-wrapper">
                <span className="currency">$</span>
                <span className="price">23.90</span>
                <span className="period">/Month</span>
              </div>
              <ul className="list">
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">15 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">Data Security and Backupss</li>
                <li className="active">1 GB Storage</li>
                <li>24x7 Great Support</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a href="#">Select Plan</a>
            </div>
          </div>
        </div>
        {/* ***** Pricing Item End ***** */}

        {/* ***** Pricing Item Start ***** */}
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
        >
          <div className="pricing-item">
            <div className="pricing-header">
              <h3 className="pricing-title">EXPERT PLAN</h3>
            </div>
            <div className="pricing-body">
              <div className="price-wrapper">
                <span className="currency">$</span>
                <span className="price">33.90</span>
                <span className="period">/Month</span>
              </div>
              <ul className="list">
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">15 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">Data Security and Backupss</li>
                <li className="active">1 GB Storage</li>
                <li className="active">24x7 Great Support</li>
                <li className="active">Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a href="#">Select Plan</a>
            </div>
          </div>
        </div>
        {/* ***** Pricing Item End ***** */}
      </div>
    </>
  );
}

export default PricingPlans;
