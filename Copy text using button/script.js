let nums=[5,7,7,8,8,10];
let target = 8

function searchRange(nums,target)
{
    function left(nums,target){
    let start=0;
    let end=nums.length-1
    let firstOccurrence=-1;

  while(start<=end)
  {
  let mid=start+Math.floor((end-start)/2)
 if(target===nums[mid])
  {
      firstOccurrence=mid
  }
  if(target<=nums[mid])
  {
   end=mid-1;   
  }
  else{
      start=mid+1;
  }
  }
    return firstOccurrence
    }
    function right(nums,target){
    let start=0;
    let end=nums.length-1
    let secOccurrence=-1;

  while(start<=end)
  {
  let mid=start+Math.floor((end-start)/2)
 if(target===nums[mid])
  {
      secOccurrence=mid
  }
  if(target>=nums[mid])
  {
   start=mid+1;   
  }
  else{
      end=mid-1;
  }
  }
    return secOccurrence
    }

    let leftside= left(nums,target)
let rightside= right(nums,target)
// return [leftside,rightside]
if(!leftside==-1 && !rightside==-1)
{
    return [leftside,rightside]
}
else{
    return [-1,-1]
}

}
console.log(searchRange(nums,target))

