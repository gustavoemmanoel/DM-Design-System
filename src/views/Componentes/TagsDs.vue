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
              <hr />
              <br />
              <p>
                As tags primárias são usadas para representar status e
                informações principais. Podem ser usadas para classificar
                usuários, leads e categorias no mapa.
              </p>
            </div>
            <br />
            <div class="container-elementos">
              <el-row>
                <el-col :span="12" class="defaultTags">
                  <el-tag>default</el-tag>
                  <!-- <el-tag size="small">small</el-tag> -->
                  <!-- <el-tag size="mini">mini</el-tag> -->
                  <el-tag type="success">success</el-tag>
                  <!-- <el-tag type="success" size="small">small</el-tag> -->
                  <!-- <el-tag type="success" size="mini">mini</el-tag> -->
                  <el-tag type="info">info</el-tag>
                  <!-- <el-tag type="info" size="small">small</el-tag> -->
                  <!-- <el-tag type="info" size="mini">mini</el-tag> -->
                  <el-tag type="warning">warning</el-tag>
                  <!-- <el-tag type="warning" size="small">small</el-tag> -->
                  <!-- <el-tag type="warning" size="mini">mini</el-tag> -->
                  <el-tag type="danger">danger</el-tag>
                  <!-- <el-tag type="danger" size="small">small</el-tag> -->
                  <!-- <el-tag type="danger" size="mini">mini</el-tag> -->
                  <el-tag closable>closable</el-tag>
                  <el-tag type="success" closable>Tag 1</el-tag>
                  <el-tag type="info" closable>Tag 2</el-tag>
                  <el-tag type="warning" closable>Tag 3</el-tag>
                  <el-tag type="danger" closable>Tag 4</el-tag>
                </el-col>
              </el-row>
              <br />
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="3">
              <span class="html_codigos_blue">
                &#60;<span tagColor>template</span>&#62;

                <div recuo>
                  <!-- default -->
                  <span green>&#60;!-- default --&#62;</span>

                  <br>
                 &lt;<span tagColor>el-tag</span>&gt;
                  <span black>Tag 1</span>&lt;/<span tagColor>el-tag</span
                  >&gt;
                  <br />
                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"success"</span
                    >&gt;<span black>success</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br />
                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"info"</span
                    >&gt;<span black>info</span>&lt;/<span tagColor>el-tag</span
                    >&gt;</span
                  >
                  <br />
                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"warning"</span
                    >&gt;<span black>warning</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br />
                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"danger"</span
                    >&gt;<span black>danger</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br />
                </div>

                <br>
                <div recuo>
                  <!-- closable -->
                  <span green>&#60;!-- closable --&#62;</span>
                  <br />

                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"default"</span><span roxo> closable</span> &gt;<span black>closable</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br />

                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"success"</span
                    ><span roxo> closable</span>&gt;<span black>Tag 1</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br />

                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"info"</span
                    ><span roxo> closable</span>&gt;<span black>Tag 2</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br />

                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"warning"</span
                    ><span roxo> closable</span>&gt;<span black>Tag 3</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                  <br>
                  <span
                    >&lt;<span tagColor>el-tag</span> type=<span roxo
                      >"danger"</span
                    ><span roxo> closable</span>&gt;<span black>Tag 4</span>&lt;/<span tagColor
                      >el-tag</span
                    >&gt;</span
                  >
                </div>

                &#60;<span tagColor>template</span>&#62;
              </span>
               </el-collapse-item>
              </el-collapse>
            </div>

            <div>
              <h1>/Tags secundárias</h1>
              <hr />
              <br />
              <p>
                As tags secundárias são usadas para representar um status e
                informações em segundo plano. Ou uma segunda categoria de
                classificação de um lead.
              </p>
            </div>
            <br />
            <!-- PLAIN -->
            <div class="container-elementos">
              <el-row>
                <el-col :span="12" class="tagsGap">
                  <el-tag effect="plain">default</el-tag>
                  <el-tag effect="plain" size="small">small</el-tag>
                  <el-tag effect="plain" size="mini">mini</el-tag>

                  <el-tag effect="plain" type="success">success</el-tag>
                  <el-tag effect="plain" type="success" size="small"
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="success" size="mini"
                    >mini</el-tag
                  >

                  <el-tag effect="plain" type="info">info</el-tag>
                  <el-tag effect="plain" type="info" size="small">small</el-tag>
                  <el-tag effect="plain" type="info" size="mini">mini</el-tag>

                  <el-tag effect="plain" type="warning">default</el-tag>
                  <el-tag effect="plain" type="warning" size="small"
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="warning" size="mini"
                    >mini</el-tag
                  >

                  <el-tag effect="plain" type="danger">danger</el-tag>
                  <el-tag effect="plain" type="danger" size="small"
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="danger" size="mini">mini</el-tag>
                </el-col>

                <el-col :span="12" class="tagsGap">
                  <el-tag effect="plain" closable>plain</el-tag>
                  <el-tag effect="plain" size="small" closable>small</el-tag>
                  <el-tag effect="plain" size="mini" closable>mini</el-tag>

                  <el-tag effect="plain" type="success" closable>plain</el-tag>
                  <el-tag effect="plain" type="success" size="small" closable
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="success" size="mini" closable
                    >mini</el-tag
                  >

                  <el-tag effect="plain" type="info" closable>plain</el-tag>
                  <el-tag effect="plain" type="info" size="small" closable
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="info" size="mini" closable
                    >mini</el-tag
                  >

                  <el-tag effect="plain" type="warning" closable>plain</el-tag>
                  <el-tag effect="plain" type="warning" size="small" closable
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="warning" size="mini" closable
                    >mini</el-tag
                  >

                  <el-tag effect="plain" type="danger" closable>plain</el-tag>
                  <el-tag effect="plain" type="danger" size="small" closable
                    >small</el-tag
                  >
                  <el-tag effect="plain" type="danger" size="mini" closable
                    >mini</el-tag
                  >
                </el-col>
              </el-row>
              <br />

              

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="3"> 
                  <span class="html_codigos_blue">
                &#60;<span tagColor>template</span>&#62;
                <div recuo>
                  <!-- default -->
                  <span green>&#60;!-- default --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"</span
                  >&#62;<span black>default</span>&#60;<span tagColor
                    >/el-tag</span
                  >&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  size=<span roxo>"small" </span>
                  <span roxo>closable</span>&#62;<span black>small</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  size=<span roxo>"mini" </span>
                  <span roxo>closable</span>&#62;<span black>mini</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <br />
                  <!-- success -->
                  <br />
                  <span green>&#60;!-- success --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"success" </span>

                  <span roxo>closable</span>&#62;<span black>default</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"success" </span> size=<span roxo
                    >"small"
                  </span>
                  <span roxo>closable</span>&#62;<span black>small</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"success" </span> size=<span roxo
                    >"mini"
                  </span>
                  <span roxo>closable</span>&#62;<span black>mini</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <br />
                  <br />
                  <!-- info -->
                  <span green>&#60;!-- info --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"info" </span>
                  <span roxo>closable</span>&#62;<span black>default</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"info" </span> size=<span roxo>"small" </span>
                  <span roxo>closable</span>&#62;<span black>small</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"info" </span> size=<span roxo>"mini" </span>
                  <span roxo>closable</span>&#62;<span black>mini</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <br />
                  <!-- danger -->
                  <br />
                  <span green>&#60;!-- danger --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"danger" </span>
                  <span roxo>closable</span>&#62;<span black>default</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"danger" </span> size=<span roxo
                    >"small"
                  </span>
                  <span roxo>closable</span>&#62;<span black>small</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"danger" </span> size=<span roxo
                    >"mini"
                  </span>
                  <span roxo>closable</span>&#62;<span black>mini</span>
                  <br />
                  &#60;<span tagColor>/el-tag</span>&#62;
                  <br />
                  <!-- warning -->
                  <br />
                  <span green>&#60;!-- warning --&#62;</span>
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"warning" </span>
                  <span roxo>closable</span>&#62;<span black>default</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"warning" </span> size=<span roxo
                    >"small"
                  </span>
                  <span roxo>closable</span>&#62;<span black>smaill</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                  <!--  -->
                  <br />
                  &#60;<span tagColor>el-tag</span> effect=<span roxo
                    >"plain"
                  </span>
                  type=<span roxo>"warning" </span> size=<span roxo
                    >"mini"
                  </span>
                  <span roxo>closable</span>&#62;<span black>mini</span
                  >&#60;<span tagColor>/el-tag</span>&#62;
                </div>
                &#60;<span tagColor>/template</span>&#62;
              </span>


                </el-collapse-item>
              </el-collapse>
            </div>
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
.defaultTags {
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content;
  align-items: center;
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
