<template>
  <div>
    <el-container>
      <el-header>
        <HeaderDs :headerTitle="headerTitle" />
      </el-header>
      <el-container>

        <el-main>
          <div class="containerInterno">
            <div>
              <h1>/Upload</h1>
              <hr />
              <br>
            </div>
            <div class="cont-elements">
              <el-upload class="upload-demo dm-upload" drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                <div class="el-upload__text">
                  <dm-icon upload />
                  Arraste um arquivo aqui ou <em>Clique para fazer upload</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    Arquivos jpg/png inferiores a 500kb
                  </div>
                </template>
              </el-upload>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver código">
                  <div class="html_codigos">
                    &#60;<span tagColor>el-upload</span> class=<span roxo>"upload-demo dm-upload"</span> drag action=<span
                      roxo>"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"</span>
                    <span roxo> multiple</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>div</span> class=<span roxo>"el-upload__text"</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>dm-icon</span> <span roxo>upload</span> /&#62;
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
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "UploadDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Upload",
    };
  },
};
</script>
