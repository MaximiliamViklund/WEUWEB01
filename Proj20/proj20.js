const MAX=5;
let count=0;
const ul=document.querySelector("ul");
const ul=document.querySelector("ul");

function choose(typ,str,int,dex){
    if(count<MAX){
        let li=document.createElement("li");
        li.textContent=typ+" Strength: "+str+" Dexterity: "+dex+" Intelligence: "+int;
        ul.appendChild(li);
        count++;
        
        let fält=[];
        let json=window.localStorage.getItem("key");
        if(json){
            fält=JSON.parse(json); 
        }
        let obj={
            type: typ,
            strength: str,
            dexterity: dex,
            intelligence: int
        }
        fält.push(obj);
        json=JSON.stringify(fält);
        window.localStorage.setItem("key", json);
    }
}