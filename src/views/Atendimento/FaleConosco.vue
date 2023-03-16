<template>
    <div>
        <dm-information class="forms">
            <dm-icon Lamp />
            <span>
                <p>
                    Encontrou algum erro?
                </p>
                <router-link to="FormsEdmil" class="fale el-button--terciario">Fale Conosco</router-link>
            </span>
        </dm-information>
    </div>
</template>

<script>

export default {
    name: 'FaleConosco',
    data() {
        return {

        }
    }
}

</script>

<style scoped>
.forms {
    position: fixed;
    z-index: 200;
    bottom: 30px;
    right: 30px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

@keyframes lamp {
    0% {
        opacity: 1;
    }

    2% {
        opacity: 0.7;
    }

    4% {
        opacity: 1;
    }

    10% {
        opacity: 1;
    }

    12% {
        opacity: 0.7;
    }

    14% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

[Lamp] {
    animation-name: lamp;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}
</style>