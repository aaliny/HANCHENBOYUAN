<template>
  <div class="main-contain" @touchstart=touchEvent($event)>
    <div class="head-cont" >
      <span class="title">统计</span>
      <i class="el-icon-more more" @touchstart.stop="isHover=!isHover" ></i>
      <div v-if="isHover" class="hover">
        <div class="triangle"></div>
        <p>  <i class="el-icon-s-order "></i><span class="mgl-15">客户统计</span></p>
        <p> <i class="el-icon-s-custom "></i><span class="mgl-15">绩效统计</span></p>
        <p> <i class="el-icon-s-data "></i><span class="mgl-15">考勤统计</span></p>
        <p> <i class="el-icon-s-claim "></i><span class="mgl-15">客户统计</span></p>
      </div>
    </div>
    <div class="main-cont">
      <div class="date-pick">
        <el-date-picker
          v-model="value1"
          type="date"
          size="mini"
          placeholder="选择日期">
        </el-date-picker>至
        <el-date-picker
          v-model="value1"
          type="date"
          size="mini"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div>
        <div class="detail-cont">
          <!--<div class="back-cont"></div>-->
          <p>出勤</p>
          <p>0.00</p>
          <div class="static-count">
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
        <div class="detail-cont">
          <!--<div class="back-cont"></div>-->
          <p>出勤</p>
          <p>0.00</p>
          <div class="static-count">
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
        <div class="detail-cont">
          <!--<div class="back-cont"></div>-->
          <p>出勤</p>
          <p>0.00</p>
          <div class="static-count">
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
            <div class="every-count">
              <p>今日迟到(次)</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "StaticMsg",
      data(){
        return{
          value1:"",
          isHover:false
        }
      },
      components:{
      },
      methods:{
        touchEvent(e){
          console.log(e);
            this.isHover=false;
        }
      }
    }
</script>

<style scoped>
  .main-contain{
    background-color: #fbf9f9ee;
  }
  .head-cont i{
    color:white;
  }
  .main-cont{
    height: 81%;
    width:100%;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 136px;
  }
  .detail-cont{
    height: 130px;
    border-radius: 8px;
    margin: 0 10px 15px;
    padding: 16px;
    line-height: 28px;
    background-color: white;

  }
  .date-pick{
    text-align: right;
    margin:10px;
  }
  .back-cont{
    width:80%;
    height: 85px;
  }
  .static-count{
    width:98%;
    margin:0px auto;
    padding:6px;

  }

  .detail-cont:nth-of-type(1) .static-count{
    background-color: #ffefd7;
  }
  .detail-cont:nth-of-type(2) .static-count{
    background-color: #f0f8f9;
  }
  .detail-cont:nth-of-type(3) .static-count{
    background-color: #f7ebe7;
  }
  .every-count{
    display: inline-block;
    width:32%;
  }
  .detail-cont:nth-of-type(1){
    border: 1px solid orange;
  }
  .detail-cont:nth-of-type(2){
    border: 1px solid blue;
  }
  .detail-cont:nth-of-type(3){
    border: 1px solid red;
  }
  .every-count p{
    text-align: center;
  }
  .hover{
    width: 132px;
    background-color: white;
    position: absolute;
    top: 88px;
    right: 5px;
    z-index: 100;
    border-radius: 8px;
  }
  .triangle{position: absolute;
    top: -31px;
    right: 9px;
    border-color: transparent;
    border-width: 14px;
    border-style: solid;
    border-bottom-color: white;
    border-bottom-width: 17px;
  }
  .hover p{
    margin: 18px;
    font-family: serif;
    font-size: 16px;
  }
  .hover i{
    color: #17e7ff;
  }

</style>
