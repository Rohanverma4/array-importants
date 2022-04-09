const minAbsSumPair = (array) => {
    array.sort((a,b) => {
        return a - b;
    })

    let sum;
    let min_sum = 999;

    let left_index = 0;
    let right_index = array.length - 1;

    let min_left = 0;
    let  min_right = array.length - 1;
    if (array.length < 2){
        console.log("Invalid")
        return;
    }

    while(left_index < right_index){
        sum = array[left_index] + array[right_index];
        if (Math.abs(sum) < Math.abs(min_sum)){
            min_sum = sum;
            min_left = left_index;
            min_right = right_index;
        }
        if(sum < 0){
            left_index++;
        } else {
            right_index--;
        }
    }
    console.log(min_sum)
}

minAbsSumPair([2,-8,80,16,10])