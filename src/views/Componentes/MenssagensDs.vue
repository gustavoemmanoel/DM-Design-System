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
          <dm-popup @click="teste(0)" popup="ninja">POPUP 1</dm-popup>
          <br>
          <br>
          <br>

          <dm-popup @click="teste(1)" popup="poderoso">POPUP 2</dm-popup>

          <br>
          <br>
          <br>

          <dm-popup @click="teste(2)" popup="brabo">POPUP 2</dm-popup>

          <br>
          <br>
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

            <!-- <dm-popup @click="openPopup">
              <dm-popup-content>
                <dm_icon alerta style="width: 40px; height: 40px;" />
                <p>Erro ao carregar rota 01.</p>
                <p class="detail_01">A nova rota escolhida para NF ficará acima da capacidade e/ou confira sua conexão.
                </p>
                <dm-popup-btn class="close-popup" @click="upDmErro">Ok</dm-popup-btn>
              </dm-popup-content>
            </dm-popup>
            <dm-popup-btn @click="openPopup" type="primario">Visualizar popup</dm-popup-btn> -->




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
      popup: false,
      dmPopup: null,
      chamge: true,
      popups:
        [
          {
            popup: 'ninja',
            title: 'Erro',
            mensagemPrincipal: 'Mateus Durães',
            btn: 'Fechar'
          },
          {
            popup: 'brabo',
            title: 'aviso',
            mensagemPrincipal: 'lucas',
            btn: 'Fechar'
          },
          {
            popup: 'poderoso',
            title: 'Sem Erro',
            mensagemPrincipal: 'Pedro Durães',
            btn: 'Fechar'
          },
        ]
    };
  },

  methods: {
    hello() {
      alert('Hellow World!')
    },

    teste(index) {

      let x = document.getElementsByTagName('dm-popup')[index].getAttribute('popup')
      let p = document.querySelector(`[popup="${x}"]`)
      this.dmPopup = document.querySelector('dm-popup')
      if (this.chamge === true) {
        console.log(this.chamge)

        // Quando o this.popup for igual ao popup do html, ele adiciona esses dados na div correta

        var elementx = document.createElement('div')

        elementx.innerHTML = `<dm-popup-background><h1>${this.popups[index].popup}</h1> <br> ${this.popups[index].title} <br>  ${this.popups[index].mensagemPrincipal} <br>  ${this.popups[index].btn}</dm-popup-background>`

        p.appendChild(elementx)
        elementx.setAttribute('id', 'excluir')
        this.chamge = false
      } else {


        console.log(this.chamge)

        document.querySelector('#excluir').remove()

        this.chamge = true
      }
    },

    /*    openPopup(event) {
         this.dmPopup = document.querySelector('dm-popup')
         if (this.popup == false) {
           this.popup = !this.popup
           this.dmPopup.style.display = 'flex'
         } else {
           const classId = event.target.classList[0]
           this.dmPopup.setAttribute('class', 'dm-mensage-background')
           const classClicked = ['close-popup', 'dm-mensage-background']
           const a = classClicked.some((classClicked) => classClicked === classId)
           if (a) {
             this.dmPopup.style.display = 'none'
             this.popup = !this.popup
           }
         }
       }, */
  }
};

</script>

<style>
dm-popup-background {
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
}


dm-popup {
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

/* dm-popup {
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

dm-popup-content {
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
}

dm-popup-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  background: var(--dm_azul_00);
  color: var(--dm_creme_00) !important;
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  border: none;
  height: 35px;
  cursor: pointer;
} */
</style>