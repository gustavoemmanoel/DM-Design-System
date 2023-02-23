<template>
    <el-container>
        <el-header>
            <HeaderDs :headerTitle="headerTitle" />
        </el-header>
        <el-container>
            <div class="c-principios">
                <div class="principios">
                    <p class="principios__title">Uma série de princípios de design
                        que servem como mantra para nortear todas as soluções criadas.</p>
                    <img class="principios__eng" src="/eng.svg">
                </div>
                <div class="valores">
                    <div class="valores__1">
                        <img class="valores__img" src="feedback.svg">
                        <h1>Feedback</h1>
                        <p>Entendemos a importância do usuário não se sentir sozinho ou frustrado por ações sem efeito
                            no
                            sistema. É necessário sempre informar, orientar e mostrar o seu progresso. Na prática, isso
                            se
                            reflete em interações com botões, loadings, mensagens de erro, avisos e mudanças visuais,
                            sempre
                            que uma ação é tomada.</p>
                    </div>
                    <div class="valores__2">
                        <img class="valores__img" src="foco.svg">
                        <h1>Foco</h1>
                        <p>Nossos produtos solucionam problemas difíceis. Quanto mais simples for o acesso do usuário às
                            funcionalidades, mais fácil o sistema responderá ao que se propõe. Isso se reflete num
                            estudo de menos cliques, design minimalista e funcional, com as funcionalidades principais à
                            vista desde o primeiro momento.</p>
                    </div>
                    <div class="valores__1">
                        <img class="valores__img" src="equilibrio.svg">
                        <h1>Equilíbrio</h1>
                        <p>A harmonia visual é essencial em nossos sistemas. É importante que as telas tenham cuidado
                            com espaçamentos, distribuição de pesos, hierarquia de atenção, uso de cores e a remoção de
                            elementos desnecessários que confundam ou cansem a leitura.</p>

                    </div>
                    <div class="valores__2">
                        <img class="valores__img" src="paratodos.svg">
                        <h1>Para Todos</h1>
                        <p>Nossos sistemas são desenvolvidos para ambientes desktop e devem funcionar no maior número
                            possível de cenários e telas. Responsividade, cuidado com os grids e variações de contraste
                            e cores são importantes, assim como é fundamental a acessibilidade aos mais diversos
                            usuários.</p>

                    </div>
                </div>
            </div>

        </el-container>
    </el-container>
</template>
<script>
import HeaderDs from "./../components/HeaderDs.vue";

export default {
    name: "PrincipiosDs",
    components: {
        HeaderDs,
    },
    data() {
        return {
            headerTitle: "Princípios",
        };
    },
};
</script>

<style scoped>
.c-principios {
    display: flex;
    flex-direction: column;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.grid__img {
    width: 100%;
}

.grid span {
    margin-bottom: 16px;
}

.principios {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    align-items: center;
    height: 280px;
    background: var(--dm_azul_00);
    width: 100%;
    padding: 0 60px;
    margin-top: 15px
}


.principios__eng {
    width: 100%;
    height: 70%;
    object-fit: contain;
}

.principios__title {
    color: var(--dm_creme_00);
    font-size: 26px;
}


.valores__1 h1 {
    color: var(--dm_azul_00);
}

h1 {
    margin-bottom: 20px;
}

.valores {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100%;
    height: calc(100vh - 355px);
}

.valores p {
    line-height: 28px;
    font-size: 16px;
    font-weight: 400;
}

.valores__1,
.valores__2 {
    padding: 24px;
}

.valores__2 {
    color: var(--dm_creme_00);
    background: var(--dm_preto_00);
}

.valores__img {
    display: flex;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    height: 120px;
}
</style>
