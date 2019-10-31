<!--  -->
<template>
  <div class="manyou" v-show="swiperFlag">
    <div class="close" @click="closeSwiper()">
      <img src="@/assets/close.png" alt="">
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img :src="info.pic[0]" alt=""></div>
        <div class="swiper-slide"><img :src="info.pic[1]" alt=""><img :src="info.desc[0].src" alt="" class="desc" :style={top:info.desc[0].mytop,left:info.desc[0].myleft}></div>
        <div class="swiper-slide"><img :src="info.pic[2]" alt=""><img :src="info.desc[1].src" alt="" class="desc" :style={top:info.desc[1].mytop,left:info.desc[1].myleft}></div>
        <div class="swiper-slide"><img :src="info.pic[3]" alt=""><img :src="info.desc[2].src" alt="" class="desc" :style={top:info.desc[2].mytop,left:info.desc[2].myleft}></div>
        <div class="swiper-slide"><img :src="info.pic[4]" alt=""><img :src="info.desc[3].src" alt="" class="desc" :style={top:info.desc[3].mytop,left:info.desc[3].myleft}></div>
        <div class="swiper-slide"><img :src="info.pic[5]" alt=""><img :src="info.desc[4].src" alt="" class="desc" :style={top:info.desc[4].mytop,left:info.desc[4].myleft}></div>
        <div class="swiper-slide"><img :src="info.pic[6]" alt=""><img :src="info.desc[5].src" alt="" class="desc" :style={top:info.desc[5].mytop,left:info.desc[5].myleft}></div>
        <div class="swiper-slide"><img :src="info.pic[7]" alt="" @click="handBuy()"></div>
      </div>
      <div class="swiper-button-prev swiper-button-black addprev"></div>
      <div class="swiper-button-next swiper-button-black addnext"></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      city:'',
      swiperFlag:true,
      // cityData:{
      //   newyork:{
      //     pic:[
      //       require('@/assets/tocity/newyork/guide/1.png'),
      //       require('@/assets/tocity/newyork/guide/2.png'),
      //       require('@/assets/tocity/newyork/guide/3.png'),
      //       require('@/assets/tocity/newyork/guide/4.png'),
      //       require('@/assets/tocity/newyork/guide/5.png'),
      //       require('@/assets/tocity/newyork/guide/6.png'),
      //       require('@/assets/tocity/newyork/guide/7.png'),
      //       require('@/assets/tocity/newyork/guide/8.png')
      //     ],
      //     desc:[{
      //         src:require('@/assets/tocity/newyork/guide/2-zh.png'),
      //         mytop:'40px',
      //         myleft:'200px'
      //       },{
      //         src:require('@/assets/tocity/newyork/guide/3-zh.png'),
      //         mytop:'763px',
      //         myleft:'242px'
      //       },{
      //         src:require('@/assets/tocity/newyork/guide/4-zh.png'),
      //         mytop:'680px',
      //         myleft:'38px'
      //       },{
      //         src:require('@/assets/tocity/newyork/guide/5-zh.png'),
      //         mytop:'170px',
      //         myleft:'27px'
      //       },{
      //         src:require('@/assets/tocity/newyork/guide/6-zh.png'),
      //         mytop:'700px',
      //         myleft:'50px'
      //       },{
      //         src:require('@/assets/tocity/newyork/guide/7-zh.png'),
      //         mytop:'790px',
      //         myleft:'270px'
      //       }
      //     ]
      //   },
      //   seoul:{
      //     pic:[
      //       require('@/assets/tocity/seoul/guide/1.png'),
      //       require('@/assets/tocity/seoul/guide/2.png'),
      //       require('@/assets/tocity/seoul/guide/3.png'),
      //       require('@/assets/tocity/seoul/guide/4.png'),
      //       require('@/assets/tocity/seoul/guide/5.png'),
      //       require('@/assets/tocity/seoul/guide/6.png'),
      //       require('@/assets/tocity/seoul/guide/7.png'),
      //       require('@/assets/tocity/seoul/guide/8.png')
      //     ],
      //     desc:[{
      //         src:require('@/assets/tocity/seoul/guide/2-zh.png'),
      //         mytop:'775px',
      //         myleft:'410px'
      //       },{
      //         src:require('@/assets/tocity/seoul/guide/3-zh.png'),
      //         mytop:'750px',
      //         myleft:'320px'
      //       },{
      //         src:require('@/assets/tocity/seoul/guide/4-zh.png'),
      //         mytop:'715px',
      //         myleft:'335px'
      //       },{
      //         src:require('@/assets/tocity/seoul/guide/5-zh.png'),
      //         mytop:'830px',
      //         myleft:'-6px'
      //       },{
      //         src:require('@/assets/tocity/seoul/guide/6-zh.png'),
      //         mytop:'537px',
      //         myleft:'57px'
      //       },{
      //         src:require('@/assets/tocity/seoul/guide/7-zh.png'),
      //         mytop:'1000px',
      //         myleft:'30px'
      //       }
      //     ]
      //   },
      //   london:{
      //     pic:[
      //       require('@/assets/tocity/london/guide/1.png'),
      //       require('@/assets/tocity/london/guide/2.png'),
      //       require('@/assets/tocity/london/guide/3.png'),
      //       require('@/assets/tocity/london/guide/4.png'),
      //       require('@/assets/tocity/london/guide/5.png'),
      //       require('@/assets/tocity/london/guide/6.png'),
      //       require('@/assets/tocity/london/guide/7.png'),
      //       require('@/assets/tocity/london/guide/8.png')
      //     ],
      //     desc:[{
      //         src:require('@/assets/tocity/london/guide/2-zh.png'),
      //         mytop:'560px',
      //         myleft:'210px'
      //       },{
      //         src:require('@/assets/tocity/london/guide/3-zh.png'),
      //         mytop:'800px',
      //         myleft:'100px'
      //       },{
      //         src:require('@/assets/tocity/london/guide/4-zh.png'),
      //         mytop:'900px',
      //         myleft:'40px'
      //       },{
      //         src:require('@/assets/tocity/london/guide/5-zh.png'),
      //         mytop:'900px',
      //         myleft:'10px'
      //       },{
      //         src:require('@/assets/tocity/london/guide/6-zh.png'),
      //         mytop:'822px',
      //         myleft:'400px'
      //       },{
      //         src:require('@/assets/tocity/london/guide/7-zh.png'),
      //         mytop:'875px',
      //         myleft:'465px'
      //       }
      //     ]
      //   }
      // }
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      direction : 'vertical',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
      },
    })
  },
  computed:{
    info(){
      return this.cityData[this.$route.params.city]
    },
    cityData(){
      return {
        newyork:{
          pic:[
            require(`@/assets/tocity/newyork/guide/1-${this.$i18n.locale}.png`),
            require('@/assets/tocity/newyork/guide/2.png'),
            require('@/assets/tocity/newyork/guide/3.png'),
            require('@/assets/tocity/newyork/guide/4.png'),
            require('@/assets/tocity/newyork/guide/5.png'),
            require('@/assets/tocity/newyork/guide/6.png'),
            require('@/assets/tocity/newyork/guide/7.png'),
            require(`@/assets/tocity/newyork/guide/8-${this.$i18n.locale}.png`)
          ],
          desc:[{
              src:require(`@/assets/tocity/newyork/guide/2-${this.$i18n.locale}.png`),
              mytop:'40px',
              myleft:'200px'
            },{
              src:require(`@/assets/tocity/newyork/guide/3-${this.$i18n.locale}.png`),
              mytop:'763px',
              myleft:'242px'
            },{
              src:require(`@/assets/tocity/newyork/guide/4-${this.$i18n.locale}.png`),
              mytop:'680px',
              myleft:'38px'
            },{
              src:require(`@/assets/tocity/newyork/guide/5-${this.$i18n.locale}.png`),
              mytop:'170px',
              myleft:'27px'
            },{
              src:require(`@/assets/tocity/newyork/guide/6-${this.$i18n.locale}.png`),
              mytop:'700px',
              myleft:'50px'
            },{
              src:require(`@/assets/tocity/newyork/guide/7-${this.$i18n.locale}.png`),
              mytop:'790px',
              myleft:'270px'
            }
          ]
        },
        seoul:{
          pic:[
            require(`@/assets/tocity/seoul/guide/1-${this.$i18n.locale}.png`),
            require('@/assets/tocity/seoul/guide/2.png'),
            require('@/assets/tocity/seoul/guide/3.png'),
            require('@/assets/tocity/seoul/guide/4.png'),
            require('@/assets/tocity/seoul/guide/5.png'),
            require('@/assets/tocity/seoul/guide/6.png'),
            require('@/assets/tocity/seoul/guide/7.png'),
            require(`@/assets/tocity/seoul/guide/8-${this.$i18n.locale}.png`)
          ],
          desc:[{
              src:require(`@/assets/tocity/seoul/guide/2-${this.$i18n.locale}.png`),
              mytop:'775px',
              myleft:'410px'
            },{
              src:require(`@/assets/tocity/seoul/guide/3-${this.$i18n.locale}.png`),
              mytop:'750px',
              myleft:'320px'
            },{
              src:require(`@/assets/tocity/seoul/guide/4-${this.$i18n.locale}.png`),
              mytop:'715px',
              myleft:'335px'
            },{
              src:require(`@/assets/tocity/seoul/guide/5-${this.$i18n.locale}.png`),
              mytop:'830px',
              myleft:'-6px'
            },{
              src:require(`@/assets/tocity/seoul/guide/6-${this.$i18n.locale}.png`),
              mytop:'537px',
              myleft:'57px'
            },{
              src:require(`@/assets/tocity/seoul/guide/7-${this.$i18n.locale}.png`),
              mytop:'1000px',
              myleft:'30px'
            }
          ]
        },
        london:{
          pic:[
            require(`@/assets/tocity/london/guide/1-${this.$i18n.locale}.png`),
            require('@/assets/tocity/london/guide/2.png'),
            require('@/assets/tocity/london/guide/3.png'),
            require('@/assets/tocity/london/guide/4.png'),
            require('@/assets/tocity/london/guide/5.png'),
            require('@/assets/tocity/london/guide/6.png'),
            require('@/assets/tocity/london/guide/7.png'),
            require(`@/assets/tocity/london/guide/1-${this.$i18n.locale}.png`)
          ],
          desc:[{
              src:require(`@/assets/tocity/london/guide/2-${this.$i18n.locale}.png`),
              mytop:'560px',
              myleft:'210px'
            },{
              src:require(`@/assets/tocity/london/guide/3-${this.$i18n.locale}.png`),
              mytop:'800px',
              myleft:'100px'
            },{
              src:require(`@/assets/tocity/london/guide/4-${this.$i18n.locale}.png`),
              mytop:'900px',
              myleft:'40px'
            },{
              src:require(`@/assets/tocity/london/guide/5-${this.$i18n.locale}.png`),
              mytop:'900px',
              myleft:'10px'
            },{
              src:require(`@/assets/tocity/london/guide/6-${this.$i18n.locale}.png`),
              mytop:'822px',
              myleft:'400px'
            },{
              src:require(`@/assets/tocity/london/guide/7-${this.$i18n.locale}.png`),
              mytop:'875px',
              myleft:'465px'
            }
          ]
        }
      }
    }
  },
  methods:{
    closeSwiper(){
      this.swiperFlag=false
      this.$router.push('/')
      // console.log(this.$i18n.locale)//找到相应语言的字符，加载相应字符的图片
      // console.log(`@/assets/tocity/newyork/guide/4-${this.$i18n.locale}.png`)//拼接相应图片的地址
    },
    handBuy(){
      this.$router.push('/shop')
    }
  }
}
</script>

<style lang='scss' scoped>
  .manyou{
    width:750px;
    position:absolute;
    z-index:999;
    top:0;
    left:0;
    background: #fff;
    .close{
      position:fixed;
      width:116px;
      height:116px;
      padding:40px;
      z-index:99999;
      top:0;
      left:0;
    }
    .swiper-container{
      width:750px;
      height:1333px;
      .swiper-slide{
        width:100%;
        overflow: hidden;
        height:1333px;
        .desc{
          position:absolute;
        }
      }
      .addprev{
        position:absolute;
        top:40px;
        left:48%;
        transform: rotate(90deg);
      }
      .addnext{
        position:absolute;
        top:1300px;
        left:48%;
        transform: rotate(90deg);
      }
    }
  }
</style>
