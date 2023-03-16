<template>
    <div>
        <el-row>

            <div style="width: 300px;">
                <AsideAtendimento />
            </div>

            <el-col :span="17" :offset="1" class="results">
                <SearchBar />
                <div class="back_button">
                    <router-link to="AtendimentoEdmil" class="body_01  el-button--terciario">&#60;
                        voltar</router-link>
                </div>
                <h1><span style="color:var(--dm_azul_00)">/</span>Fale Conosco</h1>
                <hr>
                <br>
                <br>

                <div class="result__input ">
                    <h6>Tipo com Reporte</h6>


                    <el-select v-model="value" placeholder="Selecione">
                        <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value" />
                    </el-select>
                </div>

                <!--  -->

                <div class="result__input ">
                    <h6>Tela com erro</h6>
                    <el-select v-model="value" placeholder="Selecione">
                        <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value" />
                    </el-select>
                </div>

                <!--  -->

                <div class="result__input">
                    <h6>Assunto</h6>
                    <textarea cols="30" rows="2" placeholder="Digite" />
                </div>

                <!--  -->

                <div class="result__input">
                    <h6>Comentario</h6>
                    <p class="detail_02">Deixe abaixo um relato, o mais detalhado possível do ocorrido.</p>
                    <textarea cols="30" rows="6" placeholder="Digite"></textarea>
                </div>

                <!--  -->

                <div class="result__input">
                    <h6>Anexo</h6>
                    <p class="detail_02">Adicione uma imagem ou vídeo do problema encontrado, para que possamos resolve-lo
                        mais
                        rapidez.</p>
                    <el-upload class="upload-demo dm-upload" drag
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                        <div class="el-upload__text">
                            <dm-icon upload />
                            Arraste um arquivo aqui ou <em>clique para fazer upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                Arquivos jpg/png/mp4 inferiores a 500kb
                            </div>
                        </template>
                    </el-upload>
                </div>

                <dm-popup @click="popup" popup="close">
                    <dm-popup-background>
                        <dm-icon CorrectGreen />
                        <p>Formulário enviado, embreve entraremos emc contato pelo email <u
                                style="color:var(--dm_azul_00)">user@gmail.com</u></p>
                        <dm-button popup="close">Fechar</dm-button>
                    </dm-popup-background>
                </dm-popup>
                <dm-button-popup @click="popup" popup="close" class="el-button el-button--primario">
                    Enviar
                </dm-button-popup>

                <footer />

            </el-col>
        </el-row>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import AsideAtendimento from './AsideNav.vue';

export default {
    name: 'FormsEdmil',
    components: {
        SearchBar,
        AsideAtendimento,
    },
    data() {
        return {
            upPopup: false,
            idPopup: null,
            value: null,
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ]
        }
    },
    mounted() {
        this.indexadorPopus()
    },
    methods: {
        indexadorPopus() {
            //INDEXA TODOS POPUPS CRIADOS NO HMTL
            const $arrayPopups = document.querySelectorAll('dm-popup')
            const $arraysButtons = document.querySelectorAll('dm-button-popup')
            for (let i = 0; $arrayPopups.length > i; i++) {
                $arrayPopups[i].style.display = 'none'
                $arrayPopups[i].setAttribute('popupid', `${i}`)
                $arraysButtons[i].setAttribute('popupbutton', `${i}`)
            }
        },
        popup(event) {
            //ABRE POPUP CLICADO
            const $body = document.querySelector('body')
            if (this.upPopup === false) {
                this.idPopup = event.target.getAttribute('popupbutton')
                $body.style.overflow = 'hidden'
                this.upPopup = !this.upPopup
                document.querySelector(`[popupid="${this.idPopup}"]`).style.display = 'flex'
            }
            //COMPARA OS OBJETOS CLICADOS QUE PODEM FECHAR O POPUP
            else if (event.target.getAttribute('popup') == 'close') {
                $body.style.overflow = 'overlay'
                this.upPopup = !this.upPopup
                document.querySelector(`[popupid="${this.idPopup}"]`).style.display = 'none'
            }
        }
    },
}

</script>

<style scoped>
.results {
    margin-top: 50px;
}

.description {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 2px;
}

.result__input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
}

.back_button {
    padding: 10px 0;
    margin: 35px 0 40px 0;
}
</style>

<style>
textarea {
    border: 2px solid var(--dm_cinza_02);
    border-radius: 6px;
    padding: 10px;
    background: var(--dm_creme_02);
    font-family: 'Roboto', sans-serif;
    font-weight: 400 !important;
    font-size: 16px;
    width: 100%;
    resize: none
}

textarea::placeholder {
    color: var(--dm_cinza_02) !important;
    outline: none
}



textarea:hover,
textarea:focus {
    outline: none;
    border-color: var(--dm_azul_00);
    box-shadow: 2px solid var(--dm_azul_00);
    font-size: 16px;
}

footer {
    padding: 40px 0;
}
</style>
