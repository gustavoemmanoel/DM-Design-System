<template>
    <div>

        <FaleConosco />

        <el-row>

            <AsideNav activeNamess="Lojas" />

            <atendimento-container>
                <el-row style="padding-top: 50px;">
                    <el-col :span="22" :offset="1">
                        <SearchBar />
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="22" :offset="1">
                        <h1><span style="color:var(--dm_azul_00)">/</span>Lojas</h1>
                        <hr>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item to="InicioAtendimento">Início</el-breadcrumb-item>
                            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                        </el-breadcrumb>
                        <br>
                        <br>
                        <p>Lorem ipsum dolor sit amet. Sit velit galisum At quos modi aut repellat commodi cum quod
                            possimus. Et
                            dolores vitae ad desrum quisquam et tempora
                            tempore eum harum atque. Quo necessitatibus quidem non perferendis maxime a ducimus rerum?
                        </p>
                    </el-col>
                </el-row>
            </atendimento-container>
        </el-row>
        <ArtigosRelacionados :artigoInfos="artigo" />
    </div>
</template>

<script>
import ArtigosRelacionados from '../../ArtigosRelacionado.vue'
import AsideNav from '../../../AsideNav.vue'
import FaleConosco from '../../../FaleConosco.vue'
import SearchBar from '../../../SearchBar.vue'

export default {
    name: 'LojasFaq',
    components: { ArtigosRelacionados, AsideNav, FaleConosco, SearchBar },
    data() {
        return {
            artigo: [
                {
                    name: 'Mapa',
                    link: 'MapaFaq'
                },
                {
                    name: 'Cluster',
                    link: 'ClusterFaq'
                }
            ]
        }
    }
}
</script>
