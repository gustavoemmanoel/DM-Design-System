import { createRouter, createWebHashHistory } from 'vue-router'

/* Fundação */
import ColorsDs from '../views/Fundacao/ColorsDs'
import IconografiaDs from '../views/Fundacao/IconografiaDs'
import TipografiaDs from '../views/Fundacao/TipografiaDs'
/* Componentes */
import InputsDs from '../views/ElementsDs/InputsDs'
import BotaoDs from '../views/ElementsDs/BotaoDs'

const routes = [

  /* Fundação */
  {
    path: '/ColorsDs',
    name: 'ColorsDs',
    component: ColorsDs
  },
  {
    path: '/IconografiaDs',
    name: 'IconografiaDs',
    component: IconografiaDs
  },
  {
    path: '/TipografiaDs',
    name: 'TipografiaDs',
    component: TipografiaDs
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
