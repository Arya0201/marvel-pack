import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ssImage1 from'./../../../assets/slidshow1.jpg';
import ssImage2 from'./../../../assets/slidshow2.jpg';
import ssImage3 from'./../../../assets/slidshow3.jpg';
import ssImage4 from'./../../../assets/slidshow4.jpg';
import ssImage5 from'./../../../assets/slidshow5.jpg';
import "./Slider.css"

const Slider = () => {
    let slideImages = [ssImage1, ssImage2, ssImage3, ssImage4, ssImage5];
    const slideProperties = {
        duration: 3000, // Set the duration in milliseconds (e.g., 3000 milliseconds = 3 seconds)
        transitionDuration: 1000,
        infinite: true
    };
    return (
        <div className='slideShowContainer'>
            <Slide {...slideProperties}>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slideImage} alt="slideshowimage" />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slider;