let _1 = Number(document.getElementById("1").innerText);
let _2 = Number(document.getElementById("1").innerText);
let _3 = Number(document.getElementById("1").innerText);
let _4 = Number(document.getElementById("1").innerText);
let _5 = Number(document.getElementById("1").innerText);
let _6 = Number(document.getElementById("1").innerText);
let _7 = Number(document.getElementById("1").innerText);
let _8 = Number(document.getElementById("1").innerText);
let _9 = Number(document.getElementById("1").innerText);
let _plus = Number(document.getElementById("1").innerText);
let _minus = Number(document.getElementById("1").innerText);
let _multiply = Number(document.getElementById("1").innerText);
let __divide = Number(document.getElementById("1").innerText);
let _modulo = Number(document.getElementById("1").innerText);
let _floor = Number(document.getElementById("1").innerText);


let display = document.getElementById("displaytext");
function clicked1(){
 display.innerText+=1;
   
}
function clicked2(){
    display.innerText+=2;
}
function clicked3(){
    display.innerText+=3;
}
function clicked4(){
    display.innerText+=4;
}
function clicked5(){
    display.innerText+=5;
}
function clicked6(){
    display.innerText+=6;
}
function clicked7(){
    display.innerText+=7;
}
function clicked8(){
    display.innerText+=8;
}
function clicked9(){
    display.innerText+=9;
}
function clickedplus(){
   display.innerText+= '+';
}
function clickedminus(){
    display.innerText+='-';
}
function clickedmultiply(){
    display.innerText+='*';
}
function clickeddivide(){
    display.innerText+='/';
}
function clicked0(){
    display.innerText+=0;
}
function clicked00(){
    display.innerText+="00";
}
function clickedequal(){
  try{
    let result = eval(display.innerText);
    display.innerText = result;
  }
  catch(error)
  {
    display.style.color = "red";
    display.innerText="INVALID SYNTAX";
    setTimeout(()=>clickedreset(),2000);
  }
   
}
function clickedreset(){
   
    display.innerText=""
    display.style.color="white";
}