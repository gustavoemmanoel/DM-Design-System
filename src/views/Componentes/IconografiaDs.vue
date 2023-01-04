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
            <h1>/Iconografia</h1>
            <div class="hr"></div>
            <p>
              Dentro desta sessão, poderão ser encontrados todos os ícones
              presentes em nossos painéis, assim como regras de utilização.
            </p>
          </div>
          <br />

          <div class="container-elementos grid_container_icone">
            <div class="column_icons">
              <!-- <dm_icone><maisInformacoes /></dm_icone>
              <dm_icone><cima /></dm_icone> -->
              <div><dm_icon cima />cima</div>
              <div><dm_icon baixo />baixo</div>
              <div><dm_icon prosseguir />prosseguir</div>
              <div><dm_icon voltar />voltar</div>
              <div><dm_icon avancar />avancar</div>
              <div><dm_icon retroceder />retroceder</div>
              <div><dm_icon check />check</div>
              <div><dm_icon close />close</div>
              <div><dm_icon menu />menu</div>
              <div><dm_icon produtos />produtos</div>
              <div><dm_icon maisOpcoes />maisOpcoes</div>
              <div><dm_icon estatisticas />estatisticas</div>
              <div><dm_icon pasta />pasta</div>
              <div><dm_icon email />email</div>
              <div><dm_icon envio />envio</div>
              <div><dm_icon cadeadoAberto />cadeadoAberto</div>
              <div><dm_icon cadeadoFechado />cadeadoFechado</div>
            </div>
            <div class="column_icons">
              <div><dm_icon alerta />alerta</div>
              <div><dm_icon correta />correta</div>
              <div><dm_icon maisInformacoes />maisInformacoes</div>
              <div><dm_icon duvida />duvida</div>
              <div><dm_icon adicionar />adicionar</div>
              <div><dm_icon errada />errada</div>
              <div><dm_icon editar />editar</div>
              <div><dm_icon internet />internet</div>
              <div><dm_icon localizacao />localizacao</div>
              <div><dm_icon historico />historico</div>
              <div><dm_icon calendario />calendario</div>
              <div><dm_icon camada />camada</div>
              <div><dm_icon camadaAberta />camadaAberta</div>
              <div><dm_icon camadaFechada />camadaFechada</div>
              <div><dm_icon chat />chat</div>
              <div><dm_icon documento />documento</div>
              <div><dm_icon loading />loading</div>
            </div>
            <div class="column_icons">
              <div><dm_icon telefone />telefone</div>
              <div><dm_icon mapas />mapas</div>
              <div><dm_icon lixeira />lixeira</div>
              <div><dm_icon logout />logout</div>
              <div><dm_icon upload />upload</div>
              <div><dm_icon download />download</div>
              <div><dm_icon lupa />lupa</div>
              <div><dm_icon perfil />perfil</div>
              <div><dm_icon notificacao />notificacao</div>
              <div><dm_icon sugestao />sugestao</div>
              <div><dm_icon emote />emote</div>
              <div><dm_icon filtro />filtro</div>
              <div><dm_icon video />video</div>
              <div><dm_icon novoArquivo />novoArquivodeo</div>
              <div><dm_icon imagem />imagem</div>
              <div><dm_icon endereco />endereco</div>
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
  name: "IconografiaDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Iconografia",
      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>
.grid_container_icone {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

img {
  width: 24px;
}
.column_icons div {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 15px;
}
</style>
