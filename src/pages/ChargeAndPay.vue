<template>
    <div>
        <div class="charge" v-if="flag=='pay'">
          <el-row>
            <el-col :span="12" style="">
              <label style="font-size: large; padding-top: 8px;margin-left: 30px;">本次充值</label>
            </el-col>
            <el-col :span="12">
              <label >￥</label>
              <el-input v-model="charge_money" placeholder="请输入内容" style="width: 84%"></el-input>
            </el-col>
          </el-row>
          <el-button type="primary" style="width: 92%;margin:20px;    background: #32c5d2;" @click="centerDialogVisible = true">立即充值</el-button>
          <div style="margin: 18px 30px;">
            <h3>温馨提示</h3>
            <h4>1.账户余额仅能提现至账号发票抬头信息/账户实名认证信息同名的银行账户/微信钱包，请您谨慎选择充值/付款账号。</h4>
            <h4>2.3个月内通过微信/网银方式充值的款项只能原路提现。</h4>
            <h4>3.</h4>
            <h4>4.</h4>
          </div>
        </div>
      <div class="pay" style="margin: 20px;" v-if="flag=='charge'">
        <div class="icon" style="text-align: center;">
          <img src="../assets/images/exclamation.svg" style="    height: 60px;">
        </div>
        <div class="" style="margin-left:55%;margin-top: 10px;padding-top: 10px;">
          已托管：￥1234567
        </div>
        <el-row style="">
          <el-col :span="12" style="">
            <label style="font-size: large; padding-top: 8px;margin-left: 30px;" >支付金额</label>
          </el-col>
          <el-col :span="12">
            <label >￥</label>
            <el-input v-model="charge_money" placeholder="请输入内容" style="width: 84%"></el-input>
          </el-col>
        </el-row>
        <div style="margin-left: 30px; margin-top: 30px;">
          <input type="checkbox" v-model="check" value="checked">
          <label style="font-size: 17px;">(勾选确认已读)</label>
        </div>
        <div style="margin: 18px 30px;">
          <h4><label>警告</label>：支付确认后，款项将在24小时内</h4>
          <h4>支付给乙方。请务必审慎验收相应成果</h4>
          <h4>后操作，以避免不必要的争议和损失。</h4>

        </div>
        <el-button type="primary" style="width: 92%;margin:20px;background: #32c5d2;" @click="checkedAndPay">确认支付</el-button>

      </div>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="86%"
        top="32vh"
        center>
        <el-row>
          <el-col :span="8">
            <label>请输入支付密码</label>

          </el-col>
          <el-col :span="16">
            <input style="margin-left: 21px;width: 80%"  type="password" v-model="psw">

          </el-col>
        </el-row>
        <div style="margin-top:10px;">
          <a href="">忘记密码？</a>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-chalk/index.css'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import ElementUI from 'element-ui'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  Vue.use(ElementUI);
    export default {
      components: {
        ElCol,
        ElRow},
      name: '',
      data: function () {
        return {
          charge_money: 0,
          flag: this.$route.query.flag,
          centerDialogVisible: false,
          psw: '',
          check: ''
        }
      },
      methods: {
        checkedAndPay(){
          if(this.check){
            this. centerDialogVisible = true;
          }else {
            alert('请勾选确认')
          }

        }
      }
    }
</script>

<style>
  .charge {
    margin: 20px;
  }
  body {
    color: gray;
    background: whitesmoke;
    position: relative;
    z-index: -1;
    font-size: 15px;
  }
</style>
