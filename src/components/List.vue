<template>
  <div>
    <Header>列表</Header>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name: 'detail', params: {bid: book.bookId}}" :key="index" tag="li">
          <img v-lazy="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <div class="more" @click="more">加载更多</div>
    </div>
  </div>
</template>

<script>
import Header from '../base/Header.vue'
import {pagination, removeBook} from '../api'

export default {
  name: 'List',
  data () {
    return {
      books: [],
      offset: 0,
      hasMore: true,
      isLoading: false
    }
  },
  mounted () {
    let scroll = this.$refs.scroll
    let top = scroll.offsetTop
    let distance = 0
    scroll.addEventListener('touchstart', (e) => {
      if (scroll.scrollTop !== 0 || scroll.offsetTop !== top) return
      let start = e.touches[0].pageY
      let move = (e) => {
        let current = e.touches[0].pageY
        distance = current - start
        if (distance > 0) {
          if (distance <= 50) {
            scroll.style.top = distance + top + 'px'
          } else {
            distance = 50
            scroll.style.top = top + 50 + 'px'
          }
        } else {
          scroll.removeEventListener('touchmove', move)
          scroll.removeEventListener('touchend', end)
        }
      }
      let end = (e) => {
        clearInterval(this.timer1)
        this.timer1 = setInterval(() => {
          if (distance <= 0) {
            clearInterval(this.timer1)
            distance = 0
            scroll.style.top = top + 'px'
            scroll.removeEventListener('touchmove', move)
            scroll.removeEventListener('touchend', end)
            this.books = []
            this.offset = 0
            this.getData()
            return
          }
          distance -= 1
          scroll.style.top = top + distance + 'px'
        }, 1)
      }
      scroll.addEventListener('touchmove', move)
      scroll.addEventListener('touchend', end)
    }, false)
  },
  created () {
    this.getData()
  },
  methods: {
    loadMore () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.getData()
        }
      }, 30)
    },
    more () {
      this.getData()
    },
    async getData () {
      if (this.hasMore && !this.isLoading) {
        this.isLoading = true
        let {hasMore, books} = await pagination(this.offset)
        this.books = [...this.books, ...books]
        this.hasMore = hasMore
        this.isLoading = false
        this.offset = this.books.length
      }
    },
    async remove (id) {
      await removeBook(id)
      this.books = this.books.filter(item => item.bookId !== id)
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
  .content ul {
    padding: 10px;
  }

  .content ul li {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .content ul li img {
    width: 130px;
    height: 150px;
  }

  .content h4 {
    font-size: 20px;
    line-height: 35px;
  }
  .content p {
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b {
    color: red;
  }
  .content button {
    display: block;
    width: 60px;
    height: 25px;
    background: orange;
    color: #fff;
    border: none;
    border-radius: 15px;
    outline: none;
  }
  .more {
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
</style>
