import teamImg from "../assets/images/photos/team/1.jpg";
import teamImg2 from "../assets/images/photos/team/2.jpg";
import teamImg3 from "../assets/images/photos/team/3.jpg";

function OurTeam() {
  return (
    <>
      {/* ***** Section Title Start ***** */}
      <div className="row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h2 className="section-title">Nossa Equipe</h2>
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
        {/* ***** Team Item Start ***** */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="team-item">
            <div className="team-content">
              <p>
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
              <div className="user-image">
                <img src={teamImg} alt="" />
              </div>
              <div className="team-info">
                <h3 className="user-name">Ancelmo Gomes</h3>
                <span>CEO</span>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Team Item End ***** */}

        {/* ***** Team Item Start ***** */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="team-item">
            <div className="team-content">
              <p>
                Aliquam eget convallis nunc, et porta libero. Etiam velit,
                lobortis ut tristique.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
              <div className="user-image">
                <img src={teamImg2} alt="" />
              </div>
              <div className="team-info">
                <h3 className="user-name">Sofia</h3>
                <span>Gestão e Finaças</span>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Team Item End ***** */}

        {/* ***** Team Item Start ***** */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="team-item">
            <div className="team-content">
              <p>
                Curabitur tristique nec orci quis porta. Aliquam leo justo,
                auctor eget sapien.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
              <div className="user-image">
                <img src={teamImg3} alt="" />
              </div>
              <div className="team-info">
                <h3 className="user-name">Baptista Miguel</h3>
                <span>Desenvolvedor Fullstack</span>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Team Item End ***** */}

        {/* ***** Team Item Start ***** */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="team-item">
            <div className="team-content">
              <p>
                Nunc posuere lectus ut aliquet facilisis. Nam varius id magna et
                convallis.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
              <div className="user-image">
                <img src="src/assets/images/photos/team/4.jpg" alt="" />
              </div>
              <div className="team-info">
                <h3 className="user-name">Ruffino</h3>
                <span>Designer Gráfico</span>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Team Item End ***** */}
      </div>
    </>
  );
}

export default OurTeam;
