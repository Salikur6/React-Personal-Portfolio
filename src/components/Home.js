import React from 'react';
import AboutMe from './AboutMe';
import AllLinks from './AllLinks';
import BannerText from './BannerText';
import ContactMe from './ContactMe';
import Navbar from './Navbar';
// import MyAd from './MyAd';
// import MyServices from './MyServices';
import Projects from './Projects';
// import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>

            <section id="" className="fontpg-design">

                <Navbar></Navbar>

                <BannerText></BannerText>

                <div className="move-top">
                    <span><i className="icofont-arrow-up"></i></span>
                </div>


                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>

            </section>


            {/* <!-- ABOUT ME--> */}

            <AboutMe></AboutMe>


            {/* <!-- MY SERVICES--> */}

            {/* ----------------------------------------------------------- <MyServices></MyServices> */}


            {/* <!-- MY AD--> */}

            {/* ----------------------------------------------------------------- <MyAd></MyAd> */}


            {/* <!-- MY Portfolio--> */}

            <Projects></Projects>


            {/* <!-- MY Testimonials--> */}

            {/* ----------------------------------------------------------------  <Testimonials></Testimonials> */}


            {/* <!-- Contact Me--> */}

            <ContactMe></ContactMe>


            {/* <!-- All Links --> */}

            <AllLinks></AllLinks>


            {/* <!-- Footer --> */}

            <section id="footer" className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="footer-p">Design & Developed With &#128151; By Salikur Islam</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;