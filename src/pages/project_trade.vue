<template>
    <div>
      <div class="header">
        <el-row style="font-size: 15px;">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-col :span="8">
              <div class="grid-content border">
                <el-menu-item index="1">往来资金</el-menu-item>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content border">
                <el-menu-item index="2">条件成果</el-menu-item>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <el-menu-item index="3">相互评价</el-menu-item>
              </div>
            </el-col>
          </el-menu>



        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"><p style="font-size: large;text-align: center;padding-top: 10px;margin-bottom: 1px;">{{title}}</p></div>
          </el-col>
        </el-row>

      </div>
      <content1 v-if="cash_show"></content1>
     <!-- <div  class="content">
        <div class="c-top" style="background-color: white">
          <el-row>
            <el-col :span="12" style="text-align: center">
              <label style="font-size: large; padding-top: 8px;">托管资金</label>
            </el-col>
            <el-col :span="12">
              <label >￥</label>
              <el-input name="trust_money" v-model="trust_money" placeholder="请输入内容" style="width: 84%"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px;">
            <el-col :span="8">
              <h4 style="text-align: center">备注：</h4>
            </el-col>
            <el-col :span="16">
              <el-input style="width: 95%"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="msg">
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 17px;">
            <div class="pull-right" style="margin-right: 19px;"><a>金额不足？去充值></a></div>
          </el-row>
          <el-row style="margin-top: 10px;">
            <el-col :span="12" style="text-align: center;background-color: #d4eaff" class="border">
              <el-button type="text">取消</el-button>
            </el-col>
            <el-col :span="12" style="text-align: center; background-color: #32c5d2;">
              <el-button type="text">确认</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="c-middle">
          <div style="margin: 18px 30px;">
            <h3>温馨提示</h3>
            <h4>1.为降低交易风险，建议项目分阶段履约交易</h4>
            <h4>2.</h4>
            <h4>3.</h4>
            <h4>4.</h4>
          </div>
          <div class="line" style="height: 0.5px;border: 0.5px solid #ccc;"></div>
          <div style="text-align: center">
            <el-button type="text">验收通过，前往支付></el-button>
          </div>
          <div class="clearfix"></div>
          <div class="line" style="height: 0.5px;border: 0.5px solid #ccc;"></div>
        </div>
        <div class="c-bottom">
          <div class="col-xs-12"
               style="padding:5px 15px;background: #337ab7;color: white;font-size: 14px;font-weight: bold;"
               align="center">
            交 易 记 录
          </div>
          <div class="col-xs-12"
               style="padding:0; border-bottom: grey 1px solid;background: white;color: black;font-size: 16px;"
               align="center">
            <div class="col-xs-6" style="padding: 2px 5px;border-right: grey 1px solid;font-size: 14px;">
              <span class="fa fa-caret-down pull-left" style="font-size: 18px;"></span><input type="text" id="date" value="全年 全月" style="width: 85%;border: 0;background: white;text-align: center;">

            </div>
            <div class="col-xs-3 one" style="padding: 2px 5px;border-right: grey 1px solid;font-size: 14px;">
              <span class="fa fa-caret-down pull-left" style="font-size: 18px;"></span> <input type="text" id="state" value="全部" style="width: 80%;border: 0;background: white;text-align: center;">
            </div>
            <div class="col-xs-3" style="padding: 2px 5px;font-size: 14px;">
              金额(元)
            </div>
          </div>
          <div class="col-xs-12"
               style="padding:10px 0;font-size: 14px;top:355px;bottom: 0px;overflow-y: auto;background: white;">
            <div id="recording_content" class="col-xs-12" style="padding: 0;">

            </div>

          </div>

        </div>
      </div>-->
    </div>
</template>

<script>
  import Vue from 'vue'
  import Layout from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElRow from "element-ui/packages/row/src/row";
  import 'bootstrap/dist/css/bootstrap.min.css'
  import ElCol from "element-ui/packages/col/src/col";

  import content1 from '@/components/project_trade_content1'
  Vue.use(Layout);
    export default {
      components: {
        ElCol,
        ElRow,
        content1
      },
      name: '',
      data: function () {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          title: '编号：项目名称',
          trust_money: 0,
          msg: '',
          cash_show: true
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          if(key == 1){
            this.cash_show = true

          }else{
            this.cash_show = false;
          }
        }
      }
    }
</script>

<style>

  .el-col {
    border-radius: 0px;
  }

  .grid-content {
    border-radius: 0px;
    min-height: 47px;
    background-color: #fafafa;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-menu-item {
    font-size: 15px;
    text-align: center;
    color: #888;
  }
  body {
    color: gray;
    background: whitesmoke;
    position: relative;
    z-index: -1;
    font-size: 15px;
  }
  .border {
    border-right: 1px solid #ccc;
  }
  .el-button--text {
    color: #606266;
    font-size: 20px;
  }
</style>
