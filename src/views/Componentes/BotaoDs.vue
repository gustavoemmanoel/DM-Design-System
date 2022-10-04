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
          <div>
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

            <br />
          </div>
          <div
            class="container-elementos"
            v-for="(btnVfor, index) in btnConteudos"
            :key="index"
          >
            <h5 style="position: relative">
              {{ btnVfor.title }}
              <el-popover
                placement="top-start"
                :width="700"
                trigger="hover"
                :content="btnVfor.content"
              >
                <template #reference>
                  <el-button size="small" class="tooltip">?</el-button>
                </template>
              </el-popover>
            </h5>

            <el-row>
              <el-col
                v-for="(btnGrid, index) in btnVfor.gridButtons"
                :key="index"
                class="cardsBtn"
              >
                <br />
                <div class="botoes">
                  <el-button :type="btnGrid.botaos.type">
                    {{ btnGrid.botaos.btnText }}
                  </el-button>

                  <el-button :type="btnGrid.botaos.typeLarger">
                    {{ btnGrid.botaos.btnText }}
                  </el-button>
                </div>

                <br />
              </el-col>
            </el-row>
            <el-col :span="24">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver códigos" name="3">
                  <div class="codigos">
                    <h6>HTML</h6>
                    <div class="htmlColors">&lt;el-row&gt;</div>
                    <div
                      v-for="(style, index) in btnVfor.stringHTML"
                      :key="index"
                    >
                      <div style="margin-left: 12px">{{ style.html }}</div>
                    </div>
                    <div class="htmlColors">&lt;/el-row&gt;</div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </div>
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
      btnConteudos: [
        {
          content:
            "O botão primário é o que tem a maior ênfase na tela. É destinado à ação essencial do usuário para executar a tarefa principal da página. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Também possui dois tamanhos: o padrão, mais utilizado; e o grande, para casos onde é necessário ainda mais destaque na página, por exemplo na tela de login.",
          title: "Botão primário",
          gridButtons: [
            /* Primeiro */
            {
              botaos: {
                btnText: "Botão Primário",
                type: "primario",
                typeLarger: "primario-larger",
                uso: "Quando o botão está disponível na tela para ser clicado.",
              },
            },
          ],

          stringHTML: [
            { html: "<el-button>Botão primário</el-button>" },
            {
              html: '<el-button type="primary-larger">Botão primário Grande</el-button>',
            },
          ],
        },
        /* Segundo */
        {
          content:
            "O botão secundário é destinado à ações que tem menor importância em relação à ação principal da página ou em páginas que contenham mais de uma ação primária. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Possui  também dois tamanhos: o padrão, mais utilizado; e o grande, para casos onde é necessário ainda mais destaque na página.",
          title: "Botão secundário",

          gridButtons: [
            {
              botaos: {
                btnText: "Botão secundário",
                type: "secundario",
                typeLarger: "secundario-larger",
                token: "body_02",
                cor: "dm_creme_00",
                alinhamento: "centralizado",
              },
            },
          ],
          stringHTML: [
            {
              html: '<el-button type="secundario">Botão secundário</el-button>',
            },
            {
              html: '<el-button type="secundario-larger">Botão secundário Grande</el-button>',
            },
          ],
        },
        /* Terceiro */
        {
          content:
            "O botão terciário é usado em ações de pouca importância e não deve ser o único botão da página. Geralmente guia para elementos externos ao sistema. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Ele só possui o tamanho padrão.",
          title: "Botão terciário",
          class: "btn-tertiary",
          classBig: "btn-tertiary btn-big",
          gridButtons: [
            {
              botaos: {
                type: "terciario",
                typeLarger: "terciario-larger",
                btnText: "Botão terciário",
                token: "body_02",
                cor: "dm_creme_00",
                alinhamento: "centralizado",
              },
            },
          ],
          stringHTML: [
            {
              html: '<el-button type="terciario">Botão terciário</el-button>',
            },
            {
              html: '<el-button type="terciario-larger">Botão terciário</el-button>',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardsBtn {
  border-radius: 6px;
  width: 50px;
}
.botoes {
  display: flex;
  gap: 12px;
}
.codigos {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
}

.tooltip {
  position: absolute;
  border: 1px solid var(--dm_azul_02);
  background: var(--dm_creme_02);
  border-radius: 20px;
  width: 24px !important;
  margin-left: 6px;
  color: var(--dm_azul_02);
}

.testtooltip:focus,
.tooltip:hover {
  color: var(--dm_azul_02);
  border-color: var(--dm_azul_02);
}

.container-elementos {
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  background: var(--dm_creme_01);
  border-radius: 6px;
}

.el-collapse {
  --el-collapse-header-bg-color: none;
  --el-collapse-content-bg-color: none;
}

.htmlColors {
  color: var(--dm_azul_01);
}
</style>
