<template>

  <div class="main-contain">
    <div class="head-cont" >
      <span class="title">我的</span>
      <i class="el-icon-right more"></i>
    </div>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in imgArr" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <div>
        <i class="el-icon-user"></i>
        <p>了解我们</p>
      </div>
      <div>
        <i class="el-icon-coordinate"></i>
        <p>店铺位置</p>
      </div>
      <div>
        <i class="el-icon-date"></i>
        <p>操作日志</p>
      </div>
      <div>
        <i class="el-icon-pie-chart"></i>
        <p>剩余时间</p>
      </div>
      <div>
        <i class="el-icon-chat-line-round
"></i>
        <p>less专员</p>
      </div>
      <div>
        <i class="el-icon-film"></i>
        <p>版本信息</p>
      </div>
      <div>
        <i class="
el-icon-headset"></i>
        <p>客服</p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "CustMsg",
      data(){
          return{
            imgArr:[
              "../../static/images/1.jpg",
              "../../static/images/2.jpg",
              "../../static/images/3.jpg",
              "../../static/images/4.jpg"
            ]
          }
      }
    }
</script>

<style scoped>
  .more{
    margin-top: -4px;
  }
  img{
    width:100%;
  }
  .content{
    width:98%;
    /*background-color: white;*/
    margin:0 auto;
  }
  .main-contain{
    background-color: #fbf9f9ee;
  }
  .content div{
    width: 133px;
    height: 140px;
    float: left;
    margin: 1px;
    background-color: white;
    text-align: center;
    line-height: 36px;
    padding: 20px;
    box-sizing: border-box;
  }
  .content i{
    font-size: 45px;
  }
</style>
