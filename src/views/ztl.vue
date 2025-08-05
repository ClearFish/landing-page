<template>
    <div class="big_box">
        <div class="top_heaer">
            <div class="top">
                <img :src="Logo" alt="" class="logo">
                <img :src="US" alt="" class="lang" @click="showLangChose">
            </div>
            <div class="check_box">
                <input type="text" placeholder="Enter a domain to verify"/>
                <div class="check_btn">{{ $t('CHECK') }}</div>
            </div>
        </div>
        <div class="item_con">
            <div class="top_title">
                <img :src="bell" alt="" class="bell">
                <p class="word">If the website doesn’t open or shows cache issues, <span class="add_color">try installing different APPs</span> and use the one that works.</p>
            </div>
            <div class="web_lsits">
                <div class="web_item" v-for="(item,index) in webLists" :key="index">
                    <input type="text" v-model="item.name"/>
                    <div class="check_btn install_btn">INSTALL</div>
                    <div class="check_btn">VISIT</div>
                </div>
            </div>
        </div>
        <div class="item_con">
            <p class="title">ZTLGAMES: The Trusted Platform</p>
            <p class="sub_title">Trusted by Millions 丨 Since 2020</p>
            <div class="btn_box">
                <div class="installc_btn">INSTALL APP</div>
                <div class="installc_btn tutol_btn">tutorial</div>
            </div>
        </div>
        <div class="item_con">
            <div class="word_title">
                <p class="title">Why Choose ZTLGAME as Your Gaming Partner?</p>
                <p class="add_color">Industry-Leading Commission Rates Up to 1%</p>
            </div>
            <p class="content">Join thousands of successful partners who made ZTLGame their platform of choice.  Enjoy exclusive benefits, expert support, and the highest commission rates in the industry. </p>
             <div class="word_title add_margin">
                <p class="title">Security & Reliability You Can Trust</p>
            </div>
            <p class="content">With advanced security infrastructure and a proven track record, ZTLGame guarantees a gaming experience that is both enjoyable and completely secure. Our platform serves millions of satisfied users across Asia with a 99.9% uptime guarantee. </p>
            <div class="word_title add_margin">
                <p class="title">Bank-Level Data Protection</p>
            </div>
            <p class="content">Your privacy is our top priority. We use militarygrade encryption and adhere to international security standards to protect your personal and financial information. Our dedicated security team operates 24/7 to keep your data safe and confidential.</p>
        </div>
        <div class="item_con">
            <div class="word_title">
                <p class="title">Premium User Experience</p>
            </div>
            <p class="content">Enjoy gaming like never before with our intuitiveinterface, designed by UI/UX experts. Every feature is crafted for seamless navigation and effortless access to all platform functions.</p>
            <div class="word_title add_margin">
                 <p class="title">Award-Winning Customer Support</p>
            </div>
            <p class="content">Our multilingual support team is available 24/7. With an average response time of under 30 seconds and a 98% satisfaction rate, we guarantee your questions are answered quickly and professionally.</p>
            <div class="word_title add_margin">
                <p class="title">Start Your Journey in 3 Simple Steps</p>
            </div>
            <p class="content">Becoming a ZTLGame partner is easier than ever. Whether you're new to gaming or a seasoned player, our streamlined process lets you start earning in just minutes.</p>
            <div class="word_title add_margin">
                <p class="title">Quick Registration Guide</p>
            </div>
            <div class="content_item">
                <div class="item">
                    <p class="label">1</p>
                    <div class="value">
                        <p class="value_c">Visit our official website</p>
                        <p class="value_c"><span class="add_color">Ztl.game</span> and click "Partner Program"</p>
                    </div>
                </div>
                <div class="item">
                    <p class="label">2</p>
                    <div class="value">
                        <p class="value_c">Generate your unique invitation link in the dashboard</p>
                    </div>
                </div>
                <div class="item">
                    <p class="label">3</p>
                    <div class="value">
                        <p class="value_c">Share your link with friends and start earning instant commissions-no hide fees, no minimum withdrawal.</p>
                    </div>
                </div>
            </div>  
        </div>
        <van-popup :show="show" round custom-style="width: 100%">
            <div class="lang_lists">
                <div class="lang_item" v-for="(item,index) in langLists" :key="index" @click="choseLang(item)">
                    <div class="name_v">
                        <img :src="item.icon" alt="">
                        <p class="name">{{item.title}}</p>
                    </div>
                    <van-icon name="success" color="#0454FD" v-if="item.value == language"/>
                </div>
                 <div class="bottom_btn">
                    <div class="btn" @click="show=false">{{$t('cancel')}}</div>
                    <div class="btn sure_btn" @click="confirmLang">{{$t('confirm')}}</div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script setup>
