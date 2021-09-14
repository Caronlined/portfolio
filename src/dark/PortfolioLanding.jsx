import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import BlogContent from "../elements/blog/BlogContent";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: 'Download CV',
        buttonLink: 'https://apple.com'
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = '';
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark bg_color--9">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">I’m Carolina Dato <br/>
                                            <TextLoop>
                                                <span> Web Designer.</span>
                                                <span> Multimedia Designer.</span>
                                                <span> UI/UX Designer.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2> </h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--30"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`} target='_blank'>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--8">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/me-photo.jpg" alt="About Me image"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">Know more</span>
                                            <h2 className="title mb--10">{title}</h2>
                                        </div>
                                        <div className="row mt--20">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area pb--120 bg_color--8">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">Some Of My </span>
                                        <h2 className="title">Recent Works</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="9" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}


            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area pb--120 bg_color--8">
                    <ContactThree contactImages="/assets/images/about/contact-me.png" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End Contact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
