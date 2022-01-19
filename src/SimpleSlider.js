import React, { Component } from "react";
import Slider from "react-slick";
import "./sass/slider.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div id="slider">
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              alt="house-1"
              srcset="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              alt="house-1"
              src="https://www.incimages.com/uploaded_files/image/970x450/getty_856794670_385651.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              alt="house-2"
              src="https://photos.zillowstatic.com/p_e/ISm6rbbdqbfude0000000000.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              alt="house-3"
              src="https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              alt="house-5"
              src="https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
