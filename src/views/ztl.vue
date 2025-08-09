<template>
    <div class="big_box">
        <div class="container">
            <div class="top_heaer">
                <div class="top">
                    <img :src="Logo" alt="" class="logo">
                    <img :src="US" alt="" class="lang" @click="showLangChose">
                </div>
                <div class="check_box">
                    <input type="text" v-model="urlValue" :placeholder="$t('Enter_to_verify')"/>
                    <div class="check_btn" @click="checkUrl">{{ $t('CHECK') }}</div>
                </div>
            </div>
            <div class="item_con">
                <div class="top_title">
                    <img :src="bell" alt="" class="bell">
                    <p class="word">{{ $t('content1') }}, <span class="add_color">{{ $t('content2') }}</span> {{ $t('content3') }}.</p>
                </div>
                <div class="web_lsits">
                    <div class="web_item" v-for="(item,index) in webLists" :key="index">
                        <input type="text" v-model="item.domain" @click="copyDomain(item)" readonly/>
                        <div class="check_btn install_btn" @click="toInstall(item)">{{ $t('INSTALL') }}</div>
                        <div class="check_btn" @click="toVisit(item)">{{ $t('VISIT') }}</div>
                    </div>
                </div>
            </div>
            <div class="item_con">
                <p class="title">{{ $t('word1') }}</p>
                <p class="sub_title">{{ $t('word2') }}</p>
                <div class="btn_box">
                    <div class="installc_btn" @click="installApp">{{ $t('INSTALL_APP') }}</div>
                    <div class="installc_btn tutol_btn" @click="toChat">{{ $t('concact') }}</div>
                </div>
            </div>
            <div class="item_con">
                <div class="word_title">
                    <p class="title">{{ $t('word4') }}</p>
                    <p class="add_color">{{ $t('word5') }}</p>
                </div>
                <p class="content">{{ $t('word6') }}</p>
                <div class="word_title add_margin">
                    <p class="title">{{ $t('word7') }}</p>
                </div>
                <p class="content">{{ $t('word8') }}</p>
                <div class="word_title add_margin">
                    <p class="title">{{ $t('word9') }}</p>
                </div>
                <p class="content">{{ $t('word10') }}</p>
            </div>
            <div class="item_con">
                <div class="word_title">
                    <p class="title">{{ $t('word11') }}</p>
                </div>
                <p class="content">{{ $t('word12') }}</p>
                <div class="word_title add_margin">
                    <p class="title">{{ $t('word13') }}</p>
                </div>
                <p class="content">{{ $t('word14') }}</p>
                <div class="word_title add_margin">
                    <p class="title">{{ $t('word15') }}</p>
                </div>
                <p class="content">{{ $t('word16') }}</p>
                <div class="word_title add_margin">
                    <p class="title">{{ $t('word17') }}</p>
                </div>
                <div class="content_item">
                    <div class="item">
                        <p class="label">1</p>
                        <div class="value">
                            <p class="value_c">{{ $t('word18') }}</p>
                            <p class="value_c"><span class="add_color">Ztl.game</span> {{ $t('word19') }}</p>
                        </div>
                    </div>
                    <div class="item">
                        <p class="label">2</p>
                        <div class="value">
                            <p class="value_c">{{ $t('word20') }}</p>
                        </div>
                    </div>
                    <div class="item">
                        <p class="label">3</p>
                        <div class="value">
                            <p class="value_c">{{ $t('word21') }}.</p>
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
            <van-popup :show="showCheck" round close-on-click-overlay @close="showCheck=false">
                <div class="vertify_box">
                   <div class="top">
                        <img :src="LogoC" alt="" class="logo">
                        <div class="vertify">
                            <img :src="Vertify" alt="" class="v_logo">
                            <p class="word">{{ $t('Verified_Official_Domain') }}</p>
                        </div>
                        <div class="values_box">{{ urlValue }}</div>
                   </div>
                   <div class="bottom_btn">
                       <div class="check_btn" @click="toVisitCheck">{{ $t('VISIT') }}</div>
                        <div class="check_btn install_btn" @click="toInstallCheck">{{ $t('INSTALL') }}</div>
                   </div>
                </div>
            </van-popup>
            <van-popup 
                    class="chat_pop" 
                    :show="showChat" 
                    close-on-click-overlay 
                    @close="showChat=false" 
                    position="bottom"
                    custom-style="width: 100%"
                >
                <div class="chat_box">
                    <iframe 
                        :src="chatUrl" 
                        allow="fullscreen *"
                        frameborder="0"
                        width="100%"
                        height="100%"
                        id="chatIFrams"
                        class="iframe_box"
                    ></iframe>
                </div>
            </van-popup>
        </div>
    </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue"
