import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComp.css'; 
import project1 from './../assets/img/Project2.png'
import project2 from './../assets/img/Project3.png'
const SliderComp= () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={project1} alt="Image 1" />
            </div>
            <div>
                <img src={project2} alt="Image 2" />
            </div>
            // قم بإضافة مزيد من الصور هنا
        </Slider>
    );
}

export default SliderComp;