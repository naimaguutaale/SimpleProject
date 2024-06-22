

let light=document.querySelector("#light")
let btnOff=document.querySelector("#Offbtn")
let btnOn=document.querySelector("#onbtn")
btnOn.addEventListener("click", function(){
    light.style.backgroundColor="yellow"
})

btnOff.addEventListener("click", function(){
    light.style.backgroundColor="white"
})

