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
        <h1>DatePicker</h1>
        <p>Use Date Picker for date input.</p>
        <br />
        <hr />
        <br />
        <h1>Enter Date</h1>
        <h6>Basic date picker measured by 'day'.</h6>
        <p>
          The measurement is determined by the type attribute. You can enable
          quick options via shortcuts property. The disabled date is set by
          disabledDate, which is a function.
        </p>
        <div>
          <el-radio-group v-model="size" label="size control">
            <el-radio-button label="large">large</el-radio-button>
            <el-radio-button label="default">default</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
          </el-radio-group>
        </div>
        <div class="demo-date-picker">
          <div class="block">
            <span class="demonstration">Default</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="Pick a day"
              :size="size"
            />
          </div>
          <div class="block">
            <span class="demonstration">Picker with quick options</span>
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="Pick a day"
              :disabled-date="disabledDate"
              :shortcuts="shortcuts"
              :size="size"
            />
          </div>
        </div>
        <br />
        <hr />

        <h1>Other measurements</h1>
        <p>
          You can choose week, month, year or multiple dates by extending the
          standard date picker component.
        </p>
        <div class="demo-date-picker">
          <div class="container">
            <div class="block">
              <span class="demonstration">Week</span>
              <el-date-picker
                v-model="value1"
                type="week"
                format="[Week] ww"
                placeholder="Pick a week"
              />
            </div>
            <div class="block">
              <span class="demonstration">Month</span>
              <el-date-picker
                v-model="value2"
                type="month"
                placeholder="Pick a month"
              />
            </div>
          </div>
          <div class="container">
            <div class="block">
              <span class="demonstration">Year</span>
              <el-date-picker
                v-model="value3"
                type="year"
                placeholder="Pick a year"
              />
            </div>
            <div class="block">
              <span class="demonstration">Dates</span>
              <el-date-picker
                v-model="value4"
                type="dates"
                placeholder="Pick one or more dates"
              />
            </div>
          </div>
        </div>
        <br />
        <hr />
        <h1>Date Range</h1>
        <h6>Picking a date range is supported.</h6>
        <br />
        <p>
          When in range mode, the left and right panels are linked by default.
          If you want the two panels to switch current months independently, you
          can use the unlink-panels attribute.
        </p>
        <br />
        <div>
          <el-radio-group v-model="size" label="size control">
            <el-radio-button label="large">large</el-radio-button>
            <el-radio-button label="default">default</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
          </el-radio-group>
        </div>
        <div class="demo-date-picker">
          <div class="block">
            <span class="demonstration">Default</span>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              :size="size"
            />
          </div>
          <div class="block">
            <span class="demonstration">With quick options</span>
            <el-date-picker
              v-model="value2"
              type="daterange"
              unlink-panels
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              :shortcuts="shortcuts"
              :size="size"
            />
          </div>
        </div>
      </el-col>
    </el-row>
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

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
