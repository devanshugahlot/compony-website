import React from "react";
import "./GeneralGamesDevelopment.css";
import AutoPlay from "../../MainPage/ReactSlick";
import AutoPlaygame from "./Gameslider";
import { useNavigate } from "react-router-dom";
const GeneralGamesDevelopment = () => {


  const navigate = useNavigate()

  return (
    <div>
      {" "}
      <main id="game_dev_comp_main">
        <section className="game_dev_comp_banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="banner_sec">
                  <h1 className="title">
                    <span className="bnr_clr_title">Game Development</span>{" "}
                    <br /> Company
                  </h1>
                  <p className="contents">
                    Choose MetaBlock Technologies for cutting-edge game
                    development. Our expertise spans solo and collaborative
                    projects, crafting captivating games across diverse
                    platforms. Join us to shape the future of gaming, where
                    innovation meets seamless execution. Elevate your vision
                    with MetaBlock Technologies, leading the way in the dynamic
                    world of interactive entertainment.
                  </p>
                  <div className="HddrBtns banner_btn_sec"
                    onClick={() => navigate('/ContectUsForm')}
                  >
                    <button
                      data-toggle="modal"
                      data-target="#popup_form_modal"
                      className="btn banner_btn"
                    >
                      <span>Tap for a Quotation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="game_dev_comp_services">
          <div className="container">
            <h2 className="title">Our Game Development Services Range</h2>
            <div className="nft-marketplace-usecase slider">
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/blog/web3-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service1.webp" className="img-fluid lazyload" alt="Web3_Game_Development" title="Web3 Game Development" />
                    </div>
                    <h3 className="sub_title">Web3 Game Development</h3>
                    <p className="sub_contents">Utilizing blockchain technologies, our group of video game developers constructs secure and decentralized Web3 games. Our specialization includes decentralized governance, player ownership, and the provision of fair gameplay
                      experiences.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/nft-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service2.webp" className="img-fluid lazyload" alt="nft_Game_Development" title="NFT Game Development" />
                    </div>
                    <h3 className="sub_title">NFT Game Development</h3>
                    <p className="sub_contents">Specializing in NFT-infused games, we elevate in-game assets with real-world significance. By utilizing top-tier blockchains, we empower players to craft, trade, and vend NFTs directly within the gaming ecosystem.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/metaverse-game-development" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service3.webp" className="img-fluid lazyload" alt="Metaverse_Game_Development" title="Metaverse Game Development" />
                    </div>
                    <h3 className="sub_title">Metaverse Game Development</h3>
                    <p className="sub_contents">As a premier video game development company, we strongly prioritize the creation of immersive metaverse games that evolve in sync with their communities. We encompass all the top metaverse features, including interactivity,
                      user-generated content, and social connectivity.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/blockchain-game-development-company" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service4.webp" className="img-fluid lazyload" alt="Blockchain_Game_Development" title="Blockchain Game Development" />
                    </div>
                    <h3 className="sub_title">Blockchain Game Development</h3>
                    <p className="sub_contents">Covering a spectrum of blockchain game development solutions, our team offers services that span from incorporating smart contracts to conducting security audits. Our blockchain gaming projects encompass the integration
                      of player-centric economies and the implementation of secure in-game transactions.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service5.webp" className="img-fluid lazyload" alt="Mobile_Game_Development" title="Mobile Game Development" />
                    </div>
                    <h3 className="sub_title">Mobile Game Development</h3>
                    <p className="sub_contents">We specialize in offering complete mobile gaming solutions for iOS and Android platforms. As a premier game development agency, we guarantee the creation of highly polished, high-performance games with captivating player
                      experiences.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service6.webp" className="img-fluid lazyload" alt="AR_VR_Game_Development" title="AR and VR Game Development" />
                    </div>
                    <h3 className="sub_title">AR and VR Game Development</h3>
                    <p className="sub_contents">We develop AR and VR games that offer players engaging real-time experiences. Our games feature interactive gameplay, high-quality graphics, and leverage advanced AR/VR and devices, platforms, and frameworks.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service7.webp" className="img-fluid lazyload" alt="Unity_3D_Game_Development" title="Unity 3D Game Development" />
                    </div>
                    <h3 className="sub_title">Unity 3D Game Development</h3>
                    <p className="sub_contents">Our team of Unity game developers utilizes the latest attributes of the foremost game engine to produce visually captivating and interactive 2D and 3D games. Furthermore, we ensure the seamless performance of these games
                      on numerous platforms.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service8.webp" className="img-fluid lazyload" alt="Desktop_Game_Development" title="Desktop Game Development" />
                    </div>
                    <h3 className="sub_title">Desktop Game Development</h3>
                    <p className="sub_contents">Our proficiency lies in crafting intricate, top-tier games through the sophisticated toolkit of Unreal Engine. Our creations enthrall gamers with breathtaking graphics, immersive settings, and exhilarating gameplay moments.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service9.webp" className="img-fluid lazyload" alt="Unreal_Game_Development" title="Unreal Game Development" />
                    </div>
                    <h3 className="sub_title">Unreal Game Development</h3>
                    <p className="sub_contents">Our proficiency lies in crafting intricate, top-tier games through the sophisticated toolkit of Unreal Engine. Our creations enthrall gamers with breathtaking graphics, immersive settings, and exhilarating gameplay moments.</p>
                  </div>
                </a>
              </div> */}
              {/* <div className="item">
                <a href="https://www.osiztechnologies.com/contact-us" target="_blank">
                  <div className="service_box">
                    <div className="img_sec">
                      <img src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/service10.webp" className="img-fluid lazyload" alt="HTML5_Game_Development" title="HTML5 Game Development" />
                    </div>
                    <h3 className="sub_title">HTML5 Game Development</h3>
                    <p className="sub_contents">Focusing on HTML5 game development, we design cross-platform games that align with client needs. Our games are engaging, easily accessible, and deliver flawless performance on web browsers across a range of platforms.</p>
                  </div>
                </a>
              </div> */}
              <AutoPlaygame />
            </div>
          </div>
        </section>
        <section className="game_dev_comp_platform">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5 p-lg-0">
                <img
                  src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/platform-img.webp?v2"
                  className="img-fluid lazyload"
                  alt="Game_Development_on_Prime_Platforms"
                  title="Our Game Development on Prime Platforms"
                />
              </div>
              <div className="col-lg-7 cus_col">
                <h2 className="title">
                  Our Game Development on Prime Platforms
                </h2>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/platform-icons.svg"
                          className="sprite_icons lazyload"
                          alt="AR_VR_Icon"
                          title="AR and VR"
                          style={{ objectPosition: "0px 0px" }}
                        />
                        <h3 className="sub_title">AR and VR</h3>
                      </div>
                      <p className="sub_contents">
                        We make use of latest AR and VR technologies to produce
                        thrilling games.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/platform-icons.svg"
                          className="sprite_icons lazyload"
                          alt="Console_Icon"
                          title="Console"
                          style={{ objectPosition: "-94px 0px" }}
                        />
                        <h3 className="sub_title">Console</h3>
                      </div>
                      <p className="sub_contents">
                        We create games for prominent console platforms such as
                        PlayStation 4, Nintendo, Xbox, and other similar
                        platforms.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/platform-icons.svg"
                          className="sprite_icons lazyload"
                          alt="Mobile_Icon"
                          title="Mobile"
                          style={{ objectPosition: "-186px 0px" }}
                        />
                        <h3 className="sub_title">Mobile</h3>
                      </div>
                      <p className="sub_contents">
                        We develop games for both Android and iOS platforms or
                        engaging in cross-platform development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="platform_box">
                      <div className="head_sec">
                        <img
                          src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/platform-icons.svg"
                          className="sprite_icons lazyload"
                          alt="PC_Icon"
                          title="PC"
                          style={{ objectPosition: "-280px 0px" }}
                        />
                        <h3 className="sub_title">PC</h3>
                      </div>
                      <p className="sub_contents">
                        We offer comprehensive game development for personal
                        computers, with the capability to port to both Windows
                        and macOS platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="game_dev_btn_sec"
                    onClick={() => navigate('/ContectUsForm')}
                 
                >
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn game_dev_btn"
                  >
                    <span>Get A Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_techstack">
          <div className="container">
            <h2 className="title">Technologies we are skilled in</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Unreal Engine</h3>
                  <p className="sub_contents">
                    Unreal Engine is a robust game development framework with
                    advanced rendering, physics, AI, and real-time capabilities,
                    enabling creation of visually impressive, interactive
                    experiences across diverse platforms.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Unity</h3>
                  <p className="sub_contents">
                    Unity is a popular cross-platform game engine that empowers
                    our developers to create interactive 2D and 3D games,
                    simulations, and experiences for various platforms using its
                    integrated development environment and scripting
                    capabilities.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">CryEngine</h3>
                  <p className="sub_contents">
                    CryEngine is a powerful game development platform known for
                    its high-fidelity graphics, dynamic physics, and AI
                    capabilities, empowering our creators to build immersive and
                    visually stunning experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">C</h3>
                  <p className="sub_contents">
                    C programming language is a versatile and widely used system
                    programming language known for its efficiency, low-level
                    control, and portability in developing various applications
                    and software solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">C++</h3>
                  <p className="sub_contents">
                    C++ is a powerful programming language that extends the
                    capabilities of C with object-oriented features, enabling
                    efficient, modular, and versatile software development
                    across diverse applications and industries.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">C#</h3>
                  <p className="sub_contents">
                    C# (pronounced "C sharp") is a modern, object-oriented
                    programming language developed by Microsoft. It's widely
                    used for building a variety of applications, including
                    desktop, web, and game development.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">Swift</h3>
                  <p className="sub_contents">
                    Swift is a robust and user-friendly programming language
                    created by Apple for developing applications across their
                    ecosystem. It offers modern syntax, high performance, and
                    safety features.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="tech_box">
                  <h3 className="sub_title">HTML</h3>
                  <p className="sub_contents">
                    HTML (Hypertext Markup Language) is a standard language for
                    creating and structuring web content. It employs tags to
                    define the elements and layout of web pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_quant">
          <div className="container">
            <h2 className="title">Quantifying Our Journey</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/quant-icons.svg"
                    className="sprite_icons lazyload"
                    alt="250+_Innovators_Crafting_Games"
                    title="250+ Innovators Crafting Games"
                    style={{ objectPosition: "0px 0px" }}
                  />
                  <div className="sub_title">
                    250+ Innovators Crafting Games
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/quant-icons.svg"
                    className="sprite_icons lazyload"
                    alt="400+_Projects_Set_in_Motion"
                    title="400+ Projects Set in Motion"
                    style={{ objectPosition: "-318px 0px" }}
                  />
                  <div className="sub_title">400+ Projects Set in Motion</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/quant-icons.svg"
                    className="sprite_icons lazyload"
                    alt="15+_Years_of_Gaming_Mastery"
                    title="15+ Years of Gaming Mastery"
                    style={{ objectPosition: "-647px 0px" }}
                  />
                  <div className="sub_title">15+ Years of Gaming Mastery</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="quant_list">
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/quant-icons.svg"
                    className="sprite_icons lazyload"
                    alt="75+_Countries_Immersed_in_Fun"
                    title="75+ Countries Immersed in Fun"
                    style={{ objectPosition: "-989px 0px" }}
                  />
                  <div className="sub_title">75+ Countries Immersed in Fun</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_production">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 order-2 order-lg-1">
                <div className="img_sec">
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-img.webp?v1"
                    className="img-fluid lazyload"
                    alt="Osiz_Your_go_to_game_development_company"
                    title="MetaBlock Your go-to game development company.Find out why"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-12 order-1 order-lg-2">
                <h2 className="title">
                  Our Game Production From Start to Finish
                </h2>
                <div className="why_scrollsec">
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-icon.svg"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Information Collation</h3>
                    </div>
                    <p className="sub_contents">
                      As a committed game design firm, we thoroughly delve into
                      project requisites. Our team establishes consistent
                      communication to gather comprehensive inputs. By means of
                      documentation and ongoing dialogue, we ensure seamless
                      alignment between both parties from the very outset.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-icon.svg"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Blueprinting</h3>
                    </div>
                    <p className="sub_contents">
                      Conducting concept analysis and research rooted in client
                      inputs, we formulate game design documents, flow
                      structures, and execution strategies. Collaborative
                      dialogues with stakeholders precede subsequent
                      pre-production and production stages, ensuring a
                      comprehensive understanding before commencing development
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-icon.svg"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Imagination Depiction and Asset Creation
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Guided by the game's theme and vision, our team produces
                      concept art and sketches. Our asset production unit,
                      consisting of modelers, animation experts, rigging
                      artists, and more, then meticulously crafts an array of 2D
                      and 3D assets, ranging from props to characters and
                      environments. These assets harmoniously align with the
                      finalized 3D art and sketches.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-icon.svg"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        Game Design and Intensive Quality Testing
                      </h3>
                    </div>
                    <p className="sub_contents">
                      Similar to reputable video game firms, our development
                      squad possesses practical familiarity with crafting games
                      using leading game engines and advanced technologies.
                      Additionally, our team features adept testers who
                      meticulously subject each game to rigorous quality
                      assurance and thorough device compatibility assessments.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-icon.svg"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">Help &amp; Upkeep</h3>
                    </div>
                    <p className="sub_contents">
                      MetaBlock delivers post-publishing technical support and game
                      maintenance. We ensure games remain current across devices
                      and operating systems. Our services span standard support
                      packages to tailor-made service-level agreements, aligning
                      with gaming industry benchmarks.
                    </p>
                  </div>
                  <div className="why_box">
                    <div className="head_sec">
                      <img
                        src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/production-icon.svg"
                        className="img-fluid lazyload"
                        alt="Game_Production"
                        title="Game Production"
                      />
                      <h3 className="sub_title">
                        {" "}
                        Game Longevity and Revenue Strategies
                      </h3>
                    </div>
                    <p className="sub_contents">
                      In mobile game development, player retention and
                      engagement rely on unique in-game events, promotional
                      deals, cosmetic upgrades, and adjustments to the game
                      economy. As a devoted provider of game design and
                      development services, we also integrate approaches to
                      monetize through ads and in-app purchases (IAPs).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_dev_comp_why">
          <div className="container">
            <div className="why_img_sec">
              <img
                src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/why-img1.webp"
                className="img-fluid lazyload"
                alt="Osiz_Your_go_to_game_development_company"
                title="MetaBlock Your go-to game development company.Find out why"
              />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-3 col-12">
                <h2 className="title">
                  <span style={{ color: "#FFA024" }}>MetaBlock</span> Your go-to game
                  development company. Find out why
                </h2>
                <p className="contents">
                  We pursue our passions and sources of inspiration, which is
                  why every project we undertake elevates the brand's reputation
                  and sparks lively conversations among players. Join us to
                  experience the transformative impact firsthand!
                </p>
                <div className="game_dev_btn_sec"
                
                onClick={() => navigate('/ContectUsForm')}
                >
                  <button
                    data-toggle="modal"
                    data-target="#popup_form_modal"
                    className="btn game_dev_btn"
                  >
                    <span>Tap for a Quotation</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="img_sec">
                  <img
                    src="https://www.osiztechnologies.com/asset/inner-pages-new/game-development-company/why-img.webp?v3"
                    className="img-fluid lazyload"
                    alt="Osiz_Your_go_to_game_development_company"
                    title="MetaBlock Your go-to game development company.Find out why"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="why_scrollsec">
                  <div className="why_box">
                    <h3 className="sub_title">Flex Method</h3>
                    <p className="sub_contents">
                      Our team employs an iterative and product-centric agile
                      development approach. We segment development into multiple
                      sprints, crafting functional features during each phase to
                      ensure the highest quality delivery.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Passionate Game Creators</h3>
                    <p className="sub_contents">
                      Harnessing a 350+ member team, we craft remarkable games
                      featuring innovation, captivating art, and solid design.
                      Our mastery spans both creative and business aspects of
                      video games, propelled by vigilant tracking of industry
                      trends and technology.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Eclectic Portfolio</h3>
                    <p className="sub_contents">
                      Our rich selection features over 400 impressive games
                      across Windows, Web, iOS, AR/VR, Android, and platforms.
                      Genres range from casual and hyper-casual to sports, RPG,
                      arcade, MMORPG, and action.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Different Engagement Formats</h3>
                    <p className="sub_contents">
                      We provide diverse game development options: Time and
                      Material, Resource-based, and Fixed Cost models, etc.
                      Tailor your choice to your project's scope and preferences
                      for the ideal engagement model.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Agile Connection</h3>
                    <p className="sub_contents">
                      We customize the communication process according to your
                      distinct needs. Reach out through emails, instant
                      messaging, or calls, aligning with your schedule and
                      preferences.
                    </p>
                  </div>
                  <div className="why_box">
                    <h3 className="sub_title">Ease of Access</h3>
                    <p className="sub_contents">
                      Having established ourselves as a thriving video game
                      brand, we've forged partnerships with multiple Small and
                      Medium-sized Businesses (SMBs), entrepreneurs, and
                      government entities from various sectors around the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneralGamesDevelopment;
