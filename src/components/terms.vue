<template>
   <div>
       
       <h1>Terms and Conditions</h1>
       <h3>Registration Data and Account Security</h3>
       <p><b>In consideration of your use of the Site, you agree to: </b></p>
    <ul>
        <li>Provide accurate, current and complete information about you.</li>
        <li>Maintain and promptly update the Registration Data, and any other information you provide to keep it <b>accurate, current and complete</b></li>
        <li>Maintain the security of your password and identification; </li>
        <li>accept all responsibility for any and all activities that occur under your account</li>
    </ul>
    <h3>Safety Tips for Applicants</h3>
    <p>It is our endeavor to provide all our users with a safe and hassle free experience on MyJOB.com.
Accordingly, we would like to make Applicants aware of following safety tips for them.<br><br><b>myJOB.com does</b> <b class="bold">NOT</b> allow Employers to:</p>

    <p>To charge money in any form 
        (including test fee, security deposit, documentation fee etc.) 
        from the Applicants for offering Job. <br><b  class="bold">This is strictly prohibited.</b></p>


<h3>Privacy Policy</h3>
<p>We respect your privacy and strive to provide a <b>safe, secure</b> user experience.<br><br>In some areas of our Services, 
we request you to provide or submit personal information including your name, email address, telephone number, contact information,
 education details and any other information from which your identity is discernible.<br><br>
If you are an applicant, we may share your personal information with employers whose internships and/or 
jobs you apply to or whose internships.</p>
<button class="link" @click="back">Back</button>
<p class="copy"><b>&copy; Copyright 2020 MyJOB.com</b></p>
   </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.push("/register");        }
    }
}
</script>
<style scoped>
.copy{
    position: absolute;
     top:1149px;
    left:549px;
    color: navy;
    font-size: 19px;
    text-shadow: 1px 1px 2px white;
}

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
.bold{
    color:red;
    font-size: 25px;
    text-shadow: 2px 2px 5px white;
}
h1{position:relative;
    left:300px;
    margin-left:-410px;
    margin-top:-460px; 
    text-align: center;
     text-align: center;
    color:black;
    font-size: 52px;
    text-shadow: 2px 2px 5px white;

}
ul{
    position: relative;
    left:300px;
    text-align: left;
    color:black;
    font-size: 25px;
    text-shadow: 2px 2px 5px white;
    margin-right:410px;

}
h3{
    
    position:relative;
    left:300px;
    margin-right:410px;
      
    text-align: center;
    color:navy;
    font-size: 25px;
    text-shadow: 2px 2px 5px white;
}
p{ position:relative;
    left:300px;
    margin-right:410px;
      
    text-align: center;
    color:black;
    font-size: 25px;
    text-shadow: 2px 2px 5px white;
}
</style>