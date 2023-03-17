<template>
    <div class="aside">
        <el-collapse accordion v-model="activeNames" v-for="(coisa, index) in coisas" :key="index">
            <el-collapse-item :name="coisa.activedCollapse">

                <template #title>
                    <div class=" aside__option">
                        <div class="aside__icon">
                            <dm-icon DArrowLeftWhite />
                        </div>
                        <h6>{{ coisa.activedCollapse }}</h6>
                    </div>
                </template>
                <div class="aside__container" v-for="(option, index) in coisa.options" :key="index">
                    <router-link class="h6 router-link" :to="option.artigoPage" :id="`${index}-${coisa.name}`"
                        currentPage>{{
                            option.artigoName }}</router-link>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>


<script>
export default {
    name: 'AsideNav',
    props: {
        activeNamess: String
    },
    data() {
        return {
            activeNames: this.activeNamess,

            coisas: [
                {
                    activedCollapse: 'Scraper',
                    options: [
                        {
                            artigoName: 'Scraper',
                            artigoPage: 'ScraperFaq',
                        },
                    ]
                },

                {
                    activedCollapse: 'Lojas',
                    options: [
                        {
                            artigoName: 'Como ver Lojas',
                            artigoPage: 'LojasFaq',
                        },

                    ]
                },
                {
                    activedCollapse: 'Cluster',
                    options: [
                        {
                            artigoName: 'Cluster Mais',
                            artigoPage: 'ClusterMais',
                        },
                        {
                            artigoName: 'Cluster Faq',
                            artigoPage: 'ClusterFaq',
                        },

                    ]
                },
                {
                    activedCollapse: 'Mapa',
                    options: [
                        {
                            artigoName: 'Mapa 1',
                            artigoPage: 'FaqMapa',
                        },
                        {
                            artigoName: 'Mapa 2',
                            artigoPage: 'MapaFaq',
                        },

                    ]
                },


            ]
        }
    },
}

</script>

<style scoped>
.router-link {
    text-decoration: none;
    color: var(--dm_preto_00);
    border-radius: 6px;
    padding: 8px;
    margin-bottom: 8px;
    margin-left: 24px;
}

[currentPage] {
    background: var(--dm_azul_03);
}

.aside {
    position: fixed;
    top: 0;
    background: var(--dm_creme_01);
    height: 100vh;
    padding: 10px;
    padding-top: 50px;
    width: 300px;
}

.aside__option {
    display: flex;
    gap: 20px;
    align-items: center;
}

.aside__icon {
    padding: 6px;
    border-radius: 100%;
    background-color: var(--dm_azul_00);
}

.aside__container {
    display: flex;
    flex-direction: column;
}

option-aside {
    display: flex;
    border-radius: 6px;
    padding: 8px 14px;
    margin-left: 26px;
    transition: .2s;
    width: 86%;
    cursor: pointer;
}

option-aside:hover {
    background: var(--dm_azul_03);
    transition: .2s;
}
</style>
