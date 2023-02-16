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
            <h1>/Pins</h1>
            <hr />
            <br />
            <p>Pins são elementos que servem para marcar pontos no mapa.</p>
          </div>
          <br />
          <div class="container-elementos">
            <h2>Pin básico</h2>
            <br>
            <p>
              O pin básico é utilizado para representar uma informação de um
              ponto específico. Apesar de possuir um elemento ícone, o mesmo
              permace como um pin básico.
            </p>
            <br />
            <div class="pin__container">
              <img class="pin__large" src="imagens_design_system/pins/pin__basico--azul.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__basico--azul.svg" alt="Pin" />
            </div>

            <br />

          </div>
          <div class="container-elementos">
            <h2>Pin com ícone</h2>
            <br>
            <p>
              O pin também pode conter um ícone interno para representar mais uma informação sobre aquele ponto
              específico.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__coroa.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__coroa.svg" alt="Pin" />

            </div>

          </div>
          <div class="container-elementos">
            <h2>Pin de desempenho</h2>
            <br>
            <p>
              O pin de desempenho é um pin com duplo ícone. O segundo ícone apresenta o desempenho de um ponto em
              relação a outros pontos.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />



            </div>
            <div class="pin__container">
              <span><img class="pin__desempenho" src="imagens_design_system/pins/bom.svg" alt="Pin" />
                Bom
              </span>
              <span><img class="pin__desempenho" src="imagens_design_system/pins/medio.svg" alt="Pin" />
                Médio
              </span>
              <span><img class="pin__desempenho" src="imagens_design_system/pins/ruim.svg" alt="Pin" />
                Ruim
              </span>
            </div>


          </div>

          <div class="container-elementos">
            <h2>/Ícone de pins</h2>
            <br>
            <p>
              Os ícones que vão dentro dos pins são sempre preenchidos na cor DM_creme_00, padronizados no tamanho 20px
              X 20px.
            </p>
            <br />
            <el-row>
              <h1 style="text-align: center; margin-bottom: 20px; width: 100%">Coleção de ícones para os pins</h1>
            </el-row>
            <div class="pin__container__icon">
              <img class="pin__icon" src="imagens_design_system/pins/pin__icon--coroa.svg" alt="Pin" />
              <img class="pin__icon" src="imagens_design_system/pins/pin__icon--bolinha.svg" alt="Pin" />
              <img class="pin__icon" src="imagens_design_system/pins/pin__icon--estrela.svg" alt="Pin" />
            </div>
          </div>

          <div class="container-elementos">
            <h2>/Estados do pin</h2>
            <br>
            <p>
              Os ícones que vão dentro dos pins são sempre preenchidos na cor DM_creme_00, padronizados no tamanho 20px
              X 20px.
            </p>
            <br />
            <div class="estados__pin">
              <div>
                <h3>Pin ativo</h3>
                <div>
                  <img class="pin__medio" src="imagens_design_system/pins/pin__basico--azul.svg" alt="Pin" />
                </div>

                <p>A cor do pin é pré-determinada em cada caso de uso.</p>
              </div>
              <div>
                <h3>Pin hover</h3>
                <div>
                  <img class="pin__hover" src="imagens_design_system/pins/pin__hover.svg" alt="Pin" />
                </div>
                <p>Pin não muda de cor e barra do hover acompanha cor do pin. <br><br>
                  Hover aparece conforme o melhor espaço na tela, seja esquerda, direita ou centralizado.
                </p>
              </div>

              <div>
                <h3>Pin clicado</h3>
                <div>
                  <img class="pin__medio" src="imagens_design_system/pins/pin__basico--rosa.svg" alt="Pin" />
                </div>
                <p>No estado de click o pin é sempre rosa.</p>
              </div>
            </div>
          </div>


          <div class="container-elementos">
            <h2>/Estados do pin</h2>
            <br>
            <p>
              Para melhor acessibilidade de aplicações, esta sessão disponibiliza os pins acima já componentizados para
              a utilização imediata.
            </p>
            <br />
            <p>O pin por padrão vem com todas as opções ativas, sendo necessário o designer configurá-lo conforme o caso
              de uso.</p>
            <br>
            <div class="estados__pin--mestre">
              <div>
                <h3>Pin mestre</h3>
                <div>
                  <img class="pin__medio" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
                </div>
              </div>
              <p>Importante: o pin mestre só deve ser aterado caso a intenção seja alterar o aspecto geral de todos os
                pins.
                <br>
                <br>
                Para mudar cores, ícones e desempenho de algum pin pontualmente, faça em um pin gerado a partir do pin
                mestre.
              </p>
            </div>
          </div>



          <div>
            <h1>/Aplicação</h1>
            <hr />
            <br />
          </div>
          <img class="mapa__pins" src="mapa__pins.svg">
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "PinsDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Pins",
    };
  },
};
</script>

<style scoped>
.pin__large {
  width: 72px;
  margin-right: 50px;
}

.pin__small {
  width: 40px;
}

.mapa__pins {
  width: 100%;
}

.pin__medio {
  height: 46px;
  width: 100%;
}

.pin__icon {
  height: 50px;
}

.pin__hover {
  width: 300px;
}

.pin__desempenho {
  width: 30px
}

.pin__container__icon {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: var(--dm_amarelo_01);
  width: max-content;
  margin: auto;
  padding: 30px 44px;
  border-radius: 6px;
  gap: 40px;
}

.pin__container {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 50px;
  width: 184px;
}

.pin__container span {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.estados__pin {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.estados__pin--mestre {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  width: 100%;

}

.estados__pin--mestre div {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--dm_creme_00);
  min-height: 168px;
  border-radius: 6px;

}

.estados__pin--mestre p {
  align-self: center;
}

.estados__pin div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 6px;
  padding: 20px;
}

.estados__pin div div {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--dm_creme_00);
  min-height: 168px;

}
</style>
