import React, { Component } from "react";
import Slider from "react-slick";
import './slick/slick.css'; 
import './slick/slick-theme.css';
import './css/main.css';
import Hyderabad from './photos/Hyderabad.svg';
import Mumbai from './photos/Mumbai.svg';
import Banglore from './photos/Bangalore.svg';
import Delhi from './photos/New Delhi.svg';
import Chennai from './photos/Chennai.svg';




export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div  >
        <h2 class="cityname">Top cities</h2>
        <Slider {...settings}>
          <div class="a">
            <img class="cities" src={Hyderabad} alt="img not found"/>
            <h3 class="names">Hyderabad</h3>
          </div>
          <div  class="a">
            <img class="cities" src={Mumbai} alt="img not found"/>
            <h3 class="names" >Mumbai</h3>
          </div>
          <div  class="a">
            <img class="cities" src={Banglore} alt="img not found"/>
            <h3 class="names">Banglore</h3>
          </div>
          <div  class="a"> 
            <img class="cities" src={Delhi} alt="img not found"/>
            <h3 class="names">Delhi</h3>
          </div>
          <div  class="a"> 
            <img class="cities" src={Chennai} alt="img not found"/>
            <h3 class="names">Chennai</h3>
          </div>
          <div  class="a"> 
            <img class="cities" src={Hyderabad} alt="img not found"/>
            <h3></h3>
          </div>
          <div  class="a"> 
            <img class="cities" src={Hyderabad} alt="img not found"/>
            <h3></h3>
          </div>
          <div  class="a">
            <img class="cities" src={Hyderabad} alt="img not found"/>
            <h3></h3>
          </div>
          <div  class="a">
            <img class="cities" src={Hyderabad} alt="img not found"/>
            <h3></h3>
          </div>
        </Slider>
      </div>
    );
  }
}