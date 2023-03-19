<template>
    <AppTes :artigoInfos="artigo" :activeNamess="'Scraper'">

        <atendimento-container >
            <h1><span style="color:var(--dm_azul_00)">/</span>Scraper</h1>
            <hr>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="InicioAtendimento">Início</el-breadcrumb-item>
                <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            </el-breadcrumb>
            <br>
            <br>
            <p>Lorem ipsum dolor sit amet. Sit velit <br><br> galisum At quos modi aut repellat commodi cum quod
                possimus. Et dolores vitae ad deserunt voluptatem sed soluta ullam. Nam voluptatem quia ad animi
                unde qui doloremque ratione cum officia illo est temporibus dolores ut sapiente repellendus hic
                dolores voluptate.
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
    name: 'ScraperFaq',
    components: { AppTes },
    data() {
        return {
            artigo: [
                {
                    name: 'Lojas',
                    link: 'LojasFaq'
                },
                {
                    name: 'Cluster',
                    link: 'ClusterFaq'
                },
                {
                    name: 'Mapa',
                    link: 'MapaFaq'
                }
            ]
        }
    }
}
</script>

<style scoped></style>