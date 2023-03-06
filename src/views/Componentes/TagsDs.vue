<template>
  <div>
    <el-container>
      <el-header>
        <HeaderDs :headerTitle="headerTitle" />
      </el-header>
      <el-container>
        <el-main>
          <div>
            <h1>/Tags</h1>
            <hr />

          </div>
          <br />
          <div class="cont-elements">
            <p>
              As tags primárias são usadas para representar status e
              informações principais. Podem ser usadas para classificar
              usuários, leads e categorias no mapa.
            </p>
            <br>

            <div class="defaultTags">
              <el-tag type="azul">tag 1</el-tag>
              <el-tag type="lilas">tag 1</el-tag>
              <el-tag type="rosa">tag 1</el-tag>
              <el-tag type="verde">tag 1</el-tag>
              <el-tag type="laranja">tag 1</el-tag>
              <el-tag type="amarelo">tag 1</el-tag>
            </div>

            <br />
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">

                <span class="html_codigos">
                  <div recuo>
                    <!-- default -->
                    <span green>&#60;!-- default --&#62;</span>
                    <br>
                    &lt;<span tagColor>el-tag</span> type=<span roxo>"azul"</span>&gt;<span black>tag 1</span>&lt;/<span
                      tagColor>el-tag</span>&gt;
                    <br />
                    <span>&lt;<span tagColor>el-tag</span> type=<span roxo>"lilas"</span>&gt;<span black>tag
                        2</span>&lt;/<span tagColor>el-tag</span>&gt;</span>
                    <br />
                    <span>&lt;<span tagColor>el-tag</span> type=<span roxo>"rosa"</span>&gt;<span black>tag
                        3</span>&lt;/<span tagColor>el-tag</span>&gt;</span>
                    <br />
                    <span>&lt;<span tagColor>el-tag</span> type=<span roxo>"verde"</span>&gt;<span black>tag
                        4</span>&lt;/<span tagColor>el-tag</span>&gt;</span>
                    <br />
                    <span>&lt;<span tagColor>el-tag</span> type=<span roxo>"laranja"</span>&gt;<span black>tag
                        5</span>&lt;/<span tagColor>el-tag</span>&gt;</span>
                    <br />
                    <span>&lt;<span tagColor>el-tag</span> type=<span roxo>"amarelo"</span>&gt;<span black>tag
                        6</span>&lt;/<span tagColor>el-tag</span>&gt;</span>
                    <br />
                  </div>
                </span>

              </el-collapse-item>
            </el-collapse>
          </div>
          <!-- PLAIN -->
          <div class="cont-elements">
            <h3>/Tags secundárias</h3>
            <br />
            <p>
              As tags secundárias são usadas para representar um status e
              informações em segundo plano. Ou uma segunda categoria de
              classificação de um lead.
            </p>
            <br>

            <div class="defaultTags">
              <el-tag effect="plain" type="azul">tag 1</el-tag>
              <el-tag effect="plain" type="lilas">tag 2</el-tag>
              <el-tag effect="plain" type="rosa">tag 3</el-tag>
              <el-tag effect="plain" type="amarelo">tag 4</el-tag>
              <el-tag effect="plain" type="verde">tag 5</el-tag>
              <el-tag effect="plain" type="laranja">tag 6</el-tag>
            </div>

            <br />

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <span class="html_codigos">
                  <!-- default -->
                  <span green>&#60;!-- default --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span
                    roxo>"azul"</span>&#62;<span black>tag 1</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span
                    roxo>"lilas"</span>&#62;<span black>tag 2</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span
                    roxo>"rosa"</span>&#62;<span black>tag 3</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span
                    roxo>"amarelo"</span>&#62;<span black>tag 4</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span
                    roxo>"verde"</span>&#62;<span black>tag 5</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span
                    roxo>"laranja"</span>&#62;<span black>tag 6</span>&#60;<span tagColor>/el-tag</span>&#62;

                </span>
              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="cont-elements">
            <h3>Tags com ícones</h3>
            <br>
            <p>Podemos adicionar ícones nas tags em uma seleção de filtragem que mais de uma tag foi selecionada. Nesse
              caso pode-se escolher tirar a seleção de cada uma individualmente.</p>
            <br>
            <el-row class="defaultTags">
              <el-tag type="azul" closable>tag 1</el-tag>
              <el-tag type="lilas" closable>tag 1</el-tag>
              <el-tag type="rosa" closable>tag 1</el-tag>
              <el-tag type="verde" closable>tag 1</el-tag>
              <el-tag type="laranja" closable>tag 1</el-tag>
              <el-tag type="amarelo" closable>tag 1</el-tag>
            </el-row>
            <br>
            <el-row class="defaultTags">
              <el-tag effect="plain" type="azul" closable>tag 1</el-tag>
              <el-tag effect="plain" type="lilas" closable>tag 1</el-tag>
              <el-tag effect="plain" type="rosa" closable>tag 1</el-tag>
              <el-tag effect="plain" type="verde" closable>tag 1</el-tag>
              <el-tag effect="plain" type="laranja" closable>tag 1</el-tag>
              <el-tag effect="plain" type="amarelo" closable>tag 1</el-tag>
            </el-row>
            <br>

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <span class="html_codigos">
                  <!-- default closable -->

                  <span green>&#60;!-- default --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> type=<span roxo>"azul"</span> closable&#62;<span black>tag 1</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> type=<span roxo>"lilas"</span> closable&#62;<span black>tag 2</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> type=<span roxo>"rosa"</span> closable&#62;<span black>tag 3</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> type=<span roxo>"amarelo"</span> closable&#62;<span black>tag 4</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> type=<span roxo>"verde"</span> closable&#62;<span black>tag 5</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> type=<span roxo>"laranja"</span> closable&#62;<span black>tag 6</span>&#60;<span tagColor>/el-tag</span>&#62;

                  <br>
                  <br />
                  <!-- plain closable -->
                  <span green>&#60;!-- plain --&#62;</span>
                  <br />
                  <!--  -->
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span roxo>"azul"</span>
                  closable&#62;<span black>tag 1</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span roxo>"lilas"</span>
                  closable&#62;<span black>tag 2</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span roxo>"rosa"</span>
                  closable&#62;<span black>tag 3</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span roxo>"amarelo"</span>
                  closable&#62;<span black>tag 4</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span roxo>"verde"</span>
                  closable&#62;<span black>tag 5</span>&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo>"plain"</span> type=<span roxo>"laranja"</span>
                  closable&#62;<span black>tag 6</span>&#60;<span tagColor>/el-tag</span>&#62;



                </span>

              </el-collapse-item>
            </el-collapse>

          </div>

          <br />
          <br />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  name: "TagsDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      items: [
        { type: "", label: "tag 1" },
        { type: "success", label: "Tag 2" },
        { type: "info", label: "Tag 3" },
        { type: "warning", label: "Tag 4" },
        { type: "danger", label: "Tag 5" },
      ],
      headerTitle: "Tags",
    };
  },
};
</script>

<style>
.defaultTags {
  display: flex;
  gap: 10px;
}

.tagsGap {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  align-items: center;
  gap: 10px;
}

.gap {
  display: flex;
  gap: 10px;
}

.el-collapse {
  --el-collapse-header-bg-color: none;
  --el-collapse-content-bg-color: none;
}
</style>
