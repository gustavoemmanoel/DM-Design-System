import { createRouter, createWebHashHistory } from "vue-router";

/* Instalação */
import InstallationEl from "../views/Installation/InstallationEl.vue";

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

/* Outros */
import PreProcessamentos from "../views/PreProcessamentos.vue";

const routes = [
  {
    path: "/",
    name: "InstallationEl",
    component: InstallationEl,
  },
  {
    path: "/PreProcessamentos",
    name: "PreProcessamentos",
    component: PreProcessamentos,
  },
  /* PrincipiosDs */
  {
    path: "/InicioDs",
    name: "InicioDs",
    component: InicioDs,
  },
  {
    path: "/PrincipiosDs",
    name: "PrincipiosDs",
    component: PrincipiosDs,
  },

  /* Fundação */
  {
    path: "/ColorsDs",
    name: "ColorsDs",
    component: ColorsDs,
  },
  {
    path: "/TipografiaDs",
    name: "TipografiaDs",
    component: TipografiaDs,
  },
  {
    path: "/IconografiaDs",
    name: "IconografiaDs",
    component: IconografiaDs,
  },
  {
    path: "/GrafismosDs",
    name: "Grafismoss",
    component: GrafismosDs,
  },
  {
    path: "/GridDs",
    name: "GridaDs",
    component: GridDs,
  },
  /* Telas */
  {
    path: "/LoginDs",
    name: "LoginDs",
    component: LoginDs,
  },

  /* Componentes */
  {
    path: "/UploadDs",
    name: "UploadDs",
    component: UploadDs,
  },
  {
    path: "/HeaderPage",
    name: "HeaderPage",
    component: HeaderPage,
  },
  {
    path: "/BotaoDs",
    name: "BotaoDs",
    component: BotaoDs,
  },
  {
    path: "/CalendarioDs",
    name: "CalendarioDs",
    component: CalendarioDs,
  },
  {
    path: "/CampoTextoDs",
    name: "CampoTextoDs",
    component: CampoTextoDs,
  },
  {
    path: "/CardsDs",
    name: "CardsDs",
    component: CardsDs,
  },
  {
    path: "/CheckboxDs",
    name: "CheckboxDs",
    component: CheckboxDs,
  },
  {
    path: "/DropdownDs",
    name: "DropdownDs",
    component: DropdownDs,
  },
  {
    path: "/LoadingDs",
    name: "LoadingDs",
    component: LoadingDs,
  },
  {
    path: "/MensagensDs",
    name: "MensagensDs",
    component: MensagensDs,
  },
  {
    path: "/PinsDs",
    name: "PinsDs",
    component: PinsDs,
  },
  {
    path: "/TabelasDs",
    name: "TabelasDs",
    component: TabelasDs,
  },
  {
    path: "/TagsDs",
    name: "TagsDs",
    component: TagsDs,
  },
  {
    path: "/LegendaDs",
    name: "LegendaDs",
    component: LegendaDs,
  },
  /* Sobre */
  {
    path: "/SobreDs",
    name: "SobreDS",
    component: SobreDs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
