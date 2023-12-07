let rubrik=document.querySelector("h1");
rubrik.textContent="Javascript it is";

let p=document.querySelector("p");
p.textContent="Text has changed due to JavaScript";

let text=document.querySelector(".text");
text.style.border="4px solid black";
text.style.marginLeft="10vw";
text.style.marginRight="10vw";

rubrik.classList.add('xtra');

document.body.style.backgroundColor="#e9dd99";

let listan=document.querySelector("ul");
let li1=document.createElement("li");
li1.textContent="Lära javascript syntax";
listan.appendChild(li1);

let li2=document.createElement("li");
li2.textContent="Lära document objektet";
listan.appendChild(li2);

listan.style.display="flex";
listan.style.flexDirection="column";
listan.style.alignItems="center";

let li_array=document.querySelectorAll("li");
for(let i=0; i<li_array.length; i++){
    li_array[i].style.fontWeight="bold";
}