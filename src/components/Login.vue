<template>
<div class="App2">
     
  
   
   
       <img  class="img2" src="./bkpic.png">
       <img class="form" src="./Capture.png">
<div class="box2">
            <router-link class="link2"  tag="button" to="/register"><b>Register</b></router-link>
            <router-link  class="link1" tag="button" to="/login"><b>Login now</b></router-link>
            
        <router-view></router-view>
            <img class="emailimg" src="./email.png">
            <label class="email">Email ID</label>    
            <input type="text" placeholder="xyz@domain.com" class="emailin" v-model="check_email">
        <img class="passimg" src="./pass.jpg">
            <router-link  to="/forgotpassword" class="forgot"><b>Forgot Password ?</b></router-link>
            <router-view />
            <label class="pass">Password</label>
            <input type="password"  placeholder="Minimum 8 Characters" class="passin" v-model="check_password">
            
            <button type="submit" @click="created" class="submit">Log In</button>
            
    </div>
        

   
         
    
     
  <b class="format"> Hey! Welcome back </b>
<p class="format5">Let's continue our journey of job searching</p>
<p class="format3">Log in to continue</p>
<p class="format4"><b>Read our</b></p><router-link class="format6" to="/term">Terms and Condition</router-link><p class="format7"><b>to Know more about us</b></p>
<router-view />

<p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
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
        check_email:'',
        check_password:'',
        users:[],
        values:[],
        verify:'false',
        ans:false
       }
    },
    

    
methods:{
    async created(){
        if(this.check_email=='' ||  this.check_password=='' ){
                     alert("Please fill all the details")
                }else{
        var datalist=[];
        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data);
        var i=1;
        console.log(i)
        var identity=0;
        console.log(datalist)
        console.log(this.check_email)
                console.log(this.check_password)
               for (const index of datalist) {
                   console.log(index)
               
            
            
            if (this.check_email===index.email) {
                if(this.check_password===index.password){
              console.log(i)  
             i=0;
            this.users=index;
            break;
                }}
        }
     localStorage.setItem('useremail',this.check_email);
           
           
          /*const val=localStorage.getItem('useremail');
           console.log(val);*/
      console.log(datalist)
      if (i===0) {
                 
          console.log(i) 
        this.ans=alert("You have Successfully logged in.")
        /* console.log(identity)
        this.users=datalist[identity-1]*/
        console.log(this.users)
        console.log(datalist[identity-1])
        this.verify='true';
        console.log(this.verify)
        this.users.status='active'
        await axios.put("http://localhost:3000/users/"+this.users.id,{...this.users,status:this.users.status})
  
        this.$router.push("/profile")
       }else {
          this.ans=alert("You are not a registered user. \nPlease Register and then login. \nPlease check the email address or Password ")
        
      }
      
                }
  }
  }

}
   

</script>

<style scoped>
.copy{
    position:absolute;
    top:609px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}

.forgot{
    position:absolute;
    top:405px;
    left:1020px;
    font-size: 19px;
    color:black;
    text-shadow: 3px 2px 2px  yellow;
    
}
.forgot:hover{
    color:blue;
    text-shadow: 3px 2px 2px  yellow;
    

}
.format7{
     position: absolute;
    top:270px;
    left:630px;
    font-size: 20px;
    color:black;
}
.format4{
    position: absolute;
    top:270px;
    left:290px;
    font-size: 20px;
    color:black;
    
}
.format{
    position: absolute;
    top:30px;
    left:380px;
    font-size: 42px;
    color:navy;
    text-shadow: 1px 1px 2px white;
}
.format5{
    
    position: absolute;
    top:90px;
    left:290px;
    font-size: 30px;
    color:white;
    text-shadow: 1px 1px 2px grey;
}

.format3{
     position: absolute;
    top:180px;
    left:450px;
    font-size: 30px;
    color:black;
    text-shadow: 1px 1px 2px white;
}
.format6{
    position: absolute;
     top:285px;
    left:387px;
    font-size: 25px;
    color:white;
     text-shadow: 1px 1px 2px black;
}
.format6:hover{
    color:navy;
}

.h3{
    position:absolute;
    top:50px;
    left:300px;
}
.link2{
position: absolute;;
left:890px;
top:15px;
font-size: 27px;
background: none;
color:navy;
border: none;
border-radius: 35px;
width:18%;
opacity: 0.5;
outline: none;
font-family: 'Calibri';
}
.link2:hover{
 color:black;
 opacity: 1.0;
 background: none;
 border: none;
}
.link1{
position: absolute;
top:15px;
font-family: 'Calibri';
left:1110px;
font-size: 27px;
background: honeydew;
color:navy;
border:none;
border-radius: 35px;
width:18%;
outline: none;
box-shadow: 6px 6px 20px 1px black;

}
.link1:hover{
 color:black;
 opacity: 1.0;

}
.App2{
        position: relative;
        
         
    }

   .form{
     position: absolute;
   top:80px;
    left: 880px;
   
    background-color: white;
    border-radius: 6px;
    height: 450px;
    width: 470px;
    padding-bottom: 10px;

    /*box-shadow: 2px 2px 20px 3px black;*/
    
} 


.img2{
   position: absolute;
   top:-5px;
    left: 250px;
    
    
    border-color:black;
    
    border-radius: 30px;
    box-shadow: 20px 10px 30px 1px black;
    height: 580px;
    width: 1192px;

    }

.email{
    position:absolute;
    top:125px;
    left:990px;
   
   font-size:30px ;
    }

.emailimg{
position:absolute;
top:115px;
left:915px;

height:47px;
width:50px;
border-radius:150px;
border:3px solid black;

}
.emailin{
    position:absolute;
    top:185px;
    left:920px;
    padding:7px;
     border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
      height:20px;
      width:300px;
      box-shadow: 3px 3px 10px 3px gainsboro;
    }
.emailin:focus{
     box-shadow: 1px 1px 3px 3px orange;
}
.pass{
    position:absolute;
    top:275px;
    left:989px;
    font-size:30px ;

}
.passimg{
    position: absolute;
    top:265px ;
    left:913px; ;
    height: 47px;
    width:50px ;
    border:2px solid black;
    border-radius: 130px;
    padding: 2px;
}
.passin{
    position:absolute;
    top:339px;
    left:920px;
    padding:7px;
     height:20px;
      width:300px;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
      box-shadow: 3px 3px 10px 3px  gainsboro;
    }
.passin:focus{
     box-shadow: 1px 1px 3px 3px orange;
}

.submit{
     position:absolute;
    top:451px;
    left:1000px;
    border-radius:30px;
    background-color:black;
    outline:none;
    color:white;
    
    width: 210px;
    height:38px;
    border: 2px solid black;
    text-align: center;
    
    font-size: 23px;
    box-shadow: 3px 3px 10px 3px  grey;
}
.submit:hover{
    border-color:black;
    background-color:black;
    color:yellow;
    box-shadow: 2px 2px 10px 3px yellow;
    

}
.proceed{
    position:relative;
    top:1px;
    left:250px;
    

}

</style>