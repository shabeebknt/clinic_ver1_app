
function Footer() {
    return (

        <>

            <section className="emergency-banner mt-3">
                <div data-aos="fade-up" className="banner-content  aos-init aos-animate">
                    <h2>Dental Emergency? We're Here to Help!</h2>
                    <p>Don't suffer in pain. Our emergency dental services are available when you need them most.</p>

                    <div className="button-group">
                        <a href="tel:7025593559" className="btn call-btn">
                            <i className="fa-solid fa-phone"></i>
                            Emergency Call: 8123996838
                        </a>

                        <a href="https://wa.me/7025593559" className="btn wa-btn" target="_blank">
                            <i className="fa-brands fa-whatsapp"></i>
                            WhatsApp Now: 7025593559
                        </a>
                    </div>
                </div>
            </section>

            <div className="row ContactDetails pt-5 pb-5">
                <div className="col-md-6 pb-5">
                    <h1 className="MainHeading LightHead">Contact Details</h1>

                    <h2
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="mt-5 LightHead"
                    >
                        Medicenter Dental Clinic
                    </h2>

                    <div className="row">
                        <div data-aos="fade-up" className="col-sm-6 ContactsItem">
                            2702 Memory Lane, office 5<br />
                            Chicago, IL 60605<br />
                            admin@medicenter.com

                            <h2 className="mt-5 LightHead2">
                                In Case of Emergency Call +917025593559
                            </h2>
                        </div>

                        <div data-aos="fade-up" className="col-sm-6 ContactsItem">
                            <h1>Hours of Operation</h1>
                            Mon - Fri: 08:00 am - 05:00 pm<br />
                            Sat: 09:00 am - 03:00 pm
                        </div>

                        <div className="col-12">
                            <button
                                data-aos="fade-up"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                id="btnBookAppoinment2"
                                className="btn btn-warning btnAppoinmentBooking mb-2"
                            >
                                Book Appointment
                            </button>

                            <ul data-aos="fade-up" className="social-icons pt-5 ">
                                <li>
                                    <a href="#" className="instagram" aria-label="Instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="facebook" aria-label="Facebook">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://wa.me/7025593559" className="whatsapp" aria-label="WhatsApp">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-0 mt-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708161.6969138371!2d75.89663306651394!3d11.329035701027262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62383af861be3%3A0x4b730477218eaf4f!2sNilambur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1747666271765!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
            <a
                href="https://wa.me/7025593559"
                target="_blank"
                rel="noopener noreferrer"
                className="WhatsAppIconFixed"
            >
                <img
                    src="images/Icons/WhatsApp.svg.webp"
                    alt="WhatsApp"
                    width="50"
                />
            </a>

            <a
                href="tel:+917025593559"
                className="CallIconFixed"
            >
                <img
                    src="images/Icons/telephone.png"
                    alt="Call"
                    width="50"
                />
            </a>
          
            <section className="call-buton">
                <a className="cc-calto-action-ripple" href="tel:+917025593559">

                </a>
                <span className="material-symbols-outlined callIcon">
                    call
                </span><span className="num">+917025593559</span>
            </section>

            <div className="col-md-4 item text-center">
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="btnBookAppoinment"
                    className="btn btn-warning btnEnquiry"
                >
                    <span className="material-symbols-outlined DoctorIcon">
                        stethoscope_check
                    </span>
                    {" "}Book Appoinment
                </button>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Appoinment Booking
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <form id="AppoinmentBooking">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="Name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="MobileNumber" className="form-label">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="MobileNumber"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="AppintmentDate" className="form-label">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control datepicker"
                                        id="AppintmentDate"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-custom"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>

                                <button
                                    type="submit"
                                    id="btnAppoinmentBooking"
                                    className="btn btn-primary btn-custom btn-submit"
                                >
                                    <span id="AppoinmentSpinnerSubmitText">Submit</span>

                                    <div
                                        className="spinner-border text-danger visually-hidden"
                                        role="status"
                                        id="AppoinmentSpinner"
                                    >
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
      
    );
}



export default Footer
