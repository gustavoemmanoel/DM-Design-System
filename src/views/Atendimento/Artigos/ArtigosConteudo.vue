<template>
    <div>

        <FaleConosco />

        <el-row style="margin-top: 50px;">
            <div style="width:300px">
                <AsideAtendimento />
            </div>
            <el-col :span="10" :offset="1">
                <h1><span style="color:var(--dm_azul_00)">/</span>Título</h1>
                <hr>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">Início</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                </el-breadcrumb>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet. Sit velit galisum At quos modi aut repellat commodi cum quod possimus. Et
                    dolores vitae ad deserunt voluptatem sed soluta ullam. Nam voluptatem quia ad animi unde qui doloremque
                    ratione cum officia illo est temporibus dolores ut sapiente repellendus hic dolores voluptate.
                    Est fugit blanditiis ex libero non velit asperio. Ad quis ducimus est nostrum quisquam et tempora
                    tempore eum harum atque. Quo necessitatibus quidem non perferendis maxime a ducimus rerum?
                </p>



            </el-col>
            <el-col :span="4" :offset="1">
                <ArtigosRelacionados :artigoInfos="artigo" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ArtigosRelacionados from './ArtigosRelacionado.vue'
import AsideAtendimento from '../AsideNav.vue'
import FaleConosco from '../FaleConosco.vue'

export default {
    name: 'ArtigosConteudo',
    components: { ArtigosRelacionados, AsideAtendimento, FaleConosco },
    data() {
        return {
            artigo: [
                'Mateus',
                'Mateus',
                'Mateus',
                'Mateus',
                'Mateus',
            ]
        }
    }
}
</script>

<style scoped></style>