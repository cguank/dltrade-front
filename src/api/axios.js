import axios from 'axios';
import Vue from 'vue'
import api from "./api"
//axios.defaults.baseURL = "http://nannyapi.xiaoyujia.com";
// axios.defaults.headers.common['Authorization'] = '111';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.timeout = 20000;

// // 添加请求拦截器(axios请求前)
// axios.interceptors.request.use(config => {
//   // 正式
//   if(utils.getLocalStorage("userInfo") && JSON.parse(utils.getLocalStorage("userInfo")).token){
//     let token = JSON.parse(utils.getLocalStorage("userInfo")).token;
//     config.headers['token'] = token;
//   }
//
//   // let token = JSON.parse(utils.getLocalStorage("userInfo")).token;
//   // config.headers['token'] = "979d340f4ae04cd59bd0679443242d0f" //测试
//   return config;
// }, error => {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });


// 添加响应拦截器(axios请求后)
// axios.interceptors.response.use(response => {
//   // 对响应数据做点什么
//   // if(response.data.code == 500){
//
//   // }
//   //   console.log(response)
//   return response.data;
// }, error => {
//
//   console.log(error)
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });
//
// axios.interceptors.request.use(function (config) {
//   var freeUrl = api.mock;
//   if(config.url != freeUrl){
//     alert('no')
//     return;
//   }
//   console.log(config);
//   return config;
// })


const postData = (url, data, config = {}) => {
  // return axios.post(api[url], qs.stringify(data));
  return axios.post(api[url], data,config);
}

const getData = (url, params) => {
  return axios.get(api[url], {
    params
  });
}

Vue.prototype.$postData = postData;
Vue.prototype.$getData = getData;

export default {
  postData,getData
};
