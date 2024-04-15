let boxes = document.querySelectorAll(".box");
let resultContainer = document.querySelector(".result")
let result = document.querySelector("#msg")
let new_btn= document.querySelector("#New-btn")
let reset_btn= document.querySelector("#reset-btn")
const WinningPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn0 = true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turn0){
        box.innerText= "0";
        turn0 =false;
    }
    else{
        box.innerText= "X";
        turn0 =true;
    }
    box.disabled = true;
    checkWinner();
});
});

const resetGame=()=>{
    turn0 = true;
   enabled();
   resultContainer.classList.add("hide");
}
const enabled=()=>{
    for(box of boxes){
        box.disabled = false; 
        box.innerText ="";
    }
}
const Draw =()=>{
    result.innerText="Sorry, Match-Draw";
    resultContainer.classList.remove("hide");
    disabled();
}
const disabled=()=>{
    for(box of boxes){
        box.disabled = true; 
    }
    enabled();
}
let ShowWinner=(Winner)=>{
   result.innerText=`Congrulation Winner is ${Winner}`;
   resultContainer.classList.remove("hide");
   disabled();
}
const checkWinner = ()=>{
    for(pattern of WinningPatterns){
        let Place1 = boxes[pattern[0]].innerText;
        let Place2 = boxes[pattern[1]].innerText;
        let Place3 = boxes[pattern[2]].innerText;
        if(Place1 !="" && Place2 !="" && Place3 !=""){
        if(Place1===Place2 && Place2===Place3){
             ShowWinner(Place1);
             continue;
        }
        else{
            resetGame();
            Draw();
            result.innerText="Sorry, Match-Draw";
        }
    }
    }
}
new_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);