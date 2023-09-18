
document.querySelector("#rd-start").addEventListener("click",()=>{
    document.querySelector("#rd-pay").classList.remove("selected")
    document.querySelector("#rd-start").classList.add("selected")
    document.querySelector("#ord-list").classList.remove("left-cnt-order-list"+"hidden")
    document.querySelector(".left-cnt-lgn").classList.remove("hidden")  
    document.querySelector(".left-cnt-wrt").classList.remove("hidden")
    document.querySelector(".left-cnt-wrt").classList.add("hidden")
    document.querySelector("#ord-list").classList.add("hidden")   
    
})
document.querySelector("#rd-pay").addEventListener("click",()=>{
    document.querySelector("#rd-start").classList.remove("selected")
    document.querySelector("#rd-pay").classList.add("selected")
    document.querySelector("#ord-list").classList.remove("hidden")
    document.querySelector(".left-cnt-lgn").classList.add("hidden")  
    document.querySelector(".left-cnt-wrt").classList.add("hidden") 
    document.querySelector("#left-slider").classList.add("hidden")
    document.querySelector(".order-options").classList.add("revers")     
})

function showing() {
    document.querySelector(".left-cnt-lgn").classList.remove("hidden")
    document.querySelector(".left-cnt-wrt").classList.add("hidden")
    document.querySelector("#order-pic").classList.add("huge")  
}