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
            <dm-card-container class="container-grid">
              <dm-card @click="cardClicked">
                <h4>Mercantil</h4>
                <span>
                  <p class="body_02">R$ 555,03</p>
                </span>
              </dm-card>
              <dm-card @click="cardClicked">
                <h4>Mercantil</h4>
                <span>
                  <p class="body_02">R$ 555,03</p>
                </span>
              </dm-card>
              <dm-card @click="cardClicked">
                <h4>Mercantil</h4>
                <span>
                  <p class="body_02">R$ 555,03</p>
                </span>
              </dm-card>
            </dm-card-container>
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
                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-card</span> @click=<span roxo>"cardClicked"</span> &#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>h4</span>&#62;<span black>Mercantil</span>&#60;/<span tagColor>h4</span>
                          &#62; <br>
                          &#60;<span tagColor>p</span>class=<span roxo>"<span roxo>body_02</span>"</span>&#62;<span
                            black>R$ 555,03</span>
                          &#60;/<span tagColor>p</span> &#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-card</span> &#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;
                </div>
                <br>
                <!-- Script -->


                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62; <br>
                  <span roxo>export default</span> {<br>
                  <div class="border-left">
                    <div recuo>
                      <span yellow>mounted</span>() {
                      <div class="border-left">
                        <div recuo>
                          <span blue>this</span>.<span yellow>indexadorCard</span>() <br>
                        </div>
                      </div>
                      }, <br>
                      methods: {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>cardClicked</span>(event) {
                          <div class="border-left">
                            <div recuo>
                              <span blue>const</span> indexElementCard = <span blue2>event.currentTarget</span>.<span
                                yellow>getAttribute</span>(<span brown>'dm-card-index'</span>) <br>
                              <span blue>const</span> targetElement = <span blue2>event.currentTarget</span> <br>
                              <span blue>const</span> attributeCard = document.<span yellow>querySelector</span>('<span
                                brown>[card-ativo]</span>') <br>
                              <span blue>const</span> filhos = <span
                                blue2>event.currentTarget.parentElement.childNodes</span>
                              <br>
                              <span roxo>if</span> (indexElementCard == <span
                                blue2>event.currentTarget.parentElement</span>.<span yellow>getAttribute</span>(<span
                                brown>'dm-card-index'</span>)) {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>for</span> (<span blue>let</span> i = <span green>0</span>; i &#60;
                                  filhos.length; i++) {
                                  <div class="border-left">
                                    <div recuo>filhos[i].<span yellow>removeAttribute</span>(<span
                                        brown>'card-ativo'</span>)
                                    </div>
                                  </div>
                                  }
                                  targetElement.<span yellow>setAttribute</span>(<span brown>'card-ativo'</span>, <span
                                    brown>''</span>)
                                </div>
                              </div>
                              }<br>
                              <span roxo>else</span> {
                              <div class="border-left">
                                <div recuo>
                                  attributeCard.<span yellow>removeAttribute</span>(<span brown>'card-ativo'</span>) <br>
                                  targetElement.<span yellow>setAttribute</span>(<span brown>'card-ativo'</span>, <span
                                    brown>''</span>)
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          },
                          <br>
                          <span yellow>indexadorCards</span>() {
                          <div class="border-left">
                            <div recuo>
                              <span blue>const</span> container = document.<span yellow>querySelectorAll</span>(<span
                                brown>'dm-card-container'</span>)
                              <br>
                              <span roxo>for</span> (<span blue>let</span> i = <span green>0</span>; i &#60;
                              container.length; i++) {
                              <div class="border-left">
                                <div recuo>
                                  container[i].<span yellow>setAttribute</span>(<span brown>'dm-card-index'</span>, i)<br>
                                  <span blue>const</span> childrensContainer = container[i].childNodes<br>
                                  <span roxo>for</span> (<span blue>let</span> y = <span green>0</span>; y &#60;
                                  childrensContainer.length; y++) {
                                  <div class="border-left">
                                    <div recuo>childrensContainer[y].<span yellow>setAttribute</span>(<span
                                        brown>'dm-card-index'</span>, i)</div>
                                  </div>
                                  }
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          },
                        </div>
                      </div>

                      },
                    </div>
                  </div>
                  },
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
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
              <span>
                <p class="body_02">R$ 555,03</p>
              </span>
            </dm-card-estatico>

            <dm-card-estatico>
              <h4>Renda média</h4>
              <span>
                <p class="body_02">R$ 555,03</p>
              </span>
            </dm-card-estatico>

            <dm-card-estatico>
              <h4>Renda média</h4>
              <span>
                <p class="body_02">R$ 555,03</p>
              </span>
            </dm-card-estatico>

          </div>

          <br>
          <p class="detail_02">Cards estáticos apenas para visualização de informações pontuais.</p>
          <br>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">

              <div class="html_codigos">
                &#60;<span tagColor>template</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>dm-card-estatico</span>&#62;

                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>h4</span>&#62;<span black>Renda média</span>&#60;/<span
                          tagColor>h4</span>&#62;
                        <br>
                        &#60;<span tagColor>p</span> class="<span roxo>body_02</span>"&#62;<span black>R$
                          555,03</span>&#60;/<span tagColor>p</span>&#62;
                      </div>
                    </div>

                    &#60;/<span tagColor>dm-card-estatico</span>&#62;

                    <br>
                    <br>

                    &#60;<span tagColor>dm-card-estatico</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>h4</span>&#62;<span black>Renda média</span>&#60;/<span
                          tagColor>h4</span>&#62;<br>
                        &#60;<span tagColor>p</span> class="<span roxo>body_02</span>"&#62;<span black>R$
                          555,03</span>&#60;/<span tagColor>p</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-card-estatico</span>&#62;

                    <br>
                    <br>

                    &#60;<span tagColor>dm-card-estatico</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>h4</span>&#62;<span black>Renda média</span>&#60;/<span
                          tagColor>h4</span>&#62;<br>
                        &#60;<span tagColor>p</span> class="<span roxo>body_02</span>"&#62;<span black>R$
                          555,03</span>&#60;/<span tagColor>p</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-card-estatico</span>&#62;

                  </div>
                </div>
                &#60;<span tagColor>/template</span>&#62;
              </div>

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
          <p class="detail_02">Cards de romaneio para visualização de informações pontuais e com função de botão: ao
            clicar nele, abre uma
            aba com todas as informações do romaneio e seus pedidos, podendo ser visualizada e editada.</p>
          <br>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">
                &#60;<span tagColor>template</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>dm-card-romaneio</span> @click=<span roxo>"cardRomaneio"</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>dm-card-bar</span> class=<span roxo>"dm_rosa_00"</span> /&#62;
                        &#60;<span tagColor>dm-card-content</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>h4</span>&#62;<span black>Romaneio 01</span>&#60;/<span
                              tagColor>h4</span>&#62;
                            &#60;<span tagColor>div</span>&#62;<spa blackn>Ocupação: 40%</spa>&#60;/<span
                              tagColor>div</span>&#62;
                            &#60;<span tagColor>div</span>&#62;<spa blackn>Peso: 1294 kg</spa>&#60;/<span
                              tagColor>div</span>&#62;
                            &#60;<span tagColor>div</span>&#62;<spa blackn>Volumes: 40%</spa>&#60;/<span
                              tagColor>div</span>&#62;
                          </div>
                        </div>
                        &#60;/<span tagColor>dm-card-content</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-card-romaneio</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>template</span>&#62;
              </div>
              <br>

              <div class="html_codigos">
                &#60;<span tagColor>script</span>&#62; <br>
                <span roxo>export default</span> {<br>
                <div class="border-left">
                  <div recuo>
                    <span yellow>mounted</span>() {
                    <div class="border-left">
                      <div recuo>
                        <span blue>this</span>.<span yellow>indexadorRomaneio</span>() <br>
                      </div>
                    </div>
                    }, <br>
                    methods: {
                    <div class="border-left">
                      <div recuo>
                        <span yellow>indexadorRomaneio</span>() {
                        <div class="border-left">
                          <div recuo>
                            <span blue>const</span> cardsRomaneio = document.<span yellow>querySelectorAll</span>(<span
                              brown>'dm-card-romaneio'</span>) <br>
                            <span roxo>for</span> (let <span blue>i</span> = <span green>0</span>; <span blue>i</span>
                            &#60;
                            cardsRomaneio.length; <span blue>i</span>++) {
                            <div class="border-left">
                              <div recuo>cardsRomaneio[<span blue>i</span>].<span yellow>setAttribute</span>('id',
                                `romaneio-${<span blue>i</span>}`)</div>
                            </div>
                            }
                          </div>
                        </div>
                        }, <br>

                        <span yellow>cardRomaneio</span>(<span blue2>event</span>) {
                        <div class="border-left">
                          <div recuo>
                            <span blue>const</span> selectedRomaneio = <span blue2>event.currentTarget</span> <br>
                            <span blue>const</span> romaneioAtivo = document.querySelector(<span
                              brown>'[romaneio-ativo]'</span>) <br>
                            <span roxo>if</span> (<span>romaneioAtivo</span> == <span blue>null</span>) { <br>
                            <span blue>selectedRomaneio</span>.<span yellow>setAttribute</span>(<span
                              brown>'romaneio-ativo'</span>, '') <br>
                            document.querySelector(<span brown>'[romaneio-ativo]'</span>).childNodes[<span
                              green>1</span>].style.borderColor = `var(--${document.querySelector(<span
                              brown>'[romaneio-ativo]'</span>).childNodes[<span green>0</span>].classList})`<br>
                            }
                            <span roxo>else</span> {
                            <div class="border-left">
                              <div recuo>
                                <span blue>romaneioAtivo</span>.childNodes[<span green>1</span>].<span
                                  yellow>removeAttribute</span>('style') <br>
                                <span blue>romaneioAtivo</span>.<span yellow>removeAttribute</span>(<span
                                  brown>'romaneio-ativo'</span>) <br>
                                <span blue>selectedRomaneio</span>.childNodes[<span green>1</span>].style.borderColor =
                                `var(--${<span blue>selectedRomaneio</span>.childNodes[<span green>0</span>].classList})`
                                <br>
                                <span blue>selectedRomaneio</span>.<span yellow>setAttribute</span>(<span
                                  brown>'romaneio-ativo'</span>, '')
                              </div>
                            </div>
                            }
                          </div>
                        </div>
                        },
                      </div>
                    </div>
                    },
                  </div>
                </div>
                },
                <br>
                &#60;/<span tagColor>script</span>&#62;
              </div>

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
    this.indexadorCards()
    this.indexadorRomaneio()
  },
  methods: {
    indexadorRomaneio() {
      const cardsRomaneio = document.querySelectorAll('dm-card-romaneio')
      for (let i = 0; i < cardsRomaneio.length; i++) {
        cardsRomaneio[i].setAttribute('id', `romaneio-${i}`)
      }
    },
    cardRomaneio(event) {
      const selectedRomaneio = event.currentTarget
      const romaneioAtivo = document.querySelector('[romaneio-ativo]')
      if (romaneioAtivo == null) {
        selectedRomaneio.setAttribute('romaneio-ativo', '')
        document.querySelector('[romaneio-ativo]').childNodes[1].style.borderColor = `var(--${document.querySelector('[romaneio-ativo]').childNodes[0].classList})`
      } else {
        romaneioAtivo.childNodes[1].removeAttribute('style')
        romaneioAtivo.removeAttribute('romaneio-ativo')
        selectedRomaneio.childNodes[1].style.borderColor = `var(--${selectedRomaneio.childNodes[0].classList})`
        selectedRomaneio.setAttribute('romaneio-ativo', '')
      }
    },

    cardClicked(event) {
      const indexElementCard = event.currentTarget.getAttribute('dm-card-index')
      const targetElement = event.currentTarget
      const attributeCard = document.querySelector('[card-ativo]')
      const filhos = event.currentTarget.parentElement.childNodes
      if (indexElementCard == event.currentTarget.parentElement.getAttribute('dm-card-index')) {
        for (let i = 0; i < filhos.length; i++) {
          filhos[i].removeAttribute('card-ativo')
        } targetElement.setAttribute('card-ativo', '')
      }
      else {
        attributeCard.removeAttribute('card-ativo')
        targetElement.setAttribute('card-ativo', '')
      }
    },
    indexadorCards() {
      const container = document.querySelectorAll('dm-card-container')
      for (let i = 0; i < container.length; i++) {
        container[i].setAttribute('dm-card-index', i)
        const childrensContainer = container[i].childNodes
        for (let y = 0; y < childrensContainer.length; y++) {
          childrensContainer[y].setAttribute('dm-card-index', i)
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
