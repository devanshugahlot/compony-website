import Card from './MainPage/Card'
import RelatedPortfolioSlider from './MainPage/RelatedPortfolioSlider'
import AutoPlay from './MainPage/ReactSlick'
import GenerativeAl from './MainPage/GenerativeAl'
import React from "react";

const SimilarFile = () => {
  return (
    <>
    <div className="responsive-in-black-bg">


      <section className="MtaverseSec DapsMainBg OurPrjctBg" style={{background:'black'}}>

      <section className="MtaverseSec DapsMainBg OurPrjctBg">
        <div className="container container-1170">
          <div className="row">
            <div className="col-xl-10">
              <div className="OurSrvcHdd mb-3">
                <div className="title" style={{color:'purple' , margin:"0px 0px 0px -10px", width:"100%"}}>Our Projects</div>
              </div>
              <div className="BnrCnt OurservHdd mb-4 OurPrjctHddSec" style={{ textAlign:"left"}}>
                <h2 style={{width:"80vw" }}>
                Browse our impactful  <br />
                <span className="Txt8282 px-2">portfolio showcase.</span> 
                  
                </h2>
                <p className="text-left">
                Our services encompass web development, app development, game development, software development, and blockchain development.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="Portfolio-buttons col-lg-2">
              <div
                className="nav flex-column nav-pills VrtclTbb PrjctTb"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  data-toggle="pill"
                  data-target="#PrjctTbb6"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb6"
                  aria-selected="true"
                >
                  Game
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb7"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb7"
                  aria-selected="false"
                >
                  Play To Earn
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb1"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb1"
                  aria-selected="false"
                >
                  Metaverse
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb3"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb3"
                  aria-selected="false"
                >
                  Blockchain
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb4"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb4"
                  aria-selected="false"
                >
                  Exchange
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb5"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb5"
                  aria-selected="false"
                >
                  NFT
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb9"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb9"
                  aria-selected="false"
                >
                  DeFi
                </button>
                <button
                  className="nav-link"
                  data-toggle="pill"
                  data-target="#PrjctTbb10"
                  type="button"
                  role="tab"
                  aria-controls="PrjctTbb10"
                  aria-selected="false"
                >
                  Dapp
                </button>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="PrjctTbb6"
                  role="tabpanel"
                >
                  <div>
                    <div className="PrjctDtlsItm game-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">Game</div>
                            <p>
                              Ready to take your gaming experience to the next
                              level? Look no further than Osiz Technologies. Our
                              cutting-edge software and expert developers have
                              created some of the most immersive games on the
                              market. From action-packed shooters to strategy
                              games that will keep you on your toes, we've got
                              it all. And with our seamless multiplayer
                              capabilities, you can connect with players from
                              around the world for an even more exciting
                              experience. Don't settle for mediocre games -
                              choose Osiz Technologies for the ultimate gaming
                              adventure!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec game_PrjctBtn">
                        <div className="mr-4 mb-4">
                          <div className="PrjctBtn_new Btn211-42">
                            NFT Game Development
                          </div>
                        </div>
                        <div className="mr-4 mb-4">
                          <div className="PrjctBtn_new Btn211-42">
                            Metaverse Game Development
                          </div>
                        </div>
                        <div className="mr-4 mb-4">
                          <div className="PrjctBtn_new Btn211-42">
                            Blockchain Game Development
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec game_PrjctBtn">
                        <div className="mr-4 mb-4">
                          <div className="PrjctBtn_new Btn211-42">
                            Crypto Casino Game Development
                          </div>
                        </div>
                        <div className="mr-4 mb-4">
                          <div className="PrjctBtn_new Btn211-42">
                            Web3 Game Development
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
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
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio2.webp"
                                alt="Game Portfolio2"
                                title="Game Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio3.webp"
                                alt="Game Portfolio3"
                                title="Game Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio4.webp"
                                alt="Game Portfolio4"
                                title="Game Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio5.webp"
                                alt="Game Portfolio5"
                                title="Game Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/game-portfolio6.webp"
                                alt="Game Portfolio6"
                                title="Game Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb1" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm meta-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">Metaverse</div>
                            <p>
                              Looking to enter the world of the Metaverse? Look
                              no further, as Metaverse is the next generation of
                              the internet where physical and digital worlds
                              collide. Osiz is at the forefront of at the
                              forefront of this revolutionary technology,
                              offering cutting-edge solutions for businesses and
                              individuals alike. Our team of experts creates
                              immersive experiences that allow users to interact
                              with virtual environments, socialize with others,
                              and even conduct business in a decentralized
                              marketplace.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="PrjctImg text-center">
                            <img
                              src="https://www.osiztechnologies.com/asset/home-page-new/images/meta-img.webp "
                              alt="Metaverse"
                              title="Metaverse"
                              loading="eager"
                              className="img-fluid lazyload"
                              width="70%"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Metaverse_Game"
                          >
                            Metaverse Game
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Metaverse_Casino_Game"
                          >
                            Metaverse Casino Game
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Metaverse_NFT_Marketplace"
                          >
                            Metaverse NFT Marketplace
                          </button>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Metaverse_Wallet"
                          >
                            Metaverse Wallet
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Metaverse_Token"
                          >
                            Metaverse Token
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Metaverse_Industries"
                          >
                            Metaverse For Industries
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse1.webp"
                                alt="metaverse Portfolio1"
                                title="metaverse Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse2.webp"
                                alt="metaverse Portfolio2"
                                title="metaverse Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse3.webp"
                                alt="metaverse Portfolio3"
                                title="metaverse Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse4.webp"
                                alt="metaverse Portfolio4"
                                title="metaverse Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse5.webp"
                                alt="metaverse Portfolio5"
                                title="metaverse Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse6.webp"
                                alt="metaverse Portfolio6"
                                title="metaverse Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse7.webp"
                                alt="metaverse Portfolio7"
                                title="metaverse Portfolio7"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse8.webp"
                                alt="metaverse Portfolio8"
                                title="metaverse Portfolio8"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/metaverse9.webp"
                                alt="metaverse Portfolio9"
                                title="metaverse Portfolio9"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb3" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm blkchain-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">Blockchain</div>
                            <p>
                              Looking to leap towards the blockchain platform.
                              From integrating blockchain into your existing
                              systems to building a new decentralized
                              application from scratch, we've got you covered.
                              Leverage the power of blockchain with end-to-end
                              development services with experts from Osiz. With
                              cutting-edge technology, we empower businesses to
                              manage their data securely and efficiently,
                              transactions, and operations. Revolutionize your
                              business with the transformative potential of
                              blockchain technology with our assistance.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="PrjctImg text-center">
                            <img
                              src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain-img.webp "
                              alt="Blockchain"
                              title="Blockchain"
                              loading="eager"
                              className="img-fluid lazyload"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Smart_Contract_Development"
                          >
                            Smart Contract Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Private/Public Blockchain"
                          >
                            Private/Public Blockchain
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Blockchain Industries"
                          >
                            Blockchain For Industries
                          </button>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="POC Development"
                          >
                            POC Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Enterprise Blockchain Solutions"
                          >
                            Enterprise Blockchain Solutions
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain1.webp"
                                alt="Blockchain Portfolio1"
                                title="Blockchain Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain2.webp"
                                alt="Blockchain Portfolio2"
                                title="Blockchain Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain3.webp"
                                alt="Blockchain Portfolio3"
                                title="Blockchain Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain4.webp"
                                alt="Blockchain Portfolio4"
                                title="Blockchain Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/blockchain5.webp"
                                alt="Blockchain Portfolio5"
                                title="Blockchain Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb4" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">Exchange</div>
                            <p>
                              Looking for a secure and reliable cryptocurrency
                              exchange platform? Avail of the services from Osiz
                              as we are equipped with white-label cryptocurrency
                              exchange software that is multi-tested and
                              feature-drenched. Leverage our exchange software
                              which is built with advanced security features to
                              ensure the safety of your transactions. With an
                              intuitive user interface, buying and selling
                              cryptocurrencies has been made easier than before.
                              Reach us to unlock the potential of future finance
                              to enter the platform of digitalization.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="PrjctImg">
                            <img
                              src="https://www.osiztechnologies.com/asset/home-page-new/images/prjct-img.webp "
                              alt="Exchange"
                              title="Exchange"
                              loading="eager"
                              className="img-fluid lazyload"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Crypto Exchange"
                          >
                            Crypto Exchange Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Crypto MLM"
                          >
                            Crypto MLM Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Crypto HYIP"
                          >
                            Crypto HYIP Development
                          </button>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Cryptocurrency"
                          >
                            Cryptocurrency Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Stablecoin/Altcoin Development"
                          >
                            Stablecoin/Altcoin Development
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange1.webp"
                                alt="Exchange Portfolio1"
                                title="Exchange Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange2.webp"
                                alt="Exchange Portfolio2"
                                title="Exchange Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange3.webp"
                                alt="Exchange Portfolio3"
                                title="Exchange Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange4.webp"
                                alt="Exchange Portfolio4"
                                title="Exchange Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/exchange5.webp"
                                alt="Exchange Portfolio1"
                                title="Exchange Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb5" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm nft-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">NFT</div>
                            <p>
                              Looking to own a piece of digital art that's
                              unique and verified? Discover the future of
                              digital ownership with prominent services from
                              Osiz. Our secure and efficient blockchain-based
                              NFT platform allows creators to tokenize their
                              unique digital assets, from art to music and
                              beyond. With NFTs, you can ensure your creations
                              are authentic, scarce, and valuable. Join the NFT
                              revolution today and monetize your digital
                              creations get started with Osiz to create, sell,
                              and trade your NFTs with ease and security.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="NFT Marketplace"
                          >
                            NFT Marketplace Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="NFT Game"
                          >
                            NFT Game Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="NFT Token"
                          >
                            NFT Token Development
                          </button>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="White Label NFT Solutions"
                          >
                            White Label NFT Solutions
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Launchpad Solutions"
                          >
                            Launchpad Solutions
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Fractional NFT Marketplace"
                          >
                            Fractional NFT Marketplace
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft1.webp"
                                alt="NFT Portfolio1"
                                title="NFT Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft2.webp"
                                alt="NFT Portfolio2"
                                title="NFT Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft3.webp"
                                alt="NFT Portfolio3"
                                title="NFT Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft4.webp"
                                alt="NFT Portfolio4"
                                title="NFT Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft5.webp"
                                alt="NFT Portfolio5"
                                title="NFT Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/nft6.webp"
                                alt="NFT Portfolio6"
                                title="NFT Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb7" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm play-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">Play To Earn</div>
                            <p>
                              Dominate the world of blockchain gaming with our
                              cutting-edge solutions from a prominent Play To
                              Earn Development company like Osiz. Leverage our
                              end-to-end development services that include game
                              design, smart contract development, wallet
                              integration, and more. Our expert blockchain game
                              developers help you create a seamless and secure
                              platform for your users with the benefits of
                              earning rewards while gameplay.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="PrjctImg text-center">
                            <img
                              src="https://www.osiztechnologies.com/asset/home-page-new/images/play-1.webp "
                              alt="Play To Earn"
                              title="Play To Earn"
                              loading="eager"
                              className="img-fluid lazyload"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Axie Infinity"
                          >
                            Axie Infinity Clone
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Decentraland Clone"
                          >
                            Decentraland Clone
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Gods Unchained Clone"
                          >
                            Gods Unchained Clone
                          </button>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Zed Run Clone"
                          >
                            Zed Run Clone
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Splinterlands Clone"
                          >
                            Splinterlands Clone
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Sandbox Clone"
                          >
                            Sandbox Clone
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn1.webp"
                                alt="Play To Earn Portfolio1"
                                title="Play To Earn Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn2.webp"
                                alt="Play To Earn Portfolio2"
                                title="Play To Earn Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn3.webp"
                                alt="Play To Earn Portfolio3"
                                title="Play To Earn Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn4.webp"
                                alt="Play To Earn Portfolio4"
                                title="Play To Earn Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn5.webp"
                                alt="Play To Earn Portfolio5"
                                title="Play To Earn Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/playtoearn6.webp"
                                alt="Play To Earn Portfolio6"
                                title="Play To Earn Portfolio6"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb9" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm defi-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">DeFi</div>
                            <p>
                              Launch a secure, robust, scalable, and
                              interoperable DeFi platform with services from a
                              leading DeFi Development Company like Osiz. Employ
                              our blockchain expert and fetch our end-to-end
                              defi service that ranges from wallet integration
                              to DEX and token, dApps, etc. Unlock the potential
                              of DeFi as it provides a decentralized network
                              with enhanced transparency, security, and trust.
                              Change the way around where your money works for
                              you.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="PrjctImg text-center">
                            <img
                              src="https://www.osiztechnologies.com/asset/home-page-new/images/defi-tab-1.webp "
                              alt="DeFi"
                              title="DeFi"
                              loading="eager"
                              className="img-fluid lazyload"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="DeFi Development"
                          >
                            DeFi Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="DeFi Wallet"
                          >
                            DeFi Wallet Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="DeFi Exchange"
                          >
                            DeFi Exchange Development
                          </button>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="DeFi Token"
                          >
                            DeFi Token Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="DeFi Smartcontract"
                          >
                            DeFi Smartcontract
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Pancakeswap Clone"
                          >
                            Pancakeswap Clone
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi1.webp"
                                alt="DeFi Portfolio1"
                                title="DeFi Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi2.webp"
                                alt="DeFi Portfolio2"
                                title="DeFi Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi3.webp"
                                alt="DeFi Portfolio3"
                                title="DeFi Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi4.webp"
                                alt="DeFi Portfolio4"
                                title="DeFi Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/defi5.webp"
                                alt="DeFi Portfolio5"
                                title="DeFi Portfolio5"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="PrjctTbb10" role="tabpanel">
                  <div>
                    <div className="PrjctDtlsItm dapp-1">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="PrjctDtlCnt">
                            <div className="port_sub_title">Dapp</div>
                            <p>
                              Devise and deploy a secure and scalable
                              decentralized application with assistance from a
                              leading DApp Development Company. Reach Osiz as
                              our professional developers help you provide an
                              intuitive user experience by integrating
                              cutting-edge technologies and tools. We serve
                              various domains like Metaverse, DeFi, NFT, Gaming,
                              Exchanges, and more with our expertise. Join the
                              decentralized revolution with our cutting-edge
                              Dapp solutions.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="PrjctImg text-center">
                            <img
                              src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp-tab-1.webp "
                              alt="Dapp"
                              title="Dapp"
                              loading="eager"
                              className="img-fluid lazyload"
                              width="60%"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="PrjctsBtnSec">
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Dapp Development"
                          >
                            Dapp Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Tron Dapp"
                          >
                            Tron Dapp Development
                          </button>
                        </div>
                        <div className="mr-4 mb-4">
                          <button
                            type="button"
                            className="btn PrjctBtn Btn211-42"
                            aria-label="Ethereum Dapp"
                          >
                            Ethereum Dapp Development
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="RltdPrtflo">
                      <div className="RltdPrjHddSec">
                        <div className="RltdPrjHdd">
                          <div className="h5_title">Related Portfolio</div>
                        </div>
                      </div>
                      {/* <div className="PrjctExmpls slider">
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp1.webp"
                                alt="Dapp Portfolio1"
                                title="Dapp Portfolio1"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp2.webp"
                                alt="Dapp Portfolio2"
                                title="Dapp Portfolio2"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp3.webp"
                                alt="Dapp Portfolio3"
                                title="Dapp Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp4.webp"
                                alt="Dapp Portfolio4"
                                title="Dapp Portfolio4"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="PrjctExmplsImg">
                              <img
                                data-toggle="modal"
                                data-target="#portfolio_modal"
                                src="https://www.osiztechnologies.com/asset/home-page-new/images/dapp3.webp"
                                alt="Dapp Portfolio3"
                                title="Dapp Portfolio3"
                                loading="eager"
                                className="img-fluid lazyload"
                              />
                            </div>
                          </div>
                        </div> */}
                      <RelatedPortfolioSlider />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
       <GenerativeAl/>
      </section>
      <section className='AutoPlay-section' style={{background:'black'}}>
        <AutoPlay />
      </section>
    
      <section className="MtaverseSec DapsMainBg OurBlgBg" style={{background:'black'}}>
        <div className="container container-1170">
          <div className="row align-items-center">
            <div className="col-xl-9">
              <div className="OurSrvcHdd mb-3">
                <div className="blog_title">Our Blog</div>
              </div>
              <div className="BnrCnt OurservHdd mb-4">
                <h2 className="mb-4">
                  Outspoken thoughts related to
                  <span className="Txt8282 px-2">blockchain</span>
                </h2>
                <p className="col-lg-6 pl-0">
                  Get frequent updates on the latest tech trends with our
                  substantial work guide.
                </p>
              </div>
            </div>
            <div className="col-xl-3 text-right">
              <div className=" ">
                <a
                  href="https://www.osiztechnologies.com/blog"
                  className="ViwallLnk"
                  role="link"
                  aria-label="View All"
                  target="_blank"
                >
                  <span className="VwAllLnkHov">
                    View All
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Card />
      </section>
      {/* <section>
          <Card />
        </section> */}
      <main className="faq_main">
        <section className="faq_section_new">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-12">
                <div className="mid_section">
                  <div className="section-heading">
                    <p className="faq_title">
                      Frequently Asked <br /> Questions (FAQs)
                    </p>
                    <p className="faq_contents" />
                  </div>
                </div>
                <div className="job-cnt">
                  <div className="panel-group" id="accordion">
                    <div className="panel panel-default" role="tablist">
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne1"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne1"
                            aria-expanded="false"
                            aria-controls="collapseOne1"
                          >
                            <p className="qus_title">
                              1. What is the metaverse and why is it gaining
                              popularity?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne1"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne1"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            The metaverse refers to a virtual universe where
                            people can interact with each other and digital
                            entities in real time. It is gaining popularity due
                            to its potential to revolutionize various
                            industries, including gaming, entertainment, social
                            networking, e-commerce, and more. The metaverse
                            offers immersive experiences, limitless
                            possibilities, and new avenues for communication and
                            collaboration.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default" role="tablist">
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne2"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne2"
                            aria-expanded="false"
                            aria-controls="collapseOne2"
                          >
                            <p className="qus_title">
                              2. What is Metaverse Development?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne2"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne2"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            Metaverse Development refers to the process of
                            creating virtual environments, often using 3D
                            technologies, that enable users to interact with
                            each other and digital objects in a shared,
                            immersive space. It involves the design, coding, and
                            integration of various elements to build these
                            digital realms, which may include virtual reality
                            (VR), augmented reality (AR), and mixed reality (MR)
                            experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default" role="tablist">
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne3"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne3"
                            aria-expanded="false"
                            aria-controls="collapseOne3"
                          >
                            <p className="qus_title">
                              3. How can I get started with metaverse
                              development for my project or business?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne3"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne3"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            To get started with metaverse development, you can
                            explore resources, online courses, and communities
                            related to 3D modeling, game development, AR/VR
                            technologies, and software development.
                            Additionally, you can engage with Osiz - a leading
                            metaverse development company. We provide guidance
                            and support for your specific metaverse project or
                            business needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default" role="tablist">
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne4"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne4"
                            aria-expanded="false"
                            aria-controls="collapseOne4"
                          >
                            <p className="qus_title">
                              4. What's the expected timeframe for creating a
                              metaverse?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne4"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne4"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            The timeframe for creating a metaverse can vary
                            significantly depending on the scope and complexity
                            of the project. A simple metaverse project might
                            take a few months, while more ambitious, large-scale
                            metaverse initiatives could take several months to
                            develop fully.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default" role="tablist">
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne5"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne5"
                            aria-expanded="false"
                            aria-controls="collapseOne5"
                          >
                            <p className="qus_title">
                              5. What benefits can Metaverse development bring
                              to your business?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne5"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne5"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            Metaverse development can offer several significant
                            benefits to your business: Access to Global Markets,
                            Enhanced Customer Engagement, Collaboration and
                            Remote Work, Virtual Product Testing, Brand
                            Exposure, Training and Education, Gaming &amp;
                            Entertainment, Data Analytics, Innovation and
                            Competitive Advantage. These are the highlighted
                            advantages of using the metaverse in business.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default" role="tablist">
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne6"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne6"
                            aria-expanded="false"
                            aria-controls="collapseOne6"
                          >
                            <p className="qus_title">
                              6. What are the top companies specializing in
                              metaverse development?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne6"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne6"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            There are several companies at the forefront of
                            metaverse development. Some of the top companies
                            include: Microsoft, Osiz Technologies, GamesdApp,
                            Queppelin and Aetsoft.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="panel panel-default"
                      role="tablist"
                      style={{ display: "none" }}
                    >
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne7"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne7"
                            aria-expanded="false"
                            aria-controls="collapseOne7"
                          >
                            <p className="qus_title">
                              7. What kind of metaverse software development
                              services does Osiz offer?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne7"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne7"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            Osiz offers a range of metaverse software
                            development services, including metaverse app
                            development, virtual reality development, augmented
                            reality development, blockchain integration,
                            artificial intelligence integration, and more. We
                            work with clients to create custom solutions that
                            meet their unique needs and requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="panel panel-default"
                      role="tablist"
                      style={{ display: "none" }}
                    >
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne8"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne8"
                            aria-expanded="false"
                            aria-controls="collapseOne8"
                          >
                            <p className="qus_title">
                              8. How much does it cost to develop a metaverse?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne8"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne8"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            The cost of developing a metaverse can vary
                            significantly and depends on various factors,
                            including the scale, complexity, and specific
                            features of the metaverse. Small-scale projects can
                            begin with a budget of a few thousand dollars, while
                            the cost of large-scale, fully immersive metaverse
                            development can vary significantly based on the
                            project's specific requirements and scale.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="panel panel-default"
                      role="tablist"
                      style={{ display: "none" }}
                    >
                      <div
                        className="panel-heading"
                        role="tab"
                        aria-selected="true"
                        id="headingOne9"
                      >
                        <div className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne9"
                            aria-expanded="false"
                            aria-controls="collapseOne9"
                          >
                            <p className="qus_title">
                              9. How can businesses get started with metaverse
                              development for their specific needs?
                            </p>
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne9"
                        className="panel-collapse collapse"
                        aria-labelledby="headingOne9"
                        data-parent="#accordion"
                      >
                        <div className="panel-body job-cnt-hd">
                          <p>
                            <strong> </strong>
                          </p>
                          <p>
                            Define clear objectives and goals for metaverse
                            development.
                          </p>
                          <p>
                            Research and choose a development team or partner
                            with expertise in metaverse technologies.
                          </p>
                          <p>
                            Create a detailed project plan that aligns with your
                            business needs.
                          </p>
                          <p>
                            Consider pilot projects or smaller initiatives to
                            test the waters.
                          </p>
                          <p>
                            Continuously gather feedback from users and iterate
                            on the development to improve the user experience
                            and meet business goals.
                          </p>
                          <p> </p>
                          <p>
                            Our Metaverse expert will guide you throughout the
                            ideation and project development cycle.
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="faq_load_btn_sec">
                      <a
                        href="#"
                        id="loadMore"
                        className="nav-link btn btn_skype faq_load_btn"
                        style={{ display: "block" }}
                      >
                        Load More
                      </a>
                      <a
                        href="#"
                        id="loadless"
                        className="nav-link btn btn_skype faq_load_btn"
                        style={{ display: "none" }}
                      >
                        Load Less{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </section>

    </div>


    </>
  );
};

export default SimilarFile;
