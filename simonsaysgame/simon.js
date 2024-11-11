let gameseq = [];
let userseq = [];
let btns = ["red", "green", "purple", "yellow"];

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

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 190);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
 

    let randIdx = Math.floor(Math.random() *4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
    

}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level =0;
}


  function checkAns(idx){
    //  console.log("currlevel:",level)
    // let idx= level-1;

    if(userseq[idx]==gameseq[idx]){
      if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
      }
        console.log("same value")
    }
    else{
        h2.innerHTML=`GAME OVER ! your score was  <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor="white";
        },300)
        reset()
    }
  }


  function btnpress(){
    let btn=this;
    btnFlash(btn);
    console.log(this);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
  }

  let allbtns=document.querySelectorAll(".btn");
  for(btn of allbtns){
    btn.addEventListener("click",btnpress);
  }
  

