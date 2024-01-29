import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaypancake extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      //    cssEase: "linear"
    };

    const sliderdata = [
      {
        image: "https://www.osiztechnologies.com/asset/metaverse-dev/boy.png",
        paragraph: " Osiz Tech is the Best above the Rest!",
        paragraph1: "Manid Chimhoga",
        paragraph2: "  Financial Advisor at Liberty Life",
        paragraph3:
          "I have been working with Osiz Technologies for over five months right now and I have been very satisfied with the outcome of the work produced by them. I have dealt with Business Analyst, an excellent professional and with very good customer service. I emphasize the wide knowledge in the type of platform that they developed to me, as well as the flexibility during the development of the project.",
      },

      {
        image: "https://www.osiztechnologies.com/asset/metaverse-dev/boy.png",
        paragraph: " Osiz Tech is the Best above the Rest!",
        paragraph1: "Manid Chimhoga",
        paragraph2: "  Financial Advisor at Liberty Life",
        paragraph3:
          "I have been working with Osiz Technologies for over five months right now and I have been very satisfied with the outcome of the work produced by them. I have dealt with Business Analyst, an excellent professional and with very good customer service. I emphasize the wide knowledge in the type of platform that they developed to me, as well as the flexibility during the development of the project.",
      },
      {
        image: "https://www.osiztechnologies.com/asset/metaverse-dev/boy.png",
        paragraph: " Osiz Tech is the Best above the Rest!",
        paragraph1: "Manid Chimhoga",
        paragraph2: "  Financial Advisor at Liberty Life",
        paragraph3:
          "I have been working with Osiz Technologies for over five months right now and I have been very satisfied with the outcome of the work produced by them. I have dealt with Business Analyst, an excellent professional and with very good customer service. I emphasize the wide knowledge in the type of platform that they developed to me, as well as the flexibility during the development of the project.",
      },
      {
        image: "https://www.osiztechnologies.com/asset/metaverse-dev/boy.png",
        paragraph: " Osiz Tech is the Best above the Rest!",
        paragraph1: "Manid Chimhoga",
        paragraph2: "  Financial Advisor at Liberty Life",
        paragraph3:
          "I have been working with Osiz Technologies for over five months right now and I have been very satisfied with the outcome of the work produced by them. I have dealt with Business Analyst, an excellent professional and with very good customer service. I emphasize the wide knowledge in the type of platform that they developed to me, as well as the flexibility during the development of the project.",
      },
      {
        image: "https://www.osiztechnologies.com/asset/metaverse-dev/boy.png",
        paragraph: " Osiz Tech is the Best above the Rest!",
        paragraph1: "Manid Chimhoga",
        paragraph2: "  Financial Advisor at Liberty Life",
        paragraph3:
          "I have been working with Osiz Technologies for over five months right now and I have been very satisfied with the outcome of the work produced by them. I have dealt with Business Analyst, an excellent professional and with very good customer service. I emphasize the wide knowledge in the type of platform that they developed to me, as well as the flexibility during the development of the project.",
      },
    ];
    return (
      <div>
        {/* <h2 class="title">
          Voices of Our <span class="cus_title">Satisfied Clients</span>
        </h2> */}

        <Slider {...settings}>
          {sliderdata.map((item, index) => (
            <div key={index}>
              <div className="item">
                <div className="testMoLst">
                  <div className="testMoImgBg">
                    <img
                      src={item.image}
                      alt={`Slider Image ${index}`}
                      className="img-fluid"
                    />
                  </div>
                  <p className="testMoLstRev">{item.paragraph3}</p>
                  <p className="testMoLstTlt">{item.paragraph}</p>
                  <p className="testMoLstGard">{item.paragraph1}</p>
                  <p className="testMoLstCnt">{item.paragraph2}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
