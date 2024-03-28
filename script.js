
const usernames = ["katecaraballo20", "arnelcutie12", "gabrielbaby", "Joenelcutie"];
const passwords = ["iloveallen123", "arnelpogi246", "corpinyummy123", "Joenel2468"];

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

usernames.push(storedUsername);
passwords.push(storedPassword);

const Login = document.getElementById("LoginBtn");
const inputusername = document.getElementById("input-username");
const inputpassword = document.getElementById("input-password");

Login.onclick = function() {

    const username  = document.getElementById("username-input").value;
    const password  = document.getElementById("password-input").value;
   
    if(usernames.includes(username) && passwords.includes(password)) {

        window.location.href = "Account.html"

    }

    else if (username === "" && password === "") {

        inputusername.textContent = `input your username!`;
        inputpassword.textContent = `input your password!`;

    }

    else if (username === ""){

        inputusername.textContent = `input your username!`;

    }

    else if (password === ""){

        inputpassword.textContent = `input your password!`;

    }

    else {

        inputusername.textContent = `username and password doesn't match`;

    }

}
