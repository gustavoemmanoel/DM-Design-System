<template>
    <div>
        <FaleConosco />
        <el-row>
            <el-col :span="18" :offset="3" class="results">

                <SearchBar />
                <br>
                <h5>Resultados da pesquisa</h5>
                <hr>

                <el-button type="terciario" class="body_01 back_button">&#60; voltar</el-button>
                <div class="description" v-for="(coisa, index) in 10" :key="index">
                    <p class="body_02">There are many variations</p>
                    <p style="color: var(--dm_cinza_01)">Categoria do artigo</p>
                    <p style="color: var(--dm_cinza_02)">Lorem ipsum dolor sit amet. Sit velit galisum At quos modi aut
                        repellat commodi cum quod possimus. Et
                        dolores
                        vitae ad deserunt voluptatem sed soluta ullam. </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import FaleConosco from './FaleConosco.vue';
import SearchBar from './SearchBar.vue';

export default {
    name: 'ResultsEdmil',
    components: {
        SearchBar,
        FaleConosco
    },
    data() {
        return {

        }
    }
}

</script>

<style scoped>
.results {
    margin-top: 50px;
}

.description {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 2px;
}
</style>

<style>
.back_button {
    padding: 10px 0;
    margin: 20px 0 40px 0;
}
</style>