/* eslint-disable no-undef */
import React, { useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

const AboutMe = () => {



    // Profile infomation click to hide and show //


    $(".click1").click(function () {
        $(".click1").addClass("fff");
        $(".click2").removeClass("fff");
        $(".click3").removeClass("fff");
    })
    $(".click2").click(function () {

        $(".click2").addClass("fff");
        $(".click1").removeClass("fff");
        $(".click3").removeClass("fff");
    })
    $(".click3").click(function () {

        $(".click3").addClass("fff");
        $(".click1").removeClass("fff");
        $(".click2").removeClass("fff");

    })


    //  About Us Main image using VanillaTilt animation //

    VanillaTilt.init(document.querySelector(".myimg"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });

    // About Us button using VanillaTilt animation //

    VanillaTilt.init(document.querySelector(".profile-button"), {
        max: 10,
        speed: 300,
        glare: true,
        "max-glare": 0.2
    });


    //-----------------------

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState();
    const [show3, setShow3] = useState();
    const handleProfile = () => {
        setShow1(true);
        setShow3(false)
        setShow2(false)
    }
    const handleSkills = () => {
        setShow2(true)
        setShow1(false)
        setShow3(false);
    }
    const handleContact = () => {
        setShow3(true)
        setShow1(false)
        setShow2(false)
    }




    return (
        <div>
            {/* <!-- ABOUT ME--> */}


            <section id="about" className="about-me mb-70 aboutscroll">
                <img className="slide-img1 clearHeader" src="img/img1.jpg" alt="" />
                <img className="slide-img2 slide-img" src="img/img2.jpg" alt="" />
                <div className="container">

                    <div className="blur">

                        <div className="row">

                            <div className="col-lg-6 mt-130">
                                <div className="aboutme me-img">
                                    <img className="myimg" src="assets/img/salikur11.png" alt="my img" />
                                </div>
                            </div>

                            <div className="col-lg-6 mt-130 mb-200">
                                <div className="aboutme">
                                    <div className="about-into-tx">
                                        <h2>About Me</h2>
                                        <p>My Introduction</p>
                                    </div>
                                    <div className="profile-tx">

                                        <div className="profile-button">

                                            <button className='profile-border bg-transparent border-0' onClick={handleProfile}>Profile</button>

                                            <button className='profile-border bg-transparent border-0'
                                                onClick={handleSkills}>Skills</button>


                                            <button className="profile-border bg-transparent border-0" onClick={handleContact}>Connect</button>
                                        </div>
                                        <hr />


                                        {(show1 && !show2 && !show3) &&
                                            <div className="profile-info-1">
                                                <h2 className="profile-headt"> Hi! I’m a 18-years-old Freelancer!</h2>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Contrary
                                                    to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                                    piece of classical Latin literature from 45 BC, making it over 2000 years
                                                    old.<br /><br />
                                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                                    looked
                                                    up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                                                    and
                                                    going through the cites of the word in classical.<br /><br />

                                                    Ipsum passages, and more recently with desktop publishing software like Aldus
                                                    PageMaker including versions of Lorem Ipsum.

                                                    <br /><br /><span className="brak-me-into">I started working
                                                        as a freelancer working in different marketplaces like Fiverr & Upwork!
                                                        Where I
                                                        have
                                                        worked with over 0 client. :-(</span>
                                                </p>
                                                <a href='l' className="btn profile-btn contact">Contact Me</a>
                                            </div>

                                        }



                                        {(show2 && !show1 && !show3) &&
                                            <div className="profile-info-2">
                                                <h2 className="profile-headt">a</h2>
                                                <p className="skill1">Front End</p>
                                                <span className="skill-snp">HTML5</span>
                                                <span className="skill-snp">CSS3</span>
                                                <span className="skill-snp">Javascript</span>
                                                <span className="skill-snp">jquery</span>
                                                <span className="skill-snp">Bootstrap</span>

                                                <p className="skill2">Back End</p>
                                                <span className="skill-snp">PHP</span>

                                                <p className="skill2">Others</p>
                                                <span className="skill-snp">HTML5</span>
                                                <span className="skill-snp">CSS3</span>
                                            </div>
                                        }




                                        {(show3 && !show1 && !show2) &&
                                            <div className="profile-info-3">
                                                <h2 className="profile-headt">a</h2>
                                                <div className="contact-left-side about-contact-right">
                                                    <h5>Phone</h5>
                                                    <p>+880&nbsp;1823&nbsp;85&nbsp;34&nbsp;42</p>

                                                    <h5>Email</h5>
                                                    <p>info@gmail.com</p>

                                                    <h5>Address</h5>
                                                    <p>Sylhet,Bangladesh</p>

                                                    <a target="blank" className="social-link"
                                                        href="https://www.facebook.com/Salikur/"><i
                                                            className="icofont-facebook icon style-social-link"></i></a>
                                                    <a target="blank" className="social-link" href="#j"><i
                                                        className="icofont-linkedin icon style-social-link"></i></a>
                                                    <a target="blank" className="social-link" href="live:.cid.5eb4b20f8b5d3715"><i
                                                        className="icofont-skype icon style-social-link"></i></a>
                                                </div>
                                            </div>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>


            {/* <!-- END ABOUT ME--> */}
        </div>
    );
};

export default AboutMe;