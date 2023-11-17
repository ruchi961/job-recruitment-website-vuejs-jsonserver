<template>
   <div>
    
       
      

       <!--<div v-if="status.status">
        
            <div v-if="status.gender==='Male'">
            
                    <router-link to="/ShowProfile" tag="button">heelo<img src="./Male.png"></router-link>
        
                    <router-view></router-view>

            </div>  
     
            <div v-else>   
    
                    <router-link to="/ShowProfile"  class="icon"><img src="./Female.png"></router-link>
        <router-view></router-view>
            </div>
             </div>
       <div v-else>
                <router-link to="/register"  class="icon"><img src="./images.png"></router-link>
                <router-view></router-view>
            </div>-->
       <div>
        <button class="prof" @click="editnow">Edit My profile </button>
        <button class="resume" @click="Resume">Create/ Edit My Resume </button>
        <button class="delete" @click="deleteit">Delete My Account</button>
        <button class="status" @click="Jobs">Status of Applied Jobs</button>
        <img src="./delete.jpg" class="deleteimg">
        <img src="./pro.png" class="profimg">
        <img src="./resumepic.png" class="resumeimg">
        <img src="./logout.png" class="logimg">

        <button class="log" @click="logout">Log Out </button>
       </div>
        <div v-if="editinfo">
           <h2> hello</h2>
               <!-- <label class="email">Email ID</label>
                 <input type="text" placeholder="xyz@domain.com" class="emailin" v-model="email">
                <label class="pass">Password</label>
                <input type="password"  placeholder="Minimum 8 Characters" class="passin" v-model="password">
                <label class="fname">First Name</label>
                <input type="text"  placeholder="Only First Name" class="fnamein" v-model="fname">
                <label class="lname">Last Name</label>
                <input type="text" placeholder="Only Last Name" class="lnamein" v-model="lname">
                <button class="butsubmit" @click.prevent="handelSubmit">Submit</button>-->
        </div>
        
 <p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
   </div>
</template>
<script>
import Vue from 'vue'
import axios from'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
export default {
    
    
    data(){
        return{
            email:'',
            signout:[],
            users:[],
            editinfo:false,
            erase:[]
        }
        
    },
    mounted(){
        this.email=localStorage.getItem('useremail');
    },

methods:{
  editnow(){
     /*this.editinfo=true;
        var datalist=[];
        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data,
        
        );
        
        console.log(datalist)
        
               for (const index of datalist) {               
               
            
            
                 console.log(index.status)
                if(index.status==="active"){
                    this.users=index
                }
               
        }
   
        console.log(this.users.id)
        
   */
  this.$router.push('/showprofile') 
    
},
Jobs(){
 this.$router.push('/showjobs');

},
Resume(){
this.$router.push('/resume') 
},
  
async logout(){
    var datalist=[];
    let check_email;
    check_email=this.email;
        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data,
        
        );
        
        console.log(datalist)
        
               for (const index of datalist) {               
               
            
             console.log(this.email);
                 console.log(index.status)
                 console.log(index.email)
                console.log(check_email)
                const val=index.email;console.log(val)
                 if (check_email===val){
                if(index.status==="active"){
                    this.signout=index
                     console.log(index)
                }
                 }
        }
   
        console.log(this.signout)
        this.signout.status='inactive'
        await axios.put("http://localhost:3000/users/"+this.signout.id,{
                    /*email: this.signout.email,
                    password: this.signout.password,
                    firstname:this.signout.fname,
                    lastname:this.signout.lname,
                    gender:this.signout.gender,
                    age:this.signout.age,
                    city:this.signout.city,
                    education:this.signout.education,
                    certificates:this.signout.certificates,
                    skills:this.signout.skills,
                    work_status:this.signout.work_status,
                    experience:this.signout.experince,
                    contact_no:this.signout.contact_no,
                    additional_info:this.addtional_info,*/                   
                    ...this.signout,
                    status:this.signout.status})
     var empty='';
        localStorage.setItem('useremail',empty)
    
    alert("You have logged out");
    
    this.$router.push("/register");
   
},
async deleteit(){
    var ans='';
    ans=confirm("Are you sure you want to delete your profile")
    console.log(ans)
    if(ans){var datalist=[];
        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data);
        
        console.log(datalist)
        
               for (const index of datalist) {               
               
            
            
                 console.log(index.status)
                 if(this.email===index.email){
                if(index.status==="active"){
                    this.erase=index
                }}
               
        }
   
        console.log(this.erase.id)
        
        await axios.delete("http://localhost:3000/users/"+this.erase.id)
        /*var idno=0;
       Fetch new data*/ 
        await axios.get('http://localhost:3000/users')
        .then((res)=>datalist=res.data);

        /*for (const index of datalist) {  
                                        index.id=idno+1      
                                        await axios.put("http://localhost:3000/users/"+index.id,{...index,id:index.id})
                                        
                                        console.log(index.id)
        }*/
        var empty='';
        localStorage.setItem('username',empty)
    alert("You have deleted your account");
    
    this.$router.push("/register");
    }
    
}
 
}
}
</script>
<style scoped>
.copy{
    position:absolute;
    top:689px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}
