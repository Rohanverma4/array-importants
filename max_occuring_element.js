function maximumOccuringElement(A,N){
    var max=0;
    var store="";
    
    for(i=0;i<N;i++){
        var counter=0;
        
        for(j=0;j<N;j++){
            if(A[i]==A[j]){
                counter++;
            }
        }
        
        if(max<counter){
            max=counter;
            store=(A[i]);
        }
    }
    console.log(store);
  }



  maximumOccuringElement([8,1,2,8,1,5],6)