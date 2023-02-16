<template>
  <div>
    <el-alert class="erro" title="Erro ao carregar planilha" type="error" effect="dark">
    </el-alert>
    <el-alert class="acerto" title="Sucesso ao carregar planilha" type="success" effect="dark">
    </el-alert>
    <el-alert class="erro" title="Peso acima da capacidade" type="error" effect="dark">
    </el-alert>

  </div>
</template>
<script>

export default {
  name: "PreProcessamentos"
}
</script>
<style scoped>
.erro {
  width: 820px;
}

.acerto {
  width: 820px;
}
</style>
