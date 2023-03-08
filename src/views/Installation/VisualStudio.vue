<template>
    <el-container>
        <el-header>
            <HeaderDs :headerTitle="headerTitle" />
        </el-header>
        <el-container>
            <el-main>

                <h1>/Visual Studio - Plugins Recomendados</h1>
                <hr>
                <br>
                <div class="cont-elements">

                    <div class="grid-description">
                        <img src="instalacao/tag.Default">
                        <div>
                            <h6>
                                Auto Rename Tag
                            </h6>
                            <br>
                            <span>
                                Com o <a class="el-button--terciario"
                                    href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
                                    target="_blank">Auto Rename Tag</a> ao renomear uma tag de abertura
                                "&#60;<span tagColor>tagexemplo</span>&#62;" tanto na de fechamento <br /> "&#60;/<span
                                    tagColor>tagexemplo</span>&#62;", a outra terá seu nome alterado automáticamente.
                            </span>

                        </div>
                    </div>

                </div>
                <div class="cont-elements">
                    <div class="grid-description">

                        <img src="instalacao/color.Default">

                        <div>
                            <h6>Color Highlight</h6>
                            <br />
                            <span>
                                O <a class="el-button--terciario"
                                    href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
                                    target="_blank">Color Highlight</a> auxilia na visualização de códigos de cores,
                                mostrando o tom
                                da cor diretamente no
                                Visual Studio
                            </span>
                        </div>
                    </div>
                </div>

                <div class="cont-elements">
                    <div class="grid-description">

                        <img src="instalacao/githistory.png">
                        <span>
                            <h6>Git History</h6>
                            <br />
                            <p>Com o <a class="el-button--terciario"
                                    href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory"
                                    target="_blank">Git History</a> você pode visualizar o histórico de commits realizados
                                em seu projeto.</p>
                        </span>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>
    
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
    name: "VisualStudio",
    components: {
        HeaderDs,
    },
    data() {
        return {
            headerTitle: "Visual Studio",
        }
    },
};
</script>
  
<style scoped>
.grid-description {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 40px;

}

.color_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.color_grid img {
    height: 300px;
}


.grid-description img {
    width: 100%;
}
</style>