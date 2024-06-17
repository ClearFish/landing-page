<script setup lang="ts">
</script>
<template>
    <div class="big_box">
        <div class="top_header">
            <div class="header">
                <div class="first">
                    <img src="@/assets/google/google-chrome-logo.jpg" alt="">
                    <ul>
                        <li><a href="/" class="nav">首页</a></li>
                    </ul>
                </div>
                <div class="last_btn" id="download_btn">下载Chrome</div>
            </div>
        </div>
        <div class="top_cont">
            <div class="top_container">
                <div class="left box_c">
                    <img src="@/assets/google/logo.png" alt="" class="logo">
                    <p class="label">由chrome源码打造的电脑浏览器</p>
                    <div class="download_box">
                        <div class="d_box apple">
                            <div class="btn a_btn">苹果下载</div>
                            <p class="word">Download for IOS</p>
                        </div>
                        <div class="d_box android">
                            <div class="btn d_btn">安卓下载</div>
                            <p class="word">Download for Android</p>
                        </div>
                    </div>
                    <div class="bottom_btn">
                        <div class="btn">
                            <img src="@/assets/google/btn64.png" alt="">
                            <p class="btn_l">版本：122.0.6261.6</p>
                        </div>
                            <div class="btn">
                            <img src="@/assets/google/btn32.png" alt="" style="margin-top:9px">
                            <p class="btn_l">版本：86.0.4240.198</p>
                        </div>
                    </div>
                    <div class="footer_w">
                        <p>手机用户请扫描 <span>二维码</span> 下载</p>
                    </div>
                </div>
                <div class="left right" id="banner">
                    <img src="@/assets/google/index-banner.png" alt="">
                </div>
            </div>
        </div>
        <div class="list_cont">
            <p class="title">功能特性</p>
            <ul>
                <li>
                    <img src="@/assets/google/function1.png" alt="">
                    <p class="name">内容同步翻译</p>
                </li>
                 <li>
                    <img src="@/assets/google/function2.png" alt="">
                    <p class="name">在线高效办公</p>
                </li>
                 <li>
                    <img src="@/assets/google/function3.png" alt="">
                    <p class="name">个人阅读推荐</p>
                </li>
                 <li>
                    <img src="@/assets/google/function4.png" alt="">
                    <p class="name">满足开发需求</p>
                </li>
                 <li>
                    <img src="@/assets/google/function5.png" alt="">
                    <p class="name">杜绝弹窗广告</p>
                </li>
                 <li>
                    <img src="@/assets/google/function6.png" alt="">
                    <p class="name">云端数据同步</p>
                </li>
                 <li>
                    <img src="@/assets/google/function7.png" alt="">
                    <p class="name">隐身无痕浏览</p>
                </li>
                 <li>
                    <img src="@/assets/google/function8.png" alt="">
                    <p class="name">主题自由更换</p>
                </li>
                 <li>
                    <img src="@/assets/google/function9.png" alt="">
                    <p class="name">多设备同步</p>
                </li>
            </ul>
        </div>
        <section class="footer">
            <p class="complainttips">本站提供的软件仅为个人学习测试使用，请在下载后24小时内删除，不得用于任何商业用途，否则后果自负。</p><p class="complainttips">如有侵权，请在此投诉入口联系我们，我们立刻删除。<a class="complaintbtn" href="javascript:void(0);">投诉入口</a></p>
            <a style="color:#000000 ; margin-left:10px" target="_blank" href="/about.html" title="关于我们" rel="nofollow">关于我们</a>
            <a style="color:#000000 ; margin-left:10px" target="_blank" href="/disclaimers.html" title="免责声明" rel="nofollow">免责声明</a>
            <a style="color:#000000 ; margin-left:10px" target="_blank" href="/privacy.html" title="隐私政策" rel="nofollow">隐私政策</a>
            <a style="color:#000000 ; margin-left:10px;display: none;" target="_blank" href="/sitemap/" title="网站地图">网站地图</a>
            <br>
            <a style="color:#000000" target="_blank" rel="nofollow" href="https://beian.miit.gov.cn/">备案号：<font id="beian">陕ICP备2022009006号-14</font></a>
            <br>
            <a style="color:#000000"> 本站的谷歌浏览器采用 google chrome 开源代码进行优化设计，是一款更适合国内使用的极速浏览器。</a>
        </section>
        <a id="to_top"></a>
    </div>
