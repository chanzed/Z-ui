<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
console.log(1)
export default {
  name: "ZTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item {

}
</style>