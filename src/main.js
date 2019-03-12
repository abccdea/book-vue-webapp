import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLayload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(VueLayload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552332253840&di=c938c7ccb7edcb183b2e3ec6306fd190&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F45%2F24%2F16pic_4524591_b.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552927002&di=0a3ef9eda1a792c1210a04ac1d33637f&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180204%2F733abe5765e743c9b2f0b6a3153c71d1.gif',
  attempt: 1
})

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
