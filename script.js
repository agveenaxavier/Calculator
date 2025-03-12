const decbtn = document.getElementById("decbtn");
const resetbtn = document.getElementById("resetbtn");
const incbtn = document.getElementById("incbtn");
const countlabel = document.getElementById("countlabel");
let count = 1;

incbtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decbtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
decbtn.onclick