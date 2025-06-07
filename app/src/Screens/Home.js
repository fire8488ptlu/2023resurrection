import React, { useEffect, useState } from "react";
import Title from '../Sass/Img/Title4.svg'
import Logo from '../Sass/Img/logo.svg'
import Podcast from '../Sass/Img/Podcast.svg'
import Fb from '../Sass/Img/Fb.svg'
import Line from '../Sass/Img/Line.svg'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const WEBSITE_URL = process.env.REACT_APP_WEBSITE_URL;
    // console.log(WEBSITE_URL)
    // console.log(navigator.userAgent)
    const origin = window.location.origin;
    console.log(origin)

    return (
        <section class="home">
            <div class="home-container">

                <div class="home-container-logo">
                    <img class="home-container-logo-svg" src={Logo} />
                </div>
                <div class="home-container-title" onClick={() => { navigate("/board") }}>
                    <img class="home-container-title-svg" src={Title} />
                </div>

                <div class="home-container-content" onClick={() => { navigate("/board") }}>
                    <h4>耶穌在世上的最後七天，稱為受難週（Passion Week）。</h4>
                    <h4>2023年以馬可福音來默想，與主同行，受難苦路。</h4>
                    <h4>默想耶穌經歷的苦難、死亡與復活，使信祂的人，</h4>
                    <h4>再次被安慰與鼓勵，重新得著力量與盼望。</h4>
                </div>

                <div class="home-container-enter" onClick={() => { navigate("/board") }}>
                    <h2>&lt; 點此進入 &gt;</h2>
                </div>


                <div class="home-container-share">

                    <div class="home-container-share-item" onClick={() => { window.open('https://podcasts.apple.com/tw/podcast/%E6%80%9D%E5%BF%B5%E8%80%B6%E7%A9%8C-%E5%A4%A7%E9%BD%8B%E6%9C%9F40%E5%A4%A9%E4%B9%8B%E6%97%85/id1672172417', "_blank") }}>
                        <img class="home-container-share-item-svg" src={Podcast} />
                        <h3 class="home-container-share-item-text">大齋期Podcast</h3>
                    </div>
                    <div class="home-container-share-item" onClick={() => { window.open(`http://www.facebook.com/sharer/sharer.php?u=${origin}`, "_blank") }}>
                        <img class="home-container-share-item-svg" src={Fb} />
                        <h3 class="home-container-share-item-text">社群分享</h3>
                    </div>
                    <div class="home-container-share-item" onClick={() => { window.open(`http://line.me/R/msg/text/${origin}`, "_blank") }}>
                        <img class="home-container-share-item-svg" src={Line} />
                        <h3 class="home-container-share-item-text">分享好友</h3>
                    </div>

                </div>
                <div class="home-container-copyright">
                    copyright©bannerchurch 2023
                </div>
            </div>
        </section>
    )
}

export default Home