<!--  -->
<template>
  <div class="per-wrapper">
    <div class="head-wrapper">
      <div class="content">
        <div class="left">
          <img :src="info.headLogo" alt="" class="img">
        </div>
        <div class="right">
          <p class="text">{{info.headText1}} <br>{{info.headText2}}</p>
          <div class="btn" @click="handBuy()">{{$t('m.proBtn')}}</div>
        </div>
      </div>
    </div>
    <div class="logo">
      <img :src="info.logo" alt="">
    </div>
    <div class="product-wrapper" v-for="(data,index) in info.pro" :key="index">
      <div class="content">
        <img :src="data.proImg" alt="">
        <div class="text">
          <p class="title">{{data.proTitle}} </p>
          <p class="description">{{data.proDesc}}</p>
        </div>
        <div class="btn" @click="handBuy()">{{$t('m.proBtn')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city:'',
      // cityData:{
      //   newyork:{
      //     headLogo:require('@/assets/index/product-newyork.jpg'),
      //     headText1:'城市彩妆系列:',
      //     headText2:'纽约风格彩盘',
      //     logo:require('@/assets/tocity/newyork/howto.png'),
      //     pro:[
      //       {
      //         proImg:require('@/assets/tocity/newyork/1.png'),
      //         proTitle:'第一步',
      //         proDesc:'使用芭比波朗妆前特润底霜，为肌肤带来滋润呵护'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/newyork/2.png'),
      //         proTitle:'第二步',
      //         proDesc:'涂抹芭比波朗清透持状粉底液，打造清透细腻底妆'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/newyork/3.png'),
      //         proTitle:'第三步',
      //         proDesc:'使用纽约风格彩盘中Brooklyn Nights高光提亮面部，为肌肤带来通透光泽。在眼皮处清扫眼影Flesh，制造晕染感。并用Frappe晕染眼窝，加深眼睛轮廓，随后在眼线处涂抹Mahogany，最后点涂Rich Bronze，为眼妆增添独特点缀'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/newyork/4.png'),
      //         proTitle:'第四步',
      //         proDesc:'使用烟熏魅睫睫毛膏，打造魅惑双眼'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/newyork/5.png'),
      //         proTitle:'第五步',
      //         proDesc:'涂抹纽约风格彩盘中纯色奢金唇膏Pink Buff，完成全部妆容'
      //       }
      //     ]
      //   },
      //   seoul:{
      //     headLogo:require('@/assets/index/product-seoul.jpg'),
      //     headText1:'城市彩妆系列:',
      //     headText2:'首尔风格彩盘',
      //     logo:require('@/assets/tocity/seoul/howto.png'),
      //     pro:[
      //       {
      //         proImg:require('@/assets/tocity/seoul/1.png'),
      //         proTitle:'第一步',
      //         proDesc:'使用芭比波朗至盈呵护亮眼美肌乳及至盈呵护丰润修护眼霜，做好肌肤打底'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/seoul/2.png'),
      //         proTitle:'第二步',
      //         proDesc:'使用密集修护菁华粉底液，让肌肤重焕活力'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/seoul/3.png'),
      //         proTitle:'第三步',
      //         proDesc:'使用首尔风格彩盘中Coral Sugar腮红，轻扫苹果肌，带来元气少女活力。随后使用Apgujeong Posh高光提亮面部，为肌肤增添自然光泽。最后使用Toast轻刷眼皮，并叠加Itaewon Wow，打造灵动精致妆感'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/seoul/4.png'),
      //         proTitle:'第四步',
      //         proDesc:'使用Blackest Black流云液体眼线笔轻描上眼线，利用流云随心造型眉笔填充眉形，打造干净妆面'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/seoul/5.png'),
      //         proTitle:'第五步',
      //         proDesc:'涂抹首尔风格彩盘中纯色奢金唇膏Hibiscus，完成全部妆容'
      //       }
      //     ]
      //   },
      //   london:{
      //     headLogo:require('@/assets/index/product-london.jpg'),
      //     headText1:'城市彩妆系列:',
      //     headText2:'伦敦风格彩盘',
      //     logo:require('@/assets/tocity/london/howto.png'),
      //     pro:[
      //       {
      //         proImg:require('@/assets/tocity/london/1.png'),
      //         proTitle:'第一步',
      //         proDesc:'使用保湿隔离霜，为肌肤竖起天然保护屏障'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/london/2.png'),
      //         proTitle:'第二步',
      //         proDesc:'清透持妆粉底液和即时无痕遮瑕蜜的完美组合，打造自然无瑕肌肤'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/london/3.png'),
      //         proTitle:'第三步',
      //         proDesc:'使用伦敦风格彩盘中Chelsea Glow高光提亮面部，打造自然光感。在眼皮及下眼线轻扫眼影Twilight，做好眼妆打底，随后使用Mayfair Mauve涂抹眼窝、外眼角及下眼线区域，加深眼睛轮廓，并用Picadilly Plum加深上眼线，最后使用Beach Pink提亮内眼角，完成玫瑰烟熏妆效'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/london/4.png'),
      //         proTitle:'第四步',
      //         proDesc:'使用流云眼线膏勾勒眼线，并涂抹烟熏魅睫睫毛膏，释放双眸魅力'
      //       },
      //       {
      //         proImg:require('@/assets/tocity/london/5.png'),
      //         proTitle:'第五步',
      //         proDesc:'涂抹伦敦风格彩盘中纯色奢金唇膏Neutral Rose，完成全部妆容'
      //       }
      //     ]
      //   }
      // },
    }
  },
  methods:{
    handBuy(){
      this.$router.push('/shop')
    }
  },
  // watch:{
  //   '$route':{
  //     immediate:true,
  //     handler(newVal,oldVal){
  //       // console.log(newVal.params.city)
  //       this.city=newVal.params.city
  //      this.info = this.cityData[newVal.params.city]
  //      console.log(this.info)
  //     }
  //   }
  // },
  computed:{
    info(){
      return this.cityData[this.$route.params.city]
    },
    cityData(){
      return {
        newyork:{
          headLogo:require('@/assets/index/product-newyork.jpg'),
          headText1:this.$t('m.proTitle1'),
          headText2:this.$t('m.proTitle2'),
          logo:require('@/assets/tocity/newyork/howto.png'),
          pro:[
            {
              proImg:require('@/assets/tocity/newyork/1.png'),
              proTitle:this.$t('m.stepOne'),
              proDesc:this.$t('m.stepOneDesc')
            },
            {
              proImg:require('@/assets/tocity/newyork/2.png'),
              proTitle:this.$t('m.stepTwo'),
              proDesc:this.$t('m.stepTwoDesc')
            },
            {
              proImg:require('@/assets/tocity/newyork/3.png'),
              proTitle:this.$t('m.stepThree'),
              proDesc:this.$t('m.stepThreeDesc')
            },
            {
              proImg:require('@/assets/tocity/newyork/4.png'),
              proTitle:this.$t('m.stepFour'),
              proDesc:this.$t('m.stepFourDesc')
            },
            {
              proImg:require('@/assets/tocity/newyork/5.png'),
              proTitle:this.$t('m.stepFive'),
              proDesc:this.$t('m.stepFiveDesc')
            }
          ]
        },
        seoul:{
          headLogo:require('@/assets/index/product-seoul.jpg'),
          headText1:this.$t('m.proTitle1'),
          headText2:this.$t('m.proTwoTitle2'),
          logo:require('@/assets/tocity/seoul/howto.png'),
          pro:[
            {
              proImg:require('@/assets/tocity/seoul/1.png'),
              proTitle:this.$t('m.stepOne'),
              proDesc:this.$t('m.seoulstepOneDesc')
            },
            {
              proImg:require('@/assets/tocity/seoul/2.png'),
              proTitle:this.$t('m.stepTwo'),
              proDesc:this.$t('m.seoulstepTwoDesc')
            },
            {
              proImg:require('@/assets/tocity/seoul/3.png'),
              proTitle:this.$t('m.stepThree'),
              proDesc:this.$t('m.seoulstepThreeDesc')
            },
            {
              proImg:require('@/assets/tocity/seoul/4.png'),
              proTitle:this.$t('m.stepFour'),
              proDesc:this.$t('m.seoulstepFourDesc')
            },
            {
              proImg:require('@/assets/tocity/seoul/5.png'),
              proTitle:this.$t('m.stepFive'),
              proDesc:this.$t('m.seoulstepFiveDesc')
            }
          ]
        },
        london:{
          headLogo:require('@/assets/index/product-london.jpg'),
          headText1:this.$t('m.proTitle1'),
          headText2:this.$t('m.proThreeTitle2'),
          logo:require('@/assets/tocity/london/howto.png'),
          pro:[
            {
              proImg:require('@/assets/tocity/london/1.png'),
              proTitle:this.$t('m.stepOne'),
              proDesc:this.$t('m.londonstepOneDesc')
            },
            {
              proImg:require('@/assets/tocity/london/2.png'),
              proTitle:this.$t('m.stepTwo'),
              proDesc:this.$t('m.londonstepTwoDesc')
            },
            {
              proImg:require('@/assets/tocity/london/3.png'),
              proTitle:this.$t('m.stepThree'),
              proDesc:this.$t('m.londonstepThreeDesc')
            },
            {
              proImg:require('@/assets/tocity/london/4.png'),
              proTitle:this.$t('m.stepFour'),
              proDesc:this.$t('m.londonstepFourDesc')
            },
            {
              proImg:require('@/assets/tocity/london/5.png'),
              proTitle:this.$t('m.stepFive'),
              proDesc:this.$t('m.londonstepFiveDesc')
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .per-wrapper{
    width:100%;
    position:relative;
    .head-wrapper{
      width:100%;
      height:330px;
      .content{
        padding:65px 60px;
        display:flex;
        .img{
          display:inline-block;
          width:285px;
          height:200px; 
        }
        .right{
          padding-left:60px;
          .text{
            font-size:28px;
            color:#000;
          }
          .btn{
            font-size:20px;
            width:120px;
            border:2px solid #000;
            padding:10px 20px;
          }
        }
      }
    }
    .logo{
      width:100%;
    }
    .product-wrapper{
      width:690px;
      margin:80px auto;
      border-bottom:1px solid #000;
      .content{
        padding:0 80px;
        margin-bottom:80px;
        .text{
          color:#000;
          margin-top:40px;
          font-size:24px;
        }
        .btn{
          font-size:20px;
          height:64px;
          line-height:64px;
          margin-top:100px;
          text-align:center;
          width:340px;
          border:2px solid #000;
        }
      }
    }
  }
</style>
