<template>
<div>
    <img src="./formbk.png" class="form">
    <div>
        <label class="email"><b>Email ID : {{users.email}}</b></label>
        
        <label class="pass"><b>Password</b></label>
        <input type="text"  class="passin" v-model="users.password">
        <label class="first"><b>First Name</b></label>
        <input type="text"  class="firstname" v-model="users.firstname">
        <label class="last"><b>Last Name</b></label>
        <input type="text"  class="lastname" v-model="users.lastname">
        <button class="save" @click="save">Save</button>
        </div>
        <button class="link" @click="back">Back</button>
            <p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
</div>
</template>
<script>
import Vue from 'vue'
import axios from'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
export default {
    async  mounted(){
        this.editinfo=true;
        var datalist=[];
        var email=localStorage.getItem('useremail');

        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data);
        
        console.log(datalist)
         console.log(email)
        
               for (const index of datalist) {               
               
            
            
                 console.log(index.status)
                 console.log(email)
                 
                 if(email===index.email){
                if(index.status==="active"){
                    this.users=index
                    console.log(index)
                }}
               console.log(this.users)
        }
   },
   
    data(){
        return{
            users:[],
        }
    },
   
        
    
    methods:{
         back(){
            this.$router.push("/profile");        },
      async  save(){
           let passplit=this.users.password.split("");
                    console.log(passplit)
                    console.log(passplit.length>8)
                      if(passplit.length>8){
                    alert("Details Updated Successfully")
     
                     
                            
                            await axios.put("http://localhost:3000/users/"+this.users.id,{...this.users})
                      }
                      else{
                                alert("Password should be of atleast 8 characters.");
                      }
                            
        }
    }
    }
</script>
<style scoped>
.link{
    position:absolute;
    top:210px;
    right:50px;
    color: white;
    background-color: green;
    height:40px;
    width:90px;
    border-radius: 10px;
    opacity: 0.6;
    font-size:20px;
    border:2px solid green;
    outline:none;

}
.link:hover{
      background-color: green;
       opacity: 1.0;
}
.copy{
    position:absolute;
    top:709px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}
.email{
    position: absolute ;
    top:190px;
    left:760px;
     font-size: 30px;
     text-shadow: 3px 3px yellow;
}
.passin{
position: absolute ;
    top:300px;
    left:700px;
     font-size: 20px;
    padding:5px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
    width:290px;
    
}
.lastname{
position: absolute ;
    top:530px;
    left:700px;
    color:black;
    font-size: 20px;
    padding:5px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
    width:290px;
    
}
.firstname{
    position: absolute ;
    top:420px;
    left:700px;
     font-size: 20px;
    padding:5px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
    width:290px;
    }
.form{
    position: absolute;
    top:230px;
    left:600px;
    height:430px;
    width:520px;
    border-radius: 10px;
}
.save{
    position: absolute ;
    top:602px;
    left:765px;
    color:white;
    font-size: 20px;
    padding:5px;
    border:2px solid black;
    border-radius: 7px;
    background-color: blue;
    height:40px;
    width:170px;
    opacity: 0.6;
    
}
.save:hover{
     opacity: 1.0;
}
.first{
    position: absolute ;
    top:380px;
    left:700px;
     font-size: 22px;
    padding:5px;
   
    
    height:30px;
    width:290px;
}
.last{
    position: absolute ;
    top:490px;
    left:700px;
     font-size: 22px;
    padding:5px;
   
    height:30px;
    width:290px;
}
.first{
    position: absolute ;
    top:380px;
    left:700px;
     font-size: 22px;
    padding:5px;
  
    
    height:30px;
    width:290px;
}
.pass{
    position: absolute ;
    top:260px;
    left:700px;
     font-size: 22px;
    padding:5px;
  
    
    height:30px;
    width:290px;
}
</style>