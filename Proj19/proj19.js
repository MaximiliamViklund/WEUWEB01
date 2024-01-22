// . for class
// # for ID

let index=0;
const skivor=["album1.jpg","album2.jpg","album3.jpg","album4.jpg","album5.jpg","album6.jpg","album7.jpg","album8.jpg","album9.jpg"];
let img=[];

const sökväg="./img/";
img.push=sökväg+skivor[index];
img.push=sökväg+skivor[index+1];
img.push=sökväg+skivor[index+2];
let img1=document.querySelector("#img1");
let img2=document.querySelector("#img2");
let img3=document.querySelector("#img3");
img1.setAttribute("src", img[0]);
img2.setAttribute("src", img[1]);
img3.setAttribute("src", img[2]);

function vänster(){
    if(index<=skivor.length-2){ index++; }  }
