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
          <div>
            <h1>/Loading</h1>
            <div class="hr"></div>
            <br>
            <p>
              Barras de loading mostram o progresso de alguma operação do
              sistema que está sendo executada como download, upload ou
              processamento. São importantes para dar feedback ao usuário, um
              dos nosso princípios.
            </p>
          </div>
          <br />
          <!--  <div class="container-elementos">
            <div
              v-loading="true"
              element-loading-text="Loading..."
              element-loading-spinner="el-icon-loading"
            >
              <h1>Mateus</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus dolores cum corrupti neque nisi, dolorum similique
                odio assumenda quibusdam suscipit, eaque, aut et molestias
                maxime repellat debitis quis consectetur voluptate!
              </p>
            </div>
          </div> -->
        </div>

        <div class="container-elementos">
          <el-progress
            v-for="(porcentagens, index) in colors"
            :key="index"
            :stroke-width="14"
            :percentage="porcentagens.percentage"
            :color="porcentagens.color"
            :format="format"
          />

          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver" name="1">
              <div class="html_codigos_blue">
                <span
                  >&#60;el-progress :stroke-width=<span roxo>"14</span>"
                  :percentage=<span roxo>"100"</span> :format=<span roxo
                    >"format"/
                  </span>
                  &#62;
                </span>
                <br />
                <span
                  >&#60;el-progress :stroke-width=<span roxo>"14</span>"
                  :percentage=<span roxo>"20"</span>/&#62;</span
                ><br />
                <span
                  >&#60;el-progress :stroke-width=<span roxo>"14</span>"
                  :percentage=<span roxo> "60" </span>
                  &#62;/
                </span>
                <br />
                <span
                  >&#60;el-progress :stroke-width=<span roxo>"14</span>"
                  :percentage=<span roxo> "50" </span>
                  &#62;/
                </span>
                <br />
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="container-elementos">
          <div class="cont--el-prograss">
            <el-progress
              v-for="(porcentagens, index) in colors"
              :key="index"
              type="circle"
              :percentage="porcentagens.percentage"
              :color="porcentagens.color"
            />
          </div>
          <br />

          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="ver" name="1">
                <div class="html_codigos_blue">
                  <span
                    >&#60;el-progress :percentage=<span roxo>"10"</span>
                    :color=<span roxo>"colors"</span>/&#62;</span
                  ><br />
                  <span
                    >&#60;el-progress :percentage=<span roxo>"30"</span>
                    :color=<span roxo>"colors"</span>/&#62;</span
                  ><br />
                  <span
                    >&#60;el-progress :percentage=<span roxo>"70"</span>
                    :color=<span roxo>"colors"</span>/&#62;</span
                  ><br />
                  <span
                    >&#60;el-progress :percentage=<span roxo>"100"</span>
                    :color=<span roxo>"colors"</span>/&#62;</span
                  ><br />
                </div>
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
  name: "LoadingDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Loading",
      btnAtivo: { cores: "text-decoration: underline" },
      colors: [
        { color: "var(--dm_vermelho_00)", percentage: 25 },
        { color: "var(--dm_laranja_00)", percentage: 50 },
        { color: "var(--dm_amarelo_00)", percentage: 75 },
        { color: "var(--dm_verde_00)", percentage: 100 },
      ],
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style scoped>
.cont--el-prograss {
  display: flex;
  justify-content: space-between;
}
</style>