import Logo from "@/assets/ztl/logo.png"
import US from "@/assets/ztl/US.svg"
import YINDI from "@/assets/ztl/yindi.svg"
import bell from "@/assets/ztl/bell.png"
import { useI18n } from 'vue-i18n'
import {getDomainList,site,domainCheck,getIMGuest} from "@/api/index.js"
import { copyDomText } from "../common/copy.js"
import LogoC from "@/assets/ztl/logo_c.png"
import Vertify from "@/assets/ztl/vertify.png"
import { showToast } from 'vant';
const { locale } = useI18n()
const language = ref(locale.value)
const webLists:any = ref([])
const siteVal:any = ref({})
const show = ref(false)
const langLists = ref([
    {icon:YINDI,title:'तिरंगा',value: 'yindi'},
    {icon:US,title:'English',value: 'en'},
])
const urlValue = ref('')
const showCheck = ref(false)
const chatUrl = ref('')
const showChat = ref(false)
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
const getList = async()=>{
    let params = {
        // agent_id:1,
    }
    let res = await getDomainList(params);
    webLists.value = res.data
}
const getSite = async()=>{
    let res = await site();
    siteVal.value = res.data;
}
const toVisit = (item)=>{
    window.open('https://'+item.domain+window.location.search,"_blank")
}
const toInstall = (item)=>{
    window.open('https://'+item.pwa+window.location.search,"_blank")
}
const copyDomain = (item:any)=>{
     copyDomText(item.domain);
     showToast("copy success")
}
const checkedVal:any = ref({})
const checkUrl = async()=>{
    let params = {
        agent_id:1,
        domain:urlValue.value
    }
    let res = await domainCheck(params);
    if(res.code == 1) {
        // showToast("success")
        showCheck.value = true;
        checkedVal.value = res.data
    }else {
        showToast("failed")
    }

}
const installApp = ()=>{
    const agent = navigator.userAgent;
    const isAndroid = agent.indexOf('Android') > -1 || agent.indexOf('Adr') > -1;
    const [androidUrl,iosUrl] = siteVal.value.app_download.split(',')
    const jumpUrl = isAndroid ? androidUrl : iosUrl;
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = jumpUrl;
    a.click();
}

