<template>
    <div>
      <router-link to="/">to invitebidlist</router-link>
      <button @click="show">click me</button>
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
          }
      }
    }
</script>
