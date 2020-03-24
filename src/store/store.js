import vue from 'vue'
import vuex from 'vuex'
import companyStore from './company/company.modules'

vue.use(vuex)

const Store = new vuex.Store({
    modules: {companyStore}
})

export default Store