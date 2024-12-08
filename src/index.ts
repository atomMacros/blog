import Layout from "./Layout/Layout.vue"
import { Theme, type EnhanceAppContext } from 'vitepress'
import AirTag from "./components/AirTag.vue"

// register icons 
import { OhVueIcon } from "oh-vue-icons";
import "./utils/addIcons"
// global scss
import './styles/index.scss'
// reset css
import 'normalize.css'


const macrosTheme = <Theme>{
    Layout: Layout,
    enhanceApp({ app, router, siteData }: EnhanceAppContext) {
        app.component('airtag', AirTag)
        // register v-icon component
        app.component('VIcon', OhVueIcon)

        const { search } = siteData.value.themeConfig.themePlugin
        if (search) {
            console.log('add')
            let searchScript = document.createElement('script')
            searchScript.src = 'https://cdn.jsdelivr.net/npm/minisearch@7.1.1/dist/umd/index.min.js'
            document.body.appendChild(searchScript)
        }
    },
}

export type * from './types'
export default macrosTheme