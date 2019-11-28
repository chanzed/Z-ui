<template>
  <div class="collapse-item">
    <div class="title" @click="open = !open">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ZCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
    }
  }
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
$border-width: 1px;
.collapse-item {
  > .title {
    border: $border-width solid $grey;
    margin-top: -$border-width;
    margin-left: -$border-width;
    margin-right: -$border-width;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }

  &:first-child {
    > .title {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>