function Home() {
    return (

        <>

            <section className="ds section-home s-py-90 s-pb-lg-80 s-pt-xl-150 s-pb-xl-140">
                <div className="container">
                    <div className="divider-50 divider-xl-65" />
                    <div className="row align-center">
                        <div className="col-lg-6 col-xl-5 order-lg-1 order-2 text-center text-md-left">
                            <div className="divider-60 divider-lg-0" />
                            <h5 className="special-heading bold mb-2 text-white">
                                <span>Sun Signs</span>
                            </h5>
                            <p>
                                There are 12 signs of the zodiac, each one taking up 30 degrees in
                                your birth chart, manking a complete 360 degree circle
                            </p>
                            <div className="divider-35 divider-xl-55" />
                            <div className="line line-left" />
                            <div className="divider-40 divider-xl-60" />
                            <h3 className="special-heading fw-500 mb-2 color-main2 big-size">
                                <span>Ultimate Guide</span>
                            </h3>
                            <h3 className="special-heading fw-500 text-white fs-50">
                                <span>To Astrology</span>
                            </h3>
                            <div className="divider-35 divider-xl-65" />
                            <a href="about.html" className="btn btn-maincolor">
                                Let’s Begin
                            </a>
                        </div>
                        <div className="col-lg-6 col-xl-7 order-lg-2 order-1 text-center text-lg-right">
                            <img className="horoscope-image" src="assets/images/horoscope.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>



            <section id="about" className="ds s-py-90 s-py-xl-150 c-gutter-50">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <img src="assets/images/about-img.png" alt="img" />
                        </div>
                        <div className="col-lg-6 text-center text-md-left">
                            <div className="divider-60 divider-lg-0 " />
                            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                <span>About Us</span>
                            </p>
                            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                <span>We Are Welcome</span>
                            </h3>
                            <div className="divider-35" />
                            <p>
                                We have the World Famous Astrologers on the Best Astrology Website in
                                India, practising both Indian Astrology and Western Astrology for
                                astrology today.
                            </p>
                            <p>
                                They will provide the best free horoscope astrology to you by
                                analysing your birth chart and your astrology sign.
                            </p>
                            <div className="shortcode-simple-counter counter-layout-2">
                                <div className="counter_wrap justify-content-md-start">
                                    <div className="counter-wrap">
                                        <h2
                                            className="counter counter-size"
                                            data-from={0}
                                            data-to={25}
                                            data-speed={1000}
                                        >
                                            25
                                        </h2>
                                    </div>
                                    <p className="counter-text ">
                                        <span className="counter-add">
                                            Years Of
                                            <br />
                                            <span className="color-dark fw-500">Experience</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="divider-30 divider-xl-50" />
                            <a href="pricing.html" className="btn btn-outline-maincolor btn-medium">
                                Book Reading Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <section id="forecasts"
                className="ds section-forecast s-overlay s-pt-90 s-pb-30 s-pt-xl-150 s-pb-xl-90 c-gutter-60 c-mb-60"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-0">
                            <h3 className="text-center mt-0 mb-2 special-heading fs-60 color-main">
                                <span>Choose Your Zodiac Sign</span>
                            </h3>
                            <div className="line" />
                            <p className="text-center fs-20 mt-4">
                                <span>
                                    What’s Your Sign? Read Your Daily <br />
                                    Horoscope Today
                                </span>
                            </p>
                            <div className="divider-40 divider-xl-60" />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_aries"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Aries</a>
                                    </h5>
                                    <p>Mar 21 - Apr 19</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_taurus"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Taurus</a>
                                    </h5>
                                    <p>Apr 20 - May 20</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_gemini"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Gemini</a>
                                    </h5>
                                    <p>May 21 - Jun 20</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_cancer"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Cancer</a>
                                    </h5>
                                    <p>Jun 21 - Jul 22</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_leo"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Leo</a>
                                    </h5>
                                    <p>Jul 23 - Aug 22</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_virgo"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Virgo</a>
                                    </h5>
                                    <p>Aug 23 - Sep 22</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_libra"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Libra</a>
                                    </h5>
                                    <p>Sep 23 - Oct 22</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_scorpio"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Scorpio</a>
                                    </h5>
                                    <p>Oct 23 - Nov 21</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_sagittarius"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Sagittarius</a>
                                    </h5>
                                    <p>Nov 22 - Dec 21</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_capricornius"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Capricornius</a>
                                    </h5>
                                    <p>Dec 22 - Jan 19</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_aquarius"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Aquarius</a>
                                    </h5>
                                    <p>Jan 20 - Feb 18</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="vertical-item text-center  content-padding corner-box">
                                <div className="item-content">
                                    <div className="icon-styled fs-50">
                                        <a
                                            href="forecast-page.html"
                                            className="color-darkgrey ico ico-icon_pisces"
                                        />
                                    </div>
                                    <h5 className="mt-4 mt-lg-5 fs-20 links-maincolor2">
                                        <a href="forecast-page.html">Pisces</a>
                                    </h5>
                                    <p>Feb 19 - Mar 20</p>
                                </div>
                            </div>
                        </div>
                        {/* .col-* */}
                    </div>
                </div>
            </section>



            <section id="services"
                className="ds section-service s-overlay mobile-overlay s-py-90 s-py-xl-150 container-px-xl-0"
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5" />
                        <div className="col-xl-3 col-lg-6">
                            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                <span>Services</span>
                            </p>
                            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                <span>
                                    Let’s Make <br />
                                    Some Magic
                                </span>
                            </h3>
                        </div>
                        <div className="col-xl-3 col-lg-6 text-center text-md-left">
                            <p className="text-center text-md-left  mt-4 mt-lg-0">
                                <span>
                                    They will provide the best free horoscope <br />
                                    astrology to you by analysing your sign.
                                </span>
                            </p>
                            <div className="divider-35" />
                            <a href="contact.html" className="btn btn-outline-maincolor btn-medium">
                                Book Reading Now
                            </a>
                        </div>
                        <div className="col-xl-1" />
                        <div className="col-xl-3" />
                        <div className="col-xl-9">
                            <div className="big-width">
                                <div className="divider-55" />
                                <div
                                    className="owl-carousel "
                                    data-responsive-lg={4}
                                    data-responsive-md={3}
                                    data-responsive-sm={2}
                                    data-responsive-xs={1}
                                    data-nav="false"
                                    data-margin={30}
                                    data-loop="true"
                                    data-autoplay="true"
                                >
                                    <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                        <div className="item-media">
                                            <img src="assets/images/services/img_8.jpg" alt="img" />
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="service-single.html" />
                                            </div>
                                        </div>
                                        <div className="item-content overflow-hidden">
                                            <div className="d-flex align-center flex-wrap">
                                                <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                    <a href="service-single.html">Natal Chart</a>
                                                </h5>
                                                <a href="service-single.html" className="font-2">
                                                    Read Now <i className="fa fa-caret-right color-main ml-2" />
                                                </a>
                                            </div>
                                            <p>Integer sagittis nisi nec tortor fermentum aliquet.</p>
                                        </div>
                                    </div>
                                    <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                        <div className="item-media">
                                            <img src="assets/images/services/img_9.jpg" alt="img" />
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="service-single.html" />
                                            </div>
                                        </div>
                                        <div className="item-content overflow-hidden">
                                            <div className="d-flex align-center flex-wrap">
                                                <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                    <a href="service-single.html">Transit Chart</a>
                                                </h5>
                                                <a href="service-single.html" className="font-2">
                                                    Read Now <i className="fa fa-caret-right color-main ml-2" />
                                                </a>
                                            </div>
                                            <p>Integer sagittis nisi nec tortor fermentum aliquet.</p>
                                        </div>
                                    </div>
                                    <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                        <div className="item-media">
                                            <img src="assets/images/services/img_10.jpg" alt="img" />
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="service-single.html" />
                                            </div>
                                        </div>
                                        <div className="item-content overflow-hidden">
                                            <div className="d-flex align-center flex-wrap">
                                                <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                    <a href="service-single.html">Birth Stone</a>
                                                </h5>
                                                <a href="service-single.html" className="font-2">
                                                    Read Now <i className="fa fa-caret-right color-main ml-2" />
                                                </a>
                                            </div>
                                            <p>Integer sagittis nisi nec tortor fermentum aliquet.</p>
                                        </div>
                                    </div>
                                    <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                        <div className="item-media">
                                            <img src="assets/images/services/img_11.jpg" alt="img" />
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="service-single.html" />
                                            </div>
                                        </div>
                                        <div className="item-content overflow-hidden">
                                            <div className="d-flex align-center flex-wrap">
                                                <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                    <a href="service-single.html">Medical Reading</a>
                                                </h5>
                                                <a href="service-single.html" className="font-2">
                                                    Read Now <i className="fa fa-caret-right color-main ml-2" />
                                                </a>
                                            </div>
                                            <p>Integer sagittis nisi nec tortor fermentum aliquet.</p>
                                        </div>
                                    </div>
                                    <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                        <div className="item-media">
                                            <img src="assets/images/services/img_12.jpg" alt="img" />
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="service-single.html" />
                                            </div>
                                        </div>
                                        <div className="item-content overflow-hidden">
                                            <div className="d-flex align-center flex-wrap">
                                                <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                    <a href="service-single.html">Birth Stone</a>
                                                </h5>
                                                <a href="service-single.html" className="font-2">
                                                    Read Now <i className="fa fa-caret-right color-main ml-2" />
                                                </a>
                                            </div>
                                            <p>Integer sagittis nisi nec tortor fermentum aliquet.</p>
                                        </div>
                                    </div>
                                    <div className="vertical-item service-layout-2 content-absolute box-shadow  content-padding">
                                        <div className="item-media">
                                            <img src="assets/images/services/img_13.jpg" alt="img" />
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="service-single.html" />
                                            </div>
                                        </div>
                                        <div className="item-content overflow-hidden">
                                            <div className="d-flex align-center flex-wrap">
                                                <h5 className="my-0 links-maincolor2 mr-auto pr-2">
                                                    <a href="service-single.html">Transit Chart</a>
                                                </h5>
                                                <a href="service-single.html" className="font-2">
                                                    Read Now <i className="fa fa-caret-right color-main ml-2" />
                                                </a>
                                            </div>
                                            <p>Integer sagittis nisi nec tortor fermentum aliquet.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider-35" />
                                <div className="owl-custom-nav romb">
                                    <a href="#" className="owl-prev">
                                        <i className="ico ico-right-arrow" />
                                    </a>
                                    <a href="#" className="owl-next">
                                        <i className="ico ico-right-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="shop"
                className="ds section-shop s-pt-85 s-pb-60 s-pt-xl-145 s-pb-xl-120"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <p className="text-white text-center text-md-left fs-20 line-right mb-0">
                                <span>Shop</span>
                            </p>
                            <h3 className="special-heading mt-2 fs-60 text-center text-md-left">
                                <span>
                                    Our Best <br />
                                    Products
                                </span>
                            </h3>
                        </div>
                        <div className="col-xl-7 col-lg-6 text-center text-md-left">
                            <p className="mt-4 mt-lg-0">
                                <span>
                                    As the leader of the pack, it is but hard to miss your charm, Leo
                                    and everything about you screams attention.{" "}
                                </span>
                            </p>
                            <div className="divider-35" />
                            <a
                                href="shop-left.html"
                                className="btn btn-outline-maincolor btn-medium"
                            >
                                Book Shopping Now
                            </a>
                        </div>
                        <div className="col-12">
                            <div className="divider-55" />
                            <div
                                className="owl-carousel products"
                                data-responsive-lg={4}
                                data-responsive-md={3}
                                data-responsive-sm={2}
                                data-responsive-xs={1}
                                data-nav="false"
                                data-margin={10}
                                data-loop="true"
                                data-autoplay="true"
                            >
                                <div className="product">
                                    <div className="product-inner">
                                        <span className="onsale">Sale!</span>
                                        <a href="shop-product-right.html">
                                            <img src="assets/images/shop/34.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-right.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="product-inner">
                                        <a href="shop-product-right.html">
                                            <img src="assets/images/shop/35.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-right.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="product-inner">
                                        <a href="shop-product-right.html">
                                            <img src="assets/images/shop/36.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-right.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="product-inner">
                                        <a href="shop-product-right.html">
                                            <img src="assets/images/shop/37.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-right.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <li className="product">
                                    <div className="product-inner">
                                        <a href="shop-product-%40%40type.html">
                                            <img src="assets/images/shop/39.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-%40%40type.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product">
                                    <div className="product-inner">
                                        <a href="shop-product-%40%40type.html">
                                            <img src="assets/images/shop/34.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-%40%40type.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product">
                                    <div className="product-inner">
                                        <a href="shop-product-%40%40type.html">
                                            <img src="assets/images/shop/35.jpg" alt="img" />
                                        </a>
                                        <div className="product-wrap">
                                            <h2 className="woocommerce-loop-product__title">
                                                <a href="shop-product-%40%40type.html">Treasure Yellow </a>
                                            </h2>
                                            <div className="product_meta">
                                                <span className="posted_in">
                                                    Categories:{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Magic{" "}
                                                    </a>
                                                    ,{" "}
                                                    <a href="shop-right.html" rel="tag">
                                                        Attributes
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="star-rating">
                                                <span style={{ width: "80%" }}>
                                                    Rated <strong className="rating">4.00</strong> out of 5
                                                </span>
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price">
                                                    <span>
                                                        <span>$</span>58,99
                                                    </span>
                                                </span>
                                                <a
                                                    rel="nofollow"
                                                    href="shop-cart.html"
                                                    className="button product_type_simple add_to_cart_button"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
}

export default Home;