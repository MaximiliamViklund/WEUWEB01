let rubriken=document.querySelector("#rubrik");
let bg_index=0;
let h1_element=document.querySelector("h1");
let skiv_index=0;
const färger=["Tomato","Orange","Blue","Green","SlateBlue","Violet","White"];
const skivor=["album1.webp","album2.webp","album3.webp","album4.webp","album5.webp"];

function klickad(){
    let text_fält=document.querySelector("#text_fält");
    const text=rubriken.textContent;
    rubriken.textContent=text_fält.value;
    console.log(rubriken.textContent);
    console.log("rubrikens text: "+text);
    text_fält.value="";
    text_fält.focus();
}

function change_bg(){
    console.log("change_bg färger[bg_index]:", färger[bg_index])
    if(bg_index>=färger.length){
        bg_index=0;
    }
    document.body.style.backgroundColor=färger[bg_index];
    bg_index++;
}

function ny_text(){
    console.log("ny_text");
    let text_element=document.createElement("p");
    let p_element=document.querySelector("#ny_text");
    let diven=document.querySelector(".diven");
    text_element.textContent=p_element.value;
    console.log("text_element: "+text_element.textContent);
    p_element.value="";
    p_element.focus();
    diven.appendChild(text_element);
    text_element.classList.add("text_stil");
}

function reset(){
    let lista_p=document.querySelectorAll("p");
    console.log("Antal element "+lista_p.length);
    for(let i=0;i<lista_p.length;i++){
        console.log("p_element "+i+" har text "+lista_p[i].textContent);
        lista_p[i].classList.toggle("text_stil");
    }
}

function byt_skiva(){
    let img_element=document.querySelector("img");
    if(skiv_index>=skivor.length){
        skiv_index=0;
    }
    let ny_sökväg="./imgs/"+skivor[skiv_index];
    img_element.setAttribute("src", ny_sökväg);
    skiv_index++;
}

function byt_font_knappar(font){
    let knappar=document.querySelectorAll("button");
    for(let i=0;i<knappar.length;i++){
        knappar[i].style.fontFamily=font;
    }
}