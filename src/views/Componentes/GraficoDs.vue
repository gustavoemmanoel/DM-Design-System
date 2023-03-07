<template>
    <el-container>
        <el-header>
            <HeaderDs :headerTitle="headerTitle" />
        </el-header>
        <el-container>
            <el-main>
                <div>
                    <h1>/Gráficos</h1>
                    <hr>
                    <br />
                </div>

                <div class="cont-elements">
                    <h3>Estruturas</h3>
                    <br>
                    <p>Os gráficos são estruturas de visualização de dados. Eles são usados nas telas de BI. Podem ser dos
                        tipo gráfico de barras, gráfico de colunas, gráfico de pilha, gráfico de barras agrupadas, gráfico
                        divergente e gráfico de linha.</p>
                    <br>
                </div>

            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
    name: "GraficoDs",
    components: { HeaderDs }
};
</script>
