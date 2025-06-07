import React, { useEffect } from 'react'
import Logo from '../Sass/Img/logo.svg'
import Home from '../Sass/Img/home.svg'
import ArrowLeft from '../Sass/Img/arrowleft.svg'
import Search from '../Sass/Img/search.svg'
import Fb from '../Sass/Img/Fb.svg'
import Line from '../Sass/Img/Line.svg'
import { useNavigate } from 'react-router-dom';
import { ResponseData } from '../Data/Data';


const DayResponse = () => {

    const navigate = useNavigate();
    const currentUrl = window.location.href;
    const urlSegments = currentUrl.split('/');
    const dayNumber = urlSegments[4] - 1;
    const origin = window.location.origin;
    const href = window.location.href;
    // console.log(window.location)
    // console.log(currentUrl)


    useEffect(() => {
        const title1 = document.querySelector(".dayResponse-container-content-title1")
        const title2 = document.querySelector(".dayResponse-container-content-title2")
        const text = document.querySelector(".dayResponse-container-content-text")
        title1.innerHTML = ResponseData[dayNumber]['title1'];
        title2.innerHTML = ResponseData[dayNumber]['title2'];
        text.innerHTML = ResponseData[dayNumber]['text'];
    })


    const ClickShare = () => {
        if (document.querySelector(".dayResponse-container-arrowbox-share-box-fb.animate")) {
            const Fb = document.querySelector(".dayResponse-container-arrowbox-share-box-fb.animate");
            Fb.classList.remove('animate');
            Fb.classList.add('reverse');
            Fb.classList.remove('reverse');
            const Line = document.querySelector(".dayResponse-container-arrowbox-share-box-line.animate");
            Line.classList.remove('animate');
            Line.classList.add('reverse');
            Line.classList.remove('reverse');

        } else {
            const Fb = document.querySelector(".dayResponse-container-arrowbox-share-box-fb")
            Fb.classList.add('animate')
            const Line = document.querySelector(".dayResponse-container-arrowbox-share-box-line")
            Line.classList.add('animate')
        }


    }

    return (
        <section class="dayResponse">
            <div class="dayResponse-container">

                <div class="dayResponse-container-logo">
                    <img class="dayResponse-container-logo-svg" src={Logo} />
                    <div class="dayResponse-container-logo-btnbox">
                        <img class="dayResponse-container-logo-btnbox-home" src={Home} onClick={() => navigate('/')} />
                    </div>
                </div>


                <div class="dayResponse-container-content">
                    <h3 class="dayResponse-container-content-title1">
                        {/* title1 */}
                    </h3>
                    <h1 class="dayResponse-container-content-title2">
                        {/* title2 */}
                    </h1>
                    <h4 class="dayResponse-container-content-text">
                        {/* content */}
                    </h4>
                </div>

                <div class="dayResponse-container-arrowbox">
                    <img class="dayResponse-container-arrowbox-arrowleft" src={ArrowLeft} onClick={() => { navigate(`/day/${urlSegments[4]}`) }} />

                    <div class="dayResponse-container-arrowbox-moreinfo" onClick={() => { window.open('https://linktr.ee/bannerchurch') }}>
                        <img class="dayResponse-container-arrowbox-moreinfo-svg" src={Search} />
                        <h4 class="dayResponse-container-arrowbox-moreinfo-text" >了解更多</h4>
                    </div>

                    <div class="dayResponse-container-arrowbox-share" onClick={ClickShare}>
                        <div class="dayResponse-container-arrowbox-share-box">
                            <img class="dayResponse-container-arrowbox-share-box-fb" src={Fb} onClick={(e) => { e.stopPropagation(); window.open(`http://www.facebook.com/sharer/sharer.php?u=${origin}/day/${urlSegments[4]}/`, "_blank") }} />
                            <img class="dayResponse-container-arrowbox-share-box-line" src={Line} onClick={(e) => { e.stopPropagation(); window.open(`http://line.me/R/msg/text/${origin}/day/${urlSegments[4]}/`, "_blank") }} />
                        </div>
                        <h4 class="dayResponse-container-arrowbox-share-text">回應分享</h4>
                    </div>
                </div>

                <div class="dayResponse-container-copyright">
                    copyright©bannerchurch 2023
                </div>

            </div>
        </section>
    )
}

export default DayResponse
