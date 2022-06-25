function runningSum(N,arr){
    //write code here
   var store=[];
   var bag=0;
   for(i=0;i<N;i++){
       bag=bag+arr[i]
        store.push(bag)
   }
     console.log(store.join(" "))
    
}

runningSum(5,[1,2,3,4,5])