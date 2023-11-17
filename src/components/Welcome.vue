<template>

<div class="App">
        <video class="video" src="./vid.mp4" autoplay loop width="1260px" height="600px"></video>
        
      
      
     <p class="pro1">Welcome to MyJob.com  </p>
       <p class="pro2">Thank you for choosing us.</p>
     <p class="pro3">Let us together take the first step of your dream job.</p>
     <p class="pro4">Press ok to continue</p>
        
     <button class="pro5" @click="change">ok</button>
<p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
     
     
        
        </div>
</template>
<script>
export default{  
  methods:{  change(){
      
      this.$router.push("/profile");
  }
  

}}
   

</script>

<style scoped>
.copy{
    position:absolute;
    top:154px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}
.video{
    position: absolute;
    top:199px;
    left:250px;
    
}
.pro1{
    position:absolute;
    top:190px;
    left:487px;
    font-size: 70px;
    
    color: black;
    
}
.pro2{
    position:absolute;
    top:321px;
    left:562px;
     font-size: 50px;
    color: black;
}
.pro3{
    position:absolute;
    top:415px;
    left:440px;
    font-size: 40px;
    color: black;
}
.pro4{
    position:absolute;
    top:520px;
    left:650px;
    font-size: 36px;
    color: black;
}
.pro5 {
    position:absolute;
    top:630px;
    left:770px;
    height:50px;
    width:90px;
    font-size: 29px;
    border: 2px solid brown;
    background-color:pink;


} 
.copy{
    position:absolute;
    bottom:-619px;
    right:39px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}



</style>