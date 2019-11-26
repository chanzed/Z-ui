<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
console.log(1);
export default {
  name: "ZTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
      }
    }
  },
  mounted() {
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
      console.log(`${this.name}的active为${this.active}`)
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  padding: 0.5em 1.5em;
  border: 1px solid green;
  &.active {
    background-color: red;
  }
}
</style>