<template>
  <div id="app">
    <div class="header">
      <img src="@/assets/home.png" alt="" class="header-home" @click="toHome()">
      <img src="@/assets/logo.png" alt="" class="header-logo">
      <div class="language">
        <label for="select-text" class="lang-label">{{$t('m.lang')}}</label>
        <select v-model="myvalue" name="select-text" id="select-text" class="lang-select"  @click="changeLang()">
          <option value="zh">中文</option>
          <option value="kr">한국어</option>
          <option value="en">English</option>
        </select>
        <img src="@/assets/select.png" alt="" class="lang-icon">
      </div>
    </div>
    <div class="tab">
      <div class="tab1" @click="showPerfect">{{$t('m.tab1')}}
        <div class="menu" v-show="perfectFlag" >
          <router-link v-for="(data,index) in cityData" :key="index" :to="`/perfect/${data.city}`" class="menu1">{{data.text}}</router-link>
          <!-- <router-link :to="{name:'perfect',params:{city:'soul'}}" class="menu1">首尔</router-link>
          <router-link :to="{name:'perfect',params:{city:'london'}}" class="menu1">伦敦</router-link> -->
        </div>
      </div>
      <div class="tab1" @click="showCityFlag">{{$t('m.tab2')}}
        <div class="menu0" v-show="cityFlag" >
          <router-link v-for="(data,index) in cityData" :key="'my'+index" :to="`/manyou/${data.city}`" class="menu2">{{data.text}}</router-link>
        </div>
      </div>
      <div  class="tab1" @click="closeOther()">
        <router-link to="/darenlueying" class="addlink">{{$t('m.tab3')}}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      myvalue:'',
      langen:'en',
      langzh:'zh',
      langkr:'kr',
      perfectFlag:false,
      cityFlag:false,
    }
  },
  computed:{
    cityData(){
      return [
        {
          id:1,
          city:'newyork',
          text:this.$t('m.newyork')
        },
        {
          id:2,
          city:'seoul',
          text:this.$t('m.seoul')
        },{
          id:3,
          city:'london',
          text:this.$t('m.london')
        }
      ]
    }
  },
  methods:{
    toHome(){
      this.$router.push('/')
      this.perfectFlag=false
      this.cityFlag=false
    },
    showPerfect(){
      this.perfectFlag=!this.perfectFlag
      this.cityFlag=false
    },
    showCityFlag(){
      this.cityFlag=!this.cityFlag
      this.perfectFlag=false
    },
    closeOther(){
      this.perfectFlag=false
      this.cityFlag=false
    },
    changeLang(){
      if ( this.myvalue == 'zh' ) {
          this.$i18n.locale = this.langzh
          localStorage.lang = this.langzh
       }else if( this.myvalue === 'kr' ){
          this.$i18n.locale = this.langkr
          localStorage.lang = this.langkr
       }else if( this.myvalue === 'en' ){
          this.$i18n.locale = this.langen
          localStorage.lang = this.langen
       }
    }
  }
}
</script>
<style lang="scss">
  html,body{
    margin:0;
    padding:0;
  }
</style>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:750px;
  .header{
    background: #000;
    height:68px;
    width:100%;
    position:relative;
    .header-home{
      width:40px;
      height:32px;
      display:inline-block;
      position:absolute;
      left:0;
      top:0;
      padding:18px 40px;
    }
    .header-logo{
      display:inline-block;
      width:242px;
      height:28px;
      position:absolute;
      top:50%;
      left:50%;
      margin-left:-121px;
      margin-top:-14px;
    }
    .language{
      display:inline-block;
      position:absolute;
      right:0;
      color:#fff;
      line-height:68px;
      padding:0 40px;
      font-size:20px;
      font-weight:700;
      .lang-label{
        position:absolute;
        right:60px;
        font-size:20px;
      }
      .lang-select{
        opacity:0;
        font-size:20px;
        margin-right:-20px;
        height:68px;
      }
      .lang-icon{
        display:inline-block;
        vertical-align: top;
        margin-top:30px;
      }
    }
  }
  .tab{
    width:100%;
    height:84px;
    background: #000;
    display:flex;
    .tab1{
      flex:1;
      line-height: 84px;
      position:relative;
      color:#fff;
      font-size:22px;
      text-align:center;
      text-decoration: none;
      /* border-right:1px solid #313131; */
      .menu{
        position:absolute;
        width:250px;
        height:180px;
        top:80px;
        left:0;
        z-index:999;
        background: #000;
        color:#fff;
        .menu1{
          display:block;
          height:60px;
          line-height: 60px;
          color:#fff;
          text-decoration: none;
        }
      }
      .menu0{
        position:absolute;
        width:250px;
        height:180px;
        top:80px;
        left:50%;
        margin-left:-125px;
        z-index:999;
        background: #000;
        color:#fff;
        .menu2{
          display:block;
          height:60px;
          line-height: 60px;
          color:#fff;
          text-decoration: none;
        }
      }
      .addlink{
        color:white;
        font-size:22px;
        text-decoration: none;
      }
    }
  }
}
</style>
