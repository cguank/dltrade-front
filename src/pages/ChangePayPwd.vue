<template>
    <div>
      <div>
        <div class="header">
          <h4 style="text-align: center">修改支付密码</h4>
        </div>
        <div class="content">
          <el-input placeholder="请输入内容" v-model="pwd1">
            <template slot="prepend">输入密码</template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="pwd2">
            <template slot="prepend">确认密码</template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="pwd2">
            <template slot="prepend">验证码</template>
            <template slot="append"><el-button type="text">获取手机验证码</el-button></template>
          </el-input>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
      data: function () {
          return {
            pwd1: '',
            pwd2: ''
          }
      }
    }
</script>
