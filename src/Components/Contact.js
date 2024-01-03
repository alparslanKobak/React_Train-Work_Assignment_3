
import { useEffect } from "react";

function Contact() {

   
        // Sayfayı yenile
 
    


    return (<>


        <section className="ds s-py-90 s-py-xl-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" data-animation="scaleAppear">
                        <div className="ds bs box-shadow bordered p-40">
                            <form
                                className="contact-form c-mb-15 c-gutter-15"
                                method="post"
                                action="https://html.modernwebtemplates.com/"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="mb-3 color-main2">Contact Form</h4>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group has-placeholder">
                                            <label htmlFor="name">
                                                Full Name <span className="required">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                aria-required="true"
                                                size={30}
                                                defaultValue=""
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group has-placeholder">
                                            <label htmlFor="phoneNumber">
                                                Phone Number <span className="required">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                aria-required="true"
                                                size={30}
                                                defaultValue=""
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                className="form-control"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group has-placeholder">
                                            <label htmlFor="email">
                                                Email address<span className="required">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                aria-required="true"
                                                size={30}
                                                defaultValue=""
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group has-placeholder">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                aria-required="true"
                                                rows={3}
                                                cols={45}
                                                name="message"
                                                id="message"
                                                className="form-control"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-20 mt-xl-30">
                                    <div className="col-sm-12">
                                        <div className="form-group has-placeholder">
                                            <button
                                                type="submit"
                                                id="contact_form_submit"
                                                name="contact_submit"
                                                className="btn btn-maincolor"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="divider-60 divider-lg-0" />
                    </div>
                    {/*.col-* */}
                    <div className="col-lg-4 " data-animation="scaleAppear">
                        <div className="ds bs box-shadow bordered p-40">
                            <h4 className="mb-4 color-main2">Contact Info</h4>
                            <div className="media mb-20">
                                <div className="icon-styled color-main2 fs-40">
                                    <i className="fa fa-map-marker" />
                                </div>
                                <div className="media-body">
                                    <h5 className="mt-0 color-main2">Address:</h5>
                                    <p>
                                        Caferağa Street 32/16 <br />
                                        Kadıköy / İstanbul
                                    </p>
                                </div>
                            </div>
                            <div className="media mb-20">
                                <div className="icon-styled color-main2 fs-40">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="media-body">
                                    <h5 className="mt-0 color-main2">Phone:</h5>
                                    <p>
                                        800-123-4567 <br />
                                        Fax: 718-724-3312
                                    </p>
                                </div>
                            </div>
                            <div className="media mb-20">
                                <div className="icon-styled color-main2 fs-40">
                                    <i className="fa fa-pencil" />
                                </div>
                                <div className="media-body">
                                    <h5 className="mt-0 color-main2">Email:</h5>
                                    <p className="links-grey">
                                        <a href="https://html.modernwebtemplates.com/cdn-cgi/l/email-protection#5b282e2b2b34292f1b2d3e3f3275383436">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="c4b7b1b4b4abb6b084b2a1a0adeaa7aba9"
                                            >
                                                istanbul@magicshop.com
                                            </span>
                                        </a>{" "}
                                        <br />
                                        <a href="info%40vedi.html">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="b0d9ded6dff0c6d5d4d99ed3dfdd"
                                            >
                                                kadikoy@magicshop.com
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="divider-30 divider-xl-50" />
                            <h4 className="mt-0 color-main2 mb-2">Social Links</h4>
                            <p className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                    className="fa  fa-facebook"
                                    title="facebook"
                                />
                                <a
                                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                    className="fa  fa-twitter"
                                    title="twitter"
                                />
                                <a
                                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                    className="fa  fa-linkedin"
                                    title="linkedin"
                                />
                                <a
                                    href="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/"
                                    className="fa  fa-youtube-play"
                                    title="youtube"
                                />
                            </p>
                        </div>
                    </div>
                    {/*.col-* */}
                </div>
            </div>
        </section>



    </>);
}

export default Contact;