const clock=document.getElementsByClassName("clock")[0];
const startBtn=document.getElementsByClassName("strbtn")[0];
const stopBtn=document.getElementsByClassName("stpbtn")[0];
const resetBtn=document.getElementsByClassName("resbtn")[0];

let hr=min=sec=ms=0,setTime;
let action=false;
startBtn.addEventListener("click",function(){
   if(!action){
    startBtn.classList.add("active")
    stopBtn.classList.remove("active")
    clock.classList.add("animation") 
    setTime=setInterval(()=>{
        ms++;
        if(ms===100){
           sec++
           ms=0
        }
         else if(sec===60)
         {
            min++
            sec=0;
         }
         else if(min===60)
         {
            hr++
            min=0
         }
    TimeDisplay()
    },10)   
   action=true;
   }
})

stopBtn.addEventListener("click",function(){
   if(action){
    startBtn.classList.remove("active")
    stopBtn.classList.add("active")
    clock.classList.remove("animation") 
    clearInterval(setTime)
    TimeDisplay()
    action=false;
   }
})
resetBtn.addEventListener("click",function(){
    hr=min=sec=ms=0
    startBtn.classList.remove("active")
    stopBtn.classList.remove("active")
    clock.classList.remove("animation") 
    clearInterval(setTime)
    TimeDisplay()
    action=false
})

function TimeDisplay(){
   phr=hr<10?"0"+hr:hr
   pmin=min<10?"0"+min:min
   psec=sec<10?"0"+sec:sec
   pms=ms<10?"0"+ms:ms

   phr=phr.toString()
   pmin=pmin.toString()
   psec=psec.toString()
   pms=pms.toString()

   document.getElementsByClassName("hrs")[0].innerText=phr[0]
   document.getElementsByClassName("hrs")[1].innerText=phr[1]
   document.getElementsByClassName("mins")[0].innerText=pmin[0]
   document.getElementsByClassName("mins")[1].innerText=pmin[1]
   document.getElementsByClassName("secs")[0].innerText=psec[0]
   document.getElementsByClassName("secs")[1].innerText=psec[1]
   document.getElementsByClassName("ms")[0].innerText=pms[0]
   document.getElementsByClassName("ms")[1].innerText=pms[1]

}
