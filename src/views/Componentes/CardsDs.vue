<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>


        <div class="containerInterno">
          <div>
            <h1>/Cards</h1>
            <hr />
            <p>
              Cards permitem a visualização das principais informações de modo
              sintético e rápido. Eles podem ser estáticos ou clicáveis,
              revelando mais detalhes após interação.
            </p>
          </div>
          <br>

          <div class="cont-elements">
            <h3>Card clicáveis</h3>
            <br>
            <p>Cards clicáveis possuem comportamento de botão. Além de apresentar as principais informações resumidas, ao
              serem clicados, podem expandir ou apresentar uma nova informação na página.</p>
            <br>
            <div class="container-grid">
              <dm-card @click="cardClicked">
                <h4>Mercantil</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
              <dm-card @click="cardClicked">
                <h4>Mercantil</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
              <dm-card @click="cardClicked">
                <h4>Mercantil</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
            </div>
            <br>
            <br>
            <img style="width: 93%;" src="cards/01.svg">

            <br>
            <br>
            <p class="detail_02">Cards azuis com função de botão: ao clicar em um deles, o gráfico muda para mostrar as
              informações
              desejadas. Os cards do tipo botão usam o comportamento de cores do botão. Ativos ficam azuis e clicados
              ficam amarelos. A sombra também é uma detalhe que identifica o botão.</p>

            <br>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">

              </el-collapse-item>
            </el-collapse>
          </div>

          <br />

        </div>



        <div class="cont-elements">
          <h3>Card estático</h3>
          <br>
          <p>Cards estáticos possuem como única funcionalidade apresentar as informações desejadas, não causando
            alterações no restante das telas.</p>
          <br>
          <div class="container-grid">
            <!-- Cards clicáveis -->

            <dm-card-estatico>
              <h4>Renda média</h4>
              <p class="body_02">R$ 555,03</p>
            </dm-card-estatico>

            <dm-card-estatico>
              <h4>Renda média</h4>
              <p class="body_02">R$ 555,03</p>
            </dm-card-estatico>

            <dm-card-estatico>
              <h4>Renda média</h4>
              <p class="body_02">R$ 555,03</p>
            </dm-card-estatico>

          </div>

          <br>
          <p class="detail_02">Cards estáticos apenas para visualização de informações pontuais.</p>
          <br>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">

            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="cont-elements">
          <h3>Cards de romaneio</h3>
          <br>
          <p>Cards de romaneios tem características especiais. Além de mostrar uma lista de informações, ao contrário
            dos estáticos que só informam uma, também podem ser clicáveis para exibir uma lista de viagens.</p>
          <br>
          <div class="container-grid">
            <dm-card-romaneio @click="cardRomaneio">
              <dm-card-bar class="dm_laranja_01" />
              <dm-card-content>
                <h4>Romaneio 01</h4>
                <div>Ocupação: 40%</div>
                <div>Peso: 1294 kg</div>
                <div>Volumes: 40%</div>
              </dm-card-content>
            </dm-card-romaneio>

            <dm-card-romaneio @click="cardRomaneio">
              <dm-card-bar class="dm_verde_00" />
              <dm-card-content>
                <h4>Romaneio 01</h4>
                <div>Ocupação: 40%</div>
                <div>Peso: 1294 kg</div>
                <div>Volumes: 40%</div>
              </dm-card-content>
            </dm-card-romaneio>

            <dm-card-romaneio @click="cardRomaneio">
              <dm-card-bar class="dm_rosa_00" />
              <dm-card-content>
                <h4>Romaneio 01</h4>
                <div>Ocupação: 40%</div>
                <div>Peso: 1294 kg</div>
                <div>Volumes: 40%</div>
              </dm-card-content>
            </dm-card-romaneio>


          </div>
          <br>
          <p class="detail_02">Cards de romaneio para visualização de informações pontuais e com função de botão: ao clicar nele, abre uma
            aba com todas as informações do romaneio e seus pedidos, podendo ser visualizada e editada.</p>
          <br>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">

            </el-collapse-item>
          </el-collapse>

        </div>




      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CardsDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Cards",
    };
  },

  mounted() {
    this.indexadorCard()
    this.indexadorRomaneio()
  },

  methods: {
    cardRomaneio(event) {
      const selectedRomaneio = event.currentTarget

      const romaneioAtivo = document.querySelector('[romaneio-ativo]')

      if (romaneioAtivo == null) {
        selectedRomaneio.setAttribute('romaneio-ativo', '')

        document.querySelector('[romaneio-ativo]').childNodes[1].style.borderColor = `var(--${document.querySelector('[romaneio-ativo]').childNodes[0].classList})`
      }
      else {
        romaneioAtivo.childNodes[1].removeAttribute('style')
        romaneioAtivo.removeAttribute('romaneio-ativo')
        selectedRomaneio.childNodes[1].style.borderColor = `var(--${selectedRomaneio.childNodes[0].classList})`
        selectedRomaneio.setAttribute('romaneio-ativo', '')
      }
    },

    indexadorRomaneio() {
      const cardsRomaneio = document.querySelectorAll('dm-card-romaneio')

      for (let i = 0; i < cardsRomaneio.length; i++) {
        cardsRomaneio[i].setAttribute('id', `romaneio-${i}`)
      }
    },

    indexadorCard() {
      const card = document.querySelectorAll('dm-card')
      for (let i = 0; i < card.length; i++) {
        card[i].setAttribute('id', `card-${i}`)
      }
    },

    cardClicked(event) {
      const ativadoCard = document.querySelector('[card-ativo]')

      if (ativadoCard == null) {
        cardDm()
      } else {
        ativadoCard.removeAttribute('card-ativo')
        cardDm()
      }

      function cardDm() {
        const card1 = event.target.parentNode.getAttribute('id')
        const card2 = event.target.getAttribute('id')
        if (card1 == null) {
          document.getElementById(card2).setAttribute('card-ativo', '')

        } else {
          document.getElementById(card1).setAttribute('card-ativo', '')
        }
      }
    },
  }
};
</script>

<style scoped>
.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
}
</style>
