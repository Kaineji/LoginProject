
const Wekcome = document.getElementById("Welcome");
const storedusername = localStorage.getItem("username");

const Welcome = document.getElementById("Welcome").textContent = `Welcome ${storedusername}!`; 