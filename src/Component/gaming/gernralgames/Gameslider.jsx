import React, { Component } from "react";
import Slider from "react-slick";
import "./gameslider.css";
export default class AutoPlaygame extends Component {
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
          "https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service1.webp",
        name: "Web3 Game Development",
        paragraph:
          "Utilizing blockchain technologies, our group of video game developers constructs secure and decentralized Web3 games. Our specialization includes decentralized governance, player ownership, and the provision of fair gameplay experiences.",
      },
      {
        image:
          " https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service2.webp",
        name: "NFT Game Development",
        paragraph:
          "Specializing in NFT-infused games, we elevate in-game assets with real-world significance. By utilizing top-tier blockchains, we empower players to craft, trade, and vend NFTs directly within the gaming ecosystem.",
      },
      {
        image:
          "https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service3.webp",
        name: "Metaverse Game Development",
        paragraph:
          "As a premier video game development company, we strongly prioritize the creation of immersive metaverse games that evolve in sync with their communities. We encompass all the top metaverse features, including interactivity, user-generated content, and social connectivity.",
        },
        {
            image:
              "https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service4.webp",
            name: "Blockchain Game Development",
            paragraph:
              "Covering a spectrum of blockchain game development solutions, our team offers services that span from incorporating smart contracts to conducting security audits. Our blockchain gaming projects encompass the integration of player-centric economies and the implementation of secure in-game transactions.",
          },
    ];
    return (
      <div>
        {/* <h2 class="title">
          Voices of Our <span class="cus_title">Satisfied Clients</span>
        </h2> */}

        <Slider {...settings}>
          {sliderdata.map((item, index) => (
            <div>
              <div key={index} className="item-2">
                <a href={item.link} target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img
                        src={item.image}
                        className="img-fluid lazyload"
                        alt={item.altText}
                        title={item.title}
                      />
                    </div>
                    <h3 className="sub_title">{item.name}</h3>
                    <p className="sub_contents">{item.paragraph}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
