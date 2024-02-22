export const componentMap = new Map([
    ['banner', () => import('./demo1.vue')],
    ['text', () => import('./demo2.vue')],
    ['notice', () => import('./demo3.vue')],
    ['brandList', () => import('./demo4.vue')],
    ['imageText', () => import('./demo5.vue')],
    ['imageTextList', () => import('./demo6.vue')],
])
export default componentMap