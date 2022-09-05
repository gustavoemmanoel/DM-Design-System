<template>
  <div>
    <el-row>
      <el-col :span="24" class="header">
        <div>
          <div
            style="
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 28px;
            "
          >
            <p class="fisrt-title">Design System</p>
            |
            <p class="second-title">Princípios</p>
          </div>
          <p class="sub-title">Designed by Data Machina</p>
        </div>
        <p class="principal">Princípios</p>
        <img class="graf" src="/grafismo.svg" />
      </el-col>
    </el-row>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Roboto', sans-serif; */

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700;800;900&display=swap");
/* font-family: 'Roboto Slab', serif; */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

body {
  background: #fdfbf9;
  padding-top: 75px;
}

.header {
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #2c2c2c;
  color: #faf6f0;
  height: 75px;
  overflow: hidden;
  width: 100%;
  z-index: 100;
}

.fisrt-title {
  font-weight: 500;
  font-family: "Roboto Slab", serif;
}

.second-title {
  font-size: 28px;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
}

.sub-title {
  font-size: 12px;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
}

.principal {
  font-size: 30px;
  font-weight: 500;
  font-family: "Roboto Slab", serif;
}

.graf {
  position: absolute;
  height: 475px;
  left: 0;
  opacity: 0.1;
}

:root {
  /* Tons pretos */
  --dm_preto_00: #2c2c2c;
  --dm_cinza_01: #606060;
  --dm_cinza_02: #959595;
  --dm_cinza_03: #cacaca;
  --dm_cinza_04: #f0f0f0;
  --dm_cinza_05: #f1f1f1;
  --dm_cinza_CT01: #808080;
  /* Creme */
  --dm_creme_00: #f4f6f0;
  --dm_creme_01: #fdfbf9;
  --dm_creme_02: #efece6;
  --dm_creme_03: #faf6f0;
  /* Azul */
  --dm_azul_00: #0567ff;
  --dm_azul_01: #448dff;
  --dm_azul_02: #82b3ff;
  --dm_azul_03: #c1d9ff;
  --dm_azul_C01: #002b99;
  --dm_azul_C02: #3eb3de;
  --dm_azul_C03: #007d99;
  --dm_azul_C04: #02deda;
  --dm_azul_CT01: #184995;
  --dm_azul1_C08: #eff3ff;
  --dm_azul2_C08: #c6dff8;
  --dm_azul3_C08: #9ecae1;
  --dm_azul4_C08: #6baed6;
  --dm_azul5_C08: #3182bd;
  --dm_azul6_C08: #08519c;
  /* Lilas */
  --dm_lilas_00: #9e6cff;
  --dm_lilas_01: #b691ff;
  --dm_lilas_02: #cfb6ff;
  --dm_lilas_03: #e7daff;
  --dm_lilas_CT01: #654c95;
  /* Rosa */
  --dm_rosa_00: #f45197;
  --dm_rosa_01: #f77cb1;
  --dm_rosa_02: #ff99aa;
  --dm_rosa_03: #fcd3e5;
  --dm_rosa_C01: #f45197;
  --dm_rosa_C02: #db129b;
  --dm_rosa_C03: #fa0060;
  --dm_rosa_C04: #eb5fe1;
  --dm_rosa_CT01: #903e61;
  --dm_rosa1_C05: #feebe2;
  --dm_rosa2_C05: #fcc5c0;
  --dm_rosa3_C05: #fa9fb5;
  --dm_rosa4_C05: #f768a1;
  --dm_rosa5_C05: #c51b8a;
  --dm_rosa6_C05: #7a0177;
  /* Verde */
  --dm_verde_00: #3e9a00;
  --dm_verde_01: #6eb340;
  --dm_verde_02: #9fcd80;
  --dm_verde_03: #cfe6bf;
  --dm_verde_C01: #3e9a00;
  --dm_verde_C02: #2bde02;
  --dm_verde_C03: #09d188;
  --dm_verde_C04: #5ffc96;
  --dm_verde_CT01: #356316;
  --dm_verde1_C06: #edf8fb;
  --dm_verde2_C06: #cef3ec;
  --dm_verde3_C06: #99d8c9;
  --dm_verde4_C06: #66c2a4;
  --dm_verde5_C06: #2ca25f;
  --dm_verde6_C06: #006d2c;
  /* Laranja */
  --dm_laranja_00: #f25900;
  --dm_laranja_01: #f58340;
  --dm_laranja_02: #f9ac80;
  --dm_laranja_03: #fcd5bf;
  --dm_laranja_C01: #f25900;
  --dm_laranja_C02: #ff8c67;
  --dm_laranja_C03: #ff3419;
  --dm_laranja_C04: #ff9745;
  --dm_laranja_CT01: #8f4216;
  --dm_laranja1_C07: #feedde;
  --dm_laranja2_C07: #fdd0a2;
  --dm_laranja3_C07: #fdae6b;
  --dm_laranja4_C07: #fd8d3c;
  --dm_laranja5_C07: #e6550d;
  --dm_laranja6_C07: #a63603;
  /* Amarelo */
  --dm_amarelo_00: #ffa400;
  --dm_amarelo_01: #ffbb40;
  --dm_amarelo_02: #ffd280;
  --dm_amarelo_03: #ffe8bf;
  --dm_amarelo_C01: #ffa400;
  --dm_amarelo_C02: #ffcb3f;
  --dm_amarelo_C03: #f1e80c;
  --dm_amarelo_C04: #d5ec25;
  --dm_amarelo_CT01: #956816;
  /* Roxo */
  --dm_roxo_C01: #9e6cff;
  --dm_roxo_C02: #7445eb;
  --dm_roxo_C03: #68008c;
  --dm_roxo_C04: #af52e6;
  /* outras */
  --dm_areia_C09: #e0ba88;
  --dm_turquesa_C09: #289da3;
  --dm_vermelho_00: #e2381b;
}
/* Predominantes em todas as interfaces */
.dm_azul_00 {
  background: #0567ff;
}
.dm_preto_00 {
  background: #2c2c2c;
}
.dm_creme_00 {
  background: #fdfbf9;
}
/* Cores semânticas */
.dm_vermelho_00 {
  background: var(--dm_vermelho_00);
}
/* Tons pretos */
.dm_cinza_01 {
  background: var(--dm_cinza_01);
}
.dm_cinza_02 {
  background: var(--dm_cinza_02);
}
.dm_cinza_03 {
  background: var(--dm_cinza_03);
}
.dm_cinza_04 {
  background: var(--dm_cinza_04);
}
.dm_cinza_05 {
  background: var(--dm_cinza_05);
}
.dm_cinza_CT01 {
  background: var(--dm_cinza_CT01);
}
/* Creme */
.dm_creme_01 {
  background: var(--dm_creme_01);
}
.dm_creme_02 {
  background: var(--dm_creme_02);
}
.dm_creme_03 {
  background: var(--dm_creme_03);
}
/* Azul */
.dm_azul_00 {
  background: var(--dm_azul_00);
}
.dm_azul_01 {
  background: var(--dm_azul_01);
}
.dm_azul_02 {
  background: var(--dm_azul_02);
}
.dm_azul_03 {
  background: var(--dm_azul_03);
}
.dm_azul_CT01 {
  background: var(--dm_azul_CT01);
}
/* Lilas */
.dm_lilas_00 {
  background: var(--dm_lilas_00);
}
.dm_lilas_01 {
  background: var(--dm_lilas_01);
}
.dm_lilas_02 {
  background: var(--dm_lilas_02);
}
.dm_lilas_03 {
  background: var(--dm_lilas_03);
}
.dm_lilas_CT01 {
  background: var(--dm_lilas_CT01);
}
/* Rosa */
.dm_rosa_00 {
  background: var(--dm_rosa_00);
}
.dm_rosa_01 {
  background: var(--dm_rosa_01);
}
.dm_rosa_02 {
  background: var(--dm_rosa_02);
}
.dm_rosa_03 {
  background: var(--dm_rosa_03);
}
.dm_rosa_CT01 {
  background: var(--dm_rosa_CT01);
}
/* Verde */
.dm_verde_00 {
  background: var(--dm_verde_00);
}
.dm_verde_01 {
  background: var(--dm_verde_01);
}
.dm_verde_02 {
  background: var(--dm_verde_02);
}
.dm_verde_03 {
  background: var(--dm_verde_03);
}
.dm_verde_CT01 {
  background: var(--dm_verde_CT01);
}

