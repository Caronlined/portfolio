import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Experience",
        tab2 = "Education",
        tab3 = "Main skills",
        tab4 = "Certifications";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                                <li>
                                                   <a>Project Manager Team Leader<span> - Lenovo</span></a> 2021 - Current
                                               </li>
                                               <li>
                                                   <a>Ssr. Web Designer<span> - Lenovo</span></a> 2018 - 2021
                                               </li>
                                               <li>
                                                   <a>Web Multimedia Designer<span> - Next Publicidad</span></a> 2018
                                               </li>
                                               <li>
                                                   <a>Graphic Web Designer<span> - Ukelele Growth Marketing</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a>Multimedia Designer<span> - PMovil </span></a> 2015 - 2017
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Technical Multimedia Design<span> - Escuela Da Vinci</span></a> 2012 - 2017
                                               </li>
                                               <li>
                                                   <a>English Language and Literature<span> - Cambridge and AACI Diplomas</span></a> 2000 - 2011
                                               </li>
                                               <li>
                                                   <a>French Language and Literature<span> - Alliance Française Diplomas</span></a> 2000 - 2011
                                               </li>
                                                <li>
                                                   <a>High School with Communications Study<span> - Instituto Euskal Echea</span></a> 2007 - 2011
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">Web Designing</h6>
                                                    <ProgressBar now={90} />
                                                    <span className="label">90%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Email Marketing</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">User Interface Design</h6>
                                                    <ProgressBar now={75} />
                                                    <span className="label">75%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Multimedia</h6>
                                                    <ProgressBar now={60} />
                                                    <span className="label">60%</span>
                                                </div>
                                                <div className="single-progress">
                                                    <h6 className="title">Front-end Development</h6>
                                                    <ProgressBar now={50} />
                                                    <span className="label">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                                <li>
                                                   <a href="/assets/images/diploma-award.pdf" target="_blank">Team Excellence Award<span> - Lenovo</span></a> 2021
                                               </li>
                                                <li>
                                                   <a href="https://crehana.com/diplomas/f6002a67" target="_blank">Diploma in Advertising Photomontage<span> - Crehana</span></a> 2021
                                               </li>
                                               
                                                <li>
                                                   <a>Diploma Award<span> - Lenovo</span></a> 2019
                                               </li>
                                               <li>
                                                   <a>Diploma in Community Management<span> - Capacitarte</span></a> 2018
                                               </li>
                                               <li>
                                                   <a href="https://www.coderhouse.com/certificados/5afae1023af1b7000438afb9" target="_blank">Diploma in UX Design<span> - Coderhouse</span></a> 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;