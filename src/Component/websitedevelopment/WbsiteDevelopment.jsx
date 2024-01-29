import React from "react";
import "./WbsiteDevelopment.css";
import { useNavigate } from "react-router-dom";
import SimilarFile from "../SimilarFile";
const WbsiteDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="blog_new_main">
        <section className="blog_new_banner">
          <div className="container-fluid p-0">
            <div className="VideoWrper">
              <div className="video_sec">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/banner-bg-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="container">
                <div className="content_sec">
                  <div className="title_sec">
                    <h1 className="title main-titile">Website Development</h1>
                  </div>
                  <p className="contents">
                    We adopt a unique and agile approach to web development and
                    design services, tailored to meet diverse business needs and
                    stand out in the competitive landscape.
                  </p>
                  <div
                    className="web-development-button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <div
                      className="webdesi_bannerbtn "
                      onClick={() => navigate("/ContectUsForm")}
                    >
                      <a className="expert-btn">Get A Free Quote</a>
                    </div>
                    <div
                      className="webdesi_bannerbtn "
                      onClick={() => navigate("/ContectUsForm")}
                    >
                      <a className="expert-btn">Get A Live Demo</a>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-5 col-10">
                      <div className="search_sec">
                        {/* <form action="{{url('news')}}" method="get"> */}
                        <div className="sear_fd1">
                          {/* <div className="input-group">
                                                          <input type="text" name="search" className="form-control" placeholder="SEARCH" id="getsearchtext" />
                                                          <span className="input-group-addon"><button className="btn search_btn" onclick="load_search()"><i className="fa fa-search" /></button></span>
                                                      </div> */}
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mid_section sol-website grey-bg"
          id="premium_webservice"
        >
          <div className="container">
            <div className="cm_head2 section-heading text-center">
              <h2 className="hire_modal_hd">
                Our Premium Website Development Services
              </h2>
            </div>
            {/* <div className="row mt-4">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="PHP Development "
                        title="PHP Development "
                        className="premium_webservice_sprite"
                        style={{ objectPosition: "-26px -12px" }}
                      />
                    </div>
                    <h2 className="title">PHP Development</h2>
                    <p className="desc">
                      We render high-grade PHP development services to our clients
                      with our strong experience upon integrating PHP applications
                      with different other web technologies like Python/Django,
                      ColdFusion, ASP.Net, etc.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/php-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Python Development "
                        title="Python Development "
                        className="premium_webservice_sprite"
                        style={{ objectPosition: "-143px -12px" }}
                      />
                    </div>
                    <h2 className="title">Python Development</h2>
                    <p className="desc">
                      Osiz holds rich experience in developing customized web and
                      desktop applications in python. We work under excellent
                      python frameworks like Tornado, Pyramid, Django, flask,
                      Web2YP, Zope to build your web application.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/python-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <img
                        src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                        alt="Golang Development "
                        title="Golang Development "
                        className="premium_webservice_sprite"
                        style={{ objectPosition: "-253px -12px" }}
                      />
                    </div>
                    <h2 className="title">Golang Development</h2>
                    <p className="desc">
                      Our Golang development company builds an efficient web
                      application to meet the business requirements of clients. We
                      have Golang developers who are devoted to delivering a
                      customized web application with cutting-edge technology.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/golang-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div> */}
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-12"
                onClick={() => navigate("/Static")}
                style={{ cursor: "pointer" }}
              >
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">Static Website Development</h2>
                  <p className="desc">
                    Elevate your online presence with our Static Website
                    Development services. We craft visually stunning and
                    efficient static websites, ensuring a seamless user
                    experience that reflects the essence of your brand.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-12"
                onClick={() => navigate("/DynamicWebsite")}
                style={{ cursor: "pointer" }}
              >
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">Dynamic Website Development</h2>
                  <p className="desc">
                    Enhance your digital footprint with our Dynamic Website
                    Development services. We design and develop visually
                    striking and dynamic websites, offering an interactive user
                    experience that embodies the essence of your brand.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-12"
                onClick={() => navigate("/Ecommerce")}
                style={{ cursor: "pointer" }}
              >
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title1">E-Commerce Website Development</h2>
                  <p className="desc">
                    Enhance your digital storefront with our E-commerce Website
                    Development services. We meticulously design and develop
                    visually appealing and efficient e-commerce websites,
                    guaranteeing a smooth user experience that resonates with
                    your brand identity.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>
                  <h2 className="title">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="services_box">
                  <span />
                  <span />
                  <span />
                  <span />
                  <div className="sol-icon">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Java Development "
                      title="Java Development "
                      className="premium_webservice_sprite"
                      style={{ objectPosition: "-354px -16px" }}
                    />
                  </div>

                  <h2 className="title">WordPress Development</h2>
                  <p className="desc">
                    We develop highly responsive websites for your businesses
                    with our WordPress website services. Our WordPress coders
                    build each WordPress activity like plugins, frameworks, and
                    also theme customization to provide a Hassle-Free WordPress
                    website.{" "}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section
          id="webdesign_frameworks"
          className="mid_section sol-website  "
        >
          <div className="container">
            <div className="cm_head2 section-heading text-center">
              <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                Website development Frameworks we Expertise
              </h2>
            </div>
            <div className="row ">
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Laravel Framework Development "
                      title="Laravel Framework Development "
                      className="webdesign_frameworks_sprite"
                      style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">React JS</h3>
                  <p
                    className="sub_contents"
                    style={{ textDecorationLine: "none" }}
                  >
                    React JS is one of the important tools that we have. It is
                    mostly used in building both short and long websites. It is
                    very optimised making your website load supper fast on all
                    devices. React JS is proven technology and it is being used
                    by huge companies like Meta (Facebook)
                  </p>
                  <p>
                    {/* <a
                      href="https://www.osiztechnologies.com/laravel-framework-development"
                      className="rd_mr_btn"
                    >
                      <span>READ MORE</span>{" "}
                      <span className="inr_arrow">
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </a> */}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Laravel Framework Development "
                      title="Laravel Framework Development "
                      className="webdesign_frameworks_sprite"
                      style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">JavaScript</h3>
                  <p className="sub_contents">
                    Java Script is the go-to tool for the developing Front End
                    of the website. Front End is the part that the user sees and
                    interacts with. It is also used to manage the interaction
                    between the website and the web servers.
                  </p>
                  <p>
                    {/* <a
                      href="https://www.osiztechnologies.com/laravel-framework-development"
                      className="rd_mr_btn"
                    >
                      <span>READ MORE</span>{" "}
                      <span className="inr_arrow">
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </a> */}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Laravel Framework Development "
                      title="Laravel Framework Development "
                      className="webdesign_frameworks_sprite"
                      style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">HTML & CSS</h3>
                  <p className="sub_contents">
                    HTML is the most commonly used language for building a
                    website or any web page. It is used to create the basic
                    structure of the website. It is the skeleton of your website
                    telling everything where certain elements will be placed.
                  </p>
                  <p>
                    {/* <a
                      href="https://www.osiztechnologies.com/laravel-framework-development"
                      className="rd_mr_btn"
                    >
                      <span>READ MORE</span>{" "}
                      <span className="inr_arrow">
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Laravel Framework Development "
                      title="Laravel Framework Development "
                      className="webdesign_frameworks_sprite"
                      style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">Node JS</h3>
                  <p className="sub_contents">
                    Node JS is extremely useful for real-time interactions. Most
                    of the chat features on the website use Node JS. Node JS
                    beautifully handles cross-platform applications. It supports
                    other technologies. It makes sure that other technologies
                    works smoothly with each other.
                  </p>
                  <p>
                    {/* <a
                      href="https://www.osiztechnologies.com/laravel-framework-development"
                      className="rd_mr_btn"
                    >
                      <span>READ MORE</span>{" "}
                      <span className="inr_arrow">
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </a> */}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Laravel Framework Development "
                      title="Laravel Framework Development "
                      className="webdesign_frameworks_sprite"
                      style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">Express JS</h3>
                  <p className="sub_contents">
                    Leverage the prowess of Express JS for real-time
                    interactions on your website. This framework excels in
                    powering chat features, ensuring seamless cross-platform
                    applications. Express JS seamlessly integrates with various
                    technologies, ensuring smooth collaboration and optimal
                    performance across your tech stack..
                  </p>
                  <p>
                    {/* <a
                      href="https://www.osiztechnologies.com/laravel-framework-development"
                      className="rd_mr_btn"
                    >
                      <span>READ MORE</span>{" "}
                      <span className="inr_arrow">
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </a> */}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="platform_box">
                  <div className="webdframeworks_icons ">
                    <img
                      src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                      alt="Laravel Framework Development "
                      title="Laravel Framework Development "
                      className="webdesign_frameworks_sprite"
                      style={{ objectPosition: "-766px -25px" }}
                    />
                  </div>
                  <h3 className="sub_title">Mongo DB</h3>
                  <p className="sub_contents">
                    MongoDB, a robust and scalable NoSQL database, Widely
                    utilized for chat features, MongoDB seamlessly integrates
                    with Node.js, ensuring smooth cross-platform applications.
                    Its versatility allows for seamless collaboration with
                    various technologies, fostering an integrated and efficient
                    tech ecosystem.
                  </p>
                  <p>
                    {/* <a
                      href="https://www.osiztechnologies.com/laravel-framework-development"
                      className="rd_mr_btn"
                    >
                      <span>READ MORE</span>{" "}
                      <span className="inr_arrow">
                        <i className="fa fa-angle-double-right" />
                      </span>
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mid_section sol-website "
          id="webdesign_jsframeworks"
        >
          {/* <div className="container">
              <div className="cm_head2 section-heading text-center">
                <h2 className="hire_modal_hd">
                  Our Web Application Development Services (JS framework )
                </h2>
              </div>
              <div className="row mt-5">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Angular JS Development "
                          title="Angular JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1303px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Angular JS Development</h2>
                      <p className="desc">
                        We are specialized in furnishing a wide array of AngularJS
                        development services to clients with quality standards.
                        With our Angular JS development services, you can
                        accomplish your business objectives and save huge costs.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/angular-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="React JS Development "
                          title="React JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1367px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">React JS Development</h2>
                      <p className="desc">
                        We are a prominent React JS development company in India
                        offering quick, fair, and transparent web development
                        services to our clients. We assist start-ups, businesses,
                        and large-scale enterprises with React JS development.
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/react-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Node JS Development "
                          title="Node JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1436px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Node JS Development</h2>
                      <p className="desc">
                        We develop fast, secure, flexible, and scalable real-time
                        web and mobile applications to stand ahead in the business
                        market. We offer Node JS Development services at an
                        affordable cost.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/node-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Vue JS Development "
                          title="Vue JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1498px -24px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Vue JS Development</h2>
                      <p className="desc">
                        Leverage our simple approachable Vue JS framework services
                        to build a successful web application for your business.
                        Osiz offers Vue JS development services and solutions for
                        clients of various Industrial Segments.
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/vue-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Electron JS Development "
                          title="Electron JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1577px -25px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Electron JS Development</h2>
                      <p className="desc">
                        We provide a native, cross-platform modern desktop
                        application with an unparalleled strategical approach with
                        top-quality Electron application services. We have domain
                        experts to accelerate your business in the market.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/electron-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webjsframeworks_icons ">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Meteor JS Development "
                          title="Meteor JS Development "
                          className="webdesign_frameworks_sprite"
                          style={{ objectPosition: "-1644px -26px" }}
                        />
                      </div>
                    </div>
                    <div className="wjsframe_content">
                      <h2 className="title">Meteor JS Development </h2>
                      <p className="desc">
                        Get our imaginative, effective and scalable Meteor JS
                        framework to run your website applications seamlessly.
                        Moreover, Osiz offers reliable Meteor.JS development
                        services using the Meteor.JS framework.{" "}
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/meteor-js-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
        </section>
        <section className="mid_section" id="webdesign_industry">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-heading text-center">
                <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                  Industries we serve
                </h2>
                <p>
                  We've helped customers in various sectors with highly scalable
                  &amp; secure Web App development solutions.{" "}
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Education "
                    title="Education "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-1742px -30px" }}
                  />
                  <p>Education</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Telecom "
                    title="Telecom "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-1814px -30px" }}
                  />
                  <p>Telecom</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt=" Food"
                    title="Food "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-1901px -30px" }}
                  />
                  <p>Food</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Transport "
                    title="Transport "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2007px -30px" }}
                  />
                  <p>Transport</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Health "
                    title="Health "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2086px -30px" }}
                  />
                  <p>Health</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Retail "
                    title="Retail "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2167px -30px" }}
                  />
                  <p>Retail </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Fintech "
                    title="Fintech "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2258px -31px" }}
                  />
                  <p>Fintech </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Ecommerce "
                    title="Ecommerce "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2343px -31px" }}
                  />
                  <p>Ecommerce</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="Media "
                    title="Media "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-2431px -31px" }}
                  />
                  <p>Media</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="webdesign_indusbox">
                  <img
                    src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                    alt="RealEstate "
                    title="RealEstate "
                    className="webdesign_industry_sprite"
                    style={{ objectPosition: "-4133px -30px" }}
                  />
                  <p>RealEstate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="webportel_dev" className="mid_section sol-website">
            <div className="container">
              <div className="cm_head2 section-heading text-center">
                <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                  Web Portal Development Services
                </h2>
              </div>
              <div className="row ">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon ">
                      <div className="webporteldev_icons">
                        {" "}
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Taxi Booking Portal Development "
                          title="Taxi Booking Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2523px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Taxi Booking Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Taxi booking portal allows users to book a cab with just a
                      click. Hire Our Well-Experienced Taxi Booking Portal
                      Developers to develop a taxi booking portal for your
                      business.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/taxi-booking-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Hotel Booking Portal Development "
                          title="Hotel Booking Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2637px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Hotel Booking Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Hire our dedicated Hotel Booking portal developers to own a
                      hotel booking portal for your hotel or business. The portals
                      developed are of the highest security features to safeguard
                      users' data.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/hotel-booking-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt=" News Portal Development"
                          title="News Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2731px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">News Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Osiz provides appealing news portal development services to
                      our clients, which allows publishing articles, blogs, and
                      other stuff related to the news. It helps your business
                      attract a huge audience and unimaginable revenue.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/news-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4 mt-3">
                  <div className="sol-box ">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Property Portal Development "
                          title="Property Portal Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2827px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Property Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Our primary property portal app development services to the
                      users include a real estate website for advertising
                      property, managing online portal solutions to build your own
                      property and the front cover featured property display.
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/property-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Crowd Funding Development "
                          title="Crowd Funding Development "
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-2922px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Crowd Funding Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      Raise your funds for your excellent new business idea
                      utilizing our crowdfunding Software that is specially
                      designed with specific protection software to make your web
                      pages secure.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/classified-portal-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="sol-box">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="lassified Portal Development "
                          title=" lassified Portal Development"
                          className="webportel_dev_sprite"
                          style={{ objectPosition: "-3014px -20px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Classified Portal Development</h2>
                    <hr className="webporteldev_hr" />
                    <p className="desc">
                      We build classified web portals with advanced catalog
                      management allowing users to post their adverts on the
                      favorite list. We use mastering strategies such as measuring
                      site goals.{" "}
                    </p>
                    <p>
                      <a
                        href="https://www.osiztechnologies.com/crowdfunding-software-development"
                        className="rd_mr_btn"
                      >
                        <span>READ MORE</span>{" "}
                        <span className="inr_arrow">
                          <i className="fa fa-angle-double-right" />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        {/* <section className="mid_section" id="webdev_process">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-heading text-center">
                  <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                    Web Development Process
                  </h2>
                  <p>
                    Here’s a glimpse of our swift working model that results in
                    quality output.{" "}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 section-heading text-center">
                  <img
                    src="https://www.osiztechnologies.com//asset/images/inner-pages/custom_web_design_development/web-development-process.png?v1"
                    alt="Web Development Process"
                    title="Web Development Process"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section> */}

        {/* <section className="mid_section   ">
            <div className="container">
              <div className="row  ">
                <div className="section-heading text-center">
                  <h2 style={{ textAlign: "center" }}>
                    Delivering The Right Web Designing Services?
                  </h2>
                  <div className="why_round"> </div>
                </div>
              </div>
            </div>
            <div className="container-fluid ">
              <div className="row mt-5">
                <div className="col-md-6 webdevelopment_new_custom_color-1">
                  <div className="webdevelopment_new_custom_box webdevelopment_new_custom_dark">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-29px 0px" }}
                    />
                    <div className="webdevelopment_new_title">Responsive</div>
                    <p>
                      <b>Multi-platform supported website design&nbsp;</b>
                    </p>
                    <p>
                      Our top-notch website designing company is fully responsive
                      through incorporating a brilliant UI that adapts to various
                      screen resolution and render an astonishing user experience
                      irrespective of the device and browsing environment.
                    </p>
                    <p>
                      Our skilled designers visualize your thoughts into reality
                      with their innovative design strategy and efficient
                      technologies. We made responsive website design for the
                      wonders like Fluid Grid Layout, Flexible Images, Offline
                      Browsing, Enhance Performance to happen.&nbsp;
                    </p>
                  </div>
                </div>
                <div className="col-md-6  webdevelopment_new_custom_color-2">
                  <div className="webdevelopment_new_custom_box webdevelopment_new_custom_light">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-216px -4px" }}
                    />
                    <div className="webdevelopment_new_title">
                      Better User Experience
                    </div>
                    <p>
                      <b>
                        Fine-looking websites provide an outstanding user
                        experience
                      </b>
                    </p>
                    <p>
                      Our experts have a keen on eye on designing websites to
                      provide an outstanding user experience. Our interactive UI
                      design procures a lesser bounce rate, wow-factor compelling
                      your visitors to convertors, stand out from competitors. Our
                      innovative team analyzes your business objectives &amp;
                      target niche to initiate a designing process that improves
                      your business-standard.&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="row webdevelopment_new_custom_light">
                <div className="col-md-6 webdevelopment_new_custom_color-3">
                  <div className="webdevelopment_new_custom_box  ">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-381px -9px" }}
                    />
                    <div className="webdevelopment_new_title">Effective</div>
                    <p>
                      <b>Get huge revenue with your website</b>
                    </p>
                    <p>
                      We bring out new potential customers for your business with
                      our effective marketing efforts. We prefer an advanced tool
                      for designing your website which captivates a huge audience
                      for your business. Our design team not only focus on just
                      looking great but can convert visitors into customers.&nbsp;
                    </p>
                  </div>
                </div>
                <div className="col-md-6  webdevelopment_new_custom_color-4">
                  <div className="webdevelopment_new_custom_box ">
                    <div
                      className="webdevelopment_new_custom_bg"
                      style={{ backgroundPosition: "-537px -9px" }}
                    />
                    <div className="webdevelopment_new_title">Customized</div>
                    <p>
                      <b>
                        Connect your websites and accomplish better&nbsp;&nbsp;
                      </b>
                    </p>
                    <p>
                      Marketing goes well with the solid digital strategy that is
                      customized to your particular business necessitate. Our
                      experts spend a huge time understanding your industry to
                      build a customized website design for your particular
                      business requirements. Adopting intelligent UI design is our
                      primary concern which is userfriendly and provides a better
                      experience for your end-users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        <section id="custweb_servs" className="mid_section sol-website grey-bg">
          <div className="container">
            <div className="cm_head2 section-heading text-center">
              <h2 className="hire_modal_hd" style={{ textAlign: "center" }}>
                What Set us ahead in Custom Website Development
              </h2>
              <p style={{ textAlign: "center" }}>
                Adapt to evolving customer demands and stay ahead of market
                trends by embracing our custom web development services. Unlock
                the potential of attracting a high-quality client base through
                innovative solutions tailored to meet dynamic requirements.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Requirement Analysis "
                          title="Requirement Analysis "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3560px -24px"  }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Requirement Analysis</h2>
                  </div>
                  <p className="desc">
                    Brainstorm with us, gather the industry’s best ideas and
                    convert them to reality with our solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Impressive Web - Designs "
                          title="Impressive Web - Designs "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3631px -24px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Impressive Web - Designs</h2>
                  </div>
                  <p className="desc">
                    Develop your websites with all the latest designs and
                    convert a large portion of traffic into leads.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Responsive Web app "
                          title=" Responsive Web app"
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3703px -24px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Responsive Web app</h2>
                  </div>
                  <p className="desc">
                    Get your website designed in such a way that it is
                    responsive in all website applications.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 mt-3">
                <div className="sol-box ">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt=" Efficiency in Performance & Speed"
                          title="Efficiency in Performance & Speed "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3778px -27px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">
                      Efficiency in Performance &amp; Speed
                    </h2>
                  </div>
                  <p className="desc">
                    Reduce your website bounce rate by improving performance
                    efficiency and speed.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="Highly Secured & Scalable "
                          title="Highly Secured & Scalable "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3860px -27px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">Highly Secured &amp; Scalable</h2>
                  </div>
                  <p className="desc">
                    Build your secure and scalable website that complies with
                    all the latest security regulations.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                <div className="sol-box">
                  <div className="custserv_ictit">
                    <div className="sol-icon">
                      <div className="webporteldev_icons">
                        <img
                          src="https://www.osiztechnologies.com/asset/images/inner-pages/custom_web_design_development/icons-new.svg?v1"
                          alt="SEO Friendly "
                          title="SEO Friendly "
                          className="custweb_servs_sprite"
                          style={{ objectPosition: "-3952px -27px" }}
                        />
                      </div>
                    </div>
                    <h2 className="title">SEO Friendly</h2>
                  </div>
                  <p className="desc">
                    Let your website rank higher on all the search engines with
                    inbuilt SEO features.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
            className="tabs_solutions desktop"
            style={{ padding: "20px 0 0" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-heading text-center">
                  <h2 style={{ textAlign: "center" }}>Technology Stack</h2>
                  <p className="text-center mt-4">
                    We establish a dynamic experience and a wide range of custom
                    web development solutions. Our web developers are mixing
                    various web components to bring out unique ideas, full-range
                    web development scenarios, and business models. Our highly
                    skilled and experienced web developers are capable of
                    implementing the latest techniques with the use of modern
                    technologies, adhering high-grade coding guidelines and to
                    maintain quality standards. With splendid user experiences and
                    tailored-made framework, we meet all your particular industry
                    need. Our armor procures following frameworks, technologies,
                    and tools&nbsp;
                  </p>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="tabbable-panel">
                    <div className="tabbable-line">
                      <ul className="nav nav-tabs text-center">
                        <li className=" active hire-dd-icon wds wds-ico-5">
                          <a href="#tab_default_1" data-toggle="tab">
                            <span className="text-muted list-title">PHP</span>{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-4">
                          <a href="#tab_default_7" data-toggle="tab">
                            <span className="text-muted list-title">
                              JS FRAMEWORKS
                            </span>{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-7">
                          <a href="#tab_default_3" data-toggle="tab">
                            <span className="text-muted list-title">
                              MEAN STACK
                            </span>{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-10">
                          <a href="#tab_default_6" data-toggle="tab">
                            <span className="text-muted list-title">
                              FULL STACK
                            </span>
                            &nbsp;{" "}
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-8">
                          <a href="#tab_default_4" data-toggle="tab">
                            <span className="text-muted list-title">PYTHON </span>
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-9">
                          <a href="#tab_default_5" data-toggle="tab">
                            <span className="text-muted list-title">JAVA </span>
                          </a>
                        </li>
                        <li className=" hire-dd-icon wds wds-ico-6">
                          <a href="#tab_default_2" data-toggle="tab">
                            <span className="text-muted list-title">ASP.NET</span>{" "}
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="tab_default_1" className="tab-pane active">
                          <div id="tab_default_1" className="tab-pane active">
                            <p className="text-muted pb-2 text-center">
                              Our{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/php-development"
                              >
                                PHP developers
                              </a>{" "}
                              have well-versed knowledge on several domains to
                              built functional web applications. Our latest PHP
                              frameworks are
                            </p>
                            <div className="hire-dd-technology">
                              <a href="https://www.osiztechnologies.com/cakephp-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-11">
                                    Cake php
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/yii-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-12">
                                    Yii
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/zend-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-13">
                                    Zend
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/codeigniter-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-14">
                                    Codeignitor
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/laravel-framework-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-16">
                                    Laravel
                                  </p>
                                </div>
                              </a>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-15">
                                  Symfony
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_7" className="tab-pane">
                          <div id="tab_default_7" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              Our team provides a leading JS Framework because of
                              our domain experts who have an exclusive knowledge
                              and experience under this framework
                            </p>
                            <div className="hire-dd-technology">
                              <a href="https://www.osiztechnologies.com/svelte-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-48">
                                    Svelte Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/angular-8-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-49">
                                    Angular 8 Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/react-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-50">
                                    {" "}
                                    React Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/vue-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-51">
                                    {" "}
                                    Vue Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/electron-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-52">
                                    {" "}
                                    Electron Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/nw-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-53">
                                    {" "}
                                    NW Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/app-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-54">
                                    {" "}
                                    App Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/meteor-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-55">
                                    {" "}
                                    Meteor Js Development
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/proton-native-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-56">
                                    {" "}
                                    Proton Native Js Development
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_3" className="tab-pane">
                          <div id="tab_default_3" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We have proficient and experienced{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/mean-stack-development"
                              >
                                MEAN stack developers
                              </a>{" "}
                              to provide excellent development services to our
                              clients.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-24">
                                  MongoDB
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-25">
                                  Express Js
                                </p>
                              </div>
                              <a href="https://www.osiztechnologies.com/node-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-26">
                                    {" "}
                                    Node Js
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/angular-js-development">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-27">
                                    {" "}
                                    Angular Js
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_6" className="tab-pane">
                          <div id="tab_default_6" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              Our{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/full-stack-development"
                              >
                                Full-stack developers
                              </a>{" "}
                              are efficient in providing end-to-end full-stack
                              development services with 10+ years of experience.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-41">
                                  UI
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-42">
                                  Front-end
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-43">
                                  Back-end
                                </p>
                              </div>
                              <a href="https://www.osiztechnologies.com/database-solutions">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-44">
                                    Databases
                                  </p>
                                </div>
                              </a>
                              <a href="https://www.osiztechnologies.com/devops-solutions">
                                <div className="hire-dd-tech-box">
                                  <p className="text-muted hire-dd-box-text wds wds-ico-45">
                                    DevOps
                                  </p>
                                </div>
                              </a>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-46">
                                  Containers
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-47">
                                  Test Automation
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_4" className="tab-pane">
                          <div id="tab_default_4" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We are the best{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/python-development"
                              >
                                Python Development
                              </a>{" "}
                              Company for rising technologies including AI, ML and
                              web apps.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-28">
                                  Django
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-29">
                                  Flask
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-30">
                                  Zope
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-31">
                                  Pyramid
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-32">
                                  Web2py
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-33">
                                  Tornado
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_5" className="tab-pane">
                          <div id="tab_default_5" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We deliver secure, scalable and robust{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/java-development"
                              >
                                Java
                              </a>{" "}
                              solutions for clients using the following expertise.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-34">
                                  Core java
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-35">
                                  J2ME
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-36">
                                  J2EE
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-37">
                                  JAVA Applet
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-39">
                                  Java Web Services
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-40">
                                  Java Product
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab_default_2" className="tab-pane">
                          <div id="tab_default_2" className="tab-pane">
                            <p className="text-muted pb-2 text-center">
                              We have{" "}
                              <a
                                className="tech-link"
                                href="https://www.osiztechnologies.com/dot-net-development"
                              >
                                Asp.net{" "}
                              </a>{" "}
                              domain experts and technical leads to ply exclusive
                              services to clients.
                            </p>
                            <div className="hire-dd-technology">
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-17">
                                  Dot Net-Libraries
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-18">
                                  ASP.NET Framework
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-20">
                                  C#
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-21">
                                  Visual Studio
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-22">
                                  Web Services
                                </p>
                              </div>
                              <div className="hire-dd-tech-box">
                                <p className="text-muted hire-dd-box-text wds wds-ico-23">
                                  CMS
                                </p>
                              </div>
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
        <SimilarFile />
      </main>
    </>
  );
};

export default WbsiteDevelopment;
