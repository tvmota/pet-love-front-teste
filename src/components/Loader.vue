<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<template>
  <div class="loader" v-show="show">
    <div class="loader-donut"></div>
  </div>
</template>
<style lang="scss">
@import '../assets/css/_utilities/_functions';
@import '../assets/css/_utilities/_variables';

@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: $color-black;
  background-color: rgba(0,0,0,0.4);

  &-donut {
    display: inline-block;
    border: pxToRem(16) solid rgba(0, 0, 0, .2);
    border-left-color: $color-dark;
    border-radius: 50%;
    width: pxToRem(136);
    height: pxToRem(136);
    animation: donut-spin 1.2s linear infinite;
  }
}

</style>
