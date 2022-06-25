function Find(N,arr){
    var count=1;
    for(var i=0;i<N;i++){
       if(arr[i]>arr[i+1]){
           count++
       } 
    }
    console.log(count)
}


Find(8,[1,2,3,4,5,9,8,7])