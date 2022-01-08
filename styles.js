
function validation(){
    let name=document.getElementById("name");
    let password=document.getElementById("password");
    let email=document.getElementById("email");
    let phone=document.getElementById("phone");
    if(name.value.lenght<6){
        alert("name should be greater than 6 letters")
    }
    elseif(password.value.lenght>6);{
        alert("password should not be greater than 6 digits");
    }
    elseif(phone.value.lenght>10);{
        alert("phone number should not greater than 10 digits");
    }
    

}
