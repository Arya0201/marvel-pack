import React from 'react'
import "./About.css"
import AboutUsImg from './../../assets/home-about-03.png'
import AirPlaneImg from './../../assets/airplane.png'

const About = () => {
  return (
    <section className='about'>
        <div className="container">
            <div className="about-us-img">
                <img src={AboutUsImg} alt="about-us-imag"  />
            </div>

            <div className="about-us-wrapper">
                <div className="section-title">
                    <h1>Marvel Pack Industries</h1>
                    <span className='sline'>About us</span>
                    <h2>Marvel Pack Industries</h2>
                </div>
                <div className="about-us-text">
                    <p><strong>We are one of the famous Manufacturer and Supplier of the wide assortment of the Food Packaging Box, Corrugated Box, Printed Packaging Box, Paper Bag, etc.</strong></p>
                    <p>Our product range includes Paper Popcorn Box, Printed Cake Box, Corrugated Pizza Box, Ice Cream Packaging Box, French Fry Box, Corrugated Handle Box, 7 Ply Corrugated Box, Die Cut Corrugated Box, UN Approved Corrugated Box, Laminated Corrugated Box, Incense Stick Box and much more.</p>
                </div>
                <div className="about-button">
                    <a className='btn' href="#">LERN MORE <img src={AirPlaneImg} alt="airplane image"  /></a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About