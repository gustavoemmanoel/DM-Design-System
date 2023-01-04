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
        <div>
          <h1>/Campo de texto</h1>
          <div class="hr"></div>
          <br>
          <p>
            Os campos de texto são um dos formatos de entrada de dados
            possíveis.
          </p>
        </div>
        <br />
        <div class="containerInterno">
          <div class="container-elementos">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form
                  :label-position="labelPosition"
                  label-width="100px"
                  :model="formLabelAlign"
                >
                  <el-form-item label="Rua">
                    <el-input
                      v-model="formLabelAlign.name"
                      placeholder="Digite"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Bairro">
                    <el-input
                      v-model="formLabelAlign.region"
                      placeholder="Digite"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Número">
                    <el-input
                      v-model="formLabelAlign.type"
                      placeholder="Digite"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form
                  :label-position="labelPosition"
                  label-width="100px"
                  :model="formLabelAlign"
                >
                  <el-form-item label="CEP">
                    <el-input
                      v-model="formLabelAlign.name"
                      placeholder="Digite"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Complemento">
                    <el-input
                      v-model="formLabelAlign.region"
                      placeholder="Digite"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
        <h1>/Upload</h1>
<br>
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
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
};
</script>