const toVisitCheck = ()=>{
    window.open('https://'+urlValue.value+window.location.search,"_blank")
}
const toInstallCheck = () =>{
    window.open('https://'+checkedVal.value.pwa+window.location.search,"_blank")
}
const toChat = ()=>{
    showChat.value = true
}
const getChatUrl = async()=>{
    let res = await getIMGuest();
    chatUrl.value = res.data.link
}
onMounted(()=>{
    getList()
    getSite()
    getChatUrl()
})
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
    background: #D3F3FF;
    padding: 0 16px;
    box-sizing: border-box;
    padding-bottom: 34px;
    position: relative;
    &::before {
        content: "";
        width: 100%;
        height: 260px;
        background:url("@/assets/ztl/top_bg.png") no-repeat center;
        background-size: 100% 100%;
        background-position-y: -15px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
    }
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
            box-sizing: border-box;
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
                // background-image: linear-gradient(180deg, #3487F6 0%, #5EAFEF 100%);
                // border-radius: 20px;
                background: url("@/assets/ztl/check_btn.png") no-repeat center;
                background-size: 100% 100%;
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
                    // background-image: linear-gradient(180deg, #3487F6 0%, #5EAFEF 100%);
                    // border-radius: 20px;
                    background: url("@/assets/ztl/check_btn.png") no-repeat center;
                    background-size: 100% 100%;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    font-family: Archive;
                    font-size: 12px;
                    flex-shrink: 0;
                }
                .install_btn {
                    // background-image: linear-gradient(180deg, #2CE482 0%, #28E283 100%);
                    background: url("@/assets/ztl/install_btn.png") no-repeat center;
                    background-size: 100% 100%;
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
                // background-image: linear-gradient(180deg, #3487F6 0%, #5EAFEF 100%);
                // border-radius: 20px;
                background: url("@/assets/ztl/big_install.png") no-repeat center;
                background-size: 100% 100%;
                color: #fff;
                font-family: Archive;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                line-height: 40px;
            }
            .tutol_btn {
                // background-image: linear-gradient(180deg, #2CE482 0%, #28E283 100%);
                background: url("@/assets/ztl/big_green.png") no-repeat center;
                background-size: 100% 100%;
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
    .vertify_box {
        padding: 25px 16px;
        box-sizing: border-box;
        .top {
            display: flex;
            flex-direction: column;
            align-items: center;
            .logo {
                width:106px;
                height: 20px;
            }
            .vertify {
                display: flex;
                gap:10px;
                align-items: center;
                font-weight: 700;
                font-size: 18px;
                color: #000000;
                font-family: DIN-BOLD;
                margin-top: 16px;
                .v_logo {
                    width: 20px;
                    height: 20px;
                }
            }
            .values_box {
                width:100%;
                height: 40px;
                border: 1px solid #277EFF;
                border-radius: 6px;
                color: #277EFF;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
            }
        }
        .bottom_btn {
            display: flex;
            justify-self: center;
            align-items: center;
            margin-top: 15px;
            gap: 24px;
            .check_btn {
                width: 140px;
                height: 40px;
                background: url("@/assets/ztl/big_install.png") no-repeat center;
                background-size: 100% 100%;
                color: #fff;
                font-family: Archive;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                line-height: 40px;
            }
            .install_btn {
                background: url("@/assets/ztl/big_green.png") no-repeat center;
                background-size: 100% 100%;
            }
        }
    }
    :deep(.chat_pop) {
        width: 100%;
        .chat_box {
            height: 80vh;
            .iframe_box {
                height: 80vh;
                position: fixed;
                z-index: 99999;
                bottom:0;
                left: 0;
            }
        }
    }
}
@media screen and (min-width: 600px) {
    .big_box {
        &::before {
            height: 360px;
            background-position-y: -24px;
        }
        .container {
            .top_heaer {
                .top {
                    .logo {
                        width: 280px;
                        height: 52px;
                    }
                    .lang {
                        width: 40px;
                        height: 40px;
                    }
                }
                .check_box {
                    .check_btn {
                        cursor: pointer;
                        width: 140px;
                        background: url("@/assets/ztl/big_install.png") no-repeat center;
                        background-size: 100% 100%;
                        &:hover {
                            transform: scale(1.02);
                        }
                    }
                }
            }
            .item_con {
                .btn_box {
                    .installc_btn {
                        cursor: pointer;
                        &:hover {
                                transform: scale(1.02);
                            }
                    }
                }
                .web_lsits {
                    .web_item {
                        input {
                            flex: 1;
                            cursor: pointer;
                        }
                        .check_btn  {
                            width: 140px;
                            cursor: pointer;
                            background: url("@/assets/ztl/big_install.png") no-repeat center;
                            background-size: 100% 100%;
                            font-size: 14px;
                            &:hover {
                                transform: scale(1.02);
                            }
                        }
                        .install_btn {
                            background: url("@/assets/ztl/big_green.png") no-repeat center;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
        }
        :deep(.van-popup) {
            max-width: 580px;
        }
        .vertify_box {
            .bottom_btn {
                .check_btn {
                    cursor: pointer;
                     &:hover {
                        transform: scale(1.02);
                    }
                }
            }
        }
        :deep(.chat_pop) {
            max-width: 600px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>