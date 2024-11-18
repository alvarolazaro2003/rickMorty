import { createRouter, createWebHistory } from 'vue-router';
import HomePages from '@/pages/homePages.vue';
import SingleCapituloPage from '@/pages/SingleCapituloPage.vue';
import PersonajePages from '@/pages/personajePages.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePages
    },
    {
      path: '/capitulo/:id',
      name: 'SingleCapituloPage',
      component: SingleCapituloPage
    },
    {
      path: '/personaje/:id',
      name: 'PersonajePages',
      component: PersonajePages
    }
  ]
});

export default router;
