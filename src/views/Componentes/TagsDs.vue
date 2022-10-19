<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>
      <el-row class="componentsStyleContent">
        <el-col>
          <el-main>
            <div>
              <h1>/Tags</h1>
              <div class="hr"></div>
              <p>
                As tags primárias são usadas para representar status e
                informações principais. Podem ser usadas para classificar
                usuários, leads e categorias no mapa.
              </p>
            </div>
            <br />
            <div class="container-elementos gap">
              <el-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
              >
                {{ item.label }}
              </el-tag>
            </div>
            <br />
            <br />
            <div>
              <h2>Uso básico</h2>
              <div class="hr"></div>
              <p>
                Use o typeatributo para definir o tipo de Tag. Além disso, o
                coloratributo pode ser usado para definir a cor de fundo do Tag.
              </p>
            </div>
            <br />
            <div class="container-elementos">
              <el-row class="gap">
                <el-tag>Tag 1</el-tag>
                <el-tag class="ml-2" type="success">Tag 2</el-tag>
                <el-tag class="ml-2" type="info">Tag 3</el-tag>
                <el-tag class="ml-2" type="warning">Tag 4</el-tag>
                <el-tag class="ml-2" type="danger">Tag 5</el-tag>
              </el-row>
              <br />

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="3">
                  <el-row class="html_codigos_blue">
                    &lt;
                    <div class="html_codigos_blue">el-tag</div>
                    &gt;
                    <div class="html_color_conteudo">Tag 1</div>
                    &lt;/el-tag&gt; <br />
                    &lt;
                    <div class="html_codigos_blue">el-tag</div>
                    type=
                    <div class="html_color_axx">"success"</div>
                    &gt;
                    <div class="html_color_conteudo">Tag 2</div>
                    &lt;/el-tag&gt; <br />
                    &lt;
                    <div class="html_codigos_blue">el-tag</div>
                    type=
                    <div class="html_color_axx">"info"</div>
                    &gt;
                    <div class="html_color_conteudo">Tag 3</div>
                    &lt;/el-tag&gt; <br />
                    &lt;
                    <div class="html_codigos_blue">el-tag</div>
                    type=
                    <div class="html_color_axx">"warning"</div>
                    &gt;
                    <div class="html_color_conteudo">Tag 4</div>
                    &lt;/el-tag&gt; <br />
                    &lt;
                    <div class="html_codigos_blue">el-tag</div>
                    type=
                    <div class="html_color_axx">"danger"</div>
                    &gt;
                    <div class="html_color_conteudo">Tag 5</div>
                    &lt;/el-tag&gt; <br />
                  </el-row>
                </el-collapse-item>
              </el-collapse>
            </div>
            <br />
            <br />

            <div>
              <h1>Tags secundárias</h1>
              <div class="hr" />
              <p>
                As tags secundárias são usadas para representar um status e
                informações em segundo plano. Ou uma segunda categoria de
                classificação de um lead.
              </p>
            </div>
            <br />
            <!-- PLAIN -->
            <el-row class="container-elementos">
              <el-col :span="12" class="tagsGap">
                <el-tag effect="plain">default</el-tag>
                <el-tag effect="plain" size="small">small</el-tag>
                <el-tag effect="plain" size="mini">mini</el-tag>
                <el-tag type="success" effect="plain">default</el-tag>
                <el-tag type="success" size="small" effect="plain"
                  >small</el-tag
                >
                <el-tag type="success" size="mini" effect="plain">mini</el-tag>
                <el-tag type="info" effect="plain">default</el-tag>
                <el-tag type="info" size="small" effect="plain">small</el-tag>
                <el-tag type="info" size="mini" effect="plain">mini</el-tag>
                <el-tag type="warning" effect="plain">default</el-tag>
                <el-tag type="warning" size="small" effect="plain"
                  >small</el-tag
                >
                <el-tag type="warning" size="mini" effect="plain">mini</el-tag>
                <el-tag type="danger" effect="plain">default</el-tag>
                <el-tag type="danger" size="small" effect="plain">small</el-tag>
                <el-tag type="danger" size="mini" effect="plain">mini</el-tag>
              </el-col>
              <el-col :span="12" class="tagsGap">
                <el-tag effect="plain" closable>default</el-tag>
                <el-tag effect="plain" size="small" closable>small</el-tag>
                <el-tag effect="plain" size="mini" closable>mini</el-tag>
                <el-tag type="success" effect="plain" closable>default</el-tag>
                <el-tag type="success" size="small" effect="plain" closable
                  >small</el-tag
                >
                <el-tag type="success" size="mini" effect="plain" closable
                  >mini</el-tag
                >
                <el-tag type="info" effect="plain" closable>default</el-tag>
                <el-tag type="info" size="small" effect="plain" closable
                  >small</el-tag
                >
                <el-tag type="info" size="mini" effect="plain" closable
                  >mini</el-tag
                >
                <el-tag type="warning" effect="plain" closable>default</el-tag>
                <el-tag type="warning" size="small" effect="plain" closable
                  >small</el-tag
                >
                <el-tag type="warning" size="mini" effect="plain" closable
                  >mini</el-tag
                >
                <el-tag type="danger" effect="plain" closable>default</el-tag>
                <el-tag type="danger" size="small" effect="plain" closable
                  >small</el-tag
                >
                <el-tag type="danger" size="mini" effect="plain" closable
                  >mini</el-tag
                >
              </el-col>
            </el-row>
            <br />
            <br />
          </el-main>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "TagsDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      items: [
        { type: "", label: "Tag 1" },
        { type: "success", label: "Tag 2" },
        { type: "info", label: "Tag 3" },
        { type: "warning", label: "Tag 4" },
        { type: "danger", label: "Tag 5" },
      ],

      headerTitle: "Tags",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style>
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
