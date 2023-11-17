<template>
   <div>
       <img class="image" src="./formbk.png">
       <ul class="tab" border="2" >
           
           
            <div v-if="info.length==0" class="place"> 
            
                <li><b>Ooops!! You have not applied for any job</b></li>
                
                </div>
         <div v-else>
             
           <div class="col1" v-for="inf in info" :key="inf.id">
               <li><b>Company:</b> {{inf.company}}</li>
               <li><b>Job:</b> {{inf.job}}</li>
               <br><hr class="line">
                </div>  
                <div v-if="!info2.length==0"> 
                 <div class="col2" v-for="inf in info2" :key="inf.id">
               <li><b>Company:</b> {{inf.company}}</li>
               <li><b>Job:</b> {{inf.name}}</li>
               <br><hr class="line">
                </div>     
                </div>
        
           </div>

       </ul>
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
    
    
    data(){
        return{
            email:'',
            info:[],
            info2:[]
            
        }
        
    },
    methods:{
               back(){
            this.$router.push("/profile");        }
    },
  async  mounted(){
        this.email=localStorage.getItem('useremail');
        var datalist=[];
        
        await axios.get('http://localhost:3000/empapply')
        .then((res)=>datalist=res.data);
        
        console.log(datalist)
        
               for (const index of datalist) {               
               
            
             
                 
                 console.log(index.email)
                console.log(this.email)
                
                 if (this.email===index.email){
                
                    this.info.push(index);
                     console.log(this.info)
                
                 } console.log(this.info)
        }



        
                await axios.get('http://localhost:3000/intern')
        .then((res)=>datalist=res.data);
        
        console.log(datalist)
        
               for (const index of datalist) {               
               
            
             
                 
                 console.log(index.email)
                console.log(this.email)
                
                 if (this.email===index.email){
                
                    this.info2.push(index);
                     console.log(this.info2)
                
                 } console.log(this.info2)
        }
      

    }}

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
.place{
    position: relative;
   left:650px;
    
    top:100px;
    font-size: 19px;
}
.copy{
    position:absolute;
   margin-bottom:-2px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}
.line{
    position: absolute;
    width: 200px;
}
.image{
    position:absolute ;
    left:560px;
    top:270px;
    height: 650px;
    width: 730px;
    border-radius: 10px;
}
.tab{
    list-style-type: none;
}
.col1{
    position: relative;
   left:700px;
    top:7px;
    
    padding: 20px;
    font-size: 25px;
    color: black;
    
    
}
.col2{
    position: relative;
   left:700px;
    top:17px;
    
    padding: 20px;
    font-size: 25px;
    color: black;
    
    
}



</style>