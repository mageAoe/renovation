import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'container',
        component: ()=> import('@/views/container.vue'),
      },
    //   {
    //     path: '/canvasEditPage',
    //     name: 'canvasEditPage',
    //     component: canvasEditPage,
    //   },
    //   {
    //     path: '/',
    //     name: 'canvasContainer',
    //     component: canvasContainer,
    //   },
    ],
  })
  
  export default router
  