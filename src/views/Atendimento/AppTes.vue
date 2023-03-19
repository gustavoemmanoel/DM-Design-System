<template>
    <div>
        <FaleConosco />

        <AsideNav :activeNamess="activeNamess" />


        <atendimento-container>
            <el-row>
                <el-col :span="22" :offset="1" class="faq">
                    <SearchBar />
                    <br><br>
                    <div v-if="backButton === false">
                        <router-link to="InicioAtendimento" class="el-button--terciario h6">&#60;
                            Voltar</router-link>
                        <br><br><br>
                    </div>
                    <slot></slot>
                </el-col>
            </el-row>
        </atendimento-container>
        <ArtigosRelacionado :artigoInfos="artigoInfos" />
    </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import FaleConosco from './FaleConosco.vue'
import AsideNav from './AsideNav.vue'
import ArtigosRelacionado from './Artigos/ArtigosRelacionado.vue'

export default {
    name: "AppTes",
    components: {
        SearchBar,
        FaleConosco,
        AsideNav,
        ArtigosRelacionado
    },
    props: {
        artigoInfos: String,
        activeNamess: String,
        backButton: Boolean
    },
    data() {
        return {
            input: null,
            varBtn: this.backButton
        }
    },
    mounted() {
        this.backBtn()
        console.log(this.backButton)
    },
    methods: {
        backBtn() {
            this.varBtn = true
        }
    }

};
</script>
    
<style scoped>
.faq {
    margin-top: 50px;
}
</style>
   