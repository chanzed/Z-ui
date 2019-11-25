<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHTML"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onclickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "ZToast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default: function() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    toastClasses() {
      return `position-${this.position}`;
    }
  },
  mounted() {
    this.updateStyle();
    this.executeAutoClose();
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
    executeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onclickClose() {
      this.close();
      this.closeButton.callback && this.closeButton.callback();
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: #fff;
$animation-time: 1s;
@keyframes fade-bottom {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
@keyframes fade-top {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
@keyframes fade-middle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast {
  position: fixed;
  max-width: 300px;
  left: 50%;
  border-radius: 3px;
  transform: translateX(-50%);
  font-size: $font-size;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  background-color: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  color: $toast-color;
  .message {
    padding: 8px 0;
  }
  .close {
    flex-shrink: 0;
  }
  .line {
    border-left: 1px solid #666;
    height: 100%;
    margin: 0 16px;
  }
  &.position-top {
    top: 0;
    animation: fade-top $animation-time;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-middle $animation-time;
  }
  &.position-bottom {
    bottom: 0;
    animation: fade-bottom $animation-time;
  }
}
</style>