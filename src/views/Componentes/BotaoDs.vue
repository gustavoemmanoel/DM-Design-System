<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>

      <el-main>

        <h1>/Botões</h1>
        <hr>
        <p>
          Botões permitem que os usuários executem ações dentro da plataforma
          ou os levam para outras páginas. Eles são desenhados de acordo com
          uma hierarquia de importância dentro das tarefas da página. Os
          botões tem alturas definidas, mas as larguras não podem ser
          modificadas de acordo com o espaço destinado no grid.
        </p>
        <br />

        <!-- Primário -->
        <div class="cont-elements">
          <h3>Botão primário</h3>
          <br />
          <p>
            O botão primário é o que tem a maior ênfase na tela. É destinado à
            ação essencial do usuário para executar a tarefa principal da
            página. Possui quatro estados diferentes: ativo, hover, click e
            bloqueado. Também possui dois tamanhos: o padrão, mais utilizado; e
            o grande, para casos onde é necessário ainda mais destaque na
            página, por exemplo na tela de login.
          </p>
          <el-row>
            <el-col v-for="(btnGrid, index) in primario.gridButtons" :key="index" class="cardsBtn">
              <br />
              <div class="botoes">
                <el-button :type="btnGrid.type">
                  {{ btnGrid.btnText }}
                </el-button>
                <el-button :type="btnGrid.larger">
                  {{ btnGrid.btnText }}
                </el-button>
              </div>
              <br />
            </el-col>
          </el-row>
          <el-col :span="24">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  <span v-for="(style, index) in primario.stringHTML" :key="index">
                    &lt;<span tagColor>el-button</span> type=<span roxo>{{
                      style.html
                    }}</span>&gt;
                    <span black>Botão</span>
                    &lt;/<span tagColor>el-button</span>&gt;
                    <br />
                  </span>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </div>

        <!-- Secundário -->

        <div class="cont-elements">
          <h3>Botão secundário</h3>
          <br />
          <p>
            O botão secundário é destinado à ações que tem menor importância em
            relação à ação principal da página ou em páginas que contenham mais
            de uma ação primária. Possui quatro estados diferentes: ativo,
            hover, click e bloqueado. Possui também dois tamanhos: o padrão,
            mais utilizado; e o grande, para casos onde é necessário ainda mais
            destaque na página.
          </p>
          <el-row>
            <el-col v-for="(btnGrid, index) in segundo.gridButtons" :key="index" class="cardsBtn">
              <br />
              <div class="botoes">
                <el-button :type="btnGrid.type">
                  {{ btnGrid.btnText }}
                </el-button>
                <el-button :type="btnGrid.larger">
                  {{ btnGrid.btnText }}
                </el-button>
              </div>
              <br />
            </el-col>
          </el-row>
          <el-col :span="24">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  <span v-for="(style, index) in segundo.stringHTML" :key="index">
                    &lt;<span tagColor>el-button</span> type=<span roxo>{{
                      style.html
                    }}</span>&gt;
                    <span black>Botão</span>
                    &lt;/<span tagColor>el-button</span>&gt;
                    <br />
                  </span>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </div>

        <!-- Terciário -->

        <div class="cont-elements">
          <h3>Botão terciário</h3>
          <br />
          <p>
            O botão terciário é usado em ações de pouca importância e não deve
            ser o único botão da página. Geralmente guia para elementos externos
            ao sistema. Possui quatro estados diferentes: ativo, hover, click e
            bloqueado. Ele só possui o tamanho padrão.
          </p>
          <el-row>
            <el-col v-for="(btnGrid, index) in terceiro.gridButtons" :key="index" class="cardsBtn">
              <br />
              <div class="botoes">
                <el-button :type="btnGrid.type">
                  {{ btnGrid.btnText }}
                </el-button>
                <el-button :type="btnGrid.larger">
                  {{ btnGrid.btnText }}
                </el-button>
              </div>
              <br />
            </el-col>
          </el-row>
          <el-col :span="24">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  <span v-for="(style, index) in terceiro.stringHTML" :key="index">
                    &lt;<span tagColor>el-button</span> type=<span roxo>{{ style.html }}</span>&gt;<span
                      black>Botão</span>&lt;/<span tagColor>el-button</span>&gt;
                    <br />
                  </span>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "BotaoDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Botão",
      primario: {
        content:
          "O botão primário é o que tem a maior ênfase na tela. É destinado à ação essencial do usuário para executar a tarefa principal da página. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Também possui dois tamanhos: o padrão, mais utilizado; e o grande, para casos onde é necessário ainda mais destaque na página, por exemplo na tela de login.",
        title: "Botão primário",
        gridButtons: [
          /* Primeiro */
          {
            btnText: "Botão Primário",
            uso: "Quando o botão está disponível na tela para ser clicado.",
            type: "primario",
            larger: "primario-larger",
          },
        ],
        stringHTML: [
          {
            html: '"primario"',
          },
          {
            html: '"primario-larger"',
          },
        ],
      },
      /* Segundo */
      segundo: {
        content:
          "O botão secundário é destinado à ações que tem menor importância em relação à ação principal da página ou em páginas que contenham mais de uma ação primária. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Possui  também dois tamanhos: o padrão, mais utilizado; e o grande, para casos onde é necessário ainda mais destaque na página.",
        title: "Botão secudário",
        gridButtons: [
          {
            btnText: "Botão Secundário",
            type: "secundario",
            larger: "secundario-larger",
          },
        ],
        stringHTML: [
          { html: '"secundario"' },
          {
            html: '"secundario-larger"',
          },
        ],
      },
      /* Terceiro */
      terceiro: {
        content:
          "O botão terciário é usado em ações de pouca importância e não deve ser o único botão da página. Geralmente guia para elementos externos ao sistema. Possui quatro estados diferentes: ativo, hover, click e bloqueado. Ele só possui o tamanho padrão.",
        title: "Botão Terciário",
        gridButtons: [
          {
            btnText: "Botão terciário",
            type: "terciario",
            larger: "terciario-larger",
          },
        ],
        stringHTML: [
          { html: '"terciario"' },
          {
            html: '"terciario-larger"',
          },
        ],
      },
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
}

.tooltip {
  position: absolute;
  border: 1px solid var(--dm_azul_02);
  background: var(--dm_creme_02);
  border-radius: 50% !important;
  margin-left: 4px;
  color: var(--dm_azul_02);
  width: 10px !important;
  height: 23px !important;
}

.testtooltip:focus,
.tooltip:hover {
  color: var(--dm_azul_02);
  border-color: var(--dm_azul_02);
}

.el-collapse {
  --el-collapse-header-bg-color: none;
  --el-collapse-content-bg-color: none;
}

* {
  outline: none;
}
</style>
