import React from "react";
import "./Blog.css";
const Blog = () => {
    return (
        <>
        <main className="blog_new_main">
            <section className="blog_new_banner">
                <div className="container-fluid p-0">
                    <div className="VideoWrper">
                        <div className="video_sec">
                            <video autoPlay muted loop playsInline preload="metadata">
                                <source src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/banner-bg-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="container">
                            <div className="content_sec">
                                <div className="title_sec">
                                    <h2 className="title">Next-gen Blogs</h2>
                                </div>
                                <p className="contents">Bits and Bytes Explored in the Ever-Evolving Digital Landscape</p>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-5 col-md-5 col-10">
                                        <div className="search_sec">
                                            {/* <form action="{{url('news')}}" method="get"> */}
                                            <div className="sear_fd1">
                                                <div className="input-group">
                                                    <input type="text" name="search" className="form-control" placeholder="SEARCH" id="getsearchtext" />
                                                    <span className="input-group-addon"><button className="btn search_btn" onclick="load_search()"><i className="fa fa-search" /></button></span>
                                                </div>
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
            <section className="blog_new_trending_sec" id="blog_new_trending_sec">
                <div className="container-fluid p-0">
                    <div className="carousel_sec">
                        <h1 className="title">Trending Blogs</h1>
                        {/* Refer slider custom.js File */}
                        <div className="trending-blog slider">
                            <div className="items" style={{ background: 'url("https://www.osiztechnologies.com/asset/inner-pages-new/blog/trending-bg.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div className="trending_box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="sub_title">Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange</div>
                                            <p className="sub_contents">The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing prospect. However, the road to establishing a successf...</p>
                                            <div className="readmore_btn_sec">
                                                <a href="https://www.osiztechnologies.com/blog/changelly-clone-script" className="btn BtnPrimry TlkBtn readmore_btn" target="_blank">
                                                    <span>Read More</span>
                                                    <span>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp" alt title="Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items" style={{ background: 'url("https://www.osiztechnologies.com/asset/inner-pages-new/blog/trending-bg.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div className="trending_box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="sub_title">The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game</div>
                                            <p className="sub_contents">In the ever-evolving landscape of online gaming, reshaping the casino experience through Blockchain Casino Game Development has become crucial. Transforming the online gaming landscape with blockchain...</p>
                                            <div className="readmore_btn_sec">
                                                <a href="https://www.osiztechnologies.com/blog/blockchain-casino-game-development" className="btn BtnPrimry TlkBtn readmore_btn" target="_blank">
                                                    <span>Read More</span>
                                                    <span>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Blockchain-Casino-Game-development-Company.webp" alt title="The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items" style={{ background: 'url("https://www.osiztechnologies.com/asset/inner-pages-new/blog/trending-bg.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div className="trending_box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="sub_title">Virutalizing the workspace: Building the Virutal Offices of tomorrow</div>
                                            <p className="sub_contents">The nature of work is changing quickly in the digital age. The idea of a metaverse office is becoming more and more popular as technology progresses. Businesses can operate remotely with a virtual off...</p>
                                            <div className="readmore_btn_sec">
                                                <a href="https://www.osiztechnologies.com/blog/metaverse-virtual-office-development" className="btn BtnPrimry TlkBtn readmore_btn" target="_blank">
                                                    <span>Read More</span>
                                                    <span>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse Virtual Office Development Company.webp" alt title="Virutalizing the workspace: Building the Virutal Offices of tomorrow" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items" style={{ background: 'url("https://www.osiztechnologies.com/asset/inner-pages-new/blog/trending-bg.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div className="trending_box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="sub_title">Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution </div>
                                            <p className="sub_contents">The Grand Theft Auto (GTA) series, a beacon of gaming excellence developed by Rockstar Games, has etched its mark in the gaming hall of fame. With the anticipation soaring for the next installment, Gr...</p>
                                            <div className="readmore_btn_sec">
                                                <a href="https://www.osiztechnologies.com/blog/gta6-metaverse-and-cryptocurrency-revolution" className="btn BtnPrimry TlkBtn readmore_btn" target="_blank">
                                                    <span>Read More</span>
                                                    <span>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution.webp" alt title="Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution " className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_new_popular_sec" id="blog_new_popular_sec">
                <div className="container">
                    <div className="nav flex-column nav-pills" id="popular_tab_sec" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="ai-_tab" data-toggle="pill" data-target="#ai-" type="button" role="tab" aria-controls="ai-" aria-selected="false">
                            <span>AI </span>
                        </button>
                        <button className="nav-link " id="metaverse-_tab" data-toggle="pill" data-target="#metaverse-" type="button" role="tab" aria-controls="metaverse-" aria-selected="false">
                            <span>Metaverse </span>
                        </button>
                        <button className="nav-link " id="cryptocurrency-exchange_tab" data-toggle="pill" data-target="#cryptocurrency-exchange" type="button" role="tab" aria-controls="cryptocurrency-exchange" aria-selected="false">
                            <span>Cryptocurrency Exchange</span>
                        </button>
                        <button className="nav-link " id="cryptocurrency-wallet_tab" data-toggle="pill" data-target="#cryptocurrency-wallet" type="button" role="tab" aria-controls="cryptocurrency-wallet" aria-selected="false">
                            <span>Cryptocurrency Wallet</span>
                        </button>
                        <button className="nav-link " id="game-development_tab" data-toggle="pill" data-target="#game-development" type="button" role="tab" aria-controls="game-development" aria-selected="false">
                            <span>Game Development</span>
                        </button>
                        <button className="nav-link " id="web3_tab" data-toggle="pill" data-target="#web3" type="button" role="tab" aria-controls="web3" aria-selected="false">
                            <span>Web3</span>
                        </button>
                    </div>
                    <div className="tab-content" id="popular_tab_content_sec">
                        <div className="tab-pane fade show active" id="ai-" role="tabpanel" aria-labelledby="ai-_tab">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="popular_box">
                                        <a href="https://www.osiztechnologies.com/blog/ai-crypto-trading-bot-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Ai Crypto Trading Bot Development (1).png" alt="AI Crypto Trading Bot Development" title="The Future Is Now: Implementing Remunerative Strategies For AI Crypto Trading Bot Development" className="img-fluid" />
                                            </div>
                                            <div className="sub_title">The Future Is Now: Implementing Remunerative Strategies For AI Crypto Trading Bot Development</div>
                                            <p className="sub_contents">Cryptocurrency trading has revolutionized the financial industry, offering immense potential for profit generation. As the digital asset market grows ...</p>
                                        </a>
                                        <div className="like_sec">
                                            <button className="btn like_sec_btn like_big" onclick="likes_count(268)"><i className="fa fa-thumbs-up" /></button>
                                            <span className="likes_count" id={268}>8</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_right_sec">
                                        <div className="title_sec">
                                            <div className="title">Popular on</div>
                                        </div>
                                        <div className="popular_list_sec">
                                            <div className="popular_list">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">01</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/top-notch-software-development-company" className target="_blank">
                                                            <div className="sub_contents">Top Notch Software Development Company in India</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Dec 28, 2018</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">02</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/intelligent-apps-shine-with-artificial-intelligence" className target="_blank">
                                                            <div className="sub_contents">INTELLIGENT APPS - BE FINE AND SHINE WITH ARTIFICIAL INTELLIGENCE</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">03</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/fascinating-facts-of-android-9-pie-vs-ios-12" className target="_blank">
                                                            <div className="sub_contents">AMASS THE FASCINATING FACTS OF ANDROID 9 PIE VS iOS 12</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">04</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/digital-marketing-agency" className target="_blank">
                                                            <div className="sub_contents">DIGITAL MARKETING - THE EVERLASTING STRATEGY INTHE BUSINESS WORLD</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Apr 20, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">AI </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/ai-nft-image-generator-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/AI NFT Image Generator Development 1.png" alt="Fusion of Technology and Art - AIs Revolution in NFT Image Generation" title="AI NFT Image Generator Development Company" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">AI NFT Image Generator Development Company</div>
                                                <p className="sub_contents"> In recent years, the collaboration of Artificial Intelligence (AI) and Non-Fungible Tokens (NFTs) has sparked a revolutionary movement in the art worl...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(267)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={267}>6</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">AI </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/chatgpt-for-information-technology" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/ChatGPT for Information Technology  (1) (1).png" alt="The Evolution of AI with ChatGPT for IT" title="The Evolution of AI with ChatGPT for IT" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">The Evolution of AI with ChatGPT for IT</div>
                                                <p className="sub_contents"> Enhance your IT solutions and revolutionize business interactions using Osiz Technologies' cutting-edge ChatGPT for IT. Embrace the future of technol...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(266)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={266}>25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">AI </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/ai-business-ideas" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Top 10 AI Business Ideas to Revolutionize Industries  in 2023 (1).png" alt="Top 10 AI Business Ideas to Revolutionize Industries  In 2023" title="Top 10 AI Business Ideas to Revolutionize Industries  In 2023" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Top 10 AI Business Ideas to Revolutionize Industries In 2023</div>
                                                <p className="sub_contents"> Explore Top 10 AI Business Ideas revolutionizing industries with Osiz Technologies, leading AI Development experts. Unlock endless opportunities usin...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(264)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={264}>16</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">AI </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/customized-chatgpt-app" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Custom ChatGPT App Development (1).png" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec content_sec1">
                                                <div className="sub_title">Elevate Your Customer Support - Build a Custom ChatGPT App!</div>
                                                <p className="sub_contents">The advancement of natural language processing by artificial intelligence (AI) in recent years has resulted in the creation of sophisticated language ...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(263)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={263}>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="metaverse-" role="tabpanel" aria-labelledby="metaverse-_tab">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="popular_box">
                                        <a href="https://www.osiztechnologies.com/blog/metaverse-virtual-office-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse Virtual Office Development Company.webp" alt="Metaverse Virtual Office Development Company" title="Virutalizing the workspace: Building the Virutal Offices of tomorrow" className="img-fluid" />
                                            </div>
                                            <div className="sub_title">Virutalizing the workspace: Building the Virutal Offices of tomorrow</div>
                                            <p className="sub_contents">The nature of work is changing quickly in the digital age. The idea of a metaverse office is becoming more and more popular as technology progresses. ...</p>
                                        </a>
                                        <div className="like_sec">
                                            <button className="btn like_sec_btn like_big" onclick="likes_count(297)"><i className="fa fa-thumbs-up" /></button>
                                            <span className="likes_count" id={297}>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_right_sec">
                                        <div className="title_sec">
                                            <div className="title">Popular on</div>
                                        </div>
                                        <div className="popular_list_sec">
                                            <div className="popular_list">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">01</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/top-notch-software-development-company" className target="_blank">
                                                            <div className="sub_contents">Top Notch Software Development Company in India</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Dec 28, 2018</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">02</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/intelligent-apps-shine-with-artificial-intelligence" className target="_blank">
                                                            <div className="sub_contents">INTELLIGENT APPS - BE FINE AND SHINE WITH ARTIFICIAL INTELLIGENCE</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">03</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/fascinating-facts-of-android-9-pie-vs-ios-12" className target="_blank">
                                                            <div className="sub_contents">AMASS THE FASCINATING FACTS OF ANDROID 9 PIE VS iOS 12</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">04</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/digital-marketing-agency" className target="_blank">
                                                            <div className="sub_contents">DIGITAL MARKETING - THE EVERLASTING STRATEGY INTHE BUSINESS WORLD</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Apr 20, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Metaverse </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/icc-metaverse-fanzone-2023" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse-Revolution-in-ICC-2023-With-Roblox.webp" alt=" Metaverse Revolution in ICC 2023 with Roblox" title="Innovations in Action: Metaverse Revolution in ICC 2023 with Roblox" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Innovations in Action: Metaverse Revolution in ICC 2023 with Roblox</div>
                                                <p className="sub_contents"> Welcome to a new era of immersive cricket, where digital meets reality and fans become digital legends. Step up to the crease in the heart of the meta...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(282)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={282}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Metaverse </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/applications-and-benefits-of-metaverse-business" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Explore the Applications and Benefits of Metaverse in Business.webp" alt="Explore the Applications and Benefits of Metaverse in Business" title="Explore the Applications and Benefits of Metaverse in Business" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Explore the Applications and Benefits of Metaverse in Business</div>
                                                <p className="sub_contents"> The Metaverse, often referred to as the next frontier of the digital world, is a vast interconnected virtual universe that seamlessly merges real-worl...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(279)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={279}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Metaverse </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/metaverse-development-guide-for-2023-and-beyond" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/All-Encompassed Metaverse Development Guide for 2023 and Beyond.webp" alt="All-encompassed Metaverse Development Guide for 2023 and Beyond" title="All-encompassed Metaverse Development Guide for 2023 and Beyond" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">All-encompassed Metaverse Development Guide for 2023 and Beyond</div>
                                                <p className="sub_contents"> In an era defined by rapid technological advancement, the concept of the Metaverse emerges as a groundbreaking frontier. It represents a virtual unive...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(275)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={275}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Metaverse </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/the-future-of-e-commerce-with-metaverse" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/The Future of Metaverse Ecommerce (1).png" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec content_sec1">
                                                <div className="sub_title">Metaverse Meets Commerce: The Future of E-Commerce in Virtual Worlds</div>
                                                <p className="sub_contents">A remarkable facet of this transformation is the seamless integration of e-commerce within these virtual domains, where avatars explore, engage, and p...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(272)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={272}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Metaverse </a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/metaverse-development-cost-in-2023" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Metaverse Development Cost in 2023 (1).png" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">2023 Insights: The Cost of Developing the Metaverse</div>
                                                <p className="sub_contents"> Delving deeper, constructing a metaverse application involves the collective efforts of developers, designers, and the integration of advanc...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(271)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={271}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="cryptocurrency-exchange" role="tabpanel" aria-labelledby="cryptocurrency-exchange_tab">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="popular_box">
                                        <a href="https://www.osiztechnologies.com/blog/changelly-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Changelly-Clone-Script.webp" alt="Changelly Clone script" title="Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange" className="img-fluid" />
                                            </div>
                                            <div className="sub_title">Changelly Clone Script: A Budget-Friendly Solution to Launch Your Own Cryptocurrency Exchange</div>
                                            <p className="sub_contents">The cryptocurrency revolution has opened up new possibilities for financial innovation, and launching your cryptocurrency exchange is an enticing pros...</p>
                                        </a>
                                        <div className="like_sec">
                                            <button className="btn like_sec_btn like_big" onclick="likes_count(299)"><i className="fa fa-thumbs-up" /></button>
                                            <span className="likes_count" id={299}>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_right_sec">
                                        <div className="title_sec">
                                            <div className="title">Popular on</div>
                                        </div>
                                        <div className="popular_list_sec">
                                            <div className="popular_list">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">01</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/top-notch-software-development-company" className target="_blank">
                                                            <div className="sub_contents">Top Notch Software Development Company in India</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Dec 28, 2018</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">02</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/intelligent-apps-shine-with-artificial-intelligence" className target="_blank">
                                                            <div className="sub_contents">INTELLIGENT APPS - BE FINE AND SHINE WITH ARTIFICIAL INTELLIGENCE</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">03</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/fascinating-facts-of-android-9-pie-vs-ios-12" className target="_blank">
                                                            <div className="sub_contents">AMASS THE FASCINATING FACTS OF ANDROID 9 PIE VS iOS 12</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">04</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/digital-marketing-agency" className target="_blank">
                                                            <div className="sub_contents">DIGITAL MARKETING - THE EVERLASTING STRATEGY INTHE BUSINESS WORLD</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Apr 20, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Cryptocurrency Exchange</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/coindcx-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/CoinDCX Clone Script.webp" alt="CoinDCX Clone Script" title="Unlock the Potential of CoinDCX Clone Script: A Ready-Made Software Solution for Your Cryptocurrency Exchange Platform" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Unlock the Potential of CoinDCX Clone Script: A Ready-Made Software Solution for Your Cryptocurrency Exchange Platform</div>
                                                <p className="sub_contents"> CoinDCX is a popular cryptocurrency exchange platform that has gained significant attention in recent years due to its innovative features and user-fr...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(295)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={295}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Cryptocurrency Exchange</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/kraken-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/kraken-clone-script.webp" alt="Kraken Clone Script" title="Kraken Clone Script: A Pathway for Next-Gen Crypto Exchange Success" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Kraken Clone Script: A Pathway for Next-Gen Crypto Exchange Success</div>
                                                <p className="sub_contents"> In the dynamic world of cryptocurrency, the demand for reliable and secure trading platforms is ever-growing. Entrepreneurs and businesses aiming to v...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(289)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={289}>6</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Cryptocurrency Exchange</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/how-to-start-a-crypto-exchange-business" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/How to Start a Crypto Exchange Business From Scratch.webp" alt="How to Start a Crypto Exchange Business" title="How to Start a Crypto Exchange Business From Scratch?" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">How to Start a Crypto Exchange Business From Scratch?</div>
                                                <p className="sub_contents"> Starting a cryptocurrency business is no ordinary venture—it is a journey that demands more than just enthusiasm; it requires a well-crafted strateg...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(284)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={284}>8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Cryptocurrency Exchange</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/bitfinex-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Bitfinex Clone Script.webp" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec content_sec1">
                                                <div className="sub_title">Bitfinex clone script - Start Your Own Cryptocurrency Exchange Platform Like Bitfinex</div>
                                                <p className="sub_contents">Osiz, a renowned cryptocurrency exchange development company, excels at crafting adaptable Bitfinex clone scripts. Our solutions offer intelligent, us...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(278)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={278}>9</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Cryptocurrency Exchange</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/bybit-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Bybit Clone Script.webp" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">ByBit Clone Script - Start Your Crypto Exchange Platform Similar to Bybit</div>
                                                <p className="sub_contents"> Osiz, a well-known crypto exchange development company, specializes in developing scalable Bybit clone scripts. We provide smart, user-frien...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(277)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={277}>15</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="cryptocurrency-wallet" role="tabpanel" aria-labelledby="cryptocurrency-wallet_tab">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="popular_box">
                                        <a href="https://www.osiztechnologies.com/blog/blockchain-wallet-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://res.cloudinary.com/dmpcbh91l/image/upload/v1626959227/osizsite/blockchain-wallet-development.jpg" alt="blockchain wallet development " title="Blockchain Wallet Development Company" className="img-fluid" />
                                            </div>
                                            <div className="sub_title">Blockchain Wallet Development Company</div>
                                            <p className="sub_contents">Technology has been revolutionizing the crypto industry by introducing digital currencies self-reliant on the industry’s physical status in a comple...</p>
                                        </a>
                                        <div className="like_sec">
                                            <button className="btn like_sec_btn like_big" onclick="likes_count(143)"><i className="fa fa-thumbs-up" /></button>
                                            <span className="likes_count" id={143}>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_right_sec">
                                        <div className="title_sec">
                                            <div className="title">Popular on</div>
                                        </div>
                                        <div className="popular_list_sec">
                                            <div className="popular_list">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">01</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/top-notch-software-development-company" className target="_blank">
                                                            <div className="sub_contents">Top Notch Software Development Company in India</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Dec 28, 2018</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">02</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/intelligent-apps-shine-with-artificial-intelligence" className target="_blank">
                                                            <div className="sub_contents">INTELLIGENT APPS - BE FINE AND SHINE WITH ARTIFICIAL INTELLIGENCE</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">03</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/fascinating-facts-of-android-9-pie-vs-ios-12" className target="_blank">
                                                            <div className="sub_contents">AMASS THE FASCINATING FACTS OF ANDROID 9 PIE VS iOS 12</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">04</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/digital-marketing-agency" className target="_blank">
                                                            <div className="sub_contents">DIGITAL MARKETING - THE EVERLASTING STRATEGY INTHE BUSINESS WORLD</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Apr 20, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                            </div>
                        </div>
                        <div className="tab-pane fade " id="game-development" role="tabpanel" aria-labelledby="game-development_tab">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="popular_box">
                                        <a href="https://www.osiztechnologies.com/blog/blockchain-casino-game-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Blockchain-Casino-Game-development-Company.webp" alt="Blockchain Casino Game Development" title="The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game" className="img-fluid" />
                                            </div>
                                            <div className="sub_title">The Future of Gaming, a Revolutionizing Entertainment with Blockchain Casino Game</div>
                                            <p className="sub_contents">In the ever-evolving landscape of online gaming, reshaping the casino experience through Blockchain Casino Game Development has become crucial. Transf...</p>
                                        </a>
                                        <div className="like_sec">
                                            <button className="btn like_sec_btn like_big" onclick="likes_count(298)"><i className="fa fa-thumbs-up" /></button>
                                            <span className="likes_count" id={298}>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_right_sec">
                                        <div className="title_sec">
                                            <div className="title">Popular on</div>
                                        </div>
                                        <div className="popular_list_sec">
                                            <div className="popular_list">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">01</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/top-notch-software-development-company" className target="_blank">
                                                            <div className="sub_contents">Top Notch Software Development Company in India</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Dec 28, 2018</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">02</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/intelligent-apps-shine-with-artificial-intelligence" className target="_blank">
                                                            <div className="sub_contents">INTELLIGENT APPS - BE FINE AND SHINE WITH ARTIFICIAL INTELLIGENCE</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">03</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/fascinating-facts-of-android-9-pie-vs-ios-12" className target="_blank">
                                                            <div className="sub_contents">AMASS THE FASCINATING FACTS OF ANDROID 9 PIE VS iOS 12</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">04</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/digital-marketing-agency" className target="_blank">
                                                            <div className="sub_contents">DIGITAL MARKETING - THE EVERLASTING STRATEGY INTHE BUSINESS WORLD</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Apr 20, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Game Development</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/gta6-metaverse-and-cryptocurrency-revolution" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution.webp" alt="Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution " title="Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution " className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Exploring the Potential of GTA 6’s Metaverse and Cryptocurrency Revolution </div>
                                                <p className="sub_contents"> The Grand Theft Auto (GTA) series, a beacon of gaming excellence developed by Rockstar Games, has etched its mark in the gaming hall of fame. With the...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(296)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={296}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Game Development</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/top7-blockchain-game-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Top-7-blockchain-Game-Development-Companies-2.webp" alt="Top 7 Blockchain Game Development Companies Shaping the Future in 2024 & 2025" title="Top 7 Blockchain Game Development Companies of 2024" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Top 7 Blockchain Game Development Companies of 2024</div>
                                                <p className="sub_contents"> Embark on the future of gaming with the top 7 blockchain game development companies leading the industry in 2024 and 2025. These innovative firms comb...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(294)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={294}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Game Development</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/illuvium-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Illuvium Clone Script.webp" alt="Illuvium Clone Script" title="Decoding the Illuvium Phenomenon: A Comprehensive Guide for Blockchain Gaming Success with Clone Scripts  " className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Decoding the Illuvium Phenomenon: A Comprehensive Guide for Blockchain Gaming Success with Clone Scripts </div>
                                                <p className="sub_contents"> In recent years, decentralized finance (DeFi) and non-fungible tokens (NFTs) have taken the crypto world by storm. One of the most interesting project...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(292)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={292}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Game Development</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/slot-game-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Slot Game Development Company.webp" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec content_sec1">
                                                <div className="sub_title">Slot Game Development Company</div>
                                                <p className="sub_contents">A slot game, often found in casinos, is a type of gambling machine with three or more reels that spin when a button is pushed. The objective is to ali...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(286)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={286}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Game Development</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/alien-worlds-clone-script" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Alien World_s  Clone Script.jpg" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Design Cosmic Adventures Beyond Imagination with the Alien Worlds Clone </div>
                                                <p className="sub_contents"> In the vast and dynamic realm of blockchain gaming, the emergence of NFT-based platforms has opened up new frontiers of innovation and engag...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(285)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={285}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="web3" role="tabpanel" aria-labelledby="web3_tab">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="popular_box">
                                        <a href="https://www.osiztechnologies.com/blog/web3-smart-contract-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Web3 Smart Contract Development Company (1).png" alt="Web3 Smart Contract Development Company" title="Web3 Smart Contract Development | Web3 Smart Contract Development Services | Osiz " className="img-fluid" />
                                            </div>
                                            <div className="sub_title">Web3 Smart Contract Development | Web3 Smart Contract Development Services | Osiz </div>
                                            <p className="sub_contents">Osiz is a leading Web3 smart contract development company. We assist you with highly secure, dependable, and upgradeable smart contracts built to the ...</p>
                                        </a>
                                        <div className="like_sec">
                                            <button className="btn like_sec_btn like_big" onclick="likes_count(253)"><i className="fa fa-thumbs-up" /></button>
                                            <span className="likes_count" id={253}>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="popular_right_sec">
                                        <div className="title_sec">
                                            <div className="title">Popular on</div>
                                        </div>
                                        <div className="popular_list_sec">
                                            <div className="popular_list">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">01</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/top-notch-software-development-company" className target="_blank">
                                                            <div className="sub_contents">Top Notch Software Development Company in India</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Dec 28, 2018</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">02</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/intelligent-apps-shine-with-artificial-intelligence" className target="_blank">
                                                            <div className="sub_contents">INTELLIGENT APPS - BE FINE AND SHINE WITH ARTIFICIAL INTELLIGENCE</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">03</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/fascinating-facts-of-android-9-pie-vs-ios-12" className target="_blank">
                                                            <div className="sub_contents">AMASS THE FASCINATING FACTS OF ANDROID 9 PIE VS iOS 12</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Mar 27, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-2 col-12">
                                                        <div className="num_sec">04</div>
                                                    </div>
                                                    <div className="col-lg-10 col-12">
                                                        <a href="https://www.osiztechnologies.com/blog/digital-marketing-agency" className target="_blank">
                                                            <div className="sub_contents">DIGITAL MARKETING - THE EVERLASTING STRATEGY INTHE BUSINESS WORLD</div>
                                                            <div className="bottom_sec">
                                                                <div className="read_head">Read full article</div>
                                                                <div className="date">Apr 20, 2019</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Web3</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/web3-wallet-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Web3-Wallet-Development.webp" alt="Web3 Wallet Development " title="Web3 Wallet Development Company - Osiz" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Web3 Wallet Development Company - Osiz</div>
                                                <p className="sub_contents"> Osiz is a Pioneer Web3 Wallet Development Company with years of experience in build Web3 Wallets. With Help users securely transfer, receive, and stor...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(246)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={246}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Web3</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/top-10-web3-business-ideas-in-2023" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Top 10 Web3 Business Ideas in 2023 (1).png" alt="Top 10 Web3 Business Ideas 2023" title="Top 10 Web3 Business Ideas Start in 2023 " className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Top 10 Web3 Business Ideas Start in 2023 </div>
                                                <p className="sub_contents"> Osiz is a top web3 development company helping your crypto travel by offering its top-notch services. Start your adventure with the greatest Web3 bus...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(243)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={243}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Web3</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/web3-game-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/Web3 Game Development (1).png" alt="Web3 Game Development" title="Web3 game development company - To develop Web3 game projects for structured platform in the Crypto Market" className="img-fluid" />
                                            </div>
                                            <div className="content_sec">
                                                <div className="sub_title">Web3 game development company - To develop Web3 game projects for structured platform in the Crypto Market</div>
                                                <p className="sub_contents"> Osiz is a Leading top-notch Web3 game development company, We offer world-class Premium Web3 game development services utilizing cutting-edge innovati...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            {/* <form action="" method="post"> */}
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(239)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={239}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-12">
                                    <div className="popular_tab_box">
                                        <div className="category_btn_sec">
                                            <a href className="category_btn">Web3</a>
                                        </div>
                                        <a href="https://www.osiztechnologies.com/blog/web3.0-crypto-exchange-development" className target="_blank">
                                            <div className="img_sec">
                                                <img src="https://osiztechnologies.s3.us-east-2.amazonaws.com/blog/web 3.0 crypto exchange development (1).png" alt="Explore More Topics" title="Explore More Topics" className="img-fluid" />
                                            </div>
                                            <div className="content_sec content_sec1">
                                                <div className="sub_title">To launch crypto exchange development using Web3.0</div>
                                                <p className="sub_contents">Osiz is the leading Web3.0 Crypto Exchange Development Company for undertakings and new companies looking for to use the benefits of the next-generat...</p>
                                            </div>
                                        </a>
                                        <div className="bottom_sec">
                                            <div className="like_sec">
                                                <button className="btn like_sec_btn" onclick="likes_count(238)"><i className="fa fa-thumbs-up" /></button>
                                                <span id={238}>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="tab-pane fade" id="nft" role="tabpanel" aria-labelledby="nft_tab">
              <div class="row justify-content-center">
                  <div class="col-lg-7 col-12">
                      <div class="popular_box">
                          <div class="img_sec">
                              <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/item1.png" alt="Top 10 Most Innovative and Unique App Ideas for Startups in 2023" title="Top 10 Most Innovative and Unique App Ideas for Startups in 2023" class="img-fluid">
                          </div>
                          <div class="sub_title">Top 10 Most Innovative and Unique App Ideas for Startups in 2023</div>
                          <p class="sub_contents">So, you have decided to build your own startup. That’s really amazing. But just like many other visionary entrepreneurs, you are stuck on the point – how do I get good app ideas? In this digital era, smartphones have become an integral part of our lives, and they are also like a magic wand to […]</p>
                      </div>
                  </div>
                  <div class="col-lg-5 col-12">
                      <div class="popular_right_sec">
                          <div class="title_sec">
                              <div class="title">Popular on</div>
                          </div>
                          <div class="popular_list_sec">
                              <div class="popular_list">
                                  <div class="row align-items-center">
                                      <div class="col-lg-2 col-12">
                                          <div class="num_sec">01</div>
                                      </div>
                                      <div class="col-lg-10 col-12">
                                          <div class="sub_contents">Top 10 Most Innovative and Unique App Ideas for Startups in 2023</div>
                                          <div class="bottom_sec">
                                              <div class="read_head">Read full article</div>
                                              <div class="date">12 June 2023</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="popular_list">
                                  <div class="row align-items-center">
                                      <div class="col-lg-2 col-12">
                                          <div class="num_sec">02</div>
                                      </div>
                                      <div class="col-lg-10 col-12">
                                          <div class="sub_contents">Top 10 Most Innovative and Unique App Ideas for Startups in 2023</div>
                                          <div class="bottom_sec">
                                              <div class="read_head">Read full article</div>
                                              <div class="date">12 June 2023</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="popular_list">
                                  <div class="row align-items-center">
                                      <div class="col-lg-2 col-12">
                                          <div class="num_sec">03</div>
                                      </div>
                                      <div class="col-lg-10 col-12">
                                          <div class="sub_contents">Top 10 Most Innovative and Unique App Ideas for Startups in 2023</div>
                                          <div class="bottom_sec">
                                              <div class="read_head">Read full article</div>
                                              <div class="date">12 June 2023</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="popular_list">
                                  <div class="row align-items-center">
                                      <div class="col-lg-2 col-12">
                                          <div class="num_sec">04</div>
                                      </div>
                                      <div class="col-lg-10 col-12">
                                          <div class="sub_contents">Top 10 Most Innovative and Unique App Ideas for Startups in 2023</div>
                                          <div class="bottom_sec">
                                              <div class="read_head">Read full article</div>
                                              <div class="date">12 June 2023</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="col-lg-4 col-12">
                      <div class="popular_tab_box">
                          <div class="category_btn_sec">
                              <a href="" class="category_btn">Metaverse</a>
                          </div>
                          <div class="img_sec">
                              <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                          </div>
                          <div class="content_sec">
                              <div class="sub_title">Explore More Topics</div>
                              <p class="sub_contents">Ready to brush up on something new? We've got more to read right this way. Ready to brush up on something new? We've got more to read right this way.</p>
                          </div>
                          <div class="bottom_sec">
                              <div class="time_sec">9 mins Read</div>
                              <div class="like_sec">
                                  <button class="btn like_sec_btn"><i class="fa fa-thumbs-up"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-12">
                      <div class="popular_tab_box">
                          <div class="category_btn_sec">
                              <a href="" class="category_btn">Metaverse</a>
                          </div>
                          <div class="img_sec">
                              <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                          </div>
                          <div class="content_sec">
                              <div class="sub_title">Explore More Topics</div>
                              <p class="sub_contents">Ready to brush up on something new? We've got more to read right this way. Ready to brush up on something new? We've got more to read right this way.</p>
                          </div>
                          <div class="bottom_sec">
                              <div class="time_sec">9 mins Read</div>
                              <div class="like_sec">
                                  <button class="btn like_sec_btn"><i class="fa fa-thumbs-up"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-12">
                      <div class="popular_tab_box">
                          <div class="category_btn_sec">
                              <a href="" class="category_btn">Metaverse</a>
                          </div>
                          <div class="img_sec">
                              <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                          </div>
                          <div class="content_sec">
                              <div class="sub_title">Explore More Topics</div>
                              <p class="sub_contents">Ready to brush up on something new? We've got more to read right this way. Ready to brush up on something new? We've got more to read right this way.</p>
                          </div>
                          <div class="bottom_sec">
                              <div class="time_sec">9 mins Read</div>
                              <div class="like_sec">
                                  <button class="btn like_sec_btn"><i class="fa fa-thumbs-up"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-7 col-12">
                      <div class="popular_tab_box">
                          <div class="category_btn_sec">
                              <a href="" class="category_btn">Metaverse</a>
                          </div>
                          <div class="img_sec">
                              <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                          </div>
                          <div class="content_sec content_sec1">
                              <div class="sub_title">Explore More Topics</div>
                              <p class="sub_contents">Ready to brush up on something new? We've got more to read right this way. Ready to brush up on something new? We've got more to read right this way.</p>
                          </div>
                          <div class="bottom_sec">
                              <div class="time_sec">9 mins Read</div>
                              <div class="like_sec">
                                  <button class="btn like_sec_btn"><i class="fa fa-thumbs-up"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-5 col-12">
                      <div class="popular_tab_box">
                          <div class="category_btn_sec">
                              <a href="" class="category_btn">Metaverse</a>
                          </div>
                          <div class="img_sec">
                              <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                          </div>
                          <div class="content_sec">
                              <div class="sub_title">Explore More Topics</div>
                              <p class="sub_contents">Ready to brush up on something new? We've got more to read right this way. Ready to brush up on something new? We've got more to read right this way.</p>
                          </div>
                          <div class="bottom_sec">
                              <div class="time_sec">9 mins Read</div>
                              <div class="like_sec">
                                  <button class="btn like_sec_btn"><i class="fa fa-thumbs-up"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div> */}
                    </div>
                </div>
            </section>
            <section className="blog_new_category_sec" id="blog_new_category_sec">
                <div className="container">
                    <div className="title">Explore More Topics</div>
                    <p className="contents">Ready to brush up on something new? We've got more to read right this way.</p>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/general" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">General</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/mobile-app-development" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Mobile App Development</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/web-development" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Web Development</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/cryptocurrency" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Cryptocurrency</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/hire-developers" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Hire Developers</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/dao" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">DAO</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/token-development" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Token Development</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/ico" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">ICO</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/gamefi" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">GameFi</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/defi" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">DeFi</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/blockchain-" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Blockchain </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/nft-" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">NFT </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/web3" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Web3</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/game-development" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Game Development</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/cryptocurrency-wallet" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Cryptocurrency Wallet</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/cryptocurrency-exchange" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Cryptocurrency Exchange</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/metaverse-" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">Metaverse </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <a href="https://www.osiztechnologies.com/blog/category/ai-" target="_blank">
                                <div className="category_box">
                                    <div className="sub_title">AI </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_new_card_sec" id="blog_new_card_sec">
                <div className="container">
                    <div className="blog_new_card_div">
                        <div className="row justify-content-center align-items-center" id="blog_new_card">
                            <div className="col-lg-6 col-12">
                                <div className="title">Kickstart Your <br /> <span className="cus_title">Dream Project With Us</span></div>
                                <div className="blog_new_card_btn_sec">
                                    <a className="btn blog_new_card_btn" data-toggle="modal" data-target="#popup_form_modal">GET A LIVE DEMO</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section class="blog_new_podcast_sec" id="blog_new_podcast_sec">
  <div class="container">
      <div class="title">Listen to podcasts live</div>
      <div class="row align-items-center justify-content-center">
          <div class="col-lg-3 col-12">
              <div class="podcast_box">
                  <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                  <div class="content_sec">
                      <div class="pod_contents">fsjfjsdkmok,lssfsdvsmkl</div>
                      <div class="social_icon_sec">
                          <div>
                              <button class="btn social_icon"><i class="fa fa-thumbs-up"></i></button>
                              <button class="btn social_icon"><i class='far fa-comment-dots'></i></button>
                          </div>
                          <button class="btn social_icon"><i class="fa fa-upload" aria-hidden="true"></i></button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 col-12">
              <div class="podcast_box">
                  <img src="https://www.osiztechnologies.com/asset/inner-pages-new/blog/popular-img.png" alt="Explore More Topics" title="Explore More Topics" class="img-fluid">
                  <div class="content_sec">
                      <p class="pod_contents">fsjfjsdkmok,lssfsdvsmkl</p>
                      <div class="social_icon_sec">
                          <div>
                              <button class="btn social_icon"><i class="fa fa-thumbs-up"></i></button>
                              <button class="btn social_icon"><i class='far fa-comment-dots'></i></button>
                          </div>
                          <button class="btn social_icon"><i class="fa fa-upload" aria-hidden="true"></i></button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 col-12">
              <div class="podcast_list_sec">
                  <div class="podcast_list">
                      <div class="sub_title">Podcast</div>
                      <button class="icon_sec">
                          <i class="fa fa-play"></i>
                      </button>
                  </div>
                  <div class="podcast_list">
                      <div class="sub_title">Podcast</div>
                      <button class="icon_sec">
                          <i class="fa fa-play"></i>
                      </button>
                  </div>
                  <div class="podcast_list">
                      <div class="sub_title">Podcast</div>
                      <button class="icon_sec">
                          <i class="fa fa-play"></i>
                      </button>
                  </div>
                  <div class="podcast_list">
                      <div class="sub_title">Podcast</div>
                      <button class="icon_sec">
                          <i class="fa fa-play"></i>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section> */}
            <section className="blog_new_video_sec" id="blog_new_video_sec">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9">
                            <div className="video_card">
                                <div className="title">Trending Tech Videos</div>
                                <p>Elucidating the Digital Landscape
                                </p>
                                <div className="row align-items-center">
                                    <div className="col-lg-9">
                                        <div className="video_sec_main">
                                            <iframe width="100%" src="https://www.youtube.com/embed/dv9d1icSF4s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="video_sec_sub">
                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/alp3DLwhzBA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                        </div>
                                        <div className="video_sec_sub">
                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/UcCnsfDMRSU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                        </div>
                                        <div className="video_sec_sub">
                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/NZWBkLC_s9E" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className id="search_section">
                <div className="container">
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane in active" id>
                            <h2 className="title text-center mt-5"><span className="cus_title">Search</span> Blogs</h2>
                            <div className="row align-items-center justify-content-center mt-5" id="search_content">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </>
  );
};

export default Blog;
