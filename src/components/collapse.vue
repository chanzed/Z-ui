<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ZCollapse",
}
</script>
<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;
  $border-width: 1px;
  .collapse {
    border: $border-width solid $grey;
    border-radius: $border-radius;
  }
</style>