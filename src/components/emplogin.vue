
<template>
  <div id="Login-div">
    <h1>This is a Login page for Recruiter</h1>
    <div >
      <form class="box">
        <h1>Admin Login</h1>
        <input
          name="email"
          type="email"
          v-model="input.email"
          placeholder="email"
        />
        <input
          name="password"
          type="password"
          v-model="input.password"
          placeholder="Password"
        />
        <br />
        <br />
        <button name="login" id="login" v-on:click="login()">Login</button>
        <router-link to="/emploggedin" id="confirm" style="display:none">Confirm</router-link>
        <router-link id="reg" to="/empregister">Registeration</router-link>
      </form>
    </div>
    <p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'login', // file name
  
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login(e) {
      var datalist=[]
      var val1=true;
      console.log(val1)
      await axios.get("http://localhost:3000/employer").then((res)=>datalist=res.data);
      console.log(datalist);
      
        if (this.input.email == "" && this.input.password == "") {
          alert("Please fill up the email and username !!!")}
          else{
          for( const val of datalist) {
          console.log(val)
          if (this.input.email==val.email && this.input.password==val.password)
          {val1=false;
            alert("Congratulations !!! , the email is correct", 1000);
            document.getElementById("confirm").style.display="inline-block";
            break 
          }}}

          if(val1) {
            alert("Error !!!, Please Enter a valid Username and password", 1000);
          }
      e.preventDefault();
      }
    }
  }

</script>

<style>
.copy{
  position:absolute;
  top:850px;
  }
.box {
  margin-left: 35%;
  margin-top: 5%;
  border-radius: 20px;
  border: 4px solid beige;
  background-color: beige;
  height: 200px;
  width: 400px;
}
h1{
   margin-left: 35%;
}
#reg {
  margin-left: 50px;

}



</style>