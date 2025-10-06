function Header() {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/*  ***** Logo Start ***** */}
                            <a href="green-index.html" className="logo">
                                <img src="assets/images/logo-green.png" alt="Alya" />
                            </a>
                            {/*  ***** Logo End ***** */}


                            {/*  ***** Menu Start ***** */}
                            <ul className="nav">
                                <li><a href="green-index.html#welcome">Home</a></li>
                                <li className="submenu">
                                    <a href="javascript:;">Discover</a>
                                    <ul>
                                        <li><a href="green-index.html#features">Features</a></li>
                                        <li><a href="green-index.html#our-team">Our Team</a></li>
                                        <li><a href="green-index.html#pricing-plans">Pricing Plans</a></li>
                                        <li><a href="green-index.html#blog">Latests Blogs</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:;">Pages</a>
                                    <ul>
                                        <li><a href="green-about.html">About Us</a></li>
                                        <li><a href="green-features.html">Features</a></li>
                                        <li><a href="green-faq.html">FAQ's</a></li>
                                        <li><a href="green-blog.html">Blog</a></li>
                                    </ul>
                                </li>
                                <li><a href="green-contact.html">Contact</a></li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/*  ***** Menu End ***** */}

                            {/*  ***** Header Buttons Start ***** */}
                            <ul className="header-buttons">
                                <li><a className="btn-nav-line" href="green-features.html">Apps</a></li>
                                <li><a className="btn-nav-primary" href="green-contact.html">Support</a></li>
                            </ul>
                            {/*  ***** Header Buttons End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;