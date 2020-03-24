import axios from 'axios'
const actions= {
    loadCompanies({commit}){
            console.log('salut')
            axios.get('http://localhost:5000/companies').then(response => {
                let companies = response
                commit('setCompanies', companies)
            }).catch(error => {
                console.log(error)
            })
        },
        setCurrentCompany({commit}, id){
            axios.get('http://localhost:5000/company/'+id).then(response => {
                let currentCompany = response
                commit('setCurrentCompany', currentCompany)}).catch(error => {
                    console.log(error)
            })
        }
    }

    export default actions