<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col :offset="1" :span="18">
        <br />
        <br />

        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          class="mx-1"
        >
          {{ item.label }}
        </el-tag>

        <br />
        <br />
        <el-tag>Tag 1</el-tag>
        <el-tag type="success">Tag 2</el-tag>
        <el-tag type="info">Tag 3</el-tag>
        <el-tag type="warning">Tag 4</el-tag>
        <el-tag type="danger">Tag 5</el-tag>
        <br />
        <el-tag size="small">Tag 1</el-tag>
        <el-tag type="success" size="small">Tag 2</el-tag>
        <el-tag type="info" size="small">Tag 3</el-tag>
        <el-tag type="warning" size="small">Tag 4</el-tag>
        <el-tag type="danger" size="small">Tag 5</el-tag>
        <br />
        <el-tag size="mini">Tag 1</el-tag>
        <el-tag type="success" size="mini">Tag 2</el-tag>
        <el-tag type="info" size="mini">Tag 3</el-tag>
        <el-tag type="warning" size="mini">Tag 4</el-tag>
        <el-tag type="danger" size="mini">Tag 5</el-tag>
        <br />
        <br />
        <br />
        <br />
        <!-- NORMAL CLOSABLE -->
        <el-tag closable>Tag 1</el-tag>
        <el-tag size="small" closable>Tag 1</el-tag>
        <el-tag size="mini" closable>Tag 1</el-tag>
        <br />
        <el-tag type="success" closable>Tag 2</el-tag>
        <el-tag type="success" size="small" closable>Tag 2</el-tag>
        <el-tag type="success" size="mini" closable>Tag 2</el-tag>
        <br />
        <el-tag type="info" closable>Tag 3</el-tag>
        <el-tag type="info" size="small" closable>Tag 3</el-tag>
        <el-tag type="info" size="mini" closable>Tag 3</el-tag>
        <br />
        <el-tag type="warning" closable>Tag 4</el-tag>
        <el-tag type="warning" size="small" closable>Tag 4</el-tag>
        <el-tag type="warning" size="mini" closable>Tag 4</el-tag>
        <br />
        <el-tag type="danger" closable>Tag 5</el-tag>
        <el-tag type="danger" size="small" closable>Tag 5</el-tag>
        <el-tag type="danger" size="mini" closable>Tag 5</el-tag>
        <br />
        <br />

        <!-- PLAIN -->

        <el-tag effect="plain">Tag 1</el-tag>
        <el-tag effect="plain" size="small">Tag 1</el-tag>
        <el-tag effect="plain" size="mini">Tag 1</el-tag>
        <br />
        <el-tag type="success" effect="plain">Tag 2</el-tag>
        <el-tag type="success" size="small" effect="plain">Tag 2</el-tag>
        <el-tag type="success" size="mini" effect="plain">Tag 2</el-tag>
        <br />
        <el-tag type="info" effect="plain">Tag 3</el-tag>
        <el-tag type="info" size="small" effect="plain">Tag 3</el-tag>
        <el-tag type="info" size="mini" effect="plain">Tag 3</el-tag>
        <br />
        <el-tag type="warning" effect="plain">Tag 4</el-tag>
        <el-tag type="warning" size="small" effect="plain">Tag 4</el-tag>
        <el-tag type="warning" size="mini" effect="plain">Tag 4</el-tag>
        <br />
        <el-tag type="danger" effect="plain">Tag 5</el-tag>
        <el-tag type="danger" size="small" effect="plain">Tag 5</el-tag>
        <el-tag type="danger" size="mini" effect="plain">Tag 5</el-tag>
        <br />
        <br />
        <!-- CLOSABLE -->
        <el-tag effect="plain" closable>Tag 1</el-tag>
        <el-tag effect="plain" size="small" closable>Tag 1</el-tag>
        <el-tag effect="plain" size="mini" closable>Tag 1</el-tag>
        <br />
        <el-tag type="success" effect="plain" closable>Tag 2</el-tag>
        <el-tag type="success" size="small" effect="plain" closable
          >Tag 2</el-tag
        >
        <el-tag type="success" size="mini" effect="plain" closable
          >Tag 2</el-tag
        >
        <br />
        <el-tag type="info" effect="plain" closable>Tag 3</el-tag>
        <el-tag type="info" size="small" effect="plain" closable>Tag 3</el-tag>
        <el-tag type="info" size="mini" effect="plain" closable>Tag 3</el-tag>
        <br />
        <el-tag type="warning" effect="plain" closable>Tag 4</el-tag>
        <el-tag type="warning" size="small" effect="plain" closable
          >Tag 4</el-tag
        >
        <el-tag type="warning" size="mini" effect="plain" closable
          >Tag 4</el-tag
        >
        <br />
        <el-tag type="danger" effect="plain" closable>Tag 5</el-tag>
        <el-tag type="danger" size="small" effect="plain" closable
          >Tag 5</el-tag
        >
        <el-tag type="danger" size="mini" effect="plain" closable>Tag 5</el-tag>
        <br />
        <br />
        <br />
      </el-col>
    </el-row>
  </div>
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
        { type: "danger", label: "Tag 4" },
        { type: "warning", label: "Tag 5" },
      ],

      headerTitle: "Tags",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>
