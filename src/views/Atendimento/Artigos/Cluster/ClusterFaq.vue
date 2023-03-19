<template>
    <AppTes :artigoInfos="artigo" :activeNamess="'Cluster'">
        <atendimento-container>
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
        </atendimento-container>
    </AppTes>
</template>

<script>
import AppTes from '../../AppTes.vue'

export default {
    name: 'ClusterFaq',
    components: { AppTes },
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
