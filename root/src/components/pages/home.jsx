
import { useEffect } from "react";

import Doctors from "../../components/shared/doctors";
function Home() 
{


    useEffect(() => {

        AOS.init({
            duration: 1000 // sets default duration for all elements
        });


    }, []);

    return( 

        <>


            <div id="carouselExampleIndicators" className="carousel slide" >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: "100%" }} src="../images/slide/slide3.png"></img>

                        <div className="carousel-custom-caption">
                            <h5 data-aos="fade-down" className="aos-init aos-animate">Your Smile, Our <br /> Passion </h5>
                            <p data-aos="fade-down" className="aos-init aos-animate">Personalized treatments designed
                                for your comfort and confidence  </p>

                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnBookAppoinment" className="btn btn-warning btnEnquirySlide" >
                                <span className="material-symbols-outlined DoctorIcon">
                                    stethoscope_check
                                </span>
                                {" "}Book Appoinment
                            </button>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "100%" }} src="../images/slide/slide2.png"></img>

                        <div className="carousel-custom-caption">
                            <h5 data-aos="fade-down" className="aos-init aos-animate">Where Smiles Begin <br />  </h5>
                            <p data-aos="fade-down" className="aos-init aos-animate">Experience comfortable, customized
                                treatment in a friendly environment  </p>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnBookAppoinment" className="btn btn-warning btnEnquirySlide" >
                                <span className="material-symbols-outlined DoctorIcon">
                                    stethoscope_check
                                </span>
                                {" "}Book Appoinment
                            </button>
                        </div>

                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div data-aos="fade-up" className="row Maindv pb-md-5 pt-md-1 pb-sm-0">
                <div className="col-lg-6 leftdv pe-lg-5">
                    <div className="row">
                        <img
                            data-aos="zoom-in"
                            className="pt-md-5"
                            src="images/LeftImg2.jpg"
                            alt="Dental treatment"
                        />
                    </div>
                </div>

                <div className="col-lg-6 rightdv pt-md-3 pt-md-0 pt-sm-3 pt-3 joined-circles-section">
                    <h1 data-aos="fade-down" data-aos-duration="2000" className="MainHeading SiteTopHead">
                        <span className="partialHead"> Welcome to </span> Medicenter
                    </h1>
                    <h2 data-aos="fade-in" className="SubHead">
                        Advanced Dental Solutions for Every Smile
                    </h2>
                    <p data-aos="fade-in" className="Description">
                        Welcome to Medicenter, where your smile matters. We provide gentle, professional dental care for the whole family, including regular check-ups, cleanings, fillings, braces, and cosmetic treatments. Our friendly team is here to make every visit comfortable and stress-free. Book your appointment today and keep your smile healthy and bright!
                    </p>

                    <ul className="pointsdv">
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Comprehensive Dental Care</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Experienced & Caring Dentists</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Comfortable & Friendly Environment</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Affordable Treatment Plans</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Emergency Dental Services</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Personalized Smile Makeovers</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Family-Friendly Dental Care</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined"> check </span>
                            <p>Strict Hygiene & Safety Protocols</p>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="row Maindv pb-md-2 pt-md-1 pb-sm-0 doctorDescription">

                <div data-aos="fade-down" data-aos-duration="2000" className="dental-hero aos-init aos-animate">

                    <div  className="hero-image-wrapper aos-init">
                        <img
                            src="images/doctor.png"
                            alt="Smiling Dentist"
                            className="dental-photo"
                        />

                        <div className="floating-badge">
                            <div className="icon">✨</div>
                            <div className="text">
                                <h4>10k+ Smiles</h4>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                    </div>

                    <div  className="hero-content">
                    {/*    <span className="clinic-tag">BrightSmile Clinic</span>*/}

                        <h1>
                            <span>Healthy smiles.</span> Every day
                        </h1>

                        <h2 className="doctor-name">Dr. Alyssa Vance, DDS</h2>

                        <p>
                            Experience painless dentistry in a relaxing environment. Dr. Vance and our
                            expert team specialize in cosmetic dentistry, orthodontics, and
                            comprehensive oral care to give you the confidence you deserve.
                        </p>

                        <div className="btn-group">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnBookAppoinment" className="btn btn-warning btnEnquirySlide"><span className="material-symbols-outlined DoctorIcon">stethoscope_check</span> Book Appoinment</button>
                            {/*<a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnBookAppoinment"  className="btn-primary">Book Consultation</a>*/}
                        </div>
                    </div>

                </div>
           
            </div>


            <div data-aos="fade-up" className="row Maindv pb-md-5 pt-md-1 pb-sm-0 text-center mt-5">
                <h1 data-aos="fade-down" data-aos-duration="2000" className="MainHeading text-center">
                    <span className="partialHead"> Our </span> Teams
                </h1>
                <h2 data-aos="fade-in" className="SubHead">
                    Meet Our Expert Dental Team Dedicated to Your Smile
                </h2>
                <div className="container">
                <p className="Description">
                        Our team of experienced and friendly dental professionals is dedicated to providing high-quality care for every patient. We work together to ensure your comfort,<br></br> safety, and a healthy, confident smile.
                    </p>

                    {<Doctors></Doctors>}

                </div>
            </div>



            <div className="ImageContainer">
                <h1 data-aos="fade-down" data-aos-duration="2000" className="MainHeading text-center">
                    <span className="partialHead"> Our </span> Treatments
                </h1>
                <h2 data-aos="fade-in" className="SubHead">
                    Advanced Dental Care Tailored for Your Perfect Smile
                </h2>

            
                <div className="row mt-3">

                    <div className="container">
                        <p className="P_About">Explore our wide range of dental treatments designed to keep your smile healthy and beautiful. From routine check-ups to advanced procedures,<br/> we provide care you can trust.</p>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-6 p-0 ">
                        <img src="images/Treatments/InvisalignTreatment_new.jpg" alt="Invisalign Treatment" />
                        <div className="ImageContainerDescription">
                            <h4>INVISALIGN TREATMENT</h4>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-6 p-0">
                        <img src="images/Treatments/DentalImplants_new.jpg" alt="Dental Implants" />
                        <div className="ImageContainerDescription">
                            <h4>DENTAL IMPLANTS</h4>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-6 p-0">
                        <img src="images/Treatments/RootCanalTreatment_new.jpg" alt="Root Canal Treatment" />
                        <div className="ImageContainerDescription BorderLeft BorderRight">
                            <h4>ROOT CANAL TREATMENT</h4>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-6 p-0">
                        <img src="images/Treatments/GumTreatment.jpg" alt="Gum Treatment" />
                        <div className="ImageContainerDescription">
                            <h4>GUM TREATMENT</h4>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-6 p-0">
                        <img src="images/Treatments/teathwhitening_new.jpg" alt="Teeth Whitening" />
                        <div className="ImageContainerDescription">
                            <h4>TEETH WHITENING</h4>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-6 p-0">
                        <img src="images/Treatments/tootheextraction_new.jpg" alt="Tooth Extraction" />
                        <div className="ImageContainerDescription">
                            <h4>TOOTH EXTRACTION</h4>
                        </div>
                    </div>

                </div>
            </div>



            <div data-aos="fade-up" className="row Maindv pb-md-5 pt-md-1 pb-sm-0 text-center mt-5">
                <h1 data-aos="fade-down" data-aos-duration="2000" className="MainHeading text-center">
                    <span className="partialHead"> What our  </span> Patients  Says
                </h1>
                <h2 data-aos="fade-in" className="SubHead">
               </h2>
                <div className="container">
                    <p className="Description">
                        We take pride in creating healthy, confident smiles—and nothing makes us happier than hearing from our satisfied patients. From gentle care to advanced treatments,
               </p>



                    <section data-aos="fade-up" className="dental-doctors-section py-5 aos-init aos-animate">

                        <div
                            id="feedbackCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner pb-4">

                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                   

                                    <div className="row g-4">

                                        {[
                                            {
                                                name: "Anjali Nair",
                                                role: "Orthodontist",
                                                img: "images/star.png",
                                                desc: "I was always nervous about dental visits, but the team made me feel completely at ease. The treatment was painless and the results were amazing!",
                                            },
                                            {
                                                name: "Rahul Menon",
                                                role: "Oral Surgeon",
                                                img: "images/star.png",
                                                desc: "Very professional and friendly staff. The clinic is clean, modern, and well-equipped. Highly recommend for anyone looking for quality dental care.",
                                            },
                                            {
                                                name: "Fathima K",
                                                role: "Pediatric Dentist",
                                                img: "images/star.png",
                                                desc: "Excellent service and great attention to detail. They truly care about their patients. I’ll definitely be coming back for future treatments.",
                                            }
                                           
                                        ].map((doc, index) => (
                                            <div key={index} className="col-12 col-md-4 col-lg-4 p-lg-5">
                                                <div className="card doctor-card h-100  border-0 ">
                                                    <img src={doc.img} className="starImage " alt={doc.name} />
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold doc_name">{doc.name}</h5>
                                                    
                                                        <p className="card-text small text-muted">
                                                            "{doc.desc}"
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                    </div>

                                {/* Slide 2 */}
                                <div className="carousel-item">
                                   
                                    <div className="row g-4">

                                        {[
                                            {
                                                name: "Arjun Das",
                                                role: "Periodontist",
                                                img: "images/star.png",
                                                desc: "Excellent service and great attention to detail. They truly care about their patients. I’ll definitely be coming back for future treatments",
                                            },
                                            {
                                                name: "Sneha Pillai",
                                                role: "Prosthodontist",
                                                img: "images/star.png",
                                                desc: "Quick appointment, no waiting time, and very gentle care. One of the best dental experiences I’ve had..",
                                            },
                                            {
                                                name: "Vishnu Raj",
                                                role: "Cosmetic Dentist",
                                                img: "images/star.png",
                                                desc: "The staff were extremely caring and attentive. They took the time to understand my concerns and provided the perfect treatment plan. Truly a wonderful experience!",
                                            }
                                        ].map((doc, index) => (
                                            <div key={index} className="col-12 col-md-4 col-lg-4 p-lg-5">
                                                <div className="card doctor-card h-100 border-0">
                                                    <img src={doc.img} className="starImage " alt={doc.name} />
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold doc_name">{doc.name}</h5>
                                                     
                                                        <p className="card-text small text-muted">
                                                            "{doc.desc}"
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                    </div>     

                            </div>

                            {/* Controls */}
                            <button
                                className="carousel-control-prev custom-control"
                                type="button"
                                data-bs-target="#feedbackCarousel"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon bg-primary rounded-circle p-3"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button
                                className="carousel-control-next custom-control"
                                type="button"
                                data-bs-target="#feedbackCarousel"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon bg-primary rounded-circle p-3"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                            {/* Indicators */}
                            <div className="carousel-indicators custom-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#feedbackCarousel"
                                    data-bs-slide-to="0"
                                    className="active bg-primary"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#feedbackCarousel"
                                    data-bs-slide-to="1"
                                    className="bg-primary"
                                    aria-label="Slide 2"
                                ></button>
                            </div>
                        </div>

                    </section>


                </div>
            </div>
         

        </>

    );
}



export default Home
