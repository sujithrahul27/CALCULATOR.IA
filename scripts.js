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
let flag = 0;
let digit = [false,false,false,false,false,false,false,false,false,false]

let display = document.getElementById("displaytext");
function clicked1(){
  if(digit[0]==false){
    display.innerText=1;
    digit[0] = true;
  }
  else{
    display.innerText+=1;
  }
   
}
function clicked2(){
    
}
function clicked3(){
    
}
function clicked4(){
    
}
function clicked5(){
    
}
function clicked6(){
    
}
function clicked7(){
    
}
function clicked8(){
    
}
function clicked9(){
    console.log("clicked 9");
}
function clickedplus(){
    console.log(digit," "+flag);
    if(digit<=flag){
        display.innerText="SYNTAX ERROR"
    }
    else{
        display.innerText+="+";
        flag++;
    }
}
function clickedminus(){
    
}
function clickedmultiply(){
    
}
function clickeddivide(){
    
}
function clickedmodulo(){
    
}
function clickedfloor(){
    
}
function clickedequal(){
    if(digit>1&&flag!=0){
        var result = eval(display.innerText);
        display.innerText=result;

    }
    else{
        display.innerText="SYNTAX ERROR";
    }
}
function clickedreset(){
    digit=0;
    a=0;
    b=1;
    flag=0;
    display.innerText="HELLO :)"
}