import { createRouter, createWebHashHistory } from "vue-router";

/* Instalação */
import ElementPlus from "../views/Installation/ElementPlus.vue";
import DesignSystem from "../views/Installation/DesignSystem.vue";
import VisualStudio from "../views/Installation/VisualStudio.vue";

/* Princípios */
import InicioDs from "../views/InicioDs.vue";
import PrincipiosDs from "../views/PrincipiosDs.vue";

/* Fundação */
import ColorsDs from "../views/Fundacao/ColorsDs.vue";
import TipografiaDs from "../views/Fundacao/TipografiaDs.vue";
import IconografiaDs from "../views/Fundacao/IconografiaDs.vue";
import GridDs from "../views/Fundacao/GridDs.vue";
import GrafismosDs from "../views/Fundacao/GrafismosDs.vue";

/* Telas */
import LoginDs from "../views/LoginDs.vue";

/* Componentes */
import HeaderPage from "../views/Componentes/HeaderPage.vue";
import CalendarioDs from "../views/Componentes/CalendarioDs.vue";
import CampoTextoDs from "../views/Componentes/CampoTextoDs.vue";
import CardsDs from "../views/Componentes/CardsDs.vue";
import CheckboxDs from "../views/Componentes/CheckboxDs.vue";
import DropdownDs from "../views/Componentes/DropdownDs.vue";
import LoadingDs from "../views/Componentes/LoadingDs.vue";
import MensagensDs from "../views/Componentes/MensagensDs.vue";
import PinsDs from "../views/Componentes/PinsDs.vue";
import TabelasDs from "../views/Componentes/TabelasDs.vue";
import TagsDs from "../views/Componentes/TagsDs.vue";
import BotaoDs from "../views/Componentes/BotaoDs.vue";
import SobreDs from "../views/Componentes/SobreDs.vue";
import UploadDs from "../views/Componentes/UploadDs.vue";
import LegendaDs from "../views/Componentes/LegendaDs.vue";
import GraficoDs from "../views/Componentes/GraficoDs.vue";

/* Outros */
import PreProcessamentos from "../views/PreProcessamentos.vue";

const routes = [
  // instalação
  {
    path: "/ElementPlus",
    name: "ElementPlus",
    component: ElementPlus,
  },
  {
    path: "/DesignSystem",
    name: "DesignSystem",
    component: DesignSystem,
  },
  {
    path: "/VisualStudio",
    name: "VisualStudio",
    component: VisualStudio,
  },
  {
    path: "/PreProcessament",
    name: "PreProcessamentos",
    component: PreProcessamentos,
  },
  /* PrincipiosDs */
  {
    path: "/",
    name: "InicioDs",
    component: InicioDs,
  },
  {
    path: "/Principios",
    name: "PrincipiosDs",
    component: PrincipiosDs,
  },

  /* Fundação */
  {
    path: "/Colors",
    name: "ColorsDs",
    component: ColorsDs,
  },
  {
    path: "/Tipografia",
    name: "TipografiaDs",
    component: TipografiaDs,
  },
  {
    path: "/Iconografia",
    name: "IconografiaDs",
    component: IconografiaDs,
  },
  {
    path: "/Grafismos",
    name: "Grafismoss",
    component: GrafismosDs,
  },
  {
    path: "/Grid",
    name: "GridaDs",
    component: GridDs,
  },
  /* Telas */
  {
    path: "/Login",
    name: "LoginDs",
    component: LoginDs,
  },

  /* Componentes */
  {
    path: "/Upload",
    name: "UploadDs",
    component: UploadDs,
  },
  {
    path: "/Header",
    name: "HeaderPage",
    component: HeaderPage,
  },
  {
    path: "/Botao",
    name: "BotaoDs",
    component: BotaoDs,
  },
  {
    path: "/Calendario",
    name: "CalendarioDs",
    component: CalendarioDs,
  },
  {
    path: "/CampoTexto",
    name: "CampoTextoDs",
    component: CampoTextoDs,
  },
  {
    path: "/Cards",
    name: "CardsDs",
    component: CardsDs,
  },
  {
    path: "/Checkbox",
    name: "CheckboxDs",
    component: CheckboxDs,
  },
  {
    path: "/Dropdown",
    name: "DropdownDs",
    component: DropdownDs,
  },
  {
    path: "/Loading",
    name: "LoadingDs",
    component: LoadingDs,
  },
  {
    path: "/Mensagens",
    name: "MensagensDs",
    component: MensagensDs,
  },
  {
    path: "/Pins",
    name: "PinsDs",
    component: PinsDs,
  },
  {
    path: "/Tabelas",
    name: "TabelasDs",
    component: TabelasDs,
  },
  {
    path: "/Graficos",
    name: "GraficoDs",
    component: GraficoDs,
  },
  {
    path: "/Tags",
    name: "TagsDs",
    component: TagsDs,
  },
  {
    path: "/Legenda",
    name: "LegendaDs",
    component: LegendaDs,
  },
  /* Sobre */
  {
    path: "/Sobre",
    name: "SobreDS",
    component: SobreDs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
