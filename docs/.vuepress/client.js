import { defineClientConfig } from '@vuepress/client'
import Demo from './components/Demo.vue'

import InputText from "../../src/InputText.vue";


export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.component('InputText', InputText)
    app.component('Demo', Demo)
  },
  
})