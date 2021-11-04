const buttons = document.querySelectorAll(".btn");

const result = document.getElementById("result");

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        result.textContent+=e.target.id;
    });
    
});

equal.addEventListener('click',function(){
    result.textContent= eval(result.textContent);
});

clear.addEventListener('click', ()=>{
    result.textContent="";
});

//--------------------------------------------------------------------

document.body.onclick=function(){
    console.log("click");
};