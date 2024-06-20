<script lang="ts" setup>
</script>
<template>
    <div class="big_box">
        <div class="top_content">
            <img src="@/assets/jdb/title.png" alt="">
        </div>
        <div class="container_box">
            <div class="video_box"></div>
            <div class="btn_box">
                <img src="@/assets/jdb/app_btn.png" alt="">
                <img src="@/assets/jdb/web_btn.png" alt="">
            </div>
            <div class="methods_list">
                <div class="method_item">
                    <img src="@/assets/jdb/icon1.png" alt="">
                    <p class="value">微信</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/jdb/icon2.png" alt="">
                    <p class="value">支付宝</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/jdb/icon3.png" alt="">
                    <p class="value">网银支付</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/jdb/icon4.png" alt="">
                    <p class="value">急速支付</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/jdb/icon5.png" alt="">
                    <p class="value">虚拟币</p>
                </div>
                <div class="method_item">
                    <img src="@/assets/jdb/icon6.png" alt="">
                    <p class="value">数字人民币</p>
                </div>
            </div>
            <div class="original_box">
                <div class="top_c">
                    <img src="@/assets/jdb/fake1.png" alt="">
                    <p class="title">原生APP</p>
                    <img src="@/assets/jdb/fake2.png" alt="">
                </div>
                <p class="label">行业顶尖原生APP,支持全部平台</p>
            </div>
            <div class="bottom_list">
                <div class="btm_item">
                    <img src="@/assets/jdb/logo.png" alt="" class="logo">
                    <p class="label">JDB电子APP</p>
                    <p class="content">我们全力打造的专业棋牌APP，以满足棋牌玩家的需求。APP内包含开元棋牌、乐游棋牌、双赢棋牌、博雅棋牌等多个场馆，并获得欧洲最高级别的安全认证。</p>
                    <img src="@/assets/jdb/app_btn.png" alt="" class="down_btn">
                    <div class="btn">进入官网</div>
                </div>
                <div class="btm_item">
                    <img src="@/assets/jdb/logo2.png" alt="" class="logo">
                    <p class="label">苹果体育APP</p>
                    <p class="content">行业内最专业的体育投注平台，每月提供超过30,000场体育比赛，提供200种以上的玩法选择。以及零时差的无缝接轨赛事投注，让游戏改变您的生活。</p>
                    <img src="@/assets/jdb/app_btn.png" alt="" class="down_btn">
                    <div class="btn">进入官网</div>
                </div>
            </div>
        </div>
    </div>    
</template>
<style lang="scss" scoped>
.big_box {
    width: 100%;
    min-height: 100vh;
    background: url("@/assets/jdb/big_bg.png") no-repeat center;
    background-size: 100% 100%;
    padding-bottom: 35px;
    .top_content {
        display: flex;
        justify-content: center;
        padding-top: 23px;
        box-sizing: border-box;
        img {
            width: 216px;
        }
    }
    .container_box {
        padding: 0 16px;
        margin-top: 10px;
        box-sizing: border-box;
        .video_box {
            width: 100%;
            height: 193px;
        }
        .btn_box {
            width: 100%;
            margin-top: 20px;
            display: flex;
            gap: 13px;
            img {
                width: 48%;
            }
        }
        .methods_list {
            margin-top: 20px;
            width: 100%;
            background: #fff;
            box-shadow: 0 2px 8px 3px #ff92291c;
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
                    width: 25px;
                }
                .value {
                    font-size: 10px;
                    color: #333333;
                }
            }
        }
        .original_box {
            margin-top: 20px;
            .top_c {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                img {
                    width: 30px;
                }
                .title {
                    font-weight: 700;
                    font-size: 20px;
                    color: #FF7E20;
                }
            }
            .label {
                font-size: 12px;
                color: #666666;
                text-align: center;
                margin-top: 4px;
            }
        }
        .bottom_list {
            margin-top: 20px;
            display: flex;
            gap: 13px;
            .btm_item {
                width: 48%;
                background: #fff;
                box-shadow: 0 0 7px 1px #ff92291c;
                border-radius: 15px;
                padding: 20px 15px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                .logo {
                    width: 75px;
                    height: 75px;
                }
                .label {
                    font-size: 12px;
                    color: #FF7E20;
                    margin-top: 12px;
                }
                .content {
                    font-size: 12px;
                    color: #666666;
                    margin-top: 8px;
                }
                .down_btn {
                    width: 102px;
                    margin-top: 15px;
                }
                .btn {
                    height: 28px;
                    border: 1px solid #FF7E20;
                    border-radius: 14px;
                    width: 95px;
                    color: #FF7E20;
                    text-align: center;
                    font-size: 12px;
                    line-height: 28px;
                    margin-top: 8px;
                }
            }
        }
    }
}
</style>