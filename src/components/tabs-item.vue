<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
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
        disabled: this.disabled,
      }
    }
  },
  mounted() {
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit('click', this)
    }
  }
};
</script>
<style lang="scss" scoped>
$disabled-text-color: grey;
.tabs-item {
  padding: 0.5em 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  &.active {
    color: blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>