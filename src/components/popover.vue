<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
    positionContent() {
      let contentWrapper = this.$refs.contentWrapper;
      document.body.appendChild(contentWrapper);
      let {
        width,
        height,
        left,
        top
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      contentWrapper.style.left = left + window.scrollX + "px";
      contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClickDocument() {
      if (
        !this.$refs.contentWrapper.contains(event.target) &&
        !this.$refs.triggerWrapper.contains(event.target)
      ) {
        this.close()
        console.log("监听document");
      }
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent();
      document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      console.log('关闭')
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close()
        } else {
          this.open()
        }
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