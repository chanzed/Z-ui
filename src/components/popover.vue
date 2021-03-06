<template>
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      v-if="visible"
      ref="contentWrapper"
      :class="[`position-${position}`]"
      @mouseenter="clearTimer"
      @mouseleave="delayClose"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "ZPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) !== -1;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      visible: false,
      timer: ""
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.delayClose);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover && this.$refs.popover.removeEventListener("click", this.onClick);
    } else {
      this.$refs.popover && this.$refs.popover.removeEventListener("mouseenter", this.open);
      this.$refs.popover && this.$refs.popover.removeEventListener("mouseleave", this.delayClose);
    }
  },
  methods: {
    positionContent() {
      let { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect();
      let { height: height2 } = contentWrapper.getBoundingClientRect();
      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2
        },
        right: {
          left: left + window.scrollX + width,
          top: top + window.scrollY + (height - height2) / 2
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
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
      if (this.timer) {
        window.clearTimeout(this.timer);
      }
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document && document.removeEventListener("click", this.onClickDocument);
    },
    delayClose(event) {
      this.timer = setTimeout(() => {
        this.close();
      }, 200);
    },
    clearTimer() {
      window.clearTimeout(this.timer);
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
  max-width: 20em;
  word-break: break-all;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    border: 10px solid transparent;
    width: 0px;
    height: 0px;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: $border-color;
      border-bottom: none;
      top: 100%;
      left: 10px;
    }
    &::after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 1px);
      left: 10px;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-top: none;
      border-bottom-color: $border-color;
      bottom: 100%;
      left: 10px;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
      left: 10px;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      border-right: none;
      border-left-color: $border-color;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    }
    &::after {
      border-right: none;
      border-left-color: white;
      top: 50%;
      left: calc(100% - 1px);
      transform: translateY(-50%);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-left: none;
      border-right-color: $border-color;
      top: 50%;
      transform: translateY(-50%);
      right: 100%;
    }
    &::after {
      border-left: none;
      border-right-color: white;
      top: 50%;
      transform: translateY(-50%);
      right: calc(100% - 1px);
    }
  }
}
</style>