const inputVal= document.querySelector("#inputBox");
const showValue= document.querySelector("#showValue");

inputVal.addEventListener("keyup",filterFunction);
let value=inputVal.value
 async function filterFunction()
{

    let show=[]
   const fetchval= await fetch("data.json")
   const data = await fetchval.json()
   const inpval= inputVal.value.trim();
if(inpval.length){
    show=data.filter(val=>{
    const dataVal=val.search;
    return dataVal.toLowerCase().includes(inpval.toLowerCase())
       
   })
}
console.log(show)
   display(show)
   if(!show.length)
   {
       showValue.innerHTML=" "
   }

}

function display(data)
{ 
    let finalData=data.map(val=>{
      return `<li onclick="setInput('${val.search}')">${highLight(val.search)}</li>`
    })
    let ul= `<ul>${finalData.join("")}</ul>`
    showValue.innerHTML=ul
}


function setInput(data){
    inputVal.value=data;
    showValue.innerHTML=" "
}

function highLight(data){
    let inputtext=inputVal.value.toLowerCase();
    let text=data.toLowerCase()
    let endIndex= text.indexOf(inputtext);
    console.log(endIndex)
    let highlighted=data.substring(0,endIndex)+ `<mark>${inputtext}</mark>` + data.substring(endIndex+inputtext.length)
    console.log(data.substring(0,endIndex))
    console.log(highlighted)
    console.log(data.substring(endIndex+inputtext.length))
    return highlighted 

}