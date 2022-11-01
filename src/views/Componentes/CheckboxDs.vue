<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>
      <el-row class="componentsStyleContent">
        <el-col>
          <el-main>
            <div>
              <h1>/Checkbox</h1>
              <div class="hr"></div>
              <p>
                O checkbox é uma pequena caixa que pode ser clicada para
                selecionar um ou mais itens em uma lista. A caixa também indica
                os itens que estão selecionados pelo usuário. Há quatro estados
                possíveis para um checkbox: ativo, hover, clicado e bloqueado.
              </p>
            </div>
            <div class="container-elementos">
              <el-checkbox
                v-model="checked1"
                label="Option 1"
                size="large"
                checked
              />
              <el-checkbox v-model="checked3" label="datamachina" />
              <el-checkbox
                v-model="checked5"
                label="Design System"
                size="small"
                disabled
              />
              <br>
              <br>
              <!--  -->
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Consistency" name="1">
                  <div>
                    Consistent with real life: in line with the process and
                    logic of real life, and comply with languages and habits
                    that the users are used to;
                  </div>
                </el-collapse-item>
              </el-collapse>
              <!--  -->
            </div>
            <h1>Check all</h1>
            <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
              >Check all</el-checkbox
            >
            <el-checkbox-group
              v-model="checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox v-for="city in cities" :key="city" :label="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </el-main>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CheckboxDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Check Box",
      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped></style>
