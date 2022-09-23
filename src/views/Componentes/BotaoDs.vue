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
            <!--   <h1>Botão primário</h1>
            <p class="body_03">
              O botão primário é o que tem a maior ênfase na tela. É destinado à
              ação essencial do usuário para executar a tarefa principal da
              página. Possui quatro estados diferentes: ativo, hover, click e
              bloqueado. Também possui dois tamanhos: o padrão, mais utilizado;
              e o grande, para casos onde é necessário ainda mais destaque na
              página, por exemplo na tela de login.
            </p> -->
            <br />
          </div>
          <div
            class="container-elementos"
            v-for="(btnVfor, index) in btnConteudos"
            :key="index"
          >
            <!-- Tipo do botão: Principal/Secundario/Bloquado -->
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
                  <button :class="btnVfor.class">
                    {{ btnGrid.botaos[0].btnText }}
                  </button>
                  <button :class="btnVfor.classBig">
                    {{ btnGrid.botaos[0].btnText }}
                  </button>
                </div>

                <br />
              </el-col>
            </el-row>
            <el-col :span="24">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver códigos" name="3">
                  <div class="codigos">
                    <div
                      v-for="(style, index) in btnVfor.stringHTML"
                      :key="index"
                    >
                      <h6>HTML</h6>
                      {{ style.html }}
                    </div>
                    <div>
                      <h6>CSS:</h6>
                      <p
                        v-for="(style, index) in btnVfor.stringCSS"
                        :key="index"
                      >
                        {{ style.css }}
                      </p>
                    </div>
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
          title: "Botão padrão",
          class: "btn-primary",
          classBig: "btn-primary btn-big",
          gridButtons: [
            /* Primeiro */
            {
              botaos: [
                {
                  status: "Ativo",
                  btnText: "Botão Primario",

                  token: "body_02",
                  cor: "dm_creme_00",
                  alinhamento: "centralizado",
                },
                {
                  status: "Ativo",
                  btnText: "Texto do Botão",
                  uso: "Quando o botão está disponível na tela para ser clicado.",
                  token: "body_02",
                  cor: "dm_creme_00",
                  alinhamento: "centralizado",
                },
              ],
            },
          ],

          stringHTML: [{ html: '<button class="btn-primary">...<button> ' }],
          stringCSS: [
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
        /* Segundo */
        {
          content:
            "O botão secundário é destinado à ações que tem menor importância em relação à ação principal da página ou em páginas que contenham mais de uma ação primária. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Possui  também dois tamanhos: o padrão, mais utilizado; e o grande, para casos onde é necessário ainda mais destaque na página.",
          title: "Botão secudário",
          class: "btn-secondary",
          classBig: "btn-secondary btn-big",
          gridButtons: [
            {
              botaos: [
                {
                  status: "Ativo",
                  btnText: "Botão Secundário",

                  token: "body_02",
                  cor: "dm_creme_00",
                  alinhamento: "centralizado",
                },
              ],
            },
          ],
          stringHTML: [{ html: "xxx " }],
          stringCSS: [{ css: "xxx" }],
        },
        /* Terceiro */
        {
          content:
            "O botão terciário é usado em ações de pouca importância e não deve ser o único botão da página. Geralmente guia para elementos externos ao sistema. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Ele só possui o tamanho padrão.",
          title: "Botão Terciário",
          class: "btn-tertiary",
          classBig: "btn-tertiary btn-big",
          gridButtons: [
            {
              botaos: [
                {
                  status: "Ativo",
                  btnText: "Botão Secundário",
                  token: "body_02",
                  cor: "dm_creme_00",
                  alinhamento: "centralizado",
                },
              ],
            },
          ],
          stringHTML: [{ html: "xxx" }],
          stringCSS: [{ css: "xxx" }],
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
  grid-template-columns: 1fr 1fr 1fr;
}

.tooltip {
  position: absolute;
  border: 1px solid var(--dm_azul_02);
  background: var(--dm_creme_02);
  border-radius: 20px;
  width: 10px;
  top: -2px;
  margin-left: 4px;
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

/* Estilos de componentes */
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
  border: none;
  height: 35px;
  cursor: pointer;
}
.btn-primary:focus {
  background: var(--dm_amarelo_00);
}
.btn-primary:hover {
  background: var(--dm_azul_02);
  transition: 0.2s;
}
.btn-secondary {
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  font-family: "Rotobo", sans-serif;
  background: var(--dm_creme_00);
  color: var(--dm_azul_00);
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  border: 2px solid var(--dm_azul_00);
  height: 35px;
  cursor: pointer;
}
.btn-secondary:focus {
  border-color: var(--dm_amarelo_00);
  color: var(--dm_amarelo_00);
}
.btn-secondary:hover {
  background: var(--dm_azul_02);
  transition: 0.2s;
}

.btn-tertiary {
  font-family: "Rotobo", sans-serif;
  color: var(--dm_azul_00);
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background: none;
  text-decoration: underline;
}
.btn-tertiary:focus {
  color: var(--dm_amarelo_00);
}
.btn-tertiary:hover {
  color: var(--dm_azul_02);
  transition: 0.2s;
}

.btn-big {
  height: 45px;
  padding: 0 20px;
}
</style>
