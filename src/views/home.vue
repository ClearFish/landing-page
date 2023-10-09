<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { showToast } from 'vant';
import {useRouter} from "vue-router"
import game1 from "@/assets/home/game1.png"
import game2 from "@/assets/home/game2.png"
import game3 from "@/assets/home/game3.png"
import game4 from "@/assets/home/game4.png"
import game5 from "@/assets/home/game5.png"
import { copyDomText } from "../common/copy.js"
const gameList = ref<any>([
  {name:"game1",img:game1},
  {name:"game2",img:game2},
  {name:"game3",img:game3},
  {name:"game4",img:game4},
  {name:"game5",img:game5}
])
const activeNames = ref<any>(['1','2'])
const copy = (str:any)=>{
     copyDomText(str);
     showToast("copy suuess")
}
const toURl = (url:string)=>{
  window.open(url,"_lank")
}
</script>

<template>
 <div class="home_box">
  <div class="top_bg"></div>
    <div class="top">
      <img src="@/assets/home/logo.png" alt="">
    </div>
    <div class="title">
      <div class="title_top">
        <img src="@/assets/home/title1.png" alt="" class="logo_1">
        <img src="@/assets/home/title2.png" alt="" class="logo_2">
      </div>
      <img src="@/assets/home/title3.png" alt="" class="logo_3">
      <img src="@/assets/home/title4.png" alt="" class="logo_4">
      <img src="@/assets/home/top_bg.png" alt="" class="big_bg">
    </div>
    <div class="top_content">
      <p>Operating WIN GO lottery online betting, electronic game online betting, live video betting, Good reputation, many promotions.</p>
    </div>
    <div class="game_box">
      <ul>
        <li v-for="(item,index) in gameList" :key="index" :style="index>2?'width:49%;margin-top:-10px':'width:33%'">
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
    <div class="content_box">
      <div class="container">
        <div class="contenttitle_box link_box">
          <div class="title_box" >
            <p>Registration link</p>
          </div>
          <div class="top_cont">
            <p class="link" @click="toURl('https://www.61lottery.com/pages/login/index?sharecode=908135')">https://www.61lottery.com/pages/login/index?sharecode=908135</p>
            <img src="@/assets/home/copy.svg" alt="" class="copy" @click="copy('https://www.61lottery.com/pages/login/index?sharecode=908135')">
          </div>
          <div class="bottom_cont">
            <p>61lottery supports <span class="red_word">Level 6</span> offline lottery, welcome everyone to join our agent team.</p>
          </div>
        </div>
        <div class="contenttitle_box link_box add_margin">
          <div class="title_box big_title" style="width:158px">
            <p>Discount Information</p>
          </div>
          <div class="bottom_cont information_box">
            <p>After registering a certified mobile phone number, you can receive trial game bonuses, and the amount you receive is a random amount of 10-100 rupees.</p>
            <p>Promotion of effective recharge customers 1 reward 41-80 rupees.</p>
            <p>Promotional users will be rewarded more than 11% for their first recharge.</p>
            <p>Promotion users will be rewarded with more than 0.8% of their betting amount.</p>
            <p>As long as you join 61lottery and successfully promote 1 or more valid members, you can receive the rewards immediately.</p>
            <p>As long as you develop 20 valid recharge members, you can become a long-term agent of 61lottery with generous benefits and rewards.</p>
            <div class="addus">Join us now!</div>
          </div>
        </div>
        <div class="contenttitle_box link_box add_margin">
          <div class="title_box" >
            <p>Registration link</p>
          </div>
          <div class="top_cont">
            <p class="link" @click="toURl('https://www.61lottery.com/pages/login/index?sharecode=908135')">https://www.61lottery.com/pages/login/index?sharecode=908135</p>
            <img src="@/assets/home/copy.svg" alt="" class="copy" @click="copy('https://www.61lottery.com/pages/login/index?sharecode=90813')">
          </div>
        </div>
        <div class="contenttitle_box link_box add_margin">
          <div class="title_box" >
            <p>Telegram Official</p>
          </div>
          <div class="top_cont">
            <p class="link" @click="toURl('https://t.me/lottery61games888')">https://t.me/lottery61games888</p>
            <img src="@/assets/home/copy.svg" alt="" class="copy" @click="copy('https://t.me/lottery61games888')">
          </div>
        </div>
        <div class="contenttitle_box link_box add_margin">
            <div class="title_box big_title" style="width:158px">
              <p>Reward Pyramid Mode</p>
            </div>
            <div class="bottom_cont information_box">
              <p>A20% B15% C10% D5% E5% F5%</p>
              <img src="@/assets/home/cont_bg.png" alt="" class="percent_bg">
              <p>Example of betting reward rules, refer to the picture above, A recommended B, B recommended C...F recommended G.</p>
              <p>If the total amount of bets of all members of G is 10 million rupees, the handling fee of 2-2.5% (handling fees generated by different games are different) is 200,000-250,000 rupees. The following calculation is based on the handling fee of 200k per day.</p>
              <p>Then the rewards ABCDEF receives every day are:</p>
              <div class="other_cont">
                <p>A:200kX20%=40000/DAY</p>
                <p>B:200kX15%=30000/DAY</p>
                <p>C:200kX10%=20000/DAY</p>
                <p>D:200kX5%=10000/DAY</p>
                <p>E:200kX5%=10000/DAY</p>
                <p>F:200kX5%=10000/DAY</p>
              </div>
              <div class="reward">This reward is permanent and you can get the reward as long as the members you develop make any bets.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_box">
        <div class="container">
          <div class="contenttitle_box link_box add_margin">
            <div class="title_box big_title" style="width:158px">
              <p>Common Problems</p>
            </div>
            <div class="bottom_cont information_box">
              <van-collapse v-model="activeNames">
                <van-collapse-item title-class="title_style" label-class="lable_style" title="Q: How do I top up?" name="1">
                  When the recommended person registers and completes the first recharge, you will be automatically rewarded with 11% of the referral fee. If you recharge 10,000 yuan, you will immediately receive 1,100 yuan. In order to prevent yourself from recommending yourself, you need to bet 2 times the recharge amount for the first recharge.
                </van-collapse-item>
                <van-collapse-item title-class="title_style" label-class="lable_style" title="Q: The person I recommended deposited 10,000 rupees, how do I get the reward?" name="2">
                    as long as the person you recommend places a bet, you can immediately get 20% of the handling fee generated by the bet amount. For example, if a member bets 10,000 and generates a handling fee of 200 rupees, you can get 20%, which is 40 rupees.
                </van-collapse-item>
              </van-collapse>
            </div>
          </div>
        </div>
    </div>
 </div>
