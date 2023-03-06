<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h1>/Campo de texto</h1>
          <hr />
          <br>
        </div>
        <div class="containerInterno">
          <div class="cont-elements">
            <p>
              Os campos de texto são um dos formatos de entrada de dados
              possíveis.
            </p>
            <br>
            <el-row :gutter="40">
              <el-col :span="12">
                <el-form :label-position="labelPosition" :model="formLabelAlign">
                  <el-form-item label="Rua">
                    <el-input v-model="formLabelAlign.street" placeholder="Digite"></el-input>
                  </el-form-item>

                  <el-form-item label="Bairro">
                    <el-input v-model="formLabelAlign.district" placeholder="Digite"></el-input>
                  </el-form-item>

                  <el-form-item label="Número">
                    <el-input v-model="formLabelAlign.number" placeholder="Digite"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form :label-position="labelPosition" :model="formLabelAlign">
                  <el-form-item label="CEP">
                    <el-input v-model="formLabelAlign.cep" placeholder="Digite"></el-input>
                  </el-form-item>
                  <el-form-item label="Complemento">
                    <el-input v-model="formLabelAlign.complement" placeholder="Digite"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <br>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>el-form</span> :label-position=<span roxo>"labelPosition"</span>
                  label-width=<span roxo>"100px"</span> :model=<span roxo>"formLabelAlign"</span>&#53;
                  <div class="border-left">
                    <!-- Rua -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Rua"</span>&#53;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.street"</span>
                          placeholder=<span roxo>"Digite"</span>&#53;
                          &#60;/<span tagColor>el-input</span>&#53;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#53;
                    </div>
                    <br />
                    <!-- Bairro -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Bairro"</span>&#53;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.district"</span>
                          placeholder=<span roxo>"Digite"</span>&#53;
                          &#60;/<span tagColor>el-input</span>&#53;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#53;
                    </div>
                    <br />
                    <!-- Número -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Número"</span>&#53;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.number"</span>
                          placeholder=<span roxo>"Digite"</span>&#53;
                          &#60;/<span tagColor>el-input</span>&#53;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#53;
                    </div>
                    <br />
                    <!-- CEP -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"CEP"</span>&#53;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.cep"</span>
                          placeholder=<span roxo>"Digite"</span>&#53;
                          &#60;/<span tagColor>el-input</span>&#53;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#53;
                    </div>
                    <br />
                    <!-- Complemento -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Complemento"</span>&#53;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.complement"</span>
                          placeholder=<span roxo>"Digite"</span>&#53;
                          &#60;/<span tagColor>el-input</span>&#53;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#53;
                    </div>
                  </div>
                  &#60;/<span tagColor>el-form</span>&#53;
                </div>

                <br />
                <br />
                <div class="html_codigos">
                  <!-- Script -->
                  &#60;<span tagColor>script</span>&#53;
                  <br />
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      data() {
                      <div class="border-left">
                        <div recuo>
                          return {
                          <br />
                          <div class="border-left">
                            <div recuo>
                              <span black>formLabelAlign</span>: {
                              <div class="border-left">
                                <div recuo>
                                  street:
                                  <span black>null</span>,
                                  <br />
                                  district: <span black>null</span>,
                                  <br />
                                  number: <span black>null</span>,
                                  <br />
                                  cep: <span black>null</span>,
                                  <br />
                                  complement: <span black>null</span>,
                                  <br />
                                </div>
                              </div>
                              },
                            </div>
                          </div>
                          };
                        </div>
                      </div>
                      },
                    </div>
                  </div>
                  };
                  <br />
                  &#60;/<span tagColor>script</span>&#53;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>

        <div class="cont-elements">
          <h3>Estados</h3>
          <br>
          <p>As caixas podem se comportar de formas diferentes para dar feedbacks ao usuário quanto ao seu uso, por
            exemplo quando está ativada ou desativada.</p>
          <div class="grid-ipunts-svg">

            <div>
              <span>
                <h6>Padrão</h6>
                <br>
                <p>Estado de caixa disponível para digitação mas não selecionada.</p>
              </span>
              <br>
              <img style="width: 100%;" src="mensagens/input_01.svg">
            </div>

            <div>
              <span>
                <h6>Foco</h6>
                <br>
                <p>Estado de caixa onde o usuário está digitando.</p>
                <br>
              </span>
              <img style="width: 100%;" src="mensagens/input_03.svg">
            </div>

            <div>
              <span>
                <h6>Desabilitado</h6>
                <br>
                <p>Estado de caixa que não pode ser acessada ou modificada por aquele usuário.</p>
              </span>
              <br>
              <img style="width: 100%;" src="mensagens/input_03.svg">
            </div>

            <div>
              <span>
                <h6>Leitura</h6>
                <br>
                <p>Estado de caixa protegida de edição. Mas possível de ser habilitada para editar.</p>
              </span>
              <br>
              <span><img style="width: 100%;" src="mensagens/input_04.svg">
                <br>
                <br>
              </span>
            </div>

            <div>
              <span>
                <h6>Erro</h6>
                <br>
                <p>Caixa de texto com informação incorreta ou incompatível com o formato esperado.</p>
              </span>
              <br>
              <img style="width: 100%;" src="mensagens/input_05.svg">
            </div>

            <div>
              <span>
                <h6>Certo</h6>
                <br>
                <p>Caixa de texto com informação correta após validação de formato/conteúdo.</p>
              </span>
              <br>
              <span><img style="width: 100%;" src="mensagens/input_06.svg"> </span>
            </div>
          </div>
          <br>
        </div>

        <div class="cont-elements">
          <h3>Comportamento Extra</h3>
          <br>
          <p>Há quebras possíveis quando o texto for maior que a caixa de texto, ou quando o texto do título e descrição
            também forem maiores que o espaço destinado.</p>
          <br>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
              <h6>Texto excede tamanho do campo </h6>
              <p>Utilizar reticências substituindo o último dígito possível na largura da caixa de texto. Ao passar o
                mouse (hover) um balão mostra o texto completo.
              </p>
              <br>
              <br>
              <div style="display: flex;flex-direction: column;align-items: center; gap: 40px;">
                <img style="width: 53%;" src="mensagens/input_07.svg">
                <img style="width: 64%;" src="mensagens/input_09.svg">
              </div>
            </div>

            <div>
              <h6>Texto de descrição/erro excede tamanho do campo</h6>
              <p>Quebrar o texto para criar uma segunda linha. Largura limite de cada linha acompanha a largura da caixa
                de texto.
              </p>
              <br>
              <br>
              <img style="width: 53%;" src="mensagens/input_08.svg">

            </div>
            <br>
          </div>
        </div>

        <!--  -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CampoTextoDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Campo de Texto",
      labelPosition: "top",
      formLabelAlign: {
        street: "",
        district: "",
        number: null,
        cep: "",
        complement: "",
      },
    };
  },
};
</script>

<style scoped>
.grid-ipunts-svg {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-top: 40px;
  padding-bottom: 30px;

}

.grid-ipunts-svg div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 193px;

}
</style>