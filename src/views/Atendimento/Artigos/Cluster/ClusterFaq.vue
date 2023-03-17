<template>
    <div>

        <FaleConosco />

        <el-row>

            <AsideNav activeNamess="Cluster" />

            <atendimento-container>
                <el-row style="padding-top: 50px;">
                    <el-col :span="22" :offset="1">
                        <SearchBar />
                    </el-col>
                </el-row>
                <el-col :span="22" :offset="1" style="padding-top: 50px;">
                    <h1><span style="color:var(--dm_azul_00)">/</span>Cluster Faq</h1>
                    <hr>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item to="InicioAtendimento">Início</el-breadcrumb-item>
                        <el-breadcrumb-item>Cluster</el-breadcrumb-item>
                    </el-breadcrumb>
                    <br>
                    <br>
                    <p>Lorem ipod possimus. Et dolores vitae ad deserunt voluptatem sed soluta ullam. Nam voluptatem quia ad
                        animi unde qui doloremque Est fugit blanditiis ex libero non velit asperio. Ad quis ducimus est
                        nostrum
                        quisquam et tempora tempore eum harum atque. Quo necessitatibus quidem non perferendis maxime a
                        ducimus
                        rerum?
                        <br>
                        <br>
                        Est fugit blanditiis ex libero non velit asperio. Ad quis ducimus est nostrum quisquam et tempora
                        tempore eum harum atque. Quo necessitatibus quidem non perferendis maxime a ducimus rerum?
                    </p>
                </el-col>
            </atendimento-container>
        </el-row>
        <ArtigosRelacionados :artigoInfos="artigo" />
    </div>
</template>

<script>

import ArtigosRelacionados from '../ArtigosRelacionado.vue'
import AsideNav from '../../AsideNav.vue'
import FaleConosco from '../../FaleConosco.vue'
import SearchBar from '../../SearchBar.vue'

export default {
    name: 'ClusterFaq',
    components: { ArtigosRelacionados, AsideNav, FaleConosco, SearchBar },
    data() {
        return {
            artigo: [
                {
                    name: 'Lojas',
                    link: 'LojasFaq'
                },
                {
                    name: 'Scraper',
                    link: 'ScraperFaq'
                }
            ]
        }
    }

}
</script>
