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
          <!--  -->
          <div class="containerInterno">
            <div>
              <h1>/Calendário</h1>
              <hr />
              <br />
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
            </div>
            <br />
            <div class="container-elementos">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="-"
                start-placeholder="Início"
                end-placeholder="Término"
                :prefix-icon="customPrefix"
                :size="size"
              />
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="1"> </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="containerInterno">
            <div>
              <h1>/Calendário</h1>
              <hr />
              <br />
              <p>
                O calendário permite aos usuários escolher uma data ou um
                período de visualização de informações.
              </p>
            </div>
            <br />
            <div class="container-elementos">
              <el-date-picker
                class="calendario"
                v-model="value2"
                type="date"
                placeholder="Pick a day"
                :prefix-icon="customPrefix"
                :size="size"
              />
              <!--  -->

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="ver" name="1"> </el-collapse-item>
              </el-collapse>
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
import { h, shallowRef } from "vue";
export default {
  name: "CalendarioDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Calendário",
      value1: null,
      value2: null,
      customPrefix: shallowRef({
        render() {
          return h("dm-icons-calendar", "");
        },
      }),

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>
