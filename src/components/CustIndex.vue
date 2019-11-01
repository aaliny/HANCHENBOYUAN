<template>
  <div class="main-contain">
    <div class="up-cont">
      <component :is="busiFlag" @backBusi="backBusi"></component>
    </div>
    <div class="foot-cont">
      <div class="cycle"></div>
      <div class="add"><i class="el-icon-circle-plus"></i></div>
      <div class="item" @click="busiEvent('ManageBusi')"><i class="el-icon-document-copy"></i><p>精细化</p></div>
      <div class="item" @click="busiEvent('CustMsg')"><i class="el-icon-document-copy"></i><p>我的</p></div>
    </div>

  </div>
</template>

<script>
  import StaticMsg from './StaticMsg'
  import ManageBusi from './ManageBusi'
  import CustMsg from './CustMsg'
    export default {
        name: "CustIndex",
      data(){
          return{
            busiFlag:'ManageBusi'
          }
      },
      components:{
        StaticMsg,
        ManageBusi,
        CustMsg
      },
      methods:{
        busiEvent(name){
          this.busiFlag=name
        },
        backBusi(data){
          this.busiFlag=data
        }
      }
    }
</script>

<style scoped>
  .cust-index{
    font-size: 16px !important;
  }
  .up-cont{
    width: 100%;
    height:93%;
  }
  .foot-cont{
    height: 7%;
    width:100%;
    font-size: 16px;
    display: flex;
    justify-content: space-around;

  }
  .item{
    display: inline-block;
    text-align: center;

  }
  .cycle{
    position: absolute;
    width: 63px;
    height: 63px;
    border-radius: 50%;
    bottom: 13px;
    background-color: #fff;
  }
  .add{
    position: absolute;
    bottom: 4px;
    color: rgb(40, 69, 185);
    font-size: 60px;
  }
</style>
