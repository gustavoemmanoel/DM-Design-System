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
              <div><img src="/icons/cima.svg" />Cima</div>
              <div><img src="/icons/baixo.svg" />Baixo</div>
              <div><img src="/icons/prosseguir.svg" />Prosseguir</div>
              <div><img src="/icons/voltar.svg" />Voltar</div>
              <div><img src="/icons/check.svg" />Check</div>
              <div><img src="/icons/close.svg" />Close</div>
              <div><img src="/icons/menu.svg" />Menu</div>
              <div><img src="/icons/produtos.svg" />Produtos</div>
              <div><img src="/icons/maisOpcoes.svg" />Mais Opcões</div>
              <div><img src="/icons/estatisticas.svg" />Estatisticas</div>
              <div><img src="/icons/pasta.svg" />Pasta</div>
              <div><img src="/icons/editar.svg" />Editar</div>
              <div><img src="/icons/email.svg" />Email</div>
              <div><img src="/icons/envio.svg" />Envio</div>
            </div>
            <div class="column_icons">
              <div><img src="/icons/cadeadoAberto.svg" />Cadeado Aberto</div>
              <div><img src="/icons/cadeadoFechado.svg" />Cadeado Fechado</div>
              <div><img src="/icons/adicionar.svg" />Adicionar</div>
              <div><img src="/icons/correta.svg" />Correta</div>
              <div><img src="/icons/alerta.svg" />Alerta</div>
              <div><img src="/icons/duvida.svg" />Dúvida</div>
              <div><img src="/icons/errada.svg" />Errado</div>
              <div><img src="/icons/video.svg" />Vídeo</div>
              <div><img src="/icons/calendario.svg" />Calendario</div>
              <div><img src="/icons/camada.svg" />Camada</div>
              <div><img src="/icons/camadaAberta.svg" />camadaAberta</div>
              <div><img src="/icons/camadaFechada.svg" />camadaFechada</div>
              <div><img src="/icons/chat.svg" />Chat</div>
              <div><img src="/icons/documento.svg" />Documento</div>
            </div>
            <div class="column_icons">
              <div><img src="/icons/historico.svg" />Historico</div>
              <div><img src="/icons/telefone.svg" />Telefone</div>
              <div><img src="/icons/internet.svg" />Internet</div>
              <div><img src="/icons/localizacao.svg" />Localizacao</div>
              <div><img src="/icons/mapas.svg" />Mapas</div>
              <div><img src="/icons/lixeira.svg" />Lixeira</div>
              <div><img src="/icons/logout.svg" />Logout</div>
              <div><img src="/icons/upload.svg" />Upload</div>
              <div><img src="/icons/download.svg" />Download</div>
              <div><img src="/icons/lupa.svg" />Lupa</div>
              <div><img src="/icons/perfil.svg" />Perfil</div>
              <div><img src="/icons/notificacao.svg" />Notificacao</div>
              <div><img src="/icons/sugestao.svg" />Sugestao</div>
              <div><img src="/icons/emote.svg" />Emote</div>
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
