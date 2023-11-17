// logged inside page
<template>
  <div id="log_in">
    <router-link to="/emplogin" id="sign_out">Sign Out</router-link> 
    <div id="nav">
      <h1>Congratulations you are sucessfully logged  in</h1>
      <div>
        <table border="1">
          <tr>
            <td>Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>City</td>
            <td>Email Id</td>
          </tr>
          <tr v-for="item in list" v-bind:key="item.id">
            <td>{{item.firstname}}</td>
            <td>{{item.lastname}}</td>
            <td>{{item.age}}</td>
            <td>{{item.gender}}</td>
            <td>{{item.city}}</td>
            <td>{{item.email}}</td>
          </tr>
        </table>
      </div>
    </div>
  <!--  <router-view @authenticated="setAuthenticated" /> -->
  <p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)

export default {
 name:'loggedin',
 data(){
   return  {
     list : undefined
   }
 },
 mounted()
    {
      Vue.axios.get("http://localhost:3000/users")
      .then(Response=>{
        this.list=Response.data
        console.warn(Response.data)
      })
    }
}
</script>

<style>

#log_in {
    color: black;
    border: 1px solid black;
    background-color:whitesmoke;
    padding: 10px;
    margin-top: 20px;
    position: absolute;
    left:500px;
}

#sign_out {
  color: black;
  font: aerial;
}
</style>