import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {

  const [horoscopes, setHoroscopes] = useState([]);


  useEffect(() => {

    const fetchHoroscopes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/horoscopes');
        setHoroscopes(response.data);
      } catch (error) {
        console.error("Burç verileri çekilirken bir hata oluştu!", error);
      }
    };

    fetchHoroscopes();
  }, []);


  return (

    <>

      <div className="header_absolute ">
        {/*topline section visible only on small screens|*/}
        <section className="page_topline ds s-py-30 ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-4 col-md-4 text-lg-left text-center">
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="img" />
                  <span className="logo-text color-darkgrey">magic shop</span>
                </a>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-8 some-links text-center text-lg-right d-flex justify-content-center justify-content-md-end align-items-center mt-2 mt-md-0">
                <a
                  className="fs-24 links-maincolor-hover font-2"
                  href="tel:+88003532455"
                >
                  <mark>+90-544 </mark> 660-15-26
                </a>
                <a
                  href="#"
                  className="btn btn-outline-maincolor btn-medium  d-none d-md-block"
                >
                  Book Reading Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*eof topline*/}
        {/* header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc */}
        <header className="page_header ds ms s-overlay justify-nav-start">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-1 order-2 order-xl-1">
                <div className="nav-wrap">
                  {/* main nav start */}
                  <nav className="top-nav">
                    <ul className="nav sf-menu">
                      <li>
                        <Link to="/home">Home</Link>

                      </li>
                      {/* blog */}
                      <li>
                        <a href="blog-right.html">Blog</a>
                        <ul>
                          {horoscopes.map((item) => (
                            <li key={item.id}>
                              <a className={item.ico} href="blog-right.html"> {item.name}</a>
                            </li>
                          ))}

                        </ul>
                      </li>
                      {/* eof blog */}
                      <li>
                        <Link to="/about">About</Link>

                      </li>
                      {/* eof features */}
                      <li>
                        <a href="about.html">Cart</a>

                      </li>

                      <li>
                        <a href="gallery-image.html">Shop</a>
                        <ul>

                          <li>
                            <a href="gallery-image.html">Services</a>
                          </li>

                          <li>
                            <a href="gallery-title.html">Products</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/contact">Contact</Link>

                      </li>

                    </ul>
                  </nav>

                </div>
              </div>
              <div className="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
                <span className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                    className="fa fa-facebook "
                    title="facebook"
                  />
                  <a
                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                    className="fa fa-twitter "
                    title="twitter"
                  />
                  <a
                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                    className="fa fa-linkedin "
                    title="linkedin"
                  />
                  <a
                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                    className="fa fa-instagram "
                    title="instagram"
                  />
                  <a
                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                    className="fa fa-youtube-play "
                    title="youtube"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* header toggler */}
          <span className="toggle_menu">
            <span />
          </span>
        </header>
      </div>


    </>

  );
}

export default Header;