<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div class="containerInterno">
          <div>
            <h1>/Pins</h1>
            <hr />
            <br>
            <p>Pins são elementos que servem para marcar pontos no mapa.</p>
          </div>
          <br />
          <div class="container-elementos">
            <h3>Pin básico</h3>
            <br>
            <p>
              O pin básico é utilizado para representar uma informação de um
              ponto específico. Apesar de possuir um elemento ícone, o mesmo
              permace como um pin básico.
            </p>
            <br>
            <br>
            <br>
            <el-row>
              <el-col :span="4">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>Informação secundária</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                    src="imagens_design_system/pins/pin__basico--azul.svg" />
                </dm-pin>
                <span class="detail_03" tagColor>pin__basico--azul</span>
              </el-col>

              <el-col :span="4">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>Informação secundária</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                    src="imagens_design_system/pins/pin__basico--rosa.svg" />
                </dm-pin>
                <span class="detail_03" tagColor>pin__basico--rosa</span>
              </el-col>

              <el-col :span="4">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>Informação secundária</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                    src="imagens_design_system/pins/pin__basico--lilas.svg" />
                </dm-pin>
                <span class="detail_03">pin__basico--lilas</span>
              </el-col>
              <el-col :span="4">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>Informação secundária</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                    src="imagens_design_system/pins/pin__basico--verde.svg" />
                </dm-pin>
                <span class="detail_03">pin__basico--verde</span>

              </el-col>
              <el-col :span="4">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>Informação secundária</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                    src="imagens_design_system/pins/pin__basico--laranja.svg" />
                </dm-pin>
                <span class="detail_03">pin__basico--laranja</span>
              </el-col>
              <el-col :span="4">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>Informação secundária</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                    src="imagens_design_system/pins/pin__basico--amarelo.svg" />
                </dm-pin>
                <span class="detail_03">pin__basico--amarelo</span>
              </el-col>
            </el-row>
            <br>
            <br>


            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="ver" name="3">
                <div class="html_codigos_blue">
                  &#60;<span tagColor>dm-pin</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-pin-backgroun</span>d&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>dm-pin-conteudo</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>h4</span>&#62;<span black>Informação primária</span>&#60;/<span
                                tagColor>h4</span>&#62;
                              <br>
                              &#60;<span tagColor>p</span>&#62;<span black>Informação secundária</span>&#60;/<span
                                tagColor>p</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-pin-conteudo</span>&#62;
                          <br>
                          &#60;<span tagColor>dm-pin-footer</span>&#62;&#60;<span tagColor>dm-pin-arrow</span>
                          /&#62;&#60;/<span tagColor>dm-pin-footer</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-pin-background</span>&#62;
                      <br>
                      &#60;<span tagColor>img</span>
                      <div class="border-left">
                        <div recuo>
                          @<span yellow>mouseover</span>=<span roxo>"pinHover"</span> <br> @<span
                            yellow>mouseleave</span>=<span roxo>"pinHover"</span> <br> class=<span
                            roxo>"<span>dm-pi</span>n"</span>
                          <br>
                          src=<span roxo>"imagens_design_system/pins/pin__basico--azul.svg"</span>
                        </div>
                      </div>
                      /&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-pin</span>&#62;
                </div>
                <br>
                <br>

                <div class="html_codigos_blue">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      <div>
                        name: <span roxo>"LoadingDs"</span>, <br>
                      </div>
                      <div>
                        <span yellow>data</span>() {
                        <div class="border-left">
                          <div recuo>
                            <span roxo>return</span> {
                            <div class="border-left">
                              <div recuo>
                                pin: <span blue>false,</span>
                              </div>
                            </div>

                            };
                          </div>
                        </div>
                        },
                      </div>
                      methods: {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>pinHover</span>() {
                          <div class="border-left">
                            <div recuo>
                              <span blue>const</span> pin = document.<span yellow>querySelector</span>(<span
                                brown>'dm-pin-background'</span>)
                              <br>
                              <span roxo>if</span>(!this.pin) {
                              <div class="border-left">
                                <div recuo>
                                  pin.style.display = <span brown>'flex'</span><br>
                                  <span blue>this</span>.pin = <span blue>!this</span>.pin<br>
                                </div>
                              </div>
                              } <span roxo>else</span> {
                              <div class="border-left">
                                <div recuo>
                                  pin.style.display = <span brown>'none'</span><br>
                                  <span blue>this</span>.pin = <span blue>!this</span>.pin<br>
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                  };
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>


            <br />
          </div>
          <div class="container-elementos">
            <h3>Pin com ícone</h3>
            <br>
            <p>
              O pin também pode conter um ícone interno para representar mais uma informação sobre aquele ponto
              específico.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__coroa.svg" alt="Pin" />


              <dm-pin>
                <dm-pin-background>
                  <dm-pin-conteudo>
                    <h4>Informação primária</h4>
                    <p>Informação secundária</p>
                  </dm-pin-conteudo>
                  <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                </dm-pin-background>

                <img class="dm-pin" @mouseover="pinHover" @mouseleave="pinHover"
                  src="imagens_design_system/pins/pin__coroa--azul.svg" />

              </dm-pin>


            </div>

          </div>
          <div class="container-elementos">
            <h3>Pin de desempenho</h3>
            <br>
            <p>
              O pin de desempenho é um pin com duplo ícone. O segundo ícone apresenta o desempenho de um ponto em
              relação a outros pontos.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />



            </div>
            <div class="pin__container">
              <span><img class="pin__desempenho" src="imagens_design_system/pins/bom.svg" alt="Pin" />
                Bom
              </span>
              <span><img class="pin__desempenho" src="imagens_design_system/pins/medio.svg" alt="Pin" />
                Médio
              </span>
              <span><img class="pin__desempenho" src="imagens_design_system/pins/ruim.svg" alt="Pin" />
                Ruim
              </span>
            </div>


          </div>

          <div class="container-elementos">
            <h3>Ícone de pins</h3>
            <br>
            <p>
              Os ícones que vão dentro dos pins são sempre preenchidos na cor DM_creme_00, padronizados no tamanho 20px
              X 20px.
            </p>
            <br />
            <el-row>
              <h1 style="text-align: center; margin-bottom: 20px; width: 100%">Coleção de ícones para os pins</h1>
            </el-row>
            <div class="pin__container__icon">
              <img class="pin__icon" src="imagens_design_system/pins/pin__icon--coroa.svg" alt="Pin" />
              <img class="pin__icon" src="imagens_design_system/pins/pin__icon--bolinha.svg" alt="Pin" />
              <img class="pin__icon" src="imagens_design_system/pins/pin__icon--estrela.svg" alt="Pin" />
            </div>
          </div>

          <div class="container-elementos">
            <h3>Estados do pin</h3>
            <br>
            <p>
              Os ícones que vão dentro dos pins são sempre preenchidos na cor DM_creme_00, padronizados no tamanho 20px
              X 20px.
            </p>
            <br />
            <div class="estados__pin">
              <div>
                <h3>Pin ativo</h3>
                <div>
                  <img class="pin__medio" src="imagens_design_system/pins/pin__basico--azul.svg" alt="Pin" />
                </div>

                <p>A cor do pin é pré-determinada em cada caso de uso.</p>
              </div>
              <div>
                <h3>Pin hover</h3>
                <div>
                  <img class="pin__hover" src="imagens_design_system/pins/pin__hover.svg" alt="Pin" />
                </div>
                <p>Pin não muda de cor e barra do hover acompanha cor do pin. <br><br>
                  Hover aparece conforme o melhor espaço na tela, seja esquerda, direita ou centralizado.
                </p>
              </div>

              <div>
                <h3>Pin clicado</h3>
                <div>
                  <img class="pin__medio" src="imagens_design_system/pins/pin__basico--rosa.svg" alt="Pin" />
                </div>
                <p>No estado de click o pin é sempre rosa.</p>
              </div>
            </div>
          </div>


          <div class="container-elementos">
            <h3>Estados do pin</h3>
            <br>
            <p>
              Para melhor acessibilidade de aplicações, esta sessão disponibiliza os pins acima já componentizados para
              a utilização imediata.
            </p>
            <br />
            <p>O pin por padrão vem com todas as opções ativas, sendo necessário o designer configurá-lo conforme o caso
              de uso.</p>
            <br>
            <div class="estados__pin--mestre">
              <div>
                <h3>Pin mestre</h3>
                <div>
                  <img class="pin__medio" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
                </div>
              </div>
              <p>Importante: o pin mestre só deve ser aterado caso a intenção seja alterar o aspecto geral de todos os
                pins.
                <br>
                <br>
                Para mudar cores, ícones e desempenho de algum pin pontualmente, faça em um pin gerado a partir do pin
                mestre.
              </p>
            </div>
          </div>



          <div>
            <h3>Aplicação</h3>
            <hr />
          </div>
          <img class="mapa__pins" src="mapa__pins.svg">
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "PinsDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Pins",
      pin: false,
    };
  },
  mounted() {
    this.indexadorPins()
  },

  methods: {
    indexadorPins() {
      const dmPinsSelector = document.querySelectorAll('dm-pin')
      for (let i = 0; i < dmPinsSelector.length; i++) {
        dmPinsSelector[i].setAttribute('id', `pin-${i}`)
        const indexadorPin = document.getElementById(`pin-${i}`)
        indexadorPin.childNodes[0].setAttribute('id', `delete-${i}`)
        indexadorPin.childNodes[1].setAttribute('id', `pin-${i}`)
        indexadorPin.childNodes[0].style.display = 'none'
      }
    },

    pinHover(event) {
      const getId = event.target.id
      const $pin = document.getElementById(getId).children[0]
      if ($pin.style.display == 'none') {
        $pin.style.display = 'flex'
      } else if ($pin.style.display == 'flex') {
        $pin.style.display = 'none'
      }
    }
  }
};
</script>

<style scoped>
.detail_03 {
  display: block;
  width: 100%;
  text-align: center;
}

.pin__large {
  width: 72px;
  margin-right: 50px;
}

.pin__small {
  width: 40px;
}

.mapa__pins {
  width: 100%;
}

.pin__medio {
  height: 46px;
  width: 100%;
}

.pin__icon {
  height: 50px;
}

.pin__hover {
  width: 300px;
}

.pin__desempenho {
  width: 30px
}

.pin__container__icon {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: var(--dm_amarelo_01);
  width: max-content;
  margin: auto;
  padding: 30px 44px;
  border-radius: 6px;
  gap: 40px;
}

.pin__container {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 50px;
  width: 184px;
}

.pin__container span {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.estados__pin {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.estados__pin--mestre {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  width: 100%;

}

.estados__pin--mestre div {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--dm_creme_00);
  min-height: 168px;
  border-radius: 6px;

}

.estados__pin--mestre p {
  align-self: center;
}

.estados__pin div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 6px;
  padding: 20px;
}

.estados__pin div div {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--dm_creme_00);
  min-height: 168px;

}
</style>
