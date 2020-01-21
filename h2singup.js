function validate()
{


	var email=document.m.email.value;
    
    var pwd=document.m.pwd.value;
    
   if(email!="admin@gmail.com")
{
   document.getElementById('errormsg').innerHTML="Please Enter EmailID";
   document.m.email.focus();
   return false; 
}
if (pwd!="admin123")
{
	document.getElementById('errormsg').innerHTML="Please enter a valid password";
	document.m.pwd.focus();
   return false; 
}else
alert("Login Successful")

return true;
}