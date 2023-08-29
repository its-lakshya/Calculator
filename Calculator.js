let zero=document.querySelector("#zero");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let point=document.querySelector("#point");
let clear=document.querySelector("#clear")
let backspace=document.querySelector("#backspace")
let Screen=document.querySelector("#screen");
let answer=document.querySelector("#answer");
let underroot=document.querySelector("#underroot");
let modulus=document.querySelector("#modulus");
let division=document.querySelector("#division");
let multiplication=document.querySelector("#multiplication");
let substraction=document.querySelector("#substraction");
let addition=document.querySelector("#addition");
let equalsto=document.querySelector("#equalsto");
function CopyToScreen(value)  {
    // Screen.innerHTML=value
    let x=document.createElement("span")
    x.innerHTML=value;
    Screen.appendChild(x)
}
function ClearAll(value)  {
    Screen.innerHTML=value
    answer.innerHTML=value
}
function Backspace() {
    let text=Screen.innerText
    
    let newScreen= text.substring(0,text.length-1)
    Screen.innerText=newScreen
}
function Evaluate(e) {
    e.preventDefault()
    let evaluation=Screen.innerText
    answer.innerText=eval(evaluation)
}
zero.addEventListener("click",function() {
    CopyToScreen("0")
})
one.addEventListener("click",function() {
    CopyToScreen("1")
})
two.addEventListener("click",function() {
    CopyToScreen("2")
})
three.addEventListener("click",function() {
    CopyToScreen("3")
})
four.addEventListener("click",function() {
    CopyToScreen("4")
})
five.addEventListener("click",function() {
    CopyToScreen("5")
})
six.addEventListener("click",function() {
    CopyToScreen("6")
})
seven.addEventListener("click",function() {
    CopyToScreen("7")
})
eight.addEventListener("click",function() {
    CopyToScreen("8")
})
nine.addEventListener("click",function() {
    CopyToScreen("9")
})
point.addEventListener("click",function() {
    CopyToScreen(".")
})
modulus.addEventListener("click",function() {
    CopyToScreen(" % ")
})
division.addEventListener("click",function() {
    CopyToScreen(" / ")
})
multiplication.addEventListener("click",function() {
    CopyToScreen("*")
})
substraction.addEventListener("click",function() {
    CopyToScreen(" - ")
})
addition.addEventListener("click",function() {
    CopyToScreen(" + ")
})
equalsto.addEventListener("click", Evaluate)
    // equalsto.addEventListener("click",function() {
    //     CopyToScreen(" = ")
    // },{once:true})
clear.addEventListener("click",function() {
    ClearAll("")
    window.location.reload()
})
backspace.addEventListener("click",function() {
    Backspace()
})

//-------------------------- keyboard events --------------------------------

let Keyevent = (e) => {
    e.preventDefault()
    if(e.key==0 ||e.key==1 || e.key==2 || e.key==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key==8 || e.key==9){
        let store=document.createElement("span")
        store.innerText=e.key
        Screen.appendChild(store)
    }
    // Screen.innerHTML=e.key
    else if (e.keyCode===13 ){
        Evaluate(e)
    }
    else if(e.keyCode===106){
        let store=document.createElement("span")
        store.innerText=" * "
        Screen.appendChild(store)
    }
    else if(e.keyCode===107){
        let store=document.createElement("span")
        store.innerText=" + "
        Screen.appendChild(store)
    }
    else if(e.keyCode===109){
        let store=document.createElement("span")
        store.innerText=" - "
        Screen.appendChild(store)
    }
    else if(e.keyCode===110){
        let store=document.createElement("span")
        store.innerText=" . "
        Screen.appendChild(store)
    }
    else if(e.keyCode===111){
        let store=document.createElement("span")
        store.innerText=" / "
        Screen.appendChild(store)
    }
    else if(e.keyCode===16 && e.keycode==53){
        let store=document.createElement("span")
        store.innerText=" % "
        Screen.appendChild(store)
    }
    else if(e.keyCode===8){
        Backspace()
    }
    else if(e.keyCode===46){
        ClearAll("")
        window.location.reload()
    }
}
window.addEventListener("keydown" , Keyevent )

