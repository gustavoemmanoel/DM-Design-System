<template>
  <dm-popup @click="upPopup" type="escolha" popupName="alerta">Popup Alerta</dm-popup>
</template>
<script>
export default {
  data() {
    return {
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
            icon: 'alerta',
            closeButton: 'close'
          },
          {
            popupName: 'sucesso',
            title: 'Rotas e romanieos remanejados com sucesso!',
            icon: 'errada',
            closeButton: 'Ok'
          },
        ]
    };
  },

  methods: {
    upPopup(event) {
      const $body = document.querySelector('body')
      const $header = document.querySelector('.header')
      this.removeAtr = event.target.getAttribute('remove')

      if (this.changePopup === true) {
        $body.style.overflow = 'hidden'
        $body.style.paddingRight = '16px'
        $header.style.paddingRight = '16px'
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
        let containerPopup = document.querySelector(`[popupName="${this.nameAtributo}"]`)
        this.popupSelecionado = this.popups.find((popupName) => {
          return popupName.popupName === this.nameAtributo
        })
        var newDiv = document.createElement('dm-popup-overlay')
        newDiv.setAttribute('id', 'excluir')
        newDiv.setAttribute('remove', `${this.nameAtributo}`)
        newDiv.innerHTML = `
        <dm-popup-background>
          <dm_icon ${this.popupSelecionado.icon}></dm_icon>
          
          ${this.popupSelecionado.title}
          <el-button 
            class="dm-button--popup"
            remove="${this.nameAtributo}"> ${this.popupSelecionado.closeButton}
          </el-button>
        </dm-popup-background>`
        containerPopup.appendChild(newDiv)
        this.changePopup = !this.changePopup
      } else if (this.removeAtr === this.arrayClicked.popupName) {
        $body.style.overflow = 'auto'
        $body.style.paddingRight = '0'
        $header.style.paddingRight = '0'
        document.querySelector('#excluir').remove()
        this.changePopup = !this.changePopup
        console.log(`remove ${this.nameAtributo}`)
      }
    },
  },
};

</script>

<style scoped>
.dm-button--popup {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 30px;
  height: 35px;
  background: var(--dm_azul_00);
  color: var(--dm_creme_02);
  border-radius: 6px;
}

dm-popup-background {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 300px;
  background: var(--dm_creme_02);
  padding: 40px;
  border-radius: 6px;
  color: var(--dm_preto_00);
  cursor: default;
}

dm-popup-background dm_icon {
  width: 40px;
  height: 40px;
}

dm-popup {
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  font-family: "Roboto", sans-serif;
  background: var(--dm_azul_00);
  color: var(--dm_creme_00);
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  border: none;
  height: 35px;
}

#excluir {
  cursor: default;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

dm-information {
  display: grid;
  grid-template-columns: 25px 1fr;
  gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 14px 20px;
  border: 2px solid var(--dm_amarelo_01);
  border-radius: 6px;
  width: 350px;
}

dm-information dm_icon {
  width: 43px;
  height: 43px;
}

dm-information span {
  text-align: center;
}

dm-information span .el-button--terciario {
  text-align: center;
  height: 0;
}

/* Element Plus */


dm-alert {
  display: flex;
  align-items: center;
  width: max-content;
  padding: 10px 14px;
  border-radius: 6px;
  background-color: var(--dm_creme_02);
  color: var(--dm_preto_00);
  border: 2px solid var(--dm_vermelho_00);
  min-height: 40px;
  font-weight: 600;
}

dm-alert span {
  display: flex;
  gap: 4px;
  margin-left: 14px;
}

dm-atencao {
  color: var(--dm_vermelho_00);
}

dm-alert button {
  border: none;
  background: none;
  transition: .2s;
  cursor: pointer;
  margin-left: 12px;
}

dm-alert button:hover {
  opacity: 0.6;
  transition: .2s;
}
</style>