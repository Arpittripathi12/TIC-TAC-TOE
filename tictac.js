let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let winner=document.querySelector(".winner");
let msgcontainer=document.querySelector(".msg-container")
let turn =1;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];         
const resetgame=()=>{
    turn=1;
    enableboxes();
    msgcontainer.classList.add("hide");
    winner.classList.add("hide");

}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let showWinner=(Winner)=>{
    winner.innerText=`Congratulations, Winner is ${Winner}`
    msgcontainer.classList.remove("hide");
    winner.classList.remove("hide");
    disableboxes();
}
const checkWinner = ()=>{
for(let pattern of winPatterns){
let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;
if(pos1 != "" && pos2 != "" && pos3 != ""){
if(pos1===pos2 && pos2===pos3){
 console.log("winner");
 showWinner(pos1);
}

}

}
}          
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn===1){
        box.innerText="X";
        turn=0;
        }else{
         box.innerText="O";
         turn=1;
        }
        box.disabled=true;
     checkWinner();
    });
});   
newgame.addEventListener("click",resetgame); 
reset.addEventListener("click",resetgame);                

