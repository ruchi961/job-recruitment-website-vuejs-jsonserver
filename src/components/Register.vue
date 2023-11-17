<template>
<div class="App">
     
  
   
   
       <img class="img2" src="./bkpic.png">
        <img class="form" src="./Capture.png">
<div class="box2">
    
     <router-link to="/login" tag="button" class="link1"><b>Login now</b></router-link>
     <router-link to="/register" tag="button" class="link2"><b>Register</b></router-link>
      
 <router-view></router-view>
  <img class="emailimg" src="./email.png">
    <label class="email">Email ID</label>
    
    <input type="text" placeholder="xyz@domain.com" class="emailin" v-model="email">
    <img class="passimg" src="./pass.jpg">
    <label class="pass">Password</label>
    <input type="password"  placeholder="Minimum 8 Characters" class="passin" v-model="password">
    <label class="fname">First Name</label>
    <input type="text"  placeholder="Only First Name" class="fnamein" v-model="fname">
    <label class="lname">Last Name</label>
    <input type="text" placeholder="Only Last Name" class="lnamein" v-model="lname">
    <button class="butsubmit" @click.prevent="handelSubmit">Submit</button>
    
    
</div>
<p class="format">People<b class="format2"> "Just like You" </b> Register here</p>
<p class="format5">for their <b class="format2"> Dream Job</b></p>
<p class="format3">Still Thinking !!!!</p>
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
       
           
               
               email:'',
               password:'',
               fname:'',
               lname:'',
               gender:'',
               age:'',
               city:'',
               education:'',
               certificates:'',
               skills:'',
               work_status:'',
               experience:'',
               contact_no:'',
               additional_info:'',
               status:'active'
               
           
        }
      
       
   },
   methods: {
       
        async handelSubmit(){
            localStorage.setItem('useremail',this.email);
                if(this.email=='' ||  this.password=='' || this.fname=='' || this.lname==''){
                     alert("Please fill all the details")
                }else{
                    let emailsplit=this.email.split("");
                    console.log(emailsplit);
                    let index1=emailsplit.indexOf("@");
                    let index2=emailsplit.indexOf(".");
                    let passplit=this.password.split("");
                    console.log(passplit)
                    console.log(passplit.length>8)
                    /* console.log(index2)
                      console.log(index2!=(emailsplit.length-1))
                       console.log(index1!=(emailsplit.length-1))
                        console.log(index1)
                         console.log(index1!=0 && index2!=0 )
                          console.log(emailsplit.length-1)*/

                    if(index1!=-1 && index2!=-1 && index1!=0 && index2!=0 && index2>index1 && index1!=(emailsplit.length-1)  && index2!=(emailsplit.length-1)){
                        if(passplit.length>8){

                        
                    
                  const data={  
                    email: this.email,
                    password: this.password,
                    firstname:this.fname,
                    lastname:this.lname,
                    gender:this.gender,
                    age:this.age,
                    city:this.city,
                    education:this.education,
                    certificates:this.certificates,
                    skills:this.skills,
                    work_status:this.work_status,
                    experience:this.experince,
                    contact_no:this.contact_no,
                    additional_info:this.addtional_info,
                    status:this.status
                    
                };
                var datalist=[];
                await axios.get('http://localhost:3000/users')
                .then((res)=>datalist=res.data);
                var i=1;
                
                console.log(datalist)
                
                       
                    for (const index of datalist) {
                        console.log(index)
               
            
            
            if (this.email===index.email) {
                 i=0;
                break
                            }}

                        if(i==0){
                            alert("You have already Registered")
                        }
                  else{  
                await axios.post('http://localhost:3000/users',data)
                alert("You have Successefully registered.");
                this.$router.push("/welcome")
               this.email='',
               this.password='',
               this.fname='',
               this.lname='',
               this.gender='',
               this.age='',
               this.city=''
               }
                }
                    else{
                                alert("Password should be of atleast 8 characters.");
                    }
                }else{
                         alert("Please enter appropriate Email Id.");
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

.emailimg{
position:absolute;
top:90px;
 left:920px; 

 height: 40px;
    width:43px ;
border-radius:150px;
border:3px solid black;

}
.passimg{
    position: absolute;
    top:210px ;
    left:920px ;
    height: 40px;
    width:43px ;
    border:2px solid black;
    border-radius: 130px;
    padding: 2px;
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
    left:300px;
    font-size: 30px;
    color:navy;
    text-shadow: 1px 1px 2px white;
}
.format5{
    
    position: absolute;
    top:90px;
    left:400px;
    font-size: 30px;
    color:navy;
    text-shadow: 1px 1px 2px white;
}
.format2{
    color:white;
    text-shadow: 1px 1px 2px black;
}
.format3{
     position: absolute;
    top:200px;
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
    color:navy
}
.link2{
position: absolute;;
left:890px;
top:15px;
font-size: 27px;
background:honeydew;
color:navy;
border: 1px solid pink;
border-radius: 35px;
width:18%;
outline: none;
font-family: 'Calibri';
 box-shadow: 6px 6px 20px 1px black;
}
.link2:hover{
 color:black;
}
.link1{
position: absolute;
font-family: 'Calibri';
left:1110px;
top:15px;
font-size: 27px;

background: none;
color:navy;
border: none;
border-radius: 35px;
width:18%;
opacity: 0.5;
outline: none;

}
.link1:hover{
 color:black;
 opacity: 1.0;

}
.App{
        position: relative;
      
    }


.form{
     position: absolute;
   top:80px;
   bottom: 10px;
    left: 880px;
    background-color: white;
    border-radius: 6px;
    height: 450px;
    width: 470px;
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
    top:100px;
    left:990px;
    font-size:30px ;
    }


.emailin{
    position:absolute;
    top:150px;
    left:920px;
    padding:7px;
     border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
      height:20px;
      width:300px;

    }
    .emailin:focus{
     box-shadow: 1px 1px 3px 3px orange;
}
.pass{
    position:absolute;
    top:220px;
    left:990px;
    font-size:30px ;
}
.passin{
    position:absolute;
    top:270px;
    left:920px;
    padding:7px;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
       height:20px;
      width:300px;
    }
.passin:focus{
     box-shadow: 1px 1px 3px 3px orange;
}
.fname{
    position:absolute;
    top:340px;
    left:920px;
    font-size:30px ;
    }

.fnamein{
    position:absolute;
    top:390px;
    left:920px;
    padding:7px;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
      outline: none;
    }
.fnamein:focus{
     box-shadow: 1px 1px 3px 3px orange;
}
.lname{
    position:absolute;
    top:340px;
   left:1135px;
   font-size:30px ;
    }
.lnamein{
    position:absolute;
    top:390px;
    left:1135px;
    padding:7px;
    outline: none;
       border-color:black;
    border-radius: 15px;
    border-width: thin;
    
    }
    .lnamein:focus{
        
       
     box-shadow: 1px 1px 3px 3px orange;
}
    
    
 .butsubmit{
     position:absolute;
    top:447px;
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
.butsubmit:hover{
    border-color:black;
    background-color:black;
    color:yellow;
    box-shadow: 2px 2px 10px 3px yellow;
    

}


</style>