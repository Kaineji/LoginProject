const Button  = document.getElementById("SignupBtn");

Button.onclick  = function() {

    const Regusername = document.getElementById("RegUser").value;
    const CreatePassword  = document.getElementById("RegPass").value;
    const ConfirmPassword  = document.getElementById("ConPass").value;
    const notmatch = document.getElementById("notmatch");

    if(CreatePassword !== ConfirmPassword) {

        notmatch.textContent =`Password doesn't match`;

    }

    else if (Regusername && CreatePassword && ConfirmPassword) {
        
        localStorage.setItem("username", Regusername);
        localStorage.setItem("password", CreatePassword);

        window.location.href = "index.html";

    } 
    
    else {

        alert("Please fill in all fields");

    }


}
