<template>
    <div>
        <el-input v-model="input" placeholder="Pesquisar">
            <template #suffix>
                <dm-icon Search style="opacity: 0.3;" />
            </template>
        </el-input>
    </div>
</template>

<script>

export default {
    name: 'SearchBar',


}
</script>

<style scoped></style>