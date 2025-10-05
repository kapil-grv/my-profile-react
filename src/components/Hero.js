import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="colorlib-hero js-fullheight" data-section="home">
            <div className="hero-container">
                <div
                    className="hero-slide"
                    style={{ backgroundImage: 'url(/images/img_bg_1.jpg)' }}
                >
                    {/* <div className="overlay"></div> */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{ top: '10rem', left: '10rem' }}>
                                <div className="slider-text-inner js-fullheight">
                                    <div className="desc">
                                        <h1>Hey there !</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
