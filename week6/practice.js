const myp1=document.getElementById("h1")
alert(myp1.innertext)
myp1.style.color="red"
myp1.innerText="I am over"
const mybtn=document.getElementById("btn")
mybtn.innerText="Changed"

function sayHi(){
    alert("hello")
}
mybtn.onclick=sayHi;