const clock = document.getElementsByClassName("clock")[0];

function runtime(){
  let time= new Date
  let hrs= time.getHours();
  let min=time.getMinutes();
  let sec=time.getSeconds();
  let meridiem="AM"
  
  if(hrs>12)
  {
    hrs=hrs-12
    meridiem="PM"
  }
  else if(hrs==0)
  {
    hrs=12;
    meridiem="AM"
  }
  hrs= hrs<10 ? '0'+hrs : hrs;
  min= min<10 ? '0'+min : min;
  sec= sec<10 ? '0'+sec : sec;

 clock.innerHTML=`${hrs} : ${min} : ${sec} ${meridiem}`
}
runtime()

setInterval(runtime,1000)