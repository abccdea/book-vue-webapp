<template>
  <div class="detail">
    <Header :back="true">详情</Header>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <button @click="update">确认修改</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '../base/Header.vue'
import {findOneBook, updateBook} from '../api'

export default {
  name: 'Detail',
  data () {
    return {
      book: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async update () {
      await updateBook(this.bid, this.book)
      this.$router.push('/list')
    },
    async getData (id) {
      this.book = await findOneBook(this.bid)
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list')
    }
  },
  computed: {
    bid () {
      return this.$route.params.bid
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
  ul {
    margin: 50px 20px 0 20px;
  }
  li {
  label {
    display: block;
    font-size: 25px;
  }
  input {
    margin: 10px 0;
    height: 25px;
    width: 100%;
  }
  button {
    display: block;
    width: 80px;
    height: 35px;
    background: #2aabd2;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline: none;
  }
  }
</style>
