import React, { Component } from "react";
import Slider from "react-slick";
// import "./gameslider.css";
export default class AutoPlayblogs extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
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

    const blogslider = [
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
      {
        buttonfrist: "Read more",
        buttonsecond: "Read more",
        image: "https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp",
        name: "Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange",
        paragraph:
          "The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...",
      },
    ];
    return (
      <div>
        {/* <h2 class="title">
          Voices of Our <span class="cus_title">Satisfied Clients</span>
        </h2> */}

        <Slider {...settings}>
          {blogslider.map((item, index) => (
            <div key={index}>
              <div
                className="items-blog-slider"
                style={{
                  background:
                    'url("https://www.osiztechnologies.com/asset/inner-pages-new/blog/trending-bg.webp")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="trending_box-blog-slider">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="sub_title-blogs">
                        {item.name}
                      </div>
                      <p className="sub_contents-blog">
                        {item.paragraph}
                      </p>
                      {/* <div className="readmore_btn_sec">
                        <a
                          className="btn BtnPrimry TlkBtn readmore_btn"
                          target="_blank"
                        >
                          <span>{item.buttonfrist}</span>
                          <span>{item.buttonsecond}</span>
                        </a>
                      </div> */}
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="img_sec-blog">
                        <img
                          src={item.image}
                          alt
                          title="Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
