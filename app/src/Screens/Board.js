import React, { useEffect } from 'react'
import Logo from '../Sass/Img/logo.svg'
import Day1Icon from '../Sass/Img/day1-icon.svg'
import Day2Icon from '../Sass/Img/day2-icon.svg'
import Day3Icon from '../Sass/Img/day3-icon.svg'
import Day4Icon from '../Sass/Img/day4-icon.svg'
import Day5Icon from '../Sass/Img/day5-icon.svg'
import Day6Icon from '../Sass/Img/day6-icon.svg'
import Day7Icon from '../Sass/Img/day7-icon.svg'
import Home from '../Sass/Img/home.svg'
import { useNavigate } from 'react-router-dom';

// import Sound from '../Sass/Img/sound.svg'
const Board = () => {

    const navigate = useNavigate();

    async function NextPage(num) {
        const items = document.querySelectorAll('.board-container-model-item');
        console.log(items[num - 1])
        items[num - 1].classList.add("board-container-model-item--clicked");

        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 250);
        });
        navigate(`/day/${num}`)
    }






    return (
        <section class="board">

            <div class="board-container">

                <div class="board-container-logo">
                    <img class="board-container-logo-svg" src={Logo} />

                    <div class="board-container-logo-btnbox">
                        <img class="board-container-logo-btnbox-home" src={Home} onClick={() => navigate('/')} />
                    </div>


                </div>


                <div class="board-container-model">

                    <div class="board-container-model-item" onClick={() => NextPage(1)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day1Icon} />
                            <h3 class="board-container-model-item-box-title">Day 1 | 棕枝主日</h3>
                        </div>
                    </div>

                    <div class="board-container-model-item board-container-model-item--red" onClick={() => NextPage(2)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day2Icon} />
                            <h3 class="board-container-model-item-box-title board-container-model-item-box-title--white">Day 2 | 權柄日</h3>
                        </div>
                    </div>


                    <div class="board-container-model-item" onClick={() => NextPage(3)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day3Icon} />
                            <h3 class="board-container-model-item-box-title">Day 3 | 辨惑日</h3>
                        </div>
                    </div>

                    <div class="board-container-model-item board-container-model-item--red" onClick={() => NextPage(4)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day4Icon} />
                            <h3 class="board-container-model-item-box-title board-container-model-item-box-title--white">Day 4 | 退修日</h3>
                        </div>
                    </div>

                    <div class="board-container-model-item" onClick={() => NextPage(5)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day5Icon} />
                            <h3 class="board-container-model-item-box-title">Day 5 | 聖餐日</h3>
                        </div>
                    </div>

                    <div class="board-container-model-item board-container-model-item--red" onClick={() => NextPage(6)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day6Icon} />
                            <h3 class="board-container-model-item-box-title board-container-model-item-box-title--white">Day 6 | 受難日</h3>
                        </div>
                    </div>

                    <div class="board-container-model-item" onClick={() => NextPage(7)}>
                        <div class="board-container-model-item-box">
                            <img class="board-container-model-item-box-svg" src={Day7Icon} />
                            <h3 class="board-container-model-item-box-title">Day 7 | 墳墓日</h3>
                        </div>
                    </div>

                    <div class="board-container-model-item board-container-model-item--red" onClick={() => NextPage(8)}>
                        <div class="board-container-model-item-box board-container-model-item-box--final">
                            <h3 class="board-container-model-item-box-title board-container-model-item-box-title--white">復活節</h3>
                        </div>
                    </div>

                </div>

                <div class="board-container-content">
                    <h3>當主的日子來到，耶穌順服地飲下神給他的苦杯。</h3>
                    <h3>他必須經歷苦難、死亡與復活，神救贖的計畫於是「成了」！</h3>
                </div>

                <div class="board-container-copyright">
                    copyright©bannerchurch 2023
                </div>



            </div>



        </section>
    )
}

export default Board
