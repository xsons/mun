import { createRouter, createWebHistory } from 'vue-router'

import TokenData from '../views/TokenData.vue'
import CoinData from '../views/CoinData.vue'
import AirdropData from '../views/AirdropData.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: AirdropData },
  { path: '/airdrop', component: AirdropData },
  { path: '/coin', component: CoinData },
  { path: '/token', component: TokenData }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
