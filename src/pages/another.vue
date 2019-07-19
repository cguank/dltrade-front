<template>
    <div>
      <router-link to="/">to invitebidlist</router-link>
      <button @click="show">click me</button>
      <button @click="test">click test</button>
      <button @click="btnclick">click aaaa</button>
      <div class="testStyle">
        <h3>lsjfoisjfiosdjfosdf</h3>
      </div>
    </div>
</template>

<script>
  import  '@/assets/js/mock'
    export default {
        name: '',
      methods: {
          show(){
            console.log('111')

//            this.$getData('selectPictureList',{offset: 0,flag:'woshinibaba'}).then(res => console.log(res.data))
//              .catch(err => console.log(err));
//            this.$getData('mock',{offset: 0,flag:'woshinibaba'}).then(res => console.log(res.data))
//              .catch(err => console.log(err));
//          }
          this.$getData('mock',{offset: 0,flag:'woshinibaba'}).then(res => console.log(res.data.object))
              .catch(err => console.log(err));

          this.$getData('sabcd',{offset: 0,flag:'woshinibaba'}).then(res => console.log(res.data.flag))
              .catch(err => console.log(err));
          },
        test(){
            this.$getData('testBackEnd',{}).then(res => console.log(res.data)).catch(err => console.log(err));
        },
        btnclick(){
          console.log('nissss');
        }
      }
    }
</script>

<style>
  .testStyle{
    color: yellow
  }
</style>
