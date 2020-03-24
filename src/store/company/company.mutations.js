const mutations = {
    setCompanies(state, companies){
        state.companies = companies
        console.log(state.companies)
    },
    setCurrentCompany(state, company){
        state.currentCompany = company.data[0]
        //Ici on a un objet contenant 0: id, 1: Nom, 2: addresse... Passer en JSON ?
        console.log(state.currentCompany)
    }
    
}
export default mutations