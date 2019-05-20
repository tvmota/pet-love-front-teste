<script>
import MaskedInput from 'vue-text-mask'
import SearchResults from './components/SearchResutls.vue'
import Loader from './components/Loader.vue'

import { searchCep } from './services/CepService'
import { showError, showWarn } from './utils/Messages'

export default {
  name: 'app',
  components: {
    SearchResults,
    MaskedInput,
    Loader
  },
  data () {
    return {
      cep: '',
      cepInfo: { cep: '', localidade: '', uf: '', logradouro: '' },
      showloader: false,
      showInfo: false
    }
  },
  methods: {
    consultCep () {
      if (this.cep.length > 7) {
        this.showloader = !this.showloader
        searchCep(this.cep).then(resp => {
          this.cepInfo = resp
          this.showInfo = !this.showInfo
          this.showloader = !this.showloader
        }).catch(err => {
          this.showloader = !this.showloader
          console.error(err)
          showError({ text: 'Não foi possivel consultar o cep', title: 'Atenção' })
        })
      } else {
        showWarn({ text: 'Digite um CEP válido com 8 digitos', title: 'Atenção' })
      }
    },
    clearResults () {
      if (!this.cep) {
        this.showInfo = false
        this.cepInfo = { cep: '', localidade: '', uf: '', logradouro: '' }
      }
    }
  }
}
</script>
<template>
  <div class="container" id="app">
    <header aria-level="1" class="container-header" role="heading">
      <h2>Busca Cep</h2>
    </header>
    <main class="container-content" role="main">
      <div class="busca">
        <form @submit.prevent="consultCep" id="frmBuscaCep" autocomplete="off">
          <MaskedInput
            @blur="clearResults"
            type="text"
            name="cep"
            v-model="cep"
            :mask="[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]"
            :guide="false"
            placeholderChar="#" />
          <button class="btn" title="Buscar Cep" type="submit">Buscar CEP</button>
        </form>
      </div>
      <SearchResults :cep="cepInfo.cep" :cidade="cepInfo.localidade" :estado="cepInfo.uf" :logradouro="cepInfo.logradouro" :show-info="showInfo"/>
    </main>
    <footer class="container-footer" role="contentinfo">
      <h3>Tiago Mota</h3>
    </footer>
    <Loader :show="showloader"/>
  </div>
</template>
<style lang="scss">
@import "./assets/css/_base/_normalize";
@import "./assets/css/_base/_base";
@import "./assets/css/_utilities/_functions";
@import "./assets/css/_utilities/_mixins";
@import "./assets/css/_utilities/_variables";

@import "../node_modules/sweetalert2/dist/sweetalert2";

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-content {
    @include flexContainer(
      flex,
      column,
      nowrap,
      flex-start,
      flex-start,
      flex-start
    );
    background: $color-main;
    flex: 1 0 auto;
    padding: pxToRem(6) pxToRem(30) pxToRem(6) pxToRem(30);
    overflow-y: auto;
    width: 100%;
  }

  &-footer {
    background: $color-dark;
    color: $color-white;
    flex: none;
    padding: pxToRem(10);
    text-align: right;
  }

  &-header {
    background: $color-dark;
    color: $color-white;
    flex: none;
    display: flex;
    padding: pxToRem(16);
    justify-content: flex-start;
    align-items: center;
  }

  .busca {
    background: $color-white;
    border: 1px solid $color-gray;
    margin-top: pxToRem(16);
    display: flex;
    justify-content: center;
    padding: pxToRem(10) pxToRem(40);
    width: 100%;

    #frmBuscaCep{
      input[type=text] {
        padding: pxToRem(10) pxToRem(16);
        margin-right: pxToRem(6);
        width: pxToRem(180);
      }

      .btn {
        background: rgba(50, 58, 69, .9);
        border: 1px solid rgba(50, 58, 69, .9);
        border-radius: pxToRem(2);
        color: $color-white;
        font-size: pxToRem(14);
        padding: pxToRem(12);

        &:hover, &:active {
          background: rgba(50,58,69,1);
        }

        &:focus {
          box-shadow: 0 0 0 .2rem rgba(50, 58, 69, .5);
          outline: none;
        }
      }
    }
  }
}
</style>
