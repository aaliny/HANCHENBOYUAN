<template>
    <div class="main-contain">
      <p class="own-title">精细化管理</p>
      <div class="item-cont">
        <p class="item" @click="backBusi('StaticMsg')"><span class="target1-item">人员(请点击这里)</span><i class="el-icon-user target1-item"></i></p>
        <p class="item"><span class="target2-item">财务</span><i class="el-icon-goods target2-item"></i></p>
        <p class="item"><span class="target3-item">商品</span><i class="el-icon-help target3-item"></i></p>
        <p class="item"><span class="target4-item">营销</span><i class="el-icon-folder-remove target4-item"></i></p>
        <p class="item"><span class="target5-item">客户</span><i class="el-icon-coordinate target5-item"></i></p>
      </div>
      <div class="back-icon">
        <i class="el-icon-setting"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ManageBusi",
      methods:{
        backBusi(data){
          this.$emit("backBusi",data)
        }
      }
    }
</script>

<style scoped>
  .main-contain{
    background-color: rgb(43,47,67);
    color:white;
    overflow: hidden;
  }
  .back-icon{
    color: white;
    font-size: 215px;
    position: absolute;
    top: 50%;
    left: 53%;
    margin-top: -150px;
  }
  .own-title{
    margin-top: 50px;
    text-align: center;
    font-size: 21px;
  }
  .item span{
    font-size: 20px;
  }
  .item i{
    font-size: 30px;
  }
  .item{
    position: absolute;
    transform-origin: 100% 225px;
  }
  .item:nth-of-type(1){
    transform: rotate(-20deg);
  }
  .item span,.item i{
    display: inline-block;
  }
  .target1-item{
    transform: rotate(20deg);
  }
  .target1-item:nth-of-type(1){
    top: -41px;
    left: -11px;
  }
  .target2-item:nth-of-type(1){
    top: -42px;
    left: 0px;
  }
  .target3-item:nth-of-type(1){
    top: -55px;
    left: 31px;
  }

  .target4-item:nth-of-type(1){
    top: -48px;
    left: 61px;
  }

  .target5-item:nth-of-type(1){

    top: -16px;
    left: 78px
  }
  .target2-item{
    transform: rotate(50deg);
  }
  .target3-item{
    transform: rotate(87deg);
  }
  .target4-item{
    transform: rotate(120deg);
  }
  .target5-item{
    transform: rotate(162deg);
  }
  .item:nth-of-type(2){
    transform: rotate(-50deg);
  }
  .item:nth-of-type(3){
    transform: rotate(-87deg);
  }
  .item:nth-of-type(4){
    transform: rotate(-120deg);
  }
  .item:nth-of-type(5){
    transform: rotate(-162deg);
  }
  .item-cont{
    position: relative;
    left: 66%;
    top: 9%;
  }
  .item-cont span{
    position: relative;
  }

</style>