import {ref} from "vue"
import Logo from "@/assets/ztl/logo.png"
import US from "@/assets/ztl/US.svg"
import YINDI from "@/assets/ztl/yindi.svg"
import bell from "@/assets/ztl/bell.png"
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const language = ref(locale.value)
const webLists = ref([
    {name:'ZTLGAME.cc',value:'ZTLGAME.cc'},
    {name:'ZTLGAME.cc',value:'ZTLGAME.cc'},
    {name:'ZTLGAME.cc',value:'ZTLGAME.cc'},
    {name:'ZTLGAME.cc',value:'ZTLGAME.cc'},
])
const show = ref(false)
const langLists = ref([
    {icon:YINDI,title:'तिरंगा',value: 'yindi'},
    {icon:US,title:'English',value: 'en'},
])
const showLangChose = ()=>{
    show.value = true
}
const choseLang = (item)=>{
    language.value = item.value;
}
const confirmLang = ()=>{
   locale.value = language.value
   localStorage.setItem('lang', language.value);
   show.value = false
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: Archive;
    src: url("@/assets/ztl/Archive.otf");
}
@font-face {
    font-family: DIN;
    src: url("@/assets/ztl/en_Din/DIN-Regular.otf");
}
@font-face {
    font-family: DIN-BOLD;
    src: url("@/assets/ztl/en_Din/DIN-Bold.otf");
}
.big_box {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #0454FD 0%, #D3F3FF 100%);
    padding: 0 16px;
    box-sizing: border-box;
    padding-bottom: 34px;
    .top_heaer {
        padding-top: 35px;
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
                width: 187px;
                height: 35px;
            }
            .lang {
                width: 20px;
            }
        }
        .check_box {
            width: 100%;
            padding: 5px;
            height: 50px;
            margin-top: 40px;
            border-radius: 30px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
            gap: 8px;
            input {
                flex: 1;
                height: 46px;
                line-height: 46px;
                color: #414453;
                border: none;
                background: none;
                outline: none;
                padding-left: 20px;
                box-sizing: border-box;
                font-size: 16px;
            }
            .check_btn {
                width: 74px;
                height: 40px;
                background-image: linear-gradient(180deg, #3487F6 0%, #5EAFEF 100%);
                border-radius: 20px;
                color: #fff;
                text-align: center;
                line-height: 40px;
                font-family: Archive;
            }
        }
    }
    .item_con {
        background: #FFFFFF;
        border-radius: 10px;
        padding: 20px 14px;
        box-sizing: border-box;
        margin-top: 20px;
        .top_title {
            display: flex;
            gap: 10px;
            .bell {
                width: 27px;
                flex-shrink: 0;
                height: 27px;
            }
        }
        .word {
            color: #000000;
            font-size: 16px;
            font-family: DIN;
            .add_color {
                color: #277EFF;
            }
        }
        .web_lsits {
            margin-top: 20px;
            .web_item {
                width: 100%;
                padding: 5px;
                height: 50px;
                border-radius: 30px;
                background: #d3f3ff66;
                border: 1px solid #61c6fe33;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 16px;
                gap: 8px;
                margin-bottom: 10px;
                input {
                    width: 180px;
                    height: 46px;
                    line-height: 46px;
                    color: #7F849A;
                    border: none;
                    background: none;
                    outline: none;
                    padding-left: 20px;
                    box-sizing: border-box;
                    font-size: 16px;
                }
                .check_btn {
                    width: 66px;
                    height: 40px;
                    background-image: linear-gradient(180deg, #3487F6 0%, #5EAFEF 100%);
                    border-radius: 20px;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    font-family: Archive;
                    font-size: 12px;
                    flex-shrink: 0;
                }
                .install_btn {
                    background-image: linear-gradient(180deg, #2CE482 0%, #28E283 100%);
                }
            }
        }
        .title {
            font-family: DIN-BOLD;
            font-weight: 700;
            font-size: 20px;
            color: #000000;
            text-align: center;
        }
        .sub_title {
            margin-top:10px;
            text-align: center;
            font-size: 16px;
            color: #414453;
        }
        .btn_box {
            display: flex;
            justify-self: center;
            align-items: center;
            margin-top: 15px;
            gap: 24px;
            .installc_btn {
                width: 140px;
                height: 40px;
                background-image: linear-gradient(180deg, #3487F6 0%, #5EAFEF 100%);
                border-radius: 20px;
                color: #fff;
                font-family: Archive;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                line-height: 40px;
            }
            .tutol_btn {
                background-image: linear-gradient(180deg, #2CE482 0%, #28E283 100%);
            }
        }
        .word_title {
            .title {
                text-align: left;
                padding-left: 20px;
                box-sizing: border-box;
                position: relative;
                &::before {
                    content: "";
                    width: 7px;
                    height: 14px;
                    background-image: linear-gradient(180deg, #58B8FD 0%, #3B7FF8 100%);
                    border-radius: 0 20px 20px 0;
                    position: absolute;
                    top:5px;
                    left: 0;
                }
            }
            .add_color {
                margin: 10px 0;
                color: #277EFF;
            }
        }
        .add_margin {
            margin-top:20px;
            margin-bottom: 10px;
        }
        .content {
            font-weight: 400;
            font-size: 14px;
            color: #666666;
            line-height: 22px;
        }
        .content_item {
            .item {
                display: flex;
                gap: 10px;
                margin-bottom: 10px;
                .label {
                    font-size: 12px;
                    color: #277EFF;
                    position: relative;
                    z-index: 2;
                    width: 18px;
                    height: 18px;
                    flex-shrink: 0;
                    text-align: center;
                    line-height: 18px;
                    margin-top: 8px;
                    &::after {
                        content: "";
                        width: 18px;
                        height: 18px;
                        transform: rotate(45deg);
                        background: #D3F3FF;
                        position: absolute;
                        left: 0;
                        top:0;
                        z-index: -1;
                    }
                }
                .value {
                    font-weight: 400;
                    font-size: 14px;
                    color: #666666;
                    line-height: 22px;
                    .add_color {
                        color: #277EFF;
                    }
                }
            } 
        }
    }
    :deep(.van-popup) {
        width: 90%;
    }
    .lang_lists {
        padding: 10px 20px;
        .lang_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 42px;
            img {
                width: 24px;
                height: 24px;
            }
            .name_v {
                display: flex;  
                align-items: center;
                gap: 10px;
            }
        }
        .bottom_btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            .btn {
                flex: 1;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #3B7FF8;
                border: 1px solid #3B7FF8;
                border-radius: 4px;
            }
            .sure_btn {
                color: #fff;
                background: #3B7FF8;
                border: none;
            }
        }
    }
}
</style>