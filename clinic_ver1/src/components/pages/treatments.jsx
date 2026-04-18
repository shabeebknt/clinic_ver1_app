 

import { useEffect } from "react";


function Treatments() {


    useEffect(() => {

        AOS.init({
            duration: 1000 // sets default duration for all elements
        });


    }, []);

    return (

        <>
            <link rel="stylesheet" href="/css/pages.css" />
            <div className="PageContent" id="treatments">

                <div className="PageHeader pb-5 pt-5">
                    <span className="h4 pe-3">Treatments</span>


                </div>


                <div className="PageContentPartial">
                    <div className="ng-scope">
                        <div className="row">
                          
                                <div className="col-lg-6 leftdv pe-lg-5">
                                <img data-aos="zoom-in" className="" src="images/treatment.png" alt="Smile" />
                                </div>

                                <div className="col-lg-6 rightdv pt-5">
                                    <h1 data-aos="zoom-in" className="MainHeading pt-5">
                                    <span className="partialHead">Advanced Treatments.</span>  Gentle Approach.
                                    </h1>

                                    <h2 data-aos="zoom-in" className="SubHead">
                                    Personalized Dental Treatments You Can Trust
                                    </h2>

                                    <p data-aos="zoom-in" className="Description">
                                  Experience high-quality dental care designed for your comfort. Our treatments focus on long-term oral health, combining expertise with a patient-first approach.  </p>

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

                        <div className="ImageContainer p-0 mt-5">

                            <div class="col-sm-12"><h1 data-aos="zoom-in" class="MainHeading text-center pb-3 aos-init aos-animate">Our Dental Treatments</h1></div>
                            <p class="P_About">Explore our wide range of dental treatments designed to keep your smile healthy and beautiful. From routine check-ups to advanced procedures,<br/> we provide care you can trust.</p>

                            <div className="row">

                                <div data-aos="zoom-in" className="col-sm-4 p-0">
                                    <img src="images/Treatments/InvisalignTreatment_new.jpg" alt="Invisalign Treatment" />
                                    <div className="ImageContainerDescription">
                                        <h4>INVISALIGN TREATMENT</h4>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="col-sm-4 p-0">
                                    <img src="images/Treatments/DentalImplants_new.jpg" alt="Dental Implants" />
                                    <div className="ImageContainerDescription">
                                        <h4>DENTAL IMPLANTS</h4>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="col-sm-4 p-0">
                                    <img src="images/Treatments/RootCanalTreatment_new.jpg" alt="Root Canal Treatment" />
                                    <div className="ImageContainerDescription BorderLeft BorderRight">
                                        <h4>ROOT CANAL TREATMENT</h4>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="col-sm-4 p-0">
                                    <img src="images/Treatments/GumTreatment.jpg" alt="Gum Treatment" />
                                    <div className="ImageContainerDescription">
                                        <h4>GUM TREATMENT</h4>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="col-sm-4 p-0">
                                    <img src="images/Treatments/teathwhitening_new.jpg" alt="Teeth Whitening" />
                                    <div className="ImageContainerDescription">
                                        <h4>TEETH WHITENING</h4>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="col-sm-4 p-0">
                                    <img src="images/Treatments/tootheextraction_new.jpg" alt="Tooth Extraction" />
                                    <div className="ImageContainerDescription">
                                        <h4>TOOTH EXTRACTION</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>






            </div>


        </>

    );
}



export default Treatments
