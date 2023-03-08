<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div class="containerInterno">
          <div>
            <h1>/Legenda</h1>
            <hr>
            <br>
          </div>
          <div class="cont-elements">
            <p>
              A legenda é um quadro que contém os elementos gráficos presentes
              no mapa, representados através de cores, ícones, hachuras, pontos
              e linhas e suas respectivas descrições.
            </p>
            <br>
            <el-row>
              <el-col :span="8" class="another" id="blocked">
                <h5>Exemplo</h5>
                <div id="transparent-div" class="transparent" @click="takeoff(0)" />
                <el-collapse class="legenda-dm" legenda>
                  <el-collapse-item title="Legenda">

                    <!-- Coropléticos com degradê -->
                    <div class="legenda">
                      <p class="body_05 body_05--title">
                        /Coropléticos com degradê
                      </p>
                      <div>
                        <div class="degrade degrade--1" />
                        <p class="detail_02">Intervalo</p>
                      </div>
                      <div>
                        <div class="degrade degrade--2" />
                        <p class="detail_02">Intervalo</p>
                      </div>
                      <div>
                        <div class="degrade degrade--3" />
                        <p class="detail_02">Intervalo</p>
                      </div>
                      <div>
                        <div class="degrade degrade--4" />
                        <p class="detail_02">Intervalo</p>
                      </div>
                      <div>
                        <div class="degrade degrade--5" />
                        <p class="detail_02">Intervalo</p>
                      </div>
                      <div>
                        <div class="degrade degrade--6" />
                        <p class="detail_02">Intervalo</p>
                      </div>
                    </div>
                    <hr />
                    <!-- Geometrias -->
                    <div class="legenda">
                      <p class="body_05 body_05--title">/Geometrias</p>
                      <div>
                        <div class="geometrias geometrias--1" />
                        <p class="detail_02">Nome da geometria</p>
                      </div>
                      <div>
                        <div class="geometrias geometrias--2" />
                        <p class="detail_02">Nome da geometria</p>
                      </div>
                      <div>
                        <div class="geometrias geometrias--3" />
                        <p class="detail_02">Nome da geometria</p>
                      </div>
                      <div>
                        <div class="geometrias geometrias--4" />
                        <p class="detail_02">Nome da geometria</p>
                      </div>
                      <div>
                        <div class="geometrias geometrias--5" />
                        <p class="detail_02">Nome da geometria</p>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </el-col>
              <el-col :span="8" :offset="1">
                <h5>Padrão</h5>
                <!-- Início Legenda Design System -->
                <el-collapse class="legenda-dm" legenda>
                  <el-collapse-item title="Legenda">
                    <div>
                      <p class="body_04 body_05--title">/Project Title</p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum exercitationem id hic.
                    </div>
                    <hr />
                    <p class="body_04 body_05--title">/Project Title</p>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat unde deserunt nostrum suscipit ut exercitationem
                      id hic sit quaerat iquo quod porro
                      autem nemo iste. Laboriosam, mollitia.
                    </div>
                  </el-collapse-item>
                </el-collapse>

                <!-- Fim Legenda Design System -->
              </el-col>
              <el-col :span="6" :offset="1" class="another" id="blocked">
                <h5>Exemplo</h5>
                <!-- Início Legenda Design System -->
                <div id="transparent-div" />
                <div class="block-row">
                  <el-collapse class="legenda-dm" legenda>
                    <el-collapse-item title="Legenda">
                      <div class="legenda legenda-margin">
                        <p class="body_05 body_05--title">/Pins</p>
                        <div>
                          <img class="legenda__pin" src="images_dm/pins/pinRosa.svg" alt="pinRosa" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <img class="legenda__pin" src="images_dm/pins/pinAzul.svg" alt="pinRosa" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <img class="legenda__pin" src="images_dm/pins/pinLilas.svg" alt="pinRosa" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <img class="legenda__pin" src="images_dm/pins/pinVerde.svg" alt="pinRosa" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <img class="legenda__pin" src="images_dm/pins/pinLaranja.svg" alt="pinRosa" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <img class="legenda__pin" src="images_dm/pins/pinAmarelo.svg" alt="pinRosa" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                      </div>
                      <hr />
                      <div class="legenda">
                        <p class="body_05 body_05--title">/Linhas</p>
                        <div>
                          <div class="linha-continua" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <div class="linha-tracejada" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                        <div>
                          <div class="linha-bolinha" />
                          <p class="detail_02">Pin rosa</p>
                        </div>
                      </div>
                    </el-collapse-item>
                  </el-collapse>

                </div>
              </el-col>
              <!-- Fim Legenda Design System -->
            </el-row>
            <br />

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>el-collapse</span> class=<span roxo>"legenda-dm"</span>
                  legenda v-model=<span roxo>"activeNames"</span> @change=<span roxo>"handleChange"</span>&#62;

                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-collapse-item</span> title=<span roxo>"Legenda"</span>&#62; <br />
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>div</span>&#62; <br />
                          &#60;<span tagColor>p</span> class=<span roxo>"body_05 body_05--title"</span>&#62;<span
                            black>/Project Title</span>&#60;/<span tagColor>p</span>&#62;
                          <div class="border-left">
                            <div recuo black>
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Repellat unde deserunt nostrum suscipit ut
                              exercitationem id hic sit quaerat illo libero, molestias
                              quo quod porro autem nemo iste. Laboriosam, mollitia.
                            </div>
                          </div>
                          &#60;/<span tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>hr</span>&#62;
                          <br />
                          &#60;<span tagColor>p</span> class=<span roxo>"body_05 body_05--title"</span>&#62;<span
                            black>/Project Title</span>&#60;/<span tagColor>p</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;
                          <div class="border-left">
                            <div recuo black>
                              Lorem, ipsum dolor sit amet consectetur adipisicing
                              elit. Repellat unde deserunt nostrum suscipit ut
                              exercitationem id hic sit quaerat illo libero, molestias
                              quo quod porro autem nemo iste. Laboriosam, mollitia.
                            </div>
                          </div>
                          &#60;/<span tagColor>div</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-collapse-item</span>&#62;
                    </div>
                  </div>

                  &#60;/<span tagColor>el-collapse</span>&#62;
                </div>
              </el-collapse-item></el-collapse>
          </div>
        </div>
      </el-main>
    </el-container>

  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "LegendaDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Legenda",
    };
  },
  methods: {
    takeoff(index) {

      const a = document.getElementsByClassName('another')[index]
      a.removeAttribute('id', 'blocked')

      const b = document.getElementsByClassName('transparent')[index]
      b.removeAttribute('id', 'transparent-div')
    }
  }
};
</script>


