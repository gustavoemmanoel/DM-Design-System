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
          <br>
          <div class="cont-elements">
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
            <!-- Azul básico -->
            <span>
              <dm-pin>
                <dm-pin-background>
                  <dm-pin-conteudo>
                    <h4>Pin Azul</h4>
                    <p>Informação secundária</p>
                  </dm-pin-conteudo>
                  <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                </dm-pin-background>
                <dm-pin-img type="pin_basico_azul" />
              </dm-pin>
            </span>

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">

                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;

                  <div class="border-left">
                    <div recuo>
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
                          &#60;<span tagColor>dm-pin-img</span>
                          <div class="border-left">
                            <div recuo>
                              type=<span roxo>"pin_basico_azul"</span>
                            </div>
                          </div>
                          /&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-pin</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;

                </div>
              </el-collapse-item>
            </el-collapse>

            <br>
          </div>
          <div class="cont-elements">
            <h3>Pin com ícone</h3>
            <br>
            <p>
              O pin também pode conter um ícone interno para representar mais uma informação sobre aquele ponto
              específico.
            </p>
            <br>
            <br>
            <span v-for="(pinsInfo, index) in pinsInfos" :key="index"
              style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;justify-items: flex-start;">

              <div class="pins-tags" v-for="(info, index) in pinsInfo" :key="index">
                <dm-pin>
                  <dm-pin-background>
                    <dm-pin-conteudo>
                      <h4>Informação primária</h4>
                      <p>{{ info }}</p>
                    </dm-pin-conteudo>
                    <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                  </dm-pin-background>
                  <dm-pin-img :type="info" />
                </dm-pin>
                <div>&#60;<span tagColor>dm-pin-img </span> type=<span roxo>"{{ info }}"</span> /&#62;</div>
              </div>
            </span>

          </div>
          <div class="cont-elements">
            <h3>Pin de desempenho</h3>
            <br>
            <p>
              O pin de desempenho é um pin com duplo ícone. O segundo ícone apresenta o desempenho de um ponto em
              relação a outros pontos.
            </p>

            <div class="pin__container">
              <span><img class="pin__desempenho" src="images_dm/pins/bom.svg" alt="Pin" />
                Bom
              </span>
              <span><img class="pin__desempenho" src="images_dm/pins/medio.svg" alt="Pin" />
                Médio
              </span>
              <span><img class="pin__desempenho" src="images_dm/pins/ruim.svg" alt="Pin" />
                Ruim
              </span>
            </div>
            <br>

          </div>

          <div class="cont-elements">
            <h3>Ícone de pins</h3>
            <br>
            <p>
              Os ícones que vão dentro dos pins são sempre preenchidos na cor DM_creme_00, padronizados no tamanho 20px
              X 20px.
            </p>
            <br>
            <el-row>
              <h1 style="text-align: center; margin-bottom: 20px; width: 100%">Coleção de ícones para os pins</h1>
            </el-row>
            <br>
            <div class="pin__container__icon">
              <img class="pin__icon" src="images_dm/pins/pin__icon--coroa.svg" alt="Pin" />
              <img class="pin__icon" src="images_dm/pins/pin__icon--bolinha.svg" alt="Pin" />
              <img class="pin__icon" src="images_dm/pins/pin__icon--estrela.svg" alt="Pin" />
            </div>
          </div>
          <div class="cont-elements">
            <h3>Estados do pin</h3>
            <br>
            <p>
              Os ícones que vão dentro dos pins são sempre preenchidos na cor DM_creme_00, padronizados no tamanho 20px
              X 20px.
            </p>
            <br>
            <div class="estados__pin">
              <div>
                <h3>Pin ativo</h3>
                <div>
                  <img class="pin__medio" src="images_dm/pins/azul/pin_basico_azul.svg" alt="Pin" />
                </div>

                <p>A cor do pin é pré-determinada em cada caso de uso.</p>
              </div>
              <div>
                <h3>Pin hover</h3>
                <div>
                  <img class="pin__hover" src="images_dm/pins/pin__hover.svg" alt="Pin" />
                </div>
                <p>Pin não muda de cor e barra do hover acompanha cor do pin. <br><br>
                  Hover aparece conforme o melhor espaço na tela, seja esquerda, direita ou centralizado.
                </p>
              </div>

              <div>
                <h3>Pin clicado</h3>
                <div>
                  <img class="pin__medio" src="images_dm/pins/rosa/pin_basico_rosa.svg" alt="Pin" />
                </div>
                <p>No estado de click o pin é sempre rosa.</p>
              </div>
            </div>
          </div>


          <div class="cont-elements">
            <h3>Estados do pin</h3>
            <br>
            <p>
              Para melhor acessibilidade de aplicações, esta sessão disponibiliza os pins acima já componentizados para
              a utilização imediata.
            </p>
            <br>
            <p>O pin por padrão vem com todas as opções ativas, sendo necessário o designer configurá-lo conforme o caso
              de uso.</p>
            <br>
            <div class="estados__pin--mestre">
              <div>
                <h3>Pin mestre</h3>
                <div>

                  <dm-pin>
                    <dm-pin-background>
                      <dm-pin-conteudo>
                        <h4>Informação primária</h4>
                        <p>Informação secundária</p>
                      </dm-pin-conteudo>
                      <dm-pin-footer><dm-pin-arrow /></dm-pin-footer>
                    </dm-pin-background>
                    <dm-pin-img type="pin_coroa_azul_bom" />
                  </dm-pin>

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

      pinsInfos: [
        [
          'pin_basico_azul',
          'pin_coroa_azul',
          'pin_basico_azul_bom',
          'pin_coroa_azul_bom',
          'pin_basico_azul_ruim',
          'pin_coroa_azul_medio',
          'pin_basico_azul_medio',
          'pin_coroa_azul_ruim'
        ],
        [
          'pin_basico_rosa',
          'pin_coroa_rosa',
          'pin_basico_rosa',
          'pin_coroa_rosa_bom',
          'pin_basico_rosa_medio',
          'pin_coroa_rosa_bom',
          'pin_basico_rosa_ruim',
          'pin_coroa_rosa_ruim'
        ],
        [
          'pin_basico_amarelo',
          'pin_coroa_amarelo',
          'pin_basico_amarelo_bom',
          'pin_coroa_amarelo_bom',
          'pin_basico_amarelo_medio',
          'pin_coroa_amarelo_bom',
          'pin_basico_amarelo_medio',
          'pin_coroa_amarelo_bom'
        ]
      ]
    };
  },
};
</script>

<style scoped>
.pins-tags {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

.pin-amostra {
  cursor: default;
}
</style>