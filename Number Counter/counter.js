
// let heading = document.querySelector("h1");

// let btn1 = document.querySelector(".increament")
// let btn2 = document.querySelector(".decreament")
// let count =  parseInt(heading.innerText) ;
// const increament = function (){
// btn1.addEventListener("click" , function(){
   
//       count += 1 ;
//       heading.innerText = count ; 
// })
// }

// const decreament = function (){
// btn2.addEventListener("click" , function(){
//     count -= 1 ;
//     heading.innerText = count ; 
// })
// }

// increament();
// decreament();


let heading = document.querySelector("h1");

let btn1 = document.querySelector(".increament");
let btn2 = document.querySelector(".decreament");

let count =0 ; 

const increament = function () {
    btn1.addEventListener("click", function() {
        count += 1;
        heading.innerText = count; 
    });
}

const decreament = function () {
    btn2.addEventListener("click", function() {
        count -= 1;
        heading.innerText = count; 
    });
}





increament();
decreament();