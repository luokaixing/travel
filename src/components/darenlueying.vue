<!--  -->
<template>
  <div class="daren">
    <div class="item" v-for="(data,index) in users" :key="index">
      <div class="left">
        <img :src="data.img1" alt="" class="img1">
        <img :src="data.img2" alt="" class="img2">
        <img :src="data.img3" alt="" class="img3">
        <img :src="data.img4" alt="" class="img4">
        <img :src="data.img5" alt="" class="img3">
      </div>
      <div class="right">
        <div class="title">{{data.name}}</div>
        <div class="btn" @click="showDetail(index)">{{$t('m.photoBtn')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // users:[
      //   {
      //     img1:require('@/assets/imgs/1_1.jpg'),
      //     img2:require('@/assets/imgs/1_2.jpg'),
      //     img3:require('@/assets/imgs/1_3.jpg'),
      //     img4:require('@/assets/imgs/1_4.jpg'),
      //     img5:require('@/assets/imgs/1_5.jpg'),
      //     name:'邵玉菲SOPHIA'
      //   },
      //   {
      //     img1:require('@/assets/imgs/2_1.jpg'),
      //     img2:require('@/assets/imgs/2_2.jpg'),
      //     img3:require('@/assets/imgs/2_3.jpg'),
      //     img4:require('@/assets/imgs/2_4.jpg'),
      //     img5:require('@/assets/imgs/2_5.jpg'),
      //     name:'梳子爱美'
      //   },
      //   {
      //     img1:require('@/assets/imgs/3_1.jpg'),
      //     img2:require('@/assets/imgs/3_2.jpg'),
      //     img3:require('@/assets/imgs/3_3.jpg'),
      //     img4:require('@/assets/imgs/3_4.jpg'),
      //     img5:require('@/assets/imgs/3_5.jpg'),
      //     name:'BAMBOO刘筱'
      //   },
      //   {
      //     img1:require('@/assets/imgs/4_1.jpg'),
      //     img2:require('@/assets/imgs/4_2.jpg'),
      //     img3:require('@/assets/imgs/4_3.jpg'),
      //     img4:require('@/assets/imgs/4_4.jpg'),
      //     img5:require('@/assets/imgs/4_5.jpg'),
      //     name:'IAM_瑶瑶'
      //   },
      //   {
      //     img1:require('@/assets/imgs/5_1.jpg'),
      //     img2:require('@/assets/imgs/5_2.jpg'),
      //     img3:require('@/assets/imgs/5_3.jpg'),
      //     img4:require('@/assets/imgs/5_4.jpg'),
      //     img5:require('@/assets/imgs/5_5.jpg'),
      //     name:'SUS十四十四'
      //   }
      // ]
    }
  },
  methods:{
    showDetail(index){
      console.log(index)
      this.$router.push(`/detail/user${index}`)
    }
  },
  computed:{
    users(){
      return [
        {
          img1:require('@/assets/imgs/1_1.jpg'),
          img2:require('@/assets/imgs/1_2.jpg'),
          img3:require('@/assets/imgs/1_3.jpg'),
          img4:require('@/assets/imgs/1_4.jpg'),
          img5:require('@/assets/imgs/1_5.jpg'),
          name:this.$t('m.photoName1')
        },
        {
          img1:require('@/assets/imgs/2_1.jpg'),
          img2:require('@/assets/imgs/2_2.jpg'),
          img3:require('@/assets/imgs/2_3.jpg'),
          img4:require('@/assets/imgs/2_4.jpg'),
          img5:require('@/assets/imgs/2_5.jpg'),
          name:this.$t('m.photoName2')
        },
        {
          img1:require('@/assets/imgs/3_1.jpg'),
          img2:require('@/assets/imgs/3_2.jpg'),
          img3:require('@/assets/imgs/3_3.jpg'),
          img4:require('@/assets/imgs/3_4.jpg'),
          img5:require('@/assets/imgs/3_5.jpg'),
          name:this.$t('m.photoName3')
        },
        {
          img1:require('@/assets/imgs/4_1.jpg'),
          img2:require('@/assets/imgs/4_2.jpg'),
          img3:require('@/assets/imgs/4_3.jpg'),
          img4:require('@/assets/imgs/4_4.jpg'),
          img5:require('@/assets/imgs/4_5.jpg'),
          name:this.$t('m.photoName4')
        },
        {
          img1:require('@/assets/imgs/5_1.jpg'),
          img2:require('@/assets/imgs/5_2.jpg'),
          img3:require('@/assets/imgs/5_3.jpg'),
          img4:require('@/assets/imgs/5_4.jpg'),
          img5:require('@/assets/imgs/5_5.jpg'),
          name:this.$t('m.photoName5')
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .daren{
    display:flex;
    flex-direction: column;
    width:100%;
    .item{
      flex:1;
      width:640px;
      box-sizing:border-box;
      margin-left:50%;
      transform: translate(-50%);
      padding:60px 30px 60px 50px;
      border-bottom:1px solid #000;
      .left{
        display:inline-block;
        width:287px;
        height:211px;
        .img1{
          display:inline-block;
          width:194px;
          height:131px;
        }
        .img2{
          display:inline-block;
          width:88px;
          height:131px;
        }
        .img3{
          display:inline-block;
          width:113px;
          height:76px;
        }
        .img4{
          display:inline-block;
          width:51px;
          height:76px;
        }
      }
      .right{
        display:inline-block;
        margin-left:50px;
        vertical-align: top;
        width:218px;
        height:211px;
        .title{
          margin-top:70px;
          font-size:30px;
          color:#000;
          margin-bottom:20px;
        }
        .btn{
          height:44px;
          line-height: 44px;
          padding:0 15px;
          font-size:20px;
          text-align:center;
          border:2px solid #000;
        }
      }
    }
  }
</style>
