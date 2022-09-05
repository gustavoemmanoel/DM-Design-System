import { createRouter, createWebHashHistory } from 'vue-router'

/* Fundação */
import ColorsDs from '../views/Fundacao/ColorsDs.vue'
import IconografiaDs from '../views/Fundacao/IconografiaDs.vue'
import TipografiaDs from '../views/Fundacao/TipografiaDs.vue'
/* Componentes */
import InputsDs from '../views/ElementsDs/InputsDs.vue'
import BotaoDs from '../views/ElementsDs/BotaoDs.vue'
import PDF from '../views/PDF.vue'

const routes = [

  /* Fundação */
  {
    path: '/PDF',
    name: 'PDF',
    component: PDF
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
    path: '/BotaoDs',
    name: 'BotaoDs',
    component: BotaoDs
  },
  {
    path: '/InputsDs',
    name: 'InputsDs',
    component: InputsDs
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router