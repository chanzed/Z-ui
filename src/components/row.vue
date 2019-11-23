<template>
  <div class="row" :style="{margin: `0 -${gutter / 2}px`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZRow",
  props: {
    gutter: {
      type: [Number, String],
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      console.log('this.gutter', this.gutter)
      vm.gutter = this.gutter
      console.log('vm.gutter', vm.gutter)
    })
  }
}
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>