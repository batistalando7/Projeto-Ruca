import OurTeam from "../components/OurTeam";

function About(){
    return(
       <>
         <section className="page">
		{/* ***** Page Top Start ***** */}
		<div className="cover" data-image="src/assets/images/photos/parallax-counter.jpg">
			<div className="page-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Sobre-Nós</h1>
						</div>
						<div className="col-lg-12">
							<ol className="breadcrumb">
								<li><a href="green-index.html">Home</a></li>
								<li className="active">Sobre-Nós</li>
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
						<div className="about">
							<div className="row">
								<div className="offset-lg-2 col-lg-8">
									<h2>Ruca, projeto do grupo LAMTEC</h2>
									<p>LAMTEC é uma empresa que atua no mercado angolano desde 2024, trazendo soluções tecnologicas a problemas concretos da sociedade Angolana.</p>
								</div>
								<div className="col-lg-10 offset-lg-1 position-relative">
									<div className="about-image">
										<div className="img-1">
											<img src="src/assets/images/photos/about/1.jpg" className="img-fluid" alt=""/>
										</div>
										<div className="img-2">
											<img src="src/assets/images/photos/about/2.jpg" className="img-fluid" alt=""/>
										</div>
									</div>
								</div>
								<div className="offset-lg-2 col-lg-8">
									<p>Mauris vitae facilisis tortor. Nam venenatis nisi et arcu facilisis blandit. Ut congue libero nec augue vulputate maximus. Praesent blandit imperdiet felis ut dapibus. Mauris elementum pretium tellus, non pellentesque dui dignissim non. </p>
									<h5>Eric Widget</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			{/* ***** Parallax Start ***** */}
			<div className="parallax margin-bottom-100" id="parallax-text">
				<div className="parallax-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="info">
									<p>We design and develop <span>web apps</span> that delight your users and grow your business.</p>
									<a className="btn-white-line" href="/contact">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ***** Parallax End ***** */}

			<div className="container">
				<OurTeam />
			</div>

		</div>
		{/* ***** Page Content End ***** */}

	</section>

       </>
       
    )
}

export default About;