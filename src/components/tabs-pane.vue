<template>
  <div class="tabs-pane" @click="xxx" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZTabsPane",
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true,
    }
  },
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    this.eventBus.$on("update:selected", name => { 
      this.active = this.name === name
    })
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    }
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
  &.active {
    padding: 10px;
  }
}
</style>