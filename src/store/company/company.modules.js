import state from './company.state'
import actions from './company.actions'
import mutations from './company.mutations'

const companyStore = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default companyStore