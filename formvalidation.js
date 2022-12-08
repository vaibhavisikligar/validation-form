function validation(){
    let fName = document.form1.fname.value; 
    if (fName==null || fName==""){
        document.getElementById("p1").innerHTML="Enter the First Name.";
        document.form1.fname.focus();
        return false;
    }
    let lName = document.form1.lname.value;
    if (lName==null || lName==""){
        document.getElementById("p2").innerHTML="Enter the Last Name.";
        document.form1.lname.focus();
        return false;
    } 
    let address = document.form1.address.value;
    if ( address== null ||  address==""){
        document.getElementById("p3").innerHTML="Enter the Address.";
        document.form1.address.focus();
        return false;
    }  
    let mNo = document.form1.mno.value;
    if(mNo == null || mNo == "" ){
        document.getElementById("mno_msg").innerHTML="Enter Number.";
        document.form1.mNo.focus();
        return false;
    } else if(isNaN(mNo)){
        document.getElementById("mno_msg").innerHTML="Enter the Only Number.";
        document.form1.mNo.focus();
        return false;
    } else if(mNo.length<=10){
        document.getElementById("mno_msg").innerHTML="Enter the must be 10 Digit";
        document.form1.mNo.focus();
        return false;
    } 
    let emailId = document.form1.emailid.value;
    if (emailId==null||emailId==""){
        document.getElementById("p5").innerHTML="Enter the Email";
        document.form1.emailId.focus();
        return false;
    } 
    let userName = document.form1.username.value;
     if (userName== null||userName==""){
        document.getElementById("p6").innerHTML="Enter the User Name";
        document.form1.userName.focus();
        return false;
    } else if (userName.length<=8){
        document.getElementById("p6").innerHTML="Enter the must be 8 letters";
        document.form1.userName.focus();
        return false;
    } 
    else {
        return true;
    }
    let passWord = document.form1.pass.value;
     if( passWord==null ||  passWord==""){
        document.getElementById("p7").innerHTML="Enter the Password";
        document.form1.passWord.focus();
        return false;
    } else if (passWord.length<=8){
        document.getElementById("p7").innerHTML="Enter the must be 8 letters in password";
        document.form1.passWord.focus();
        return false;
    } else{
        return true;
    }
    let confirmPassword = document.form1.cpass.value;
    if (confirmPassword == null || confirmPassword==""){
        document.getElementById("p8").innerHTML="Enter the confirm password";
        document.form1.confirmPassword.focus();
        return false;
    } else if (confirmPassword===passWord){
        document.getElementById("p8").innerHTML="Enter the correct Password";
        document.form1.confirmPassword.focus();
        return false;
    }
    else{
        return true;
    }
    return true;
}