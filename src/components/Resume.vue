<template>
<div>
    <img src="./formbk.png" class="form">
    <div>
        <label class="lgender"><b>Gender</b></label>
        <label class="lage"><b>Age</b></label>
        <label class="lcity"><b>City</b></label>
        <label class="leducation"><b>Education</b></label>
        <label class="lcertificate"><b>Certificate</b></label>
        <label class="lskill"><b>Skill</b></label>
        <label class="lwork"><b>Working Status</b></label>
        <label class="lexp"><b>Experience</b></label>
         <label class="lcontact" ><b>Contact No</b></label>
         <label class="linfo"><b>Additional Info</b></label>
        <input type="radio"  class="gender1" value="Female" v-model="users.gender">
        <input type="radio"  class="gender2" value="Male" v-model="users.gender">
         <label class="lmale"><b>Male</b></label>
          <label class="lfemale"><b>Female</b></label>
        <input type="text" placeholder="Number Only" class="age" v-model="users.age">
        <input type="text"  class="city" v-model="users.city">
        <input type="text"  class="education" v-model="users.eductation">
        <input type="text"  class="certificate" v-model="users.certificates">
        <input type="text"  class="skill" v-model="users.skills">
        
        <input type="radio"  class="work1" value="Fresher" v-model="users.work_status">
        <input type="radio"  class="work2" value="Experienced" v-model="users.work_status">
 <label class="Fresher"><b>Fresher</b></label> 
 <label class="Experienced"><b>Experienced</b></label>
       
        <input type="text"  class="exp"  placeholder="Number Only" v-model="users.experience">
        <input type="text"  class="contact" placeholder="Number Only" v-model="users.contact_no">
        <textarea class="info" v-model="users.additional_info"></textarea>
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
            users:[]
        }
    },
   
        
    
    methods:{
         back(){
            this.$router.push("/profile");        
    },
     async  save(){
         var val=true;
        
                    let passplit=this.users.age.split("");
                    console.log((passplit[0]>'a' || passplit[0]>'A') &&(passplit[0]<'z' || passplit[0]<'Z'))
                    console.log(passplit)
                    for(const i in passplit){
                        console.log(i)
                                    if((passplit[i]>'a' || passplit[i]>'A') && (passplit[i]<'z' ||passplit[i]<'Z')){
                                        val=false;
                                    }
                    }
                    console.log(val)
                var val2=true;
        
                    let pass=this.users.contact_no.split("");
                    console.log((pass[0]>'a' || pass[0]>'A') &&(pass[0]<'z' || pass[0]<'Z'))
                    console.log(pass)
                    for(const i in pass){
                        console.log(i)
                                    if((pass[i]>'a' || pass[i]>'A') && (pass[i]<'z' ||pass[i]<'Z')){
                                        val2=false;
                                    }
                    }
                    console.log(val)
                        var val3=false;
        
                console.log(val3);
                      
                    
                                    if((pass[0]==7 || pass[0]==8 || pass[0]==9)){
                                        val3=true;
                                    }
                     var val4=false;
                      if((pass.length==10)){
                                        val4=true;
                                    }
                    console.log(val)


                      if(val&&val2&&val3&&val4){

                    alert("Details Updated Successfully")
                    await axios.put("http://localhost:3000/users/"+this.users.id,{...this.users})
                      }
                      else if(!val||!val2){
                            alert("Enter Number Only in the fields which require numbers")
                      }else if(!val3){
                                    alert("Enter appropriate contact number.\nContact number start with 7,8 or 9.")
                      }else if(!val4){
                                alert("Enter appropriate contact number.\nContact number should be of 10 digits.")
                      }
                            
        }
    }
    }
    
</script>
<style scoped>
.link{
    position:absolute;
    top:175px;
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
   margin-bottom:-125px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}

.lastname{
    position: absolute ;
    top:420px;
    left:700px;
    color:black;
    font-size: 20px;
    padding:5px;
    border:2px solid black;
    border-radius: 7px;
    background-color: rgb(195, 228, 250);
    height:30px;
    width:290px;
    
}
.lfemale{
 position: absolute ;
    top:243px;
    left:495px;
    font-size:19px;
}
.lmale{
     position: absolute ;
    top:243px;
    left:625px;
    font-size:19px;

}
.lgender{
     position: absolute ;
    top:235px;
    left:290px;
    font-size:23px;
   
}
.gender1{
    position: absolute ;
    top:240px;
    left:360px;
     padding:3px;
    border:2px grove black;
   
    height:20px;
    width:200px;
    }
.gender2{
    position: absolute ;
    top:240px;
    left:490px;
     padding:3px;
    border:2px grove black;
   
    height:20px;
    width:200px;
    }
.lage{
      position: absolute ;
    top:245px;
    left:790px;
    font-size:23px;
}
.age{
    position: absolute ;
    top:240px;
    left:850px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
    width:200px;
    outline:none;
    font-size:21px;
}
.lcity{
      position: absolute ;
    top:245px;
    left:1190px;
    font-size:23px;
}
.city{
    position: absolute ;
    top:240px;
    left:1250px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
     width:200px;
     outline:none;
     font-size:21px;
}
.lcontact{
      position: absolute ;
    top:346px;
    left:610px;
    font-size:23px;
}
.contact{
     position: absolute ;
    top:340px;
    left:750px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
    outline:none;
     width:270px;
     font-size:21px;
}
.leducation{
      position: absolute ;
    top:448px;
      left:920px;
    font-size:23px;
}
.education{
      position: absolute ;
    top:440px;
    left:1060px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
     width:270px;
     outline:none;
     font-size:21px;
}
.lcertificate{
    position: absolute ;
    top:645px;
    left:920px;
    font-size:23px;
}
.certificate{
    position: absolute ;
    top:640px;
    left:1060px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
     width:270px;
     outline:none;
     font-size:21px;
}
.Fresher{
    position: absolute ;
    top:542px;
    left:500px;
    font-size:19px;
}
.Experienced{
    position: absolute ;
    top:542px;
    left:630px;
    font-size:19px;
}
.lwork{
    position: absolute ;
    top:540px;
    left:260px;
    font-size:23px;
}
.work1{
position: absolute ;
    top:540px;
    left:360px;
     padding:3px;
    border:2px grove black;
   
    height:20px;
    width:200px;
    
}
.work2{
  position: absolute ;
    top:540px;
    left:490px;
     padding:3px;
    border:2px grove black;
   
    height:20px;
    width:200px;
    
}
.lexp{
 position: absolute ;
    top:545px;
    left:910px;
    font-size:23px;
    
}
.exp{
    position: absolute ;
    top:540px;
    left:1060px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
     width:270px;
     outline:none;
     font-size:21px;
}
.linfo{
      position: absolute ;
    top:660px;
    left:270px;
    font-size:23px;
}
.info{
     position: absolute ;
    top:640px;
    left:460px;
     padding:3px;
    border:5px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    outline:none;
     width:270px;
     height:90px;
     font-size:21px;
}
.lskill{
     position: absolute ;
    top:442px;
    left:370px;
    font-size:23px;
}
.skill{
    position: absolute ;
    top:440px;
    left:460px;
     padding:3px;
    border:2px grove black;
    border-radius: 7px;
    background-color: rgb(214, 238, 253);
    height:30px;
     width:270px;
     outline:none;
     font-size:21px;
}
.form{
    position: absolute;
    top:200px;
    left:230px;
    height:630px;
    width:1270px;
    border-radius:10px;
}
.save{
    position: absolute ;
    top:749px;
    left:775px;
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
</style>