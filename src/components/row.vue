<template>
  <div class="row" :style="rowStyle">
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
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle() {
      return {
        margin: `0 -${this.gutter / 2}px`,
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>