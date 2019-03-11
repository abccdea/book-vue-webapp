<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carousel',
  props: ['swiperSlides'],
  data () {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: {
          el: '.swiper-pagination'
        },
        observeParents: true
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
    height: 250px;
  }
</style>
