import components from './components.js'



const plugin = {
    install (Vue) {
        for (const prop in components){
            if(components.hasOwnPropery(prop)){
                const component = components[prop]
                Vue.component(component.name, component)
            }
        }
    }
}

export default plugin