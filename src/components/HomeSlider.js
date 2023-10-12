import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/1pic.jpg"; 
import image2 from "../images/2pic.jpg";
import image3 from "../images/3pic.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // 자동 재생 활성화
      autoplaySpeed: 3000, // 3초마다 넘어가도록 설정 (밀리초 단위)
    };

    return (
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div>
          <h2>Single Item</h2>
          <Slider {...settings}>
            <div>
              <img
                src={image1}
                alt="Image 1"
                style={{ width: '100%', maxWidth: '100%', height: '100px' }} 
              />
            </div>
            <div>
              <img
                src={image2}
                alt="Image 2"
                style={{ width: '100%', maxWidth: '100%', height: '100px' }} 
              />
            </div>
            <div>
              <img
                src={image3}
                alt="Image 3"
                style={{ width: '100%', maxWidth: '100%', height: '100px' }} 
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}