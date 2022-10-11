import { createRouter, createWebHashHistory } from 'vue-router'

/* Fundação */
import ColorsDs from '../views/Fundacao/ColorsDs.vue'
import IconografiaDs from '../views/Fundacao/IconografiaDs.vue'
import TipografiaDs from '../views/Fundacao/TipografiaDs.vue'
/* Componentes */
import HeaderPage from '../views/Componentes/HeaderPage.vue'
import CalendarioDs from '../views/Componentes/CalendarioDs.vue'
import CampoTextoDs from '../views/Componentes/CampoTextoDs.vue'
import CardsDs from '../views/Componentes/CardsDs.vue'
import CheckboxDs from '../views/Componentes/CheckboxDs.vue'
import DropdownDs from '../views/Componentes/DropdownDs.vue'
import LoadingDs from '../views/Componentes/LoadingDs.vue'
import MenssagensDs from '../views/Componentes/MenssagensDs.vue'
import PinsDs from '../views/Componentes/PinsDs.vue'
import TabelasDs from '../views/Componentes/TabelasDs.vue'
import TagsDs from '../views/Componentes/TagsDs.vue'
import BotaoDs from '../views/Componentes/BotaoDs.vue'
import PDF from '../views/PDF.vue'
import PreProcessamentos from '../views/PreProcessamentos.vue'
import InstallationEl from '../views/Installation/InstallationEl.vue'

const routes = [
  {
    path: '/InstallationEl',
    name: 'InstallationEl',
    component: InstallationEl
  },

  /* Fundação */
  {
    path: '/PDF',
    name: 'PDF',
    component: PDF
  },
  {
    path: '/PreProcessamentos',
    name: 'PreProcessamentos',
    component: PreProcessamentos
  },
  {
    path: '/ColorsDs',
    name: 'ColorsDs',
    component: ColorsDs
  },
  {
    path: '/TipografiaDs',
    name: 'TipografiaDs',
    component: TipografiaDs
  },
  {
    path: '/IconografiaDs',
    name: 'IconografiaDs',
    component: IconografiaDs
  },
  /* Componentes */
  {
    path: '/HeaderPage',
    name: 'HeaderPage',
    component: HeaderPage
  },
  {
    path: '/BotaoDs',
    name: 'BotaoDs',
    component: BotaoDs
  },
  {
    path: '/CalendarioDs',
    name: 'CalendarioDs',
    component: CalendarioDs
  },
  {
    path: '/CampoTextoDs',
    name: 'CampoTextoDs',
    component: CampoTextoDs
  },
  {
    path: '/CardsDs',
    name: 'CardsDs',
    component: CardsDs
  },
  {
    path: '/CheckboxDs',
    name: 'CheckboxDs',
    component: CheckboxDs
  },
  {
    path: '/DropdownDs',
    name: 'DropdownDs',
    component: DropdownDs
  },
  {
    path: '/LoadingDs',
    name: 'LoadingDs',
    component: LoadingDs
  },
  {
    path: '/MenssagensDs',
    name: 'MenssagensDs',
    component: MenssagensDs
  },
  {
    path: '/PinsDs',
    name: 'PinsDs',
    component: PinsDs
  },
  {
    path: '/TabelasDs',
    name: 'TabelasDs',
    component: TabelasDs
  },
  {
    path: '/TagsDs',
    name: 'TagsDs',
    component: TagsDs
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router