<template>
    <div class="aside">
        <el-collapse accordion>
            <span name="1" v-for="(coisa, index) in 10" :key="index">
                <el-collapse-item>
                    <template #title>
                        <div class="aside__option">
                            <div class="aside__icon">
                                <dm-icon DArrowLeftWhite />
                            </div>
                            <h6>Unknown printer took</h6>
                        </div>
                    </template>
                    <div class="aside__container" v-for="(coisa, index) in 3" :key="index">
                        <option-aside class="h6">Aside option</option-aside>
                    </div>
                </el-collapse-item>
            </span>

        </el-collapse>


    </div>
</template>


<script>
export default {
    name: 'AsideNav'
}

</script>

<style scoped>
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
