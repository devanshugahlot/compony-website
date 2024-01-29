import React, { Component } from "react";
import Slider from "react-slick";
import './OnDemandAppSlider.css'
import './CardSlider.scss'
import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const SoftwareCarousel =[
    {
        name: "ERP Software",
        path: "/ERPSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "SAAS Software",
        path: "/SAASSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Warehouse Managment Software",
        path: "/WarehouseManagmentSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "HRMS Software",
        path: "/HRMSSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Inventory Managment Software",
        path: "/InventoryManagmentSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Accounting & Billing Software",
        path: "/AccountingBillingSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "POS System Software",
        path: "/POSSystemSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Employee Tracking Software",
        path: "/EmployeeTrackingSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Attendance System Software",
        path: "/AttendanceSystemSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Library Managment System",
        path: "/LibraryManagmentSystem",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "LMS With Live Class Software",
        path: "/LMSWithLiveClassSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "University Managment  Software",
        path: "/UniversityManagmentSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Quiz System Software",
        path: "/QuizSystemSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Astrology Software",
        path: "/AstrologySoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Travel Booking Software",
        path: "/TravelBookingSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Matrimonial Software",
        path: "/MatrimonialSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Restaurant Managment System Software",
        path: "/RestaurantManagmentSystemSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Hotel Managment Software",
        path: "/HotelManagmentSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Event management Software",
        path: "/EventmanagementSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Hospital Managment System Software",
        path: "/HospitalManagmentSystemSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Real state Software",
        path: "/RealstateSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Clinic Managment System Software",
        path: "/ClinicManagmentSystemSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "MLM Software",
        path: "/MLMSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Trading Software",
        path: "/TradingSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
      {
        name: "Job Portal Software",
        path: "/JobPortalSoftware",
        image : "https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png"
      },
];


const OnDemandAppSlider = () => {
    const navigate = useNavigate();


    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        responsive: [
          {
            breakpoint: 588,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ]
      };
    
      return (
        <div className="RelatedPortfolioSlider-main-div-2">
          <h2 className="ondemand-head">Demanding Softwares</h2>
          <div className="RelatedPortfolioSlider-div-2">
            <Slider {...settings}>
                {SoftwareCarousel.map((item, index) => (
              <div>
                  <div key={index} className="owl-item active" style={{ width: 270, marginRight: 30 }}>
                    <div className="item-1">
                      <div className="ondemand__app__box">
                        <img src={item.image} alt={item.name} title={item.name} className="crypto-xchange-sprite xchange-sprite-14" />
                        <div className="title__div">
                          <p>{item.name}</p>
                        </div>
                        <div
                          className="overlay"
                          onClick={() => navigate(item.path)}
                        >
                          <div className="overlay-content">
                            <a href="#">Read more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                ))}
            </Slider>
          </div>
        </div>
      );
    };
    
    export default OnDemandAppSlider;