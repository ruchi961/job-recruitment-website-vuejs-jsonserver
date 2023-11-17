<template>
<div>
         
      <div class="header">
      <!-- <router-link to="/About">About</router-link> -->

      <p style="font-size:50px;margin-left:11%;color:white">Welcome to My Job.com</p> 
      
      <img class="hey" src="./components/logo.jpeg" style="height:140px;width:140px;" alt="">
     
      
    </div>
    
    <button class="userpro" @click="change"><img class="now" src="./components/images.png" height="60" ></button>
      <router-view/>
  <!--  <div class="vertical-menu">
    
      
    </div>-->
    
    

</div>
</template>

<script>
import Vue from 'vue'
import axios from'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
export default{
  data(){
    return{
    profiledata:''
    }
  },
  mounted(){
    var val='';
    localStorage.setItem('useremail',val)
    this.$router.push('/register')
  },
// function searchcom()
// {
//   const a=document.getElementById("s");
//   console.log(a);
// }
// searchcom();
methods:{
  
  async change(){

    var datalist=[];
    
        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data,
        
        );
        var value=localStorage.getItem('useremail');
                console.log(datalist)
      console.log(value)
               
                
                
                if(value===''){
                  alert("kindly regsiter")
                
                }
                else{
                  this.$router.push("/profile")
                
                }
        

    
    
  },
  call(){
    if (this.$router.path("/register")){this.$router.push("/register")}
  }

}
}
</script>
<style scoped>
* { font-family: Arial;
/* outline: 1px solid red; */
}


.userpro{
  border-radius: 20px;
  position: absolute;
  top:60px;
  right:190px;
  height: 70px;
   width: 90px;
  background-color: pink;
  border: 2px solid orange;
  outline:none;
}
.userpro:hover{
  border:5px solid orange;
  background-color: white;
  box-shadow: white;
}
.now{
  border-radius: 100px;
}
.hey{
  border-radius: 20px;
  margin-top:-95%;
}
.header {
background-image:url('./components/p10.jpeg');
/* background-repeat: no-repeat; */
overflow: hidden;
margin-top:-15px;
margin-left:-10px;
padding-bottom:5px;
padding-top: 5px;
/* border-radius: 5px 5px 5px 0px; */
}
.header a {
float: left;
color: rgb(238, 12, 12); 
text-align: center;
padding: 12px;
text-decoration: none;
font-size: 20px;
line-height: 20px;
border-radius: 5px;
}
.header a:hover {
background-color: green;
color:white;
}
.header-right a {
float: right;
position: relative;
top:15px;
right:50px;
/* border:black; */
padding-right: 30px;
padding-left: 30px;
}
.vertical-menu {
  background-image:url('./components/p9.jpeg');
  width: 200px;
  font-size: 20px;
  /* position:fixed; */
  margin-bottom:-440px;
  border-radius:0px 0px 5px 5px;
  margin-left:-7px ;
}
.vertical-menu a {
  text-align: center;
  /* background-color:rgb(91, 199, 199); */
  color: black; 
  display:block;
  padding: 16px;
  text-decoration: none;
  /* z-index:3; */
}

.vertical-menu a:hover {
  background-color:green;
  color:white;
}
a.router-link-exact-active{
  background-color:blue;
  color:white;
}
</style>
