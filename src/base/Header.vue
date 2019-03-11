<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #4867AA;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    color: #fff;
    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }
  }

</style>
