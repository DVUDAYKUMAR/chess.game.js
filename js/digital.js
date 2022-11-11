

function clock() {



let time  = new Date();
let hrs = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

document.getElementById("hrs").innerHTML = hrs;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;


}
setInterval(clock,10);

let a = new Date();
document.querySelector("#day").innerHTML = a.getDay()-1;
document.querySelector("#month").innerHTML = a.getMonth()+1;
document.querySelector("#year").innerHTML = a.getFullYear()-1;

