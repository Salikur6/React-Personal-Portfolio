/* eslint-disable no-undef */
import React, { useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

const AboutMe = () => {



    // Profile infomation click to hide and show //


    // $(".click1").click(function () {
    //     $(".click1").addClass("fff");
    //     $(".click2").removeClass("fff");
    //     $(".click3").removeClass("fff");
    // })
    // $(".click2").click(function () {

    //     $(".click2").addClass("fff");
    //     $(".click1").removeClass("fff");
    //     $(".click3").removeClass("fff");
    // })
    // $(".click3").click(function () {

    //     $(".click3").addClass("fff");
    //     $(".click1").removeClass("fff");
    //     $(".click2").removeClass("fff");

    // })


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
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
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

                                            <button className={show1 ? 'profile-border bg-transparent border-0 fff' : 'profile-border bg-transparent border-0'} onClick={handleProfile}>Profile</button>

                                            <button className={show2 ? 'profile-border bg-transparent border-0 fff' : 'profile-border bg-transparent border-0'}
                                                onClick={handleSkills}>Skills</button>


                                            <button className={show3 ? 'profile-border bg-transparent border-0 fff' : 'profile-border bg-transparent border-0'} onClick={handleContact}>Connect</button>
                                        </div>
                                        <hr />


                                        {(show1 && !show2 && !show3) &&
                                            <div className="profile-info-1">
                                                <h2 className="profile-headt"> Hi! I’m Salikur Islam</h2>
                                                <p>
                                                    I am working hard with a strong desire to become a junior web developer in the next few months. My goal is to see myself as a Frontend, MERN Stack Developer! in 2022. After finish this web-development learning i will focus on getting a job on Software industry, where I will be able to perform in any kind of situation with full effort to utilize my knowledge, skill, and experience for professional career development..


                                                    <br /><br /><span className="brak-me-into">Passionate about applying programming skill set in a collaborative environment, to contribute to projects involving the latest tools and technologies. Front End Developer, interested in remote jobs. Experienced in Responsive Web Design & Development. Love learning and working with new technologies. :-(</span>
                                                </p>
                                                <a href='l' className="btn profile-btn contact">Contact Me</a>
                                            </div>

                                        }



                                        {(show2 && !show1 && !show3) &&
                                            <div className="profile-info-2">

                                                <p className="skill1">Experts </p>
                                                <div className='skill-div'>
                                                    <span style={{ background: '#f06529' }} className="skill-snp">HTML</span>
                                                    <span style={{ background: '#264de4' }} className="skill-snp text-white">CSS</span>
                                                    <span style={{ background: 'rgb(4 177 253)' }} className="skill-snp">Tailwind</span>
                                                    <span style={{ background: '#563d7c' }} className="skill-snp text-white">Bootstrap</span>
                                                    <span style={{ background: 'yellow' }} className="skill-snp">JavaScript</span>
                                                    <span className="skill-snp">ES6</span>
                                                    <span style={{ background: '#61dbfb' }} className="skill-snp">React</span>
                                                    <span className="skill-snp bg-secondary text-white">React Bootstrap</span>
                                                    <span className="skill-snp bg-danger text-white">React Router</span>
                                                </div>



                                                <p className="skill2">Comfortable</p>

                                                <div className='skill-div'>
                                                    <span style={{ background: '#4DB33D' }} className="skill-snp">MongoDB</span>
                                                    <span style={{ background: '#000' }} className="skill-snp text-white">Express.js</span>
                                                    <span style={{ background: '#3c873a' }} className="skill-snp">Node.js</span>
                                                    <span className="skill-snp">Authentication</span>
                                                    <span className="skill-snp">React Query</span>
                                                    <span className="skill-snp">Axios</span>
                                                </div>


                                                <p className="skill2">Familiar</p>
                                                <div className='skill-div'>
                                                    <span className="skill-snp">Mailchimp</span>
                                                    <span className="skill-snp">Payment Gateway</span>
                                                </div>



                                                <p className="skill2">Tools and others</p>

                                                <div className='skill-div'>
                                                    <span className="skill-snp">Git</span>
                                                    <span className="skill-snp">GitHub</span>
                                                    <span className="skill-snp">Dev Tools</span>
                                                    <span className="skill-snp">Figma</span>
                                                    <span className="skill-snp">VS Code</span>
                                                    <span className="skill-snp">Firebase</span>
                                                    <span className="skill-snp">Netlify</span>
                                                    <span className="skill-snp">Heroku</span>

                                                </div>

                                            </div>
                                        }


                                        {(show3 && !show1 && !show2) &&
                                            <div className="profile-info-3">

                                                <div className="contact-left-side about-contact-right">
                                                    <h5>Phone</h5>
                                                    <p>+880&nbsp;1823&nbsp;85&nbsp;34&nbsp;42</p>

                                                    <h5>Email</h5>
                                                    <p>salikur6@gmail.com</p>

                                                    <h5>Address</h5>
                                                    <p>Alompur, Sylhet,Bangladesh</p>

                                                    <a target="blank" className="social-link"
                                                        href="https://www.facebook.com/Salikur/"><i
                                                            className="icofont-facebook icon style-social-link"></i></a>
                                                    <a target="blank" className="social-link" href="https://www.linkedin.com/in/salikur-islam/"><i
                                                        className="icofont-linkedin icon style-social-link"></i></a>
                                                    <a target="blank" className="social-link" href="https://join.skype.com/invite/yehjKHX97ddV"><i
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