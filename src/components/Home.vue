<template>
  <div>
    <Header :back="false">首页</Header>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot, index) in hotBooks" :key="index">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '../base/Header.vue'
import Swiper from '../base/Swiper.vue'
import Loading from '../base/Loading.vue'
import {getAll} from '../api'

export default {
  name: 'Home',
  created () {
    this.getData()
  },
  data () {
    return {
      sliders: [],
      hotBooks: [],
      loading: true
    }
  },
  methods: {
    async getData () {
      let [sliders, hotBooks] = await getAll()
      this.sliders = sliders
      this.hotBooks = hotBooks
      this.loading = false
    }
  },
  components: {
    Header,
    Swiper,
    Loading
  }
}
</script>

<style scoped lang="less">
  h3 {
    color: #000;
    padding: 5px 0;
  }

  .container {
    width: 95%;
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    justify-content: space-between;
    border-top: 1px solid #f1f1f1;
    li {
      width: 50%;
      text-align: center;
      /*margin: 5px 0;*/
      padding: 10px 0;
      border-bottom: 1px solid #f1f1f1;
      img {
        width: 90%
      }
    }
  }
</style>
