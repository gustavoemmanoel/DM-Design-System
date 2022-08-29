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

/* CORES DO DESIGN SYSTEM */

:root {
  /* Cores semânticas */

  --dm_vermelho_00: #e2381b;

  /* Predominantes */

  --dm_azul_00: #0567ff;
  --dm_preto_00: #2c2c2c;
  --dm_creme_00: #fdfbf9;

  /* Tons pretos */
  --dm_cinza_01: #606060;
  --dm_cinza_02: #959595;
  --dm_cinza_03: #cacaca;
  --dm_cinza_04: #f0f0f0;
  --dm_cinza_05: #f1f1f1;

  /* Creme */

  --dm_creme_01: #fdfbf9;
  --dm_creme_02: #efece6;
  --dm_creme_03: #faf6f0;

  /* Azul */

  --dm_azul_01: #448dff;
  --dm_azul_02: #82b3ff;
  --dm_azul_03: #c1d9ff;

  /* PALETAS DE MAPAS */
  /* Cartela 1 */
  --dm_laranja_C01: #f25900;
  --dm_amarelo_C01: #ffa400;
  --dm_rosa_C01: #f45197;
  --dm_roxo_C01: #9e6cff;
  --dm_verde_C01: #3e9a00;
  --dm_azul_C01: #002b99;
  /* Cartela 2 */
  --dm_laranja_C02: #ff8c67;
  --dm_amarelo_C02: #ffcb3f;
  --dm_rosa_C02: #db129b;
  --dm_roxo_C02: #7445eb;
  --dm_verde_C02: #2bde02;
  --dm_azul_C02: #3eb3de;
  /* Cartela 3 */
  --dm_laranja_C03: #ff3419;
  --dm_amarelo_C03: #f1e80c;
  --dm_rosa_C03: #fa0060;
  --dm_roxo_C03: #68008c;
  --dm_verde_C03: #09d188;
  --dm_azul_C03: #007d99;
  /* Cartela 4 */
  --dm_laranja_C04: #ff9745;
  --dm_amarelo_C04: #d5ec25;
  --dm_rosa_C04: #eb5fe1;
  --dm_roxo_C04: #af52e6;
  --dm_verde_C04: #5ffc96;
  --dm_azul_C04: #02deda;

  /*  */
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
  background: #e2381b;
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

/* Cores secundárias da marca */

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
/* Lilas */

.dm_lilas_00 {
  background: #9e6cff;
}
.dm_lilas_01 {
  background: #b691ff;
}
.dm_lilas_02 {
  background: #cfb6ff;
}
.dm_lilas_03 {
  background: #e7daff;
}

/* Rosa */

.dm_rosa_00 {
  background: #f45197;
}
.dm_rosa_01 {
  background: #f77cb1;
}
.dm_rosa_02 {
  background: #ff99aa;
}
.dm_rosa_03 {
  background: #fcd3e5;
}

/* Verde */

.dm_verde_00 {
  background: #3e9a00;
}
.dm_verde_01 {
  background: #6eb340;
}
.dm_verde_02 {
  background: #6eb340;
}
.dm_verde_03 {
  background: #cfe6bf;
}
/* Laranja */

.dm_laranja_00 {
  background: #f25900;
}
.dm_laranja_01 {
  background: #f58340;
}
.dm_laranja_02 {
  background: #f9ac80;
}
.dm_laranja_03 {
  background: #fcd5bf;
}
/* Amarelo */

.dm_amarelo_00 {
  background: #ffa400;
}
.dm_amarelo_01 {
  background: #ffbb40;
}
.dm_amarelo_02 {
  background: #ffd280;
}
.dm_amarelo_03 {
  background: #ffe8bf;
}

/* Paleta de uso em mapa */

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
</style>