<style>
#transparent-div {
  position: relative;
  width: 100%;
  z-index: 1;
  top: 0;
  height: 100%;
}

#blocked .legenda-dm .el-collapse-item__wrap {
  display: block !important;
}
</style>
<style scoped>
[legenda] hr {
  border-color: var(--dm_creme_01);
  margin: 16px 0;
}

.another {
  height: 490px;
}

.legenda-margin div {
  margin-bottom: 6px;
}

.legenda div {
  display: flex;
  align-items: center;
}

.legenda__pin {
  width: 18px;
  margin-right: 8px;
}

.linha-continua {
  border-top: 2px;
  border-color: var(--dm_rosa_00);
  border-style: solid;
  width: 25px;
  margin-right: 8px;
}

.linha-tracejada {
  border-top: 2px;
  border-color: var(--dm_preto_00);
  border-style: dashed;
  width: 25px;
  margin-right: 8px;
}

.linha-bolinha {
  border-color: var(--dm_amarelo_00);
  border-style: dotted;
  width: 25px;
  margin-right: 8px;
  border-width: 5px 0 0 0;
}

.degrade,
.geometrias {
  width: 30px;
  height: 25px;
  margin-right: 8px;
}

.degrade--1 {
  background: var(--dm_verde1_C06);
}

.degrade--2 {
  background: var(--dm_verde2_C06);
}

.degrade--3 {
  background: var(--dm_verde3_C06);
}

.degrade--4 {
  background: var(--dm_verde4_C06);
}

.degrade--5 {
  background: var(--dm_verde5_C06);
}

.degrade--6 {
  background: var(--dm_verde6_C06);
}

.geometrias--1 {
  background: var(--dm_azul_00);
}

.geometrias--2 {
  background: var(--dm_lilas_00);
}

.geometrias--3 {
  background: var(--dm_rosa_00);
}

.geometrias--4 {
  background: var(--dm_laranja_00);
}

.geometrias--5 {
  background: var(--dm_amarelo_00);
}
</style>


