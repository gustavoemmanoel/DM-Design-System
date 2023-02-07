<template>
  <div>
    <el-container>
      <el-header>
        <HeaderDs :headerTitle="headerTitle" />
      </el-header>
      <el-container>
        <el-aside>
          <AsideComponent :btnAtivo="btnAtivo" />
        </el-aside>

        <el-main>
          <!--  -->
          <div class="containerInterno">
            <div>
              <h1>/Calendário</h1>
              <hr />
              <br />
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
            </div>
            <br />
            <div class="container-elementos">
              <el-date-picker v-model="value1" type="daterange" range-separator="-" start-placeholder="Início"
                end-placeholder="Término" :prefix-icon="customPrefix" :size="size" />

              <br>
              <br>
              <br>
              <div class="html_codigos_blue">
                <span tagColor>&#60;el-date-picker</span>
                <div recuo>
                  v-model=<span roxo>"value1"</span> <br />type=<span roxo>"daterange"</span><br />
                  range-separator=<span roxo>"-"</span> <br />start-placeholder=<span roxo>"Início"</span>
                  <br>
                  end-placeholder=<span roxo>"Término"</span><br /> :prefix-icon=<span>"customPrefix"</span><br />
                  :size=<span roxo>"size"</span>
                </div>
                <span tagColor>/&#62;</span>
              </div>
              <br>
              <br>
              <div class="html_codigos_blue">
                <span tagColor>&#60;script&#62;</span>
                <br>
                import { h, shallowRef } from 'vue'
                <br>
                <br>
                export default {
                <div recuo>
                  data() {
                  <div recuo>
                    return {
                    customPrefix: shallowRef({
                    <div recuo>
                      render() {
                      <div recuo>return h("dm-icons-calendar", "");
                        <br>
                        },
                      </div>
                      }),
                    </div>
                    };
                  </div>
                  },
                </div>
                };

                <br>
                <span tagColor>&#60;/script&#62;</span>
              </div>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="1">
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="containerInterno">
            <div>
              <h1>/Calendário</h1>
              <hr />
              <br />
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
            </div>
            <br />
            <div class="container-elementos">
              <el-date-picker class="calendario" v-model="value2" type="date" placeholder="Pick a day"
                :prefix-icon="customPrefix" :size="size" />
              <!--  -->

              <br>
              <br>
              <br>
              <div class="html_codigos_blue">
                <span tagColor>&#60;el-date-picker</span>
                <div recuo>class=<span roxo>"calendario"</span> <br>v-model=<span roxo>"value2"</span><br> type=<span
                    roxo>"date"</span> <br> placeholder=<span roxo>"Pick a day"</span><br> :prefix-icon=<span
                    roxo>"customPrefix"</span><br> :size=<span roxo>"size"</span> </div>
                <span tagColor>/&#62;</span>
              </div>
              <br>
              <br>
              <div class="html_codigos_blue">
                <span tagColor>&#60;script&#62;</span>
                <br>
                import { h, shallowRef } from 'vue'
                <br>
                <br>
                export default {
                <div recuo>
                  data() {
                  <div recuo>
                    return {
                    customPrefix: shallowRef({
                    <div recuo>
                      render() {
                      <div recuo>return h("dm-icons-calendar", "");
                        <br>
                        },
                      </div>
                      }),
                    </div>
                    };
                  </div>
                  },
                </div>
                };

                <br>
                <span tagColor>&#60;/script&#62;</span>
              </div>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="1"> </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";
import { h, shallowRef } from "vue";

export default {
  name: "CalendarioDs",
  components: {
    AsideComponent,
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

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};



</script>
