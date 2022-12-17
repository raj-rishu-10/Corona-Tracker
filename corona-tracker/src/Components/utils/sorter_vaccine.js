export const sorter_vaccine = (item)=>{
  let sortedList = item.sort((a,b)=>{
    if(a.data>b.data){
      return -1
    }
    else{
      return 1;
    }
  })
  return sortedList;
}