import { createRouter, createWebHistory } from 'vue-router'
import VifView from '../views/VifView.vue'
import VshowView from '../views/VshowView.vue'
import VforView from '../views/VforView.vue'
import VbindKeyView from '../views/VbindKeyView.vue'
import VteamView from '../views/VteamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'v-if',
      component: VifView
    },
    {
      path: '/v-show',
      name: 'v-show',
      component: VshowView
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: VforView
    },
    {
      path: '/v-bind-key',
      name: 'v-bind-key',
      component: VbindKeyView
    },
    {
        path: '/team',
        name: 'team',
        component: VteamView
    }
  ]
})

export default router
