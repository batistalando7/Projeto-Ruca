function WelcomeArea() {
    return (
        <>
            {/* ***** Welcome Area Start ***** */}
            <div className="welcome-area" id="welcome">
                {/* ***** Header Background Image Start *****  */}
                <div className="right-bg">
                    <img src="assets/images/photos/header.jpg" className="img-fluid float-right" alt=""/>
                </div>
                {/* ***** Header Background Image End ***** */}

                <div className="header-bg">
                    <img src="assets/images/header-bg.svg" className="img-fluid" alt=""/>
                </div>

                {/* ***** Header Text Start ***** */}
                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <h1>Industry Leading Managed Services and Staffing <span>Solutions</span></h1>
                                <p>Proven methods to capture business priorities and goals as well as current pain points that enables measurable business outcomes.</p>
                                <a href="#" className="btn-primary-line">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Header Text End ***** */}

                {/* ***** Play Button Start ***** */}
                <div className="play-button-wrapper">
                    <a href="https://www.youtube.com/watch?v=dPZTh2NKTm4" className="btn-play">
                        <i className="fa fa-play"></i>
                    </a>
                </div>
                {/* ***** Play Button End ***** */}
            </div>
            {/* ***** Welcome Area End ***** */}
        </>
    );
}

export default WelcomeArea;