// You can use this algorithm to find out if any element of array is in majority(more than half or not)
const findCandidate = (array) => {
    let majority_index = 0;
    let count = 1;

    for (let i = 0; i < array.length; i++){
        if (array[majority_index] == array[i]){
            count++;
        } else {
            count--;
        }
        if (count == 0){
            majority_index = i;
            count = 1;
        }
    }
    return array[majority_index]
}

const checkMajority = (array) => {
    const candidate = findCandidate(array);
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] = candidate){
            count++;
        }
    }
    if(count >= array.length / 2){
        return candidate;
    }
    return -1;
}

console.log(checkMajority([1,1,1,1,1,9,7,5]))