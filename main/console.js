let x= Math.floor(Math.random() * 255 + 1);
let y= Math.floor(Math.random() * 255 + 1);
let z= Math.floor(Math.random() * 255 + 1);

let a= Math.floor(Math.random() * 255 + 1);
let b= Math.floor(Math.random() * 255 + 1);
let c= Math.floor(Math.random() * 255 + 1);

let d= Math.floor(Math.random() * 255 + 1);
let e= Math.floor(Math.random() * 255 + 1);
let f= Math.floor(Math.random() * 255 + 1);

let g= Math.floor(Math.random() * 255 + 1);
let h= Math.floor(Math.random() * 255 + 1);
let i= Math.floor(Math.random() * 255 + 1);

let j= Math.floor(Math.random() * 255 + 1);
let k= Math.floor(Math.random() * 255 + 1);
let l= Math.floor(Math.random() * 255 + 1);

let m= Math.floor(Math.random() * 255 + 1);
let n= Math.floor(Math.random() * 255 + 1);
let o= Math.floor(Math.random() * 255 + 1);


document.getElementById("R").innerHTML = x;

document.getElementById("G").innerHTML = y;

document.getElementById("B").innerHTML = z;

code0=[x,y,z];
code1=[a,b,c];
code2=[d,e,f];
code3=[g,h,i];
code4=[j,k,l];
code5=[m,n,o];

code=[code0,code1,code2,code3,code4,code5];

// Shuffle array
const shuffled1 = code.sort(() => 0.5 - Math.random());

console.log(code);

c1= shuffled1.shift();
c2= shuffled1.shift();
c3= shuffled1.shift();
c4= shuffled1.shift();
c5= shuffled1.shift();
c6= shuffled1.shift();

let ans=[c1,c2,c3,c4,c5,c6];

let correct;

for(let i=0; i<6;i++){
    if (ans[i]==code0){
        correct=i;

    }
}

console.log(correct)


array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);




document.getElementById("btn1").addEventListener("click", f1);

function f1() {
    if(c1==code0){
        console.log("correct answer");
        document.getElementById("eb").innerHTML = "Correct Answer";
        c2=code0;
        c3=code0;
        c4=code0;
        c5=code0;
        c6=code0;
        //copypastastarts
        
array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);
        //copypastaends
        var r = document.querySelector(':root');
        r.style.setProperty('--cb1', abc);
    }
    else{
        c1=[43, 43, 43];
        array1=["rgb","(",c1,")"];

    let abc=array1.join("");

    console.log(abc);

    var r = document.querySelector(':root');

    r.style.setProperty('--blue', abc);
    console.log("Try Again");
    document.getElementById("eb").innerHTML = "Try Again";

    }
  }




  document.getElementById("btn2").addEventListener("click", f2);

  function f2() {
      if(c2==code0){
          console.log("correct answer");
          document.getElementById("eb").innerHTML = "Correct Answer";
        c1=code0;
        c3=code0;
        c4=code0;
        c5=code0;
        c6=code0;
        //copypastastarts
        
array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);
        //copypastaends
        var r = document.querySelector(':root');
        r.style.setProperty('--cb1', abc);
      }
      else{
        c2=[43, 43, 43];
        array2=["rgb","(",c2,")"];

    let cl2=array2.join("");

    console.log(cl2);

    var r = document.querySelector(':root');

    r.style.setProperty('--cell2', cl2);
    console.log("Try Again");
    document.getElementById("eb").innerHTML = "Try Again";
      }

    }




    document.getElementById("btn3").addEventListener("click", f3);

function f3() {
    if(c3==code0){
        console.log("correct answer");
        document.getElementById("eb").innerHTML = "Correct Answer";
        c2=code0;
        c1=code0;
        c4=code0;
        c5=code0;
        c6=code0;
        //copypastastarts
        
array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);
        //copypastaends
        var r = document.querySelector(':root');
        r.style.setProperty('--cb1', abc);
    }
    else{
        c3=[43, 43, 43];
        array3=["rgb","(",c3,")"];

    let cl3=array3.join("");

    console.log(cl3);

    var r = document.querySelector(':root');

    r.style.setProperty('--cell3', cl3);
    console.log("Try Again");
    document.getElementById("eb").innerHTML = "Try Again";
      }

  }





  document.getElementById("btn4").addEventListener("click", f4);

function f4() {
    if(c4==code0){
        console.log("correct answer");
        document.getElementById("eb").innerHTML = "Correct Answer";
        c2=code0;
        c3=code0;
        c1=code0;
        c5=code0;
        c6=code0;
        //copypastastarts
        
array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);
        //copypastaends
        var r = document.querySelector(':root');
        r.style.setProperty('--cb1', abc);
    }
    else{
        c4=[43, 43, 43];
        array4=["rgb","(",c4,")"];
    
    let cl4=array4.join("");
    
    console.log(cl4);
    
    var r = document.querySelector(':root');
    
    r.style.setProperty('--cell4', cl4);
    console.log("Try Again");
    document.getElementById("eb").innerHTML = "Try Again";
      }
  }





  document.getElementById("btn5").addEventListener("click", f5);

function f5() {
    if(c5==code0){
        console.log("correct answer");
        document.getElementById("eb").innerHTML = "Correct Answer";
        c2=code0;
        c3=code0;
        c4=code0;
        c1=code0;
        c6=code0;
        //copypastastarts
        
array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);
        //copypastaends
        var r = document.querySelector(':root');
        r.style.setProperty('--cb1', abc);
    }
    else{
        c5=[43, 43, 43];
        array5=["rgb","(",c5,")"];

    let cl5=array5.join("");

    console.log(cl5);

    var r = document.querySelector(':root');

    r.style.setProperty('--cell5', cl5);
    console.log("Try Again");
    document.getElementById("eb").innerHTML = "Try Again";
      }

  }



  document.getElementById("btn6").addEventListener("click", f6);

function f6() {
    if(c6==code0){
        console.log("correct answer");
        document.getElementById("eb").innerHTML = "Correct Answer";
        c2=code0;
        c3=code0;
        c4=code0;
        c5=code0;
        c1=code0;
        //copypastastarts
        
array1=["rgb","(",c1,")"];

let abc=array1.join("");

console.log(abc);

var r = document.querySelector(':root');

r.style.setProperty('--blue', abc);




array2=["rgb","(",c2,")"];

let cl2=array2.join("");

console.log(cl2);

var r = document.querySelector(':root');

r.style.setProperty('--cell2', cl2);




array3=["rgb","(",c3,")"];

let cl3=array3.join("");

console.log(cl3);

var r = document.querySelector(':root');

r.style.setProperty('--cell3', cl3);




array4=["rgb","(",c4,")"];

let cl4=array4.join("");

console.log(cl4);

var r = document.querySelector(':root');

r.style.setProperty('--cell4', cl4);




array5=["rgb","(",c5,")"];

let cl5=array5.join("");

console.log(cl5);

var r = document.querySelector(':root');

r.style.setProperty('--cell5', cl5);




array6=["rgb","(",c6,")"];

let cl6=array6.join("");

console.log(cl6);

var r = document.querySelector(':root');

r.style.setProperty('--cell6', cl6);
        //copypastaends
        var r = document.querySelector(':root');
        r.style.setProperty('--cb1', abc);
    }
    else{
        c6=[43, 43, 43];
        array2=["rgb","(",c6,")"];

    let cl6=array2.join("");

    console.log(cl6);

    var r = document.querySelector(':root');

    r.style.setProperty('--cell6', cl6);
    console.log("Try Again");
    document.getElementById("eb").innerHTML = "Try Again";
      }

  }




