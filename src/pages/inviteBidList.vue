<template>
    <div>
      <div style="margin:5px;">
        <el-input placeholder="请输入关键字" v-model="input" class="input-with-select">
          <template slot="prepend">公告名称</template>
          <el-button slot="append" icon="el-icon-search" @click="advanced_search"></el-button>
        </el-input>
      </div>
      <div id="content" >
        <el-card class="box-card" v-for="item in cardList" :key="item.id" v-cloak>
          <div  class="text item">
            <a  style="color: black"> <h5 style="font-size: 14px;"> {{item.name}}</h5></a>
            <h6 class="pull-right" style="color: grey">所属地区 <span style="color:#337ab7">{{item.zone}}</span>
            </h6>
            <div class="clearfix"></div>
            <h6 class="pull-right" style="color: grey">发布时间：{{item.time}}
              <span >距离开标：<span style="color: #ff0000;">{{item.remaining_time}}</span><span v-if="(typeof item.remaining_time == 'number')">天</span></span>
            </h6>
          </div>
        </el-card>
        <div v-if="cardList.length==0" class="weui-loadmore weui-loadmore_line" style="margin-top:80px;"><span class="weui-loadmore__tips" style="background-color: rgb(245, 245, 245)">暂无数据</span> </div>

      </div>
      <router-link to="/another"><el-button type="primary" class="pull-right">to invitebidlist</el-button></router-link>
      <a @click="goto">to invitebidlist by a tag</a>
      <el-button @click="setssss">click me</el-button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-chalk/index.css'
  import {Input,Card, Button} from 'element-ui'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import myImg from '@/components/img'
  Vue.use(Card);
  Vue.use(Button);
  Vue.use(Input);
    export default {
        name: '',
      data: function () {
        return {
          input: '',
          date1: '',
          date2: '',
          date11: '',
          date22:  '',
          province: '',
          cardList: [],
          offset: 0,
          idDone: false,
        }
      },
      components: { myImg },
      methods: {
          setssss(){
            localStorage.setItem('login',true);
            console.log('set ok', localStorage.getItem('login'))
            //localStorage.removeItem('login')
          },
        searchDoc(){
//                this.date1='';
//                this.date11='';
//                this.date2='';
//                this.date22='';
//                this.province='';
          if(this.date1 != ''){
            var date1 = new Date(this.date1);
            month = date1.getMonth() + 1
            this.date11 = date1.getFullYear() + '-' + month + '-' + date1.getDate();
          }
          if(this.date2 != ''){
            var date2 = new Date(this.date2);
            month = this.date2.getMonth() + 1;
            this.date22 = date2.getFullYear() + '-' + month + '-' + date2.getDate();
          }
          this.offset = 0;
          var _this = this;
          $.ajax({
            type: 'get',
            url: '<%=path%>/m/selectInviteBidList',
            data: {
              doc_name: _this.input,
              offset: 0
            },
            dataType: 'json',
            success: function (result) {
              _this.offset += 20;
              _this.cardList = result.selectInviteBidList;
              console.log(result.selectInviteBidList,_this.input)
              _this.isDone = true;
            }
          });
        },
        advanced_search() {
          //this.input='';
          this.offset = 0;
          var _this = this;
          var month=-1;
          if(this.date1 != ''){
            var date1 = new Date(this.date1);
            month = date1.getMonth() + 1
            this.date11 = date1.getFullYear() + '-' + month + '-' + date1.getDate();
          }
          if(this.date2 != ''){
            var date2 = new Date(this.date2);
            month = this.date2.getMonth() + 1;
            this.date22 = date2.getFullYear() + '-' + month + '-' + date2.getDate();
          }

          this.province = $('#requireProvince').val();
          $.ajax({
            type: 'get',
            url: '<%=path%>/m/selectInviteBidList',
            data: {
              date1: _this.date11,
              date2: _this.date22,
              province: _this.province,
              offset: 0,
              doc_name: _this.input
            },
            dataType: 'json',
            success: function (result) {
              _this.offset += 20;
              _this.cardList = result.selectInviteBidList;
              // console.log(app.cardList)
              _this.isDone = true;
            }
          });
          //console.log(this.date11, this.date22,this.province)
        },
        goto(){

          var { href } = this.$router.resolve({name:'another'});
          console.log(this.$router.resolve({name:'another'}),href)
          window.open(href)
        }
      },
      created: function () {
        var _this = this;
        _this.cardList = [
          {
            name:'寿光市圣城街道肖楼片区、弥水小镇片区（社区）棚户区改造项目1#、W1#楼，2#楼，3#楼，8#楼，9#、W2#、W3#楼，10#、W4#、W5#楼施工公开招标公告',
            zone: '山东',
            time: '2019-04-30',
            remaining_time: '2019-06-04 09:00:00'
          }  ,        {
            name:'寿光市圣城街道肖楼片区、弥水小镇片区（社区）棚户区改造项目1#、W1#楼，2#楼，3#楼，8#楼，9#、W2#、W3#楼，10#、W4#、W5#楼施工公开招标公告',
            zone: '山东',
            time: '2019-04-30',
            remaining_time: '2019-06-04 09:00:00'
          }
        ]
//        $.ajax({
//          type: 'get',
//          url: '@/assets/js',
//          data: {
//            offset: 0
//          },
//          dataType: 'json',
//
//          success: function (result) {
//            _this.offset += 20;
//           // _this.cardList = result.selectInviteBidList;
//            _this.cardList = result;
//            //console.log(app.cardList)
//            _this.isDone = true;
//          }
//        })
      },
      mounted() {
        var _this = this;
        window.onscroll = function () {
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          var screenHeight = window.screen.availHeight;

          if(screenHeight+scrollTop >= $('#content').height()){
            if(_this.isDone){
              _this.isDone = false;
              $.ajax({
                type: 'get',
                url: '<%=path%>/m/selectInviteBidList',
                data: {
                  offset: _this.offset,
                  date1: _this.date11,
                  date2: _this.date22,
                  province: _this.province,
                  doc_name: _this.input
                },
                dataType: 'json',

                success: function (result) {
                  app.offset += 20;
                  app.cardList = app.cardList.concat(result.selectInviteBidList);
                  //console.log(result.selectInviteBidList)
                  _this.isDone = true;
                }
              })
            }

          }
        }

      }
    }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 414px;
  }
  body {
    color: grey;
    background:whitesmoke;
  }
  .el-date-editor{
    width: auto !important;
  }
</style>
