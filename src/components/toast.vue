<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ZToast"
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: #fff;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  height: $toast-height;
  display: flex;
  align-items: center;
  background-color: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  color: $toast-color;
}
</style>