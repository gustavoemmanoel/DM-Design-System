<template>
    <AppTes :artigoInfos="artigo" :activeNamess="'Mapa'">

        <atendimento-container >
            <h1><span style="color:var(--dm_azul_00)">/</span>MapaFaq</h1>
            <hr>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="InicioAtendimento">Início</el-breadcrumb-item>
                <el-breadcrumb-item>Mapa</el-breadcrumb-item>
            </el-breadcrumb>
            <br>
            <br>
            <p>Lorem ipsum dolor sit amet. Sit velit galisum At quos modi aut repellat commodi cum quod possimus. Et
                dolores vitae ad deserunt voluptatem sed soluta ullam. Nam voluptatem quia ad animi unde qui
                doloremque
                ratione cum officia illo est temporibus dolores ut sapiente repellendus hic dolores voluptate.
                Est fugit blanditiis ex libero non velit asperio. Ad quis ducimus est nostrum quisquam et tempora
                tempore eum harum atque. Quo necessitatibus quidem non perferendis maxime a ducimus rerum?
            </p>
        </atendimento-container>
    </AppTes>
</template>

<script>
import AppTes from '../../AppTes.vue'

export default {
    name: 'MapaFaq',
    components: { AppTes },
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
