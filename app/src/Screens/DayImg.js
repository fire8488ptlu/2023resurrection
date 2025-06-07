import React, { useEffect, useState } from "react";
import Logo from '../Sass/Img/logo.svg'
import Home from '../Sass/Img/home.svg'
import ArrowLeft from '../Sass/Img/arrowleft.svg'
import ArrowRight from '../Sass/Img/arrowright.svg'
import Response from '../Sass/Img/response.svg'
import { useNavigate } from 'react-router-dom';
import { TextData } from '../Data/Data';

const DayImg = () => {


    const [Soundbtn, setSoundbtn] = useState(true)
    const navigate = useNavigate();
    const currentUrl = window.location.href;
    const origin = window.location.origin;
    // console.log(origin)
    const urlSegments = currentUrl.split('/');

    const dayNumber = urlSegments[4] - 1
    const WEBSITE_URL = process.env.REACT_APP_WEBSITE_URL;
    // 這裡不用website_url 直接urlsegments 應該是可以


    useEffect(() => {
        const title = document.querySelector(".dayImg-container-content-container-back-title-text")
        const content = document.querySelector(".dayImg-container-content-container-back-content")
        const verse = document.querySelector(".dayImg-container-content-container-back-verse")
        const pictureTitle = document.querySelector(".dayImg-container-content-authorbox-title")
        const pictureAuthor = document.querySelector(".dayImg-container-content-authorbox-author")

        if ((dayNumber + 1) % 2 == 0) {
            const contentBackground = document.querySelector(".dayImg-container-content-container-back")
            contentBackground.classList.add("dayImg-container-content-container-back--red")
            const contentTitle = document.querySelector(".dayImg-container-content-container-back-title-text")
            contentTitle.classList.add("dayImg-container-content-container-back-title-text--red")
            const contentText = document.querySelector(".dayImg-container-content-container-back-content")
            contentText.classList.add("dayImg-container-content-container-back-content--red")
            const contentVerse = document.querySelector(".dayImg-container-content-container-back-verse")
            contentVerse.classList.add("dayImg-container-content-container-back-verse--red")
        }
        title.innerHTML = TextData[dayNumber]['title']
        content.innerHTML = TextData[dayNumber]['content']
        verse.innerHTML = TextData[dayNumber]['verse']
        pictureTitle.innerHTML = TextData[dayNumber]['pictureTitle']
        pictureAuthor.innerHTML = TextData[dayNumber]['pictureAuthor']



    }, [])


    const handleImageLoad = () => {
        const Img = document.querySelector(".dayImg-container-content-container-front--disable")
        Img.className = "dayImg-container-content-container-front"
    };



    const SoundClick = () => {
        if (document.querySelector(".dayImg-container-logo-btnbox-sound")) {
            const SoundbtnDOM = document.querySelector(".dayImg-container-logo-btnbox-sound")
            SoundbtnDOM.className = "dayImg-container-logo-btnbox-sound--clicked"
            const audioFile = document.getElementById("audioFile");
            if (Soundbtn == true) {
                SoundbtnDOM.setAttribute("src", `${origin}/components/sound.svg`)
                audioFile.play();
                setSoundbtn(!true)
            }
            else {
                SoundbtnDOM.setAttribute("src", `${origin}/components/nosound.svg`)
                audioFile.pause();
                setSoundbtn(true)
            }

        } else {
            const SoundbtnDOM = document.querySelector(".dayImg-container-logo-btnbox-sound--clicked")
            const audioFile = document.getElementById("audioFile");
            if (Soundbtn == true) {
                SoundbtnDOM.setAttribute("src", `${origin}/components/sound.svg`)
                audioFile.play();
                setSoundbtn(!true)
            }
            else {
                SoundbtnDOM.setAttribute("src", `${origin}/components/nosound.svg`)
                audioFile.pause();
                setSoundbtn(true)
            }
        }
    }



    const handleAudioEnd = () => {
        const SoundbtnDOM = document.querySelector(".dayImg-container-logo-btnbox-sound--clicked")
        SoundbtnDOM.setAttribute("src", `${origin}/components/nosound.svg`)
        const audioFile = document.getElementById("audioFile");
        audioFile.pause();
        setSoundbtn(true)
    }


    const NextClick = (e) => {
        if (!document.querySelector(".dayImg-container-content-container.clicked")) {
            const container = document.querySelector(".dayImg-container-content-container")
            container.classList.toggle("clicked");
            const responsebtn = document.querySelector(".dayImg-container-arrow-btn")
            responsebtn.classList.toggle("dayImg-container-arrow-btn--active")
        } else if (document.querySelector(".dayImg-container-content-container.clicked")) {
            navigate(`/day/${urlSegments[4]}/response`)
        }
    }


    const LastClick = (e) => {
        if (!document.querySelector(".dayImg-container-content-container.clicked")) {
            navigate(`/board`)
        } else if (document.querySelector(".dayImg-container-content-container.clicked")) {
            const container = document.querySelector(".dayImg-container-content-container")
            container.classList.toggle("clicked");
            const responsebtn = document.querySelector(".dayImg-container-arrow-btn")
            responsebtn.classList.toggle("dayImg-container-arrow-btn--active")
            responsebtn.classList.remove("dayImg-container-arrow-btn--clicked")
        }
    }

    const ContainerClick = () => {
        if (!document.querySelector(".dayImg-container-content-container.clicked")) {
            const container = document.querySelector(".dayImg-container-content-container")
            container.classList.toggle("clicked");
            const responsebtn = document.querySelector(".dayImg-container-arrow-btn")
            responsebtn.classList.toggle("dayImg-container-arrow-btn--active")
        }
    }

    const ResponseClick = async () => {
        // console.log("check")
        const responsebtn = document.querySelector(".dayImg-container-arrow-btn")
        responsebtn.classList.add("dayImg-container-arrow-btn--clicked")
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 250);
        });
        navigate(`/day/${urlSegments[4]}/response`)


    }






    return (
        <section class="dayImg">

            <div class="dayImg-container">
                <div class="dayImg-container-logo">
                    <img class="dayImg-container-logo-svg" src={Logo} />
                    <div class="dayImg-container-logo-btnbox">

                        <img class="dayImg-container-logo-btnbox-sound" src={`${origin}/components/nosound.svg`} onClick={SoundClick} />
                        <div class="dayImg-container-logo-btnbox-sound-promptbox">
                            點擊右方聽音頻 !
                        </div>
                        <img class="dayImg-container-logo-btnbox-home" src={Home} onClick={() => navigate('/')} />
                        <audio id="audioFile" src={`${origin}/audio/day${urlSegments[4]}.mp3`} onEnded={handleAudioEnd} ></audio>
                    </div>

                </div>

                <div class="dayImg-container-content">
                    <div class="dayImg-container-content-container" onClick={ContainerClick}>
                        <img class="dayImg-container-content-container-front--disable" src={`${origin}/day/day${urlSegments[4]}.jpg`} onLoad={handleImageLoad} />

                        <div class="dayImg-container-content-container-back">

                            <div class="dayImg-container-content-container-back-title">
                                {(dayNumber != 7) ? (<img class="dayImg-container-content-container-back-title-svg" src={`${origin}/day/day${urlSegments[4]}-icon.svg`} />)
                                    : ("")}
                                <h1 class="dayImg-container-content-container-back-title-text"></h1>
                            </div>

                            <h4 class="dayImg-container-content-container-back-content">
                                {/* content */}
                            </h4>

                            <h4 class="dayImg-container-content-container-back-verse">
                                {/* verse */}
                            </h4>

                        </div>

                    </div>

                    <div class="dayImg-container-content-authorbox">
                        <h3 class="dayImg-container-content-authorbox-title"></h3>
                        <h3 class="dayImg-container-content-authorbox-author"></h3>
                    </div>


                </div>


                {/* <div class="dayImg-container-content">
                    <img class="dayImg-container-content-img" src={`./DayImg/day${urlSegments[4]}.jpg`} onLoad={handleImageLoad} />
                    <div class="dayImg-container-content-text">
                        <div class="dayImg-container-content-text-title">
                            <img class="dayImg-container-content-text-title-svg" src={`./DayImg/day${urlSegments[4]}-icon.svg`} />
                            <h1 class="dayImg-container-content-text-title-text"> Day 1｜棕枝主日</h1>
                        </div>

                        <h4 class="dayImg-container-content-text-content">
                            今天是受難週的第一天，稱為棕枝主日。耶穌騎著小驢駒和門徒一起進入耶路撒冷。以色列百姓以棕樹枝鋪在地上，以君王榮耀的方式迎接耶穌進城。
                            眾人喊著「奉主名來的事應當稱頌的！高高在上和散那！」這是為了應驗先知撒加利亞對彌賽亞的預言。<br /><br />
                            耶穌本有王榮耀尊貴的身份，卻騎著小驢駒進城；祂是猶大的獅子，卻又是那被殺的羔羊，謙卑順服、溫柔忍耐，成全救恩。<br /><br />
                            夾道歡迎耶穌進城的人，可能曾經歷、聽聞耶穌的神蹟，但他們可能也是高聲喊著將耶穌釘上十字架的人。<br /><br />
                        </h4>

                        <h4 class="dayImg-container-content-text-verse">
                            馬可福音11：1-11<br />
                            和散那！奉主名來的是應當稱頌的！
                        </h4>
                    </div>

                </div> */}


                <div class="dayImg-container-arrow">
                    <img class="dayImg-container-arrow-left" src={ArrowLeft} onClick={LastClick} />
                    <div class="dayImg-container-arrow-btn" onClick={ResponseClick} >
                        <img class="dayImg-container-arrow-btn-svg" src={Response} />
                        <span class="dayImg-container-arrow-btn-text">回應分享</span>
                    </div>
                    <img class="dayImg-container-arrow-right" src={ArrowRight} onClick={NextClick} />
                </div>

                <div class="dayImg-container-copyright">
                    copyright©bannerchurch 2023
                </div>
            </div>
        </section>
    )
}

export default DayImg
