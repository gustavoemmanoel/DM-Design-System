<template>
    <el-container>
        <el-header>
            <HeaderDs :headerTitle="headerTitle" />
        </el-header>
        <el-container>
            <el-aside>
                <AsideComponent :btnAtivo="btnAtivo" />
            </el-aside>


            <div class="c-principios">
                <div class="principios">
                    <span>
                        <h1>/Bem-vind@!</h1>
                        <p class="principios__title">
                            Essa é a v.01 do Design System da Data Machina. Confira aqui o conteúdo disponível.
                        </p>
                    </span>
                    <img class="principios__elements" src="elements_inicio.svg">
                    <img class="principios__grid" src="grid.svg">

                </div>
                <div class="valores">
                    <div class="valores__1">
                        <div>
                            <h1>Princípios</h1>
                            <p>Os princípios de design são os mandamentos que regem o trabalho de interface e de
                                experiência que desenhamos para os usuários dos produtos Data Machina.</p>
                        </div>
                    </div>
                    <div class="valores__2">
                        <div>
                            <h1>Fundação</h1>
                            <p>Um conjunto de peças que norteiam toda a fundamentação do design system, como cor,
                                tipografia e ícones. Seguindo o branding book da DM e os nossos princípios de design.
                            </p>
                        </div>
                    </div>
                    <div class="valores__3">
                        <div>
                            <h1>Componentes</h1>
                            <p>Os componentes surgem quando os itens de fundação sem unem para criar funcionalidades
                                claras dentro da interface, como um botão ou um dropdown.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </el-container>
    </el-container>
</template>
<script>
import AsideComponent from "./ElementsDs/AsideComponent.vue";
import HeaderDs from "../components/HeaderDs.vue";

export default {
    name: "InicioDs",
    components: {
        AsideComponent,
        HeaderDs,
    },
    data() {
        return {
            headerTitle: "Início",
        };
    },
};
</script>

<style scoped>
.principios {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 280px;
    background: var(--dm_preto_00);
    color: var(--dm_creme_00);
    width: 100%;
    padding: 0 60px;
    margin-top: 75px;
}


.principios__elements {
    z-index: 1;
    width: 100%;
    height: 70%;
    object-fit: contain;
}

.principios__grid {
    position: absolute;
    object-fit: cover;
    height: 280px;
    left: 0;
    width: 100%;
}

.principios__title {
    color: var(--dm_creme_00);
    font-size: 26px;
}

h1 {
    margin-bottom: 20px;
}

.valores {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    height: calc(100vh - 355px);
}

.valores p {
    line-height: 28px;
    font-size: 16px;
    font-weight: 400;
}

.valores__1 {
    background: var(--dm_azul_00);
    color: var(--dm_creme_00);
}

.valores__1,
.valores__2,
.valores__3 {
    padding: 24px;

}

.valores__1 div,
.valores__2 div,
.valores__3 div {
    padding-top: 40px;
    max-width: 400px;
    margin: auto;

}

.valores__2 {
    color: var(--dm_preto_00);
    background: var(--dm_amarelo_00);
}

.valores__3 {
    color: var(--dm_creme_00);
    background: var(--dm_rosa_00);
}

.valores__img {
    display: flex;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    height: 120px;
}
</style>
