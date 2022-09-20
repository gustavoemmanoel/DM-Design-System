<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col class="container" :offset="1" :span="15">
        <div class="containerInterno">
          <div style="margin: 0 0 20px 0">
            <div>
              <div>
                <h1>/Botões</h1>
                <div class="hr"></div>
                <p>
                  Botões permitem que os usuários executem ações dentro da
                  plataforma ou os levam para outras páginas. Eles são
                  desenhados de acordo com uma hierarquia de importância dentro
                  das tarefas da página. Os botões tem alturas definidas, mas as
                  larguras não podem ser modificadas de acordo com o espaço
                  destinado no grid.
                </p>
              </div>
            </div>
            <h1>Botão primário</h1>
            <p class="body_03">
              O botão primário é o que tem a maior ênfase na tela. É destinado à
              ação essencial do usuário para executar a tarefa principal da
              página. Possui quatro estados diferentes: ativo, hover, click e
              bloqueado. Também possui dois tamanhos: o padrão, mais utilizado;
              e o grande, para casos onde é necessário ainda mais destaque na
              página, por exemplo na tela de login.
            </p>
            <div class="flex">
              <h5>Botão padrão</h5>
              <p class="detail_02">(altura 35px)</p>
            </div>
          </div>
          <el-row :gutter="20">
            <el-col
              :span="7"
              class="cont_btn"
              v-for="(btnVfor, index) in btnConteudos.botaoPadrao"
              :key="index"
            >
              <h6>{{ btnConteudos.status[0] }}</h6>
              <p>{{ btnVfor.uso }}</p>
              <br />
              <button class="btn-primary">{{ btnConteudos.status[4] }}</button>
              <br />
              <br />
              <h6>Texto</h6>
              <div class="flex">
                Tipografia:
                {{ btnVfor.texto.token }}
              </div>
              <div class="flex">
                Cor do texto:
                {{ btnVfor.texto.cor }}
              </div>
              <div class="flex">
                Alinhamento:
                {{ btnVfor.texto.alinhamento }}
              </div>
              <br />
              <div>
                <h6>CSS:</h6>
                <p v-for="(style, index) in btnVfor.sombra.css" :key="index">
                  {{ style.css }}
                </p>
              </div>

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Efficiency" name="3">
                  <div>mateus</div>
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col class="sub-nav" :span="5">
        <p>Cores principais da marca</p>
        <p>Tons pretos</p>
        <p>Tons creme</p>
        <p>Cores secundárias da marca</p>
        <p>Sub tons de cores da marca</p>
        <p>Cores de contraste</p>
        <p>Cores semânticas</p>
        <p>Paleta de uso em mapa</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "BotaoDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Botão",

      btnAtivo: { cores: "text-decoration: underline" },
      btnConteudos: {
        status: ["Ativo", "Hover", "Click", "Bloquado", "Texto do Botão"],

        botaoPadrao: [
          {
            uso: "Quando o botão está disponível na tela para ser clicado.",
            texto: {
              token: "body_02",
              cor: "dm_creme_00",
              alinhamento: "centralizado",
            },
            sombra: {
              css: [
                { css: "box-shadow: 0 3px 6px var(--dm_cinza_03);" },
                { css: 'font-family: "Rotobo", sans-serif;' },
                { css: "background: var(--dm_azul_00);" },
                { css: "color: var(--dm_creme_00);" },
                { css: "border-radius: 6px;" },
                { css: "transition: 0.2s;" },
                { css: "font-weight: 500;" },
                { css: "font-size: 16px;" },
                { css: "padding: 0 15px;" },
                { css: "cursor: pointer;" },
                { css: "border: none;" },
                { css: "height: 35px;" },
                { css: "}" },
              ],
            },
          },
          {
            uso: "Quando o botão está disponível na tela para ser clicado.",
            texto: {
              token: "body_02",
              cor: "dm_creme_00",
              alinhamento: "centralizado",
            },
            sombra: {
              css: [
                { css: "box-shadow: 0 3px 6px var(--dm_cinza_03);" },
                { css: 'font-family: "Rotobo", sans-serif;' },
                { css: "background: var(--dm_azul_00);" },
                { css: "color: var(--dm_creme_00);" },
                { css: "border-radius: 6px;" },
                { css: "transition: 0.2s;" },
                { css: "font-weight: 500;" },
                { css: "font-size: 16px;" },
                { css: "padding: 0 15px;" },
                { css: "cursor: pointer;" },
                { css: "border: none;" },
                { css: "height: 35px;" },
                { css: "}" },
              ],
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.cont_btn {
  border-radius: 6px;
  padding: 10px;
}
.btn-primary {
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  font-family: "Rotobo", sans-serif;
  background: var(--dm_azul_00);
  color: var(--dm_creme_00);
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  cursor: pointer;
  border: none;
  height: 35px;
}
.btn-primary:focus {
  background: #ffa400;
}
.btn-primary:hover {
  background: #448dff;
  transition: 0.2s;
}
</style>
