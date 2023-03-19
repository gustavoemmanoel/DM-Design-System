<template>
    <AppTes :artigoInfos="artigo" :activeNamess="'Loja'">
        <atendimento-container >
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
        </atendimento-container>
    </AppTes>
</template>

<script>
import AppTes from '../../AppTes.vue'


export default {
    name: 'LojasFaq',
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
