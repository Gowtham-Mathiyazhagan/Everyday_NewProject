const d=document.querySelectorAll(".day>span");
const h=document.querySelectorAll(".h")
const m=document.querySelectorAll(".m")
console.log(m)
const s=document.querySelectorAll(".s")
const date=document.querySelectorAll(".date")[0]
const month=document.querySelectorAll(".month>span")
const meridian=document.querySelectorAll(".meridian>span")


function time(){
    let time=new Date
    let day=time.getDay()
  d[day].classList.add("active")
  let getMonth=time.getMonth()
  month[getMonth].classList.add("active")
  let da=time.getDate()
  let year=time.getFullYear()
  date.innerHTML=`${da}.${getMonth+1}.${year}`

  let hrs=time.getHours()
  let min=time.getMinutes()
  let sec=time.getSeconds()

  if(hrs>12)
  {
    hrs=hrs-12
    meridian[1].classList.add("active")
  }
  else if(hrs==0)
  {
    hrs=12;
    meridian[0].classList.add("active")
  }

  hrs= hrs<10 ? "0"+hrs : hrs
  min= min<10 ? "0"+min : min
  sec= sec<10 ? "0"+sec : sec

 hrs= hrs.toString()
min=min.toString()
 sec=sec.toString()

 h[0].innerHTML=hrs[0]
 h[1].innerHTML=hrs[1]

 m[0].innerHTML=min[0]
 m[1].innerHTML=min[1]
 
 s[0].innerHTML=sec[0]
 s[1].innerHTML=sec[1]


}
setInterval(time,1000)