
import { useEffect } from "react";


function Photogallery() {


    useEffect(() => {

        AOS.init({
            duration: 1000 // sets default duration for all elements
        });


        Appcommon.InitIsotope();


    }, []);

    return (

        <>
            <link rel="stylesheet" href="/css/pages.css" />
            <div className="PageContent" id="Photogallery">

                <div className="PageHeader pb-5 pt-5">
                    <span className="h4 pe-3">Photo Gallery</span>


                </div>




                <div className="PageContentPartial mb-3 nobg portfolio">

                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        <ul className="portfolio-filters isotope-filters aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        </ul>{/* End Portfolio Filters */}

                        <div className="row gy-4 isotope-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" style={{ position: 'relative', height: '1251.39px' }}>

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                                {/* <img src="images/masonry-portfolio-1.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_small1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-1.html" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding" style={{ position: 'absolute', left: '439.987px', top: '0px' }}>
                                {/* <img src="images/masonry-portfolio-3.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_Big1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Branding 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-3.html" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product" style={{ position: 'absolute', left: '879.974px', top: '0px' }}>
                                {/* <img src="images/masonry-portfolio-2.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_small2.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Product 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-2.html" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" style={{ position: 'absolute', left: '0px', top: '301.325px' }}>
                                {/* <img src="images/masonry-portfolio-4.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_small3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-4.html" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product" style={{ position: 'absolute', left: '879.974px', top: '301.625px' }}>
                                {/* <img src="images/masonry-portfolio-5.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_Big2.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Product 2</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-5.html" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding" style={{ position: 'absolute', left: '0px', top: '559.313px' }}>
                                {/* <img src="images/masonry-portfolio-6.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_Big3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Branding 2</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-6.html" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" style={{ position: 'absolute', left: '439.987px', top: '648.225px' }}>
                                {/* <img src="images/masonry-portfolio-7.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_small4.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-7.html" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product" style={{ position: 'absolute', left: '439.987px', top: '949.437px' }}>
                                {/* <img src="images/masonry-portfolio-8.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_small5.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Product 3</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-8.html" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                            <div data-aos="zoom-in" className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding" style={{ position: 'absolute', left: '879.974px', top: '949.85px' }}>
                                {/* <img src="images/masonry-portfolio-9.jpg" className="img-fluid" alt="" /> */}
                                <img src="images/Portfolio/clinic/Photo_small6.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Branding 3</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-9.html" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>{/* End Portfolio Item */}

                        </div>{/* End Portfolio Container */}

                    </div>

            
                </div>
            </div>


     
        </>

    );
}



export default Photogallery
