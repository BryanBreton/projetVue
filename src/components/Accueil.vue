<template>
  <div id="app">
    <h1>oui</h1>
    <label>Prenom</label>
    <input type="text" v-model="prenom">
    <label>Nom</label>
    <input type="text" v-model="nom">

    <label>Mail</label>
    <input type="text" v-model="mail">

    <label>Password</label>
    <input type="password" v-model="password">

    <label>Entrez votre code postal</label>
    <input type="text" v-model="zipCode" @input="searchCity()"/>
    <select v-model="citySelected" >
      <option v-for="city in cities">{{city.city}}</option>
    </select>
    <button @click="inscription()">S'inscrire</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      zipCode: '',
      cities: [],
      citySelected: '',
      prenom: '',
      nom: '',
      mail: '',
      password: ''
    }
  },
  methods:{
    searchCity(){
      axios.get('https://vicopo.selfbuild.fr/cherche/'+this.zipCode).then(Response => {
        console.log(Response)
        this.cities = Response.data.cities
      })

    },
    async inscription(){
      let zipCode = ""
      console.log(this.citySelected)
      await axios.get('https://vicopo.selfbuild.fr/cherche/'+this.citySelected).then(Response => {
        console.log(Response)
        zipCode = Response.data.cities[0].code
      })
      let user = {nom: this.nom, prenom: this.prenom, mail: this.mail, password: this.password, city: this.citySelected, zipCode: zipCode}
      console.log(user)
    }
  }
}
</script>

<style>
</style>
