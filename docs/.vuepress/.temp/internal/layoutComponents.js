import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/mino/Documents/spikes/vue-3-component-library/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/mino/Documents/spikes/vue-3-component-library/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
