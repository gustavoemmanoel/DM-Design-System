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
          </div>
          <br />
          <div class="cont-elements">
            <p>
              Cards permitem a visualização das principais informações de modo
              sintético e rápido. Eles podem ser estáticos ou clicáveis,
              revelando mais detalhes após interação.
            </p>
            <br>
            <div class="container-grid">
              <!-- Cards clicáveis -->
              <span>
                <h4>Cards clicáveis</h4>
                <br>
                <dm-card class="dm-card--clicavel" tabindex="0">
                  <h4>Mercantil</h4>
                  <p class="body_02">R$ 555,03</p>
                </dm-card>
              </span>
              <!-- Cards estático -->
              <span>
                <h4>Cards estático</h4>
                <br>
                <dm-card class="dm-card--estatico">
                  <h4>Renda média</h4>
                  <p class="body_02">R$ 555,03</p>
                </dm-card>
              </span>
              <!-- Card Romaneio -->
              <span>
                <h4>Card Romaneio</h4>
                <br>
                <dm-card class="dm-card--romaneio">
                  <dm-card-bar class="dm_rosa_00" />
                  <dm-card-content tabindex="0">
                    <h4>Romaneio 01</h4>
                    <div>Ocupação: 40%</div>
                    <div>Peso: 1294 kg</div>
                    <div>Volumes: 40%</div>
                  </dm-card-content>
                </dm-card>
              </span>
            </div>

            <br />

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <span class="html_codigos">
                  <span green>&#60;!-- card clicável --&#62;</span>
                  <br />
                  &#60;<span tagColor>dm-card</span> class=<span roxo>"dm-card--clicavel"</span> tabindex=<span
                    roxo>"0"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>h4</span>&#62;<span black>Mercantil</span>&#60;/<span tagColor>h4</span>&#62;
                      <br>
                      &#60;<span tagColor>p</span>&#62;<span black>R$ 555,03</span>&#60;/<span tagColor>p</span>&#62;

                      <br />
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-card</span>&#62;
                </span>
                <br />

                <br />
                <span class="html_codigos">
                  <span green>&#60;!-- card estático --&#62;</span>
                  <br />
                  &#60;<span tagColor>dm-card</span> class=<span roxo>"dm-card--estatico"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>h4</span>&#62;<span black>Renda média</span>&#60;/<span tagColor>h4</span>&#62;
                      <br>
                      &#60;<span tagColor>p</span>&#62;<span black>R$ 555,03</span>&#60;/<span tagColor>p</span>&#62;
                      <br />
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-card</span>&#62;
                </span>
                <br />

                <br />
                <span class="html_codigos">
                  <span green>&#60;!-- card romaneio --&#62;</span>
                  <br />
                  &#60;<span tagColor>dm-card</span> class=<span roxo>"dm-card--romaneio"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-card-bar</span> class=<span roxo>"dm_rosa_00"</span>/&#62;<br />
                      &#60;<span tagColor>dm-card-content</span> tabindex=<span roxo>"0"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>h4</span>&#62;<span black>Romaneio 01</span>&#60;/<span
                            tagColor>h4</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black>Ocupação: 40%</span>&#60;/<span
                            tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black>Peso: 1294 kg</span>&#60;/<span
                            tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black>Volumes: 40%</span>&#60;/<span
                            tagColor>div</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-card-content</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-card</span>&#62;
                </span>

              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="cont-elements">
            <h3>Cards clicáveis</h3>
            <br>
            <p>Cards clicáveis possuem comportamento de botão. Além de apresentar as principais informações resumidas, ao
              serem clicados, podem expandir ou apresentar uma nova informação na página.</p>
            <br>
            <img style="width: 93%;" src="cards/01.svg">
            <br>
            <br>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <span class="html_codigos">
                  &#60;<span tagColor>dm-card</span> class=<span roxo>"dm-card--clicavel"</span> tabindex=<span
                    roxo>"0"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>h4</span>&#62;<span black>Mercantil</span>&#60;/<span tagColor>h4</span>&#62;
                      <br>
                      &#60;<span tagColor>p</span>&#62;<span black>R$ 555,03</span>&#60;/<span tagColor>p</span>&#62;

                      <br />
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-card</span>&#62;
                </span>
              </el-collapse-item>
            </el-collapse>

          </div>

          <div class="cont-elements">
            <h3>Cards estáticos</h3>
            <br>
            <p>Cards estáticos possuem como única funcionalidade apresentar as informações desejadas, não causando
              alterações no restante das telas.</p>
            <br>


            <div style="display: grid; grid-template-columns: 250px 250px; gap: 30px; width: max-content; margin: auto;">
              <dm-card class="dm-card--estatico">
                <h4>Renda média</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
              <dm-card class="dm-card--estatico">
                <h4>Renda média</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
              <dm-card class="dm-card--estatico">
                <h4>Renda média</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
              <dm-card class="dm-card--estatico">
                <h4>Renda média</h4>
                <p class="body_02">R$ 555,03</p>
              </dm-card>
            </div>
            <br>
            <p class="body_03">Cards estáticos apenas para visualização de informações pontuais.</p>
            <br>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <span class="html_codigos">
                  &#60;<span tagColor>dm-card</span> class=<span roxo>"dm-card--estatico"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>h4</span>&#62;<span black>Renda média</span>&#60;/<span tagColor>h4</span>&#62;
                      <br>
                      &#60;<span tagColor>p</span>&#62;<span black>R$ 555,03</span>&#60;/<span tagColor>p</span>&#62;
                      <br />
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-card</span>&#62;
                </span>
              </el-collapse-item>
            </el-collapse>

          </div>

          <div class="cont-elements">
            <h3>Cards de romaneio</h3>
            <br>
            <p>Cards de romaneios tem características especiais. Além de mostrar uma lista de informações, ao contrário
              dos estáticos que só informam uma, também podem ser clicáveis para exibir uma lista de viagens.</p>
            <br>

            <div style="display: flex; justify-content: center; width: 100%; gap: 40px;">
              <dm-card class="dm-card--romaneio">
                <dm-card-bar class="dm_rosa_00" />
                <dm-card-content tabindex="0">
                  <h4>Romaneio 01</h4>
                  <div>Ocupação: 40%</div>
                  <div>Peso: 1294 kg</div>
                  <div>Volumes: 40%</div>
                </dm-card-content>
              </dm-card>

              <dm-card class="dm-card--romaneio">
                <dm-card-bar class="dm_azul_00" />
                <dm-card-content tabindex="0">
                  <h4>Romaneio 01</h4>
                  <div>Ocupação: 40%</div>
                  <div>Peso: 1294 kg</div>
                  <div>Volumes: 40%</div>
                </dm-card-content>
              </dm-card>
              <dm-card class="dm-card--romaneio">
                <dm-card-bar class="dm_laranja_00" />
                <dm-card-content tabindex="0">
                  <h4>Romaneio 01</h4>
                  <div>Ocupação: 40%</div>
                  <div>Peso: 1294 kg</div>
                  <div>Volumes: 40%</div>
                </dm-card-content>
              </dm-card>
            </div>
            <br>
            <p>Cards de romaneio para visualização de informações pontuais e com função de botão: ao clicar nele, abre uma
              aba com todas as informações do romaneio e seus pedidos, podendo ser visualizada e editada.</p>
            <br>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <span class="html_codigos">
                  &#60;<span tagColor>dm-card</span> class=<span roxo>"dm-card--romaneio"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-card-bar</span> class=<span roxo>"dm_rosa_00"</span>/&#62;<br />
                      &#60;<span tagColor>dm-card-content</span> tabindex=<span roxo>"0"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>h4</span>&#62;<span black>Romaneio 01</span>&#60;/<span
                            tagColor>h4</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black>Ocupação: 40%</span>&#60;/<span
                            tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black>Peso: 1294 kg</span>&#60;/<span
                            tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black>Volumes: 40%</span>&#60;/<span
                            tagColor>div</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-card-content</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-card</span>&#62;
                </span>
              </el-collapse-item>
            </el-collapse>
          </div>
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
