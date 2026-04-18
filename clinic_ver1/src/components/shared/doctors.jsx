import * as React from 'react';
import { useEffect } from 'react';

const doctors = () => {
  
        return (
            <>

                <section data-aos="fade-up" className="dental-doctors-section py-5 aos-init aos-animate">          

                        <div
                            id="doctorCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner pb-4">

                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                    <div className="row g-4">

                                        {[
                                            {
                                                name: "Dr. Sarah Smith",
                                                role: "Orthodontist",
                                                img: "images/teams/doctor1.jpg",
                                                desc: "Specializes in braces, aligners, and fixing misaligned teeth.",
                                            },
                                            {
                                                name: "Dr. John Doe",
                                                role: "Oral Surgeon",
                                                img: "images/teams/doctor2.jpg",
                                                desc: "Expert in complex extractions, implants, and jaw surgeries.",
                                            },
                                            {
                                                name: "Dr. Emily Chen",
                                                role: "Pediatric Dentist",
                                                img: "images/teams/doctor3.jpg",
                                                desc: "Creating a friendly and painless environment for children.",
                                            },
                                            {
                                                name: "Dr. Michael Lee",
                                                role: "Endodontist",
                                                img: "images/teams/doctor4.jpg",
                                                desc: "Specialist in root canal treatments and saving natural teeth.",
                                            },
                                        ].map((doc, index) => (
                                            <div key={index} className="col-12 col-md-6 col-lg-3">
                                                <div className="card doctor-card h-100 text-center border-0 ">
                                                    <img
                                                        src={doc.img}
                                                        className="card-img-top rounded-circle mx-auto mt-4"
                                                        alt={doc.name}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold doc_name">{doc.name}</h5>
                                                        <h6 className=" mb-3 dep_name">{doc.role}</h6>
                                                        <p className="card-text small text-muted">
                                                            {doc.desc}
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
                                                name: "Dr. Aisha Khan",
                                                role: "Periodontist",
                                                img: "images/teams/doctor1.jpg",
                                                desc: "Focuses on preventing and treating gum diseases.",
                                            },
                                            {
                                                name: "Dr. David Clark",
                                                role: "Prosthodontist",
                                                img: "images/teams/doctor2.jpg",
                                                desc: "Expert in dental prosthetics like crowns, bridges, and dentures.",
                                            },
                                            {
                                                name: "Dr. Lisa Ray",
                                                role: "Cosmetic Dentist",
                                                img: "images/teams/doctor3.jpg",
                                                desc: "Specializes in teeth whitening and veneers for a perfect smile.",
                                            },
                                            {
                                                name: "Dr. Mark Evans",
                                                role: "General Dentist",
                                                img: "images/teams/doctor4.jpg",
                                                desc: "Your go-to expert for routine checkups and preventive care.",
                                            },
                                        ].map((doc, index) => (
                                            <div key={index} className="col-12 col-md-6 col-lg-3">
                                                <div className="card doctor-card h-100 text-center border-0">
                                                    <img
                                                        src={doc.img}
                                                        className="card-img-top rounded-circle mx-auto mt-4"
                                                        alt={doc.name}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold doc_name">{doc.name}</h5>
                                                        <h6 className=" mb-3 dep_name">{doc.role}</h6>
                                                        <p className="card-text small text-muted">
                                                            {doc.desc}
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
                                data-bs-target="#doctorCarousel"
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
                                data-bs-target="#doctorCarousel"
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
                                    data-bs-target="#doctorCarousel"
                                    data-bs-slide-to="0"
                                    className="active bg-primary"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#doctorCarousel"
                                    data-bs-slide-to="1"
                                    className="bg-primary"
                                    aria-label="Slide 2"
                                ></button>
                            </div>
                        </div>
                 
                </section>


            </>
        )

};
export default doctors;
