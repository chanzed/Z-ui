<template>
  <div class="row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZRow",
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      }
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
    },
    rowClass() {
      return [this.align && `align-${this.align}`]
    }
  }
}
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-center {
      justify-content: center;
    }
    &.align-right {
      justify-content: flex-end;
    }
    flex-wrap: wrap;
  }
</style>