<template>
    <div>
        <el-col :span="4" :offset="1" class="relacionados detail_02">
            <h6>Artigos Relacionados</h6>
            <br>
            <div class="relacionados__container">
                <a v-for="(artigo, index) in artigoInfos" :key="index">
                    {{ artigo }}
                </a>
            </div>


        </el-col>
    </div>
</template>
<script>
export default {
    name: 'ArtigosRelacionado',
    props: {
        artigoInfos: String
    },
}
</script>

<style scoped>
.relacionados {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 20px 20px 20px;
    height: 100vh;
    min-width: 240px;
}

.relacionados__container {
    display: flex;
    flex-direction: column;
}

.relacionados a {
    cursor: pointer;
    margin-bottom: 16px;
    transition: .2s;
}

.relacionados a:hover {
    color: var(--dm_azul_00);
    transition: .2s;
    text-decoration: underline;
}
</style>