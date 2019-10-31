<!--  -->
<template>
  <div class="shop">
    <div class="shop-wrapper">
      <div class="head">
        <p class="title">{{$t('m.shopTitle1')}}<br>{{$t('m.shopTitle2')}}</p>
      </div>
      <div class="desc">
        <p>1.{{$t('m.shopDescOne')}}</p>
        <p>2.{{$t('m.shopDescTwo')}}</p>
        <p>3.{{$t('m.shopDescThree')}}</p>
      </div>
      <div class="text">{{$t('m.shopTextOne')}}</div>
      <div class="shop-link">
        <p><a href="http://m.chn.lottedfs.cn/kr/product/productDetail?prdNo=20000557583" class="my-link" target="_blank">{{$t('m.shopLinkOne')}}</a></p>
        <p><a href="http://m.shilladfs.com/estore/kr/zh/Makeup/Set-Palette/p/4305560" class="my-link" target="_blank">{{$t('m.shopLinkTwo')}}</a></p>
        <p><a href="http://mcn.ssgdfm.com/shop/product/productDetail?prdtCode=07349000940" class="my-link" target="_blank">{{$t('m.shopLinkThree')}}</a></p>
      </div>
      <div class="text">{{$t('m.shopTextTwo')}}  &  {{$t('m.shopTextThree')}}</div>
      <div class="shop-link">
        <p><a href="https://uk.worlddutyfree.com/ukm_en/bobbi-brown-destination-beauty-new-york-edition.html" class="my-link" target="_blank">World Duty Free</a></p>
        <p><a href="https://www.theloop.ie/brands/bobbi-brown/face/travel-city-palettes/destination-beauty-new-york-edition/362991.html?cgid=bobbi-brown-travel-city-palettes" class="my-link" target="_blank">The Loop Duty Free</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
  .shop{
    width:100%;
    margin-top:-84px;
    z-index:9999;
    background: #fff;
    color:#000;
    padding:75px auto;
    overflow: hidden;
    .shop-wrapper{
      padding:80px 70px 0px 70px;
      .head{
        .title{
          font-size:20px;
          text-align:center;
        }
      }
      .desc{
        font-size:18px;
        color:#000;
        border:2px solid #000;
        margin-top:30px;
        padding:25px 35px 0px 50px; 
      }
      .text{
        font-size:45px;
        text-align:center;
        line-height:115px;
        margin-top:10px;
        height:115px;
      }
      .shop-link{
        text-align:center;
        /* margin-top:30px; */
        .my-link{
          font-size:28px;
          color:#000;
        }
      }
    }
  }
</style>
