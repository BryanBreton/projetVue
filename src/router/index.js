import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../components/accueil'
import Muscu from '../components/Muscu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/muscu',
      name: 'muscu',
      component: Muscu
    }
    
  ]
})
