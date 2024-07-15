<template>
    <div class="big_box">
        <div class="top_header">
            <img src="@/assets/ky/logo.png" alt="">
        </div>
        <div class="video_box">
            <video
                src="@/assets/ky/video_tc.mp4"
                width="100%"
                muted
                autoplay
                loop
                controls
            />
        </div>
        <div class="container">
            <div class="bg_box bg_box1"></div>
            <div class="bg_box bg_box2"></div>
            <div class="methods_list">
                <div class="method_item">
                    <img src="@/assets/ky/icon1.png" alt="">
                    <p class="value">微信</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/ky/icon2.png" alt="">
                    <p class="value">支付宝</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/ky/icon3.png" alt="">
                    <p class="value">网银支付</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/ky/icon4.png" alt="">
                    <p class="value">急速支付</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/ky/icon5.png" alt="">
                    <p class="value">虚拟币</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/ky/icon6.png" alt="">
                    <p class="value">数字人民币</p>
                </div>
            </div>
            <div class="downd">
                <img src="@/assets/ky/download_btn.png" alt="" class="down_btn">
            </div>
            <div class="game_box">
                <div class="game_item">
                    <img src="@/assets/ky/item1.png" alt="">
                </div>
                <div class="game_item">
                    <img src="@/assets/ky/item2.png" alt="">
                </div>
                <div class="game_item">
                    <img src="@/assets/ky/item3.png" alt="">
                </div>
            </div>
            <div class="content_box">
                <div class="types">
                    <div class="top_box">
                        <img src="@/assets/ky/title1.png" alt="" class="title_bg">
                        <img src="@/assets/ky/title_btm.png" alt="" class="btm_bg">
                        <p class="word">下载太麻烦，点击进入轻松畅玩</p>
                    </div>
                    <div class="list_box">
                        <div class="list_item">
                            <div class="left">
                                <p class="seconds">10ms</p>
                                <p class="web_url">www.xxx1.com</p>
                            </div>
                            <img src="@/assets/ky/entry.png" alt="">
                        </div>
                        <div class="list_item">
                            <div class="left">
                                <p class="seconds">15ms</p>
                                <p class="web_url">www.xxx2.com</p>
                            </div>
                            <img src="@/assets/ky/entry.png" alt="">
                        </div>
                        <div class="list_item">
                            <div class="left">
                                <p class="seconds">20ms</p>
                                <p class="web_url">www.xxx3.com</p>
                            </div>
                            <img src="@/assets/ky/entry.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="types types2">
                    <div class="bg"></div>
                    <div class="top_box">
                        <img src="@/assets/ky/title2.png" alt="" class="title_bg">
                        <img src="@/assets/ky/title_btm.png" alt="" class="btm_bg">
                        <p class="word">千万奖池一触即发等您来赢</p>
                    </div>
                    <div class="downd">
                        <img src="@/assets/ky/download_btn.png" alt="" class="down_btn">
                    </div>
                    <div class="list_pt">
                        <img src="@/assets/ky/plt1.png" alt="">
                        <img src="@/assets/ky/plt2.png" alt="">
                        <img src="@/assets/ky/plt3.png" alt="">
                        <img src="@/assets/ky/plt4.png" alt="">
                        <img src="@/assets/ky/plt5.png" alt="">
                        <img src="@/assets/ky/plt6.png" alt="">
                    </div>
                </div>
                <div class="types types2 types3">
                    <div class="bg"></div>
                    <div class="top_box">
                        <img src="@/assets/ky/title3.png" alt="" class="title_bg">
                        <img src="@/assets/ky/title_btm.png" alt="" class="btm_bg">
                        <p class="word">财神发发发最高1000倍</p>
                    </div>
                    <div class="downd">
                        <img src="@/assets/ky/download_btn.png" alt="" class="down_btn">
                    </div>
                    <div class="list_pt">
                        <img src="@/assets/ky/game1.png" alt="">
                        <img src="@/assets/ky/game2.png" alt="">
                        <img src="@/assets/ky/game3.png" alt="">
                        <img src="@/assets/ky/game4.png" alt="">
                        <img src="@/assets/ky/game5.png" alt="">
                        <img src="@/assets/ky/game6.png" alt="">
                    </div>
                </div>
                <div class="time_box">
                    <div class="time_item">
                        <p class="value">60</p>
                        <p class="label">平均存款时间（秒）</p>
                    </div>
                    <div class="time_item">
                        <p class="value">55</p>
                        <p class="label">合作支付银行（家）</p>
                    </div>
                    <div class="time_item">
                        <p class="value">90</p>
                        <p class="label">平均取款时间（秒）</p>
                    </div>
                    <div class="time_item">
                        <p class="value">35</p>
                        <p class="label">合作游戏公司（家）</p>
                    </div>
                </div>
                <div class="bottom_box">
                    <img src="@/assets/ky/bottom1.png" alt="">
                    <img src="@/assets/ky/bottom2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.big_box {
    width: 100%;
    min-height: 100vh;
    background: #000;
    padding-bottom: 35px;
    .top_header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 135px;
            height: 54px;
        }
    }
    .video_box {
        width: 100%;
        height: 240px;
    }
    .container {
        padding: 0 16px;
        box-sizing: border-box;
        position: relative;
        .bg_box {
            position: absolute;
            width: 100%;
            height: 425px;
            background: url("@/assets/ky/bg.png") no-repeat center;
            background-size: 100% 100%;
        }
        .bg_box2 {
            top: 950px;
        }
        .methods_list {
            width: calc(100% - 32px);
            margin: 0 auto;
            margin-top: 20px;
            border: 1px solid #EED97C;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            padding: 16px;
            box-sizing: border-box;
            .method_item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                img {
                    width: auto;
                    height: 25px;
                }
                .value {
                    font-size: 10px;
                    color: #fff;
                }
            }
        }
        .downd {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 20px;
            img {
                width: 254px;
                height: auto;
            }
        }
        .game_box {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            .game_item {
                width: 31%;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .content_box {
            margin-top: 20px;
            .types {
                width: 100%;
                height: 312px;
                background: url("@/assets/ky/box_bg1.png") no-repeat center;
                background-size: 100% 100%;
                .top_box {
                    padding-top: 25px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .title_bg {
                        width: 282px;
                        height: auto;
                    }
                    .btm_bg {
                        width: 282px;
                        height: auto;
                    }
                    .word {
                        color: #FFFFFF;
                        font-size: 15px;
                    }
                }
                .list_box {
                    padding: 0 16px;
                    box-sizing: border-box;
                    margin-top: 20px;
                    .list_item {
                        display: flex;
                        gap: 10px;
                        margin-bottom: 15px;
                        img {
                            width: 75px;
                            height: 40px;
                        }
                        .left {
                            display: flex;
                            color: #fff;
                            font-size: 14px;
                            flex: 1;
                            border: 1px solid #EED97C;
                            height: 40px;
                            .seconds {
                                width: 68px;
                                line-height: 40px;
                                border-right: 1px solid #EED97C;
                                text-align: center;
                            }
                            .web_url {
                                flex: 1;
                                line-height: 40px;
                                text-align: center;
                            }
                        }
                    }
                }
            }
            .types2 {
                height: 455px;
                margin-top: 20px;
                position: relative;
                .bg {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: url("@/assets/ky/type_bg.png") no-repeat center;
                    background-size: 100% 100%;
                }
                .downd {
                    margin-top: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 254px;
                        height: auto;
                    }
                }
                .list_pt {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 0 16px;
                    box-sizing: border-box;
                    margin-top: 30px;
                    img {
                        width: 33%;
                        height: auto;
                        margin-bottom: 16px;
                    }
                }
            }
            .types3 {
                height: 455px;
                margin-top: 20px;
                position: relative;
                .list_pt {
                    img {
                        width: 30%;
                    }
                }
            }
            .time_box {
                width: 100%;
                margin-top: 30px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .time_item {
                    width: 48%;
                    height: 95px;
                    background: url("@/assets/ky/time_bg.png") no-repeat center;
                    background-size: 100% 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    gap: 5px;
                    .value {
                        color: #fff;
                        font-size: 50px;
                        font-weight: 700;
                    }
                    .label {
                        font-size: 14px;
                        color: #FEEBD2;
                        font-weight: 700;
                    }
                }
            }
            .bottom_box {
                margin-top: 30px;
                img {
                    width: 100%;
                    height: auto;
                    margin-bottom: 16px;
                }
            }
        }
    }
    .down_btn {
        animation: myfirst 1s infinite linear;
    }
    @keyframes myfirst {
        0% {
            transform: scale(1.1);
        }
    
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }
}
</style>