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
                    <p>Os gráficos são estruturas de visualização de dados. Eles são usados nas telas de BI. Podem ser dos
                        tipo gráfico de barras, gráfico de colunas, gráfico de pilha, gráfico de barras agrupadas, gráfico
                        divergente e gráfico de linha.</p>
                    <br />
                </div>

                <div class="cont-elements">
                    <h3>Comportamentos</h3>
                    <br>

                    <div>
                        <el-row style="gap: 8px">
                            <h6>Rótulo:</h6> <span class="detail_01">Quantidade</span>
                        </el-row>
                        <br />

                        Dependendo do tamanho do gráfico, é possível pular algumas categorias ordinais.
                        <br>
                        Mostrar no máximo 5
                        rótulos.
                    </div>
                    <br>
                    <div class="grid-grafics">
                        <span><dm-icon CorrectGreen /><img src="graficos/01.svg"></span>
                        <span><dm-icon WrongRed /><img src="graficos/02.svg"></span>
                    </div>
                    <!-- Expansão -->
                    <br>
                    <hr>
                    <br>
                    <div>
                        <el-row style="gap: 8px">
                            <h6>Rótulo:</h6> <span class="detail_01">Expansão</span>
                        </el-row>
                        <br />
                        Numa situação onde há muitos rótulos que precisam ser visualizados, é possível mostrar apenas parte
                        deles e agrupar em um só rótulo os demais rótulos, através da soma ou média, mostrando detalhes com
                        um hover.
                        <br>
                        <br>
                        <div class="grid-grafics">
                            <span><dm-icon CorrectGreen /><img src="graficos/03.svg"></span>
                            <span><dm-icon WrongRed /><img src="graficos/04.svg"></span>
                        </div>

                    </div>
                    <!-- Marcadores -->
                    <br>
                    <hr>
                    <br>
                    <div>
                        <el-row style="gap: 8px">
                            <h6>Marcadores</h6>
                        </el-row>
                        <br />

                        Marcadores subdividem os intervalos entre as linhas de marcação. Utilizar de 3-9 marcadores entre as
                        linhas, depedendo do tamanho do gráfico.
                        <br>
                        <br>
                        <div class="grid-grafics">
                            <span><dm-icon CorrectGreen /><img src="graficos/05.svg"></span>
                            <span><dm-icon WrongRed /><img src="graficos/06.svg"></span>
                        </div>
                    </div>
                    <!--  -->
                    <br>
                    <hr>
                    <br>
                    <div>
                        <el-row style="gap: 8px">
                            <h6>Abreviação</h6>
                        </el-row>
                        <br />

                        Utilizar abreviação nos rótulos de eixo de número para melhorar a legibilidade.
                        <br>
                        <br>
                        <p>K - mil</p>
                        <p>M ou mi - milhões</p>
                        <p>B ou bi - bilhões</p>

                        <br>
                        <div class="grid-grafics">
                            <span><dm-icon CorrectGreen /><img src="graficos/07.svg"></span>
                            <span><dm-icon WrongRed /><img src="graficos/08.svg"></span>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="cont-elements legend_img">
                    <h3>Legendas</h3>
                    <br>
                    <img src="graficos/09.svg">
                    <hr>
                    <img src="graficos/10.svg">
                    <hr>
                    <img src="graficos/11.svg">
                    <hr>
                    <img src="graficos/12.svg">
                    <hr>
                    <img src="graficos/13.svg">
                    <hr>
                    <img src="graficos/14.svg">
                    <hr>
                    <img src="graficos/15.svg">
                    <hr>
                </div>

                <div class="cont-elements legend_img">
                    <h3>Vertical</h3>
                    <br>
                    <img src="graficos/16.svg">
                </div>
                <div class="cont-elements legend_img">
                    <h3>Horizontal</h3>
                    <br>
                    <img src="graficos/17.svg">
                </div>

                <div class="cont-elements legend_img">
                    <h3>Tipos de gráficos</h3>
                    <br>
                    <div class="grid_tipos">
                        <span>
                            <h6>Gráfico de barras</h6>
                            <br>
                            <p>O gráfico de barras é utilizado para visualização comparativa simples e clara de valores.</p>
                        </span>
                        <img src="graficos/18.svg">
                    </div>
                    <hr>
                    <div class="grid_tipos">
                        <span>
                            <h6>Gráfico de colunas</h6>
                            <br>
                            <p>Um gráfico de barras é um gráfico de colunas quando as barras se encontram no sentido
                                vertical.</p>
                        </span>
                        <img src="graficos/19.svg">
                    </div>
                    <hr>
                    <div class="grid_tipos">
                        <span>
                            <h6>Gráfico de pilha</h6>
                            <br>
                            <p>Nos gráficos de pilha as barras são segmentadas por cores. O comprimento total de uma barra
                                mostra o valor de uma determinada categoria e os comprimentos de seus segmentos representam
                                a contribuição de cada um para a categoria.</p>
                        </span>
                        <img src="graficos/20.svg">
                    </div>
                    <hr>
                    <div class="grid_tipos">
                        <span>
                            <h6>Barras agrupadas</h6>
                            <br>
                            <p>Um gráfico de barras agrupadas também usa cores para representar segmentos de uma barra,
                                sendo mais recomendável que o gráfico de pilha quando a comparação dos segmentos for mais
                                importante que a comparação dos totais de cada categoria.</p>
                        </span>
                        <img src="graficos/21.svg">
                    </div>
                    <hr>
                    <div class="grid_tipos">
                        <span>
                            <h6>Gráfico divergente</h6>
                            <br>
                            <p>O gráfico divergente é um utilizado quando os dados incluirem valores positivos e negativos.
                            </p>
                        </span>
                        <span>
                            <img src="graficos/22.svg">
                            <img src="graficos/23.svg">
                        </span>
                    </div>
                    <hr>
                    <div class="grid_tipos">
                        <span>
                            <h6>Gráfico de linha</h6>
                            <br>
                            <p>Os gráficos de linha são utilizados para representar grandes quantidades de dados que ocorrem
                                em um período de tempo contínuo.</p>
                        </span>
                        <img src="graficos/24.svg">
                    </div>
                </div>
                <!--  -->
                <div class="cont-elements legend_img">
                    <h3>Comportamento dos Gráficos</h3>
                    <br>
                    <h6>Vertical</h6>
                    <br>
                    <p>Quando o usuário passa o cursor por cima de uma barra, é mostrado um balão com o valor real.
                        <br>
                        <br>
                        No caso do gráfico de linha, é mostrado um balão referente ao ponto do mês em que o cursor estiver
                        passando por cima.
                    </p>
                    <br>
                    <div style="display:grid; grid-template-columns:1fr 1.125fr; gap: 40px">
                        <img style="width: 100%;" src="graficos/25.svg">
                        <img style="width: 100%;" src="graficos/26.svg">
                    </div>

                    <!--  -->

                    <hr>

                    <!--  -->

                    <h6>Foco</h6>
                    <br>
                    <p>Ao clicar em uma barra, as outras ficam com uma opacidade de 50%, a barra selecionada se destaca e
                        mais informações são exibidas no balão.</p>

                    <br>
                    <div style="display:grid; grid-template-columns: 1fr 1.022fr; gap: 30px;">
                        <img style="height: 100%;" src="graficos/27.svg">
                        <img style="height: 100%;" src="graficos/28.svg">
                    </div>

                    <!--  -->

                    <hr>

                    <!--  -->

                    <div class="grid_tipos">
                        <span>
                            <h6>Carregando gráficos</h6>
                            <br>
                            <p>Quando o gráfico está carregando ele pode ser visualizado pelo usuário, mas em tons de cinza
                                e
                                sem
                                nenhuma informação.
                            </p>
                        </span>
                        <img src="graficos/29.svg">
                    </div>

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
<style scoped>
.grid-grafics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.grid-grafics img {
    width: 100%;
}

.grid-grafics dm-icon {
    margin-bottom: 14px;
}

hr {
    border-color: var(--dm_cinza_03);
}

.legend_img img {
    width: 100%;
}

.legend_img hr {
    margin: 50px 0;
}


.grid_tipos {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
}
</style>