.dm_verde1_C06 {
  background: var(--dm_verde1_C06);
}
.dm_verde2_C06 {
  background: var(--dm_verde2_C06);
}
.dm_verde3_C06 {
  background: var(--dm_verde3_C06);
}
.dm_verde4_C06 {
  background: var(--dm_verde4_C06);
}
.dm_verde5_C06 {
  background: var(--dm_verde5_C06);
}
.dm_verde6_C06 {
  background: var(--dm_verde6_C06);
}
/* Laranja */
.dm_laranja_00 {
  background: var(--dm_laranja_00);
}
.dm_laranja_01 {
  background: var(--dm_laranja_01);
}
.dm_laranja_02 {
  background: var(--dm_laranja_02);
}
.dm_laranja_03 {
  background: var(--dm_laranja_03);
}
.dm_laranja_CT01 {
  background: var(--dm_laranja_CT01);
}
.dm_laranja1_C07 {
  background: var(--dm_laranja1_C07);
}
.dm_laranja2_C07 {
  background: var(--dm_laranja2_C07);
}
.dm_laranja3_C07 {
  background: var(--dm_laranja3_C07);
}
.dm_laranja4_C07 {
  background: var(--dm_laranja4_C07);
}
.dm_laranja5_C07 {
  background: var(--dm_laranja5_C07);
}
.dm_laranja6_C07 {
  background: var(--dm_laranja6_C07);
}
/* Amarelo */
.dm_amarelo_00 {
  background: var(--dm_amarelo_00);
}
.dm_amarelo_01 {
  background: var(--dm_amarelo_01);
}
.dm_amarelo_02 {
  background: var(--dm_amarelo_02);
}
.dm_amarelo_03 {
  background: var(--dm_amarelo_03);
}
.dm_amarelo_CT01 {
  background: var(--dm_amarelo_CT01);
}
/* Laranja */
.dm_laranja_C01 {
  background: var(--dm_laranja_C01);
}
.dm_laranja_C02 {
  background: var(--dm_laranja_C02);
}
.dm_laranja_C03 {
  background: var(--dm_laranja_C03);
}
.dm_laranja_C04 {
  background: var(--dm_laranja_C04);
}
/* Amarelo */
.dm_amarelo_C01 {
  background: var(--dm_amarelo_C01);
}
.dm_amarelo_C02 {
  background: var(--dm_amarelo_C02);
}
.dm_amarelo_C03 {
  background: var(--dm_amarelo_C03);
}
.dm_amarelo_C04 {
  background: var(--dm_amarelo_C04);
}
/* Rosa */
.dm_rosa_C01 {
  background: var(--dm_rosa_C01);
}
.dm_rosa_C02 {
  background: var(--dm_rosa_C02);
}
.dm_rosa_C03 {
  background: var(--dm_rosa_C03);
}
.dm_rosa_C04 {
  background: var(--dm_rosa_C04);
}
.dm_rosa1_C05 {
  background: var(--dm_rosa1_C05);
}
.dm_rosa2_C05 {
  background: var(--dm_rosa2_C05);
}
.dm_rosa3_C05 {
  background: var(--dm_rosa3_C05);
}
.dm_rosa4_C05 {
  background: var(--dm_rosa4_C05);
}
.dm_rosa5_C05 {
  background: var(--dm_rosa5_C05);
}
.dm_rosa6_C05 {
  background: var(--dm_rosa6_C05);
}
/* Roxo */
.dm_roxo_C01 {
  background: var(--dm_roxo_C01);
}
.dm_roxo_C02 {
  background: var(--dm_roxo_C02);
}
.dm_roxo_C03 {
  background: var(--dm_roxo_C03);
}
.dm_roxo_C04 {
  background: var(--dm_roxo_C04);
}
/* verde */
.dm_verde_C01 {
  background: var(--dm_verde_C01);
}
.dm_verde_C02 {
  background: var(--dm_verde_C02);
}
.dm_verde_C03 {
  background: var(--dm_verde_C03);
}
.dm_verde_C04 {
  background: var(--dm_verde_C04);
}
/* azul */
.dm_azul_C01 {
  background: var(--dm_azul_C01);
}
.dm_azul_C02 {
  background: var(--dm_azul_C02);
}
.dm_azul_C03 {
  background: var(--dm_azul_C03);
}
.dm_azul_C04 {
  background: var(--dm_azul_C04);
}
.dm_azul1_C08 {
  background: var(--dm_azul1_C08);
}
.dm_azul2_C08 {
  background: var(--dm_azul2_C08);
}
.dm_azul3_C08 {
  background: var(--dm_azul3_C08);
}
.dm_azul4_C08 {
  background: var(--dm_azul4_C08);
}
.dm_azul5_C08 {
  background: var(--dm_azul5_C08);
}
.dm_azul6_C08 {
  background: var(--dm_azul6_C08);
}

.dm_turquesa_C09 {
  background: var(--dm_turquesa_C09);
}
.dm_areia_C09 {
  background: var(--dm_areia_C09);
}
</style>