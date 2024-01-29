import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlaycrosschain extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
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
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT for Art",
        paragraph:
          "Join the NFT revolution and empower artists by offering them a secure platform to showcase their work to a discerning audience, ensuring fair value and protected ownership. Participate in the vibrant world of non-fungible tokensand support the artistic community.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT for Art",
        paragraph:
          "Join the NFT revolution and empower artists by offering them a secure platform to showcase their work to a discerning audience, ensuring fair value and protected ownership. Participate in the vibrant world of non-fungible tokensand support the artistic community.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT for Art",
        paragraph:
          "Join the NFT revolution and empower artists by offering them a secure platform to showcase their work to a discerning audience, ensuring fair value and protected ownership. Participate in the vibrant world of non-fungible tokensand support the artistic community.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT for Art",
        paragraph:
          "Join the NFT revolution and empower artists by offering them a secure platform to showcase their work to a discerning audience, ensuring fair value and protected ownership. Participate in the vibrant world of non-fungible tokensand support the artistic community.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/nft-marketplace-development/usecase-icons.svg",
        name: "NFT for Art",
        paragraph:
          "Join the NFT revolution and empower artists by offering them a secure platform to showcase their work to a discerning audience, ensuring fair value and protected ownership. Participate in the vibrant world of non-fungible tokensand support the artistic community.",
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
          <div className="usecase_box ">
            <div className="head_sec">
              <img src= {item.image} className="sprite_icons" alt="NFT for Art" title="NFT for Art" style={{objectPosition: '0px 0px'}} />
              <div className="head_sec">
                                  <h3 className="sub_title">{item.name }</h3>
              </div>
            </div>
                          <p className="sub_contents">{item.paragraph }</p>
          </div>
        </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
