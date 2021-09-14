import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="homepagePath/assets/images/portfolio/portfolio-1.jpg" alt="Recent works images" />;
const Portfolio_image2 = <img src="homepagePath/assets/images/portfolio/portfolio-2.jpg" alt="Recent works images" />;
const Portfolio_image3 = <img src="homepagePath/assets/images/portfolio/portfolio-3.jpg" alt="Recent works images" />;
const Portfolio_image4 = <img src="homepagePath/assets/images/portfolio/portfolio-4.jpg" alt="Recent works images" />;
const Portfolio_image5 = <img src="homepagePath/assets/images/portfolio/portfolio-5.jpg" alt="Recent works images" />;
const Portfolio_image6 = <img src="homepagePathassets/images/portfolio/portfolio-6.jpg" alt="Recent works images" />;
const Portfolio_image7 = <img src="homepagePath/assets/images/portfolio/portfolio-7.jpg" alt="Recent works images" />;
const Portfolio_image8 = <img src="homepagePath/assets/images/portfolio/portfolio-8.jpg" alt="Recent works images" />;
const Portfolio_image9 = <img src="homepagePath/assets/images/portfolio/portfolio-9.jpg" alt="Recent works images" />;

const PortfolioListContent = [
    {
        image: Portfolio_image,
        category: 'Mobile Experience Research',
        title: 'Email Marketing',
        link: 'https://adobe.ly/2Yzg5EK'
    },
    {
        image: Portfolio_image2,
        category: 'Landing Page',
        title: 'Web Design',
        link: 'https://adobe.ly/3tzuoVg'
    },
    {
        image: Portfolio_image3,
        category: 'Designs',
        title: 'Graphic Design',
        link: 'https://bit.ly/3k3gO9t'
    },
    {
        image: Portfolio_image4,
        category: 'Template Development',
        title: 'Email Marketing',
        link: 'https://bit.ly/2XanidN'
    },
    {
        image: Portfolio_image5,
        category: 'Landing Page',
        title: 'Web Design',
        link: 'https://bit.ly/3k6lZ8K'
    },
    {
        image: Portfolio_image6,
        category: 'Landing Page',
        title: 'Web Design',
        link: 'https://bit.ly/3k3jiVl'

    },
    {
        image: Portfolio_image7,
        category: 'Landing Page',
        title: 'Web Design',
        link: 'https://adobe.ly/2XbgcWC'

    },
    {
        image: Portfolio_image8,
        category: 'Landing Page',
        title: 'Web Design',
        link: 'https://adobe.ly/2XbumqL'

    },
    {
        image: Portfolio_image9,
        category: 'Landing Page',
        title: 'Web Design',
        link: 'https://adobe.ly/3C5d7X3'

    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">
                                    <a href={value.link} target="_blank">
                                        {value.image}
                                    </a>    
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">
                                            <a href={value.link} target="_blank">{value.category}</a>
                                        </div>
                                        <h4 className="title"><a href={value.link} target="_blank">{value.title}</a></h4>
                                    </div>
                                </div>
                            </div>
                            <a className="transparent_link" href={value.link} target="_blank"></a>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;