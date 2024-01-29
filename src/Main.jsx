import React from "react";
import "./main.css";
import "./Component/MetaversDevelopment/MetaverseDevelopment.css";

// import AboutWhoWeAre from "./AboutWhoWeAre";
// import ReactSlick from "./ReactSlick";
// import Autoplay from "./pages/ReactSlick/ReactS/lick";

// import RelatedPortfolioSlider from "./RelatedPortfolioSlider/RelatedPortfolioSlider";
import SimilarFile from "./Component/SimilarFile";
import AboutForm from "./Component/MainPage/AboutForm";
import AboutUsWhoWeAre from "./Component/MainPage/AboutUsWhoWeAre";
// import SimilarFile from "./SimilarFile";
const Main = () => {
  return (
    <div style={{ background: "black" }}>
      <div className="Main-section MnuPaddTop">
        <section className="BnnrSecMain" id="homebanner">
          <div className="container-fluid pl-0 pr-0">
            <div className="VideoWrper VidoFltr">
              <video autoPlay muted loop playsInline preload="metadata">
                <source
                  src="https://www.osiztechnologies.com/asset/home-page-new/images/video-bnr-new.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="VidoCnt">
                <div>
                  <div className="BnrCnt bnrVideoTop">
                    <h2 className="mb-lg-2 text">Web & App</h2>
                    <span className="typed-cursor">|</span>
                    <h2>
                      <span className="TxtGrdnt" data-shine="Development">
                        Development
                      </span>{" "}
                      <span className="Fw-600 ">Company</span>
                    </h2>
                    <p>
                      Enhance your business efficiency with our personalized
                      end-to-end solutions,
                      <br /> meticulously designed to cater to your specific
                      needs.
                    </p>
                  </div>

                  {/* <div className="HddrBtns banner_btn_sec">
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn BtnPrimry TlkBtn"
                  >
                    <span>
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      />
                      Talk to our Experts
                    </span>
                    <span>
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                        alt="enquiry"
                        loading="eager"
                        className="img-fluid lazyload mr-2"
                      />
                      Talk to our Experts
                    </span>
                  </button>
                </div> */}
                  <div className="row justify-content-center">
                    <div className=" col-lg-12">
                      <div>
                        <p
                          className="upper-heading"
                          style={{ fontSize: 18, textTransform: "uppercase" }}
                        >
                          Be the pioneer of the digital world
                        </p>
                      </div>
                      <div className="four-box row w-75 ">
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">350+</p>
                            <p className="vdoCntLstTlt">Developers</p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">1500+</p>
                            <p className="vdoCntLstTlt">Projects Delivered</p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">15+</p>
                            <p className="vdoCntLstTlt">Years of Expertise</p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-6">
                          <div className="vdoCntLst">
                            <p className="vdoCntLstCount">75+</p>
                            <p className="vdoCntLstTlt">Countries Served</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <AboutForm />
                </div>
              </div>
              <div className="GrdentBg" />
            </div>
          </div>
        </section>
        <section>
          <AboutUsWhoWeAre />
          {/* <AboutWhoWeAre/> */}
        </section>

        <section className="MtaverseSec DapsMainBg TechStk">
          <div className="container container-1170">
            {/* <div class="OurSrvcHdd mb-lg-3">
					<h6>Technology Stack</h6>
				</div> */}
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className=" ">
                Ignite
                <span className="Txt8282 px-2">
                  Innovation With the power of Our
                </span>
                Tech Stack
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-2 order-lg-2">
                <div
                  className="nav flex-column nav-pills VrtclTbb"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    data-toggle="pill"
                    data-target="#TechStkTbb1"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb1"
                    aria-selected="true"
                  >
                    Web
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb2"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb2"
                    aria-selected="false"
                  >
                    Mobile
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb3"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb3"
                    aria-selected="false"
                  >
                    Desktop Apps
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb4"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb4"
                    aria-selected="false"
                  >
                    Blockchain
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb5"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb5"
                    aria-selected="false"
                  >
                    Blockchain Tools
                  </button>
                  <button
                    className="nav-link"
                    data-toggle="pill"
                    data-target="#TechStkTbb6"
                    type="button"
                    role="tab"
                    aria-controls="TechStkTbb5"
                    aria-selected="false"
                  >
                    Game
                  </button>
                </div>
              </div>
              <div className="col-lg-10 order-lg-1">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="TechStkTbb1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon14.webp "
                                    alt="Nuxt Js"
                                    title="Nuxt Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Nuxt Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon13.webp "
                                    alt="Next Js"
                                    title="Next Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Next Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={300}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon3.webp "
                                    alt="Express Js"
                                    title="Express Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Express Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon2.webp "
                                    alt="Node Js"
                                    title="Node Js"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Node Js</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={800}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon8.webp "
                                    alt="Angular JS"
                                    title="Angular JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={400}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon4.webp "
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={500}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon5.webp "
                                    alt="JQuery"
                                    title="JQuery"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>JQuery</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={600}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon6.webp "
                                    alt="My Sql"
                                    title="My Sql"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>My Sql</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={700}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon7.webp "
                                    alt="PHP"
                                    title="PHP"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>PHP</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon1.webp "
                                    alt="Laravel"
                                    title="Laravel"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Laravel</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={900}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon9.webp "
                                    alt="Codeigniter"
                                    title="Codeigniter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Codeigniter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1200}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon12.webp "
                                    alt="Bootstrap"
                                    title="Bootstrap"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Bootstrap</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1000}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon10.webp "
                                    alt="HTML 5"
                                    title="HTML 5"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>HTML 5</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div
                                className="TechStkIconBox text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={1100}
                              >
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/tech-stk-icon11.webp "
                                    alt="CSS 3"
                                    title="CSS 3"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>CSS 3</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Web</h3>
                          <p>
                            Web tech stacks are like toolkits for building
                            modern websites and applications. They include
                            different technologies and tools that developers use
                            to create websites that are strong, scalable, and
                            can work well on various devices. It's like having a
                            set of building blocks that make it easier to
                            construct a robust and flexible website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb2"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-10.webp "
                                    alt="Flutter"
                                    title="Flutter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Flutter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-4.webp "
                                    alt="Kotlin"
                                    title="Kotlin"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Kotlin</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-5.webp "
                                    alt="Swift"
                                    title="Swift"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Swift</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-1.webp "
                                    alt="Android Studio"
                                    title="Android Studio"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Android Studio</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-2.webp "
                                    alt="iOS"
                                    title="iOS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>iOS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-3.webp "
                                    alt="Android"
                                    title="Android"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Android</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-6.webp "
                                    alt="Java"
                                    title="Java"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Java</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-7.webp "
                                    alt="Jetpack"
                                    title="Jetpack"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Jetpack</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-8.webp "
                                    alt="Ionic"
                                    title="Ionic"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Ionic</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-9.webp "
                                    alt="ReactJS"
                                    title="ReactJS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>ReactJS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-11.webp "
                                    alt="Codeigniter"
                                    title="Codeigniter"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Codeigniter</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/mob-12.webp "
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Mobile</h3>
                          <p>
                          A mobile tech stack is a mix of software and programming languages that developers use to create mobile apps. It includes tools for building the visible parts of the app (front-end) and the behind-the-scenes functionality (back-end), along with additional resources like libraries and frameworks. It's like a toolbox that developers use to build and enhance mobile applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb3"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-1.webp "
                                    alt="React JS"
                                    title="React JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>React JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-2.webp "
                                    alt="NW.JS"
                                    title="NW.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>NW.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-3.webp "
                                    alt="App.JS"
                                    title="App.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>App.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-4.webp "
                                    alt="Meteor"
                                    title="Meteor"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Meteor</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-5.webp "
                                    alt="Proton Native"
                                    title="Proton Native"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Proton Native</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-6.webp?v1 "
                                    alt="Sevelet"
                                    title="Sevelet"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Sevelet</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-7.webp "
                                    alt="Angular 8"
                                    title="Angular 8"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular 8</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-8.webp "
                                    alt="Node JS"
                                    title="Node JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Node JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-9.webp "
                                    alt="Vue.JS"
                                    title="Vue.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Vue.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-10.webp "
                                    alt="Electron.JS"
                                    title="Electron.JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Electron.JS</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/da-11.webp "
                                    alt="Angular JS"
                                    title="Angular JS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Angular JS</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Desktop Apps</h3>
                          <p>
                          Desktop apps are like computer programs that you install on your personal computer. They come with a visual interface that lets you interact with the software and do different things. People like using desktop apps because they are fast, secure, and flexible. They're a popular choice for businesses and individuals because they offer high performance and can adapt to different needs. As technology gets better, desktop apps keep getting smarter and offering new solutions for different industries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb4"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-5.webp "
                                    alt="Solidity"
                                    title="Solidity"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Solidity</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-4.webp "
                                    alt="HyperLedger"
                                    title="HyperLedger"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>HyperLedger</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-3.webp "
                                    alt="Golang"
                                    title="Golang"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Golang</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-2.webp "
                                    alt="SmartContract"
                                    title="SmartContract"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>SmartContract</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-tech-1.webp "
                                    alt="IPFS"
                                    title="IPFS"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>IPFS</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Blockchain</h3>
                          <p>
                          Blockchain technology stacks are like building blocks that come together to form a secure and decentralized system. At the core is the blockchain protocol, ensuring the system's integrity. On top of that, various methods and programming languages are used to enable transactions and execute code. It's a structured system where each layer plays a crucial role in making blockchain technology work securely and efficiently.



                            {/* Blockchain-based tech stacks help in providing a seamless experience for users interacting with the blockchain. */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb5"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-1.webp "
                                    alt="Metamask"
                                    title="Metamask"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Metamask</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-2.webp "
                                    alt="Ganache"
                                    title="Ganache"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Ganache</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-3.webp "
                                    alt="Truffle"
                                    title="Truffle"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Truffle</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/bt-4.webp "
                                    alt="Remix"
                                    title="Remix"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Remix</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Blockchain Tools</h3>
                          <p>
                          Blockchain tools are used because they are essential for ensuring secure and transparent data management. These tools primarily create a decentralized database that cannot be tampered with, is unchangeable, and resistant to hacking. The main purpose is to maintain the integrity and security of data in a way that is trustworthy and resistant to unauthorized changes.






                            {/* This technology can be utilized for various purposes such as supply chain management, identity verification, and smart contract execution.  */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="TechStkTbb6"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="TechStkIconSec">
                          <div className="row">
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-5.webp "
                                    alt="Unity"
                                    title="Unity"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Unity</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-6.webp "
                                    alt="Unreal Engine"
                                    title="Unreal Engine"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Unreal Engine</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-1.webp "
                                    alt="React"
                                    title="React"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>React</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-2.webp "
                                    alt="NodeJs"
                                    title="NodeJs"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>NodeJs</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-3.webp "
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Mongo DB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-4.webp "
                                    alt="Public Blockchains"
                                    title="Public Blockchains"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Public Blockchains</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col mb-3">
                              <div className="TechStkIconBox text-center">
                                <div className="TechStkIcon">
                                  <img
                                    src="https://www.osiztechnologies.com/asset/home-page-new/images/game-tech-7.webp "
                                    alt="Marmalade SDK"
                                    title="Marmalade SDK"
                                    loading="eager"
                                    className="img-fluid lazyload"
                                  />
                                </div>
                                <div className="TechStkIcnCnt">
                                  <p>Marmalade SDK</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 pt-5 pl-5">
                        <div className="TchStkCnt">
                          <h3 className="h3_title">Game</h3>
                          <p>
                          Game tech stacks serve the purpose of building a strong foundation for various aspects of game development, including database management, server-side scripting, frontend, and backend development. These tech stacks are designed to ensure smooth performance, scalability, and stability, making them an ideal choice for creating a robust gaming platform. In simpler terms, they are like a toolkit that developers use to construct and maintain a gaming environment that runs smoothly and can handle the demands of players.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why_osiz_blockchain_sec">
          <div className="container">
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className=" ">
                Why MetaBlock<span className="Txt8282 px-2">is Your</span> Trusted
                {" "}
                <span className="Txt8282 px-2">Development Partner?</span>
              </h2>
            </div>
            <div className="why_osiz_blockchain_card">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12" />
                <div className="col-lg-6 col-12">
                  <p className="contents">
                  MetaBlock Technologies, drawing upon extensive experience and proficiency in blockchain development, stands as a reliable industry partner. Harnessing the capabilities of cutting-edge technologies such as Ethereum, Hyperledger, and Stellar, we specialize in crafting secure and scalable blockchain applications tailored to diverse business needs. Our commitment to a customer-centric approach ensures open communication and collaboration throughout the project lifecycle, promoting transparency and timely project delivery. Choosing MetaBlock Technologies as your blockchain development partner guarantees high-quality solutions that seamlessly propel your business operations into the decentralized future.

                  </p>
                  <div className="HddrBtns mt-4">
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn BtnPrimry TlkBtn"
                      target="_blank"
                    >
                      <span>
                        <img
                          src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        />
                        Talk to our Experts
                      </span>
                      <span>
                        <img
                          src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        />
                        Talk to our Experts
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="BnnerCntSec">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-xl-10">
                <div className="BnrCnt mb-3 pb-1 mt-1">
                  <div className="mb-3 cus_title">
                    <h1>
                      Blockchain
                      <span className="TxtGrdnt ml-3" data-shine="Development">
                        Development
                      </span>
                      <span className="cus_title_we">Company</span>
                    </h1>
                  </div>
                  <p>
                    Osiz Technologies, A CMMI Standard - Level 3 Blockchain
                    Development Company determined to deliver absolute
                    software-based IT solutions for Startups, Entrepreneurs,
                    Businesses, and Industries. Osiz undergoes continuous
                    research and keeps it updated with the latest cutting-edge
                    technologies to leverage the newest innovations including
                    Blockchain, Cryptocurrency, DApps, Artificial Intelligence
                    (AI), Big Data, Business Intelligence (BI), Internet of
                    Thing (IoT), AI ChatBot, Machine Learning, AR/VR, Cloud
                    computing and advanced JS Frameworks. Preceding with the
                    main focus on eliminating the client’s business
                    inefficiencies through technology, Osiz became a top-notch
                    IT software solutions provider, globally. Owning direct
                    access to high-class tools and technologies, Osiz assists
                    Global customers to achieve international brand value
                    through desired digitization.
                  </p>
                </div>
                <div className="GetBtnSec">
                  <a
                    className="btn BtnPrimry TlkBtn Btn175-44 mr-2 mb-2 btn-12"
                    href="https://www.osiztechnologies.com/request-for-quotation"
                    target="_blank"
                  >
                    <span>Get a free quote</span>
                    <span>Get a free quote</span>
                  </a>
                  <button
                    className="btn BtnPrimry TlkBtn Btn175-44 mb-2 BtnTrnsp btn-12"
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                  >
                    <span>Get a live demo</span>
                    <span>Get a live demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div className="scroll-reveal-section">
          <div className="service_head_sec">
            <div className="container container-1170">
              <div className="OurSrvcHdd">
                <div className="title">Our Services</div>
              </div>
              <div className="BnrCnt OurservHdd service_title">
                <h2>
                  Blockchain Development <br />
                  Services for your
                  <span className="Txt8282 px-2">Innovative Business</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <section className="blockchain_service_sec image-holder">
              <div className="container container-1170">
                <div className="blockchain_imgsec">
                  <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-serv-img.webp"
                    loading="eager"
                    className="img-fluid lazyload"
                    alt="Blockchain-Empower-Your-Business-Operations-With-Blockchain-Technology"
                    title="Blockchain - Empower Your Business Operations With Blockchain Technology"
                  />
                </div>
                <div className="row">
                  <div className="col-xl-7 offset-xl-5">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-md-3">
                        <h3 className="h3_title">
                          Blockchain - Empower Your Business Operations With
                          Blockchain Technology
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Enterprise Blockchain Solutions
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Blockchain Crowdfunding Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Smart Contract Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Private/Public Blockchain Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Blockchain P2P Lending Platform
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Blockchain AI Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Token Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DAO Blockchain Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="35%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Blockchain
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section className="MtaverseSec image-holder">
              <div className="container container-1170">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-md-4">
                        <h3 className="h3_title">
                          Metaverse - Enter the world beyond imagination with
                          Metaverse.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Metaverse Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse 3D Spaces Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Token Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Game Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse E-commerce Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse NFT Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Solutions for Industries
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Integration Services
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Social Media Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Metaverse Event Platform Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="35%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Metaverse
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="MtrvrRtImg MxBlndLight MtrvrRtImg_cus_img">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/mtvr-rt-img.webp?v1"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse - Enter The World Beyond Imagination With Metaverse"
                      title="Metaverse - Enter The World Beyond Imagination With Metaverse"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section className="MtaverseSec NftMainSec image-holder">
              <div className="container container-1170">
                <div className="row">
                  <div className="MtrvrRtImg NftRtImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/nft-rt-img.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="NFT - Digitalize and own one-of-a-kind assets, forever in your secure wallet"
                      title="NFT - Digitalize and own one-of-a-kind assets, forever in your secure wallet"
                    />
                  </div>
                  <div className="col-xl-7 offset-xl-5">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 className="h3_title">
                          NFT - Digitalize and own one-of-a-kind assets, forever
                          in your secure wallet.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">NFT Token Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Gaming Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Art Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Music Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Launchpad Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Exchange Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Celebrity NFT Marketplace Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            NFT Staking &amp; Lending Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cross-Chain NFT Marketplace Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd NftSvgTxt">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="45%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Non-Fungible Token
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section className="MtaverseSec DefiMainBg image-holder">
              <div className="container container-1170">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 className="h3_title">
                          Defi - Defy traditional finance with the DeFi
                          revolution.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Decentralized Finance (DeFi) Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Lending/ Borrowing Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Smart Contract Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">DeFi DApp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">DeFi Token Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">DeFi Wallet Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Insurance Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Staking Platform Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Yield Farming Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Solutions for Industries
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            DeFi Crypto Synthetic Assets Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="45%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Decentralized Finance
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="MtrvrRtImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/defi-rt-img.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Defi - Defy traditional finance with the DeFi revolution"
                      title="Defi - Defy traditional finance with the DeFi revolution"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section className="MtaverseSec DapsMainBg dapp_bg image-holder">
              <div className="container container-1170">
                <div className="row">
                  <div className="MtrvrRtImg NftRtImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/daps-rt-img.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="DApp - Decentralize your business with our DApp today"
                      title="DApp - Decentralize your business with our DApp today"
                    />
                  </div>
                  <div className="col-xl-7 col-12 offset-xl-5">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 className="h3_title">
                          DApp - Decentralize your business with our DApp today
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Solana Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">EOS Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Cosmos Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Ethereum Dapp Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Binance smart chain Dapp Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Matic Dapp Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Sports Betting Dapp Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Tron Dapp Development</div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd LtrSpcNorml">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="15%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            DApps
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section className="MtaverseSec CryptoMainBg crypto_bg image-holder">
              <div className="container container-1170">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 className="h3_title">
                          Crypto Exchange - Secure, decentralized, and
                          limitless: enter the world of cryptocurrency.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Altcoin Creation Services
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Stablecoin Development</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency Exchange Software Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Decentralized Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Centralized Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Hybrid Crypto Exchange Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency MLM Software Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency Exchange App Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Cryptocurrency Wallet Development
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            Crypto Payment Gateway Development
                          </div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="38%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Crypto Currency
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="MtrvrRtImg">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/crypto-rt-img.webp?v1"
                        loading="eager"
                        className="img-fluid lazyload"
                        alt="Crypto Exchange - Secure, decentralized, and limitless: enter the world of cryptocurrency"
                        title="Crypto Exchange - Secure, decentralized, and limitless: enter the world of cryptocurrency"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section className="MtaverseSec DapsMainBg ExchngeSec exchg_bg image-holder">
              <div className="container container-1170">
                <div className="row">
                  <div className="MtrvrRtImg NftRtImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/exchnge-rt-img.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Exchange Clone - Revamp your trading potential with Exchange Clone"
                      title="Exchange Clone - Revamp your trading potential with Exchange Clone"
                    />
                  </div>
                  <div className="col-xl-7 offset-xl-5">
                    <div className="CmmnSdCnt">
                      <div className="MtavCntHdd my-4">
                        <h3 className="h3_title">
                          Exchange Clone - Revamp your trading potential with
                          Exchange Clone.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Binance Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">
                            LocalBitcoins Clone Script
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Remitano Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Paxful Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Poloniex Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Coinbase Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Wazirx Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Bitstamp Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">ByBit Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">IDEX Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Kucoin Clone Script</div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="MtavCnt">Bitfinex Clone Script</div>
                        </div>
                      </div>
                      <div className="CmmnSdHdd">
                        <svg
                          height={100}
                          strokeWidth={1}
                          className="text-line"
                          width="100%"
                        >
                          <text
                            x="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            y="50%"
                          >
                            Exchange
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}
        {/* <section className="mnyExpoSc blockchain_dev_sec">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div>
                  <div className="BnrCnt OurservHdd mb-4">
                    <h2 className="text-capitalize">
                      Blockchain Development
                      <span className="Txt8282 px-2">Services</span>
                    </h2>
                    <p>
                      Blockchain development services might revolutionise the
                      effectiveness and general efficiency of your business
                      operations. From custom smart contracts to
                      blockchain-based applications, we deliver cutting-edge
                      solutions that revolutionize industries and empower
                      businesses for the future.
                    </p>
                    <div className="HddrBtns blockchain_dev_btnsec mt-4">
                      <a
                        href="https://www.osiztechnologies.com/contact-us"
                        target="_blank"
                        className="btn BtnPrimry TlkBtn"
                      >
                        <span>
                          <img
                            src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                            alt="enquiry"
                            loading="eager"
                            className="img-fluid lazyload mr-2"
                          />
                          Request For Quote
                        </span>
                        <span>
                          <img
                            src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                            alt="enquiry"
                            loading="eager"
                            className="img-fluid lazyload mr-2"
                          />
                          Request For Quote
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mnyExpoScImg">
                  <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-development-service.webp"
                    loading="eager"
                    className="img-fluid lazyload"
                    alt="Blockchain Development Services"
                    title="Blockchain Development Services"
                  />
                </div>
              </div>
            </div>
            <div className="CmmnSdHdd">
              <svg
                height={100}
                strokeWidth={1}
                className="text-line"
                width="100%"
              >
                <text
                  x="45%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  y="33%"
                >
                  Blockchain
                </text>
              </svg>
            </div>
          </div>
        </section>
        <section className="blockchain_solution_sec">
          <div className="container">
            <div className="BnrCnt OurservHdd mb-lg-4">
              <h2 className=" ">
                Blockchain
                <span className="Txt8282 px-2"> Solutions for the </span>
                Enterprise
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Supplychain"
                      title="Blockchain in Supplychain"
                      style={{ objectPosition: "0px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Supplychain</div>
                  <p className="sub_contents">
                    By leveraging the immutable nature of blockchain, we create
                    transparent and traceable supply chain networks, eliminating
                    inefficiencies, reducing fraud, and enhancing trust.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Finance"
                      title="Blockchain in Finance"
                      style={{ objectPosition: "-108px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Finance</div>
                  <p className="sub_contents">
                    Unlock new opportunities for seamless cross-border payments,
                    decentralized lending, and frictionless asset management
                    with our innovative blockchain solutions for the finance
                    industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Insurance"
                      title="Blockchain in Insurance"
                      style={{ objectPosition: "-222px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Insurance</div>
                  <p className="sub_contents">
                    With blockchain, insurers can streamline claims management,
                    reduce fraud, enhance data privacy, and create smart
                    contracts that automate policy administration.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Healthcare"
                      title="Blockchain in Healthcare"
                      style={{ objectPosition: "-336px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Healthcare</div>
                  <p className="sub_contents">
                    With blockchain, healthcare providers can securely store and
                    share patient records, enabling seamless collaboration and
                    improving healthcare outcomes.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Energy Oil and Gas"
                      title="Blockchain in Energy Oil and Gas"
                      style={{ objectPosition: "-443px 0px" }}
                    />
                  </div>
                  <div className="sub_title">
                    Blockchain in Energy Oil and Gas
                  </div>
                  <p className="sub_contents">
                    With blockchain's decentralized nature, stakeholders can
                    achieve greater visibility and accountability, paving the
                    way for a more sustainable and streamlined energy ecosystem.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Retail"
                      title="Blockchain in Retail"
                      style={{ objectPosition: "-559px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Retail</div>
                  <p className="sub_contents">
                    Through blockchain, retailers can securely track and
                    authenticate products throughout the supply chain, combating
                    counterfeit goods and ensuring product authenticity.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Transportation"
                      title="Blockchain in Transportation"
                      style={{ objectPosition: "-673px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Transportation</div>
                  <p className="sub_contents">
                    By utilizing blockchain, transportation companies can track
                    and trace goods in real-time, enhancing supply chain
                    visibility and reducing delays.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="blck_sol_box1">
                  <div className="img_sec">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-solution-icons.svg"
                      loading="eager"
                      className="sprite_icons lazyload"
                      alt="Blockchain in Agriculture"
                      title="Blockchain in Agriculture"
                      style={{ objectPosition: "-787px 0px" }}
                    />
                  </div>
                  <div className="sub_title">Blockchain in Agriculture</div>
                  <p className="sub_contents">
                    Blockchain technology has immense potential to revolutionize
                    the agriculture sector through enhancing traceability,
                    reducing food fraud, improving supply chain efficiency and
                    supporting sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mnyExpoSc blockchain_dev_sec">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="mnyExpoScImg">
                  <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-app-dev.webp"
                    loading="eager"
                    className="img-fluid lazyload"
                    alt="Blockchain App Development"
                    title="Blockchain App Development"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div>
                  <div className="BnrCnt OurservHdd mb-4">
                    <h2 className="text-capitalize">
                      Blockchain App
                      <span className="Txt8282 px-2"> Development</span>
                    </h2>
                    <p>
                      OsizTechnologies is a leading Blockchain App Development
                      Company. We design and develop customized blockchain
                      development solutions using hyperledger,solidity,Cosmos
                      and EVM. We help startups and Enterprises businesses to
                      make an exciting presence in the virtual space with our
                      top-notch blockchain development services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="CmmnSdHdd">
              <svg
                height={100}
                strokeWidth={1}
                className="text-line"
                width="100%"
              >
                <text
                  x="45%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  y="50%"
                >
                  Blockchain App
                </text>
              </svg>
            </div>
          </div>
        </section>
        <section className="blockchain_process_sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="pros_head_Sec">
                  <h2 className="title">
                    Our Step by Step Blockchain Development
                    <span className="cusclr_title">Process</span>
                  </h2>
                  <p className="contents">
                    Our team of professionals talk about your requirements at
                    each phase of the project, from requirement analysis to a
                    successful launch, assist your blockchain development
                    project achieve its goals.
                  </p>
                  <div className="HddrBtns mt-4">
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn BtnPrimry TlkBtn"
                      target="_blank"
                    >
                      <span>
                        <img
                          src="https://www.osiztechnologies.com/asset/home-page-new/images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        />
                        Get A Quote
                      </span>
                      <span>
                        <img
                          src="https://www.osiztechnologies.com/asset/home-page-new//images/btn-call-icon.gif"
                          alt="enquiry"
                          loading="eager"
                          className="img-fluid lazyload mr-2"
                        />
                        Get A Quote
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="process_listsec">
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-process-icons.svg"
                        loading="eager"
                        className="sprite_icons lazyload"
                        alt="Requirement-Analysis"
                        title="Requirement Analysis"
                        style={{ objectPosition: "0px 0px" }}
                      />
                      <h3 className="sub_title">Requirement Analysis</h3>
                    </div>
                    <p className="sub_contents">
                      Our experts first discuss your requirements and goals for
                      your blockchain development project.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-process-icons.svg"
                        loading="eager"
                        className="sprite_icons lazyload"
                        alt="Blockchain-Optimisation"
                        title="Blockchain Optimisation"
                        style={{ objectPosition: "-87px 0px" }}
                      />
                      <h3 className="sub_title">Blockchain Optimisation</h3>
                    </div>
                    <p className="sub_contents">
                      We then optimize the blockchain network based on your
                      requirements.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-process-icons.svg"
                        loading="eager"
                        className="sprite_icons lazyload"
                        alt="Ideation-Icon"
                        title="Ideation"
                        style={{ objectPosition: "-174px 0px" }}
                      />
                      <h3 className="sub_title">Ideation</h3>
                    </div>
                    <p className="sub_contents">
                      We provide innovative concepts and ideas for blockchain
                      solutions and applications.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-process-icons.svg"
                        loading="eager"
                        className="sprite_icons lazyload"
                        alt="PoC-Development"
                        title="PoC Development"
                        style={{ objectPosition: "-261px 0px" }}
                      />
                      <h3 className="sub_title">PoC Development</h3>
                    </div>
                    <p className="sub_contents">
                      Our experts validate, identify the risk, and focus on the
                      features and functionalities of the project to secure
                      funding and transactions.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-process-icons.svg"
                        loading="eager"
                        className="sprite_icons lazyload"
                        alt="Testing-Icon"
                        title="Testing"
                        style={{ objectPosition: "-348px 0px" }}
                      />
                      <h3 className="sub_title">Testing</h3>
                    </div>
                    <p className="sub_contents">
                      We do rigorous testing and ensure the functionality,
                      security, and reliability of the project.
                    </p>
                  </div>
                  <div className="process_list">
                    <div className="img_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/home-page-new/images/blk-process-icons.svg"
                        loading="eager"
                        className="sprite_icons lazyload"
                        alt="Successful-Launch"
                        title="Successful Launch"
                        style={{ objectPosition: "-435px 0px" }}
                      />
                      <h3 className="sub_title">Successful Launch</h3>
                    </div>
                    <p className="sub_contents">
                      This is the final stage, where our experts deploy
                      blockchain projects for real-world use and adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="metaSlnSc">
          <div className="container container-1170">
            <div className="row">
              <div className="col-lg-8">
                <div>
                  <div className="OurSrvcHdd mb-lg-3">
                    <div className="title">Metaverse Development</div>
                  </div>
                  <div className="BnrCnt OurservHdd mb-4">
                    <h2 className="text-capitalize">
                      Our Metaverse Development
                      <span className="Txt8282 px-2">Solution</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="metaSlnScRelati">
              <div className="row">
                <div className="col-lg-7">
                  <div className="metaSlnScRelat">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item gameLi" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-toggle="pill"
                          data-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Game
                        </button>
                      </li>
                      <li className="nav-item mallLi" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          data-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Virtual Mall
                        </button>
                      </li>
                      <li className="nav-item theatreLi" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-toggle="pill"
                          data-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Theatre
                        </button>
                      </li>
                      <li className="nav-item eventLi" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-event-tab"
                          data-toggle="pill"
                          data-target="#pills-event"
                          type="button"
                          role="tab"
                          aria-controls="pills-event"
                          aria-selected="false"
                        >
                          Event Platform
                        </button>
                      </li>
                      <li className="nav-item storeLi" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-store-tab"
                          data-toggle="pill"
                          data-target="#pills-store"
                          type="button"
                          role="tab"
                          aria-controls="pills-store"
                          aria-selected="false"
                        >
                          &nbsp;Fashion Store
                        </button>
                      </li>
                      <li className="nav-item casinoLi" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-casino-tab"
                          data-toggle="pill"
                          data-target="#pills-casino"
                          type="button"
                          role="tab"
                          aria-controls="pills-casino"
                          aria-selected="false"
                        >
                          Casino
                        </button>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-lg-1" />
                      <div className="col-lg-11">
                        <div className="slnImgIndex">
                          <img
                            src="https://www.osiztechnologies.com/asset/home-page-new/images/solution-img.webp"
                            loading="eager"
                            className="img-fluid lazyload"
                            alt="Our Metaverse Development Solution"
                            title="Our Metaverse Development Solution"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="metaSlnTabCnt">
                    <p className="sml_tlt">Metaverse</p>
                    <p className="Bg_tlt">Game Development</p>
                    <p className="Cnt">
                      Delve into the world beyond reality and devise a virtual
                      twin with our Metaverse game development services. We
                      provide an immersive, interactive, and customizable
                      universe by implementing advanced technologies like
                      Virtual Reality (VR), Augmented Reality (AR), Mixed
                      Reality (MR), Web3 and Virtual Assets, Artificial
                      Intelligence (AI), etc. Create unique and engaging
                      gameplay with our metaverse expertise.
                    </p>
                  </div>
                  <div className="metaSlnScTabBnImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/tab-img-1.webp?v2"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse Game Development"
                      title="Metaverse Game Development"
                    />
                    <div className="tbSlnLstPosi">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <button
                              className="btn metaSlnBtn"
                              data-toggle="modal"
                              data-target="#popup_form_modal"
                            >
                              Get Instant Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="metaSlnTabCnt">
                    <p className="sml_tlt">Metaverse</p>
                    <p className="Bg_tlt">Virtual Mall Development</p>
                    <p className="Cnt">
                      Enter the future of shopping with our avant-garde virtual
                      mall development services. Transform your traditional way
                      of shopping with advancements of the metaverse platform
                      for a seamless experience from the comfort of your own
                      home. Shop smarter and easier with our innovative virtual
                      mall development from expert 3D developers.
                    </p>
                  </div>
                  <div className="metaSlnScTabBnImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/tab-img-2.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse Virtual Mall Development"
                      title="Metaverse Virtual Mall Development"
                    />
                    <div className="tbSlnLstPosi">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <button
                              className="btn metaSlnBtn"
                              data-toggle="modal"
                              data-target="#popup_form_modal"
                            >
                              Get Instant Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="metaSlnTabCnt">
                    <p className="sml_tlt">Metaverse</p>
                    <p className="Bg_tlt">Theatre Development</p>
                    <p className="Cnt">
                      Create a groundbreaking platform that merges theatres with
                      the digital world with our cutting-edge Metaverse Theatre
                      Development. With our skilled metaverse game developers,
                      we integrate the latest tech stacks like Unreal engine,
                      web3.js, unity engine, etc to create an innovative theatre
                      platform.
                    </p>
                  </div>
                  <div className="metaSlnScTabBnImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/tab-img-3.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse Theatre Development"
                      title="Metaverse Theatre Development"
                    />
                    <div className="tbSlnLstPosi">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <button
                              className="btn metaSlnBtn"
                              data-toggle="modal"
                              data-target="#popup_form_modal"
                            >
                              Get Instant Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-event"
                  role="tabpanel"
                  aria-labelledby="pills-event-tab"
                >
                  <div className="metaSlnTabCnt">
                    <p className="sml_tlt">Metaverse</p>
                    <p className="Bg_tlt">Event Platform Development</p>
                    <p className="Cnt">
                      Stop hosting events traditionally in a physical world.
                      Take your platform and its attendees to the next-gen level
                      of experience with our Metaverse Event Platform
                      Development services. We help you with customizable
                      avatars, live chat, and real-time data analytics, so you
                      can engage with your audience like never before.
                    </p>
                  </div>
                  <div className="metaSlnScTabBnImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/tab-img-4.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse Event Platform Development"
                      title="Metaverse Event Platform Development"
                    />
                    <div className="tbSlnLstPosi">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <button
                              className="btn metaSlnBtn"
                              data-toggle="modal"
                              data-target="#popup_form_modal"
                            >
                              Get Instant Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-store"
                  role="tabpanel"
                  aria-labelledby="pills-store-tab"
                >
                  <div className="metaSlnTabCnt">
                    <p className="sml_tlt">Metaverse</p>
                    <p className="Bg_tlt">Fashion Store Development</p>
                    <p className="Cnt">
                      Leverage our Fashion Store development services to
                      discover a world of virtual clothing and accessories that
                      will elevate your digital style. We help you to reach a
                      global audience by employing our experts to guide you
                      through the entire process, from designing a stunning
                      storefront to sourcing the latest trends. From sleek and
                      modern to classic and elegant, we help you design
                      something that satisfies every liking.
                    </p>
                  </div>
                  <div className="metaSlnScTabBnImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/tab-img-5.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse Fashion Store Development"
                      title="Metaverse Fashion Store Development"
                    />
                    <div className="tbSlnLstPosi">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <button
                              className="btn metaSlnBtn"
                              data-toggle="modal"
                              data-target="#popup_form_modal"
                            >
                              Get Instant Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-casino"
                  role="tabpanel"
                  aria-labelledby="pills-casino-tab"
                >
                  <div className="metaSlnTabCnt">
                    <p className="sml_tlt">Metaverse</p>
                    <p className="Bg_tlt">Casino Development</p>
                    <p className="Cnt">
                      Step into the world of gaming with our endless options for
                      Casino game development. From creating a virtual casino
                      within the Metaverse or incorporating Metaverse elements
                      into your existing games, we have the expertise to make it
                      feasible. The significant-tech stacks like Unity engine,
                      unreal engine, and smart contracts are integrated to
                      assure that your platform is surreal and the
                      cryptocurrency transaction is secured.
                    </p>
                  </div>
                  <div className="metaSlnScTabBnImg">
                    <img
                      src="https://www.osiztechnologies.com/asset/home-page-new/images/tab-img-6.webp"
                      loading="eager"
                      className="img-fluid lazyload"
                      alt="Metaverse Casino Development"
                      title="Metaverse Casino Development"
                    />
                    <div className="tbSlnLstPosi">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <button
                              className="btn metaSlnBtn"
                              data-toggle="modal"
                              data-target="#popup_form_modal"
                            >
                              Get Instant Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="mnyExpoSc">
          <div className="container container-1170">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mnyExpoScImg">
                  <img
                    src="https://www.osiztechnologies.com/asset/home-page-new/images/money-img.webp"
                    loading="eager"
                    className="img-fluid lazyload"
                    alt="Awards & Recognition"
                    title="Awards & Recognition"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="BnrCnt OurservHdd mb-4">
                    <h2 className="text-capitalize">
                      Awards &amp;
                      <span className="Txt8282 px-2">Recognition</span>
                    </h2>
                    <p>
                      We take privilege in publicizing that our company Osiz
                      Technologies, has received the Best Game-Fi Development
                      Company Award at the 2022 Money Expo - the biggest trading
                      event in India.
                    </p>
                    <p>
                      This prestigious award recognizes our commitment to
                      creating innovative and engaging gaming experiences for
                      our clients. We strive to provide our customers with the
                      best gaming experience possible and are thrilled to have
                      been recognized for our efforts.
                    </p>
                    <div className="mnySub">
                      <p className="mnySubTlt">
                        BEST GAMEFI DEVELOPMENT COMPANY 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <SimilarFile />
        </section>
      </div>
    </div>
  );
};

export default Main;
