<template>
  <div>
    <Header :back="false">首页</Header>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul>
          <li v-for="hot in hotBooks">
            <img :src="hot.bookCover">
            <b>{{hot.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import Swiper from '../base/Swiper.vue'
  import {getSliders, getHotBook} from '../api'

  export default {
    name: 'Home',
    created () {
      this.getSlider()
      this.getHot()
    },
    data () {
      return {
        sliders: [],
        hotBooks: []
      }
    },
    methods: {
      async getSlider () {
        this.sliders = await getSliders()
      },
      async getHot () {
        this.hotBooks = await getHotBook()
      }
    },
    components: {
      Header,
      Swiper
    }
  }
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img {
        width: 100%
      }
    }
  }
</style>
