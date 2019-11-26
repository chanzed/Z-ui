<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref='line'></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, height, left, top } = vm.$el.getBoundingClientRect()
      console.log(width, height, left, top)
    })
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  border: 1px solid red;
  align-items: center;
  position: relative;
  > .line {
     position: absolute;
     bottom: 0;
     border-bottom: 1px solid $blue;
     width: 100px;
  }
  .actions-wrapper {
    margin-left: auto;
  }
}
</style>