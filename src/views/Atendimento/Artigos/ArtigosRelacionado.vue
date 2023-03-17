<template>
    <div class="relacionados detail_02">
        <h6>Artigos Relacionados</h6>
        <br>
        <div class="relacionados__container">
            <router-link class="link-artigos" :to="artigo.link" v-for="(artigo, index) in artigoInfos" :key="index">
                {{ artigo.name }}
            </router-link>
        </div>
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
    min-width: 250px;
    position: fixed;
    right: 0;
    top: 0;
}

.relacionados__container {
    display: flex;
    flex-direction: column;
}

.link-artigos {
    cursor: pointer;
    margin-bottom: 16px;
    transition: .2s;
    color: var(--dm_cinza_01);
    text-decoration: none;
}

.link-artigos:hover {
    color: var(--dm_azul_00);
    transition: .2s;
    text-decoration: underline;
}
</style>