<template>
  <el-container>


    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>

      <el-main>
        <div class="containerInterno">
          <dm-popup @click="upPopup" popupName="ninja">Popup 1</dm-popup>
          <br>
          <br>
          <br>

          <dm-popup @click="upPopup" popupName="brabo">Popup 1</dm-popup>

          <br>
          <br>
          <br>

          <div>
            <h1>/Menssagens</h1>
            <hr />
            <br>
            <p>
              Mensagens aparecem na tela para comunicar ao usuário informações importantes antes de executar alguma
              ação, durante a utilização do sistema ou após alguma ação ser executada.
            </p>
          </div>
          <br />

          <h3>Erro</h3>
          <p>A mensagem de erro é uma resposta inesperada a uma ação executada pelo usuário e pode causar frustração.
            Por isso, precisa ser relevante, útil e clara. O usuário deve ser informado sobre o que aconteceu e
            orientado sobre como resolver. </p>
          <br />

          <div class="container-elementos">
            <h6>Em caixas de texto obrigatória:</h6>
            <br>
            <p>Quando é obrigatório preencher um campo para seguir com a ação ou quando o formato da informação é
              incompatível com o formato correto.</p>
            <br>
            <h6>Erro na ação</h6>
            <br>
            <p>A ação não é permitida ou está indisponível. A mensagem é centralizada e bloqueia a tela.</p>
            <img src="mensagens/erro.jpg">

            <br>

            <dm-popup @click="upPopup" popupName="brabo">Popup 1</dm-popup>


          </div>
          <h3>Aviso</h3>
          <br>
          <div class="container-elementos">



            <p>A mensagem de aviso comunica ao usuário uma informação importante, mas não impede nenhuma ação do
              usuário.
              É exibida na parte superior da tela.</p>
            <br>
            <img src="mensagens/alert_01.jpg">
            <br>
            <br>
            <el-alert title="unclosable alert" type="success" :closable="false" />
            <br>
            <el-alert title="customized close-text" type="info" close-text="Gotcha" />
            <br>
            <el-alert title="alert with callback" type="warning" @click="hello" />
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
          <h3>Alerta</h3>
          <br>
          <div class="container-elementos">
            <p>A mensagem de alerta bloqueia a tela em razão da sensibilidade quanto a uma possível perda de informação
              e documentação. Ela também solicita a confirmação da escolha de uma ação do usuário e exibe o aviso de
              confirmação, ou não, da execução da ação.
            </p>
            <br>
            <img src="mensagens/alert_02.jpg">
            <br>

            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="container-elementos">
            <img src="mensagens/alert_03.jpg">
            <br>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
          <h3>Aviso informativo</h3>
          <br>
          <div class="container-elementos">
            <p>Avisos informativos comunicam informações importantes ou sugerem conteúdos informativos ao usuário.</p>
            <br>
            <img src="mensagens/informativo.jpg">
            <br>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  id: "MenssagensDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Menssagens",
      popupName: false,
      dmPopup: null,
      changePopup: true,
      popupSelecionadothis: null,
      nameAtributo: null,
      removeAtr: null,
      arrayClicked: null,
      popups:
        [
          {
            popupName: 'ninja',
            title: 'Sucesso',
            mensagemPrincipal: 'Mateus Durães',
            closeButton: 'Fechar'
          },
          {
            popupName: 'brabo',
            title: 'Erro',
            mensagemPrincipal: 'Pedro Durães',
            closeButton: 'close'
          },

        ]
    };
  },

  methods: {
    hello() {
      alert('Hellow World!')
    },

    upPopup(event) {
      this.removeAtr = event.target.getAttribute('remove')
      if (this.changePopup === true) {
        document.querySelector('body').style.overflow = 'hidden'

        console.log(`add ${this.nameAtributo}`)
        this.nameAtributo = event.target.getAttribute('popupName')
        this.arrayClicked = this.popups.find((qualeopopup) => {
          return qualeopopup.popupName === this.nameAtributo
        })
        console.log(this.arrayClicked)
        if (this.arrayClicked == undefined) {
          alert('dm-popup - Dados de exibição não encontrados')
        }
        this.dmPopup = document.querySelector('dm-popup')
        let p = document.querySelector(`[popupName="${this.nameAtributo}"]`)
        this.popupSelecionado = this.popups.find((popupName) => {
          return popupName.popupName === this.nameAtributo
        })
        var newDiv = document.createElement('dm-popup-overlay')
        newDiv.setAttribute('id', 'excluir')
        newDiv.setAttribute('remove', `${this.nameAtributo}`)
        newDiv.innerHTML = `<dm-popup-background id="dm-popup-background">
          <h1>${this.popupSelecionado.popupName}</h1> <br> ${this.popupSelecionado.title} <br>  ${this.popupSelecionado.mensagemPrincipal} <br><el-button class="el-button el-button--primario" remove="${this.nameAtributo}"> ${this.popupSelecionado.closeButton}</el-button></dm-popup-background>`
        p.appendChild(newDiv)
        this.changePopup = !this.changePopup
      } else if (this.removeAtr === this.arrayClicked.popupName) {
        document.querySelector('body').style.overflow = 'auto'
        document.querySelector('#excluir').remove()
        this.changePopup = !this.changePopup
        console.log(`remove ${this.nameAtributo}`)
      }
    },
  },
};

</script>

<style>
#dm-popup-background {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 300px;
  background: var(--dm_creme_02);
  padding: 40px;
  border-radius: 6px;
  color: var(--dm_preto_00);
  cursor: default;
}

dm-popup {
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  font-family: "Roboto", sans-serif;
  background: var(--dm_azul_00);
  color: var(--dm_creme_00);
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  border: none;
  height: 35px;
}

#excluir {
  cursor: default;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}
</style>