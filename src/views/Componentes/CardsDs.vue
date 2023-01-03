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
            <div class="hr"></div>
            <p>
              Cards permitem a visualização das principais informações de modo
              sintético e rápido. Eles podem ser estáticos ou clicáveis,
              revelando mais detalhes após interação.
            </p>
          </div>
          <br />
          <div class="container-elementos">
            <div class="container-grid">
              <dm-card dm_card--clicavel><h4>Mercantil</h4></dm-card>
              <dm-card>mateus</dm-card>
              <dm-card dm_card--estatico><h4>Mercantil</h4></dm-card>
              <dm-card dm_card--romaneio>
                <div class="card--color" />
                <div dm_card--content>
                  <h4>Romaneio 01</h4>
                  <div>Ocupação: 40%</div>
                  <div>Peso: 1294 kg</div>
                  <div>Volumes: 40%</div>
                </div>
              </dm-card>
            </div>
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
dm-card {
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
}
[dm_card--clicavel] {
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
}
[dm_card--clicavel] div {
  font-size: 16px;
}
[dm_card--estatico] {
  border: 2px solid var(--dm_cinza_03);
  color: var(--dm_cinza_01);
}
[dm_card--romaneio] {
  flex-direction: row;
  padding: 0;
  border: none;
  display: flex;
  width: max-content;
  height: max-content;
  color: var(--dm_preto_00);
  padding: 0;
}
.card--color {
  width: 12px;
  background: var(--dm_azul_00);
  height: 100px;
  border-radius: 6px 0 0 6px;
}
[dm_card--content] {
  display: flex;
  flex-direction: column;
  border-style: solid;
  padding: 6px 30px 6px 12px;
  border-color: var(--dm_cinza_03);
  border-width: 2px 2px 2px 0;
  border-radius: 0 6px 6px 0;
}
</style>
