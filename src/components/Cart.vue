<template>
  <div>
    <Header>购物车</Header>
    <ul class="content">
      <li v-for="(item, index) in cartList" :key="index">
        <img :src="item.bookCover">
        <h3>{{item.bookName}}</h3>
        <button>-</button>{{item.bookCount}}<button>+</button>
        <p>小计 {{item.bookPrice * item.bookCount}}</p>
        <button>删除</button>
      </li>
      <li>共{{count}}本</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Header from '../base/Header.vue'

export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {
  },
  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['count'])
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
