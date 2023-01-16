<template>
  <div>
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
              <h1>/Upload</h1>
              <hr />
              <br />
              <p>xxxx</p>
            </div>
            <br />

            <div class="container-elementos">
              <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
              >
                <div class="el-upload__text">
                  <dm_icon upload class="icon" />
                  Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload>
              <div class="html_codigos_blue"></div>

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="3"> </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "UploadDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Upload",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>