</template>
<style lang="scss" scoped>
.big_box {
    .top_header {
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        -webkit-transition: height .4s;
        transition: height .4s;
        height: 64px;
        z-index: 100;
        box-shadow: 0 2px 6px 0 rgba(32, 33, 37, .1);
        .header {
            display: flex;
            align-items: center;
            height: 100%;
            background-color: #fff;
            justify-content: space-between;
            padding:  0 12px;
            box-sizing: border-box;
            .first {
                display: flex;
                gap: 40px;
                align-items: center;
                img {
                    width: 160px;
                    height: 24px;
                    cursor: pointer;
                }
                ul {
                    li {
                        height: 64px;
                        line-height: 64px;
                        width: 56px;
                        text-align: center;
                        position: relative;
                        cursor: pointer;
                        a {
                            color: #333;
                            font-size: 16px;
                            color: #202125;
                        }
                        &::after {
                            background: #1967d2;
                            border-radius: 2px;
                            bottom: 0;
                            content: "";
                            height: 2px;
                            left: 0;
                            position: absolute;
                            right: 0;
                            width: 100%;
                        }
                    }
                }
            }
            .last_btn {
                width: 140px;
                height: 46px;
                background: #3d73ed;
                border-radius: 25px;
                text-align: center;
                line-height: 46px;
                font-size: 16px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                &:hover {
                    -webkit-transform: scale(1.1);
                }
            }
        }
    }
    .top_cont {
        width: 100%;
        height: 880px;
        background: #eff6ff;
        display: flex;
        justify-content: center;
        align-items: center;
        .top_container {
            width: 1170px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2%;
            .left {
                flex: 1;
            }
            .box_c {
                display: flex;
                flex-direction: column;
                align-items: center;
                .download_box {
                    display: none;
                }
                .logo {
                    width: 145px;
                    height: 145px;
                }
                .label {
                    margin-top: 30px;
                    font-size: 40px;
                    color: #000;
                }
                .bottom_btn {
                    display: flex;
                    gap: 48px;
                    align-items: center;
                    margin-top: 16px;
                    .btn_l {
                        text-align: center;
                        margin-top: 16px;
                    }
                }
                .footer_w {
                    margin-top: 16px;
                    span {
                        color: red;
                        font-weight: 600;
                        cursor: pointer;
                    }
                }
            }
            .right {
                width: 502px !important;
                flex: none;
            }
        }
        
        @media (min-width: 992px) {
            .top_container {
                width: 970px;
            }
        }
        @media (min-width: 768px) {
            .top_container {
                width: 768px;
            }
        }
        @media (min-width: 1200px) {
            .top_container {
                width: 1170px;
            }
        }
    }
    .list_cont {
        width: 100%;
        background: #fff;
        height:1217px ;
        .title {
            width: 100%;
            height: 46px;
            font-size: 35px;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: bold;
            color: #3d73ed;
            padding-top: 120px;
            text-align: center;
            box-sizing: content-box;
            margin-bottom: 90px;
        }
        ul {
            width: 1200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 10px auto 0;
            li {
                width: 380px;
                height: 287px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 1px solid #3d73ed;
                margin-top: 30px;
                border-radius: 14px;
                box-sizing: border-box;
                cursor: pointer;
                img {
                    width: 60%;
                }
                .name {
                    font-size: 24px;
                    font-family: Microsoft YaHei, Microsoft YaHei;
                    font-weight: bold;
                    color: #333333;
                    text-align: center;
                }
            }
        }
    }
    .footer {
        padding: 30px 0;
        font-size: 14px;
        background: #F7F9FC;
        line-height: 30px;
        text-align: center;
        width: 100%;
        .complainttips {
            color: #333;
            text-align: center;
            .complaintbtn {
                color: red;
                font-weight: bold;
            }
        }
    }
    #to_top {
        position: fixed;
        bottom: 150px;
        right: 0;
        cursor: pointer;
        color: #3d73ed;
        width: 82px;
        height: 82px;
        background: url('@/assets/google/return_top.png') no-repeat center;
        background-size: 100% 100%;
    }
}
@media(max-width: 810px) {
    #download_btn {
        display:none
    }
}
@media screen and (max-width: 810px) {
    #banner{
        width: 100% !important;
    }
    .big_box {
        .top_cont {
            height: auto;
            padding: 80px 0;
            box-sizing: border-box;
            .top_container {
                width: 100% !important;
                flex-direction: column;
                align-items: center;
                .box_c {
                    .label {
                        font-size: 24px !important;
                        font-weight: bold;
                    }
                    .bottom_btn {
                        display: none;
                    }
                    .footer_w {
                        display: none;
                    }
                }
                .right {
                    display: flex;
                    justify-content: center;
                    margin-top: 10%;
                    img {
                        width: 80%;
                    }
                }
            }
        }
        .list_cont {
            height: auto;
            padding-bottom: 30px;
            ul {
                width: 100%;
                justify-content: space-around;
                li {
                    width: 30%;
                    margin-top: 20px;
                    margin-bottom: 50px;
                    .name {
                        font-size: 16px;
                    }
                    
                }
            }
            .title {
                font-size: 20px;
                padding-top: 50px;
                margin-bottom: 10px;
            }
        }
    }
}
@media screen and (max-width: 500px) {
    .big_box {
        .top_cont {
            .top_container {
                .box_c {
                    .download_box {
                        display: block;
                        margin-top: 15px;
                        .d_box {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .btn {
                                width: 142px;
                                height: 42px;
                                border-radius: 22px;
                                color: #fff;
                                text-align: center;
                                line-height: 42px;
                                margin-bottom: 15px;
                            }
                            .a_btn {
                                background: #3d73ed;
                            }
                            .d_btn {
                                background-color: rgb(29, 167, 64);
                            }
                            .word {
                                font-size: 14px;
                                color: #000;
                            }
                        }
                    }
                    .logo {
                        width: 100px;
                        height: 100px;
                    }
                    .label {
                        font-size: 24px !important;
                        font-weight: 500;
                    }
                }
            }
        }
        .list_cont {
            ul {
                li {
                    height: 150px;
                    margin-bottom: 0;
                }
            }
        }
        .footer {
            font-size: 12px;
        }
    }
} 
</style>