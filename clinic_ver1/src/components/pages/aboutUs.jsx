
import { useEffect } from "react";


function AboutUs() {


    useEffect(() => {

        AOS.init({
            duration: 1000 // sets default duration for all elements
        });


    }, []);

    return (

        <>
            <link rel="stylesheet" href="/css/pages.css" />
            <div className="PageContent" id="aboutUs">

                <div  className="PageHeader pb-5 pt-5">
                    <span className="h4 pe-3">About Us</span>

                  
                </div>

              








                <div className="PageContentPartial">
                   {/* <img className="bgimage" src="images/bgbak.png" alt="Smile" />*/}

                    <div className="row">
                        <div className="col-lg-6 leftdv pe-lg-5">
                            <img data-aos="zoom-in" className="pt-md-5"  src="images/smilingchild.png"   alt="Smile"  />
                        </div>

                        <div className="col-lg-6 rightdv pt-5">
                            <h1 data-aos="zoom-in" className="MainHeading pt-5">
                                <span className="partialHead">Excellence</span> in Dental Care with a Personal Touch
                            </h1>

                            <h2 data-aos="zoom-in" className="SubHead">
                                Where Your Smile Comes First
                            </h2>

                            <p data-aos="zoom-in" className="Description">
                                Welcome to Medicenter, where your smile is our top priority. We are a modern dental clinic committed to providing exceptional dental care in a warm, welcoming, and patient-focused environment.
                            </p>

                            <ul className="pointsdv d-none">
                                {[
                                    "Comprehensive Dental Care",
                                    "Experienced & Caring Dentists",
                                    "Comfortable & Friendly Environment",
                                    "Affordable Treatment Plans",
                                    "Emergency Dental Services",
                                    "Personalized Smile Makeovers",
                                    "Family-Friendly Dental Care",
                                    "Strict Hygiene & Safety Protocols"
                                ].map((item, index) => (
                                    <li key={index} data-aos="zoom-in">
                                        <span className="material-symbols-outlined">check</span>
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Section */}
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <h1 data-aos="zoom-in" className="MainHeading text-center pb-3">
                                Why Medicenter? Your Smile, Our Priority.
                            </h1>
                        </div>

                        <div className="col-sm-12">
                            <div data-aos="zoom-in" className="container text-center">
                                
                                <p className="P_About">
                                    With years of industry experience and a commitment to excellence, we deliver tailored solutions that drive real results.
                                </p>

                                <div className="row mt-5">
                                    {[
                                        {
                                            icon: "dentistry",
                                            title: "Experienced Professionals",
                                            desc: "Our team brings years of experience and ongoing education."
                                        },
                                        {
                                            icon: "stethoscope",
                                            title: "Your Comfort is Our Commitment",
                                            desc: "We create a relaxing and welcoming dental experience."
                                        },
                                        {
                                            icon: "list_alt",
                                            title: "Advanced Technology for Results",
                                            desc: "We use modern tools for accurate and less invasive treatments."
                                        },
                                        {
                                            icon: "automation",
                                            title: "Personalized Treatment",
                                            desc: "Customized plans tailored to your needs."
                                        },
                                        {
                                            icon: "health_metrics",
                                            title: "Confidence and Smile",
                                            desc: "We improve your overall oral health and confidence."
                                        },
                                        {
                                            icon: "eco",
                                            title: "Muscle Fitness",
                                            desc: "Donec ipsum diam, pretium mollis dapibus risus."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
                                            <div className="service-item d-flex align-items-start">
                                                <div className="hexagon-icon-wrapper me-3">
                                                    <div className="hexagon-shape">
                                                        <span className="material-symbols-outlined">
                                                            {item.icon}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="service-text">
                                                    <h5 className="service-title">{item.title}</h5>
                                                    <p className="service-description">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>






            </div>
          
        </>

    );
}



export default AboutUs
