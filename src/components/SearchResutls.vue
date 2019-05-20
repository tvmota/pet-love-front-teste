<script>
export default {
  props: {
    cep: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    logradouro: {
      type: String,
      required: true
    },
    showInfo: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<template>
  <div class="resultado" v-show="showInfo">
    <p class="resultado-info"><strong>CEP:</strong>&nbsp;{{ cep }}</p>
    <p class="resultado-info"><strong>Estado:</strong>&nbsp;{{ estado }}</p>
    <p class="resultado-info"><strong>Cidade:</strong>&nbsp;{{ cidade }}</p>
    <p class="resultado-info"><strong>Logradouro:</strong>&nbsp;{{ logradouro }}</p>
  </div>
</template>
<style lang="scss">
@import '../assets/css/_utilities/_functions.scss';
@import '../assets/css/_utilities/_variables.scss';

.resultado {
  background: $color-white;
  border: 1px solid $color-gray;
  margin-top: pxToRem(14);
  padding: pxToRem(22);
  width: 100%;

  &-info {
    font-size: pxToRem(14);
    line-height: pxToRem(26);
    margin: 0;
  }
}
</style>
