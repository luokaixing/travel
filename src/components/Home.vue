<!-- home -->
<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/tocity/london/banner.png" alt="">
          <div class="btn-wrapper">
            <p>{{$t('m.hdesc1london')}}<br>{{$t('m.hdesc2london')}}</p>
            <div class="btn" @click="goToCity1()">
              {{$t('m.clickText')}}
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="@/assets/tocity/newyork/banner.png" alt="">
          <div class="btn-wrapper">
            <p>{{$t('m.hdesc1newyork')}}<br>{{$t('m.hdesc2newyork')}}</p>
            <div class="btn" @click="goToCity2()">
              {{$t('m.clickText')}}
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="@/assets/tocity/seoul/banner.png" alt="">
          <div class="btn-wrapper">
            <p>{{$t('m.hdesc1seoul')}}<br>{{$t('m.hdesc2seoul')}}</p>
            <div class="btn" @click="goToCity3()">
              {{$t('m.clickText')}}
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="game">
      <img src="@/assets/index/game_bg.png" alt="" class="game-img">
      <div class="content">
        <p>{{$t('m.gameText1')}}<br>{{$t('m.gameText2')}}</p>
        <div class="btn">{{$t('m.gameBtn')}}</div>
      </div>
      <div class="car">
        <img src="@/assets/car.png" alt="" class="carImg" id="car">
      </div>
    </div>
    <div class="text">
      <div class="content">{{$t('m.contentTitle')}}</div>
    </div>
    <div class="product">
      <img src="@/assets/index/product-newyork-index.jpg" alt="" class="img">
      <div class="right">
        <p class="title">{{$t('m.proTitle1')}}<br>{{$t('m.proTitle2')}}</p>
        <div class="content">
          {{$t('m.proDescription')}}
        </div>
        <div class="btn" @click="handBuy()">{{$t('m.proBtn')}}</div>
      </div>
    </div>
    <div class="product">
      <img src="@/assets/index/product-seoul-index.jpg" alt="" class="img">
      <div class="right">
        <p class="title">{{$t('m.proTitle1')}}<br>{{$t('m.proTwoTitle2')}}</p>
        <div class="content">
          {{$t('m.proTwoDescription')}}
        </div>
        <div class="btn" @click="handBuy()">{{$t('m.proBtn')}}</div>
      </div>
    </div>
    <div class="product">
      <img src="@/assets/index/product-london-index.jpg" alt="" class="img">
      <div class="right">
        <p class="title">{{$t('m.proTitle1')}}<br>{{$t('m.proThreeTitle2')}}</p>
        <div class="content">
          {{$t('m.proThreeDescription')}}
        </div>
        <div class="btn" @click="handBuy()">{{$t('m.proBtn')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data () {
    return {
    }
  },
  methods:{
    handBuy(){
      this.$router.push('/shop')
    },
    goToCity1(){
      this.$router.push('/perfect/london')
    },
    goToCity2(){
      this.$router.push('/perfect/newyork')
    },
    goToCity3(){
      this.$router.push('/perfect/seoul')
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay:true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable :true,
      },
    });
  },
}
</script>

<style lang='scss' scoped>
@import "swiper/css/swiper.min.css";
  .home{
    width:750px;
    position:relative;
    overflow: hidden;
    .swiper-container{
      width:100%;
      height:413px;
      position:relative;
      overflow: hidden;
      --swiper-pagination-color: #DF6053;
      .btn-wrapper{
        position:absolute;
        top:7rem;
        right:1.2rem;
        text-align:center;
        color:#000;
        font-size:32px;
        .btn{
          border:0.125rem solid #000;
          width:170px;
          margin-left:50%;
          transform:translate(-50%);
          padding:10px 30px;
          font-size:20px;
        }
      }
    }
    .game{
      width:100%;
      height:25.4375rem;
      color:#fff;
      text-align: center;
      position:relative;
      overflow: hidden;
      .game-img{
        width:100%;
        height:100%;
        display:inline-block;
        z-index:-1;
      }
      .content{
        text-align:center;
        position:absolute;
        margin-top:95px;
        top:0;
        left:0;
        right:0;
        bottom:0;
        font-size:32px;
        color:#fff;
        z-index:99;
        .btn{
          font-size:20px;
          border:2px solid #fff;
          height:42px;
          width:120px;
          margin-left:50%;
          transform: translate(-50%);
          line-height:42px;
          margin-top:40px;
          padding:0 20px;
        }
      }
      .carImg{
        z-index:99;
        width:312px;
        height:140px;
        margin-left:-312px;
        position:absolute;
        left:0px;
        bottom:0px;
        animation-name:myani;
        animation-duration:5s;
        animation-iteration-count:infinite;
      }
      @keyframes myani{
        0%{
          transform:translate(0);
        }
        100%{
          transform:translate(1100px);
        }
      }
    }
    .text{
      width:100%;
      height:110px;
      text-align:center;
      .content{
        font-size:2.625rem;
        text-align:center;
        margin:2.625rem auto;
        border-top:2px solid #474747;
        border-bottom:2px solid #6D6D6D;
        padding:20px;
        width:560px;
      }
    }
    .product{
      width:650px;
      height:310px;
      margin:0 auto;
      padding:60px 0;
      border-bottom:2px solid #CACACA;
      .img{
        width:285px;
        height:285px;
        display:inline-block;
      }
      .right{
        display:inline-block;
        width:310px;
        height:220px;
        vertical-align: top;
        margin-top:20px;
        margin-left:50px;
        .title{
          font-size:25px;
        }
        .content{
          font-size:20px;
        }
        .btn{
          font-size:20px;
          margin-top:20px;
          border:2px solid #929292;
          width:120px;
          padding:10px 20px;
          text-align:center;
        }
      }
    }
  }
</style>
