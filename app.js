let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
   
    gameseq.push(randColor);
    console.log(gameseq);
  gameflash(randBtn);
}

function checkans(idx){
//console.log("current level :",level);

if(userseq[idx]===gameseq[idx]){
if(userseq.length==gameseq.length){
    setTimeout(levelup,1000);
}
}
else{
   h2.innerHTML=`Game over!Your score was <b>${level}</b> <br>press any key to start!`;
   document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
},150);
   reset();
}
}

function btnpress(){
    console.log(this);
    let btn=this;
  userFlash(btn);
usercolor= btn.getAttribute("id");

userseq.push(usercolor);
checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}