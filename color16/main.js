
// for(let i = 0 ; i<16 ;i++){
//     let box = document.createElement('div');
//     box.className = "smallBox"
//     document.getElementById('box').append(box)
// } 
//  const divs = document.qu('.smallBox')erySelectorAll
// console.log(divs)

// function randomNumber() {
//     return Math.floor(Math.random() * 256)
// } 

// function randomColor(){
//     return 'rgb('+randomNumber()+','+randomNumber()+','+randomNumber()+')';
// }
//  for(let i = 0;i<divs.length;i++) {
//      divs[i].onclick = function (e) {
//          e.target.style.backgroundColor = randomColor()
         
//      }
//  }
// this code is written by me 
for(let i=0;i<16;i++){
    let box = document.createElement("div");
    document.getElementById("box").appendChild(box);
    box.className = "innerBox";
}

 for(let i=1;i<=16;i++) {
    let box = document.getElementById("box");
    box.childNodes[i].onclick = function(e) {
        let ranColor = randomColor();
        box.childNodes[i].style.backgroundColor = ranColor ;
        document.querySelector("body").style.backgroundColor = ranColor;

    }
 }
let randomNum = () => {
    return Math.floor(Math.random()*255+1);
}
let randomColor = () => {
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

