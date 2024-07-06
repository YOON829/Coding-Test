function solution(array) {
    array.sort((a, b) => a - b);
    
    const midIndex = Math.floor(array.length / 2);
    
    if (array.length % 2 === 1) {
        return array[midIndex];
    } else { 
        return array[midIndex - 1];
    }
}