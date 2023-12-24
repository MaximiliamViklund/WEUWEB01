let tal_1=document.querySelector("#tal1");
let tal_2=document.querySelector("#tal2");


function plus(){
    let svar_element=document.querySelector("#svaret");
    let svar=parseInt(tal_1.value)+parseInt(tal_2.value);
    svar_element.textContent=svar;
    console.log(parseInt(tal_1.value)+parseInt(tal_2.value));
}
function minus(){
    let svar_element=document.querySelector("#svaret");
    let svar=tal_1.value-tal_2.value;
    svar_element.textContent=svar;
    console.log(tal_1.value-tal_2.value);
}
function gånger(){
    let svar_element=document.querySelector("#svaret");
    let svar=tal_1.value*tal_2.value;
    svar_element.textContent=svar;
    console.log(tal_1.value*tal_2.value);
}
function dela(){
    let svar_element=document.querySelector("#svaret");
    let svar=tal_1.value/tal_2.value;
    svar_element.textContent=svar;
    console.log(tal_1.value/tal_2.value);
}