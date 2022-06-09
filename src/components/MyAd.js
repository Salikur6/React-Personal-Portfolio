import React from 'react';

const MyAd = () => {
    return (
        <div>
            <div className="ad-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 flex">
                            <div className="ad-tx">
                                <h1>Do you want to learn Web Development?</h1>
                                <p>I created several course on Web design and Web Development. These courses specially designed
                                    for beginners.</p>
                                <button>CHACK MY COURCES</button>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ad-tx">
                                <div className="ad-img">
                                    <img src="assets/img/tacno.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAd;