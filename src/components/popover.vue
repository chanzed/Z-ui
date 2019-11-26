<template>
  <div class="popover" @click.stop="showContent">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ZPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showContent() {
      this.visible = !this.visible;
      console.log("切换visible");
      if (this.visible) {
        setTimeout(() => {
          let handleClick = () => {
            this.visible = false;
            document.removeEventListener('click', handleClick)
            console.log('隐藏popover')
          }
          document.addEventListener("click", handleClick);
        }, 0);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>