<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  props: {
    messageProps: {
      type: Object,
      required: true
    },
    showAlert: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    showAlert (newValue, oldValue) {
      if (newValue) {
        Swal.fire(this.messageProps).then(result => {
          this.showAlert = false
        })
      }
    }
  }
}
</script>
<template>
  <dir class="alert-message"></dir>
</template>
<style lang="scss">
@import "../../node_modules/sweetalert2/dist/sweetalert2";

.alert-message {
  display: none;
}
</style>
