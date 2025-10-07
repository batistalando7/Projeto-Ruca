function Contact(){
    return(
        <>
            <section className="page">
		{/* ***** Page Top Start ***** */}
		<div className="cover" data-image="src/assets/images/photos/parallax-counter.jpg">
			<div className="page-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Contactos</h1>
						</div>
						<div className="col-lg-12">
							<ol className="breadcrumb">
								<li><a href="green-index.html">Inicio</a></li>
								<li className="active">Contactos</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* ***** Page Top End ***** */}


		{/* ***** Page Content Start ***** */}
		<div className="page-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact">
							<div className="map-wrapper">
								{/* ***** Google Maps Start ***** */}
								<div className="map-canvas"
									data-zoom="12"
									data-lat="-37.811085"
									data-lng="144.955631"
									data-type="roadmap"
									data-hue="#ffc400"
									data-title="Alya"
									data-icon-path="src/assets/images/marker-green.png"
									data-content="455 West Orchard Street<br/>Kings Mountain, NC 28086<br/><br/><a href='mailto:support@yourbrand.com'>mailto:support@yourbrand.com</a>">
								</div>
								{/* ***** Google Maps End ***** */}
							</div>
							<div className="contact-info">
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="item">
											<i className="fa fa-location-arrow"></i>
											<div className="txt">
												<span>455 West Orchard Street<br/>Kings Mountain, NC 28086</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="item">
											<i className="fa fa-phone"></i>
											<div className="txt">
												<span>(272) 211-7370<br/>(524) 386-5730</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="item">
											<i className="fa fa-envelope"></i>
											<div className="txt">
												<span><a href="mailto:info@yourbrand.com">info@yourbrand.com</a></span>
											</div>
										</div>
										<div className="item">
											<i className="fa fa-envelope"></i>
											<div className="txt">
												<span><a href="mailto:support@yourbrand.com">support@yourbrand.com</a></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="contact-bottom">
							<div className="row">
								{/* ***** Contact Text Start ***** */}
								<div className="col-lg-4 col-md-6 col-sm-12">
									<h5 className="margin-bottom-30">Get in touch</h5>
									<div className="contact-text">
										<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra dictum. </p>
										<p>Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue, eget commodo magna lobortis.</p>
									</div>
								</div>
								{/* ***** Contact Text End ***** */}

								{/* ***** Contact Form Start ***** */}
								<div className="col-lg-8 col-md-6 col-sm-12">
									<div className="contact-form">
										<div className="row">
											<div className="col-lg-6 col-md-12 col-sm-12">
												<input type="text" placeholder="Name, surname"/>
											</div>
											<div className="col-lg-6 col-md-12 col-sm-12">
												<input type="text" placeholder="E-Mail"/>
											</div>
											<div className="col-lg-12">
												<textarea placeholder="Your message"></textarea>
											</div>
											<div className="col-lg-12">
												<button className="btn-primary-line pull-right">SEND</button>
											</div>
										</div>
									</div>
								</div>
								{/* ***** Contact Form End ***** */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* ***** Page Content End ***** */}

	</section>
        </>
    )
}

export default Contact;