<template>
  <svg  class="z-icon">
    <use v-bind:xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import '../assets/svg.js'
export default {
  props: ['name'],
};
</script>
<style lang='scss' scoped>
.z-icon {
      width: 1em;
      height: 1em;
    }
</style>