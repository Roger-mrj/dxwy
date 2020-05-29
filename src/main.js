import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios({
  url: 'https://yapi.tianyunperfect.cn/mock/71/abcd/a',
  params: {
    type: "zhongguo"
  },
  method: 'get'
}).then(res => {
  console.log(res);
});
axios.get('https://yapi.tianyunperfect.cn/mock/71/abcd/a',
    {
      params: {
        type: 'zhongguo'
      }
    }).then(res => console.log(res));

axios.all([axios({url:'https://yapi.tianyunperfect.cn/mock/71/a'}),
  axios({url:'https://yapi.tianyunperfect.cn/mock/71/abcd/a?type=zhongguo'})]
).then(res => console.log(res))
