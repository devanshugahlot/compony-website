import React, { Component } from "react";
import Slider from "react-slick";
import './RelatedPortfolioSlider.css'

export default class RelatedPortfolioSlider extends Component {


    render() {
        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]
            //    cssEase: "linear"
        }


        return (
            <div className="RelatedPortfolioSlider-main-div">
                <div className="RelatedPortfolioSlider-div">
                    <Slider {...settings}>
                        <div>
                            <div className="PrjctExmplsImg">
                                <img
                                    data-toggle="modal"
                                    data-target="#portfolio_modal"
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio1.webp"
                                    alt="Game Portfolio1"
                                    title="Game Portfolio1"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal" data-src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio3.webp" alt="Game Portfolio3" title="Game Portfolio2" loading="eager" className="img-fluid lazyload" src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio3.webp" />

                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal" data-src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio2.webp" alt="Game Portfolio2" title="Game Portfolio3" loading="eager" className="img-fluid lazyload" src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio2.webp" />

                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal" src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio1.webp" alt="Game Portfolio1" title="Game Portfolio4" loading="eager" className="img-fluid lazyload" />

                            </div>
                        </div>

                        <div>
                            <div className="PrjctExmplsImg">
                                <img data-toggle="modal" data-target="#portfolio_modal" data-src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio5.webp" alt="Game Portfolio5" title="Game Portfolio5" loading="eager" className="img-fluid lazyloaded" src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio5.webp" />

                            </div>
                        </div>

                    </Slider>
                </div>
            </div>

        );
    }
}


// <div className="PrjctExmpls slider">
//     <div>
//         <div className="PrjctExmplsImg">
//             <img
//                 data-toggle="modal"
//                 data-target="#portfolio_modal"
//                 src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio1.webp"
//                 alt="Game Portfolio1"
//                 title="Game Portfolio1"
//                 loading="eager"
//                 className="img-fluid lazyload"
//             />
//         </div>
//     </div>
//     <div>
//         <div className="PrjctExmplsImg">
//             <img
//                 data-toggle="modal"
//                 data-target="#portfolio_modal"
//                 src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio2.webp"
//                 alt="Game Portfolio2"
//                 title="Game Portfolio2"
//                 loading="eager"
//                 className="img-fluid lazyload"
//             />
//         </div>
//     </div>
//     <div>
//         <div className="PrjctExmplsImg">
//             <img
//                 data-toggle="modal"
//                 data-target="#portfolio_modal"
//                 src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio3.webp"
//                 alt="Game Portfolio3"
//                 title="Game Portfolio3"
//                 loading="eager"
//                 className="img-fluid lazyload"
//             />
//         </div>
//     </div>
//     <div>
//         <div className="PrjctExmplsImg">
//             <img
//                 data-toggle="modal"
//                 data-target="#portfolio_modal"
//                 src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio4.webp"
//                 alt="Game Portfolio4"
//                 title="Game Portfolio4"
//                 loading="eager"
//                 className="img-fluid lazyload"
//             />
//         </div>
//     </div>
//     <div>
//         <div className="PrjctExmplsImg">
//             <img
//                 data-toggle="modal"
//                 data-target="#portfolio_modal"
//                 src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio5.webp"
//                 alt="Game Portfolio5"
//                 title="Game Portfolio5"
//                 loading="eager"
//                 className="img-fluid lazyload"
//             />
//         </div>
//     </div>
//     <div>
//         <div className="PrjctExmplsImg">
//             <img
//                 data-toggle="modal"
//                 data-target="#portfolio_modal"
//                 src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio6.webp"
//                 alt="Game Portfolio6"
//                 title="Game Portfolio6"
//                 loading="eager"
//                 className="img-fluid lazyload"
//             />
//         </div>
//     </div>
// </div>