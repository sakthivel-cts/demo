const loginForm = document.getElementById("login-form")

loginForm.addEventListener('submit', () => {

    console.log("Hello")
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if(username===""){
        alert("The username field is empty");
        return;
    }
    if(password===""){
        alert("The password field is empty");
        return;
    }

    if(username==="sakthivel" && password==="sakthivel") {
        alert("Login Successfully");
    }else {
        alert("Wrong Credential!!!");
    }
})