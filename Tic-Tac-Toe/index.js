let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset');
let newgameBtn=document.querySelector('#new-game');
let resultBox=document.querySelector('.result');
let para=document.querySelector('#winner');
let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const showWinner=(winner)=>{
    para.innerText=`Congratulations,Winner is ${winner}`;
    resultBox.classList.remove('hide');
    for(box of boxes){
        box.disabled=true;
    }
}
const gameDraw=()=>{
    para.innerText=`Its a draw`;
    resultBox.classList.remove('hide');
    for(box of boxes){
        box.disabled=true;
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            showWinner(pos1val);
        }
    }
}
}

newgameBtn.addEventListener('click',()=>{
    resultBox.classList.add('hide');
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
})

resetBtn.addEventListener('click',()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
})

