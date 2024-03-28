const Increase = document.getElementById("Increase");
const reset = document.getElementById("Zero");
const Decrease = document.getElementById("Decrease");
const countlabel= document.getElementById("countlabel");

let count = 0;

Increase.onclick = function() {

    count++;
    countlabel.textContent = count;

}

reset.onclick = function() {

    count = 0;
    countlabel.textContent = count;

}

Decrease.onclick = function() {

    count--;
    countlabel.textContent = count;

}