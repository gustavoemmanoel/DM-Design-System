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
            <h1>/Menssagens</h1>
            <hr />
            <br>
            <p>
              Mensagens aparecem na tela para comunicar ao usuário informações importantes antes de executar alguma
              ação, durante a utilização do sistema ou após alguma ação ser executada.
            </p>
          </div>
          <br />

          <h3>Erro</h3>
          <p>A mensagem de erro é uma resposta inesperada a uma ação executada pelo usuário e pode causar frustração.
            Por isso, precisa ser relevante, útil e clara. O usuário deve ser informado sobre o que aconteceu e
            orientado sobre como resolver. </p>
          <br />

          <div class="container-elementos">
            <h6>Em caixas de texto obrigatória:</h6>
            <br>
            <p>Quando é obrigatório preencher um campo para seguir com a ação ou quando o formato da informação é
              incompatível com o formato correto.</p>
            <br>
            <br>

            <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
              class="demo-ruleForm">
              <el-form-item label="Password" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Confirm" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Age" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
              </el-form-item>
            </el-form>

            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>

          </div>
          <div class="container-elementos">
            <br>
            <h6>Erro na ação</h6>
            <br>
            <p>A ação não é permitida ou está indisponível. A mensagem é centralizada e bloqueia a tela.</p>
            <img src="mensagens/erro.jpg">

            <br>

          </div>
          <h3>Aviso</h3>
          <br>
          <div class="container-elementos">



            <p>A mensagem de aviso comunica ao usuário uma informação importante, mas não impede nenhuma ação do
              usuário.
              É exibida na parte superior da tela.</p>
            <br>
            <img src="mensagens/alert_01.jpg">
            <br>
            <br>
            <dm-alert>
              <dm_icon alerta />
              <span>
                <dm-atencao>Atenção!</dm-atencao> Trânsito lento na Marginal Tietê. Possibilidade de atraso na previsão
                das entregas.
              </span>
              <button>
                <dm_icon close />
              </button>
            </dm-alert>


            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
          <h3>Alerta</h3>
          <br>
          <div class="container-elementos">
            <p>A mensagem de alerta bloqueia a tela em razão da sensibilidade quanto a uma possível perda de informação
              e documentação. Ela também solicita a confirmação da escolha de uma ação do usuário e exibe o aviso de
              confirmação, ou não, da execução da ação.
            </p>
            <br>
            <img src="mensagens/alert_02.jpg">
            <br>
            <br>

            <div style="display: flex; gap: 20px;">
              <dm-popup-background>
                <dm_icon alerta />
                <p>Voce tem acerteza de que quer apagar este romaneio?</p>
                <p class="detail_01">Não será possível visualizar ou recuperar o romaneio.</p>
                <el-row>
                  <el-button type="primario">Sim</el-button>
                  <el-button type="secundario">Não</el-button>
                </el-row>
              </dm-popup-background>
              <dm-popup @click="upPopup" popupName="alerta">Popup Alerta</dm-popup>
            </div>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="container-elementos">
            <img src="mensagens/alert_03.jpg">
            <br>
            <br>
            <div style="display: flex; gap: 20px;">
              <dm-popup-background>
                <dm_icon alerta />
                <p>Voce tem acerteza de que quer apagar este romaneio?</p>
                <p class="detail_01">Não será possível visualizar ou recuperar o romaneio.</p>
                <el-row>
                  <el-button type="primario">Sim</el-button>
                  <el-button type="secundario">Não</el-button>
                </el-row>
              </dm-popup-background>
              <dm-popup @click="upPopup" popupName="sucesso">Popup Alerta</dm-popup>
            </div>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
          <h3>Aviso informativo</h3>
          <br>
          <div class="container-elementos">
            <p>Avisos informativos comunicam informações importantes ou sugerem conteúdos informativos ao usuário.</p>
            <br>
            <img src="mensagens/informativo.jpg">
            <br>
            <br>
            <dm-information>
              <dm_icon sugestao />
              <span>
                <p>Para saber como construir a tabela de acordo com o padrão, </p>
                <el-button type="terciario">baixe o nosso modelo</el-button>
              </span>
            </dm-information>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver" id="1">

              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  id: "MenssagensDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return {

      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },









      headerTitle: "Menssagens",
      popupName: false,
      dmPopup: null,
      changePopup: true,
      popupSelecionadothis: null,
      nameAtributo: null,
      removeAtr: null,
      arrayClicked: null,
      popups:
        [

          {
            popupName: 'alerta',
            title: 'Você tem certeza de que deseja apagar esse romaneio?',
            mensagemPrincipal: 'Pedro Durães',
            closeButton: 'close'
          },
          {
            popupName: 'sucesso',
            title: 'Rotas e romanieos remanejados com sucesso!',
            mensagemPrincipal: 'algum conteúdo',
            closeButton: 'Ok'
          },
        ]
    };
  },

  methods: {



    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    hello() {
      alert('Hellow World!')
    },

    upPopup(event) {
      const body = document.querySelector('body', '.mg-right-js')
      this.removeAtr = event.target.getAttribute('remove')
      if (this.changePopup === true) {
        body.style.overflow = 'hidden'
        body.style.paddingRight = '16px'
        body.style.background = 'red'
        this.nameAtributo = event.target.getAttribute('popupName')
        console.log(`add ${this.nameAtributo}`)
        this.arrayClicked = this.popups.find((qualeopopup) => {
          return qualeopopup.popupName === this.nameAtributo
        })
        console.log(this.arrayClicked)
        if (this.arrayClicked == undefined) {
          alert('dm-popup - Dados de exibição não encontrados')
        }
        this.dmPopup = document.querySelector('dm-popup')
        let p = document.querySelector(`[popupName="${this.nameAtributo}"]`)
        this.popupSelecionado = this.popups.find((popupName) => {
          return popupName.popupName === this.nameAtributo
        })
        var newDiv = document.createElement('dm-popup-overlay')
        newDiv.setAttribute('id', 'excluir')
        newDiv.setAttribute('remove', `${this.nameAtributo}`)
        newDiv.innerHTML = `<dm-popup-background>
          <h1>${this.popupSelecionado.popupName}</h1> <br> ${this.popupSelecionado.title} <br>  ${this.popupSelecionado.mensagemPrincipal} <br><el-button class="dm-button--popup"  remove="${this.nameAtributo}"> ${this.popupSelecionado.closeButton}</el-button></dm-popup-background>`
        p.appendChild(newDiv)
        this.changePopup = !this.changePopup
      } else if (this.removeAtr === this.arrayClicked.popupName) {
        body.style.overflow = 'auto'
        body.style.paddingRight = '0'
        document.querySelector('#excluir').remove()
        this.changePopup = !this.changePopup
        console.log(`remove ${this.nameAtributo}`)
      }
    },
  },
};

</script>