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
            <h1>/Cards</h1>
            <hr />
            <br />
            <p>
              Cards permitem a visualização das principais informações de modo
              sintético e rápido. Eles podem ser estáticos ou clicáveis,
              revelando mais detalhes após interação.
            </p>
          </div>
          <br />
          <div class="container-elementos">
            <div class="container-grid">
              <!-- Cards clicáveis -->
              <span>
                <h4>Cards clicáveis</h4>
                <br>
                <div class="dm-card dm-card--clicavel"><h4>Mercantil</h4></div>
              </span>
              <!-- Cards estático -->
              <span>
                <h4>Cards estático</h4>
                <br>
                <div class="dm-card dm-card--estatico">
                  <h4>Renda média</h4>
                </div>
              </span>
              <!-- Card Romaneio -->
              <span>
                <h4>Card Romaneio</h4>
                <br>
                <div class="dm-card dm-card--romaneio">
                  <div class="dm-card__barra" />
                  <div class="dm-card--content">
                    <h4>Romaneio 01</h4>
                    <div>Ocupação: 40%</div>
                    <div>Peso: 1294 kg</div>
                    <div>Volumes: 40%</div>
                  </div>
                </div>
              </span>
            </div>

            <br />
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="ver" name="1">
                <span class="html_codigos_blue">
                  <span green>&#60;!-- card clicável --&#62;</span>
                  <br />
                  &#60;<span tagColor>div</span> class=<span roxo
                    >"dm-card dm-card--clicavel"</span
                  >&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>h4</span>&#62;<span black
                        >Mercantil</span
                      >&#60;/<span tagColor>h4</span>&#62;
                      <br />
                    </div>
                  </div>
                  &#60;/<span tagColor>div</span>&#62;
                </span>
                <br />

                <br />
                <span class="html_codigos_blue">
                  <span green>&#60;!-- card estático --&#62;</span>
                  <br />
                  &#60;<span tagColor>div</span> class=<span roxo
                    >"dm-card dm-card--estatico"</span
                  >&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>h4</span>&#62;<span black
                        >Renda média</span
                      >&#60;/<span tagColor>h4</span>&#62;
                      <br />
                    </div>
                  </div>
                  &#60;/<span tagColor>div</span>&#62;
                </span>
                <br />

                <br />
                <span class="html_codigos_blue">
                  <span green>&#60;!-- card romaneio --&#62;</span>
                  <br />
                  &#60;<span tagColor>div</span> class=<span roxo
                    >"dm-card dm-card--romaneio"</span
                  >&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>div</span> class=<span roxo
                        >"dm-card__barra"</span
                      >/&#62;<br />
                      &#60;<span tagColor>div</span> class=<span roxo
                        >"dm-card--content"</span
                      >&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>h4</span>&#62;<span black
                            >Romaneio 01</span
                          >&#60;/<span tagColor>h4</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black
                            >Ocupação: 40%</span
                          >&#60;/<span tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black
                            >Peso: 1294 kg</span
                          >&#60;/<span tagColor>div</span>&#62;
                          <br />
                          &#60;<span tagColor>div</span>&#62;<span black
                            >Volumes: 40%</span
                          >&#60;/<span tagColor>div</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>div</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>div</span>&#62;
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
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CardsDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Cards",
      btnAtivo: { cores: "text-decoration: underline" },
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
.dm-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 10px 15px;
  max-width: 250px;
  min-height: 100px;
  height: max-content;
  border: 2px solid var(--dm_azul_00);
  color: var(--dm_azul_00);
  background: var(--dm_creme_02);
}

.dm-card--clicavel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 10px 15px;
  max-width: 250px;
  min-height: 100px;
  height: max-content;
  border: 2px solid var(--dm_azul_00);
  color: var(--dm_azul_00);
  cursor: pointer;
  transition: 0.1s;
}
.dm-card--clicavel div {
  font-size: 16px;
}
.dm-card--clicavel:hover {
  border: 2px solid var(--dm_azul_02);
  color: var(--dm_azul_02);
  background: var(--dm_creme_00);
  transition: 0.1s;
}
.card--clicavel:focus {
  border: 2px solid var(--dm_amarelo_00);
}
.card--estatico {
  border: 2px solid var(--dm_cinza_03);
  color: var(--dm_cinza_01);
}
.dm-card--romaneio {
  flex-direction: row;
  padding: 0;
  border: none;
  display: flex;
  height: max-content;
  color: var(--dm_preto_00);
  padding: 0;
}
.dm-card__barra {
  width: 12px;
  background: var(--dm_azul_00);
  height: 100px;
  border-radius: 6px 0 0 6px;
}
.dm-card--content {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-style: solid;
  padding: 6px 30px 6px 12px;
  border-color: var(--dm_cinza_03);
  border-width: 2px 2px 2px 0;
  border-radius: 0 6px 6px 0;
}
</style>
