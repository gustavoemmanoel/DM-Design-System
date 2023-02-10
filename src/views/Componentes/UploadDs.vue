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

            <div class="container-elementos">
              <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple>
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

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="3">

                  <div class="html_codigo_blue">
                    &#60;<span tagColor>el-upload</span> class=<span roxo>"upload-demo"</span> drag action=<span
                      roxo>"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"</span>
                    <span roxo> multiple</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>div</span> class=<span roxo>"el-upload__text"</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>dm_icon</span> <span roxo>upload</span> class=<span
                              roxo>"icon"</span>/&#62;
                            <br>
                            Drop file here or &#60;<span tagColor>em</span>&#62;click to upload&#60;/<span
                              tagColor>em</span>&#62;
                          </div>
                        </div>
                        &#60;/<span tagColor>div</span>&#62;
                        <br>
                        &#60;<span tagColor>template</span> #<span roxo>tip</span>&#62;
                        <div class="border-left">
                          <div recuo> &#60;<span tagColor>div</span> class=<span roxo>"el-upload__tip"</span>&#62;
                            <div class="border-left">
                              <div recuo>
                                jpg/png files with a size less than 500kb
                              </div>
                            </div>
                            &#60;/<span tagColor>div</span>&#62;
                          </div>
                        </div>
                        &#60;/<span tagColor>template</span>&#62;
                      </div>
                      &#60;/<span tagColor>el-upload</span>&#62;
                    </div>
                  </div>


                </el-collapse-item>
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