.status{
    position: absolute;
    top:590px;
    left:686px;
    height:50px;
    width: 300px;
    font-size: 25px;
    color: white;
    background-color: purple;
    border: 2px solid black;
    opacity: 0.8;
    border-radius: 22px;  
    outline: none; 
    
}
.status:hover{
      
    opacity: 1.0;
    
}
.profimg{
 position: absolute;
    top:283px;
    left:390px;
    height:105px;
    width:112px;
    border-radius: 82px;
    border:2px solid black;
    
}
.deleteimg{
position: absolute;
    top:283px;
    left:970px;
    height:105px;
    width:112px;
    border-radius: 82px;
    border:2px solid black;
}
.logimg{
position: absolute;
    top:283px;
    left:1259px;
    height:105px;
    width:112px;
    border-radius: 82px;
    border:2px solid black;
}
.resumeimg{
position: absolute;
    top:283px;
    left:670px;
    height:105px;
    width:112px;
    border-radius: 82px;
    border:2px solid black;
}
/*
.email{
    position:absolute;
    top:210px;
    left:870px;
   
   font-size:30px ;
    }


.emailin{
    position:absolute;
    top:260px;
    left:870px;
    padding:7px;
     border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
    }
.pass{
    position:absolute;
    top:340px;
    left:870px;
    font-size:30px ;
}
.passin{
    position:absolute;
    top:390px;
    left:870px;
    padding:7px;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
    }

.fname{
    position:absolute;
    top:480px;
    left:870px;
    font-size:30px ;
    }

.fnamein{
    position:absolute;
    top:530px;
    left:870px;
    padding:7px;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
    }

.lname{
    position:absolute;
    top:480px;
   left:1110px;
   font-size:30px ;
    }
.lnamein{
    position:absolute;
    top:530px;
    left:1110px;
    padding:7px;
    outline: none;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
    
    }
    .lnamein:focus{
        
        box-shadow:2px 2px 2px 2px floralwhite;
    }*/
.prof{
    position: absolute;
    top:430px;
    left:350px;
    height:50px;
    width: 200px;
    font-size: 25px;
    color: white;
    background-color: darkgreen;
    border: 2px solid black;
    opacity: 0.6;
    border-radius: 22px;  
    outline: none; 
}
.prof:hover{
      
    opacity: 1.0;
    
}

.resume{
    position: absolute;
    top:420px;
    left:617px;
    height:70px;
    width: 230px;
    font-size: 25px;
    color: white;
    background-color: darkgreen;
    border: 2px solid black;
    opacity: 0.6;
    border-radius: 32px; 
    outline: none;   
}
.resume:hover{
      
    opacity: 1.0;
    
}

.delete{
    position: absolute;
    top:430px;
    left:915px;
    height:50px;
    width: 250px;
    font-size: 25px;
    color: white;
    background-color: darkgreen;
    border: 2px solid black;
    opacity: 0.6;
    border-radius: 22px;   
    outline: none; 
}
.delete:hover{
      
    opacity: 1.0;
    
}

.log{
    position: absolute;
    top:431px;
    left:1230px;
    height:50px;
    width: 200px;
    font-size: 25px;
    color: white;
    background-color: darkgreen;
    border: 2px solid black;
    opacity: 0.6;
    border-radius: 22px;   
    outline: none; 
}
.log:hover{
      
    opacity: 1.0;
    
}

</style>