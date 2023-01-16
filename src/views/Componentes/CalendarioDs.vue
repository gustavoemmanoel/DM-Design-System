<template>
  <div>
    <el-container>
      <el-header>
        <HeaderDs :headerTitle="headerTitle" />
      </el-header>
      <el-container>
        <el-aside>
          <AsideComponent :btnAtivo="btnAtivo" />
        </el-aside>

        <el-main>
          <div class="containerInterno">
            <div>
              <h1>/Calendário</h1>
             <hr>
              <br />
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
            </div>
            <br />
            <div class="container-elementos">

              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="Início"
                  end-placeholder="Término"
                  :size="size"
                />
              </div>
              <!--  -->

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="1">
                 
                </el-collapse-item>
              </el-collapse>
              <!--  -->
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CalendarioDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Calendario",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>