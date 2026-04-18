
import { useEffect } from "react";


function ContactUs() {


    useEffect(() => {

        AOS.init({
            duration: 1000 // sets default duration for all elements
        });


    }, []);

    return (

        <>
            <link rel="stylesheet" href="/css/pages.css" />
            <div className="PageContent" id="ContactUs">

                <div className="PageHeader pb-5 pt-5">
                    <span className="h4 pe-3">Contact Us</span>


                </div>




                <div className="PageContentPartial mb-3 nobg">
                    <div className="row">
                    

                     
                        <div className="col-md-8">
                           {/* <h2 data-aos="zoom-in" className="mb-4">Get in Touch</h2>*/}

                            <form id="contactForm">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder=""
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        rows={5}
                                        placeholder="Tell us more about your query..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-custom btn-submit"
                                    id="contactUsSubmitButton"
                                >
                                    <span id="contactUssubmitText">Submit</span>

                                    <div
                                        className="spinner-border text-danger visually-hidden"
                                        role="status"
                                        id="contactUsSpinner"
                                    >
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    </button> </div>
                            </form>
                        </div>


                        <div className="col-md-4 mt-4">
                         
                            <div className="contact-address">
                                <h3 className="MainHeading ">Contact Us</h3>
                                <p> 2702 Memory Lane, office 5</p>
                                <p>Chicago,IL 60605</p>
                                <p>admin@medicenter.com</p>
                                <p>+917025593559</p>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708161.6969138371!2d75.89663306651394!3d11.329035701027262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62383af861be3%3A0x4b730477218eaf4f!2sNilambur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1747666271765!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>


                            </div>
                            
                        </div>


                    </div>
                </div>
            </div>

        </>

    );
}



export default ContactUs
