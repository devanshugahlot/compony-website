import React from 'react'
import './MainNews.css'
import News from '../Announcement/News'

const MainNews = () => {
  return (
     <div className="news-container">
        <div className="news-container-inner">
            <h1>    Osiz <span>News</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam distinctio ab sapiente repellat ipsa vero, illum totam molestiae, sunt nobis nam quas! Facilis, iste aliquid.</p>
        </div>
        <div className="news-container-inner2">
            {<News/>}
        </div>
     </div>
    )
}

export default MainNews