</template>

<style scoped lang="scss">
.home_box {
  padding: 20px;
  width: 100%;
  background: linear-gradient(180deg, #FFB757 0%, #ffe39f00 100%);
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  .top_bg {
    width: 253px;
    height: 253px;
    opacity: 0.8;
    background: #FF1960;
    filter: blur(50px);
    position: absolute;
    top: -100px;
    left: -25px;
    z-index: 1;
  }
  .top {
    z-index: 2;
    position: relative;
    img {
      width: 103px;
      height: 23px;
    }
  }
  .title {
    margin-top: 20px;
    position: relative;
    z-index: 2;
    img {
      display: block;
    }
    .title_top {
      display: flex;
      align-items: center;
      gap: 8px;
      .logo_1 {
        width: 141px;
        height: 36px;
      }
      .logo_2 {
        width: 100px;
        height: 36px;
      }
    }
    .logo_3 {
      width: 109px;
      height: 36px;
      margin-top: 3px;
    }
    .logo_4 {
      width: 221px;
      height: 36px;
      margin-top: 3px;
    }
    .big_bg {
      position: absolute;
      right: 0;
      top: -80px;
      z-index: 1;
      width: 178px;
      height: 211px;
    }
  }
  .top_content {
    width: 100%;
    height: 75px;
    background: url("@/assets/home/content_bg.png") no-repeat center;
    background-size: 100% 100%;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    p{
      padding: 20px 10px 10px 20px;
      font-family: Kefa-Regular;
      font-weight: 400;
      font-size: 12px;
      color: #5C0000;
    }
  }
  .game_box {
    width: 100%;
    margin-top: 16px;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      li {
        
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .content_box {
    padding: 0 7px;
    margin-top: 16px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 8px;
      background: url("@/assets/home/top_trangle.png") no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .container {
      background-image: linear-gradient(180deg, #FFE1D4 0%, #FFFFFF 99%);
      box-shadow: 0 2px 6px 0 #ffa45680;
      border-radius: 0 0 5px 5px;
      padding: 15px 10px;
      padding-top: 30px;
      .link_box {
        padding: 20px 16px 10px 16px;
        background: #FFFFFF;
        border-radius: 6px;
      }
      .contenttitle_box {
          position: relative;
        .title_box {
          width: 123px;
          height: 35px;
          background: url("@/assets/home/content_title.png") no-repeat center;
          background-size: 100% 100%;
          position: absolute;
          left: 4px;
          top: -14px;
          p {
            color: #ffffff;
            font-size: 13px;
            font-face: Helvetica;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
          }
        }
        .big_title {
           background: url("@/assets/home/bigtitle.png") no-repeat center;
          background-size: 100% 100%;
        }
        .top_cont {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .link {
            width: 88%;
            word-wrap: break-word;
            font-family: RobotoCondensed-Bold;
            font-weight: 700;
            font-size: 14px;
            color: #960101;
            padding-left: 20px;
            position: relative;
            &::before {
              content: "";
              width: 11px;
              height: 7px;
              background: url("@/assets/home/sjx.svg") no-repeat center;
              background-size: 100% 100%;
              position: absolute;
              left: 0;
              top: 5px;
            }
          }
          .copy {
            width: 13px;
            height: 15px;

          }
        }
        .bottom_cont {
          margin-top: 7px;
          color: #5c0000;
          font-size: 12px;
          font-face: Kefa;
          font-weight: 400;
          line-height: 15px;
          letter-spacing: 0;
          paragraph-spacing: 0;
          text-align: left;
          .red_word {
            color: #FF2433;
          }
        }
        .information_box {
          p {
             color: #5c0000;
            font-size: 12px;
            font-face: Kefa;
            font-weight: 400;
            line-height: 15px;
            margin-top: 6px;
            padding-left: 26px;
            position: relative; 
            &::before {
              content: "";
              width: 11px;
              height: 11px;
              position: absolute;
              background: url("@/assets/home/flower.png") no-repeat center;
              background-size: 100% 100%;
              left: 0;
              top: 0;
            }
          }
          .addus {
            height: 14px;
            font-family: Kefa-Bold;
            font-weight: 700;
            font-size: 12px;
            color: #5C0000;
            padding-left: 26px;
            margin-top: 7px;
          }
          .percent_bg {
            width: 90%;
            margin: 0 auto;
            margin-top: 7px;
            height: auto;
          }
          .other_cont {
            padding-left: 26px;
            p {
              opacity: 0.6;
              font-family: Kefa-Regular;
              font-weight: 400;
              font-size: 12px;
              color: #5C0000;
              padding: 0;
              &::before {
                width: 0;
              }
            }
          }
          .reward {
            font-family: Kefa-Bold;
            font-weight: 700;
            font-size: 12px;
            padding-left: 26px;
            margin-top: 7px;
            color: #FF2433;
          }
          ::v-deep {
            .van-collapse {
              .van-collapse-item {
                .van-cell {
                  .title_style {
                    font-family: Kefa-Regular;
                    font-weight: 400;
                    font-size: 12px;
                    color: #5C0000;
                  } 
                }
                .van-collapse-item__wrapper {
                  .van-collapse-item__content {
                    font-family: Kefa-Regular;
                    font-weight: 400;
                    font-size: 12px;
                    color: #5C0000;
                  }
                }
              }
            }
          }
        }
      }
      .add_margin {
        margin-top: 30px;
      }
    }
  }
}
</style>
