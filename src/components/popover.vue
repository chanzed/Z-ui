<template>
  <div class="popover" @click.stop="showContent">
    <div class="content-wrapper" v-if="visible" @click.stop ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="trigger">
      <slot></slot>
    </span>
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
      if (this.visible) {
        this.$nextTick(() => {
          let contentWrapper = this.$refs.contentWrapper;
          console.log(contentWrapper)
          document.body.appendChild(contentWrapper);
          let { width, height, left, top } = this.$refs.trigger.getBoundingClientRect();
          console.log(width, height, left, top);
          contentWrapper.style.left = left + window.scrollX + "px";
          contentWrapper.style.top = top + window.scrollY + "px";
          let handleClick = () => {
            this.visible = false;
            document.removeEventListener("click", handleClick);
          };
          document.addEventListener("click", handleClick);
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>