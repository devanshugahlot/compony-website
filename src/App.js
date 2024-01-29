// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Footer from './Component/Footer';
import Aboutus from './Component/Insights/company/About/Aboutus';
import GenerativeAl from './Component/MainPage/GenerativeAl';
import Navbar from './Component/Navbar/Navbar';
import CardSlider from './Component/WebApplicationDevelopment/CardSlider';
import OnDemandAppSlider from './Component/WebApplicationDevelopment/OnDemandAppSlider';
import WebApplication from './Component/WebApplicationDevelopment/WebApplication';
import WebApplicationMainPage from './Component/WebApplicationDevelopment/WebApplicationMainPage';
import Main from './Main';
import Celebrations from './Component/Insights/company/Celebrations/Celebrations';
import Announcement from './Component/Insights/company/Announcement/Announcement';
import Product from './Component/Insights/company/Announcement/Product';
import News from './Component/Insights/company/Announcement/News';
import Blog from './Component/blogs/Blog';
import MainNews from './Component/Insights/company/News/MainNews';
import AllRouteFiles from "./AllRouteFiles";
import ContectUsForm from "./Component/Insights/ContectUsForm/ContectUsForm";


function App() {
  return (

    <div className="App">
        
            <AllRouteFiles />
       <About />
        <Footer />

    </div>

  );
}

export default App;
