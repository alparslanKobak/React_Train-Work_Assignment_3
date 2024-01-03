function Footer() {
    return (<>

        <>
            <footer className="page_footer ds ms s-py-90 s-pb-lg-60 s-pt-xl-150 s-pb-xl-120">
                <div className="container">
                    <div className="row align-center">
                        <div
                            className="col-xl-5 col-lg-5 text-center text-lg-left animate"
                            data-animation="fadeInUp"
                        >
                            <a href="index.html" className="logo">
                                <img src="assets/images/logo.png" alt="img" />
                                <span className="logo-text color-darkgrey">magic shop</span>
                            </a>
                            <div className="divider-60 divider-lg-0" />
                        </div>
                        <div
                            className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate"
                            data-animation="fadeInUp"
                        >
                            <div className="widget widget_nav_menu">
                                <h3>Services</h3>
                                <ul className="menu">
                                    <li className="menu-item">
                                        <a href="shop-left.html">Shop</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="services2.html">Services</a>
                                    </li>
                              
                                </ul>
                            </div>
                            <div className="divider-60 divider-lg-0" />
                        </div>
                        <div
                            className="col-xl-2 col-lg-2 align-self-start text-center text-lg-left animate"
                            data-animation="fadeInUp"
                        >
                            <div className="widget widget_nav_menu">
                                <h3>About Me</h3>
                                <ul className="menu">
                                    <li className="menu-item">
                                        <a href="about.html">About</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="divider-60 divider-lg-0" />
                        </div>
                        <div
                            className="col-xl-3 col-lg-3 align-self-start text-center text-lg-left animate"
                            data-animation="fadeInUp"
                        >
                            <div className="widget widget_text">
                                <h3>Contact Info</h3>
                                <p>
                                    Caferağa Street 32/16 <br />
                                    Kadıköy / İstanbul
                                </p>
                                <p className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                        className="fa fa-facebook"
                                        title="facebook"
                                    />
                                    <a
                                        href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                        className="fa fa-twitter"
                                        title="twitter"
                                    />
                                    <a
                                        href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                        className="fa fa-instagram"
                                        title="instagram"
                                    />
                                    <a
                                        href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                        className="fa fa-linkedin"
                                        title="linkedin"
                                    />
                                    <a
                                        href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                        className="fa fa-youtube-play"
                                        title="youtube"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
            <section className="page_copyright ds ms s-py-25 s-bordertop-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <p>
                                © Copyright <span className="copyright_year">2024</span> All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>


    </>);
}

export default Footer;