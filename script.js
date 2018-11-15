/*document.querySelector(".button1").addEventListener("dblclick",(event)=>{alert("ALERT!")})
addEventListener('select', function() {alert('Selection changed!');}, false);
document.querySelector(".button2").addEventListener("mouseover",(hoveringOverButton)=>{console.log(hoveringOverButton)})
document.addEventListener("wheel",(scrollAndScroll)=>{alert("Just scrolling")})
*/
/*
document.querySelector(".sum").addEventListener("click",(sumEvent)=>{
    const firstValue=document.querySelector(".first_number").value
    const secondValue=document.querySelector(".second_number").value    
    const result=Number(firstValue)+Number(secondValue)
    console.log(showResult)
});

document.querySelector(".sub").addEventListener("click",(subEvent)=>{
    const firstValue=document.querySelector(".first_number").value
    const secondValue=document.querySelector(".second_number").value    
    console.log(firstValue,secondValue)
    const result=firstValue-secondValue
    console.log(result)
});

document.querySelector(".div").addEventListener("click",(divEvent)=>{
    const firstValue=document.querySelector(".first_number").value
    const secondValue=document.querySelector(".second_number").value    
    console.log(firstValue,secondValue)
    const result=firstValue/secondValue
    console.log(result)
});

document.querySelector(".mul").addEventListener("click",(mulEvent)=>{
    const firstValue=document.querySelector(".first_number").value
    const secondValue=document.querySelector(".second_number").value    
    console.log(firstValue,secondValue)
    const result=firstValue*secondValue
    console.log(result)
});

document.querySelector(".mod").addEventListener("click",(modEvent)=>{
    const firstValue=document.querySelector(".first_number").value
    const secondValue=document.querySelector(".second_number").value    
    console.log(firstValue,secondValue)
    const result=firstValue%secondValue
    console.log(result)
});
function showResult(){
    
    return document.querySelector(".result").innerHTML=result
}
*/

document.querySelector(".button_click").addEventListener("click", clickFunction);

let operation= '';

function callResult(value){
    const firstValue=document.querySelector(".first_number").value
    const secondValue=document.querySelector(".second_number").value 

    switch(value){
        case "+":
            return Number(firstValue)+Number(secondValue)
            
        case "-":
            return firstValue-secondValue
            
        case "÷":
            return firstValue/secondValue
            
        case "*":
            return firstValue*secondValue
            
        case "%":
            return firstValue%secondValue
            
    }   
    
}

function clickFunction(value){

    let result = '';
    
    if(value.target.textContent!=="=" && value.target.textContent!=="CLEAR"){
        operation=value.target.textContent
    }    

    switch(value.target.textContent){
        case "=":
            result=callResult(operation)
            break;
        case "CLEAR":
            result=""
            document.querySelector(".second_number").value=0
            document.querySelector(".first_number").value=0
            break;
    }
        document.querySelector(".result").innerHTML=result
}