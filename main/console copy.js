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


code=[code0,code1,code2];

// Shuffle array
const shuffled1 = code.sort(() => 0.5 - Math.random());

console.log(code);

c1= shuffled1.shift();
c2= shuffled1.shift();
c3= shuffled1.shift();


let ans=[c1,c2,c3];

let correct;

for(let i=0; i<3;i++){
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



document.getElementById("btn1").addEventListener("click", f1);

function f1() {
    if(c1==code0){
        console.log("correct answer");
        document.getElementById("eb").innerHTML = "Correct Answer";
        c2=code0;
        c3=code0;
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







