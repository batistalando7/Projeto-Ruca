function AsideMenu() {
  return (
    <>
      {/* ***** Aside Start ***** */}
      <div className="col-lg-4 col-md-12 col-sm-12">
        <aside className="default-aside">
          <div className="sidebar">
            <div className="search-widget">
              <div className="search">
                <form>
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <ul>
              <li>
                <a href="#">
                  Cloud PMS <span>23</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Desktop PMS <span>12</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Hotel Software <span>153</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Social Media <span>9</span>
                </a>
              </li>
              <li>
                <a href="#">
                  General <span>95</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Marketing <span>32</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Mobile Future <span>76</span>
                </a>
              </li>
            </ul>

            <div className="widget-tags">
              <a href="#">Team</a>
              <a href="#">Hotel</a>
              <a href="#">Android</a>
              <a href="#">App</a>
              <a href="#">Software</a>
              <a href="#">Development</a>
              <a href="#">API</a>
              <a href="#">Store</a>
              <a href="#">Reservation</a>
              <a href="#">Analytics</a>
              <a href="#">Support</a>
              <a href="#">Coding</a>
              <a href="#">Database</a>
            </div>
          </div>
        </aside>
      </div>
      {/* ***** Aside End ***** */}
    </>
  );
}

export default AsideMenu;
