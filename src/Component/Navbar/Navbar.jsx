import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import YourComponent from "./Nav-button";
import ContactForm from "./Nav-button";
import TemporaryDrawer from "./ResponsiveNavbar";
import ResponsiveDrawer from "../Sidebar/Sidebar";

const Navbar = () => {
  const navigate = useNavigate();

  const WebData = [
    {
      name: "Static Website",
      path: "/Static",
    },
    {
      name: "Dynamic Website",
      path: "/DynamicWebsite",
    },
    {
      name: "E-Commerce Website Single & Multi Wendor",
      path: "/Ecommerce",
    },
  ];

  const SoftData = [
    {
      name: "ERP Software",
      path: "/ERPSoftware",
    },
    {
      name: "SAAS Software",
      path: "/SAASSoftware",
    },
    {
      name: "Warehouse Managment Software",
      path: "/WarehouseManagmentSoftware",
    },
    {
      name: "HRMS Software",
      path: "/HRMSSoftware",
    },
    {
      name: "Inventory Managment Software",
      path: "/InventoryManagmentSoftware",
    },
    {
      name: "Accounting & Billing Software",
      path: "/AccountingBillingSoftware",
    },
    {
      name: "POS System Software",
      path: "/POSSystemSoftware",
    },
    {
      name: "Employee Tracking Software",
      path: "/EmployeeTrackingSoftware",
    },
    {
      name: "Attendance System Software",
      path: "/AttendanceSystemSoftware",
    },
    {
      name: "Library Managment System",
      path: "/LibraryManagmentSystem",
    },
    {
      name: "LMS With Live Class Software",
      path: "/LMSWithLiveClassSoftware",
    },
    {
      name: "University Managment  Software",
      path: "/UniversityManagmentSoftware",
    },
    {
      name: "Quiz System Software",
      path: "/QuizSystemSoftware",
    },
  ];

  const SoftData1 = [
    {
      name: "Astrology Software",
      path: "/AstrologySoftware",
    },
    {
      name: "Travel Booking Software",
      path: "/TravelBookingSoftware",
    },
    {
      name: "Matrimonial Software",
      path: "/MatrimonialSoftware",
    },
    {
      name: "Restaurant Managment System Software",
      path: "/RestaurantManagmentSystemSoftware",
    },
    {
      name: "Hotel Managment Software",
      path: "/HotelManagmentSoftware",
    },
    {
      name: "Event management Software",
      path: "/EventmanagementSoftware",
    },
    {
      name: "Hospital Managment System Software",
      path: "/HospitalManagmentSystemSoftware",
    },
    {
      name: "Real state Software",
      path: "/RealstateSoftware",
    },
    {
      name: "Clinic Managment System Software",
      path: "/ClinicManagmentSystemSoftware",
    },
    {
      name: "MLM Software",
      path: "/MLMSoftware",
    },
    {
      name: "Trading Software",
      path: "/TradingSoftware",
    },
    {
      name: "Job Portal Software",
      path: "/JobPortalSoftware",
    },
  ];

  const AppData = [
    {
      name: "Cab Booking Apps",
      path: "/CabBookingApps",
    },
    {
      name: "Grocery Apps",
      path: "/GroceryApps",
    },
    {
      name: "Travelling Apps",
      path: "/TravellingApps",
    },
    {
      name: "Chatting Apps",
      path: "/ChattingApps",
    },
    {
      name: "Fitness Apps",
      path: "/FitnessApps",
    },
    {
      name: "Rental Apps",
      path: "/RentalApps",
    },
    {
      name: "Dating Apps",
      path: "/DatingApps",
    },
    {
      name: "Astrology Apps",
      path: "/AstrologyApps",
    },
  ];

  const AppData1 = [
    {
      name: "Food delivery Apps",
      path: "/FooddeliveryApps",
    },
    {
      name: "Social Media Apps",
      path: "/SocialMediaApps",
    },
    {
      name: "Learning Managment Apps",
      path: "/LearningManagmentApps",
    },
    {
      name: "Ecommerce Apps",
      path: "/EcommerceApps",
    },
    {
      name: "Multivendor Home Service Apps",
      path: "/MultivendorHomeServiceApps",
    },
  ];

  const MetaData = [
    {
      name: "Metaverse Development",
      path: "/MetaverseDevelopment",
    },
    {
      name: "Metaverse Game Development",
      path: "/MetaverseGameDevelopment",
    },
    {
      name: "Metaverse NFT Marketplace Development",
      path: "/MetaverseNFTMarketplaceDevelopment",
    },
    {
      name: "Metaverse Virtual Showroom  Development",
      path: "/MetaverseVirtualShowroomDevelopment",
    },
    {
      name: "Metaverse Event Platform Development",
      path: "/MetaverseEventPlatformDevelopment",
    },
    {
      name: "Metaverse Avatar Development",
      path: "/MetaverseAvatarDevelopment",
    },
  ];

  const MetaData1 = [
    {
      name: "Metaverse Social Media Platform Development",
      path: "/MetaverseSocialMediaPlatformDevelopment",
    },
    {
      name: "Metaverse Real Estate Development",
      path: "/MetaverseRealEstateDevelopment",
    },
    {
      name: "Metaverse Virtual Land Development",
      path: "/MetaverseVirtualLandDevelopment",
    },
    {
      name: "Metaverse Launchpad Development",
      path: "/MetaverseLaunchpadDevelopment",
    },
  ];

  const BlockChain = [
    {
      name: "Smart Contract Developemnt",
      path: "/SmartContractDevelopemnt",
    },
    {
      name: "Private / Public Blockchain Development",
      path: "/Private/PublicBlockchainDevelopment",
    },
    {
      name: "DAO Blockchain Developmnent",
      path: "/DAOBlockchainDevelopmnent",
    },
    {
      name: "Blockchain in SupplyChain",
      path: "/BlockchainSupply",
    },
    {
      name: "Blockchain in Voting ",
      path: "/BlockchainVoting",
    },
    {
      name: "Blockchain in Live Aution",
      path: "/BlockchainLiveAution",
    },
    {
      name: "Blockchain in Document Verifiction",
      path: "/BlockchainDocument",
    },
    {
      name: "Blockchain in  Identity Verifiction",
      path: "/BlockchainIdentityVerifiction",
    },
  ];

  const Wallet = [
    {
      name: "Trust Wallet Clone Development ",
      path: "/TrustWalletCloneDevelopment",
    },
    { name: "Wallet Connect Clone Development", path: "/" },
    {
      name: "White Paper Writting Services",
      path: "/WhitePaperWrittingServices",
    },
  ];

  const Token = [
    {
      name: "Semi -Fungible Token Development",
      path: "/SemiFungibleTokenDevelopment",
    },
    {
      name: "Binanace Smart Chain BEP20 Token Development",
      path: "/BinanaceSmartChainBEP20TokenDevelopment",
    },
    {
      name: "Ethereum Token Development",
      path: "/EthereumTokenDevelopment",
    },
  ];

  const DEX = [
    {
      name: "Pancakeswap Exchange Clone Development",
      path: "/PancakeswapExchange",
    },
    {
      name: "Uniswap Exchange Clone Developemnt",
      path: "/UniswapExchange",
    },
    {
      name: "SushiSwap Exchange Clone Developement",
      path: "/SushiSwapExchange",
    },
    {
      name: "White Label Exchange Development",
      path: "/WhiteLabel",
    },
  ];

  const Defi = [
    {
      name: "DeFi Staking Platform Development",
      path: "/DefiStaking",
    },
    { name: "DeFi Token Development", path: "/DeFiTokenDevelopment" },
    { name: "DeFI Wallet Development", path: "/DeFiWalletDevelopment" },
    {
      name: "DeFi Smart Contract Development",
      path: "/DeFiSmartContractDevelopment",
    },

    { name: "DeFi DApps Development", path: "/DeFiDAppsDevelopment" },
    { name: "DeFi Insurance Development", path: "/DeFiInsuranceDevelopment" },
  ];

  const NFT = [
    {
      name: "NFT Token Development",
      path: "/NFTToken",
    },
    {
      name: "NFT Marketplace Development",
      path: "/NFTMarketplace",
    },
    {
      name: "NFT Crosschain Platfrom Development",
      path: "/NFTCrosschainPlatfromDevelopment",
    },
    { name: "NFT Minting Development", path: "/NFTMintingDevelopment" },
    {
      name: "NFT Art Marketplace Development",
      path: "/NFTArtMarketplaceDevelopment",
    },
    {
      name: "NFT Music Marketplace Development",
      path: "/NFTMusicMarketplaceDevelopment",
    },
    {
      name: "NFT Fantasy Sports Platform Development",
      path: "/NFTFantasySportsPlatformDevelopment",
    },
    { name: "NFT Lending Platform Development", path: "/NFTLendingPlatform" },
    { name: "Binance NFT Marketplace Development", path: "/BinanceNFT" },
    { name: "Polygon NFT Marketplace Development", path: "/PolygonNFT" },
  ];

  const Launchpad = [
    {
      name: "GameFi Launchapd Developemnt",
      path: "/GameFiLaunchapd",
    },
    {
      name: "Lunchpad Development",
      path: "/LunchpadDevelopment",
    },
  ];

  return (
    <div>
      <header className="HddrBg">
        <nav
          style={{
            display: "flex",
            cursor: "pointer",
            padding: "10px 0px 10px 0px",
          }}
          className="navbar navbar-expand-lg"
        >
          <div className="container-fluid">
            <div className="logo_header">
              <a onClick={() => navigate("/")} className>
                <img
                  src="/NewImages/logo2.png"
                  className="img-fluid mbl_res_logo"
                  alt="osiz"
                  title="osiz"
                  style={{ margin: "0px 100px 0px 20px" , width:"120px" }}
                />
              </a>
            </div>

            {/* <button type="button" onclick="this.classList.toggle('active')" className="plate navbar-toggle CollBTn collapsed sm-only ui" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-expanded="false" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
          <svg className viewBox="0 13 75 75" xmlns="http://www.w3.org/2000/svg" onclick="this.classList.toggle('active')">
            <path className="line line_1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className="line line_2" d="M0 50h70" />
            <path className="line line_3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </button> */}
            <div
              className="CllpsMenu collapse navbar-collapse w-100 "
              id="navbarNavAltMarkup"
              style={{ marginLeft: "50px", marginTop: "-20px" }}
            >
              <ul className="navbar-nav HddrLnks HdrSroll navMnuMn w-100">
                {/* ----------------------------------------navbar starts now -------------------------------------------------------*/}

                {/* -------------------------- Website Development------------------------------------- */}
                <li className="nav-item menu_desk">
                  <a
                    onClick={() => navigate("/WbsiteDevelopment")}
                    className="nav-link"
                    href="#"
                  >
                    Website
                  </a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {WebData.map((item, index) => (
                              <li
                                onClick={() => navigate(item.path)}
                                key={index}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                  style={{ width: "200px" }}
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* -------------------------- Software Development------------------------------------- */}

                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">
                    Software
                  </a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {SoftData.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(item.path)}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {SoftData1.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(item.path)}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* --------------------------------Main Blockchain development -------------------------------------*/}

                <li className="nav-item menu_desk">
                  <a
                    onClick={() => navigate("/MainBlockchain")}
                    className="nav-link"
                  >
                    Blockchain
                  </a>
                  <div className="sub-menu" style={{ width: "250px" }}>
                    <div className="row">
                      {/* ----------------------BLockchain development */}
                      <div className="col-lg-12 ">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textDecoration: "none" }}
                              >
                                BlockChain Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {BlockChain.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            target="_blank"
                                            style={{ color: "white" }}
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <li><a href="https://www.osiztechnologies.com/press-release" target="_blank">Press Release</a></li> */}

                            {/* <li><a href="https://www.osiztechnologies.com/write-a-review" target="_blank">Write a Review</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/testimonials" target="_blank">Testimonials</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/complaints-board" target="_blank">Complaint Board</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/feedback" target="_blank">Feedback</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/scam" target="_blank">Report the Scammers</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/case-studies" target="_blank">Case Studies</a></li> */}
                          </ul>
                        </div>
                      </div>

                      {/* ----------------------Launchpad development */}
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textDecoration: "none" }}
                              >
                                Launchpad Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {Launchpad.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            style={{ color: "white" }}
                                            target="_blank"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>

                      {/* ----------------------Wallet development */}
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textDecoration: "none" }}
                              >
                                Wallet Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {Wallet.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            style={{ color: "white" }}
                                            target="_blank"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>

                      {/* ----------------------Token development */}

                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textDecoration: "none" }}
                              >
                                Token Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {Token.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            style={{ color: "white" }}
                                            target="_blank"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>

                      {/* ----------------------Defi development */}
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textDecoration: "none" }}
                              >
                                DeFi Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {Defi.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            style={{ color: "white" }}
                                            target="_blank"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                      {/* ----------------------NFT development */}

                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                style={{ textDecoration: "none" }}
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                NFT Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {NFT.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            style={{ color: "white" }}
                                            target="_blank"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>

                      {/* ----------------------DEX development */}

                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textDecoration: "none" }}
                              >
                                DEX Development
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      {DEX.map((item, index) => (
                                        <li
                                          onClick={() => navigate(item.path)}
                                          key={index}
                                        >
                                          <a
                                            //  href="https://www.osiztechnologies.com/about-us"
                                            style={{ color: "white" }}
                                            target="_blank"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* -------------------------- Application Development------------------------------------- */}

                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">
                    Application
                  </a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {AppData.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(item.path)}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {AppData1.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(item.path)}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* -------------------------- Metaverse Development------------------------------------- */}

                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">
                    Metaverse
                  </a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {MetaData.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(item.path)}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            {MetaData1.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => navigate(item.path)}
                              >
                                <a
                                  // href="#"
                                  target="_blank"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* -------------------------- no use ------------------------------------- */}

                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Metaverse
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/metaverse-ecosystem"
                          target="_blank"
                        >
                          Metaverse Ecosystem
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/metaverse-development-company"
                          target="_blank"
                        >
                          Metaverse Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/metaverse-game-development"
                          target="_blank"
                        >
                          Metaverse Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-token-development"
                          target="_blank"
                        >
                          Metaverse Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-nft-marketplace-development"
                          target="_blank"
                        >
                          Metaverse NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-event-platform-development"
                          target="_blank"
                        >
                          Metaverse Event Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-virtual-mall-development"
                          target="_blank"
                        >
                          Metavere Virtual Mall Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-social-media-platform-development"
                          target="_blank"
                        >
                          Metaverse Social Media Platform Development
                        </a>
                      </li>
                      {/* <li><a href="https://www.osiztechnologies.com/request-for-quotation" target="_blank">Metaverse E-commerce Development</a></li> */}
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-real-estate-development"
                          target="_blank"
                        >
                          Metaverse Real Estate Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-avatar-development"
                          target="_blank"
                        >
                          Metaverse Avatar Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-3d-space-development"
                          target="_blank"
                        >
                          Metaverse 3d Space Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/request-for-quotation"
                          target="_blank"
                        >
                          Metaverse Solutions for Industries
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-launchpad-development"
                          target="_blank"
                        >
                          Metaverse Launchpad Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-business-ideas-2023"
                          target="_blank"
                        >
                          Metaverse Business Ideas
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/metaverse-virtual-land-development"
                          target="_blank"
                        >
                          Metaverse Virtual Land Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/top-10-metaverse-development-companies"
                          target="_blank"
                        >
                          Top 10 Metaverse Development Company
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    AI
                  </a>
                  <div className="dropdown-menu compyMenuResHight">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/ai-development-company"
                          target="_blank"
                        >
                          AI Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/generative-ai-development-company"
                          target="_blank"
                        >
                          Generative AI Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/ai-nft-image-generator-development"
                          target="_blank"
                        >
                          AI NFT Generator Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/ai-crypto-trading-bot-development"
                          target="_blank"
                        >
                          AI Crypto Trading Bot Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/ai-chat-bot-development"
                          target="_blank"
                        >
                          AI Chatbot Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/customized-chatgpt-app"
                          target="_blank"
                        >
                          Custom ChatGPT APP
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/ai-business-ideas"
                          target="_blank"
                        >
                          Top 10 AI Business Ideas
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/chatgpt-for-information-technology"
                          target="_blank"
                        >
                          ChatGPT for IT
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    NFT
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/nft-development-company"
                          target="_blank"
                        >
                          NFT Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/nft-marketplace-development"
                          target="_blank"
                        >
                          NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/nft-game-development"
                          target="_blank"
                        >
                          FT Gaming Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/nft-token-development"
                          target="_blank"
                        >
                          NFT Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/white-label-nft-marketplace-development"
                          target="_blank"
                        >
                          White Label NFT Solution
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-minting-platform-development"
                          target="_blank"
                        >
                          NFT Minting Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-exchange-development"
                          target="_blank"
                        >
                          NFT Exchange Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-launchpad-development"
                          target="_blank"
                        >
                          NFT Launchpad Development
                        </a>
                      </li>
                      {/* <li><a href="https://www.osiztechnologies.com/blog/request-for-quotation" target="_blank">NFT for Real Estate</a></li> */}
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-fashion-marketplace-development"
                          target="_blank"
                        >
                          NFT Fashion Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-art-marketplace-development"
                          target="_blank"
                        >
                          NFT Art Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-music-marketplace-development"
                          target="_blank"
                        >
                          NFT Music Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/carbon-credits-nft-marketplace-development"
                          target="_blank"
                        >
                          Carbon Credits NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/binance-nft-marketplace-clone-script"
                          target="_blank"
                        >
                          Binance NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/polygon-matic-nft-marketplace-development"
                          target="_blank"
                        >
                          Polygon NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/solana-nft-marketplace-development"
                          target="_blank"
                        >
                          Solana NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/influencer-nft-marketplace-development"
                          target="_blank"
                        >
                          Influencers NFT Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/nft-ticketing-marketplace-development"
                          target="_blank"
                        >
                          NFT Ticketing Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/defi-nft-social-media-platform-development"
                          target="_blank"
                        >
                          DeFi NFT Marketplace Development
                        </a>
                      </li>
                      {/* <li><a href="https://www.osiztechnologies.com/request-for-quotation" target="_blank">Multi-Chain NFT Marketplace Development</a></li> */}
                      {/* <li><a href="https://www.osiztechnologies.com/request-for-quotation" target="_blank">Cross-Chain NFT Marketplace Development</a></li> */}
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-marketplace-for-sports"
                          target="_blank"
                        >
                          NFT Fantasy Sports Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-storage-solutions"
                          target="_blank"
                        >
                          NFT Storage Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-lending-platform-development"
                          target="_blank"
                        >
                          NFT Lending Platform Development
                        </a>
                      </li>
                      {/* <li><a href="https://www.osiztechnologies.com/request-for-quotation" target="_blank">Hire NFT Developers</a></li> */}
                      {/* <li><a href="https://www.osiztechnologies.com/request-for-quotation" target="_blank">NFT Solutions for Industries</a></li> */}
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/nft-business-ideas-2023"
                          target="_blank"
                        >
                          Top10 NFT Business Ideas
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Crypto Exchange
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/cryptocurrency-exchange-software-development"
                          target="_blank"
                        >
                          Cryptocurrency Exchange Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/decentralized-exchange-development"
                          target="_blank"
                        >
                          Decentralized Exchange Development Company
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/white-label-crypto-exchange-software"
                          target="_blank"
                        >
                          White Label Crypto Exchange Software
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/p2p-crypto-exchange-development"
                          target="_blank"
                        >
                          P2P Cryptocurrency Exchange Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/otc-exchange-development"
                          target="_blank"
                        >
                          OTC Exchange Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/cryptocurrency-wallet-development"
                          target="_blank"
                        >
                          Cryptocurrency Wallet Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/cryptocurrency-exchange-app-development"
                          target="_blank"
                        >
                          Cryptocurrency Exchange App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/stock-trading-software-development"
                          target="_blank"
                        >
                          Stock Trading Software Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/cryptocurrency-development"
                          target="_blank"
                        >
                          Cryptocurrency Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/cryptocurrency-exchange-listing-services"
                          target="_blank"
                        >
                          Crypto Exchange Listing Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/top-countries-to-kick-start-your-cryptocurrency-exchange"
                          target="_blank"
                        >
                          Top countries to start Crypto
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/smart-contract-development"
                          target="_blank"
                        >
                          Smart Contract Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/binance-clone-script"
                          target="_blank"
                        >
                          Binance Clone Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/coinbase-clone-development"
                          target="_blank"
                        >
                          Coinbase Clone Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/wazirx-clone-script"
                          target="_blank"
                        >
                          Wazirx Clone Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/kucoin-clone-development"
                          target="_blank"
                        >
                          Kucoin Clone Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    DeFi
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/decentralized-finance-defi-development"
                          target="_blank"
                        >
                          Decentralized Finance (DeFi) Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/defi-lending-borrowing-platform-development"
                          target="_blank"
                        >
                          DeFi Lending/ Borrowing Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-staking-platform-development"
                          target="_blank"
                        >
                          DeFi Staking Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-token-development"
                          target="_blank"
                        >
                          DeFi Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-wallet-development"
                          target="_blank"
                        >
                          DeFi Wallet Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-smart-contract-development"
                          target="_blank"
                        >
                          DeFi Smart Contract Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-dapp-development"
                          target="_blank"
                        >
                          DeFi DApp Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-exchange-development"
                          target="_blank"
                        >
                          Decentralized Exchange Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/decentralized-finance-defi-insurance-development"
                          target="_blank"
                        >
                          DeFi Insurance Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/defi-crypto-synthetic-assets-explained"
                          target="_blank"
                        >
                          DeFi Crypto Synthetic Assets Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gaming
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/game-development-company"
                          target="_blank"
                        >
                          Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/metaverse-game-development"
                          target="_blank"
                        >
                          Metaverse Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blockchain-game-development-company"
                          target="_blank"
                        >
                          Blockchain Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/casino-game-development"
                          target="_blank"
                        >
                          Casino Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/nft-game-development"
                          target="_blank"
                        >
                          NFT Gaming Platform Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/play-to-earn-game-development"
                          target="_blank"
                        >
                          P2E Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/move-to-earn-game-development"
                          target="_blank"
                        >
                          M2E Game Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Token Development
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/token-development"
                          target="_blank"
                        >
                          Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/semi-fungible-token-development"
                          target="_blank"
                        >
                          Semi-Fungible Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/bep20-token-development"
                          target="_blank"
                        >
                          Binance Smart Chain BEP20 Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/ethereum-token-development"
                          target="_blank"
                        >
                          Ethereum Token Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/blog/asset-tokenization-development"
                          target="_blank"
                        >
                          Asset Tokenization Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/white-paper-writing-services"
                          target="_blank"
                        >
                          Whitepaper Writing Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* -------------------------- no use ------------------------------------- */}

                {/* -------------------------- Game Development ------------------------------------- */}

                <li className="nav-item menu_desk">
                  <a
                    onClick={() => navigate("/GeneralGamesDevelopment")}
                    className="nav-link"
                  >
                    Game
                  </a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <ul>
                            <li
                              onClick={() =>
                                navigate("/GeneralGamesDevelopment")
                              }
                            >
                              <a
                                // href="#"
                                style={{ width: "200px" }}
                                target="_blank"
                              >
                                General Games Development
                              </a>
                            </li>
                            <li onClick={() => navigate("/CasinoGames")}>
                              <a
                                // href="#"
                                style={{ width: "200px" }}
                                target="_blank"
                              >
                                Casino Games Development
                              </a>
                            </li>
                            <li onClick={() => navigate("/MetaverseGame")}>
                              <a
                                // href="#"
                                style={{ width: "200px" }}
                                target="_blank"
                              >
                                Metaverse Game Development
                              </a>
                            </li>
                            <li onClick={() => navigate("/BlockchainGame")}>
                              <a
                                // href="#"
                                style={{ width: "200px" }}
                                target="_blank"
                              >
                                Web3 Game Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* -------------------------- Game Development ------------------------------------- */}

                {/* -------------------------- Insights ------------------------------------- */}

                <li className="nav-item menu_desk">
                  <a className="nav-link" href="#">
                    Insights
                  </a>
                  <div className="sub-menu">
                    <div className="row">
                      <div className="col-lg-12">
                        <div>
                          <ul>
                            {/* <li><a href="https://www.osiztechnologies.com/blog" target="_blank">Blogs</a></li> */}
                            <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="Company_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Company
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <li>
                                        <a onClick={() => navigate("/Aboutus")}>
                                          About Us
                                        </a>
                                      </li>

                                      <li>
                                        <a
                                          onClick={() =>
                                            navigate("/Announcement")
                                          }
                                        >
                                          Announcement{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://www.osiztechnologies.com/events"
                                          target="_blank"
                                        >
                                          Social Work
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          onClick={() =>
                                            navigate("/Celebrations")
                                          }
                                        >
                                          Celeberations
                                        </a>
                                      </li>
                                      <li
                                        onClick={() =>
                                          navigate("/TermAndCondition")
                                        }
                                      >
                                        <a
                                          // href="https://www.osiztechnologies.com/terms-and-conditions"
                                          target="_blank"
                                        >
                                          Terms and Conditions
                                        </a>
                                      </li>
                                      <li
                                        onClick={() =>
                                          navigate("/PrivacyPolicy")
                                        }
                                      >
                                        <a
                                          // href="https://www.osiztechnologies.com/payment-refund-policy"
                                          target="_blank"
                                        >
                                          Privacy Policy
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="dropdown_sub_menu dropright">
                              <a
                                className="dropdown_nav_link dropdown-toggle"
                                href="#"
                                id="contact_navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Contact Us
                              </a>
                              <div
                                className="dropdown-menu drop_right_menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <li>
                                        <a
                                          href="https://www.osiztechnologies.com/contact-us"
                                          target="_blank"
                                        >
                                          Contact Us
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://www.osiztechnologies.com/request-for-quotation"
                                          target="_blank"
                                        >
                                          Request For Quote
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}

                            <li onClick={() => navigate("/ContectUsForm")}>
                              <a target="_blank">Contact us</a>
                            </li>
                            <li onClick={() => navigate("/News")}>
                              <a
                              // href="https://www.osiztechnologies.com/news"
                              // target="_blank"
                              >
                                News
                              </a>
                            </li>

                            {/* <li><a href="https://www.osiztechnologies.com/press-release" target="_blank">Press Release</a></li> */}
                            <li onClick={() => navigate("/InsightsFAQ")}>
                              <a target="_blank">FAQ</a>
                            </li>
                            {/* <li><a href="https://www.osiztechnologies.com/write-a-review" target="_blank">Write a Review</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/testimonials" target="_blank">Testimonials</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/complaints-board" target="_blank">Complaint Board</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/feedback" target="_blank">Feedback</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/scam" target="_blank">Report the Scammers</a></li> */}
                            {/* <li><a href="https://www.osiztechnologies.com/case-studies" target="_blank">Case Studies</a></li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* -------------------------- Insights res ------------------------------------- */}

                <li className="nav-item dropdown menu_res">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Insights
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li onClick={() => navigate("/Blog")}>
                        <a target="_blank">Blogs</a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/news"
                          target="_blank"
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/announcement"
                          target="_blank"
                        >
                          Announcement
                        </a>
                      </li>
                      {/* <li><a href="https://www.osiztechnologies.com/press-release" target="_blank">Press Release</a></li> */}
                      <li>
                        <a
                          href="https://www.osiztechnologies.com/faq"
                          target="_blank"
                        >
                          FAQ
                        </a>
                      </li>
                      {/* <li><a href="https://www.osiztechnologies.com/write-a-review" target="_blank">Write a Review</a></li> */}

                      {/* <li><a href="https://www.osiztechnologies.com/complaints-board" target="_blank">Complaint Board</a></li> */}
                      {/* <li><a href="https://www.osiztechnologies.com/feedback" target="_blank">Feedback</a></li> */}
                      {/* <li><a href="https://www.osiztechnologies.com/scam" target="_blank">Report the Scammers</a></li> */}
                      {/* <li><a href="https://www.osiztechnologies.com/case-studies" target="_blank">Case Studies</a></li> */}
                    </ul>
                  </div>
                </li>

                {/* ---------------Blogs-------------------- */}

                <li
                  onClick={() => navigate("/Blog")}
                  className="nav-item menu_desk"
                >
                  <a className="nav-link" target="_blank">
                    Blogs
                  </a>
                </li>

                {/* ---------------Case studies-------------------- */}

                <li
                  className="nav-item menu_desk"
                  onClick={() => navigate("/CaseStudy")}
                >
                  <a
                    className="nav-link"
                    // href="https://www.osiztechnologies.com/blog"
                    target="_blank"
                  >
                    <li
                      className="nav-item menu_desk"
                      style={{ width: "150px", marginTop: "-37px" }}
                    >
                      <a className="nav-link" target="_blank">
                        Case Studies
                      </a>
                    </li>

                    {/* ----------------------------------- */}

                    <li className="nav-item dropdown menu_res">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Company
                      </a>

                      <div className="dropdown-menu compyMenuResHight">
                        <ul>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/about-us"
                              target="_blank"
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/osiz-company-profile-brochure.pdf?v1"
                              target="_blank"
                            >
                              Company Profile
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/osiz-pitchdeck.pdf?v1"
                              target="_blank"
                            >
                              Pitch Deck
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/vision-mission"
                              target="_blank"
                            >
                              Vision &amp; Mission
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/infrastructure"
                              target="_blank"
                            >
                              Infrastructure
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/why-osiz"
                              target="_blank"
                            >
                              Why Osiz
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/benefits"
                              target="_blank"
                            >
                              Benefits
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/life-at-osiz"
                              target="_blank"
                            >
                              Life@Osiz
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/quality-policy"
                              target="_blank"
                            >
                              Quality Policy
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/events"
                              target="_blank"
                            >
                              Events
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/celebrations"
                              target="_blank"
                            >
                              Celeberations
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/business-model"
                              target="_blank"
                            >
                              Business Model
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/our-digital-lab"
                              target="_blank"
                            >
                              Our Lab
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/development-process"
                              target="_blank"
                            >
                              Development Process
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/our-expertise"
                              target="_blank"
                            >
                              Our Expertise
                            </a>
                          </li>
                          <li>
                            <a
                              // href="https://www.osiztechnologies.com/terms-and-conditions"
                              target="_blank"
                            >
                              Terms and Conditions
                            </a>
                          </li>
                          <li>
                            <a
                              // href="https://www.osiztechnologies.com/payment-refund-policy"
                              target="_blank"
                            >
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item dropdown menu_res">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Contact Us
                      </a>
                      <div className="dropdown-menu compyMenuResHight">
                        <ul>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/contact-us"
                              target="_blank"
                            >
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.osiztechnologies.com/request-for-quotation"
                              target="_blank"
                            >
                              Request For Quote
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </a>
                </li>

                {/* ------------button talk to experts----------- */}

                <li style={{ marginLeft: "100px", marginTop: "25px" }}>
                  {<ContactForm />}
                </li>
              </ul>
            </div>
            <div className="Responsive-icon">
              <ResponsiveDrawer />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
