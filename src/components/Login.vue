<template>
  <div class="content main-contain">
    <div class="busi-title mgb-50 ">
      <div>
        <img src="../../static/images/logo.png" alt="">
      </div>
      <div>汉辰博远</div>
      <div class="name">HAN CHEN BO YUAN</div>
    </div>
    <div class="login-method mgb-50">
      <div :class="{'active-color':isTel}" class="method">手机登录 <div v-show="isTel" class="under under-left"></div></div>
      <div :class="{'active-color':!isTel}" class="method">企业登录 <div v-show="!isTel" class="under under-right"></div></div>
    </div>
    <div class="input-contain mgb-50">
      <div class="mgb-50">
        <div class="img-cont"><img src="../../static/images/tel-logo.png" alt=""></div>
        <input class="" type="text" placeholder="请输入手机号码">
      </div>
      <div class="mgb-50 relati">
        <div class="img-cont"><img src="../../static/images/msg.png" alt=""></div>
        <input class="" type="text" placeholder="请输入密码">
        <div class="test-time">几秒后重发</div>
      </div>
    </div>
    <div class="login-button " @click="loginEvent">
      登录
    </div>
    <div class="quick-expri">
      快速体验
    </div>

  </div>

</template>

<script>
  export default {
        name: "Login",
      data(){
          return{
            isTel:true
          }
      },
    methods:{
      loginEvent(){
        let path=`/custIndex/111`  ;
        this.$router.push(path)
      }
    }
    }
</script>

<style scoped>
  .busi-title .name{
    font-size: 12px;
  }
  .content{
    color: rgb(122,135,162);
    background-color:rgb(43,47,67) ;
    font-size: 16px;
  }
  .busi-title{
    padding-top: 120px;
  }
  .busi-title div{
    text-align: center;
    font-size: 35px;
    font-family: cursive;
  }
  .login-method{
    width:100%;
    font-size: 0;
  }
  .login-method .method{
    width: 50%;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
  }
  .login-method .method:nth-child(1){
    border-right: 1px solid rgb(43,188,190);
    padding: 0 40px 0 20px;
    text-align: right;
  }
  .login-method .method:nth-child(2){
    border-right: 1px solid rgb(43,188,190);
    padding: 0 20px 0 40px;
    text-align: left;
  }
  .input-contain{
    text-align: center;
  }
  .input-contain input{
    height: 32px;
    width: 60%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgb(43,188,190);
    font-size: 16px;
  }
  .login-button{
    width: 70%;
    height: 47px;
    font-size: 20px;
    background-color: rgb(43,180,190);
    border-radius: 20px;
    margin: 0  auto 30px;
    text-align: center;
    color: #fff;
    line-height: 47px;

  }
  .quick-expri{
    font-size: 12px;
    color:rgb(122,135,162);
    text-align: center;
  }
  .img-cont{
  display: inline-block;
  width: 42px;
  position: relative;
  }
  .img-cont img{
    position: absolute;
    top: -16px;
    left: 2px;
  }
  .under{
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: rgb(43,188,190);
  }
  .under-left{
    left: 109px;
    top: 26px;
  }
  .under-right{
    top: 26px;
    left: 46px;
  }
  .active-color{
    color: rgb(43,188,190);
  }
  .test-time{
    color: rgb(122,135,162);
    position: absolute;
    font-size: 12px;
    top: 6px;
    right: 68px;
    width: 82px;
    height: 20px;
    border-radius: 8px;
    border: 1px solid rgb(122,135,162);
  }

</style>
