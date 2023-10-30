window.addEventListener("DOMContentLoaded", function(){
    const container=document.querySelector(".container")
    const header=document.querySelector(".header")
    const menutitle=document.querySelectorAll(".header>div")
    const body=document.querySelector(".body");
    const bodyEle=container.querySelectorAll(".body > div")
    const intersection=container.querySelector(".intersection > div")
    menutitle.forEach((value,index)=>{
        value.addEventListener("click",function(){
             let remove= header.querySelector(".active")
             remove.classList.remove("active")
              value.classList.add("active")
              intersection.style.left=`${index * 25}%`
              body.querySelector(".active").classList.remove("active")
              bodyEle[index].classList.add("active")
        })
    })
})