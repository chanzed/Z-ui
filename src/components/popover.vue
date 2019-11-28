<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
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
        this.close();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  background-color: #fff;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
  max-width: 20em;
  word-break: break-all;
  margin-top: -10px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    border: 10px solid transparent;
    width: 0px;
    height: 0px;
    left: 10px;
  }
  &::before {
    border-top-color: $border-color;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>