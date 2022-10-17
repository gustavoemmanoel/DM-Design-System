<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col :offset="1" :span="18">
        <br />
        <br />
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large" />
          <el-checkbox v-model="checked2" label="Option 2" size="large" />
        </div>
        <div>
          <el-checkbox v-model="checked3" label="Option 1" />
          <el-checkbox v-model="checked4" label="Option 2" />
        </div>
        <div>
          <el-checkbox v-model="checked5" label="Option 1" size="small" />
          <el-checkbox v-model="checked6" label="Option 2" size="small" />
        </div>
        <div>
          <el-checkbox
            v-model="checked5"
            label="Option 1"
            size="small"
            disabled
          />
          <el-checkbox
            v-model="checked6"
            label="Option 2"
            size="small"
            disabled
          />
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
      </el-col>
    </el-row>
  </div>
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
