// 배열안에 있는 큰수를 인덱스순서까지에?


function solution(array) {
    let maxIndex = 0; 
    let maxValue = array[0]; 
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
            maxIndex = i;
        }
    }
        return [maxValue,maxIndex] ;

}