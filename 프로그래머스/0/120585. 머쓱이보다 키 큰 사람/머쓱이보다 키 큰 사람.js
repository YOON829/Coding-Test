//줄서는거 for문 돌리면될듯
// reduce도 될듯..?

function solution(array, height) {
     let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
            count++;
        }
    }
    
    return count;
}

function solution(array, height) {
    return array.reduce((count, currentValue) => {
        if (currentValue > height) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);
}