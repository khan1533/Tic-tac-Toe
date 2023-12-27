let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgcntr=document.querySelector(".msgcntr");
let msg=document.querySelector("#msg");

let turno = true;

const winpattrns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame= ()=>{
    turno=true;
    enablebox();
    msgcntr.classList.add("hide");
}





boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was cicked");
        if(turno){
            box.innerText = "o";
            turno = false;
        } else{
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
    }
    );
}
);

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showwinner= (winner)=>
{
    msg.innerText= `winner is ${winner}`;
    msgcntr.classList.remove("hide");
    disablebox();
};


const checkwinner = ()=>{
    for(let patterns of winpattrns){
       
         let pos1val =   boxes[patterns[0]].innerText;
         let pos2val =   boxes[patterns[1]].innerText;
         let pos3val =   boxes[patterns[2]].innerText;

         if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val &&  pos2val===pos3val){
                console.log("winner", pos1val);

                showwinner(pos1val);
            }
         }
    }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);