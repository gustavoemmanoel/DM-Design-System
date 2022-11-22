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
            <h1>/Tags</h1>
            <div class="hr"></div>
            <p>Pins são elementos que servem para marcar pontos no mapa.</p>
          </div>
          <br />
          <div class="container-elementos">
            <h6>Email*</h6>
            <el-input v-model="input" placeholder="Please input" />
            <br />
            <br />
            <h6>Email*</h6>
            <el-input v-model="input" disabled placeholder="Please input" />
          </div>
        </div>
        <h1>/Upload</h1>

        <div class="container-elementos">
          <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
          <h1>MAUAT</h1>
          <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>          
        </div>
        <!--  -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CampoTextoDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Campo de Texto",
      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>
