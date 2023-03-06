<template>
  <div>
    <el-container>
      <el-header>
        <HeaderDs :headerTitle="headerTitle" />
      </el-header>
      <el-container>
        <el-main>
          <h1>/Calendário</h1>
          <hr>
          <br>

          <div class="containerInterno">
            <div class="cont-elements">
              <h3>Calendário</h3>
              <br />
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
              <br />
              <el-date-picker class="calendario" v-model="value2" type="date" placeholder="Pick a day"
                :prefix-icon="customPrefix" :size="size" />
              <!--  -->

              <br>
              <br>

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver código">
                  <div class="html_codigos">
                    &#60;<span tagColor>template</span> &#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>el-date-picker</span>
                        <div class="border-left">
                          <div recuo><span attributeColor>class</span>=<span roxo>"calendario"</span> <br><span
                              attributeColor>v-model</span>=<span roxo>"value2"</span><br>
                            <span attributeColor>type</span>=<span roxo>"date"</span> <br> <span
                              attributeColor>placeholder</span>=<span roxo>"Pick
                              a day"</span><br>
                            <span attributeColor>:prefix-icon</span>=<span roxo>"customPrefix"</span><br> <span
                              attributeColor>:size</span>=<span roxo>"size"</span>
                          </div>
                        </div>
                        <span tagColor></span>/&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62;
                  </div>
                  <br>
                  <br>
                  <div class="html_codigos">
                    &#60;<span tagColor>script</span>&#62;
                    <br>
                    <span roxo>import</span> { h, shallowRef } <span roxo>from</span> <span green>'vue'</span>
                    <br>
                    <span roxo>export default</span> {
                    <div class="border-left">
                      <div recuo>
                        <span yellow>data</span>() {
                        <div class="border-left">
                          <div recuo>
                            <span roxo>return</span> {
                            customPrefix: <span yellow>shallowRef</span>({
                            <div class="border-left">
                              <div recuo>
                                <span yellow>render</span>() {
                                <div class="border-left">
                                  <div recuo><span roxo>return</span> <span yellow>h</span>(<span
                                      brown>"dm-icons-calendar"</span>, <span black>""</span>);
                                    <br>
                                    },
                                  </div>
                                </div>
                                }),
                              </div>
                            </div>
                            };
                          </div>
                        </div>
                        },
                      </div>
                    </div>
                    };

                    <br>
                    &#60;/<span tagColor>script</span>&#62;
                  </div>


                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="containerInterno">
            <div class="cont-elements">
              <h3>Intervalo de datas</h3>
              <br>
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
              <br>
              <el-date-picker v-model="value1" type="daterange" range-separator="-" start-placeholder="Início"
                end-placeholder="Término" :prefix-icon="customPrefix" :size="size" />

              <br>
              <br>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver código">
                  <div class="html_codigos">
                    &#60;<span tagColor>template</span> &#62;
                    <div class="border-left">
                      <div recuo>
                        <span tagColor>&#60;el-date-picker</span>
                        <div class="border-left">
                          <div recuo>
                            v-model=<span roxo>"value1"</span> <br />type=<span roxo>"daterange"</span><br />
                            range-separator=<span roxo>"-"</span> <br />start-placeholder=<span roxo>"Início"</span>
                            <br>
                            end-placeholder=<span roxo>"Término"</span><br />:prefix-icon=<span
                              roxo>"customPrefix"</span><br />
                            :size=<span roxo>"size"</span>
                          </div>
                        </div>
                        <span tagColor>/&#62;</span>
                      </div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62;
                  </div>
                  <br>
                  <div class="html_codigos">
                    &#60;<span tagColor>script</span>&#62;
                    <br>
                    <span roxo>import</span> { h, shallowRef } <span roxo>from</span> <span green>'vue'</span>
                    <br>
                    <span roxo>export default</span> {
                    <div class="border-left">
                      <div recuo>
                        <span yellow>data</span>() {
                        <div class="border-left">
                          <div recuo>
                            <span roxo>return</span> {
                            customPrefix: <span yellow>shallowRef</span>({
                            <div class="border-left">
                              <div recuo>
                                <span yellow>render</span>() {
                                <div class="border-left">
                                  <div recuo><span roxo>return</span> <span yellow>h</span>(<span
                                      brown>"dm-icons-calendar"</span>, <span black>""</span>);
                                    <br>
                                    },
                                  </div>
                                </div>
                                }),
                              </div>
                            </div>
                            };
                          </div>
                        </div>
                        },
                      </div>
                    </div>
                    };

                    <br>
                    &#60;/<span tagColor>script</span>&#62;
                  </div>


                </el-collapse-item>
              </el-collapse>
            </div>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
import { h, shallowRef } from "vue";

export default {
  name: "CalendarioDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      customPrefix: shallowRef({
        render() {
          return h("dm-icons-calendar", "");
        },
      }),
      headerTitle: "Calendário",
      value1: null,
      value2: null,
    };
  },
};



</script>
