<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "ZTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    console.log(this)
    this.eventBus.$emit('update:selected', this.selected)
    console.log(this.selected)
  }
}
</script>
<style lang="scss" scoped>
.tabs {

}
</style>